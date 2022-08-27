import { Link } from "react-router-dom";
import Icon from "./Icon";
import Logo from "./Logo";

const quickLinks = [
  { label: "Active Listings", url: "/listing" },
  { label: "Sell your Self Storage", url: "/sell" },
  { label: "Free Evaluation", url: "/free_evaluation" },
  { label: "Learn", url: "/learn" },
];

const socialLinks = [
  {
    icon: <Icon icon="facebook" width={37.5} className="text-primary" />,
    url: "www.facebook.com",
  },
  {
    icon: <Icon icon="linkedin" width={37.5} className="text-primary" />,
    url: "www.linkedin.com",
  },
  {
    icon: <Icon icon="twitter" width={37.5} className="text-primary" />,
    url: "www.twitter.com",
  },
  {
    icon: <Icon icon="instagram" width={37.5} className="text-primary" />,
    url: "www.instagram.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div>
        <Logo type="primary" />
        <p>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p>© StorageConnect 2022, All Rights Reserved</p>
      </div>
      <div className="mt-3">
        <h5>Quick Links</h5>
        <ul className="flex">
          {quickLinks.map((link) => {
            return (
              <li className="inline" key={link.url}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h5>Newsleter</h5>
        <p>Get latest updates right in your inbox</p>
        <input />
        <button type="button">Subscribe Now</button>
      </div>
      <div>
        <h5>Let’s get social</h5>
        <ul>
          {socialLinks.map((social) => {
            return (
              <li key={social.url}>
                <Link to={social.url}>{social.icon}</Link>
              </li>
            );
          })}
        </ul>
        <select>
          <option value="en">English - En</option>
        </select>
      </div>
    </footer>
  );
}
