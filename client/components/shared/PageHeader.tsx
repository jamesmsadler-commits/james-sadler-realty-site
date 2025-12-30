import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  backLink?: {
    label: string;
    href: string;
  };
  features?: string[];
}

export default function PageHeader({
  icon: Icon,
  title,
  description,
  backLink,
  features,
}: PageHeaderProps) {
  return (
    <section className="pt-12 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        {backLink && (
          <Link
            to={backLink.href}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLink.label}
          </Link>
        )}

        {/* Header Content */}
        <div className="flex items-start gap-4 mb-8">
          {Icon && (
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
          )}
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">{title}</h1>
            {description && (
              <p className="text-xl text-slate-600 max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Features/Pills */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-200">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="text-sm text-slate-700 bg-white px-4 py-2 rounded-full border border-slate-200"
              >
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
