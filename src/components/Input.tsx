import {
  FieldError,
  FieldErrors,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IInput<T> {
  id: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  label: string;
}

interface CustomFieldError extends FieldError {
  message: string;
}

export const Input = <T,>({
  id,
  type,
  register,
  name,
  errors,
  label,
}: IInput<T>) => {
  const errorMessage = (errors[name] as CustomFieldError)
    ? (errors[name] as FieldError).message
    : "";

  return (
    <>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        {...register(name)}
        className={`mt-1 block w-full p-2 border ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={label}
      />
      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </>
  );
};
