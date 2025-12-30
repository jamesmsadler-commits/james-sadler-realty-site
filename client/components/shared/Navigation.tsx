import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  variant?: "default" | "primary"; // primary for CTA buttons
}

interface NavigationProps {
  links?: NavLink[];
  cta?: NavLink;
  logoHref?: string;
  brandName?: string;
}

export default function Navigation({
  links = [],
  cta,
  logoHref = "/",
  brandName = "James Sadler",
}: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={logoHref} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-900">{brandName}</span>
        </Link>

        {/* Right side - Links and CTA */}
        <div className="flex items-center gap-4">
          {links.length > 0 && (
            <>
              {links.map((link, index) => (
                <div key={`${link.label}-${index}`} className="flex items-center gap-4">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition-colors ${
                        link.variant === "primary"
                          ? "text-blue-600 hover:text-blue-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm transition-colors ${
                        link.variant === "primary"
                          ? "text-blue-600 hover:text-blue-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                  {index < links.length - 1 && (
                    <span className="text-slate-300">|</span>
                  )}
                </div>
              ))}

              {cta && (
                <>
                  <span className="text-slate-300">|</span>
                  {cta.external ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <Link
                      to={cta.href}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {cta.label}
                    </Link>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
