import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen text-center bg-yellow-300">
      <Outlet />
    </div>
  );
}

export default Layout;
