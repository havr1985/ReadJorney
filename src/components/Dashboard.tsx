import { FC, ReactNode } from "react";
import { Filters } from "./Filters";
import { DashboardStatic } from "./DashboardStatic";

interface IPropsDashboard {
  children: ReactNode;
}

export const Dashboard:FC<IPropsDashboard> = ({ children }) => {
    return (
        <div>
            <div className=" bg-bg-dark rounded-2xl mt-2.5 p-5">
                <Filters />
                <DashboardStatic/>
            </div>
            {children}

        </div>

    )
}