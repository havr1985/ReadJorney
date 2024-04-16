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
        className=" absolute w-[60vw] h-[100vh] bg-[#262626] right-0 
      flex flex-col justify-around items-center"
      >
        <NavMenu/>
        <button
          onClick={clickLogout}
          className=" bg-prim-color text-btn-text-color text-sm font-bold w-[140px] h-[42px] rounded-[30px]
       hover:bg-hover-color hover:text-prim-color
       md:w-[225px] md:h-[52px] md:text-xl"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
