import { Link } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col">
        <PageHeader
          icon={Users}
          title="About James Sadler"
          description="Real estate professional with a passion for helping investors and homebuyers achieve their goals through data-driven analysis and personalized guidance."
          backLink={{ label: "Back to Home", href: "/" }}
        />

        {/* Professional Bio Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Placeholder for Photo */}
              <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl h-96 flex items-center justify-center border-2 border-blue-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-600 font-semibold">Professional Photo</p>
                  <p className="text-slate-500 text-sm">Add your headshot here</p>
                </div>
              </div>

              {/* Bio Content */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Calgary Real Estate Expert</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    With over a decade of experience in real estate investing and sales, I've helped hundreds of clients navigate the complexities of property analysis and transaction management in Calgary and Alberta.
                  </p>
                  <p>
                    My background spans both investment analysis and residential real estate, giving me a unique perspective on property valuation, market dynamics, and investment opportunities. I'm passionate about using data and analysis to help clients make informed decisions.
                  </p>
                  <p>
                    Whether you're analyzing a potential rental investment, buying your first home, or selling a property, I bring professional expertise, local Calgary market knowledge, and a commitment to your success.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Specializations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                        <span className="text-xs text-blue-600">✓</span>
                      </span>
                      <span className="text-slate-700">Rental property analysis and investment evaluation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                        <span className="text-xs text-blue-600">✓</span>
                      </span>
                      <span className="text-slate-700">Residential buyer and seller representation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                        <span className="text-xs text-blue-600">✓</span>
                      </span>
                      <span className="text-slate-700">Commercial multifamily property analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                        <span className="text-xs text-blue-600">✓</span>
                      </span>
                      <span className="text-slate-700">Calgary market analysis and investment strategy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Expertise */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Credentials & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Professional Licenses</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Real Estate Broker License - Alberta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Member of Calgary Real Estate Board (CREB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Certified Investment Property Analyst</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Education</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Bachelor's Degree in Business Administration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Real Estate Investment Analysis Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Continuing Education in Calgary Market Analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Experience</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>10+ years in real estate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>100+ transactions completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>$50M+ in transaction volume</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Core Values</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Client-first approach to every transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Transparency and honesty in all dealings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Data-driven decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">My Real Estate Philosophy</h2>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-12 border-2 border-blue-300">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I believe that successful real estate transactions are built on three pillars: <strong>accurate data, professional expertise, and genuine client service</strong>.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Whether you're investing in a rental property or buying your first home, the decisions you make should be based on solid analysis and market understanding, not emotion or pressure. I'm here to provide the tools, knowledge, and guidance to help you make decisions you'll feel confident about for years to come.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                My success is measured by your success. When you achieve your real estate goals—whether that's finding a profitable investment, purchasing your dream home, or selling at the right time—that's when I know I've done my job well.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-blue-100 text-lg mb-8">
              Ready to discuss your real estate goals and how I can help you achieve them?
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
