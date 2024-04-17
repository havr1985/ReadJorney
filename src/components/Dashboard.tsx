import { FC, ReactNode } from "react";
import { Filters } from "./Filters";
import { DashboardStatic } from "./DashboardStatic";
import { DashboardFooter } from "./DashboardFooter";

interface IPropsDashboard {
  children: ReactNode;
}

export const Dashboard: FC<IPropsDashboard> = ({ children }) => {
  return (
    <div className=" xl:flex gap-4">
      <div
        className=" bg-bg-dark rounded-2xl mt-2.5 p-5 md:mt-4
            md:flex md:h-[336px] md:justify-between xl:flex-col xl:w-[353px] xl:h-auto xl:pt-10 xl:gap-5"
      >
        <Filters />
        <DashboardStatic />
        <DashboardFooter />
      </div>
      {children}
    </div>
  );
};
