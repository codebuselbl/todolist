import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  Path,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { Input } from "./Input";

export interface InputField<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  validation?: RegisterOptions;
}
interface FormProps<T extends FieldValues> {
  fields: InputField<T>[];
  schema: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
}
export const Form = <T extends FieldValues>({
  fields,
  schema,
  onSubmit,
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <Input
            id={field.name.toString()}
            type={field.type}
            register={register}
            name={field.name}
            errors={errors}
            label={field.label}
          />
        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-[#639605] w-full text-white rounded"
      >
        Enviar
      </button>
    </form>
  );
};
