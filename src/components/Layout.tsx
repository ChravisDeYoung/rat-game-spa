import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen text-center bg-yellow dark:bg-gray max-w-screen-sm">
      <Outlet />
    </div>
  );
}

export default Layout;
