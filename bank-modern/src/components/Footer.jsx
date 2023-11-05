import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-2 pt-6 lg:pb-2 lg:pt-16">
      <div className="mb-8 flex w-full flex-col items-center justify-center lg:flex-row lg:gap-52">
        <div>
          <img
            src={logo}
            alt="hoobank"
            className="h-[72px] w-[266px] object-contain"
          />
          <p className="mt-4 max-w-[310px] font-poppins text-white/50">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="g-30 mt-10 flex flex-wrap justify-between lg:mt-4 lg:gap-20">
          {footerLinks.map((footerLink, idx) => (
            <div
              key={footerLink.idx}
              className="mt-4 flex min-w-[150px] flex-col"
            >
              <h4 className="font-poppins text-lg font-medium text-white">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link) => (
                  <li key={link.name} className="m-2">
                    <a
                      href={link.link}
                      className="cursor-pointer font-poppins text-white/50 no-underline hover:text-cyan-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] lg:flex-row">
        <p className="mb-4 mt-6 text-center font-poppins text-lg text-white">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="mt-6 flex lg:mt-0">
          {socialMedia.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="mx-6 h-[21px] w-[21px] cursor-pointer object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
