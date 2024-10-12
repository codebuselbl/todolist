import Icon from "../../../components/Icon";

interface ITodoCard {
  title: string;
  onDelete: () => void;
}
export const TodoCard = ({ title, onDelete }: ITodoCard) => {
  return (
    <div className="border-2 p-4 bg-white shadow-md mb-4 h-[93px] flex sm:flex-row">
      <div className="flex flex-col gap-1 flex-1 w-[85%]">
        <h1 className="text-[16px] text-[#333333] font-semibold leading-5 truncate">
          {title}
        </h1>
        <p className="text-[12px] text-[#777777] font-normal leading-4 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit cum quisquam aspernatur hic maiores, dolore vel culpa,
          et sequi recusandae, est pariatur nemo. Sint laudantium blanditiis
          consequatur quo totam deserunt!
        </p>
      </div>
      <div className="h-full flex items-center justify-center w-[14%]">
        <div onClick={onDelete}>
          <Icon name="paperBin" size={18} color="black" />
        </div>
      </div>
    </div>
  );
};
