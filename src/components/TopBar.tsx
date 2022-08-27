import clsx from "clsx";
import Drawer from "react-modern-drawer";
import { Link, NavLink } from "react-router-dom";
import "react-modern-drawer/dist/index.css";
import useToggle from "../hooks/useToggle";
import Icon from "./Icon";
import Logo from "./Logo";

const navItems = [
  { label: "Active Listings", url: "/listing" },
  { label: "Sell your Self Storage", url: "/sell" },
  { label: "Free Evaluation", url: "/free_evaluation" },
  { label: "Learn", url: "/learn" },
];

export default function TopBar() {
  const { open: showNavItems, toggle } = useToggle(false);
  return (
    <nav className="bg-primary flex justify-center">
      <div className="flex justify-between w-full max-w-screen-xl p-[30px]">
        <Link to="/">
          <Logo type="secondary" />
        </Link>

        <button
          onClick={() => {
            toggle();
          }}
          className="lg:hidden ml-auto"
        >
          <Icon icon="list" width={30} className="text-white" />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden ml-auto lg:flex gap-x-4 lg:gap-x-10 items-center">
          {navItems.map((navItem) => (
            <li key={navItem.label}>
              <NavLink
                className={({ isActive }) =>
                  clsx([
                    "leading-5 hover:text-secondary",
                    isActive
                      ? "text-secondary font-semibold text-xl"
                      : "text-white text-lg font-normal",
                  ])
                }
                to={navItem.url}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
          <li className="bg-secondary text-sapphire font-medium text-lg rounded-[10px] leading-5 py-2 px-[18px]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <Drawer direction="left" onClose={() => toggle()} open={showNavItems}>
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.url} className="h-14 w-full">
                  <NavLink
                    to={item.url}
                    onClick={() => {
                      toggle();
                    }}
                    className={({ isActive }) =>
                      clsx([
                        "py-4 pl-2 w-full block h-full hover:bg-primary hover:text-white ",
                        isActive
                          ? "bg-primary text-white"
                          : "bg-white text-dark",
                      ])
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
            <NavLink
              to="/contact"
              onClick={() => {
                toggle();
              }}
              className={({ isActive }) =>
                clsx([
                  "py-4 pl-2 w-full block h-full hover:bg-primary hover:text-white ",
                  isActive ? "bg-primary text-white" : "bg-white text-dark",
                ])
              }
            >
              Contact
            </NavLink>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}
