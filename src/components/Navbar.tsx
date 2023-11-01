import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import LOGO from '/travel.svg';
import { User } from './Header';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="text-slate-800 max-[768px]:bg-white max-[768px]:dark:bg-primary h-20 transiton-all duration-100 ease-out shadow-menu md:shadow-none backdrop-blur-2xl blur-0 opacity-100 fixed left-0 w-full z-40  top-0 flex items-center">
      <div className="max-[768px]:bg-white max-[768px]:dark:bg-primary grid grid-cols-3 md:gap-x-16 md:grid-cols-7 dark:text-[#ccc] w-full h-full px-5 py-4 transiton-all duration-100 ease-out shadow-menu md:shadow-none md:backdrop-blur-2xl md:blur-0 md:opacity-100">
        <a
          href="#"
          className="flex text-xl space-x-3 pr-5 col-span-1 md:col-span-2 absolute md:static left-0"
          onClick={() => navigate('/')}
        >
          <div className="flex flex-col">
            <span>HotelBooking</span>
            <span className="text-xs">شبکه رزرواسیون هتل</span>
          </div>
          <img src={LOGO} className="w-9 h-9" alt="" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-5 md:hidden col-span-1"
        >
          {!open ? (
            <BiMenu className="w-9 h-9 text-slate-600 dark:text-[#ccc]" />
          ) : (
            <BiX className="w-9 h-9 text-slate-600 dark:text-[#ccc]" />
          )}
        </button>
        <ul
          className={`md:col-span-5 flex md:ml-1 flex-col md:flex-row pt-9 md:pt-0 gap-y-6 md:gap-y-0 md:items-center md:justify-between md:pb-0 absolute md:static max-[768px]:bg-blue-50 max-[768px]:dark:bg-primary dark:text-[#ccc] md:z-auto z-[-1] left-0 w-full md:pl-0  transition-all duration-500 ease-in ${
            open ? 'top-16 ' : 'top-[-490px]'
          }`}
        >
          <li onClick={() => setOpen(false)} className="pr-9 py-3 md:py-0">
            <NavLink to={'/'}>خانه</NavLink>
          </li>
          <li onClick={() => setOpen(false)} className="pr-9 py-3 md:py-0">
            <a href="#footer">ارتباط با ما</a>
          </li>
          <li onClick={() => setOpen(false)} className="pr-9 py-3 md:py-0">
            <User />
          </li>
          <li
            onClick={() => setOpen(false)}
            className="bg-blue-100 dark:bg-slate-600 md:dark:bg-transparent md:bg-transparent py-3 md:py-0 shadow-lg md:shadow-none"
          >
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
