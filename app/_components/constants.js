import { MdKeyboardArrowDown } from "react-icons/md";

const constants = {
  navItems: [
    {
      text: "Home",
      href: "/",
      icon: <MdKeyboardArrowDown />,
      subItems: [
        { text: "Home 1", href: "/home" },
        { text: "Home 2", href: "/home-2" },
        { text: "Home 3", href: "/home-3" },
        { text: "Home 4", href: "/home-4" },
      ],
    },
    { text: "Browse Jobs", href: "/browse", icon: <MdKeyboardArrowDown /> },
    { text: "Users", href: "/users", icon: <MdKeyboardArrowDown /> },
    { text: "Pages", href: "/pages", icon: <MdKeyboardArrowDown /> },
    { text: "Contact", href: "/contact" },
  ],

  signupInputs: [
    {
      label: "Display name",
      type: "text",
      placeholder: "Display name",
    },
    {
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
  loginInputs: [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
};

export default constants;
