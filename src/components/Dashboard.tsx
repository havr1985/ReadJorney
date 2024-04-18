import { FC, ReactNode } from "react";

interface IPropsDashboard {
  children: ReactNode;
}

export const Dashboard: FC<IPropsDashboard> = ({ children }) => {
  return (
    <div
      className=" bg-bg-dark rounded-2xl mt-2.5 p-5 md:mt-4
            md:flex md:h-[336px] md:justify-between xl:flex-col xl:w-[353px] xl:h-auto xl:pt-10 xl:gap-5 "
    >
      {children}
    </div>
  );
};
