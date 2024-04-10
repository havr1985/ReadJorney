import { FC } from "react";
import { CustomBtn } from "./CustomBtn";
import { Link } from "react-router-dom";

interface IPropsMenu {
  isOpen: boolean;
}

export const MobileMenu: FC<IPropsMenu> = ({ isOpen }) => {
  return (
    <div
      className={`absolute w-[100vw] h-[100vh] bg-[#14141499] left-0 top-0 right-0 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" absolute w-[60vw] h-[100vh] bg-[#262626] right-0 
      flex flex-col justify-around items-center">
        <ul className=" flex flex-col gap-5 text-sec-color">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">My library</Link>
          </li>
        </ul>
        <CustomBtn>Log out</CustomBtn>
      </div>
    </div>
  );
};
