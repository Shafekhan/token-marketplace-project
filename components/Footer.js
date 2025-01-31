import React from "react";

// Internal imports
import { Twitter, Facebook, Insta, Logo } from "./index";

const Footer = () => {
  const menuItems = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "FAQ"],
    },
    {
      title: "Company",
      links: ["Privacy", "Terms of Service"],
    },
    {
      title: "Developers",
      links: ["Public API", "Documentation", "Guides"],
    },
  ];

  const socialIcons = [
    { component: Facebook, title: "Facebook", href: "#" },
    { component: Twitter, title: "Twitter", href: "#" },
    { component: Insta, title: "Instagram", href: "#" },
  ];

  return (
    <footer className="px-4 divide-y bg-[#1A1A1A] text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Brand Section */}
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-between space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
              <Logo />
            </div>
            <span className="self-center text-2xl font-semibold text-gray-50">
              Crypto Swap
            </span>
          </a>
        </div>

        {/* Navigation Menus */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {menuItems.map((menu, index) => (
            <div key={index} className="space-y-3">
              <h3 className="uppercase text-[#7765F3]">{menu.title}</h3>
              <ul className="space-y-1 text-gray-50">
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <a rel="noopener noreferrer" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Icons */}
          <div className="space-y-3">
            <h3 className="uppercase text-[#7765F3]">Social Media</h3>
            <div className="flex justify-start space-x-3 text-gray-50">
              {socialIcons.map(({ component: Icon, title, href }, idx) => (
                <a
                  key={idx}
                  rel="noopener noreferrer"
                  href={href}
                  title={title}
                  className="flex items-center p-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="py-6 text-sm text-center border-t-[3px] border-[#7765F3] text-gray-400">
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
