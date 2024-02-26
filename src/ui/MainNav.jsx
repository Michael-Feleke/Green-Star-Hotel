import { NavLink } from "react-router-dom";

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-[1.2rem] text-gray-600  font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 "
            activeClassName="text-emerald-600 bg-gray-100"
          >
            <HiOutlineHome className="hover:text" size={24} />

            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className="flex items-center gap-[1.2rem] text-gray-600  font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 "
            activeClassName="text-emerald-600 bg-gray-100"
          >
            <HiOutlineCalendarDays className="hover:text" size={24} />

            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-[1.2rem] text-gray-600  font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 "
            activeClassName="text-emerald-600 bg-gray-100"
          >
            <HiOutlineHomeModern className="hover:text" size={24} />

            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-[1.2rem] text-gray-600  font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 "
            activeClassName="text-emerald-600 bg-gray-100"
          >
            <HiOutlineUsers className="hover:text" size={24} />

            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-[1.2rem] text-gray-600  font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 "
            activeClassName="text-emerald-600 bg-gray-100"
          >
            <HiOutlineCog6Tooth className="hover:text" size={24} />

            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
