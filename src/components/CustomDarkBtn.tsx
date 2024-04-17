import { FC, ReactNode } from "react";

interface IDarkBtnProps {
  children: ReactNode;
}

export const CustomDarkBtn:FC<IDarkBtnProps> = ({ children }) => {
    return (
        <button className=" bg-hover-color px-7 py-3 rounded-3xl text-sm border-2 border-sec-color
         hover:bg-prim-color hover:text-hover-color hover:border-inherit sm:hidden md:block">{children}</button>
    )
}