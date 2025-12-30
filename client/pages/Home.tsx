import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/home/HeroSection";
import AgentBioSection from "@/components/home/AgentBioSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import { testimonials } from "@/lib/testimonials";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        <HeroSection
          subtitle="Your Real Estate Partner"
          title="Find Your Next Real Estate Opportunity"
          description="Whether you're an investor analyzing rental properties, buying your first home, or selling a property, I have the tools and expertise to help you succeed in Calgary's real estate market."
        />

        <ServicesOverview />

        <AgentBioSection />

        <TestimonialSection
          testimonials={testimonials.filter((t) => t.featured)}
          title="What My Clients Say"
          description="Join hundreds of satisfied clients who have achieved their real estate goals with professional guidance and data-driven analysis."
          maxItems={3}
          columns={3}
          showCTA={true}
          ctaText="View All Testimonials"
          ctaHref="/about"
        />

        <CTASection />
      </div>
    </Layout>
  );
}
