import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitLeadToZapier, validateLeadData } from "@/lib/api/submit-lead";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    interest: searchParams.get("interest") || "",
    message: "",
    source: "contact-page",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const validation = validateLeadData(formData);
    if (!validation.isValid) {
      validation.errors.forEach((error) => toast.error(error));
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Zapier webhook
      await submitLeadToZapier({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        interest: formData.interest,
        propertyType: formData.propertyType || undefined,
        message: formData.message || undefined,
        source: formData.source,
      });

      toast.success("Thank you! I'll be in touch within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        interest: "",
        message: "",
        source: "contact-page",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again or call directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <PageHeader
          icon={Mail}
          title="Get In Touch"
          description="Have a question about buying, selling, or investing in Calgary real estate? I'd love to hear from you. Fill out the form below or reach out directly."
          backLink={{ label: "Back to Home", href: "/" }}
        />

        {/* Main Content */}
        <section className="flex-1 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm sticky top-24">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <a
                          href="mailto:james@jamessadlerrealty.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                        >
                          james@jamessadlerrealty.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                        <a
                          href="tel:+14035551234"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          (403) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                        <p className="text-slate-600 text-sm">
                          Calgary, Alberta<br />
                          Available for meetings and consultations throughout Calgary and area.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
                        <p className="text-slate-600 text-sm">
                          Typically respond within 24 hours on business days. For urgent matters, feel free to call.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-slate-900 font-semibold mb-2 block">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-slate-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-slate-900 font-semibold mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-slate-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-slate-900 font-semibold mb-2 block">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(403) 555-1234"
                        className="border-slate-300"
                      />
                    </div>

                    {/* Interest Type */}
                    <div>
                      <Label
                        htmlFor="interest"
                        className="text-slate-900 font-semibold mb-2 block"
                      >
                        I'm interested in <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900"
                      >
                        <option value="">Select an option</option>
                        <option value="home-buying">Home Buying</option>
                        <option value="home-selling">Home Selling</option>
                        <option value="rental-analysis">Rental Property Analysis</option>
                        <option value="commercial-analysis">Commercial Property Analysis</option>
                        <option value="property-search">Property Search Assistance</option>
                        <option value="investment-consulting">Investment Consulting</option>
                        <option value="market-consultation">Market Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Property Type */}
                    <div>
                      <Label
                        htmlFor="propertyType"
                        className="text-slate-900 font-semibold mb-2 block"
                      >
                        Property Type (Optional)
                      </Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-900"
                      >
                        <option value="">Select a property type</option>
                        <option value="single-family">Single Family Home</option>
                        <option value="multifamily">Multifamily/Apartment</option>
                        <option value="commercial">Commercial</option>
                        <option value="land">Land</option>
                        <option value="condo">Condo</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-slate-900 font-semibold mb-2 block"
                      >
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more about your situation, questions, or what you're looking for..."
                        rows={6}
                        className="border-slate-300"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      I respect your privacy. Your information will only be used to contact you
                      about your inquiry.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    How quickly will you respond?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    I typically respond to inquiries within 24 hours on business days. For urgent
                    matters, feel free to call directly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Do you charge for consultations?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Initial consultations are free. This is an opportunity to discuss your situation
                    and determine how I can best help you.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Can I use your analysis tools online?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Absolutely! The residential and commercial analysis tools are available online
                    for free. No account or signup required.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Do you work with out-of-area clients?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    For investment analysis and consulting, I work with clients throughout Alberta and beyond. For buying/selling services, I focus primarily on the Calgary area.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    What areas do you serve?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    I specialize in the Calgary real estate market and serve clients throughout Calgary and the surrounding communities in Alberta.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Can you help with investment property financing?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    While I'm not a mortgage broker, I can provide guidance on investment property analysis and connect you with trusted financing partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
