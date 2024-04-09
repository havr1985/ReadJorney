import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header";

export const Layout = () => {
    return (
        <div>
            <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
}