import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/ui/AppLayout";
import ErrorPage from "./components/pages/ErrorPage";
import PropertyPage from "./components/pages/property";
import Register from "./components/pages/auth/register";
import Login from "./components/pages/auth/login";
import EmailVerificationPage from "./components/pages/auth/verify-email";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="properties" element={<PropertyPage />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/verify-email" element={<EmailVerificationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
