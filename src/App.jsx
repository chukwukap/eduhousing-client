import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AppLayout from "./components/ui/AppLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
