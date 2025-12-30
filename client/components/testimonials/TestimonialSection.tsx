import { Link } from "react-router-dom";
import { Testimonial, ClientType } from "@/lib/testimonials";
import TestimonialGrid from "./TestimonialGrid";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  clientType?: ClientType;
  variant?: "simple" | "featured";
  columns?: 1 | 2 | 3;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  maxItems?: number;
}

export default function TestimonialSection({
  testimonials,
  title = "What Clients Say",
  description,
  clientType,
  variant = "simple",
  columns = 3,
  showCTA = false,
  ctaText = "Read All Testimonials",
  ctaHref = "/testimonials",
  maxItems = undefined,
}: TestimonialSectionProps) {
  let displayTestimonials = testimonials;

  // Filter by client type if specified
  if (clientType) {
    displayTestimonials = testimonials.filter(
      (t) => t.clientType === clientType || t.clientType === "both"
    );
  }

  // Limit items if specified
  if (maxItems) {
    displayTestimonials = displayTestimonials.slice(0, maxItems);
  }

  if (displayTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          {description && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <TestimonialGrid
          testimonials={displayTestimonials}
          variant={variant}
          columns={columns}
        />

        {showCTA && (
          <div className="mt-12 text-center">
            <Link to={ctaHref}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
