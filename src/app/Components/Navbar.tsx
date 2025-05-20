"use client";
import "../Css/Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Appointmentbtn from "./Appointmentbtn";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/Images/Logo.png";
import classNames from "classnames";
import { ModeToggle } from "./ModeToogle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "/calendar" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
<Disclosure as="nav" className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md shadow-md">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">

      {/* Mobile Hamburger Button */}
      <div className="flex items-center sm:hidden">
        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
          <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
          <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
        </DisclosureButton>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={40} height={40} className="logo" />
        <h3 className="text-white text-lg font-semibold hidden sm:block">LocoMotor Care</h3>
      </div>

      {/* Nav Links - Show on sm and up */}
      <div className="hidden sm:flex flex-1 justify-center items-center gap-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                isActive
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300 hover:text-white relative group",
                "px-2 py-1 text-sm font-medium transition-all whitespace-nowrap"
              )}
            >
              <span>{item.name}</span>
              {!isActive && (
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
              )}
            </Link>
          );
        })}
        <ModeToggle />
      </div>

      {/* Appointment Button */}
      <div className="hidden sm:flex items-center">
        <Appointmentbtn btnName={"Book Appointment"} />
      </div>
    </div>
  </div>

  {/* Mobile Navigation Panel */}
  <DisclosurePanel className="sm:hidden">
    <div className="space-y-2 px-4 pb-4 pt-2 text-center text-white">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              isActive
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </Link>
        );
      })}
              <ModeToggle />
      <div className="mt-4">
        <Appointmentbtn btnName={"Book Appointment"} />
      </div>
    </div>
  </DisclosurePanel>
</Disclosure>


  );
}
