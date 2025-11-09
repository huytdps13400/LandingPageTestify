// HTML content for policy and terms pages
// These would normally come from a CMS or API, but for this demo they're hardcoded

export const HTML_POLICY = `
<div class="policy-content">
  <!-- Hero Section -->
  <div class="policy-hero">
    <div class="policy-hero-content">
      <h1 class="policy-title">Privacy Policy</h1>
      <div class="policy-meta">
        <span class="policy-date">Last updated: November 8, 2025</span>
        <div class="policy-status">
          <div class="status-dot"></div>
          <span>Active Policy</span>
        </div>
      </div>
      <p class="policy-subtitle">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
    </div>
  </div>

  <!-- Table of Contents -->
  <div class="policy-toc">
    <h3>📋 Table of Contents</h3>
    <div class="toc-grid">
      <a href="#introduction" class="toc-item">1. Introduction</a>
      <a href="#eligibility" class="toc-item">2. Eligibility</a>
      <a href="#user-roles" class="toc-item">3. User Roles</a>
      <a href="#authentication" class="toc-item">4. Account & Authentication</a>
      <a href="#data-collection" class="toc-item">5. Data Collection & Usage</a>
      <a href="#notifications" class="toc-item">6. Push Notifications</a>
      <a href="#google-play" class="toc-item">7. Google Play Integration</a>
      <a href="#security" class="toc-item">8. Data Storage & Security</a>
      <a href="#responsibilities" class="toc-item">9. User Responsibilities</a>
      <a href="#participation" class="toc-item">10. Room & Participation Rules</a>
      <a href="#exports" class="toc-item">11. CSV Exports & Sharing</a>
      <a href="#support" class="toc-item">12. Communication & Support</a>
      <a href="#retention" class="toc-item">13. Data Retention</a>
      <a href="#changes" class="toc-item">14. Changes to This Policy</a>
      <a href="#liability" class="toc-item">15. Disclaimer & Limitation</a>
      <a href="#governing-law" class="toc-item">16. Governing Law</a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="policy-sections">
    
    <section id="introduction" class="policy-section">
      <div class="section-header">
        <div class="section-number">01</div>
        <h2>Introduction</h2>
      </div>
      <div class="section-content">
        <div class="info-box info-primary">
          <h4>🔷 Welcome to Community Tester App</h4>
          <p>This app connects developers and testers to help manage app testing programs and meet Google's Play requirements for active testers.</p>
        </div>
        <p>By using our app, you agree to these Terms of Use and our Privacy Policy. Please read them carefully before creating an account or using any of our features.</p>
      </div>
    </section>

    <section id="eligibility" class="policy-section">
      <div class="section-header">
        <div class="section-number">02</div>
        <h2>Eligibility</h2>
      </div>
      <div class="section-content">
        <div class="requirements-grid">
          <div class="requirement-item">
            <div class="requirement-icon">👤</div>
            <div class="requirement-text">Be at least 18 years old (or have parental consent if required by your local law)</div>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon">🔐</div>
            <div class="requirement-text">Use a valid Google account to sign in</div>
          </div>
          <div class="requirement-item">
            <div class="requirement-icon">📋</div>
            <div class="requirement-text">Agree to follow all community and platform rules</div>
          </div>
        </div>
        <div class="warning-box">
          <h4>⚠️ Important Notice</h4>
          <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
        </div>
      </div>
    </section>

    <section id="user-roles" class="policy-section">
      <div class="section-header">
        <div class="section-number">03</div>
        <h2>User Roles</h2>
      </div>
      <div class="section-content">
        <p>There are two main user roles in our platform:</p>
        <div class="roles-grid">
          <div class="role-card role-developer">
            <div class="role-header">
              <div class="role-icon">👨‍💻</div>
              <h3>Developers</h3>
            </div>
            <ul>
              <li>Create and manage test rooms</li>
              <li>Invite testers to join programs</li>
              <li>Send reminders and nudges</li>
              <li>Export tester data for Google Play</li>
            </ul>
          </div>
          <div class="role-card role-tester">
            <div class="role-header">
              <div class="role-icon">🧪</div>
              <h3>Testers</h3>
            </div>
            <ul>
              <li>Join testing rooms</li>
              <li>Check in daily to maintain activity</li>
              <li>Participate in testing cycles</li>
              <li>Provide feedback and testing results</li>
            </ul>
          </div>
        </div>
        <div class="info-box">
          <p><strong>Responsibility:</strong> Each user is responsible for their own activities and the accuracy of their provided information.</p>
        </div>
      </div>
    </section>

    <section id="authentication" class="policy-section">
      <div class="section-header">
        <div class="section-number">04</div>
        <h2>Account & Authentication</h2>
      </div>
      <div class="section-content">
        <div class="auth-flow">
          <div class="auth-step">
            <div class="step-icon">🔑</div>
            <div class="step-content">
              <h4>Google Sign-In Integration</h4>
              <p>Sign-in is handled via <strong>Google Sign-In</strong> through our authentication provider (Supabase). We do not collect your Google password.</p>
            </div>
          </div>
          <div class="auth-step">
            <div class="step-icon">💾</div>
            <div class="step-content">
              <h4>Data Storage</h4>
              <p>We store your display name, email, and role (Developer or Tester) to provide basic account functionality.</p>
            </div>
          </div>
          <div class="auth-step">
            <div class="step-icon">🗂️</div>
            <div class="step-content">
              <h4>Account Deletion</h4>
              <p>If you sign out or delete your account, we may retain minimal logs for security and auditing purposes as required by law.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="data-collection" class="policy-section">
      <div class="section-header">
        <div class="section-number">05</div>
        <h2>Data Collection & Usage</h2>
      </div>
      <div class="section-content">
        <div class="data-principle">
          <h4>🎯 Our Approach</h4>
          <p>We collect only the information necessary to operate the app safely and effectively.</p>
        </div>
        
        <div class="data-grid">
          <div class="data-section">
            <h4>📊 Information We Collect</h4>
            <ul class="data-list">
              <li><strong>Identity:</strong> Display name, email address, and Google ID for account identification</li>
              <li><strong>Notifications:</strong> Device token for receiving push notifications (FCM)</li>
              <li><strong>Activity:</strong> Participation history, check-in records, and room membership status</li>
              <li><strong>App Data:</strong> Optional app data such as package name or version when creating test rooms</li>
            </ul>
          </div>
          <div class="data-section">
            <h4>🔄 How We Use It</h4>
            <ul class="data-list">
              <li>To manage and display your testing activities</li>
              <li>To send check-in reminders and important app notifications</li>
              <li>To maintain account security and improve app reliability</li>
            </ul>
          </div>
        </div>
        
        <div class="data-commitment">
          <div class="commitment-badge">🔒 Privacy Commitment</div>
          <p>We do <strong>not</strong> sell, rent, or trade your personal data to third parties.</p>
        </div>
      </div>
    </section>

    <section id="notifications" class="policy-section">
      <div class="section-header">
        <div class="section-number">06</div>
        <h2>Push Notifications</h2>
      </div>
      <div class="section-content">
        <p>By using the app, you agree to receive push notifications such as:</p>
        <div class="notification-types">
          <div class="notif-type">
            <div class="notif-icon">⏰</div>
            <div class="notif-content">
              <h4>Daily Check-in Reminders</h4>
              <p>Timely reminders to maintain your testing activity streak</p>
            </div>
          </div>
          <div class="notif-type">
            <div class="notif-icon">👆</div>
            <div class="notif-content">
              <h4>"Nudge" Notifications</h4>
              <p>Gentle reminders from room owners to encourage participation</p>
            </div>
          </div>
          <div class="notif-type">
            <div class="notif-icon">📈</div>
            <div class="notif-content">
              <h4>Room Progress Updates</h4>
              <p>Updates about room progress or reminders near expiration</p>
            </div>
          </div>
        </div>
        <div class="info-box">
          <h4>📱 Notification Control</h4>
          <p>You can disable notifications at any time in your device settings, but some app functions may not work as intended.</p>
        </div>
      </div>
    </section>

    <section id="google-play" class="policy-section">
      <div class="section-header">
        <div class="section-number">07</div>
        <h2>Google Play Integration</h2>
      </div>
      <div class="section-content">
        <div class="integration-overview">
          <h4>🔗 OAuth Connection</h4>
          <p>When a Developer connects their Google Play account through OAuth:</p>
        </div>
        <div class="integration-permissions">
          <div class="permission-item">
            <div class="permission-status allowed">✅</div>
            <div class="permission-details">
              <strong>Limited Access:</strong> The app may request limited access to manage testers for their selected applications
            </div>
          </div>
          <div class="permission-item">
            <div class="permission-status allowed">✅</div>
            <div class="permission-details">
              <strong>Essential Data:</strong> Only necessary data (package name, track type, and tester email list) is used
            </div>
          </div>
          <div class="permission-item">
            <div class="permission-status denied">❌</div>
            <div class="permission-details">
              <strong>No Publishing Rights:</strong> No publishing or financial permissions are requested or stored
            </div>
          </div>
        </div>
        <div class="warning-box">
          <h4>⚠️ Developer Responsibility</h4>
          <p>Developers are solely responsible for any actions taken on their Google Play Console using their credentials.</p>
        </div>
      </div>
    </section>

    <section id="security" class="policy-section">
      <div class="section-header">
        <div class="section-number">08</div>
        <h2>Data Storage & Security</h2>
      </div>
      <div class="section-content">
        <div class="security-grid">
          <div class="security-item">
            <div class="security-icon">🏗️</div>
            <h4>Cloud Infrastructure</h4>
            <p>All data is securely stored using <strong>Supabase</strong> cloud infrastructure with built-in <strong>Row Level Security (RLS)</strong>.</p>
          </div>
          <div class="security-item">
            <div class="security-icon">🔒</div>
            <h4>Access Control</h4>
            <p>Access is limited to your own data and your associated rooms.</p>
          </div>
          <div class="security-item">
            <div class="security-icon">🛡️</div>
            <h4>Security Measures</h4>
            <p>We follow reasonable security measures to protect your information against unauthorized access, alteration, or disclosure.</p>
          </div>
        </div>
        <div class="contact-box">
          <h4>🚨 Security Concerns</h4>
          <p>If you suspect any unauthorized use of your account, please contact support immediately at <a href="mailto:kingonwork@gmail.com">kingonwork@gmail.com</a>.</p>
        </div>
      </div>
    </section>

    <section id="responsibilities" class="policy-section">
      <div class="section-header">
        <div class="section-number">09</div>
        <h2>User Responsibilities</h2>
      </div>
      <div class="section-content">
        <div class="responsibilities-grid">
          <div class="responsibility-item">
            <div class="resp-icon">🔐</div>
            <h4>Account Security</h4>
            <p>Keep your account secure and do not share login credentials.</p>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">🤝</div>
            <h4>Respectful Use</h4>
            <p>Use the app respectfully; harassment, spam, or misuse will result in suspension.</p>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">📏</div>
            <h4>Compliance</h4>
            <p>Do not use the app for activities unrelated to app testing or in violation of Google's Developer or Tester policies.</p>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">✅</div>
            <h4>Honest Participation</h4>
            <p>Testers must check in honestly — false or automated check-ins are prohibited.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="participation" class="policy-section">
      <div class="section-header">
        <div class="section-number">10</div>
        <h2>Room & Participation Rules</h2>
      </div>
      <div class="section-content">
        <div class="rules-timeline">
          <div class="timeline-item">
            <div class="timeline-icon">🏗️</div>
            <div class="timeline-content">
              <h4>Room Setup</h4>
              <p>Developers set room duration (minimum 14 days) and tester goals.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🔄</div>
            <div class="timeline-content">
              <h4>Daily Check-ins</h4>
              <p>Testers may join multiple rooms but can check in only once per day globally.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">📉</div>
            <div class="timeline-content">
              <h4>Streak System</h4>
              <p>Missing a daily check-in resets your personal streak.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">👥</div>
            <div class="timeline-content">
              <h4>Moderation</h4>
              <p>Developers may remove inactive or uncooperative testers from rooms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="exports" class="policy-section">
      <div class="section-header">
        <div class="section-number">11</div>
        <h2>CSV Exports & Sharing</h2>
      </div>
      <div class="section-content">
        <div class="export-flow">
          <div class="export-step">
            <h4>📊 Developer Capability</h4>
            <p>Developers can export tester lists (emails only or full details) to manage testing on Google Play.</p>
          </div>
          <div class="export-step">
            <h4>🤝 User Consent</h4>
            <p>By joining a room, you consent to your testing email being included in CSV exports for legitimate app testing purposes only.</p>
          </div>
          <div class="export-step">
            <h4>🚫 Prohibited Use</h4>
            <p>We strictly prohibit using exported data for marketing or unrelated contact.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="support" class="policy-section">
      <div class="section-header">
        <div class="section-number">12</div>
        <h2>Communication & Support</h2>
      </div>
      <div class="section-content">
        <div class="contact-info">
          <div class="contact-method">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4>Email Support</h4>
              <p><a href="mailto:kingonwork@gmail.com">kingonwork@gmail.com</a></p>
              <small>For any questions, data requests, or issue reports</small>
            </div>
          </div>
          <div class="contact-method">
            <div class="contact-icon">⏱️</div>
            <div class="contact-details">
              <h4>Response Time</h4>
              <p>We aim to respond within 5 business days</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="retention" class="policy-section">
      <div class="section-header">
        <div class="section-number">13</div>
        <h2>Data Retention</h2>
      </div>
      <div class="section-content">
        <div class="retention-policy">
          <div class="policy-item active">
            <h4>🟢 Active Accounts</h4>
            <p>We keep minimal necessary data for as long as your account remains active.</p>
          </div>
          <div class="policy-item deletion">
            <h4>🗑️ Account Deletion</h4>
            <p>Upon deletion, personal data is removed from our systems unless required by law for security or audit logs.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="changes" class="policy-section">
      <div class="section-header">
        <div class="section-number">14</div>
        <h2>Changes to This Policy</h2>
      </div>
      <div class="section-content">
        <div class="changes-process">
          <div class="change-step">
            <h4>🔄 Periodic Updates</h4>
            <p>We may update this document periodically.</p>
          </div>
          <div class="change-step">
            <h4>📢 Notification Process</h4>
            <p>Material changes will be announced via in-app notification or email before taking effect.</p>
          </div>
          <div class="change-step">
            <h4>✅ Acceptance</h4>
            <p>Continued use after such changes means you accept the revised policy.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="liability" class="policy-section">
      <div class="section-header">
        <div class="section-number">15</div>
        <h2>Disclaimer & Limitation of Liability</h2>
      </div>
      <div class="section-content">
        <div class="liability-grid">
          <div class="liability-item">
            <h4>📋 "As Is" Service</h4>
            <p>The app is provided <strong>"as is"</strong> without warranties of any kind.</p>
          </div>
          <div class="liability-item">
            <h4>🔗 Third-Party Services</h4>
            <p>We are not liable for any loss, damage, or unauthorized data use caused by third-party services (e.g., Google, Supabase, FCM).</p>
          </div>
          <div class="liability-item">
            <h4>⚖️ User Discretion</h4>
            <p>Developers and testers use the app at their own discretion and risk.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="governing-law" class="policy-section">
      <div class="section-header">
        <div class="section-number">16</div>
        <h2>Governing Law</h2>
      </div>
      <div class="section-content">
        <div class="legal-framework">
          <div class="legal-item">
            <h4>⚖️ Legal Jurisdiction</h4>
            <p>These Terms are governed by the laws of your country of residence.</p>
          </div>
          <div class="legal-item">
            <h4>🤝 Dispute Resolution</h4>
            <p>Any disputes shall be handled through amicable resolution before any legal action.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <div class="policy-footer">
    <div class="footer-content">
      <div class="last-updated">
        <h4>📅 Policy Information</h4>
        <p><strong>Last Updated:</strong> November 8, 2025</p>
        <p><strong>Effective Date:</strong> November 8, 2025</p>
      </div>
      <div class="footer-contact">
        <h4>📞 Need Help?</h4>
        <p>Contact us at <a href="mailto:kingonwork@gmail.com">kingonwork@gmail.com</a></p>
        <p>Response within 5 business days</p>
      </div>
    </div>
  </div>
</div>

<style>
.policy-content {
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2d3748;
}

/* Hero Section */
.policy-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
}

.policy-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.policy-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.policy-date {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.policy-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #48bb78;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.policy-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Table of Contents */
.policy-toc {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.policy-toc h3 {
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-size: 1.3rem;
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.toc-item {
  display: block;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.toc-item:hover {
  background: #f0f4f8;
  border-color: #3182ce;
  color: #2b6cb0;
  transform: translateY(-1px);
}

/* Section Styling */
.policy-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.section-number {
  background: #3182ce;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.section-header h2 {
  margin: 0;
  color: #2d3748;
  font-size: 1.5rem;
}

.section-content {
  padding: 2rem;
}

/* Info Boxes */
.info-box {
  background: #ebf8ff;
  border: 1px solid #90cdf4;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.info-box h4 {
  color: #2c5282;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-primary {
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
  border-color: #3182ce;
}

.warning-box {
  background: #fef5e7;
  border: 1px solid #f6ad55;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.warning-box h4 {
  color: #c05621;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-box {
  background: #f0fff4;
  border: 1px solid #68d391;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.contact-box h4 {
  color: #276749;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Grid Layouts */
.requirements-grid {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.requirement-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.requirement-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.role-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.role-developer {
  border-color: #3182ce;
}

.role-developer .role-header {
  color: #3182ce;
}

.role-tester {
  border-color: #38a169;
}

.role-tester .role-header {
  color: #38a169;
}

.role-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.role-icon {
  font-size: 1.5rem;
}

.role-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.role-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.role-card li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* Auth Flow */
.auth-flow {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.auth-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #3182ce;
}

.step-icon {
  font-size: 1.5rem;
  min-width: 40px;
  margin-top: 0.25rem;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.step-content p {
  margin: 0;
  color: #4a5568;
}

/* Data Grid */
.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.data-section h4 {
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.data-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.data-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
}

.data-list li:last-child {
  border-bottom: none;
}

.data-principle {
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%);
  border: 2px solid #3182ce;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.data-principle h4 {
  color: #2c5282;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.data-commitment {
  background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
  border: 2px solid #38a169;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.commitment-badge {
  display: inline-block;
  background: #38a169;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.data-commitment p {
  margin: 0;
  color: #276749;
  font-size: 1.1rem;
}

/* Notification Types */
.notification-types {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.notif-type {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.notif-type:hover {
  border-color: #3182ce;
  box-shadow: 0 2px 8px rgba(49, 130, 206, 0.1);
}

.notif-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.notif-content h4 {
  margin: 0 0 0.25rem 0;
  color: #2d3748;
}

.notif-content p {
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
}

/* Integration Permissions */
.integration-overview {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.integration-permissions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.permission-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.permission-status {
  font-size: 1.2rem;
  min-width: 30px;
}

.permission-status.allowed {
  color: #38a169;
}

.permission-status.denied {
  color: #e53e3e;
}

.permission-details {
  flex: 1;
}

.permission-details strong {
  color: #2d3748;
}

/* Security Grid */
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.security-item {
  text-align: center;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.security-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.security-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.security-item p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

/* Responsibilities Grid */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.responsibility-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.responsibility-item:hover {
  transform: translateY(-2px);
  border-color: #3182ce;
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.1);
}

.resp-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.responsibility-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.responsibility-item p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

/* Timeline */
.rules-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 35px;
  top: 100%;
  width: 2px;
  height: 1.5rem;
  background: #cbd5e0;
}

.timeline-icon {
  font-size: 1.5rem;
  min-width: 50px;
  margin-top: 0.25rem;
}

.timeline-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.timeline-content p {
  margin: 0;
  color: #4a5568;
}

/* Export Flow */
.export-flow {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.export-step {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #38a169;
}

.export-step h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.export-step p {
  color: #4a5568;
  margin: 0;
}

/* Contact Info */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

.contact-details h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.contact-details p {
  margin: 0 0 0.25rem 0;
  color: #4a5568;
}

.contact-details small {
  color: #718096;
  font-size: 0.8rem;
}

.contact-details a {
  color: #3182ce;
  text-decoration: none;
  font-weight: 600;
}

.contact-details a:hover {
  text-decoration: underline;
}

/* Retention Policy */
.retention-policy {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.policy-item {
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.policy-item.active {
  background: #f0fff4;
  border: 2px solid #38a169;
}

.policy-item.deletion {
  background: #fef5e7;
  border: 2px solid #f6ad55;
}

.policy-item h4 {
  margin: 0 0 0.75rem 0;
  color: #2d3748;
}

.policy-item p {
  margin: 0;
  color: #4a5568;
}

/* Changes Process */
.changes-process {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.change-step {
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  position: relative;
}

.change-step::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #cbd5e0;
}

.change-step::before {
  display: none;
}

.change-step h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.change-step p {
  color: #4a5568;
  margin: 0;
}

/* Liability Grid */
.liability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.liability-item {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.liability-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.liability-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

/* Legal Framework */
.legal-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.legal-item {
  padding: 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  text-align: center;
}

.legal-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.legal-item p {
  color: #4a5568;
  margin: 0;
}

/* Footer */
.policy-footer {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.last-updated h4,
.footer-contact h4 {
  margin: 0 0 1rem 0;
  color: white;
  font-size: 1.1rem;
}

.last-updated p,
.footer-contact p {
  margin: 0.25rem 0;
  color: #cbd5e0;
}

.footer-contact a {
  color: #63b3ed;
  text-decoration: none;
  font-weight: 600;
}

.footer-contact a:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .policy-content {
    margin: 0 1rem;
  }
  
  .policy-hero {
    padding: 2rem 1.5rem;
  }
  
  .policy-title {
    font-size: 2rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .section-content {
    padding: 1.5rem;
  }
  
  .policy-toc {
    padding: 1.5rem;
  }
  
  .toc-grid {
    grid-template-columns: 1fr;
  }
  
  .roles-grid,
  .data-grid,
  .security-grid,
  .responsibilities-grid,
  .liability-grid,
  .legal-framework {
    grid-template-columns: 1fr;
  }
  
  .contact-info,
  .retention-policy,
  .footer-content {
    grid-template-columns: 1fr;
  }
}

/* Print Styles */
@media print {
  .policy-toc {
    display: none;
  }
  
  .policy-section {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #e2e8f0;
  }
  
  .policy-hero {
    background: #f7fafc !important;
    color: #2d3748 !important;
  }
}
</style>
`

export const HTML_TERMS = `
<div class="terms-content">
  <!-- Hero Section -->
  <div class="terms-hero">
    <div class="terms-hero-content">
      <h1 class="terms-title">Terms of Use</h1>
      <div class="terms-meta">
        <span class="terms-date">Last updated: November 8, 2025</span>
        <div class="terms-status">
          <div class="status-dot"></div>
          <span>Active Terms</span>
        </div>
      </div>
      <p class="terms-subtitle">Please read these terms carefully before using Community Tester App.</p>
    </div>
  </div>

  <!-- Table of Contents -->
  <div class="terms-toc">
    <h3>📋 Table of Contents</h3>
    <div class="toc-grid">
      <a href="#acceptance" class="toc-item">1. Acceptance of Terms</a>
      <a href="#purpose" class="toc-item">2. Purpose of the App</a>
      <a href="#account" class="toc-item">3. Account Responsibilities</a>
      <a href="#conduct" class="toc-item">4. User Roles and Conduct</a>
      <a href="#limitations" class="toc-item">5. Fair Use & Limitations</a>
      <a href="#ownership" class="toc-item">6. Ownership & IP</a>
      <a href="#notifications" class="toc-item">7. Notifications & Communication</a>
      <a href="#disclaimer" class="toc-item">8. Disclaimer of Warranties</a>
      <a href="#liability" class="toc-item">9. Limitation of Liability</a>
      <a href="#termination" class="toc-item">10. Suspension or Termination</a>
      <a href="#third-party" class="toc-item">11. Third-Party Services</a>
      <a href="#changes" class="toc-item">12. Changes to Terms</a>
      <a href="#governing" class="toc-item">13. Governing Law</a>
      <a href="#contact" class="toc-item">14. Contact</a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="terms-sections">
    
    <section id="acceptance" class="terms-section">
      <div class="section-header">
        <div class="section-number">01</div>
        <h2>Acceptance of Terms</h2>
      </div>
      <div class="section-content">
        <div class="acceptance-box">
          <div class="acceptance-icon">🤝</div>
          <div class="acceptance-content">
            <h4>Agreement to Terms</h4>
            <p>By creating an account or using <strong>Community Tester App</strong> ("the App," "we," "our," "us"), you agree to comply with these Terms of Use.</p>
          </div>
        </div>
        <div class="warning-box">
          <h4>⚠️ Important Notice</h4>
          <p>If you do not agree, please stop using the App immediately.</p>
        </div>
      </div>
    </section>

    <section id="purpose" class="terms-section">
      <div class="section-header">
        <div class="section-number">02</div>
        <h2>Purpose of the App</h2>
      </div>
      <div class="section-content">
        <div class="purpose-overview">
          <div class="purpose-icon">🎯</div>
          <div class="purpose-content">
            <h4>Our Mission</h4>
            <p>Community Tester App connects <strong>Developers</strong> and <strong>Testers</strong> to support app testing for Google Play releases.</p>
          </div>
        </div>
        <div class="info-box">
          <h4>🔗 Google Play Integration</h4>
          <p>The App helps manage tester lists, send reminders, and track participation progress, but it is <strong>not</strong> owned or operated by Google.</p>
        </div>
      </div>
    </section>

    <section id="account" class="terms-section">
      <div class="section-header">
        <div class="section-number">03</div>
        <h2>Account Responsibilities</h2>
      </div>
      <div class="section-content">
        <div class="responsibilities-list">
          <div class="responsibility-item">
            <div class="resp-icon">🔐</div>
            <div class="resp-text">You must use a valid Google account to sign in</div>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">🛡️</div>
            <div class="resp-text">You are responsible for keeping your login credentials secure</div>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">🚫</div>
            <div class="resp-text">You agree not to share, sell, or transfer your account to others</div>
          </div>
          <div class="responsibility-item">
            <div class="resp-icon">👤</div>
            <div class="resp-text">You are responsible for all activity under your account</div>
          </div>
        </div>
        <div class="enforcement-box">
          <h4>⚖️ Account Enforcement</h4>
          <p>We may suspend or delete accounts that violate these terms or show suspicious activity.</p>
        </div>
      </div>
    </section>

    <section id="conduct" class="terms-section">
      <div class="section-header">
        <div class="section-number">04</div>
        <h2>User Roles and Conduct</h2>
      </div>
      <div class="section-content">
        <div class="roles-grid">
          <div class="role-card role-developer">
            <div class="role-header">
              <div class="role-icon">👨‍💻</div>
              <h3>Developers</h3>
            </div>
            <ul>
              <li>Can create, edit, and manage test rooms</li>
              <li>Must use accurate app and tester information</li>
              <li>Cannot misuse tester data for advertising or unrelated purposes</li>
            </ul>
          </div>
          <div class="role-card role-tester">
            <div class="role-header">
              <div class="role-icon">🧪</div>
              <h3>Testers</h3>
            </div>
            <ul>
              <li>May join available rooms using a valid Google email</li>
              <li>Must perform daily check-ins honestly (no bots or fake activity)</li>
              <li>Should follow testing guidelines provided by Developers</li>
            </ul>
          </div>
        </div>
        <div class="general-rules">
          <h4>📋 General Rules</h4>
          <div class="rules-content">
            <p>All users must respect others, avoid spam, harassment, or inappropriate content. Any violation may lead to removal without notice.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="limitations" class="terms-section">
      <div class="section-header">
        <div class="section-number">05</div>
        <h2>Fair Use & Limitations</h2>
      </div>
      <div class="section-content">
        <div class="limitations-intro">
          <h4>🚫 Prohibited Activities</h4>
          <p>You agree not to:</p>
        </div>
        <div class="prohibited-activities">
          <div class="activity-item">
            <div class="activity-icon">🔧</div>
            <div class="activity-text">Reverse engineer, copy, or modify the App</div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">💼</div>
            <div class="activity-text">Use the App for commercial marketing or data collection</div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">🔓</div>
            <div class="activity-text">Circumvent security measures or manipulate test data</div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">⚠️</div>
            <div class="activity-text">Upload harmful or misleading content</div>
          </div>
        </div>
        <div class="legitimate-use">
          <div class="use-badge">✅ Legitimate Use Only</div>
          <p>The App is for legitimate testing collaboration only.</p>
        </div>
      </div>
    </section>

    <section id="ownership" class="terms-section">
      <div class="section-header">
        <div class="section-number">06</div>
        <h2>Ownership & Intellectual Property</h2>
      </div>
      <div class="section-content">
        <div class="ownership-grid">
          <div class="ownership-item">
            <div class="ownership-icon">🏢</div>
            <h4>App Ownership</h4>
            <p>All logos, branding, and content of the App belong to <strong>Community Tester App</strong> or its partners.</p>
          </div>
          <div class="ownership-item">
            <div class="ownership-icon">🚫</div>
            <h4>Reproduction Rights</h4>
            <p>You may not reproduce or distribute any part of the App without written permission.</p>
          </div>
          <div class="ownership-item">
            <div class="ownership-icon">👤</div>
            <h4>Developer Rights</h4>
            <p>Developers retain ownership of their own app information and tester lists.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="notifications" class="terms-section">
      <div class="section-header">
        <div class="section-number">07</div>
        <h2>Notifications & Communication</h2>
      </div>
      <div class="section-content">
        <div class="notification-agreement">
          <div class="agreement-icon">📱</div>
          <div class="agreement-content">
            <h4>Push Notification Consent</h4>
            <p>By using the App, you consent to receive push notifications (e.g., check-in reminders, nudge alerts, updates).</p>
          </div>
        </div>
        <div class="notification-control">
          <h4>🔧 Notification Control</h4>
          <p>You may disable notifications in your device settings, but certain features may stop working properly.</p>
        </div>
      </div>
    </section>

    <section id="disclaimer" class="terms-section">
      <div class="section-header">
        <div class="section-number">08</div>
        <h2>Disclaimer of Warranties</h2>
      </div>
      <div class="section-content">
        <div class="disclaimer-grid">
          <div class="disclaimer-item">
            <div class="disclaimer-icon">📋</div>
            <h4>"As Is" Service</h4>
            <p>The App is provided <strong>"as is"</strong> and <strong>"as available."</strong></p>
          </div>
          <div class="disclaimer-item">
            <div class="disclaimer-icon">❓</div>
            <h4>No Guarantees</h4>
            <p>We make no guarantees regarding uptime, accuracy, or specific results.</p>
          </div>
          <div class="disclaimer-item">
            <div class="disclaimer-icon">🔗</div>
            <h4>Third-Party Issues</h4>
            <p>We are not responsible for technical issues, data loss, or errors caused by third-party services (e.g., Google, Supabase, Firebase).</p>
          </div>
        </div>
      </div>
    </section>

    <section id="liability" class="terms-section">
      <div class="section-header">
        <div class="section-number">09</div>
        <h2>Limitation of Liability</h2>
      </div>
      <div class="section-content">
        <div class="liability-intro">
          <h4>⚖️ Legal Protection</h4>
          <p>To the fullest extent permitted by law:</p>
        </div>
        <div class="liability-list">
          <div class="liability-item">
            <div class="liability-icon">🚫</div>
            <div class="liability-text">We are <strong>not liable</strong> for indirect, incidental, or consequential damages</div>
          </div>
          <div class="liability-item">
            <div class="liability-icon">👥</div>
            <div class="liability-text">We are <strong>not responsible</strong> for actions taken by Developers or Testers using the App</div>
          </div>
          <div class="liability-item">
            <div class="liability-icon">⚠️</div>
            <div class="liability-text">Your use of the App is at your own risk</div>
          </div>
        </div>
        <div class="remedy-box">
          <h4>💡 Sole Remedy</h4>
          <p>If you are dissatisfied with the App, your sole remedy is to stop using it.</p>
        </div>
      </div>
    </section>

    <section id="termination" class="terms-section">
      <div class="section-header">
        <div class="section-number">10</div>
        <h2>Suspension or Termination</h2>
      </div>
      <div class="section-content">
        <div class="termination-reasons">
          <h4>🚨 Termination Triggers</h4>
          <p>We may suspend or terminate your access if you:</p>
          <div class="reasons-grid">
            <div class="reason-item">
              <div class="reason-icon">❌</div>
              <div class="reason-text">Violate these Terms</div>
            </div>
            <div class="reason-item">
              <div class="reason-icon">🔧</div>
              <div class="reason-text">Misuse the App</div>
            </div>
            <div class="reason-item">
              <div class="reason-icon">👥</div>
              <div class="reason-text">Interfere with other users</div>
            </div>
            <div class="reason-item">
              <div class="reason-icon">🚨</div>
              <div class="reason-text">Engage in fraudulent or harmful activities</div>
            </div>
          </div>
        </div>
        <div class="data-retention">
          <h4>📊 Data After Termination</h4>
          <p>Termination does not affect data collected before that date as described in our Privacy Policy.</p>
        </div>
      </div>
    </section>

    <section id="third-party" class="terms-section">
      <div class="section-header">
        <div class="section-number">11</div>
        <h2>Third-Party Services</h2>
      </div>
      <div class="section-content">
        <div class="services-intro">
          <h4>🔗 Integrated Services</h4>
          <p>The App integrates with:</p>
        </div>
        <div class="services-list">
          <div class="service-item">
            <div class="service-icon">📱</div>
            <div class="service-content">
              <h4>Google Play Console</h4>
              <p>(for developer functions)</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">🗄️</div>
            <div class="service-content">
              <h4>Supabase</h4>
              <p>(for secure database and authentication)</p>
            </div>
          </div>
          <div class="service-item">
            <div class="service-icon">🔥</div>
            <div class="service-content">
              <h4>Firebase Cloud Messaging (FCM)</h4>
              <p>(for push notifications)</p>
            </div>
          </div>
        </div>
        <div class="external-responsibility">
          <h4>⚠️ External Responsibility</h4>
          <p>Each service has its own privacy policy and terms. We are not responsible for issues arising from those external platforms.</p>
        </div>
      </div>
    </section>

    <section id="changes" class="terms-section">
      <div class="section-header">
        <div class="section-number">12</div>
        <h2>Changes to Terms</h2>
      </div>
      <div class="section-content">
        <div class="changes-process">
          <div class="change-step">
            <div class="step-icon">🔄</div>
            <div class="step-content">
              <h4>Right to Modify</h4>
              <p>We may modify these Terms from time to time.</p>
            </div>
          </div>
          <div class="change-step">
            <div class="step-icon">📢</div>
            <div class="step-content">
              <h4>Notification Process</h4>
              <p>When significant updates occur, you'll be notified via in-app message or email.</p>
            </div>
          </div>
          <div class="change-step">
            <div class="step-icon">✅</div>
            <div class="step-content">
              <h4>Acceptance</h4>
              <p>Continuing to use the App after updates means you accept the new Terms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="governing" class="terms-section">
      <div class="section-header">
        <div class="section-number">13</div>
        <h2>Governing Law</h2>
      </div>
      <div class="section-content">
        <div class="legal-framework">
          <div class="legal-item">
            <div class="legal-icon">⚖️</div>
            <div class="legal-content">
              <h4>Jurisdiction</h4>
              <p>These Terms are governed by the laws of your country or region of residence.</p>
            </div>
          </div>
          <div class="legal-item">
            <div class="legal-icon">🤝</div>
            <div class="legal-content">
              <h4>Dispute Resolution</h4>
              <p>Any disputes shall be resolved through good-faith negotiation before further legal steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="terms-section">
      <div class="section-header">
        <div class="section-number">14</div>
        <h2>Contact</h2>
      </div>
      <div class="section-content">
        <div class="contact-info">
          <div class="contact-intro">
            <h4>📞 Need Help?</h4>
            <p>If you have questions about these Terms or your account, please contact:</p>
          </div>
          <div class="contact-method">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h4>Email Support</h4>
              <p><a href="mailto:kingonwork@gmail.com">kingonwork@gmail.com</a></p>
              <small>For Terms questions and account support</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <div class="terms-footer">
    <div class="footer-content">
      <div class="last-updated">
        <h4>📅 Terms Information</h4>
        <p><strong>Last Updated:</strong> November 8, 2025</p>
        <p><strong>Effective Date:</strong> November 8, 2025</p>
      </div>
      <div class="footer-contact">
        <h4>📞 Questions?</h4>
        <p>Contact us at <a href="mailto:kingonwork@gmail.com">kingonwork@gmail.com</a></p>
        <p>Response within 5 business days</p>
      </div>
    </div>
  </div>
</div>

<style>
.terms-content {
  max-width: 900px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2d3748;
}

/* Hero Section */
.terms-hero {
  background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
}

.terms-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.terms-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.terms-date {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.terms-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #68d391;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.terms-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Table of Contents */
.terms-toc {
  background: #f0fff4;
  border: 2px solid #c6f6d5;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.terms-toc h3 {
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-size: 1.3rem;
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.toc-item {
  display: block;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #c6f6d5;
  border-radius: 8px;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.toc-item:hover {
  background: #f0fff4;
  border-color: #38a169;
  color: #2f855a;
  transform: translateY(-1px);
}

/* Section Styling */
.terms-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #c6f6d5;
}

.section-number {
  background: #38a169;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.section-header h2 {
  margin: 0;
  color: #2d3748;
  font-size: 1.5rem;
}

.section-content {
  padding: 2rem;
}

/* Info Boxes */
.info-box {
  background: #ebf8ff;
  border: 1px solid #90cdf4;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.info-box h4 {
  color: #2c5282;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-box {
  background: #fef5e7;
  border: 1px solid #f6ad55;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.warning-box h4 {
  color: #c05621;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.enforcement-box, .notification-control, .data-retention, .external-responsibility {
  background: #f0fff4;
  border: 1px solid #68d391;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.enforcement-box h4, .notification-control h4, .data-retention h4, .external-responsibility h4 {
  color: #276749;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Acceptance Box */
.acceptance-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f0fff4;
  border: 2px solid #38a169;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.acceptance-icon {
  font-size: 2rem;
  min-width: 60px;
  text-align: center;
}

.acceptance-content h4 {
  color: #2f855a;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.acceptance-content p {
  color: #276749;
  margin: 0;
}

/* Purpose Overview */
.purpose-overview {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f0fff4;
  border: 2px solid #38a169;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.purpose-icon {
  font-size: 2rem;
  min-width: 60px;
  text-align: center;
}

.purpose-content h4 {
  color: #2f855a;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.purpose-content p {
  color: #276749;
  margin: 0;
}

/* Responsibilities List */
.responsibilities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.responsibility-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.resp-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.resp-text {
  color: #4a5568;
}

/* Roles Grid */
.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.role-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.role-developer {
  border-color: #3182ce;
}

.role-developer .role-header {
  color: #3182ce;
}

.role-tester {
  border-color: #38a169;
}

.role-tester .role-header {
  color: #38a169;
}

.role-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.role-icon {
  font-size: 1.5rem;
}

.role-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.role-card ul {
  margin: 0;
  padding-left: 1.2rem;
}

.role-card li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* General Rules */
.general-rules {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.general-rules h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rules-content p {
  color: #4a5568;
  margin: 0;
}

/* Limitations */
.limitations-intro {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.limitations-intro h4 {
  color: #c05621;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prohibited-activities {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.activity-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.activity-text {
  color: #4a5568;
}

.legitimate-use {
  background: linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%);
  border: 2px solid #38a169;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.use-badge {
  display: inline-block;
  background: #38a169;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.legitimate-use p {
  margin: 0;
  color: #276749;
  font-size: 1.1rem;
}

/* Ownership Grid */
.ownership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.ownership-item {
  text-align: center;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.ownership-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.ownership-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.ownership-item p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

/* Notification Agreement */
.notification-agreement {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f0fff4;
  border: 2px solid #38a169;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.agreement-icon {
  font-size: 2rem;
  min-width: 60px;
  text-align: center;
}

.agreement-content h4 {
  color: #2f855a;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.agreement-content p {
  color: #276749;
  margin: 0;
}

/* Disclaimer Grid */
.disclaimer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.disclaimer-item {
  text-align: center;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.disclaimer-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.disclaimer-item h4 {
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.disclaimer-item p {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

/* Liability */
.liability-intro {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.liability-intro h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.liability-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.liability-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.liability-icon {
  font-size: 1.5rem;
  min-width: 40px;
}

.liability-text {
  color: #4a5568;
}

.remedy-box {
  background: #fef5e7;
  border: 1px solid #f6ad55;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.remedy-box h4 {
  color: #c05621;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Termination */
.termination-reasons {
  margin-bottom: 2rem;
}

.termination-reasons h4 {
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.reason-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.reason-icon {
  font-size: 1.2rem;
  min-width: 30px;
}

.reason-text {
  color: #4a5568;
  font-size: 0.9rem;
}

/* Third-Party Services */
.services-intro {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.services-intro h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.service-item:hover {
  border-color: #38a169;
  box-shadow: 0 2px 8px rgba(56, 161, 105, 0.1);
}

.service-icon {
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

.service-content h4 {
  margin: 0 0 0.25rem 0;
  color: #2d3748;
}

.service-content p {
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
}

/* Changes Process */
.changes-process {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.change-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.step-icon {
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.step-content p {
  margin: 0;
  color: #4a5568;
}

/* Legal Framework */
.legal-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.legal-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
}

.legal-icon {
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

.legal-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.legal-content p {
  margin: 0;
  color: #4a5568;
}

/* Contact */
.contact-info {
  text-align: center;
}

.contact-intro {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.contact-intro h4 {
  color: #2f855a;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.contact-method {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 50px;
  text-align: center;
}

.contact-details h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.contact-details p {
  margin: 0 0 0.25rem 0;
  color: #4a5568;
}

.contact-details a {
  color: #38a169;
  text-decoration: none;
  font-weight: 600;
}

.contact-details a:hover {
  text-decoration: underline;
}

.contact-details small {
  color: #718096;
  font-size: 0.8rem;
}

/* Footer */
.terms-footer {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.last-updated h4,
.footer-contact h4 {
  margin: 0 0 1rem 0;
  color: white;
  font-size: 1.1rem;
}

.last-updated p,
.footer-contact p {
  margin: 0.25rem 0;
  color: #cbd5e0;
}

.footer-contact a {
  color: #68d391;
  text-decoration: none;
  font-weight: 600;
}

.footer-contact a:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .terms-content {
    margin: 0 1rem;
  }
  
  .terms-hero {
    padding: 2rem 1.5rem;
  }
  
  .terms-title {
    font-size: 2rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .section-content {
    padding: 1.5rem;
  }
  
  .terms-toc {
    padding: 1.5rem;
  }
  
  .toc-grid {
    grid-template-columns: 1fr;
  }
  
  .roles-grid,
  .ownership-grid,
  .disclaimer-grid,
  .legal-framework {
    grid-template-columns: 1fr;
  }
  
  .reasons-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .acceptance-box,
  .purpose-overview,
  .notification-agreement {
    flex-direction: column;
    text-align: center;
  }
}

/* Print Styles */
@media print {
  .terms-toc {
    display: none;
  }
  
  .terms-section {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #e2e8f0;
  }
  
  .terms-hero {
    background: #f7fafc !important;
    color: #2d3748 !important;
  }
}
</style>
`
