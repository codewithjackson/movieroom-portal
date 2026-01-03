import Link from 'next/link'
import { Home, Film, Users, Settings, Mail, Phone } from 'lucide-react'

const SiteMap = () => {
  const sections = {
    main: {
      title: 'Main Pages',
      icon: Home,
      links: [
        { title: 'Home', url: '/', description: 'Main landing page with featured content' },
        { title: 'Features', url: '/features', description: 'Discover all MovieRoom features' },
        { title: 'Screenshots', url: '/screenshots', description: 'View app screenshots and gallery' },
        { title: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { title: 'Contact', url: '/contact', description: 'Get in touch with our team' },
      ]
    },
    content: {
      title: 'Content & Media',
      icon: Film,
      links: [
        { title: 'Movies', url: '/movies', description: 'Browse our movie collection' },
        { title: 'TV Shows', url: '/tv-shows', description: 'Watch popular TV series' },
        { title: 'Premium', url: '/premium', description: 'Premium content and features' },
        { title: 'Watch Party', url: '/watch-party', description: 'Group viewing experience' },
        { title: 'Download App', url: '/app-release.apk', description: 'Download mobile applications' },
      ]
    },
    account: {
      title: 'Account & User',
      icon: Users,
      links: [
        { title: 'My Profile', url: '/profile', description: 'Manage your profile information' },
        { title: 'Watchlist', url: '/watchlist', description: 'Your personal watchlist' },
        { title: 'History', url: '/history', description: 'View your viewing history' },
        { title: 'Settings', url: '/settings', description: 'Account and app settings' },
        { title: 'Help Center', url: '/help', description: 'Get help and support' },
      ]
    },
    legal: {
      title: 'Legal & Policies',
      icon: Settings,
      links: [
        { title: 'Privacy Policy', url: '/privacy', description: 'How we protect your privacy' },
        { title: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { title: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and preferences' },
        { title: 'Site Map', url: '/site-map', description: 'Site structure and navigation' },
      ]
    },
    company: {
      title: 'Company',
      icon: Mail,
      links: [
        { title: 'About Us', url: '/about', description: 'Learn about MovieRoom' },
        { title: 'Careers', url: '/careers', description: 'Join our team' },
        { title: 'Press', url: '/press', description: 'Press releases and media' },
        { title: 'Blog', url: '/blog', description: 'Latest news and updates' },
        { title: 'Partners', url: '/partners', description: 'Partner with us' },
      ]
    },
    support: {
      title: 'Support & Resources',
      icon: Phone,
      links: [
        { title: 'API Documentation', url: '/api-docs', description: 'Developer resources' },
        { title: 'Developers', url: '/developers', description: 'Developer portal' },
        { title: 'Content Partners', url: '/content-partners', description: 'Content partnership' },
        { title: 'Community', url: '/community', description: 'Join our community' },
        { title: 'Guidelines', url: '/guidelines', description: 'Community guidelines' },
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-surface/95">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Navigate through all pages and sections of MovieRoom
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(sections).map(([key, section]) => {
            const Icon = section.icon
            return (
              <div
                key={key}
                className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {section.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="text-white font-medium group-hover:text-primary transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-text-muted text-sm mt-1">{link.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/"
              className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Home className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-medium">Home</span>
            </Link>
            <Link
              href="/movies"
              className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Film className="w-6 h-6 text-secondary mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-medium">Movies</span>
            </Link>
            <Link
              href="/premium"
              className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Users className="w-6 h-6 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-medium">Premium</span>
            </Link>
            <Link
              href="/contact"
              className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <Mail className="w-6 h-6 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-medium">Contact</span>
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Site Map last updated: December 29, 2024
          </p>
          <p className="text-text-muted text-sm mt-2">
            Can't find what you're looking for?{' '}
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SiteMap
