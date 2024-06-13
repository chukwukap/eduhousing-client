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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
