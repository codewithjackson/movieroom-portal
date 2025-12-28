import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MovieRoom Screenshots - App Interface Preview',
  description: 'View beautiful screenshots of MovieRoom Premium app interface. See how easy it is to browse, stream, and download your favorite movies.',
  keywords: 'MovieRoom screenshots, app interface, movie app design, Android app UI',
  openGraph: {
    title: 'MovieRoom App Screenshots',
    description: 'Take a visual tour of MovieRoom Premium app and see its beautiful, user-friendly interface.',
    url: 'https://movieroom-portal.vercel.app/screenshots',
  },
}

export default function Screenshots() {
  const screenshots = [
    { id: 'home', title: 'Home Screen', description: 'Browse trending movies and shows' },
    { id: 'search', title: 'Search', description: 'Find any movie instantly' },
    { id: 'details', title: 'Movie Details', description: 'View detailed information about movies' },
    { id: 'player', title: 'Video Player', description: 'Stream in stunning 4K quality' },
    { id: 'downloads', title: 'Downloads', description: 'Manage offline content' },
    { id: 'profile', title: 'Profile', description: 'Personalized experience' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface/50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">MovieRoom Screenshots</h1>
        <p className="text-xl text-center text-text-muted mb-12">
          Take a visual tour of our beautiful app interface
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="relative group">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-surface/50 border border-white/10">
                <img
                  src={`/screenshots/${screenshot.id}.webp`}
                  alt={screenshot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">{screenshot.title}</h3>
                <p className="text-text-muted">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
