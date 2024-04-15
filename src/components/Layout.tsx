import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useAppSelector } from "../redux/hooks";
import { selectIsAuthUser } from "../redux/slices/authSlice";

export const Layout = () => {
  const isAuth = useAppSelector(selectIsAuthUser)
  return (
    <div>
      {isAuth && <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
