import { Link, useLocation } from "react-router-dom";

export const NavMenu = () => {
    const location = useLocation();
    return (
      <ul className=" flex flex-col gap-5 text-sec-color md:flex-row md:gap-8">
        <li
          className={`${
            location.pathname === "/" &&
            "text-prim-color border-b-2 border-[#4F92F7]"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${
            location.pathname === "/library" &&
            "text-prim-color border-b-2 border-[#4F92F7]"
          }`}
        >
          <Link to="/library">My library</Link>
        </li>
      </ul>
    );
}