"use client"

import { usePathname } from "next/navigation"
import { NavbarComponent } from "./components"
import { useNavbar } from "./hooks"
import type { NavbarProps, NavItem } from "./types"

const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Wisata", href: "/wisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Galeri", href: "/galeri" },
]

export const NavbarContainer = ({ className }: NavbarProps) => {
  const pathname = usePathname()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar()

  // Add active state to nav items based on current pathname
  const navItemsWithActiveState = NAV_ITEMS.map((item) => ({
    ...item,
    isActive: pathname === item.href,
  }))

  return (
    <NavbarComponent
      navItems={navItemsWithActiveState}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuToggle={toggleMobileMenu}
      onMobileMenuClose={closeMobileMenu}
      className={className}
    />
  )
}
