
import logo from "../assets/logo.svg";
import { LoginForm } from "../components/LoginForm";
import { ImagePhone } from "../components/ImagePhone";

const LoginPage = () => {
  return (
    <div className=" xl:flex gap-4 xl:justify-center">
      <div className=" bg-bg-dark p-5 rounded-[30px]  md:px-[64px] md:pt-10 xl:w-[600px]">
        <div className=" flex gap-1 items-center">
          <img src={logo} alt="logo" width={42} height={17} />
          <p className=" sm:hidden md:block font-semibold">READ JORNEY</p>
        </div>

        <h2
          className=" text-[31px] font-bold leading-8 mt-[40px] mb-5 
        md:text-[64px] md:leading-[60px] md:w-[444px] md:mt-30 md:mb-10 xl:mt-[107px]"
        >
          Expand your mind, reading{" "}
          <span className=" text-span-color">a book</span>
        </h2>
        <LoginForm />
      </div>
      <div className=" bg-bg-dark rounded-[30px] mt-2.5 flex md:hidden xl:flex xl:w-[600px] xl:mt-0">
        <div className=" mx-auto mt-5 xl:mt-36">
          <ImagePhone />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
