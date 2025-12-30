import { Testimonial } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";

interface TestimonialGridProps {
  testimonials: Testimonial[];
  variant?: "simple" | "featured";
  columns?: 1 | 2 | 3;
}

export default function TestimonialGrid({
  testimonials,
  variant = "simple",
  columns = 3,
}: TestimonialGridProps) {
  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No testimonials available.</p>
      </div>
    );
  }

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridColsClass[columns]} gap-6`}>
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          variant={variant}
        />
      ))}
    </div>
  );
}
