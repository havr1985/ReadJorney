import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CustomBtn: FC<Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className=" bg-prim-color text-btn-text-color text-sm font-bold w-[140px] h-[42px] rounded-[30px]
       hover:bg-hover-color hover:text-prim-color
       md:w-[225px] md:h-[52px] md:text-xl"
    >
      {children}
    </button>
  );
};
