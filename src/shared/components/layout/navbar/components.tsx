"use client";

import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import type { NavbarComponentProps, NavItem } from "./types";
import Title from "@/assets/images/layout/title.svg";
import LogoDe from "@/assets/images/layout/logo.png";
import Image from "next/image";

const Logo = () => (
  <Link href="/" className="flex items-center space-x-3">
    <Image 
      src={LogoDe} 
      alt="Logo Desa" 
      className="w-8 h-8 md:w-12 md:h-12 object-contain" 
      draggable="false"
    />
    <Image 
      src={Title} 
      alt="Title" 
      className="h-8 md:h-12" 
      draggable="false"
    />
  </Link>
);

const DesktopNavigation = ({ navItems }: { navItems: NavItem[] }) => (
  <nav className="hidden lg:flex lg:w-xl items-center justify-between space-x-8">
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

const MobileMenuButton = ({ 
  onClick, 
  isOpen 
}: { 
  onClick: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={onClick}
    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
    aria-label="Toggle mobile menu"
  >
    <div className="relative w-6 h-6">
      <Menu 
        className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
          isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
        }`} 
      />
      <X 
        className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${
          isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
        }`} 
      />
    </div>
  </button>
);

export const NavbarComponent = ({
  navItems,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
  className = "",
}: NavbarComponentProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        const navbar = target.closest('header');
        const mobileMenu = target.closest('[data-mobile-menu]');
        
        if (!navbar && !mobileMenu) {
          onMobileMenuClose();
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, onMobileMenuClose]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
        <div className="mx-auto w-[80%] lg:max-w-6xl">
          <div className={`bg-white backdrop-blur-sm shadow-xl border border-gray-200/50 mt-4 transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'rounded-t-2xl rounded-b-2xl' 
              : 'rounded-4xl'
          }`}>
            <div className="flex items-center justify-between px-4 md:px-10 py-4">
              <Logo />
              <DesktopNavigation navItems={navItems} />
              <MobileMenuButton 
                onClick={onMobileMenuToggle} 
                isOpen={isMobileMenuOpen}
              />
            </div>

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {isMobileMenuOpen && (
                <>
                  {/* Separator line */}
                  <div className="border-t border-gray-100 mx-4 md:mx-10" />
                  
                  {/* Menu Items */}
                  <nav className="px-4 md:px-10 py-4 space-y-1">
                    {navItems.map((item, index) => (
                      <div
                        key={item.href}
                        className={`transform transition-all duration-300 ${
                          isMobileMenuOpen 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={onMobileMenuClose}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            item.isActive
                              ? "bg-gradient-to-r from-[#007EE8] to-[#66E077] bg-clip-text text-transparent"
                              : "text-gray-700 hover:bg-gray-50 hover:bg-gradient-to-r hover:from-[#007EE8] hover:to-[#66E077] hover:bg-clip-text hover:text-transparent"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-20 z-40 lg:hidden"
          onClick={onMobileMenuClose}
        />
      )}
    </>
  );
};