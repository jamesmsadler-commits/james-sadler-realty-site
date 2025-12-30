import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import { getFeaturedTestimonials, getTestimonialsByType } from "@/lib/testimonials";
import { ArrowRight, ArrowLeft, BarChart3, Home, Building2, TrendingUp, DollarSign, Zap } from "lucide-react";

export default function InvestorHub() {
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
            <a href="#tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Tools
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
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-4">Real Estate Investment Analysis</h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Professional pro forma tools to analyze single-family and multifamily rental properties with precision and confidence.
              </p>
            </div>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Financial Analysis
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Key Metrics
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Custom Unit Types
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Tools Section */}
      <section id="tools" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Choose Your Analysis Tool</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential Calculator */}
            <Link to="/investor/residential">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border-2 border-blue-300 shadow-md hover:shadow-lg hover:scale-105 transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Residential Single-Family</h3>
                <p className="text-slate-600 mb-6">
                  Analyze single-family rental properties with standard income and expense categories. Perfect for evaluating individual rental investments.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Cap Rate calculation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Cash-on-Cash Return analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>Mortgage & financing options</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span>DSCR calculation</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  Open Calculator <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>

            {/* Commercial Calculator */}
            <Link to="/investor/commercial">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-2 border-slate-300 shadow-md hover:shadow-lg hover:scale-105 transition-all h-full">
                <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Multifamily</h3>
                <p className="text-slate-600 mb-6">
                  Analyze multifamily commercial properties with customizable income and expense categories. Support for multiple unit types and rates.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Rental unit mix analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Custom income categories</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Per-unit metrics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 rounded-full bg-slate-300 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-slate-600 font-bold">✓</span>
                    </span>
                    <span>Advanced expense tracking</span>
                  </div>
                </div>

                <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white gap-2">
                  Open Calculator <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Why Use Our Analysis Tools?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Professional-Grade Analysis</h3>
              <p className="text-slate-600">
                Industry-standard calculations used by lenders, appraisers, and professional investors. Get the same analytical rigor as Wall Street.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Instant Results</h3>
              <p className="text-slate-600">
                See real-time calculations as you adjust assumptions. Analyze dozens of deals in the time it takes to analyze one manually.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Metrics at a Glance</h3>
              <p className="text-slate-600">
                Cap Rate, Cash-on-Cash Return, DSCR, and ROI - all the metrics you need to compare opportunities and make confident decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600">
                Work with a real estate professional who understands investment analysis. I'm here to help you make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection
        testimonials={getTestimonialsByType("investor")}
        title="What Investor Clients Say"
        description="Real investors share their experience working with me on property analysis and investment strategy."
        clientType="investor"
        columns={3}
        variant="featured"
        maxItems={3}
        showCTA={false}
      />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Analyze Your Next Deal?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Get instant insights into your potential rental investment with detailed financial analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investor/residential">
              <Button className="bg-white hover:bg-blue-50 text-blue-600 font-semibold gap-2 px-8">
                Start Analysis <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 font-semibold gap-2 px-8">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
              <p className="text-sm">Real estate investing analysis tools</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/investor/residential" className="hover:text-white transition-colors">Residential Calculator</Link></li>
                <li><Link to="/investor/commercial" className="hover:text-white transition-colors">Commercial Calculator</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
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
