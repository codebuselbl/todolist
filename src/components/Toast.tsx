import { useEffect } from "react";

interface IToast {
  message: string;
  onClose: () => void;
  status: "Success" | "Error" | undefined;
}

export const Toast = ({ message, onClose, status }: IToast) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [onClose]);
  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full ${
        status === "Success" ? "bg-[#639605]" : "bg-red-600"
      }  text-white p-3 rounded shadow-lg z-50`}
    >
      {message}
    </div>
  );
};
