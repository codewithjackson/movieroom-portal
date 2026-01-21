import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieRoom FAQ - Frequently Asked Questions',
  description: 'Get answers to common questions about MovieRoom Premium app. Learn about features, safety, compatibility, and more.',
  keywords: 'MovieRoom FAQ, movie app questions, Android streaming help, APK download support',
  openGraph: {
    title: 'MovieRoom FAQ - Your Questions Answered',
    description: 'Find answers to frequently asked questions about MovieRoom Premium app.',
    url: 'https://movieroom-portal.vercel.app/faq',
  },
}

export default function FAQ() {
  const faqs = [
    {
      question: 'Is MovieRoom completely free?',
      answer: 'Yes! MovieRoom is completely free to download and use. We offer free content with ads and an optional premium subscription for an ad-free experience.'
    },
    {
      question: 'Is MovieRoom safe to install?',
      answer: 'Absolutely! Our APK files are verified and free from malware. We regularly update security measures to protect our users and ensure safe installation.'
    },
    {
      question: 'What Android version do I need?',
      answer: 'MovieRoom requires Android 8.0 (Oreo) or higher for optimal performance and compatibility with the latest features.'
    },
    {
      question: 'Can I download movies for offline viewing?',
      answer: 'Yes! Premium users can download unlimited movies and shows to watch offline without an internet connection.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can browse content without an account, but creating one allows you to save favorites, continue watching across devices, and access premium features.'
    },
    {
      question: 'How much storage space does the app need?',
      answer: 'The MovieRoom app requires only 100 MB minimum for installation. Additional space may be needed for downloads and cache.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface/50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-xl text-center text-text-muted mb-12">
          Everything you need to know about MovieRoom Premium
        </p>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
