export interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

export interface NavbarProps {
  className?: string
}

export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export interface NavbarComponentProps extends NavbarProps {
  navItems: NavItem[]
  isMobileMenuOpen: boolean
  onMobileMenuToggle: () => void
  onMobileMenuClose: () => void
}
