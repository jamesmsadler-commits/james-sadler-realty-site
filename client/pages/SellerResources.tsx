import { Link } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ResourceGrid from "@/components/seller-resources/ResourceGrid";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight } from "lucide-react";
import { sellerResources } from "@/data/seller-resources";

export default function SellerResources() {
  return (
    <Layout>
      <div className="flex flex-col">
        <PageHeader
          icon={Building2}
          title="Seller Resources"
          description="Comprehensive guides, checklists, and tools to help you prepare your home for sale and navigate the selling process successfully."
          backLink={{ label: "Back to Home", href: "/" }}
        />

        {/* Introduction Section */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Get Ready to Sell</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Selling your home is a significant decision. The resources below are designed to help you understand the selling process, prepare your home effectively, and maximize your sale price. From comprehensive checklists to market analysis tools, you'll find everything you need to sell with confidence.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you're a first-time seller or have sold before, these guides and tools will walk you through every step and help you avoid common mistakes.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Available Resources</h2>
            <ResourceGrid resources={sellerResources} columns={3} />
          </div>
        </section>

        {/* Selling Process Section */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">The Selling Timeline</h2>

            <div className="space-y-6">
              {[
                {
                  phase: "Preparation (4-8 Weeks)",
                  steps: [
                    "Get your home inspected",
                    "Decide on repairs and improvements",
                    "Deep clean and depersonalize",
                    "Take professional photos",
                    "Determine market value",
                  ],
                },
                {
                  phase: "Listing (Week 1-2)",
                  steps: [
                    "List your property on MLS",
                    "Host open houses",
                    "Show property to buyers",
                    "Field inquiries",
                    "Collect feedback from showings",
                  ],
                },
                {
                  phase: "Negotiation (Week 2-4)",
                  steps: [
                    "Receive and review offers",
                    "Counter offers from buyers",
                    "Negotiate terms and price",
                    "Accept an offer",
                    "Enter into contract",
                  ],
                },
                {
                  phase: "Inspection & Appraisal (30 Days)",
                  steps: [
                    "Buyer conducts inspection",
                    "Address inspection issues",
                    "Home is appraised",
                    "Buyer secures financing",
                    "Clear any contingencies",
                  ],
                },
                {
                  phase: "Closing (Final Week)",
                  steps: [
                    "Final walkthrough",
                    "Review closing documents",
                    "Update insurance",
                    "Arrange utility transfers",
                    "Sign documents and close",
                  ],
                },
              ].map((timeline, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{timeline.phase}</h3>
                  <ul className="space-y-2">
                    {timeline.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-center gap-3 text-slate-600">
                        <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                          <span className="text-xs text-blue-600 font-bold">✓</span>
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Selling Tips */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Essential Selling Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Price Competitively",
                  description: "Work with your agent to research comparable sales and price your home to attract serious buyers quickly.",
                },
                {
                  title: "Enhance Curb Appeal",
                  description: "First impressions matter. A well-maintained exterior and landscaping can increase buyer interest significantly.",
                },
                {
                  title: "Stage Your Home",
                  description: "Declutter, depersonalize, and arrange furniture to help buyers envision themselves living in your home.",
                },
                {
                  title: "Be Flexible with Showings",
                  description: "The more accessible your home, the more potential buyers will see it. Be ready for showings with minimal notice.",
                },
                {
                  title: "Prepare Documentation",
                  description: "Gather receipts for improvements, warranties for appliances, and maintenance records to provide to buyers.",
                },
                {
                  title: "Work with Your Agent",
                  description: "Your agent's negotiation skills and market knowledge are invaluable in getting the best terms and price.",
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Sell Your Home?</h2>
            <p className="text-blue-100 text-lg mb-8">
              I'll help you prepare, market, and sell your home for the best possible price. Let's discuss your selling goals.
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
