import React from "react";
import { Button } from "../ui/button";
import FacebookIcon from "@/assets/svgs/facebook";
import TwitterIcon from "@/assets/svgs/twitter";
import Link from "next/link";
import LinkedinIcon from "@/assets/svgs/linkedin";

function Footer() {
  return (
    <footer className="bg-Black-45 mt-20">
      <div className="card">
        <div className="py-20 grid grid-cols-2 md:grid-cols-6">
          {LINKS.map((link) => (
            <div key={link.name} className="space-y-4">
              <h6>{link.name}</h6>
              <ul className="space-y-2">
                {link.children.map((child, index) => (
                  <li key={index} className="text-sm text-Gray-45 font-light">
                    <Link href={child.path} className="hover:text-Gray-80">
                      {child.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4">
            <h6>Connect With Us</h6>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-next bg-Black-60"
              >
                <FacebookIcon />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-next bg-Black-60"
              >
                <TwitterIcon />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="swiper-button-next bg-Black-60"
              >
                <LinkedinIcon />
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between pt-5 pb-10">
          <p>@{new Date().getFullYear()} streamvib, All Rights Reserved</p>
          <div className="flex gap-4">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const LINKS = [
  {
    name: "Home",
    children: [
      { link: "Categories", path: "/" },
      { link: "Devices", path: "/" },
      { link: "Pricing", path: "/" },
      { link: "FAQ", path: "/" },
    ],
  },
  {
    name: "Movies",
    children: [
      { link: "Genres", path: "/" },
      { link: "Trending", path: "/" },
      { link: "New Release", path: "/" },
      { link: "Popular", path: "/" },
    ],
  },
  {
    name: "Shows",
    children: [
      { link: "Popular", path: "/" },
      { link: "Genres", path: "/" },
      { link: "New Release", path: "/" },
      { link: "Trending", path: "/" },
    ],
  },
  {
    name: "Support",
    children: [{ link: "Contact Us", path: "/" }],
  },
  {
    name: "Subscription",
    children: [
      { link: "Plans", path: "/" },
      { link: "Features", path: "/" },
    ],
  },
];
