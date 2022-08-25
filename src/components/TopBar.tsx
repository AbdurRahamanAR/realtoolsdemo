import { Drawer, List } from "antd";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
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
    <div className="bg-primary flex justify-center">
      <div className="flex justify-between w-full max-w-screen-xl p-[30px]">
        <Logo type="secondary" />

        <button
          onClick={() => {
            toggle();
          }}
          className="lg:hidden"
        >
          <Icon icon="list" width={30} className="text-white" />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-x-4 lg:gap-x-10 items-center">
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
            Contact
          </li>
        </ul>

        <Drawer onClose={() => toggle()} visible={showNavItems}>
          <List
            dataSource={navItems}
            renderItem={(item) => (
              <List.Item className="p-0">
                <NavLink
                  to={item.url}
                  onClick={() => {
                    toggle();
                  }}
                  className={({ isActive }) =>
                    clsx([
                      "py-4 pl-2 w-full h-full hover:bg-primary hover:text-white ",
                      isActive ? "bg-primary text-white" : "bg-white text-dark",
                    ])
                  }
                >
                  {item.label}
                </NavLink>
              </List.Item>
            )}
          />
        </Drawer>
      </div>
    </div>
  );
}
