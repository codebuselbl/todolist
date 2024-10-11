import Icon from "./Icon";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-[62px] border-2 px-4 w-full">
      <div className="flex items-center space-x-4">
        <button className="flex-shrink-0">
          <Icon name="burguer" size={24} color="black" />
        </button>
        <button className="flex-shrink-0">
          <Icon name="search" size={24} color="black" />
        </button>
      </div>
      <div className="flex-grow flex justify-start sm:justify-center">
        <Icon name="logo" className="w-[184px] h-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex-shrink-0">
          <Icon name="login" size={23} color="black" />
        </button>
        <button className="flex-shrink-0">
          <Icon name="cart" size={22} color="black" />
        </button>
      </div>
    </header>
  );
};
