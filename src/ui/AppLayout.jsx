import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[26rem,1fr] grid-rows-[auto,1fr] h-[100vh]">
      <Header />
      <Sidebar />
      <main className="bg-gray-50 px-16 pt-16 pb-24">
        <div className="max-w-[120rem] mx-auto my-0 flex flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
