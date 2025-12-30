import { Testimonial } from "@/lib/testimonials";
import { Users } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "simple" | "featured";
}

export default function TestimonialCard({
  testimonial,
  variant = "simple",
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  if (variant === "featured") {
    return (
      <div className="bg-white rounded-xl p-8 border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow">
        {renderStars(testimonial.rating)}
        <p className="text-slate-700 italic my-4 text-lg leading-relaxed">
          "{testimonial.content}"
        </p>
        <div className="flex items-center gap-4">
          {testimonial.photo ? (
            <img
              src={testimonial.photo}
              alt={testimonial.clientName}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          )}
          <div>
            <p className="font-semibold text-slate-900">{testimonial.clientName}</p>
            {testimonial.role && (
              <p className="text-sm text-slate-600">{testimonial.role}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Simple variant
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      {renderStars(testimonial.rating)}
      <p className="text-slate-700 my-3 text-sm leading-relaxed">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-3">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={testimonial.clientName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-900 text-sm">
            {testimonial.clientName}
          </p>
          {testimonial.role && (
            <p className="text-xs text-slate-600">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  );
}
