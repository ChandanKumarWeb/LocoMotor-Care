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
import React, { useState } from "react";
import Modal from "@/app/Components/ModalProps";
import AppointmentForm from "@/app/Components/AppointmentForm";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  // { name: "About Us", href: "/about" },
  //  { name: "Contact Us", href: "/contact" },
   // "contact" add this to open about us
   // "about" add this to open about us
  // { name: "About Us", href: "/services" },
  // { name: "Contact Us", href: "/services" },
  { name: "Appointment", modal: true },

];

export default function Navbar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  return (
<Disclosure as="nav" className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md shadow-md">
  {({ close }: { close: () => void }) => (
    <>
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
          <Link href={"/"}>
            <div className="flex items-center px-4 rounded-xl bg-white">
              <Image src={logo} alt="Logo" width={40} height={40} className="logo" />
              <h3 className="text-black text-lg font-semibold hidden sm:block">VedaMotion Care</h3>
            </div>
          </Link>

          {/* Nav Links - Show on sm and up */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-6">
            {navigation.map((item) => {
              if (item.modal) {
                // Render button for Appointment
                return (
                  <button
                    key={item.name}
                    onClick={() => setModalOpen(true)}
                    className="px-2 py-1 text-sm font-medium transition-all whitespace-nowrap text-gray-300 hover:text-white relative group"
                  >
                    <span>{item.name}</span>
                  </button>
                );
              }
              const isActive = pathname === item.href;
              // Ensure item.href is always a string
              return (
                <Link
                  key={item.name}
                  href={item.href ?? "/"}
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
          {/* <div className="hidden sm:flex items-center">
            <Appointmentbtn btnName={"Book Appointment"} />
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-2 px-4 pb-4 pt-2 text-center text-white">
          {navigation.map((item) => {
            if (item.modal) {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setModalOpen(true);
                    close();
                  }}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white w-full"
                >
                  {item.name}
                </button>
              );
            }
            const isActive = pathname === item.href;
            // Ensure item.href is always a string
            return (
              <Link
                key={item.name}
                href={item.href ?? "/"}
                onClick={() => close()}
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
            <Appointmentbtn btnName={"Contact Us"} />
          </div>
        </div>
      </DisclosurePanel>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <AppointmentForm />
      </Modal>
    </>
  )}
</Disclosure>

      
  );
}
