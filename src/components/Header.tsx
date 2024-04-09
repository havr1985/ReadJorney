import { Menu } from 'lucide-react'
import logo from '../assets/logo.svg'
import { useCurrentQuery } from '../redux/users/userApi'
import { MobileMenu } from './MobileMenu';

export const Header = () => {

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

              <button>
                <Menu />
              </button>
            </div>
          </div>
        </header>
        <MobileMenu/>
      </>
    );
}