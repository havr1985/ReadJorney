import { PictureBlock } from "../components/PictureBlock";
import { RegisterForm } from "../components/RegisterForm";
import logo from "../assets/logo.svg";

const RegisterPage = () => {
  return (
    <div>
      <div className=" bg-bg-dark p-5 rounded-[30px]">
        <img src={logo} alt="logo" width={42} height={17} />
        <h2 className=" text-[31px] font-bold leading-8 mt-[40px] mb-5">
          Expand your mind, reading <span className=" text-span-color">a book</span>
        </h2>
        <RegisterForm />
      </div>

      <PictureBlock />
    </div>
  );
};

export default RegisterPage;
