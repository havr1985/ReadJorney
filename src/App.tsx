import { lazy, useEffect } from "react";
import { Container } from "./components/Container";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestictedRoute } from "./components/RestictedRoute";
import {
  useCurrentQuery,
  useRefreshMutation,
  
} from "./redux/api/users/userApi";
import { SerializedError } from "@reduxjs/toolkit";

const Register = lazy(() => import("./pages/RegisterPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Home = lazy(() => import("./pages/HomePage"));
const Library = lazy(() => import("./pages/LibraryPage"));

interface CustomError extends SerializedError {
  status?: number;
}

function App() {
  const {
    isLoading,
    error,
    isError: currentError,
    refetch,
  } = useCurrentQuery(null);
  const [refresh] = useRefreshMutation();
  

  useEffect(() => {
    const handleTokenRefresh = async () => {
      try {
        await refresh();
        refetch();
      } catch (refreshError) {
        console.error("Помилка при оновленні токену поновлення:", refreshError);
      }
    };

    if (currentError && (error as CustomError).status === 401) {
      handleTokenRefresh();
    }
  }, [currentError, error, refresh, refetch]);

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/register"
              element={
                <RestictedRoute redirectTo="/" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={<RestictedRoute redirectTo="/" component={<Login />} />}
            />

            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute redirectTo="/login" component={<Library />} />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
}
export default App;
