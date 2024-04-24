import { FC, ReactNode } from "react";

interface IDarkBtnProps {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}

export const CustomDarkBtn:FC<IDarkBtnProps> = ({ children, type }) => {
    return (
        <button type={type} className=" bg-hover-color px-7 py-3 rounded-3xl text-sm border-2 border-sec-color
         hover:bg-prim-color duration-300 hover:text-hover-color hover:border-inherit">{children}</button>
    )
}