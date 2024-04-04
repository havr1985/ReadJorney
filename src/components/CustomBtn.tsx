import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CustomBtn: FC<Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className=" bg-prim-color text-btn-text-color text-sm font-bold w-[140px] h-[42px] rounded-[30px]"
    >
      {children}
    </button>
  );
};
