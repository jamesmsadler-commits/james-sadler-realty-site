import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export default function AgentBioSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Placeholder for Photo */}
          <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl h-80 flex items-center justify-center border-2 border-blue-300">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <p className="text-slate-600 font-semibold">James Sadler</p>
              <p className="text-slate-500 text-sm">Real Estate Agent - Calgary, AB</p>
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Calgary Real Estate Partner</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With over 10 years of experience in real estate investing and sales, I've helped hundreds of clients navigate the Calgary market with confidence. Whether you're buying your first home, selling an investment property, or analyzing rental opportunities, I bring professional expertise and data-driven insights to every transaction.
              </p>
              <p>
                My background spans residential buying and selling, rental property analysis, and commercial multifamily investments. I'm passionate about using detailed market analysis and professional guidance to help you make decisions that align with your goals.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="font-semibold text-slate-900">Specializations</h3>
              <ul className="space-y-2">
                {[
                  "Residential buyer and seller representation",
                  "Rental property analysis and investment evaluation",
                  "Commercial multifamily property analysis",
                  "Calgary market analysis and investment strategy",
                ].map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                      <span className="text-xs text-blue-600 font-bold">✓</span>
                    </span>
                    <span className="text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about">
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8">
                Learn More About Me <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
