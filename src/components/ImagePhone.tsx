import smallPhone from "../assets/iPhoneMob.png";
import largePhone from "../assets/iPhoneLarge.png";
import { useMediaQuery } from "react-responsive";

export const ImagePhone = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isSmallScreen ? (
        <img src={smallPhone} alt="phone" />
      ) : (
        <img src={largePhone} alt="phone" />
      )}
    </>
  );
};
