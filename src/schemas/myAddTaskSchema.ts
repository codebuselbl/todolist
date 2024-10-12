import { z } from "zod";

export interface IAddTaskForm {
  name: string;
  description: string;
}

export const myAddTaskSchema = z.object({
  name: z.string().min(1, "El nombre de la tarea es obligatorio"),
  description: z.string().min(1, "La descripcion es obligatoria"),
});

export type FormData = z.infer<typeof myAddTaskSchema>;
