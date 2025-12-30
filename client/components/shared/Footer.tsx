import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  companyDescription?: string;
}

export default function Footer({
  sections,
  companyDescription = "Professional real estate services in Calgary, Alberta. Buying, selling, and investment analysis.",
}: FooterProps) {
  const defaultSections: FooterSection[] = sections || [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Buyers", href: "/buyers" },
        { label: "Sellers", href: "/seller-resources" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Investor Tools",
      links: [
        { label: "Residential Calculator", href: "/investor/residential" },
        { label: "Commercial Calculator", href: "/investor/commercial" },
        { label: "ROI Calculator", href: "/investor/roi" },
        { label: "Cap Rate Analyzer", href: "/investor/cap-rate" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">James Sadler</span>
            </div>
            <p className="text-sm">{companyDescription}</p>
          </div>

          {/* Dynamic Sections */}
          {defaultSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} James Sadler Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
