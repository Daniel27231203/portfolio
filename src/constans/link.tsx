import { IoIosHome } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";

import { FaNetworkWired } from "react-icons/fa";

const optionsScroll = {
  spy: true,
  smooth: true,
  offset: -100,
  duration: 500,
};

export const links = [
  {
    name: "Home",
    href: "/",
    to: "home",
    icon: <IoIosHome />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: 0,
    duration: optionsScroll.duration,
  },
  {
    name: "About",
    href: "/",
    to: "about",
    icon: <MdRoundaboutRight />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
  {
    name: "Work",
    href: "/",
    to: "work",
    icon: <FaNetworkWired />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
  {
    name: "Contact",
    href: "/",
    to: "contact",
    icon: <MdContactPhone />,
    spy: optionsScroll.spy,
    smooth: optionsScroll.smooth,
    offset: optionsScroll.offset,
    duration: optionsScroll.duration,
  },
];
