import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieRoom Features - Premium Movie Streaming Experience',
  description: 'Discover amazing features of MovieRoom Premium: 4K streaming, offline downloads, personalized recommendations, multi-device support, and more.',
  keywords: 'MovieRoom features, 4K streaming, offline downloads, movie recommendations, Android app features',
  openGraph: {
    title: 'MovieRoom Features - Premium Streaming Experience',
    description: 'Explore all the amazing features that make MovieRoom the best free movie streaming app for Android.',
    url: 'https://movieroom-portal.vercel.app/features',
  },
}

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface/50">
      {/* Features content will go here */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">MovieRoom Features</h1>
        <p className="text-xl text-center text-text-muted mb-12">
          Discover why millions of users choose MovieRoom for their entertainment needs
        </p>
        
        {/* Feature grid will be implemented here */}
        <div className="text-center">
          <p className="text-text-muted">Coming soon... This page is under construction.</p>
        </div>
      </div>
    </div>
  )
}
