import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
    component: ReactNode,
    redirectTo: string,
}


export const PrivateRoute:FC<IProps> = ({component: Component, redirectTo=''}) => {
    const isAuth = localStorage.getItem('isAuth');

    return isAuth === 'true' ? Component : <Navigate to={redirectTo}/>
}