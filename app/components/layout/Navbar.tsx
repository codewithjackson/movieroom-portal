'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  Home, 
  Film, 
  Tv, 
  Star, 
  Sparkles,
  MessageCircle,
  Download,
  ChevronDown
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Features', href: '/features', icon: Sparkles },
    { name: 'Screenshots', href: '/screenshots', icon: Film },
    { name: 'FAQ', href: '/faq', icon: Star },
    { name: 'Contact', href: '/contact', icon: Tv },
  ]

  const downloadVersions = [
    { version: 'v2.5.1', size: '85 MB', date: 'Latest', highlight: true },
    { version: 'v2.4.3', size: '82 MB', date: 'Previous' },
    { version: 'v2.3.0', size: '80 MB', date: 'Older' },
  ]

  const userMenuItems = [
    { name: 'My Profile', href: '/profile' },
    { name: 'Watchlist', href: '/watchlist' },
    { name: 'History', href: '/history' },
    { name: 'Settings', href: '/settings' },
    { name: 'Help Center', href: '/help' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-lg border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25"
                >
                  <Film className="w-6 h-6 text-white" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    MovieRoom
                  </span>
                  <span className="text-xs text-primary font-medium">OFFICIAL DOWNLOAD</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Navigation Links */}
              <div className="flex items-center space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-white/10' 
                          : 'text-text-muted hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-lg transition-all duration-300" />
                    </Link>
                  )
                })}
              </div>

              {/* Download Button with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
                  className="group relative flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    downloadMenuOpen ? 'rotate-180' : ''
                  }`} />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                </button>

                {/* Download Dropdown */}
                <AnimatePresence>
                  {downloadMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-72 z-50"
                      onMouseLeave={() => setDownloadMenuOpen(false)}
                    >
                      <div className="bg-surface/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                        {/* Dropdown Header */}
                        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                              <Download className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-white">Download MovieRoom</p>
                              <p className="text-xs text-text-muted">Latest version: v2.5.1</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Version List */}
                        <div className="p-2">
                          {downloadVersions.map((version, index) => (
                            <a
                              key={index}
                              href={`/downloads/movieroom-${version.version}.apk`}
                              download={`MovieRoom-${version.version}.apk`}
                              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                                version.highlight
                                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20'
                                  : 'hover:bg-white/10'
                              }`}
                              onClick={() => setDownloadMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  version.highlight
                                    ? 'bg-gradient-to-br from-primary to-secondary'
                                    : 'bg-white/5'
                                }`}>
                                  <Download className={`w-4 h-4 ${
                                    version.highlight ? 'text-white' : 'text-text-muted'
                                  }`} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{version.version}</span>
                                    {version.highlight && (
                                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                                        Latest
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-text-muted">{version.size} • {version.date}</p>
                                </div>
                              </div>
                              <div className={`text-xs px-2 py-1 rounded ${
                                version.highlight
                                  ? 'bg-primary/20 text-primary'
                                  : 'bg-white/5 text-text-muted'
                              }`}>
                                APK
                              </div>
                            </a>
                          ))}
                        </div>
                        
                        {/* Quick Info */}
                        <div className="p-3 border-t border-white/10 bg-black/20">
                          <div className="flex items-center justify-between text-xs text-text-muted">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                              <span>Safe & Verified</span>
                            </div>
                            <span>Android 8.0+</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Menu */}
              <div className="relative group">
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center transition-all hover:scale-105">
                  <User className="w-5 h-5 text-white" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-surface/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-2 mt-2">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Welcome!</p>
                          <p className="text-sm text-text-muted">Join our community</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <a
                        href="https://whatsapp.com/channel/0029VbC8vSh2ZjCmnwNbuc0s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <MessageCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                        <span className="text-white">Join WhatsApp Channel</span>
                      </a>
                    </div>
                    
                    <div className="py-2 border-t border-white/10">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:text-white hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors hover:bg-white/10 active:scale-95 touch-manipulation"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30' 
                          : 'text-text-muted hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Download Section */}
              <div className="pt-4 border-t border-white/10">
                <div className="mb-4">
                  <h3 className="font-bold text-white mb-3">Download Latest Version</h3>
                  <a
                    href="/downloads/movieroom-v2.5.1.apk"
                    download="MovieRoom-v2.5.1.apk"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download v2.5.1 (85 MB)
                  </a>
                  <p className="text-xs text-text-muted text-center mt-2">
                    Android 8.0+ • Safe & Verified
                  </p>
                </div>

                {/* Other Versions */}
                <div className="space-y-2">
                  <h4 className="text-sm text-text-muted">Other Versions</h4>
                  {downloadVersions.slice(1).map((version, index) => (
                    <a
                      key={index}
                      href={`/downloads/movieroom-${version.version}.apk`}
                      download={`MovieRoom-${version.version}.apk`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="font-medium">{version.version}</span>
                        <span className="text-xs text-text-muted ml-2">{version.size}</span>
                      </div>
                      <span className="text-xs text-text-muted">{version.date}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://whatsapp.com/channel/0029VbC8vSh2ZjCmnwNbuc0s"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar