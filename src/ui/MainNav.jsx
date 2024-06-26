import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useState, useEffect } from "react";

function MainNav() {
  const location = useLocation();
  const [isListSelected, setIsListSelected] = useState(null);

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Determine the selected index based on the pathname
    if (pathname === "/dashboard") {
      setIsListSelected(0);
    } else if (pathname === "/bookings") {
      setIsListSelected(1);
    } else if (pathname === "/rooms") {
      setIsListSelected(2);
    } else if (pathname === "/users") {
      setIsListSelected(3);
    } else if (pathname === "/settings") {
      setIsListSelected(4);
    }
  }, [location]);

  function handleItemClicked(index) {
    setIsListSelected(index);
  }

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li onClick={() => handleItemClicked(0)}>
          <NavLink
            to="/dashboard"
            className={`flex items-center gap-[1.2rem]   font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 ${
              isListSelected == 0 ? "bg-gray-100 text-emerald-600" : ""
            }`}
          >
            <HiOutlineHome className="hover:text" size={24} />

            <span>Home</span>
          </NavLink>
        </li>
        <li onClick={() => handleItemClicked(1)}>
          <NavLink
            to="/bookings"
            className={`flex items-center gap-[1.2rem]   font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 ${
              isListSelected == 1 ? "bg-gray-100 text-emerald-600" : ""
            }`}
          >
            <HiOutlineCalendarDays className="hover:text" size={24} />

            <span>Bookings</span>
          </NavLink>
        </li>
        <li onClick={() => handleItemClicked(2)}>
          <NavLink
            to="/rooms"
            className={`flex items-center gap-[1.2rem]   font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 ${
              isListSelected == 2 ? "bg-gray-100 text-emerald-600" : ""
            }`}
          >
            <HiOutlineHomeModern className="hover:text" size={24} />

            <span>Rooms</span>
          </NavLink>
        </li>
        <li onClick={() => handleItemClicked(3)}>
          <NavLink
            to="/users"
            className={`flex items-center gap-[1.2rem]   font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 ${
              isListSelected == 3 ? "bg-gray-100 text-emerald-600" : ""
            }`}
          >
            <HiOutlineUsers className="hover:text" size={24} />

            <span>Users</span>
          </NavLink>
        </li>
        <li onClick={() => handleItemClicked(4)}>
          <NavLink
            to="/settings"
            className={`flex items-center gap-[1.2rem]   font-[500] text-[1.6rem] py-[1.2rem] px-[2.4rem] transition-all duration-300  hover:text-emerald-600 hover:bg-gray-100 ${
              isListSelected == 4 ? "bg-gray-100 text-emerald-600" : ""
            }`}
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
