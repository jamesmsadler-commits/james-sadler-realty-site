import { Link } from "react-router-dom";
import ProFormaCalculator from "@/components/ProFormaCalculator";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, DollarSign, TrendingUp, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900">ProForma</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-blue-600 font-semibold">Residential</span>
            <span className="text-slate-300">|</span>
            <Link to="/commercial" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Commercial
            </Link>
            <span className="text-slate-300">|</span>
            <a href="#calculator" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Calculator
            </a>
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Real Estate Investing Made Simple
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Analyze Your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Rental Properties</span> in Seconds
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get instant insights into your potential rental investment with detailed financial analysis. Choose between residential single-family or commercial multifamily analysis.
          </p>

          {/* Calculator Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 border-blue-300 shadow-md hover:shadow-lg transition-all">
              <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-slate-900 mb-3">Residential Single-Family</h2>
              <p className="text-sm text-slate-600 mb-6">
                Perfect for analyzing single-family rental properties with standard income and expense categories.
              </p>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-slate-200 shadow-md hover:shadow-lg hover:border-blue-200 transition-all">
              <Building2 className="w-10 h-10 text-slate-600 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-slate-900 mb-3">Commercial Multifamily</h2>
              <p className="text-sm text-slate-600 mb-6">
                Designed for multifamily commercial properties with customizable income and expense fields.
              </p>
              <Link to="/commercial">
                <Button
                  size="lg"
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white gap-2"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Accurate Numbers</h3>
              <p className="text-sm text-slate-600">Professional-grade financial calculations with real-time updates</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Key Metrics</h3>
              <p className="text-sm text-slate-600">Cap rate, cash-on-cash return, DSCR, and more at a glance</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Instant Analysis</h3>
              <p className="text-sm text-slate-600">Analyze deals in seconds, not hours. Compare properties instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="bg-white py-16">
        <ProFormaCalculator />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Complete Analysis Suite</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Cash Flow Analysis</h3>
              <p className="text-slate-600 mb-4">
                Detailed monthly and annual cash flow projections based on realistic property operating expenses.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Monthly gross and net income</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Operating expense breakdown</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Mortgage calculations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Investment Metrics</h3>
              <p className="text-slate-600 mb-4">
                Industry-standard metrics to evaluate investment performance and compare opportunities.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cap Rate</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cash-on-Cash Return</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Debt Service Coverage Ratio</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Loan Calculations</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive mortgage and financing analysis with flexible loan terms and rates.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Adjustable interest rates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Variable loan terms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Down payment flexibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Real-Time Updates</h3>
              <p className="text-slate-600 mb-4">
                See results instantly as you adjust property parameters and financing options.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Instant calculations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Live metric updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Responsive interface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Analyze Your Investment?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Start using our pro forma calculator today to make data-driven real estate investment decisions.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-blue-50 text-blue-600 font-semibold gap-2"
            onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white">ProForma</span>
          </div>
          <p className="mb-6">Professional rental property analysis for smarter investment decisions.</p>
          <p className="text-sm border-t border-slate-800 pt-6">
            © {new Date().getFullYear()} ProForma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
