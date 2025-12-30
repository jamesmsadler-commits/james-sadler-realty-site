import { Link } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Home, ExternalLink, CheckCircle, TrendingUp, MapPin, ArrowRight } from "lucide-react";

export default function BuyersGuide() {
  // Alberta MLS website
  const mlsLink = "https://www.realtor.ca/";

  return (
    <Layout>
      <div className="flex flex-col">
        <PageHeader
          icon={Home}
          title="Find Your Next Home"
          description="Browse available properties in Calgary and explore our comprehensive buying resources to help you make informed decisions."
          backLink={{ label: "Back to Home", href: "/" }}
        />

        {/* Quick Search CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-blue-300 shadow-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Start Your Property Search</h2>
              <p className="text-slate-600 mb-6">
                Access thousands of available properties in Calgary and the surrounding areas. Browse listings, compare homes, and find your perfect property.
              </p>
              <a href={mlsLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8">
                  Search Properties on MLS <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Buying Process Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Home Buying Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: 1,
                  title: "Get Pre-Approved",
                  description: "Get a mortgage pre-approval to know your budget and show sellers you're serious.",
                  icon: CheckCircle,
                },
                {
                  step: 2,
                  title: "Search Properties",
                  description: "Browse available homes that match your needs, budget, and location preferences.",
                  icon: MapPin,
                },
                {
                  step: 3,
                  title: "Schedule Viewings",
                  description: "Tour homes with your agent and identify properties that interest you.",
                  icon: Home,
                },
                {
                  step: 4,
                  title: "Make an Offer",
                  description: "Submit a competitive offer with guidance on price, terms, and conditions.",
                  icon: TrendingUp,
                },
                {
                  step: 5,
                  title: "Home Inspection",
                  description: "Get a professional inspection to identify any potential issues before closing.",
                  icon: CheckCircle,
                },
                {
                  step: 6,
                  title: "Closing",
                  description: "Finalize financing, sign documents, and take possession of your new home.",
                  icon: Home,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100">
                          <span className="text-lg font-bold text-blue-600">{item.step}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Buying Resources */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Buying Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">First-Time Buyer Guide</h3>
                <p className="text-slate-600 mb-6">
                  New to buying a home? This comprehensive guide covers everything from pre-approval to closing, with tips for first-time buyers navigating the Calgary market.
                </p>
                <Link to="/seller-resources">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Calgary Neighborhoods</h3>
                <p className="text-slate-600 mb-6">
                  Explore different areas of Calgary, learn about neighborhood characteristics, amenities, schools, and average home prices to help choose the right location.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Neighborhoods <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Mortgage Calculator</h3>
                <p className="text-slate-600 mb-6">
                  Use our mortgage calculator to estimate monthly payments based on home price, down payment, and interest rate assumptions.
                </p>
                <Button variant="outline" className="w-full">
                  Calculate Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Market Analysis</h3>
                <p className="text-slate-600 mb-6">
                  Stay informed about Calgary's real estate market with current trends, price analysis, and market forecasts to guide your buying decision.
                </p>
                <Button variant="outline" className="w-full">
                  View Market Data <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Buying Tips */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Tips for Successful Buying</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Get Pre-Approved Before Searching",
                  description: "Knowing your budget helps you focus on properties you can afford and shows sellers you're a serious buyer.",
                },
                {
                  title: "Work with a Knowledgeable Agent",
                  description: "An experienced agent knows the Calgary market, can negotiate on your behalf, and helps you avoid costly mistakes.",
                },
                {
                  title: "Don't Skip the Home Inspection",
                  description: "A professional inspection reveals potential issues and can save you thousands in unexpected repairs.",
                },
                {
                  title: "Understand Market Conditions",
                  description: "Know whether it's a buyer's or seller's market to negotiate better terms and make strategic offers.",
                },
                {
                  title: "Budget for Closing Costs",
                  description: "Beyond the down payment, budget for legal fees, inspections, appraisals, and title insurance at closing.",
                },
                {
                  title: "Think Long-Term",
                  description: "Consider whether the property and neighborhood fit your long-term plans, not just current needs.",
                },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{tip.title}</h3>
                  <p className="text-slate-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Your Home?</h2>
            <p className="text-blue-100 text-lg mb-8">
              As your Calgary real estate agent, I'll guide you through the entire buying process and help you find the right home at the right price.
            </p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-blue-50 text-blue-600 font-semibold gap-2 px-8">
                Schedule Your Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
