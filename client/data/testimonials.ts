export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Chen",
    role: "First-Time Home Buyer",
    content:
      "James walked me through every step of buying my first home. His market analysis and transparency made me feel confident in my decision. Highly recommend!",
  },
  {
    id: "testimonial-2",
    name: "Mark Johnson",
    role: "Real Estate Investor",
    content:
      "I've worked with James on analyzing multiple investment properties in Calgary. His pro forma calculator and market insights have been invaluable to my portfolio growth.",
  },
  {
    id: "testimonial-3",
    name: "Patricia Wong",
    role: "Home Seller",
    content:
      "Selling my home was stress-free with James. He helped me prepare my property, price it competitively, and closed the deal quickly at a great price.",
  },
  {
    id: "testimonial-4",
    name: "David Martinez",
    role: "Commercial Investor",
    content:
      "James's expertise in commercial property analysis is outstanding. His cash flow projections and cap rate analysis helped me make informed investment decisions.",
  },
  {
    id: "testimonial-5",
    name: "Jennifer Lee",
    role: "Multi-Property Investor",
    content:
      "As someone managing multiple rental properties, I appreciate James's attention to detail and data-driven approach. He's helped me optimize my entire portfolio.",
  },
  {
    id: "testimonial-6",
    name: "Robert Thompson",
    role: "Relocating Professional",
    content:
      "Moving to Calgary for work, James helped me navigate the market and find the perfect home in the right neighborhood. His local knowledge is fantastic.",
  },
];
