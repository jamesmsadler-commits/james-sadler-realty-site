import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Ready to Get Started?",
  description = "Let's discuss your real estate goals and how I can help you achieve them. Schedule a free consultation today.",
}: CTASectionProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-blue-100 text-lg mb-8 leading-relaxed">{description}</p>
        <Link to="/contact">
          <Button className="bg-white hover:bg-blue-50 text-blue-600 font-semibold gap-2 px-8 py-3">
            Schedule Your Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
