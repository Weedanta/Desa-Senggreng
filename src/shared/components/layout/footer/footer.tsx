"use client";

import React from 'react';
import Image from 'next/image';
import { FooterProps, NavigationItem, ContactInfo } from './Footer.types';
import Logo from '@/assets/images/layout/logo.png';

const FooterSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`flex flex-col ${className}`}>
    {children}
  </div>
);

const LogoSection: React.FC<{
  logoSrc?: string;
  desaName: string;
  websiteSubtitle: string;
}> = ({ logoSrc, desaName, websiteSubtitle }) => (
  <FooterSection className="justify-center">
    <div className="flex items-center gap-4">
      {logoSrc && (
        <div className="w-36 h-44 relative">
          <Image
            src={Logo}
            alt="Logo Desa"
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className='space-y-0.5'>
        <h2 className="text-2xl font-bold text-white font-sans" >
          {desaName}
        </h2>
        <p className="text-lg font-medium text-white">
          {websiteSubtitle}
        </p>
      </div>
    </div>
  </FooterSection>
);

const NavigationSection: React.FC<{
  title: string;
  items: NavigationItem[];
}> = ({ title, items }) => (
  <FooterSection>
    <h3 className="text-xl font-bold font-sans text-white mb-4">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="text-white hover:text-white-600 hover:underline hover:underline-offset-2  font-semibold transition-colors duration-200 text-lg"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </FooterSection>
);

const ContactSection: React.FC<{
  title: string;
  contact: ContactInfo;
}> = ({ title, contact }) => (
  <FooterSection>
    <h3 className="text-xl font-bold font-sans text-white mb-4">
      {title}
    </h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm font-bold">📷</span>
        </div>
        <span className="text-white/80 text-lg">
          @{contact.instagram}
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm">📞</span>
        </div>
        <span className="text-white/80 text-lg">
          {contact.phone}
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm">✉️</span>
        </div>
        <span className="text-white/80 text-lg break-all">
          {contact.email}
        </span>
      </div>
    </div>
  </FooterSection>
);

const CreditSection: React.FC = () => (
  <div className="text-center py-4 border-t bg-white border-white/20 font-sans">
    <p className="text-gray-800 text-sm">
      Made with ❤️ by{' '}
      <span className="font-semibold text-primary-500">
        MMD Filkom Kelompok 51
      </span>
    </p>
  </div>
);

export const Footer: React.FC<FooterProps> = ({
  navigation = [],
  contact = {
    instagram: 'pemdesasenggreng',
    phone: '085880530435',
    email: 'senggreng.sumberpucung@malangkab.go.id'
  },
  logoSrc = '/images/logo-desa.png',
  desaName = 'DESA Senggreng',
  websiteSubtitle = 'Website Wisata Desa Senggreng',
  className = ''
}) => {
  const defaultNavigation: NavigationItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang' },
    { label: 'Wisata', href: '/wisata' },
    { label: 'UMKM', href: '/umkm' },
    { label: 'Galeri', href: '/galeri' }
  ];

  const footerNavigation = navigation.length > 0 ? navigation : defaultNavigation;

  return (
    <section>
    <footer className={`bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 ${className}`}>
      <div className="mx-auto container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LogoSection
            logoSrc={logoSrc}
            desaName={desaName}
            websiteSubtitle={websiteSubtitle}
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NavigationSection
            title="Navigasi"
            items={footerNavigation}
          />
          <ContactSection
            title="Kontak Pelayanan"
            contact={contact}
          />
        </div>
        </div>
      </div>
    </footer>
        <CreditSection />
    </section>
  );
};

export default Footer;