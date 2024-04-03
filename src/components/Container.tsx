import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const Container:FC<Props> = ({children}) => {
    return (
        <div className=" container mx-auto p-8">{children}</div>
    )
}