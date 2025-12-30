import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Briefcase, BarChart3, Home, TrendingUp, DollarSign, MapPin, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Navigation
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Schedule Consultation", href: "/contact" }}
      />

      <PageHeader
        icon={Briefcase}
        title="Services"
        description="Comprehensive real estate services for investors, buyers, and sellers. Whether you need investment analysis, property search, or market guidance, I'm here to help."
        backLink={{ label: "Back to Home", href: "/" }}
      />

      {/* Investor Services Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            Investor Services
          </h2>
          <p className="text-slate-600 mb-12 max-w-2xl">
            Professional analysis and guidance for real estate investors looking to build and optimize their portfolios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-slate-50 to-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Property Analysis</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive pro forma analysis of rental properties using industry-standard metrics and detailed financial projections.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cap Rate calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cash-on-Cash Return analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>DSCR and financing analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Customizable income and expenses</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-slate-50 to-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Investment Strategy Consulting</h3>
              <p className="text-slate-600 mb-6">
                Personalized guidance on investment strategy, market selection, and portfolio optimization based on your goals and risk tolerance.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Investment goal assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Market analysis and selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Deal evaluation framework</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Portfolio strategy development</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-slate-50 to-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financing & Loan Analysis</h3>
              <p className="text-slate-600 mb-6">
                Expert guidance on financing options, loan terms, and how different financing scenarios impact your returns and cash flow.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Loan term comparison</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Interest rate analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Cash flow impact modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Down payment strategy</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-slate-50 to-white">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Market Insights</h3>
              <p className="text-slate-600 mb-6">
                Deep understanding of local real estate markets, emerging opportunities, and investment trends in your target areas.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Market trend analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Neighborhood research</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Rental market data</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Opportunity identification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-300 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Analyze Your Next Investment?</h3>
            <Link to="/investor">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                Access Investor Tools <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer/Seller Services Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-300 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-slate-700" />
            </div>
            Buyer & Seller Services
          </h2>
          <p className="text-slate-600 mb-12 max-w-2xl">
            Complete real estate services for homebuyers and sellers, combining professional representation with market expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Buyer Representation</h3>
              <p className="text-slate-600 mb-6">
                Expert guidance throughout the home buying process, from pre-approval to closing, with your interests as the priority.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Property search and showings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Offer negotiation and strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Inspection and appraisal guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Close coordination and support</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seller Representation</h3>
              <p className="text-slate-600 mb-6">
                Strategic marketing and negotiation to help you sell your property quickly at the best possible price.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Pricing analysis and strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Professional marketing and staging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Showing coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Offer evaluation and negotiation</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Analysis & Guidance</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive market data and analysis to help you understand local conditions and make informed decisions.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Comparative market analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Neighborhood research</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Market trend insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Investment potential assessment</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consulting & Advisory</h3>
              <p className="text-slate-600 mb-6">
                Personal guidance on real estate decisions, from first-time buyer questions to complex transaction issues.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>First-time buyer guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Home inspection advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Financing consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600">✓</span>
                  <span>Transaction troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-100 border-2 border-slate-400 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Real Estate Journey?</h3>
            <Link to="/buyer-seller">
              <Button className="bg-slate-600 hover:bg-slate-700 text-white gap-2">
                Explore Buyer/Seller Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How I Work</h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Initial Consultation</h3>
                <p className="text-slate-600">
                  We start with a comprehensive discussion about your goals, timeline, and specific needs. This helps me understand exactly how to serve you best.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Analysis & Planning</h3>
                <p className="text-slate-600">
                  I conduct thorough analysis—whether it's property evaluation, market research, or financial analysis—and create a customized plan tailored to your situation.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Execution & Support</h3>
                <p className="text-slate-600">
                  I guide you through every step of the process, handling the details and keeping you informed every step of the way.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Completion & Follow-Up</h3>
                <p className="text-slate-600">
                  After closing or analysis completion, I remain available for questions and continued guidance as you move forward with your investment or purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Schedule a consultation to discuss how I can help you achieve your real estate goals.
          </p>
          <Link to="/contact">
            <Button className="bg-white hover:bg-blue-50 text-blue-600 font-semibold gap-2 px-8">
              Schedule Your Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
