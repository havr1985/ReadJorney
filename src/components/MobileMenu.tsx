import { FC } from "react";
import { useLogoutMutation } from "../redux/api/users/userApi";
import { NavMenu } from "./NavMenu";


interface IPropsMenu {
  isOpen: boolean;
}

export const MobileMenu: FC<IPropsMenu> = ({ isOpen }) => {
  const [logout] = useLogoutMutation();

  const clickLogout = () => {
    logout(null);
  };
  return (
    <div
      className={`absolute w-[100vw] h-[100vh] bg-[#14141499] left-0 top-0 right-0 md:hidden xl:hidden ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`absolute w-[60vw] h-[100vh] bg-[#262626] right-0 z-40
      flex flex-col justify-around items-center ${isOpen ? "" : "hidden"}`}
      >
        <NavMenu />
        <button
          className=" bg-hover-color px-7 py-3 rounded-3xl text-sm border-2 duration-300 border-sec-color
         hover:bg-prim-color hover:text-hover-color hover:border-inherit"
          onClick={clickLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
