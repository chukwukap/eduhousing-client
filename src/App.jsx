// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import AppLayout from "./components/layout";
import PropertyPage from "./components/pages/property";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="properties" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
