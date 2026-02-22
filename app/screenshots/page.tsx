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
    { id: 'home', title: 'Home Screen', description: 'Experience our curated movie grid with personalized recommendations.' },
    { id: 'movies', title: 'Movies Explorer', description: 'Explore a vast library of films across all genres and eras.' },
    { id: 'details', title: 'Movie Details', description: 'Get rich metadata, trailers, and cast info for every title.' },
    { id: 'details2', title: 'More Info', description: 'Deep dive into seasons, episodes, and related content.' },
    { id: 'search', title: 'Smart Search', description: 'Instantly find exactly what you want with our powerful search.' },
    { id: 'library', title: 'Personal Library', description: 'Organize your movie life with watchlists and history.' },
    { id: 'library2', title: 'Collection View', description: 'A sleek way to browse your saved and downloaded movies.' },
    { id: 'favorites', title: 'Favorites', description: 'One tap access to the movies you love the most.' },
    { id: 'downloads', title: 'Downloads', description: 'Watch anywhere, anytime with full offline support.' },
    { id: 'video', title: '4K Player', description: 'Stunning visual quality with advanced playback controls.' },
    { id: 'collection', title: 'Genre Collections', description: 'Discover new titles through our themed movie collections.' },
    { id: 'profile', title: 'User Profile', description: 'Manage your settings, account, and preferences easily.' },
    { id: 'selector', title: 'Quick Selector', description: 'Swiftly switch between source qualities and subtitles.' },
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
