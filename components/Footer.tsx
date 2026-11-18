"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsImage } from "react-icons/bs";
import { BiSolidHome, BiLogoInstagramAlt } from "react-icons/bi";
import { FaBook, FaTasks, FaInfoCircle, FaGithubSquare } from "react-icons/fa";
import { MdOutlineHistoryEdu, MdLogin } from "react-icons/md";
export function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#FFA6B5] md:flex md:justify-around md:p-15 p-10 md:gap-0 md:flex-row flex flex-col gap-10">
          {/* Left */}
          <div className="flex flex-col md:w-100 gap-3">
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
                    className="size-5 object-contain object-center absolute -top-1 -right-3"
                    alt="Flower"
                  />
                </h1>
              </div>
            </div>
            {/* Info */}
            {/* Info */}
            <p className="text-[16px] text-left text-white">
              <b>NokaMemo</b> adalah website yang dapat menyimpan semacam diary,
              memo, kalender pribadi dan hal hal lainnya yang bersifat pribadi.
            </p>
            {/* Social Media */}
            <div className="flex gap-1">
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
          {/* Right */}
          <div className="flex md:justify-around justify-center items-center">
            <Image
              src="/images/LS.png"
              alt="Ls"
              width={100}
              height={119}
              className="object-contain object-center size-24 md:size-42"
            />
            <Image
              src="/images/x.png"
              alt="x"
              width={33}
              height={66}
              className="object-contain object-center size-16 md:size-16"
            />
            <Image
              src="/images/SP.png"
              alt="Sp"
              width={100}
              height={119}
              className="object-contain object-center size-24 md:size-42"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
