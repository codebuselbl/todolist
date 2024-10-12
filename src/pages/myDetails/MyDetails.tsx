import { MyDetailsForm } from "./components/MyDetailsForm";

export const MyDetails = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="mb-4 text-[20px] text-[#555555] font-bold leading-7">
        Mis datos
      </h1>
      <div className="border-2 p-4 bg-white shadow-md">
        <MyDetailsForm />
      </div>
    </div>
  );
};
