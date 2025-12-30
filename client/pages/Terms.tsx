import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
      <Navigation
        links={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <PageHeader
        icon={FileText}
        title="Terms of Service"
        description="The terms and conditions governing your use of our website and services"
        backLink={{ label: "Back to Home", href: "/" }}
      />

      <section className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="prose prose-sm max-w-none text-slate-700 space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-4">Last updated: January 2024</p>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using jamessadlerrealty.com (the "Site"), you accept and agree
                to be bound by and abide by these Terms of Service. If you do not agree to abide
                by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials
                (information or software) on James Sadler Real Estate's Site for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the Site</li>
                <li>
                  Transferring the materials to another person or "mirroring" the materials on
                  any other server
                </li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>
                  Transferring the materials to another person or "mirroring" the materials on
                  any other server
                </li>
              </ul>

              <p className="mt-4">
                This license shall automatically terminate if you violate any of these
                restrictions and may be terminated by James Sadler Real Estate at any time. Upon
                terminating your viewing of these materials or upon the termination of this
                license, you must destroy any downloaded materials in your possession whether in
                electronic or printed format.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
              <p>
                The materials on James Sadler Real Estate's Site are provided on an 'as is'
                basis. James Sadler Real Estate makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of
                rights.
              </p>

              <p className="mt-4">
                Further, James Sadler Real Estate does not warrant or make any representations
                concerning the accuracy, likely results, or reliability of the use of the
                materials on its Internet web site or otherwise relating to such materials or on
                any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations</h2>
              <p>
                In no event shall James Sadler Real Estate or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data or profit, or
                due to business interruption) arising out of the use or inability to use the
                materials on James Sadler Real Estate's Site, even if James Sadler Real Estate or
                a James Sadler Real Estate authorized representative has been notified orally or
                in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Analysis Tools Disclaimer</h2>
              <p>
                The analysis tools and calculators provided on this Site are for educational and
                informational purposes only. While we strive for accuracy, the results are based
                on the information you provide and assumptions made by the calculator. These
                results should not be considered professional investment advice.
              </p>

              <p className="mt-4">
                We recommend consulting with a qualified financial advisor, real estate
                professional, or attorney before making any investment or real estate decisions
                based on these calculations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Representations</h2>
              <p>By using this Site, you represent and warrant that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All information you provide is true, accurate, and complete</li>
                <li>
                  You have the legal authority to enter into agreements and use this Site in
                  accordance with these Terms
                </li>
                <li>You will not engage in any conduct that restricts or inhibits anyone's use of the Site</li>
                <li>You will not harass, abuse, or threaten other users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Services</h2>
              <p>
                Nothing on this Site should be construed as professional real estate, investment,
                financial, tax, or legal advice. If you require professional advice, please
                consult with a qualified professional in the appropriate field.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Other Sites</h2>
              <p>
                James Sadler Real Estate has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site. The inclusion of
                any link does not imply endorsement by James Sadler Real Estate of the site. Use
                of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Modifications</h2>
              <p>
                James Sadler Real Estate may revise these Terms of Service for its Site at any
                time without notice. By using this Site, you are agreeing to be bound by the then
                current version of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the
                laws of [Your State] and you irrevocably submit to the exclusive jurisdiction of
                the courts located in [Your County], [Your State].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
