import { Home, TrendingUp, Building2, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "buyers",
    title: "Home Buying",
    description:
      "Find your perfect home with professional guidance and market expertise. Access listings, get financing advice, and navigate the buying process confidently.",
    icon: Home,
    href: "/buyers",
    features: [
      "Property search assistance",
      "Market analysis",
      "Negotiation support",
      "Inspection guidance",
      "Financing consultation",
    ],
  },
  {
    id: "sellers",
    title: "Home Selling",
    description:
      "Maximize your home's value with strategic marketing and professional staging advice. Sell faster and get the best price in today's market.",
    icon: Building2,
    href: "/seller-resources",
    features: [
      "Home valuation",
      "Selling checklist",
      "Marketing strategy",
      "Staging advice",
      "Closing coordination",
    ],
  },
  {
    id: "investors",
    title: "Investment Analysis",
    description:
      "Make data-driven investment decisions with professional analysis tools. Analyze rental properties, calculate ROI, and build a profitable portfolio.",
    icon: TrendingUp,
    href: "/investor",
    features: [
      "Pro forma analysis",
      "Cap rate calculation",
      "ROI projections",
      "Cash flow analysis",
      "Market insights",
    ],
  },
];
