import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="card">
      <h1>Remote Association Test</h1>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
