import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IDetailsProps {
  totalPages: number;
  finishPage: number;
}

export const DetailsReading: FC<IDetailsProps> = ({totalPages, finishPage}) => {
  const percentage = finishPage / totalPages * 100;
  return (
    <div className=" mt-10 ">
      <h2>Statistic</h2>
      <div className=" bg-[#262626] rounded-xl mt-5 p-5">
        <div className=" w-[116px] h-[116px] mx-auto">
          <CircularProgressbar
            value={percentage}
            text="100%"
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "round",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(48, 185, 77)`,
              textColor: "#F9F9F9",
              trailColor: "#141414",
              backgroundColor: "#141414",
            })}
          />
        </div>
        <div className=" mt-4 flex justify-center gap-4 items-center">
          <div className=" w-3.5 h-3.5 bg-[#30B94D]"></div>
          <p>{percentage} %</p>
        </div>
        <p className=" text-center">{finishPage} page read</p>
      </div>
    </div>
  );
};
