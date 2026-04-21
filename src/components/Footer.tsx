import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div>
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.png"
            alt="trandLama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            TrandLama.
          </p>
        </Link>
        <p className="text-gray-400 text-sm">©2026 trandLma</p>
        <p className="text-gray-400 text-sm">Tous droits reservés</p>
      </div>
    </div>
  );
};

export default Footer;
