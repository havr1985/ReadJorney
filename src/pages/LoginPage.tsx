
import logo from "../assets/logo.svg";
import phone from "../assets/iPhoneMob.png";
import { LoginForm } from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className=" bg-bg-dark p-5 rounded-[30px]">
        <img src={logo} alt="logo" width={42} height={17} />
        <h2 className=" text-[31px] font-bold leading-8 mt-[40px] mb-5">
          Expand your mind, reading{" "}
          <span className=" text-span-color">a book</span>
        </h2>
        <LoginForm/>
      </div>
      <div className=" bg-bg-dark rounded-[30px] mt-2.5 flex">
        <div className=" mx-auto mt-5">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
