import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

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
