import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // ✅ Semua weights Poppins
  display: "swap", // ✅ Untuk performa loading
});

export const metadata: Metadata = {
  title: "Desa Senggreng Profile",
  description: "Desa Senggreng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}