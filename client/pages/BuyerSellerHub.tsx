import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import { getTestimonialsByType } from "@/lib/testimonials";
import { ArrowRight, ArrowLeft, BarChart3, Home, Search, TrendingUp, MapPin, Shield } from "lucide-react";

export default function BuyerSellerHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">James Sadler</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">|</span>
            <a href="#search" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Property Search
            </a>
            <span className="text-slate-300">|</span>
            <Link to="/contact" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-4">Your Real Estate Journey Starts Here</h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Whether you're buying your first home, selling an investment property, or navigating the market, I'm here to guide you through every step.
              </p>
            </div>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <Search className="w-4 h-4 text-blue-600" />
              Property Search
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <MapPin className="w-4 h-4 text-blue-600" />
              Market Insights
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <Shield className="w-4 h-4 text-blue-600" />
              Expert Guidance
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section id="search" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Find Your Next Property</h2>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-12 border-2 border-blue-300 text-center">
            <Search className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Access Our Full Property Listings</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Browse available properties in your market, view detailed listings, and get comprehensive market data to inform your decision.
            </p>
            <a href="https://jamessadler.exprealty.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8 py-6 text-lg">
                Search Properties <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <p className="text-sm text-slate-500 mt-4">
              Opens our comprehensive property search powered by eXp Realty
            </p>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Are You a Buyer?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">First-Time Buyer Guide</h3>
              <p className="text-slate-600 text-sm">
                New to buying? Get our comprehensive guide covering everything from pre-approval to closing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Market Analysis</h3>
              <p className="text-slate-600 text-sm">
                Understand local market trends, pricing data, and neighborhood insights to make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Expert Representation</h3>
              <p className="text-slate-600 text-sm">
                Get professional guidance through every step of the buying process with a trusted expert.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Home Search?</h3>
            <p className="text-slate-600 mb-6">
              Let's discuss your goals and find the perfect property for you.
            </p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                Schedule Your Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Are You a Seller?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Pricing Strategy</h3>
              <p className="text-slate-600 text-sm">
                Get a market-based valuation and pricing strategy that helps your property sell quickly at the best price.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Selling Checklist</h3>
              <p className="text-slate-600 text-sm">
                Prepare your property with our comprehensive selling guide and preparation tips.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Full Service Marketing</h3>
              <p className="text-slate-600 text-sm">
                Professional marketing, staging advice, and buyer negotiation support to maximize your sale price.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-slate-100 border-2 border-slate-400 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Sell Your Property?</h3>
            <p className="text-slate-600 mb-6">
              Get a no-obligation consultation and market analysis to understand your property's potential.
            </p>
            <Link to="/contact">
              <Button className="bg-slate-600 hover:bg-slate-700 text-white gap-2">
                Get Your Market Analysis <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Work With Me?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Professional Expertise</h3>
                  <p className="text-slate-600 text-sm">
                    Years of experience in residential sales and investment analysis. I understand both sides of real estate transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Data-Driven Approach</h3>
                  <p className="text-slate-600 text-sm">
                    Backed by market analysis, comparative data, and financial analysis tools. Decisions based on facts, not emotions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Local Market Knowledge</h3>
                  <p className="text-slate-600 text-sm">
                    Deep understanding of local neighborhoods, market trends, and what different areas have to offer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Personal Attention</h3>
                  <p className="text-slate-600 text-sm">
                    You work directly with me, not a team of assistants. Your priorities are my priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection
        testimonials={getTestimonialsByType("buyer")}
        title="What Buyer & Seller Clients Say"
        description="Real clients share their experience working with me on buying, selling, and market analysis."
        clientType="buyer"
        columns={3}
        variant="featured"
        maxItems={3}
        showCTA={false}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">James Sadler</span>
              </div>
              <p className="text-sm">Real estate buying, selling, and investing</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://jamessadler.exprealty.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Property Search</a></li>
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/investor" className="hover:text-white transition-colors">Investor Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">More</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
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
