import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

function AppLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
export default AppLayout;
