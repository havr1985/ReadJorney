import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardStatic = () => {
  return (
    <div className=" flex flex-col gap-5 bg-[#262626] rounded-xl p-5 mt-5 md:max-w-[313px]">
      <h2 className=" text-lg font-bold md:mb-5">Start your workout</h2>
      <ul className=" flex flex-col gap-5">
        <li className=" flex gap-4 items-center">
          <p className=" bg-prim-color text-btn-text-color px-4 py-2 font-bold rounded-full">
            1
          </p>
          <p className=" text-sm -tracking-wider text-sec-color">
            <span className=" text-prim-color">Create a personal library:</span>
            add the books you intend to read to it.
          </p>
        </li>
        <li className=" flex gap-4 items-center">
          <p className=" bg-prim-color text-btn-text-color px-4 py-2 font-bold rounded-full">
            2
          </p>
          <p className=" text-sm -tracking-wider text-sec-color">
            <span className=" text-prim-color">Create your first workout:</span>
            define a goal, choose a period, start training.
          </p>
        </li>
      </ul>
      <div className=" flex justify-between md:mt-3">
        <Link to="/library" className=" text-sec-color text-sm underline decoration-solid">My library</Link>
        <Link to="/library">
          <ArrowRight size={20}/>
        </Link>
      </div>
    </div>
  );
};
