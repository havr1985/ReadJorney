import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useCurrentQuery, useLogoutMutation } from "../redux/api/users/userApi";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { NavMenu } from "./NavMenu";
import { CustomDarkBtn } from "./CustomDarkBtn";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [logout] = useLogoutMutation();

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
          <div className=" flex gap-1 items-center">
            <img src={logo} alt="logo" width={42} height={17} />
            <p className=" lg:hidden md:block font-semibold">READ JORNEY</p>
          </div>
          <div className=" lg:hidden md:flex  xl:flex">
            <NavMenu />
          </div>
          <div className=" flex gap-2.5 items-center">
            <div className=" flex w-[35px] h-[35px] rounded-full border-2 items-center justify-center md:w-10 md:h-10">
              <p>{nameLetter}</p>
            </div>
            <p className=" lg:hidden xl:block font-bold text-lg mr-2">
              {data?.name}
            </p>

            <button
              type="button"
              onClick={handlerClickMenu}
              className=" z-50 md:hidden"
            >
              {isOpenMenu ? <X /> : <Menu />}
            </button>
            <div onClick={clickLogout}>
              <CustomDarkBtn>Log out</CustomDarkBtn>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpenMenu} />
    </>
  );
};
