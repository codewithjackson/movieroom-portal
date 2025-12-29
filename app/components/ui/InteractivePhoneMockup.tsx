'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, Loader2, X, Play, Pause, SkipBack, SkipForward, Volume2, Shield, Zap, Battery, Wifi, Signal } from 'lucide-react'
import Image from 'next/image'

const screenshots = [
  { 
    id: 'home', 
    label: 'Home Screen', 
    description: 'Beautiful movie grid with personalized recommendations',
    color: 'from-slate-900 via-slate-800 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/home.webp'
  },
  { 
    id: 'movies', 
    label: 'Movies', 
    description: 'Explore our extensive movie collection',
    color: 'from-slate-900 via-blue-950/20 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/movies.webp'
  },
  { 
    id: 'shows', 
    label: 'TV Shows', 
    description: 'Browse popular TV series and episodes',
    color: 'from-slate-900 via-amber-950/20 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/favorites.webp'
  },
  { 
    id: 'search', 
    label: 'Search', 
    description: 'Find movies instantly with filters and suggestions',
    color: 'from-slate-900 via-emerald-950/20 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/search.webp'
  },
  { 
    id: 'details', 
    label: 'Movie Details', 
    description: 'Everything about the movie in one beautiful view',
    color: 'from-slate-900 via-indigo-950/20 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/details.webp'
  },
  { 
    id: 'profile', 
    label: 'Profile', 
    description: 'Your watchlist, history and settings',
    color: 'from-slate-900 via-violet-950/20 to-slate-900',
    accent: '#64748b',
    screenshot: '/screenshots/profile.webp'
  },
]

export default function InteractivePhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [currentTime, setCurrentTime] = useState(120)
  const [totalTime] = useState(360)
  const [currentDate, setCurrentDate] = useState<string>('')
  
  useEffect(() => {
    // Set current date only on client side to avoid hydration mismatch
    setCurrentDate(new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    }))
    
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      }))
    }, 60000)
    
    return () => clearInterval(interval)
  }, [])

  const autoplayRef = useRef<number | null>(null)

  const nextScreenshot = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextScreenshot()
    }
    
    if (touchStart - touchEnd < -50) {
      prevScreenshot()
    }
  }

  // Media controls functions
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseInt(e.target.value))
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isFullscreen) {
      autoplayRef.current = window.setInterval(() => {
        nextScreenshot()
      }, 4000)
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [autoplay, isFullscreen, currentIndex])

  // Simulate playback time
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime) return 0;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalTime]);

  // Handle fullscreen exit
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  return (
    <>
      {/* Phone Mockup */}
      <div className="relative w-[320px] sm:w-[384px] md:w-[28rem] lg:w-[384px] mx-auto">
        {/* Phone Frame with Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] border-[12px] border-gray-900 shadow-2xl shadow-primary/20" />
        
        {/* Phone Screen */}
        <div className="relative mt-[12px] ml-[12px] w-[calc(100%-24px)] h-[640px] sm:h-[680px] md:h-[700px] lg:h-[720px] bg-black rounded-[2.5rem] overflow-hidden">
          {/* Screenshot Display */}
          <div 
            className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {/* Loading State */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                      <div className="animate-spin">
                        <Loader2 className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-text-muted text-sm">Loading screenshot...</p>
                    </div>
                  </div>
                )}

                {/* Screenshot Container */}
                <div className={`w-full h-full relative ${screenshots[currentIndex].color}`}>
                  {/* Status Bar */}
                  <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-8 z-10">
                    <div className="text-white text-sm font-medium">{currentDate}</div>
                    <div className="flex items-center gap-2">
                      <Signal className="w-4 h-4 text-white" />
                      <Wifi className="w-4 h-4 text-white" />
                      <Battery className="w-6 h-4 text-white" />
                    </div>
                  </div>

                  {/* Video Demo Button */}
                  {currentIndex === 0 && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute top-10 right-4 z-20 group"
                    >
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full glass-effect backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <Play className="w-4 h-4" />
                        <span className="text-sm">Watch demo</span>
                      </div>
                    </button>
                  )}

                  {/* Actual Screenshot Image */}
                  <div className="relative w-full h-full pt-8">
                    {/* Image with proper aspect ratio and optimization */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={screenshots[currentIndex].screenshot}
                        alt={screenshots[currentIndex].label}
                        fill
                        className="object-contain"
                        style={{ objectFit: 'cover' }}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                          console.error(`Failed to load: ${screenshots[currentIndex].screenshot}`)
                          setIsLoading(false)
                        }}
                        priority={currentIndex === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
                      
                      {/* Subtle gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    {/* App Content Overlay for Details Screen */}
                    {currentIndex === 4 && (
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center pt-8">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                              <span className="text-lg">ℹ️</span>
                            </div>
                            <span className="text-white font-semibold">Details</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-white/80" />
                            <Zap className="w-5 h-5 text-white/80" />
                          </div>
                        </div>

                        {/* Center Content */}
                        <div className="text-center">
                          <h3 className="text-white text-2xl font-bold mb-2">
                            Movie Details
                          </h3>
                          <p className="text-white/70 text-sm">
                            Watch, rate, and explore movies
                          </p>
                        </div>

                        {/* Media Player Controls */}
                        <div className="bg-black/60 backdrop-blur-2xl rounded-3xl p-6 mt-6 border border-white/10 shadow-2xl">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h4 className="text-white font-bold text-lg tracking-tight">Stranger Things</h4>
                              <p className="text-white/70 text-sm font-medium">S4 • E1: Chapter One</p>
                            </div>
                            <Maximize2 className="w-6 h-6 text-white/90 cursor-pointer hover:text-white transition-colors" />
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-6">
                            <input
                              type="range"
                              min="0"
                              max={totalTime}
                              value={currentTime}
                              onChange={handleTimeChange}
                              className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                            />
                            <div className="flex justify-between text-sm text-white/60 mt-2 font-medium">
                              <span>{formatTime(currentTime)}</span>
                              <span>{formatTime(totalTime)}</span>
                            </div>
                          </div>

                          {/* Player Controls */}
                          <div className="flex items-center justify-between">
                            <SkipBack className="w-7 h-7 text-white/80 cursor-pointer hover:text-white hover:scale-110 transition-all duration-200" />
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                              {isPlaying ? (
                                <Pause className="w-7 h-7 text-black" />
                              ) : (
                                <Play className="w-7 h-7 text-black ml-1" />
                              )}
                            </button>
                            <SkipForward className="w-7 h-7 text-white/80 cursor-pointer hover:text-white hover:scale-110 transition-all duration-200" />
                            <div className="flex items-center gap-3 ml-4">
                              <Volume2 className="w-5 h-5 text-white/80" />
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-24 h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Label Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-effect rounded-2xl p-5 backdrop-blur-xl border border-white/5 shadow-2xl">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-xl tracking-tight">{screenshots[currentIndex].label}</h3>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full shadow-lg"
                            style={{ backgroundColor: screenshots[currentIndex].accent }}
                          />
                          <span className="text-sm font-medium text-white/60">
                            {String(currentIndex + 1).padStart(2, '0')}/{String(screenshots.length).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-white/70 leading-relaxed">{screenshots[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <div className="flex gap-3 px-6 py-3 rounded-full glass-effect backdrop-blur-xl border border-white/5 shadow-xl">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsLoading(true)
                      setCurrentIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                      index === currentIndex 
                        ? 'scale-150 shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60 hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: index === currentIndex 
                        ? screenshots[currentIndex].accent 
                        : undefined
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Autoplay Indicator */}
            <div className="absolute top-12 left-4 z-20">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <div className={`w-2 h-2 rounded-full ${autoplay ? 'bg-green-500' : 'bg-red-500'}`} />
                {autoplay ? 'Autoplay ON' : 'Autoplay OFF'}
              </div>
            </div>
          </div>
        </div>

        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl z-10" />
        
        {/* Dynamic Phone Accent */}
        <div 
          className="absolute -inset-1 rounded-[3.5rem] blur-md opacity-20 -z-10"
          style={{ backgroundColor: screenshots[currentIndex].accent }}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevScreenshot}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-white/15 transition-all duration-500 z-20 group active:scale-95 shadow-xl hover:shadow-2xl"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        </button>
        
        <button
          onClick={nextScreenshot}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-white/15 transition-all duration-500 z-20 group active:scale-95 shadow-xl hover:shadow-2xl"
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-effect flex items-center justify-center hover:bg-white/15 transition-all duration-500 z-20 group border border-white/10 hover:border-white/20 hover:scale-110 shadow-xl hover:shadow-2xl"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Screenshot Counter */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="text-sm text-text-muted">Currently Viewing</div>
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: screenshots[currentIndex].accent }}
              />
              <span className="text-lg font-bold">{screenshots[currentIndex].label}</span>
            </div>
            <p className="text-sm text-text-muted max-w-xs">
              {screenshots[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors text-xl z-50"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="max-w-6xl w-full max-h-[90vh]">
              <div className="bg-surface rounded-3xl overflow-hidden border border-white/10">
                <div className="p-8 h-[85vh] flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold mb-3">
                      {screenshots[currentIndex].label}
                    </h3>
                    <p className="text-text-muted text-xl">
                      {screenshots[currentIndex].description}
                    </p>
                  </div>
                  
                  {/* Full-size Screenshot */}
                  <div className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Image
                      src={screenshots[currentIndex].screenshot}
                      alt={screenshots[currentIndex].label}
                      fill
                      className="object-contain p-8"
                      quality={100}
                    />
                    
                    {/* Screenshot Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-effect rounded-xl p-4 backdrop-blur-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: screenshots[currentIndex].accent }}
                          />
                          <span className="font-medium">{screenshots[currentIndex].label}</span>
                        </div>
                        <span className="text-text-muted text-sm">
                          Screenshot {currentIndex + 1} of {screenshots.length}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={prevScreenshot}
                      className="flex items-center gap-3 px-6 py-3 rounded-full glass-effect hover:bg-white/10 transition-colors group"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                      Previous
                    </button>
                    
                    <div className="flex gap-3">
                      {screenshots.map((screenshot, index) => (
                        <button
                          key={screenshot.id}
                          onClick={() => {
                            setIsLoading(true)
                            setCurrentIndex(index)
                          }}
                          className={`px-4 py-2 rounded-full transition-all ${
                            index === currentIndex 
                              ? 'text-white font-medium' 
                              : 'text-text-muted hover:text-white'
                          }`}
                          style={{
                            backgroundColor: index === currentIndex 
                              ? screenshots[currentIndex].accent + '40' 
                              : 'transparent'
                          }}
                        >
                          {screenshot.label}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={nextScreenshot}
                      className="flex items-center gap-3 px-6 py-3 rounded-full glass-effect hover:bg-white/10 transition-colors group"
                    >
                      Next
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Demo Modal */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors text-xl z-50"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="max-w-4xl w-full">
              <div className="bg-surface rounded-3xl overflow-hidden border border-white/10 p-8">
                <h3 className="text-3xl font-bold mb-4 text-center">App Demo Preview</h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-text-muted">App demo video coming soon!</p>
                    <p className="text-sm text-text-muted mt-2">Watch the app in action</p>
                  </div>
                </div>
                <p className="text-center text-text-muted mt-4">
                  A quick walkthrough of MovieRoom's best features
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}