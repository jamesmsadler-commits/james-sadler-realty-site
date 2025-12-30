import { ReactNode } from "react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  variant?: "default" | "primary";
}

interface LayoutProps {
  children: ReactNode;
  navLinks?: NavLink[];
  navCta?: NavLink;
  footerCompanyDescription?: string;
}

export default function Layout({
  children,
  navLinks,
  navCta,
  footerCompanyDescription = "Real estate buying, selling, and investing in Calgary, Alberta",
}: LayoutProps) {
  // Default navigation links for all pages
  const defaultNavLinks: NavLink[] = navLinks || [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Buyers", href: "/buyers" },
    { label: "Sellers", href: "/seller-resources" },
    { label: "Investors", href: "/investor" },
  ];

  // Default CTA button
  const defaultCta = navCta || { label: "Contact", href: "/contact" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Navigation links={defaultNavLinks} cta={defaultCta} />
      <div className="flex-1">{children}</div>
      <Footer companyDescription={footerCompanyDescription} />
    </div>
  );
}
