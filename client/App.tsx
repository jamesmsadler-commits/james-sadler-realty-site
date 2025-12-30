import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import BuyersGuide from "./pages/BuyersGuide";
import SellerResources from "./pages/SellerResources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Index from "./pages/Index";
import Commercial from "./pages/Commercial";
import NotFound from "./pages/NotFound";
import InvestorHub from "./pages/InvestorHub";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Buyers Section */}
            <Route path="/buyers" element={<BuyersGuide />} />

            {/* Sellers Section */}
            <Route path="/seller-resources" element={<SellerResources />} />

            {/* Investor Section */}
            <Route path="/investor" element={<InvestorHub />} />
            <Route path="/investor/residential" element={<Index />} />
            <Route path="/investor/commercial" element={<Commercial />} />

            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
