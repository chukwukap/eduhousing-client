import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/ui/AppLayout";
import ErrorPage from "./components/pages/ErrorPage";
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
				</Route>
				<Route path='properties' element={<PropertyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
