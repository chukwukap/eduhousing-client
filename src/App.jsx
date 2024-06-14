import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/pages/Home";
import PropertyPage from "./components/pages/property/index";
import Register from "./components/pages/auth/register";
import Login from "./components/pages/auth/login";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
