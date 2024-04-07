import { Link } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
  const topNavMenu = [
    {
      menu: "FEEDBACK",
      route: "/feedback",
    },
    {
      menu: "SAVE MORE ON APP",
      route: "#",
    },
    {
      menu: "SELL ON M-ECOMMERCE",
      route: "/sell-on-m-ecommerce",
    },
    {
      menu: "CUSTOMER CARE",
      route: "/customer-care",
    },
    {
      menu: "TRACK MY ORDER",
      route: "/track-my-order",
    },
    {
      menu: "LOGIN",
      route: "/log-in",
    },
    {
      menu: "SIGNUP",
      route: "/sing-up",
    },
  ];
  return (
    <div className="top_navbar_container">
      <ul className="top_bar_menu_container">
        {topNavMenu.map((topMenu) => (
          <li key={topMenu.menu}>
            <Link to={`${topMenu.route}`}>{topMenu.menu}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNavbar;
