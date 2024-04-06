import { lazy } from "react";
import { Container } from "./components/Container";
import { Route, Routes } from "react-router-dom";

const Register = lazy(() => import('./pages/RegisterPage'));
const Login = lazy(() => import('./pages/LoginPage'))

function App() {
  return (
    <Container>
      <Routes>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login />} />
      </Routes>
    </Container>
  ); 
}
export default App;
