'use client' // Add this at the top

import { ArrowDown, CheckCircle, Star, Users, Shield, Zap, Download, Smartphone, Cpu, HardDrive, Calendar, Clock, FileText, HelpCircle, Wifi, Battery, Globe } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import InteractivePhoneMockup from '@/app/components/ui/InteractivePhoneMockup'

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MovieRoom Premium',
  description: 'Free Android movie streaming app with 4K quality, offline downloads, and 10M+ happy users. Safe, virus-free, no registration required.',
  applicationCategory: 'EntertainmentApplication',
  operatingSystem: 'Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '10000000',
    bestRating: '5',
    worstRating: '1'
  },
  downloadUrl: 'https://movieroom-portal.vercel.app/downloads/movieroom-v2.5.1.apk',
  fileFormat: 'application/vnd.android.package-archive',
  fileSize: '85 MB',
  version: '2.5.1',
  datePublished: '2024-12-15',
  author: {
    '@type': 'Organization',
    name: 'MovieRoom Official'
  },
  publisher: {
    '@type': 'Organization',
    name: 'MovieRoom Official'
  },
  keywords: 'movie streaming, android app, free movies, APK download, entertainment, cinema, films'
}

export default function Home() {
  const appVersions = [
    { version: 'v2.5.1', size: '85 MB', date: 'Dec 15, 2024', new: true },
    { version: 'v2.4.3', size: '82 MB', date: 'Nov 28, 2024', new: false },
    { version: 'v2.3.0', size: '80 MB', date: 'Oct 10, 2024', new: false },
  ]

  const systemRequirements = [
    { icon: Smartphone, title: 'Android Version', value: 'Android 8.0+' },
    { icon: Cpu, title: 'Processor', value: 'Quad-core 1.5 GHz+' },
    { icon: HardDrive, title: 'Storage Space', value: '100 MB minimum' },
    { icon: Wifi, title: 'Internet', value: '5 Mbps for HD' },
    { icon: Battery, title: 'Battery', value: 'Recommended 3000mAh+' },
    { icon: Globe, title: 'Region', value: 'Available worldwide' },
  ]

  const whatsNew = [
    '🎬 New: Watch together feature with real-time chat',
    '✨ Improved: 4K streaming quality optimization',
    '🚀 Faster: 40% faster app loading time',
    '🔒 Enhanced: Better offline download management',
    '📱 Fixed: Crash issues on Android 14',
    '🎨 Updated: New dark theme with OLED optimization',
  ]

  const installationSteps = [
    { step: 1, title: 'Download APK', description: 'Click download button for latest version' },
    { step: 2, title: 'Allow Installation', description: 'Enable "Install from unknown sources" in settings' },
    { step: 3, title: 'Install App', description: 'Open downloaded APK and tap install' },
    { step: 4, title: 'Open & Enjoy', description: 'Launch MovieRoom and start streaming' },
  ]

  const faqs = [
    {
      question: 'Is MovieRoom free to download?',
      answer: 'Yes! MovieRoom app is completely free to download. We offer free content with ads and premium subscription for ad-free experience.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can browse content without an account, but you need to sign up to save favorites, continue watching, and access premium features.'
    },
    {
      question: 'Is the app safe to install?',
      answer: 'Absolutely! Our APK files are verified and free from malware. We regularly update security measures to protect our users.'
    },
    {
      question: 'Can I download movies for offline viewing?',
      answer: 'Yes! Premium users can download movies and shows to watch offline without internet connection.'
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface/50">
      <Navbar />
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 px-4">
        {/* Background Effects - Simplified for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content - Mobile centered, desktop left-aligned */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Badge - Smaller on mobile */}
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8">
                <Download className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm sm:text-sm md:text-base font-medium text-primary">Direct Download Available</span>
              </div>
              
              {/* Main Heading - Responsive sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8">
                Download MovieRoom
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent mt-2">
                  App for Android
                </span>
              </h1>
              
              {/* Subtitle - Responsive text */}
              <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
                Get the official MovieRoom APK directly from our website. 
                Stream thousands of movies and TV shows in stunning quality. 
                No Play Store required.
              </p>
              
              {/* Main Download Button - Full width on mobile */}
              <div className="mb-6 md:mb-8">
                <a
                  href="/downloads/movieroom-v2.5.1.apk"
                  download="MovieRoom-v2.5.1.apk"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-base sm:text-lg md:text-xl hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 active:scale-95 w-full sm:w-auto touch-manipulation"
                >
                  <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                  <span>Download MovieRoom v2.5.1</span>
                  <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 md:group-hover:translate-y-1 transition-transform" />
                </a>
                <p className="text-sm sm:text-base md:text-lg text-text-muted mt-2">
                  85 MB • Latest Version • Android 8.0+
                </p>
              </div>
              
              {/* App Stats - Mobile optimized */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 md:gap-10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">4.9★</div>
                  <div className="text-sm sm:text-base md:text-lg text-text-muted">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">10M+</div>
                  <div className="text-sm sm:text-base md:text-lg text-text-muted">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Safe</div>
                  <div className="text-sm sm:text-base md:text-lg text-text-muted">Virus Free</div>
                </div>
              </div>
            </div>
            
            {/* Right - Phone Mockup - Responsive sizing */}
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 lg:justify-end">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-sm mx-auto">
                <InteractivePhoneMockup />
                {/* Floating Download Badge - Hidden on very small screens */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <Download className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Version History & Download Options - Mobile optimized */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Download <span className="text-primary">Versions</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-3xl mx-auto">
              Choose from our verified APK releases. We recommend always using the latest version.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {appVersions.map((version, index) => (
              <div key={index} className={`p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border ${
                version.new 
                  ? 'border-primary/30 bg-gradient-to-b from-primary/10 to-transparent' 
                  : 'border-white/10 bg-surface/30'
              } backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center ${
                      version.new 
                        ? 'bg-gradient-to-br from-primary to-secondary' 
                        : 'bg-white/5'
                    }`}>
                      <Download className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${version.new ? 'text-white' : 'text-text-muted'}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg lg:text-xl">{version.version}</h3>
                      {version.new && (
                        <span className="text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-primary/20 text-primary">
                          Latest
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1.5 md:space-y-2 lg:space-y-3 mb-3 md:mb-4 lg:mb-6">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-text-muted">File Size:</span>
                    <span className="font-medium">{version.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-text-muted">Release Date:</span>
                    <span className="font-medium">{version.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-text-muted">Android:</span>
                    <span className="font-medium">8.0+</span>
                  </div>
                </div>
                
                <a
                  href={`/downloads/movieroom-${version.version}.apk`}
                  download={`MovieRoom-${version.version}.apk`}
                  className={`w-full py-2 md:py-2.5 lg:py-3 rounded-lg text-center font-medium transition-all text-xs md:text-sm active:scale-95 ${
                    version.new
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
                      : 'bg-white/5 text-text hover:bg-white/10'
                  }`}
                >
                  Download APK
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* System Requirements - Mobile optimized */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              System <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-3xl mx-auto">
              Check if your device is compatible with MovieRoom app
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {systemRequirements.map((req, index) => (
              <div key={index} className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <req.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base lg:text-lg">{req.title}</h3>
                    <p className="text-primary font-medium text-xs md:text-sm lg:text-base">{req.value}</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-text-muted">
                  {index === 0 && 'Requires Android 8.0 (Oreo) or higher for optimal performance.'}
                  {index === 1 && 'Minimum processor requirement for smooth 1080p streaming.'}
                  {index === 2 && 'Additional space needed for offline downloads and cache.'}
                  {index === 3 && 'Stable internet connection required for HD streaming.'}
                  {index === 4 && 'For extended viewing sessions without charging.'}
                  {index === 5 && 'Content availability may vary by region due to licensing.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What's New & Installation Guide - Stacked on mobile */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* What's New */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-8">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-green-500" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold">What's New in v2.5.1</h2>
                  <p className="text-text-muted text-xs md:text-sm">Latest updates and improvements</p>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                {whatsNew.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5">
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 text-primary" />
                    </div>
                    <span className="text-text text-xs md:text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Installation Guide */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-8">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FileText className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Installation Guide</h2>
                  <p className="text-text-muted text-xs md:text-sm">Step-by-step installation instructions</p>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                {installationSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-2 md:gap-3 lg:gap-4">
                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs md:text-sm lg:text-base">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-base lg:text-lg mb-0.5 md:mb-1">{step.title}</h3>
                      <p className="text-text-muted text-xs md:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Mobile optimized */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-text-muted max-w-3xl mx-auto">
              Find answers to common questions about MovieRoom app
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
                <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                  <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2 lg:mb-3">{faq.question}</h3>
                    <p className="text-text-muted text-xs md:text-sm lg:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Final Download CTA - Mobile optimized */}
          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <div className="inline-block p-0.5 md:p-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary to-secondary">
              <div className="bg-surface rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4">Ready to Download?</h3>
                <p className="text-text-muted mb-3 md:mb-4 lg:mb-6 max-w-2xl mx-auto text-xs md:text-sm lg:text-base">
                  Get the latest version of MovieRoom now and start streaming your favorite movies in minutes.
                </p>
                <a
                  href="/downloads/movieroom-v2.5.1.apk"
                  download="MovieRoom-v2.5.1.apk"
                  className="inline-flex items-center justify-center gap-1.5 md:gap-2 lg:gap-3 px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 active:scale-95 text-sm md:text-base lg:text-lg"
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  Download Now (v2.5.1 • 85 MB)
                </a>
                <p className="text-xs md:text-sm text-text-muted mt-2 md:mt-3 lg:mt-4">
                  Safe & Secure • No Registration Required • Free Forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </>
  )
}