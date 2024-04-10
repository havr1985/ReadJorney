import { lazy, useEffect } from "react";
import { Container } from "./components/Container";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestictedRoute } from "./components/RestictedRoute";
import { useCurrentQuery, useRefreshQuery } from "./redux/users/userApi";
import { SerializedError } from "@reduxjs/toolkit";

const Register = lazy(() => import('./pages/RegisterPage'));
const Login = lazy(() => import('./pages/LoginPage'));
const Home = lazy(() => import('./pages/HomePage'));
const Library = lazy(() => import('./pages/LibraryPage'))

interface CustomError extends SerializedError{
  status?: number;
}


function App() {

  const { isError: currentError, error } = useCurrentQuery(null)
  const { isLoading, isError, refetch } = useRefreshQuery(null)
  
  useEffect(() => {
    if (currentError && (error as CustomError).status === 401)  {
      if (!isLoading && !isError) {
        refetch()
      }
    }
  }, [error, isError, isLoading, currentError, refetch])

  return (
    <Container>
      <Routes>
        <Route
          path="/register"
          element={<RestictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestictedRoute redirectTo="/" component={<Login />} />}
        />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />
          <Route
            path="/library"
            element={
              <PrivateRoute redirectTo="/login" component={<Library />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  ); 
}
export default App;
