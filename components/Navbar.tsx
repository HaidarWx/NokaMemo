"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsImage } from "react-icons/bs";
import { BiSolidHome, BiLogoInstagramAlt } from "react-icons/bi";
import { FaBook, FaTasks, FaInfoCircle, FaGithubSquare } from "react-icons/fa";
import { MdOutlineHistoryEdu, MdLogin } from "react-icons/md";
import Image from "next/image";
interface NavMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  mode: string;
}
const navMenus: NavMenuItem[] = [
  { label: "Home", href: "/", icon: <BiSolidHome />, mode: "" },
  { label: "Memory's", href: "/memory", icon: <FaBook />, mode: "" },
  { label: "Image", href: "/image", icon: <BsImage />, mode: "" },
  {
    label: "Daily Task",
    href: "/daily-task",
    icon: <FaTasks />,
    mode: "",
  },
  { label: "About", href: "/about", icon: <FaInfoCircle />, mode: "" },
  {
    label: "Update History",
    href: "/update-history",
    icon: <MdOutlineHistoryEdu />,
    mode: "",
  },
  { label: "Login", href: "/login", icon: <MdLogin />, mode: "mobile" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <nav className="bg-[#FFA6B5]">
      <div>
        <div className="flex p-4 justify-between md:justify-around items-center">
          {/* Icon */}
          <div className="flex items-center cursor-pointer">
            <div className="relative inline-block">
              <Image
                src="/images/madoka-icon.gif"
                width={64}
                height={64}
                unoptimized
                className="hidden md:flex absolute -left-11 -top-4 size-14 md:size-16 object-contain object-center"
                alt="Madoka Icon"
              />
              <h1 className="font-bold text-[26px] md:text-[36px]  text-white leading-none">
                NokaMemo
                <Image
                  src="/images/flower.png"
                  width={64}
                  height={64}
                  className="size-5 md:size-6 object-contain object-center absolute -top-1 -right-3"
                  alt="Flower"
                />
              </h1>
            </div>
          </div>

          {/* Desktop Mode */}
          <div className="text-[18px] gap-10 text-white hidden md:flex">
            {navMenus.map((item) => {
              return (
                <Link
                  className={`cursor-pointer ${item.mode === "mobile" ? "hidden" : ""}`}
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="">
            <button
              className="block md:hidden text-white text-[25px]"
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
            <button className="hidden md:flex bg-white p-4 px-10 font-bold text-[#FFA6B5] cursor-pointer sm">
              Log In
            </button>
          </div>
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden="true"
          ></div>
          {/* Sidebar (Mobile Mode) */}
          <div
            className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#FFDADA] shadow-xl overflow-y-auto flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className={`fixed inset-y-0 overflow-y-auto right-0 z-50 w-74 bg-[#FFDADA] shadow-xl p-0 ${isOpen ? "flex" : "hidden"} flex-col lg:hidden`}
            >
              <div className="flex flex-col p-3 gap-5 justify-between">
                {/* Top */}
                <div className="flex flex-col">
                  {/* Close X */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="self-end text-white text-2xl font-bold cursor-pointer"
                    aria-label="Close Menu"
                  >
                    ✕
                  </button>
                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className="relative inline-block">
                      <Image
                        src="/images/madoka-icon.gif"
                        width={64}
                        height={64}
                        unoptimized
                        className="absolute -left-11 -top-4 size-14 object-contain object-center"
                        alt="Madoka Icon"
                      />
                      <h1 className="font-bold text-[28px] md:text-[30px] text-white leading-none">
                        NokaMemo
                        <Image
                          src="/images/flower.png"
                          width={64}
                          height={64}
                          className="size-4 md:size-6 object-contain object-center absolute -top-1 -right-2"
                          alt="Flower"
                        />
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Down */}
                {/* Navtab */}
                <div className="flex flex-col gap-2 text-[17px] text-white p-0">
                  {navMenus.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-2 rounded-[5px] cursor-pointer bg-[#FFA6B5] ${
                        pathname === item.href ? "font-normal" : "font-normal"
                      }`}
                    >
                      <span className="text-xl font-bold">{item.icon}</span>
                      <span className="text-xl font-normal">{item.label}</span>
                    </Link>
                  ))}
                </div>
                {/* Info */}
                <div className="flex flex-col gap-1 items-center p-0 justify-center bg-[#FFA6B5]">
                  <div className="py-6 px-2 flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                      {/* Icon */}
                      <div className="relative inline-block">
                        <Image
                          src="/images/madoka-icon.gif"
                          width={64}
                          height={64}
                          unoptimized
                          className="absolute -left-11 -top-4 size-14 object-contain object-center"
                          alt="Madoka Icon"
                        />
                        <h1 className="font-bold text-[30px] text-white leading-none">
                          NokaMemo
                          <Image
                            src="/images/flower.png"
                            width={64}
                            height={64}
                            className="size-6 object-contain object-center absolute -top-1 -right-3"
                            alt="Flower"
                          />
                        </h1>
                      </div>
                    </div>
                    {/* Info */}
                    <p className="text-[13px] text-center text-white">
                      <b>NokaMemo</b> adalah website yang dapat menyimpan
                      semacam diary, memo, kalender pribadi dan hal hal lainnya
                      yang bersifat pribadi.
                    </p>
                    {/* Social Media */}
                    <div>
                      <div className="flex gap-1 items-center">
                        <BiLogoInstagramAlt className="text-white text-[30px]" />
                        <span className="text-[14px] font-medium text-white">
                          @hidarz
                        </span>
                      </div>
                      <a
                        href="https://github.com/HaidarWx"
                        className="flex gap-1 items-center"
                      >
                        <FaGithubSquare className="text-white text-[30px]" />
                        <span className="text-[14px] font-medium text-white">
                          HaidarWx
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
