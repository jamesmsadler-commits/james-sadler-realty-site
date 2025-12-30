import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">How I Can Help You</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing in Calgary real estate, I offer professional guidance and powerful tools to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} to={service.href} className="group">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>

                  <p className="text-slate-600 mb-6 flex-1 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="flex h-5 w-5 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                          <span className="text-xs text-blue-600 font-bold">✓</span>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
