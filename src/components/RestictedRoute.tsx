import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectIsAuthUser } from "../redux/slices/authSlice";

interface IProps {
    component: ReactNode,
    redirectTo: string,
}

export const RestictedRoute: FC<IProps> = ({ component: Component, redirectTo = '' }) => {
    const isAuth = useAppSelector(selectIsAuthUser)

    return isAuth ? <Navigate to={redirectTo} /> : Component;
}