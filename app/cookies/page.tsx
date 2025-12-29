import Link from 'next/link'
import { Cookie, Shield, Eye, Settings, Mail } from 'lucide-react'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-surface/95">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Learn how MovieRoom uses cookies to enhance your streaming experience
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="#overview" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <Cookie className="w-4 h-4" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="#types" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Cookie Types</span>
          </Link>
          <Link href="#management" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="font-medium">Management</span>
          </Link>
          <Link href="#third-party" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Eye className="w-4 h-4" />
            <span className="font-medium">Third-Party</span>
          </Link>
          <Link href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="font-medium">Contact</span>
          </Link>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section id="overview" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cookie className="w-6 h-6 text-primary" />
              Cookie Policy Overview
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                MovieRoom uses cookies and similar technologies to enhance your experience on our platform. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
              </p>
              <p><strong>What are Cookies?</strong></p>
              <p>
                Cookies are small text files stored on your device when you visit websites. They help us remember your preferences, improve your experience, and provide personalized content.
              </p>
              <p><strong>Last Updated:</strong> December 29, 2024</p>
            </div>
          </section>

          {/* Cookie Types */}
          <section id="types" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Essential Cookies:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Required for basic site functionality</li>
                <li>Enable navigation and access to secure areas</li>
                <li>Cannot be disabled</li>
              </ul>
              <p><strong>Performance Cookies:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Collect information about how you use our site</li>
                <li>Help us improve performance</li>
                <li>Anonymous usage statistics</li>
              </ul>
              <p><strong>Functional Cookies:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Provide personalized features</li>
                <li>Enable social media integration</li>
              </ul>
              <p><strong>Targeting Cookies:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Deliver relevant advertisements</li>
                <li>Track marketing effectiveness</li>
                <li>Personalize content based on interests</li>
              </ul>
            </div>
          </section>

          {/* Cookie Management */}
          <section id="management" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Browser Settings:</strong></p>
              <p>You can control cookies through your browser settings:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
                <li>Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                <li>Safari: Preferences &gt; Privacy &gt; Cookies</li>
              </ul>
              <p><strong>Cookie Categories:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Essential: Always required for site functionality</li>
                <li>Performance: Optional, help improve the site</li>
                <li>Functional: Optional, enhance user experience</li>
                <li>Targeting: Optional, for personalized content</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section id="third-party" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary" />
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>We work with trusted third-party services:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Payment Processors:</strong> Stripe, PayPal for secure payments</li>
                <li><strong>Analytics Services:</strong> Google Analytics for usage insights</li>
                <li><strong>Content Delivery:</strong> Cloudflare for performance optimization</li>
                <li><strong>Social Media:</strong> Facebook, Twitter, Instagram integration</li>
                <li><strong>Advertising Partners:</strong> Google AdSense for relevant ads</li>
              </ul>
              <p><strong>Third-Party Control:</strong></p>
              <p>We don't control third-party cookies. Please review their privacy policies for more information.</p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us About Cookies
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Questions About Our Cookie Policy?</strong></p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@movieroom.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Cinema Street, Hollywood, CA</p>
              </div>
              <p><strong>Response Time:</strong></p>
              <p>We typically respond within 24-48 hours during business days.</p>
              <p><strong>Legal Framework:</strong></p>
              <p>Our cookie practices comply with GDPR, CCPA, ePrivacy Directive, and local privacy laws.</p>
            </div>
          </section>
        </div>

        {/* Cookie Settings Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Manage Your Cookie Preferences</h3>
              <p className="text-text-muted text-sm">
                Click here to customize your cookie settings and control what data we collect
              </p>
            </div>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all">
              Cookie Settings
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-text-muted text-sm">
            This Cookie Policy was last updated on December 29, 2024
          </p>
          <p className="text-text-muted text-sm mt-2">
            By continuing to use MovieRoom, you agree to our use of cookies
          </p>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
