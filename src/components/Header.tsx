import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useCurrentQuery, useLogoutMutation } from "../redux/api/users/userApi";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [logout] = useLogoutMutation()

  const handlerClickMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  const clickLogout = () => {
    logout(null);
  };

  const { data } = useCurrentQuery(null);
  const nameLetter = data?.name.charAt(0);

  return (
    <>
      <header>
        <div className=" flex justify-between bg-bg-dark px-5 py-3 rounded-2xl items-center md:px-6 md:py-5">
          <img src={logo} alt="logo" className=" w-[42px] h-[17px]" />
          <div className=" sm:hidden md:flex  xl:flex">
            <NavMenu/>
          </div>
          <div className=" flex gap-2.5 items-center">
            <div className=" flex w-[35px] h-[35px] rounded-full border-2 items-center justify-center md:w-10 md:h-10">
              <p>{nameLetter}</p>
            </div>
            <p className=" sm:hidden xl:block font-bold text-lg mr-2">{data?.name}</p>

            <button
              type="button"
              onClick={handlerClickMenu}
              className=" z-30 md:hidden"
            >
              {isOpenMenu ? <X /> : <Menu />}
            </button>
            <button
              onClick={clickLogout}
              className=" bg-prim-color text-btn-text-color text-sm font-bold w-[140px] h-[42px] rounded-[30px]
       hover:bg-hover-color hover:text-prim-color sm:hidden md:block
       md:w-[114px] md:h-[42px] md:text-xl"
            >
              Log out
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpenMenu} />
    </>
  );
};
