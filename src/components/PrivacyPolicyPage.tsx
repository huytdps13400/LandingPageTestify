import { Shield } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PrivacyPolicyPageProps {
  onNavigate: (route: "privacy" | "support") => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header currentRoute="privacy" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="border-b border-slate-100 py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-12 bg-slate-900 rounded mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="mb-6 text-slate-900">Terms of Use</h2>
          <p className="text-slate-600 leading-relaxed">
            Please read these terms carefully before creating an account or
            using any of our features.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="space-y-16">
          <section>
            <h3 className="text-slate-900 mb-4">1. Introduction</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Welcome to <span className="text-slate-900">Testify App</span>{" "}
                ("we," "our," "us").
              </p>
              <p>
                This app connects developers and testers to help manage app
                testing programs and meet Google Play's requirements for active
                testers.
              </p>
              <p>
                By using our app, you agree to these Terms of Use and our
                Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">2. Eligibility</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">You must:</p>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>
                • Be at least 18 years old (or have parental consent if required
                by your local law)
              </li>
              <li>• Use a valid Google account to sign in</li>
              <li>• Agree to follow all community and platform rules</li>
            </ul>
            <p className="text-slate-600 mt-4 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">3. User Roles</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              There are two main user roles:
            </p>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>
                • <span className="text-slate-900">Developers:</span> Create and
                manage test rooms, invite testers, and send reminders
              </li>
              <li>
                • <span className="text-slate-900">Testers:</span> Join testing
                rooms, check in daily, and participate in testing cycles
              </li>
            </ul>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Each user is responsible for their own activities and the accuracy
              of their provided information.
            </p>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">4. Account & Authentication</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Sign-in is handled via Google Sign-In through our authentication
                provider (Supabase). We do not collect your Google password.
              </p>
              <p>
                We store your display name, email, and role (Developer or
                Tester) to provide basic account functionality.
              </p>
              <p>
                If you sign out or delete your account, we may retain minimal
                logs for security and auditing purposes as required by law.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">5. Data Collection & Usage</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We collect only the information necessary to operate the app
              safely and effectively:
            </p>

            <div className="mt-6 mb-6">
              <h4 className="text-slate-900 mb-3 text-sm">
                Information We Collect
              </h4>
              <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
                <li>
                  • Display name, email address, and Google ID for account
                  identification
                </li>
                <li>• Device token for receiving push notifications (FCM)</li>
                <li>
                  • Participation history, check-in records, and room membership
                  status
                </li>
                <li>
                  • Optional app data such as package name or version when
                  creating test rooms
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 mb-3 text-sm">How We Use It</h4>
              <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
                <li>• To manage and display your testing activities</li>
                <li>
                  • To send check-in reminders and important app notifications
                </li>
                <li>
                  • To maintain account security and improve app reliability
                </li>
              </ul>
            </div>

            <p className="text-slate-600 mt-6 leading-relaxed">
              We do not sell, rent, or trade your personal data to third
              parties.
            </p>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">6. Push Notifications</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              By using the app, you agree to receive push notifications such as:
            </p>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>• Daily check-in reminders</li>
              <li>• "Nudge" notifications from room owners</li>
              <li>• Room progress updates or reminders near expiration</li>
            </ul>
            <p className="text-slate-600 mt-4 leading-relaxed">
              You can disable notifications at any time in your device settings,
              but some app functions may not work as intended.
            </p>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">7. Google Play Integration</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              When a Developer connects their Google Play account through OAuth:
            </p>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>
                • The app may request limited access to manage testers for their
                selected applications
              </li>
              <li>
                • Only necessary data (package name, track type, and tester
                email list) is used
              </li>
              <li>
                • No publishing or financial permissions are requested or stored
              </li>
            </ul>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Developers are solely responsible for any actions taken on their
              Google Play Console using their credentials.
            </p>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">8. Data Storage & Security</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                All data is securely stored using Supabase cloud infrastructure
                with built-in Row Level Security (RLS). Access is limited to
                your own data and your associated rooms.
              </p>
              <p>
                We follow reasonable security measures to protect your
                information against unauthorized access, alteration, or
                disclosure.
              </p>
              <p>
                If you suspect any unauthorized use of your account, please
                contact support immediately.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">9. User Responsibilities</h3>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>
                • Keep your account secure and do not share login credentials
              </li>
              <li>
                • Use the app respectfully; harassment, spam, or misuse will
                result in suspension
              </li>
              <li>
                • Do not use the app for activities unrelated to app testing or
                in violation of Google's Developer or Tester policies
              </li>
              <li>
                • Testers must check in honestly — false or automated check-ins
                are prohibited
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">
              10. Room & Participation Rules
            </h3>
            <ul className="space-y-2 text-slate-600 leading-relaxed ml-6">
              <li>
                • Developers set room duration (minimum 14 days) and tester
                goals
              </li>
              <li>
                • Testers may join multiple rooms but can check in only once per
                day globally
              </li>
              <li>• Missing a daily check-in resets your personal streak</li>
              <li>
                • Developers may remove inactive or uncooperative testers from
                rooms
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">11. CSV Exports & Sharing</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Developers can export tester lists (emails only or full details)
                to manage testing on Google Play.
              </p>
              <p>
                By joining a room, you consent to your testing email being
                included in CSV exports for legitimate app testing purposes
                only.
              </p>
              <p>
                We strictly prohibit using exported data for marketing or
                unrelated contact.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">12. Communication & Support</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                You can reach us at{" "}
                <span className="text-slate-900">kingonwork@gmail.com</span> for
                any questions, data requests, or issue reports.
              </p>
              <p>We aim to respond within 5 business days.</p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">13. Data Retention</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                We keep minimal necessary data for as long as your account
                remains active.
              </p>
              <p>
                Upon deletion, personal data is removed from our systems unless
                required by law for security or audit logs.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">14. Changes to This Policy</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                We may update this document periodically. Material changes will
                be announced via in-app notification or email before taking
                effect.
              </p>
              <p>
                Continued use after such changes means you accept the revised
                policy.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">
              15. Disclaimer & Limitation of Liability
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>The app is provided "as is" without warranties of any kind.</p>
              <p>
                We are not liable for any loss, damage, or unauthorized data use
                caused by third-party services (e.g., Google, Supabase, FCM).
                Developers and testers use the app at their own discretion and
                risk.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-slate-900 mb-4">16. Governing Law</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                These Terms are governed by the laws of your country of
                residence.
              </p>
              <p>
                Any disputes shall be handled through amicable resolution before
                any legal action.
              </p>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-16">
            <h3 className="text-slate-900 mb-4">Contact Information</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                If you have any questions about these Terms of Use, please
                contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded space-y-2 border border-slate-100">
                <p>
                  <span className="text-slate-900">Email:</span>{" "}
                  kingonwork@gmail.com
                </p>
                <p>
                  <span className="text-slate-900">Response Time:</span> Within
                  5 business days
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                Last Updated: October 27, 2025
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
