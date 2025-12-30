import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckSquare, TrendingUp, Home, DollarSign, Users } from "lucide-react";
import { SellerResource } from "@/data/seller-resources";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  CheckSquare,
  TrendingUp,
  Home,
  DollarSign,
  Users,
};

interface ResourceCardProps {
  resource: SellerResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = iconMap[resource.icon] || FileText;

  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {resource.category === "guide"
            ? "Guide"
            : resource.category === "checklist"
              ? "Checklist"
              : resource.category === "tool"
                ? "Tool"
                : "Market Insights"}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">{resource.title}</h3>
      <p className="text-slate-600 mb-6 flex-1">{resource.description}</p>

      <Link to={`/seller-resources/${resource.id}`} className="w-full">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
          Read More <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
