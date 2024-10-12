import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { Form, InputField } from "../../../components/Form";
import {
  FormData,
  IAddTaskForm,
  myAddTaskSchema,
} from "../../../schemas/myAddTaskSchema";
import { addTask } from "../api/Tasks";
import { Task, TasksResponse } from "../types/typesTask";

interface IMyAddTaskForm {
  setIsModalOpen: (isOpen: boolean) => void;
  setToastMessage: (message: string | null) => void;
  setToastStatus: (status: "Success" | "Error" | undefined) => void;
}

export const MyAddTaskForm = ({
  setIsModalOpen,
  setToastMessage,
  setToastStatus,
}: IMyAddTaskForm) => {
  const queryClient = useQueryClient();

  const fields: InputField<FormData>[] = [
    { name: "name", label: "Nombre", type: "text" },
    {
      name: "description",
      label: "Descripción",
      type: "text",
      isTextarea: true,
    },
  ];

  const { mutate: addTaskMutate } = useMutation<
    Task,
    Error,
    { todo: string; completed: boolean; userId: number }
  >({
    mutationFn: addTask,
    onSuccess: (newTask) => {
      queryClient.setQueryData<TasksResponse>(["tasks"], (oldData) => {
        const todos = oldData ? oldData.todos : [];
        return {
          todos: [
            ...todos,
            {
              ...newTask,
              id: todos[todos.length - 1].id + 1,
            },
          ],
          total: (oldData?.total ?? 0) + 1,
          skip: oldData?.skip !== undefined ? oldData.skip : 0,
          limit: oldData?.limit !== undefined ? oldData.limit : 3,
        };
      });
      setIsModalOpen(false);

      setToastMessage("Tarea añadida con éxito");
      setToastStatus("Success");
    },
    onError: (error) => {
      console.error("Error al añadir la tarea:", error);
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: IAddTaskForm) => {
    addTaskMutate({ todo: data.name, completed: false, userId: 1 });
  };

  return (
    <Form fields={fields} schema={myAddTaskSchema} onSubmit={onSubmit}>
      <div className="flex h-[50px] items-center">
        <button
          className="flex items-center justify-center px-4 py-2 bg-[#FFFFFF] w-full h-[20px] text-[#B3B3B3] rounded"
          onClick={() => setIsModalOpen(false)}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-[#639605]  w-full text-white rounded-lg  h-[36px]"
        >
          Guardar
        </button>
      </div>
    </Form>
  );
};
