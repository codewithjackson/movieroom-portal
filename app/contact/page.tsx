import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact MovieRoom - Get in Touch with Support',
  description: 'Contact MovieRoom support team for help, feedback, or partnerships. We\'re here to help with any questions about our movie streaming app.',
  keywords: 'MovieRoom contact, support team, customer service, movie app help',
  openGraph: {
    title: 'Contact MovieRoom Support',
    description: 'Get in touch with our support team for any questions or assistance with MovieRoom Premium.',
    url: 'https://movieroom-portal.vercel.app/contact',
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface/50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-xl text-center text-text-muted mb-12">
          We're here to help with any questions or feedback
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:outline-none">
                    <option>General Question</option>
                    <option>Technical Support</option>
                    <option>Feature Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-primary focus:outline-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-6">Get Support</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Email Support</h3>
                    <p className="text-text-muted">support@movieroom.app</p>
                    <p className="text-sm text-text-muted">Response within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Business Inquiries</h3>
                    <p className="text-text-muted">business@movieroom.app</p>
                    <p className="text-sm text-text-muted">Partnerships and collaborations</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-6">FAQ</h2>
                <p className="text-text-muted mb-4">
                  Most questions can be answered in our comprehensive FAQ section.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
