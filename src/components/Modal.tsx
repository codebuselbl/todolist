interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: IModal) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full p-4 bg-white rounded-lg max-w-screen">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-9 right-6"
        >
          ✖️
        </button>
        {children}
      </div>
    </div>
  );
};
