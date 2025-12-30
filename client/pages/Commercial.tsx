import { Link } from "react-router-dom";
import CommercialProFormaCalculator from "@/components/CommercialProFormaCalculator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Building2, TrendingUp } from "lucide-react";

export default function Commercial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900">ProForma</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Residential
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-blue-600 font-semibold">Commercial</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Residential
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900">Commercial Multifamily</h1>
          </div>
          
          <p className="text-xl text-slate-600 mb-4 max-w-2xl">
            Professional-grade pro forma analysis for commercial multifamily properties. Customize your income and expense categories to match your specific property type.
          </p>

          <div className="flex flex-wrap gap-3 pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Custom Income Categories
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Flexible Expense Tracking
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Building2 className="w-4 h-4 text-blue-600" />
              Per-Unit Analysis
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-white py-16">
        <CommercialProFormaCalculator />
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Commercial Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Custom Income Categories</h3>
              <p className="text-slate-600 mb-4">
                Add unlimited income sources including rental income, parking fees, laundry revenue, pet fees, and other ancillary income streams specific to your property.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Unlimited income line items</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Vacancy rate applied to total income</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Real-time income calculations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Flexible Expense Tracking</h3>
              <p className="text-slate-600 mb-4">
                Customize expense categories for your property. Track property management fees, taxes, insurance, maintenance, utilities, and other operating expenses.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Unlimited expense categories</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Pre-populated common expenses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Add or remove categories anytime</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Per-Unit Analysis</h3>
              <p className="text-slate-600 mb-4">
                Get detailed metrics on a per-unit basis to understand income and expense efficiency across your multifamily property portfolio.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Price per unit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Income per unit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>NOI per unit analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Professional Metrics</h3>
              <p className="text-slate-600 mb-4">
                Industry-standard metrics used by lenders and investors to evaluate multifamily property performance and comparability.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cap Rate calculation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>DSCR (Debt Service Coverage)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cash-on-Cash Return</span>
                </li>
              </ul>
            </div>
          </div>
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
