import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const Container:FC<Props> = ({children}) => {
    return (
        <div className=" container mx-auto sm:p-8 md:p-8 p-2">{children}</div>
    )
}