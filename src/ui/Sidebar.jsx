import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="px-8 flex flex-col gap-16  py-12 bord border-r-gray-100 row-start-1 row-end-[-1]">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
