import { icons } from "../icons";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon = ({ name, size, color = "currentColor" }: IconProps) => {
  const SelectedIcon = icons[name];

  return (
    <div style={{ width: size, height: size, color }}>
      {SelectedIcon && SelectedIcon}
    </div>
  );
};

export default Icon;
