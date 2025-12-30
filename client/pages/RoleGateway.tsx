import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, Home, TrendingUp, Star } from "lucide-react";

export default function RoleGateway() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">James Sadler</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <span className="text-slate-300">|</span>
            <a href="#testimonials" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Testimonials
            </a>
            <span className="text-slate-300">|</span>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 pt-16 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              Your Real Estate Partner
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Find Your Next Real Estate <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Opportunity</span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're an investor analyzing rental properties or a buyer/seller navigating the market, we have the tools and expertise to help you succeed.
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Investor Card */}
            <Link to="/investor" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-10 border-2 border-blue-300 shadow-md hover:shadow-xl hover:border-blue-400 transition-all h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">I'm an Investor</h2>
                </div>

                <p className="text-slate-600 mb-6 flex-1">
                  Analyze rental properties with professional-grade pro forma tools. Evaluate cap rates, cash flow, and investment metrics.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Residential single-family analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Commercial multifamily tools</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Investment guides & resources</span>
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>

            {/* Buyer/Seller Card */}
            <Link to="/buyer-seller" className="group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 border-2 border-slate-300 shadow-md hover:shadow-xl hover:border-blue-300 transition-all h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">I'm Buying or Selling</h2>
                </div>

                <p className="text-slate-600 mb-6 flex-1">
                  Search properties, explore market insights, and get expert guidance. Whether buying your first home or selling an investment property.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Property search & listings</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Market analysis & trends</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Buyer & seller guides</span>
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div id="testimonials" className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              What Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-3">
                  "James helped me analyze multiple properties and find the perfect investment. His expertise in real estate analysis is invaluable."
                </p>
                <p className="font-semibold text-slate-900">Sarah M. - Real Estate Investor</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-3">
                  "As a first-time homebuyer, James made the process smooth and stress-free. Highly recommended!"
                </p>
                <p className="font-semibold text-slate-900">Michael T. - Homebuyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">James Sadler</span>
              </div>
              <p className="text-sm">Professional real estate investing and sales</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} James Sadler Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
