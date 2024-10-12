import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTask, fetchTasks } from "./api/Tasks";
import { TasksResponse } from "./types/typesTask";

import { Error } from "../../components/Error";
import { Loading } from "../../components/Loading";

import { useState } from "react";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";
import { MyAddTaskForm } from "./components/MyAddTaskForm";
import { TodoCard } from "./components/TodoCard";

export const MyTasks = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastStatus, setToastStatus] = useState<
    "Success" | "Error" | undefined
  >();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const limit = 3;
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<TasksResponse, Error>({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(limit),
  });

  const { mutate: deleteTaskMutate } = useMutation<
    { id: number; isDeleted: boolean; deletedOn: string },
    Error,
    number
  >({
    mutationFn: deleteTask,
    onSuccess: (data, taskId: number) => {
      if (data.isDeleted) {
        queryClient.setQueryData<TasksResponse>(["tasks"], (oldData) => {
          if (!oldData) return;

          return {
            ...oldData,
            todos: oldData.todos.filter((todo) => todo.id !== taskId),
            total: oldData.total - 1,
          };
        });

        setToastMessage("Elemento eliminado con éxito");
        setToastStatus("Success");
      } else {
        setToastMessage("Error al eliminar el elemento");
        setToastStatus("Error");
      }
    },
    onError: (error: Error) => {
      setToastMessage(error.message);
      setToastStatus("Error");
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error?.message} />;
  }

  const handleDelete = (taskId: number) => {
    deleteTaskMutate(taskId);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full p-4">
      <h1 className="mb-4 text-[20px] text-[#555555] font-bold leading-7">
        Mis tareas
      </h1>
      {todos?.todos.map((todo) => {
        return (
          <TodoCard
            title={todo.todo}
            key={todo.id}
            onDelete={() => handleDelete(todo.id)}
          />
        );
      })}
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-[#639605] w-full text-white rounded"
          onClick={handleOpen}
        >
          Añadir tarea
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-bold">Añadir Nueva Tarea</h2>
        <MyAddTaskForm
          setIsModalOpen={setIsModalOpen}
          setToastMessage={setToastMessage}
          setToastStatus={setToastStatus}
        />
      </Modal>
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
          status={toastStatus}
        />
      )}
    </div>
  );
};
