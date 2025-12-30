export type ClientType = "investor" | "buyer" | "seller" | "both";

export interface Testimonial {
  id: string;
  clientName: string;
  clientType: ClientType;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  photo?: string; // URL or placeholder
  role?: string; // e.g., "Real Estate Investor", "Homebuyer"
  featured: boolean;
  date: string; // ISO date string
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    clientName: "Sarah Martinez",
    clientType: "investor",
    content:
      "James helped me analyze my first rental property investment. His expertise in real estate analysis and pro forma calculations gave me the confidence to make the purchase. The detailed financial breakdown was invaluable in my decision-making process.",
    rating: 5,
    role: "Real Estate Investor",
    featured: true,
    date: "2024-01-15",
  },
  {
    id: "testimonial-2",
    clientName: "Michael Thompson",
    clientType: "buyer",
    content:
      "As a first-time homebuyer, I was nervous about the process. James walked me through every step with patience and expertise. He found me the perfect home in my budget and negotiated a great deal. Highly recommended!",
    rating: 5,
    role: "Homebuyer",
    featured: true,
    date: "2024-01-10",
  },
  {
    id: "testimonial-3",
    clientName: "Jennifer Davis",
    clientType: "seller",
    content:
      "Selling my home was made stress-free thanks to James. His marketing strategy and negotiation skills resulted in a sale price higher than our initial asking price. His professional approach and market knowledge were key factors in our success.",
    rating: 5,
    role: "Home Seller",
    featured: true,
    date: "2024-01-05",
  },
  {
    id: "testimonial-4",
    clientName: "David Chen",
    clientType: "investor",
    content:
      "I've worked with James on multiple investment property analyses. His pro forma tool is incredibly detailed and has helped me compare different properties objectively. The metrics and analysis are professional-grade.",
    rating: 5,
    role: "Multifamily Investor",
    featured: false,
    date: "2023-12-28",
  },
  {
    id: "testimonial-5",
    clientName: "Emily Rodriguez",
    clientType: "both",
    content:
      "James provided exceptional service both when I was buying my primary residence and later when analyzing rental properties as investments. His dual expertise in both personal real estate and investment analysis is unique.",
    rating: 5,
    role: "Homeowner & Investor",
    featured: false,
    date: "2023-12-20",
  },
  {
    id: "testimonial-6",
    clientName: "Robert Johnson",
    clientType: "investor",
    content:
      "The detailed financial analysis James provided helped me understand the true cash flow potential of a commercial property. His understanding of financing options and their impact on returns was eye-opening.",
    rating: 5,
    role: "Commercial Real Estate Investor",
    featured: false,
    date: "2023-12-15",
  },
  {
    id: "testimonial-7",
    clientName: "Amanda Wilson",
    clientType: "buyer",
    content:
      "James provided detailed market analysis for the neighborhood where I wanted to buy. His insights about the area helped me make a confident decision. Excellent service from start to finish.",
    rating: 5,
    role: "First-Time Homebuyer",
    featured: false,
    date: "2023-12-10",
  },
  {
    id: "testimonial-8",
    clientName: "Thomas Brown",
    clientType: "seller",
    content:
      "Selling with James was a game-changer. He used data-driven pricing strategy and professional staging recommendations that attracted multiple offers. Ended up selling above asking price in just two weeks.",
    rating: 5,
    role: "Property Seller",
    featured: false,
    date: "2023-12-05",
  },
];

/**
 * Get featured testimonials (used for homepage/hero sections)
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured).slice(0, 3);
}

/**
 * Get testimonials filtered by client type
 */
export function getTestimonialsByType(type: ClientType): Testimonial[] {
  if (type === "both") {
    return testimonials;
  }
  return testimonials.filter((t) => t.clientType === type || t.clientType === "both");
}

/**
 * Get all testimonials sorted by date (newest first)
 */
export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get testimonial by ID
 */
export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}
