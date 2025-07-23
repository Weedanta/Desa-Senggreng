"use client";

import { X, Menu } from "lucide-react";
import Link from "next/link";
import type { NavbarComponentProps, MobileMenuProps, NavItem } from "./types";
import Title from "@/assets/images/layout/title.svg";
import LogoDe from "@/assets/images/layout/logo.png";
import Image from "next/image";

const Logo = () => (
  <Link href="/" className="flex items-center space-x-3">
    <Image src={LogoDe} alt="Logo Desa" className="w-12 h-12 object-contain" />

    <Image src={Title} alt="Tittle" className="" />
  </Link>
);

const DesktopNavigation = ({ navItems }: { navItems: NavItem[] }) => (
  <nav className="hidden md:flex w-xl items-center justify-between space-x-8">
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={`text-base font-medium transition-all duration-300 relative group ${
          item.isActive
            ? "bg-gradient-to-r from-[#007EE8] to-[#66E077] bg-clip-text text-transparent"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-[#007EE8] hover:to-[#66E077] hover:bg-clip-text hover:text-transparent"
        }`}
      >
        {item.label}
      </Link>
    ))}
  </nav>
);

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    aria-label="Toggle mobile menu"
  >
    <Menu className="w-6 h-6 text-gray-700" />
  </button>
);

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-0 right-0 h-full max-w-8xl bg-white shadow-2xl z-50 md:hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`block text-base font-medium transition-colors hover:text-blue-600 ${
                  item.isActive ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export const NavbarComponent = ({
  navItems,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
  className = "",
}: NavbarComponentProps) => {
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 ${className}`}>
        <div className="mx-auto max-w-6xl ">
          <div className="bg-white backdrop-blur-sm rounded-4xl shadow-xl border border-gray-200/50 mt-4">
            <div className="flex items-center justify-between px-10 py-4 ">
              <Logo />
              <DesktopNavigation navItems={navItems} />
              <MobileMenuButton onClick={onMobileMenuToggle} />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={onMobileMenuClose}
        navItems={navItems}
      />
    </>
  );
};
