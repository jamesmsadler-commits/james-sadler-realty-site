import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Navigation
        links={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <PageHeader
        icon={Shield}
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information"
        backLink={{ label: "Back to Home", href: "/" }}
      />

      <section className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="prose prose-sm max-w-none text-slate-700 space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-4">Last updated: January 2024</p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p>
                James Sadler Real Estate ("we," "us," or "our") operates the jamessadlerrealty.com
                website (the "Site"). This Privacy Policy explains our practices regarding the
                collection, use, disclosure, and safeguarding of information that you provide on
                our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out a contact form</li>
                <li>Request a consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our analysis tools</li>
              </ul>

              <p className="mt-4">
                This information may include your name, email address, phone number, property
                details, financial information, and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-6">Automatically Collected Information</h3>
              <p>
                When you visit our Site, we automatically collect certain information about your
                device, including your IP address, browser type, operating system, referring URL,
                and pages visited. We use this information to improve our Site and understand how
                visitors use it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and requests</li>
                <li>Provide analysis tools and services</li>
                <li>Send you information about our services</li>
                <li>Improve and optimize our Site</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only when:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Required by law or legal process</li>
                <li>Necessary to protect our rights and safety</li>
                <li>With service providers who assist us in operating our Site</li>
              </ul>

              <p className="mt-4">
                Any third-party service providers we work with are contractually obligated to
                maintain the confidentiality and security of your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, disclosure, and misuse. However,
                no method of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <p className="mt-4">
                To exercise any of these rights, please contact us using the information provided
                at the bottom of this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
              <p>
                Our Site may use cookies to enhance your experience. Cookies are small data files
                stored on your device that help us remember your preferences. You can manage
                cookie settings through your browser controls.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible for
                the privacy practices of these external sites. Please review their privacy
                policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                significant changes by posting the new policy on this page and updating the
                "Last Updated" date at the top.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <p className="mt-4 font-semibold">
                James Sadler<br />
                Email: james@example.com<br />
                Phone: (202) 555-1234
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
