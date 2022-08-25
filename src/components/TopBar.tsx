import { Drawer } from "antd";
import { Link } from "react-router-dom";
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
              <Link
                className="text-white text-lg font-normal leading-5 hover:text-secondary hover:font-semibold hover:text-xl hover:leading-5"
                to={navItem.url}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
          <li className="bg-secondary text-sapphire font-medium text-lg rounded-[10px] leading-5 py-2 px-[18px]">
            Contact
          </li>
        </ul>

        <Drawer onClose={() => toggle()} visible={showNavItems}>
          <h1>Hello</h1>
        </Drawer>
      </div>
    </div>
  );
}
