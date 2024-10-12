import { SubmitHandler } from "react-hook-form";
import { Form, InputField } from "../../../components/Form";
import { FormData, myDetailsSchema } from "../../../schemas/myDetailsSchema";

export const MyDetailsForm = () => {
  const fields: InputField<FormData>[] = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Teléfono", type: "text" },
  ];

  const onSubmit: SubmitHandler<FormData> = (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log(data);
  };

  return (
    <Form fields={fields} schema={myDetailsSchema} onSubmit={onSubmit}>
      <button
        type="submit"
        className="px-4 py-2 bg-[#639605] w-full text-white rounded"
      >
        Enviar
      </button>
    </Form>
  );
};
