import { Link } from "react-router-dom";
import gloveImg from "../assets/icons/glove.svg";
import arrowDownImg from "../assets/icons/arrow_down.svg";
import Button from "./Button";
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
    <footer className="w-full mt-auto bg-[url('../assets/icons/footer_bg_left.svg'),_url('../assets/icons/footer_bg_right.svg')] bg-no-repeat">
      <div
        className="
        bg-no-repeat bg-right-bottom
        w-full flex text-charcoal gap-6 font-roboto
        max-w-screen-xl 
        mx-auto
        flex-col-reverse  p-3 pt-[93px] 
        sm:flex-row sm:flex-wrap
        sm:justify-between sm:gap-7
        lg:gap-1 lg:pb-[60px]  
        lg:justify-between"
      >
        <div className="w-full max-w-[315px]">
          <Logo type="primary" />
          <p className="mt-[16.5px]">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>
          <p className="mt-[37px]">
            © StorageConnect 2022, All Rights Reserved
          </p>
        </div>
        <div className="w-full max-w-[211px] lg:max-w-[153px]">
          <h5 className="font-bold text-lg leading-[21px]">Quick Links</h5>
          <ul>
            {quickLinks.map((link) => {
              return (
                <li className="mt-6 leading-5" key={link.url}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full max-w-[266px]">
          <h5 className="font-bold text-lg leading-[21px] mb-[22px]">
            Newsleter
          </h5>
          <p>Get latest updates right in your inbox</p>
          <input
            placeholder="Enter Your Email"
            className="mt-2 rounded px-[21px] pt-[17px] pb-[15px] max-w-[250px] h-[50px] border border-[#E8EFFF] focus:border-primary focus-visible:outline-none focus-visible:border-primary"
          />
          <Button className="mt-2.5 w-[165px]">Subscribe Now</Button>
        </div>
        <div className="w-full max-w-[211px]">
          <h5 className="font-bold text-lg leading-[21px] mb-6">
            Let’s get social
          </h5>
          <ul className="flex gap-[18px]">
            {socialLinks.map((social) => {
              return (
                <li key={social.url}>
                  <Link to={social.url}>{social.icon}</Link>
                </li>
              );
            })}
          </ul>
          <div className="w-full max-w-[211px] relative mt-[38.5px]">
            <select className="w-full pl-[45px] h-[38.5px] border border-primary focus-visible:outline-none rounded-[5px] appearance-none">
              <option value="en" className="w-[200px]">
                English - En
              </option>
            </select>
            <img
              className="w-[19.5px] h-[19.5px] absolute bottom-[9.5px] left-[15px]"
              src={gloveImg}
            />
            <img
              className="w-[15px] h-[8.48px] absolute bottom-[15.02px] right-[15px]"
              src={arrowDownImg}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
