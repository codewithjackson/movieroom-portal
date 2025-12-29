import Link from 'next/link'
import { 
  Film, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Github,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield,
  Zap,
  Users,
  Sparkles,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Movies', href: '/movies' },
      { name: 'TV Shows', href: '/tv-shows' },
      { name: 'Premium', href: '/premium' },
      { name: 'Watch Party', href: '/watch-party' },
      { name: 'Download App', href: '/download' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
      { name: 'Partners', href: '/partners' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'System Status', href: '/status' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    Resources: [
      { name: 'API Documentation', href: '/api-docs' },
      { name: 'Developers', href: '/developers' },
      { name: 'Content Partners', href: '/partners' },
      { name: 'Community', href: '/community' },
      { name: 'Guidelines', href: '/guidelines' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ]

  const features = [
    { icon: Shield, text: 'Secure & Private' },
    { icon: Zap, text: 'Instant Streaming' },
    { icon: Users, text: 'Watch Together' },
    { icon: Sparkles, text: 'HD Quality' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-surface to-surface/95 border-t border-white/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Feature Highlights */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                <Film className="w-7 h-7 text-white" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  MovieRoom
                </span>
                <span className="text-sm text-primary font-medium">PREMIUM STREAMING</span>
              </div>
            </Link>
            
            <p className="text-text-muted max-w-md">
              Experience cinema like never before. Stream thousands of movies and TV shows 
              in stunning 4K quality. Watch anytime, anywhere with friends and family.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-muted">
                <Mail className="w-4 h-4" />
                <span>support@movieroom.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>123 Cinema Street, Hollywood, CA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-white font-bold text-lg">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-text-muted hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Channel Subscription */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl border border-green-500/20 p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Join Our WhatsApp Channel
            </h3>
            <p className="text-text-muted mb-6">
              Get exclusive movie recommendations, latest updates, and join our community of movie lovers. 
              Never miss out on new releases and special offers!
            </p>
            <a
              href="https://whatsapp.com/channel/0029VbC8vSh2ZjCmnwNbuc0s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold hover:shadow-md hover:shadow-green-500/20 transition-all duration-300 hover:scale-102"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Channel
            </a>
            <p className="text-xs text-text-muted mt-4">
              By joining, you'll get instant updates on new movies and exclusive content recommendations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <span>  {currentYear} MovieRoom. All rights reserved.</span>
              <span> {currentYear} MovieRoom. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="text-text-muted cursor-not-allowed opacity-60">
                Privacy Policy
              </span>
              <span className="text-text-muted cursor-not-allowed opacity-60">
                Terms of Service
              </span>
              <span className="text-text-muted cursor-not-allowed opacity-60">
                Cookie Policy
              </span>
              <span className="text-text-muted cursor-not-allowed opacity-60">
                Sitemap
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <span>English</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5">EN</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <span>USD $</span>
            </div>
          </div>
        </div>

        {/* App Badges */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">▶</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-text-muted">Get it on</div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </a>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">􀣺</span>
            </div>
            <div className="text-left">
              <div className="text-xs text-text-muted">Download on the</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  )
}

export default Footer