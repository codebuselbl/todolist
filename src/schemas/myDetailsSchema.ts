import { z } from "zod";

export interface IFormInput {
  phone: number;
  email: string;
  name: string;
}

const phoneValidation = new RegExp(
  /^(?:(?:\+55|55|0)?[1-9][0-9]? ?)?(?:9[0-9]{4}|[2-9][0-9]{3}) ?[0-9]{4}$/
);

export const myDetailsSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Introduce un email valido"),
  phone: z
    .string()
    .min(9, "Introduce un numero de teléfono valido")
    .max(9, "Introduce un numero de teléfono valido")
    .regex(phoneValidation, { message: "invalid phone" }),
});
export type FormData = z.infer<typeof myDetailsSchema>;
