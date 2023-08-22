import { MouseEventHandler, ReactElement } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  children: ReactElement | ReactElement[] | string;
}

const Button: React.FC<ButtonProps> = ({ onClick, isDisabled, children }) => {
  return (
    <button
      className={`border border-slate-400 rounded-lg px-4 py-2 text-white w-60 ${
        isDisabled ? "bg-gray-300" : "bg-blue-500"
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
