import Link from 'next/link'
import { Shield, Users, Database, AlertTriangle, Mail } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-surface/95">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Please read these terms carefully before using MovieRoom services
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="#overview" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Overview</span>
          </Link>
          <Link href="#services" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Users className="w-4 h-4" />
            <span className="font-medium">Our Services</span>
          </Link>
          <Link href="#data" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Database className="w-4 h-4" />
            <span className="font-medium">Data & Privacy</span>
          </Link>
          <Link href="#conduct" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-medium">User Conduct</span>
          </Link>
          <Link href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span className="font-medium">Contact Us</span>
          </Link>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section id="overview" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Terms of Service Overview
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Welcome to MovieRoom! These Terms of Service govern your use of our movie streaming platform. By accessing MovieRoom, you agree to be bound by these Terms.
              </p>
              <p><strong>Last Updated:</strong> December 29, 2024</p>
              <p>
                MovieRoom is a premium streaming service that provides access to thousands of movies and TV shows. These Terms outline the rules for using our platform responsibly.
              </p>
            </div>
          </section>

          {/* Our Services */}
          <section id="services" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Our Services
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>What We Offer:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Streaming in HD and 4K quality</li>
                <li>Watch Party features</li>
                <li>Personalized recommendations</li>
                <li>Download options</li>
                <li>Multi-device support</li>
              </ul>
              <p><strong>Subscription Plans:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free Plan: Limited content with ads</li>
                <li>Premium Plan: Full access, no ads</li>
                <li>Family Plan: Up to 6 accounts</li>
              </ul>
            </div>
          </section>

          {/* Data & Privacy */}
          <section id="data" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Data & Privacy
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Data Collection:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information</li>
                <li>Viewing history and preferences</li>
                <li>Device information</li>
                <li>Payment information (encrypted)</li>
              </ul>
              <p><strong>Data Protection:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Industry-standard encryption</li>
                <li>We never sell your data</li>
                <li>GDPR compliant</li>
              </ul>
            </div>
          </section>

          {/* User Conduct */}
          <section id="conduct" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              User Conduct
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Acceptable Use:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Do not share account credentials</li>
                <li>Do not use automated tools</li>
                <li>Do not bypass security measures</li>
              </ul>
              <p><strong>Consequences:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warning or suspension</li>
                <li>Account termination</li>
                <li>Legal action if necessary</li>
              </ul>
            </div>
          </section>

          {/* Contact Us */}
          <section id="contact" className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p><strong>Contact Information:</strong></p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@movieroom.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Cinema Street, Hollywood, CA</p>
              </div>
              <p>Response time: 24-48 hours during business days.</p>
            </div>
          </section>
        </div>

        {/* Download Link */}
        <div className="text-center my-12">
          <a href="/app-release.apk" download className="btn btn-primary">
            Download MovieRoom App
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Terms of Service last updated: December 29, 2024
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
