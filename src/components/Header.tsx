import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useCurrentQuery, useLogoutMutation } from "../redux/api/users/userApi";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

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
        <div className=" flex justify-between bg-bg-dark px-5 py-3 rounded-2xl items-center">
          <img src={logo} alt="logo" className=" w-[42px] h-[17px]" />
          <div className=" flex gap-2.5">
            <div className=" flex w-[35px] h-[35px] rounded-full border-2 items-center justify-center ">
              <p>{nameLetter}</p>
            </div>

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
