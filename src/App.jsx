import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/ui/AppLayout";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
				</Route>
				<Route path='properties' element={<PropertyPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
