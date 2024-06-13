import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<AppLayout />} />
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
