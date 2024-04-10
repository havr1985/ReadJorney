import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { useCurrentQuery } from '../redux/users/userApi'
import { MobileMenu } from './MobileMenu';
import { useState } from 'react';

export const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerClickMenu = () => {
    setIsOpenMenu(prev => !prev)
  }

    const { data } = useCurrentQuery(null);
    const nameLetter = data?.name.charAt(0)

    return (
      <>
        <header>
          <div className=" flex justify-between bg-bg-dark px-5 py-3 rounded-2xl items-center">
            <img src={logo} alt="logo" className=" w-[42px] h-[17px]" />
            <div className=" flex gap-2.5">
              <div className=" flex w-[35px] h-[35px] rounded-full border-2 items-center justify-center ">
                <p>{nameLetter}</p>
              </div>

              <button type="button" onClick={handlerClickMenu} className=' z-30'>
                {isOpenMenu ? <X/> : <Menu />}
              </button>
            </div>
          </div>
        </header>
        <MobileMenu isOpen={isOpenMenu} />
      </>
    );
}