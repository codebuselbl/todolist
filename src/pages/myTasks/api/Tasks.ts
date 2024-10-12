import { Task, TasksResponse } from "../types/typesTask";

export const fetchTasks = async (limit: number): Promise<TasksResponse> => {
  const response = await fetch(`https://dummyjson.com/todos?limit=${limit}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const addTask = async (taskData: {
  todo: string;
  completed: boolean;
  userId: number;
}): Promise<Task> => {
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Failed to add the task");
  }

  const data = await response.json();

  return {
    id: data.id,
    todo: data.todo,
    completed: data.completed,
    userId: taskData.userId,
  };
};
export const deleteTask = async (
  taskId: number
): Promise<{ id: number; isDeleted: boolean; deletedOn: string }> => {
  const response = await fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete the task");
  }

  return response.json();
};
