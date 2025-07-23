import Footer from "@/shared/components/layout/footer/footer";
import { NavbarContainer } from "@/shared/components/layout/navbar/container";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavbarContainer />
      {children}
      <Footer />
    </div>
  );
}
