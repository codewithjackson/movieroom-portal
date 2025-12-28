'use client'

import { useState } from 'react'
import { 
  Zap, 
  Users, 
  Shield, 
  Sparkles, 
  Film, 
  Globe, 
  Download, 
  Headphones,
  Smartphone,
  Award,
  Clock,
  Star
} from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast Streaming',
    description: 'Buffer-free 4K streaming with our advanced CDN technology. Start watching instantly.',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400',
    stats: '0.5s',
    statLabel: 'Start Time'
  },
  {
    id: 2,
    icon: Users,
    title: 'Watch Together',
    description: 'Sync watch parties with friends & family, no matter where they are in the world.',
    color: 'from-blue-500 to-cyan-400',
    iconColor: 'text-blue-400',
    stats: '10+',
    statLabel: 'Users Per Party'
  },
  {
    id: 3,
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'End-to-end encryption keeps your viewing habits private and secure.',
    color: 'from-green-500 to-emerald-400',
    iconColor: 'text-green-400',
    stats: '100%',
    statLabel: 'Secure'
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Personalized suggestions based on your viewing history and preferences.',
    color: 'from-orange-500 to-yellow-500',
    iconColor: 'text-orange-400',
    stats: '95%',
    statLabel: 'Accuracy'
  },
  {
    id: 5,
    icon: Film,
    title: 'Massive Library',
    description: 'Access to 10,000+ movies and 5,000+ TV shows with new content weekly.',
    color: 'from-red-500 to-rose-500',
    iconColor: 'text-red-400',
    stats: '15K+',
    statLabel: 'Titles'
  },
  {
    id: 6,
    icon: Globe,
    title: 'Global Content',
    description: 'Movies and shows from Hollywood, Bollywood, K-dramas, and international cinema.',
    color: 'from-indigo-500 to-blue-500',
    iconColor: 'text-indigo-400',
    stats: '50+',
    statLabel: 'Countries'
  },
  {
    id: 7,
    icon: Download,
    title: 'Offline Viewing',
    description: 'Download content to watch on planes, trains, or anywhere without internet.',
    color: 'from-teal-500 to-green-500',
    iconColor: 'text-teal-400',
    stats: 'Unlimited',
    statLabel: 'Downloads'
  },
  {
    id: 8,
    icon: Headphones,
    title: 'Audio Excellence',
    description: 'Dolby Atmos, DTS:X, and spatial audio for immersive theater-like experience.',
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-violet-400',
    stats: 'Dolby',
    statLabel: 'Atmos'
  },
  {
    id: 9,
    icon: Smartphone,
    title: 'Multi-Device Sync',
    description: 'Start on your TV, continue on your phone, finish on your tablet. Seamlessly.',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-400',
    stats: '5',
    statLabel: 'Devices'
  },
  {
    id: 10,
    icon: Award,
    title: 'Award-Winning Originals',
    description: 'Exclusive MovieRoom Originals with award-winning directors and actors.',
    color: 'from-rose-500 to-pink-500',
    iconColor: 'text-rose-400',
    stats: '50+',
    statLabel: 'Awards'
  },
  {
    id: 11,
    icon: Clock,
    title: 'No Time Limits',
    description: 'Watch as much as you want, whenever you want. No viewing limits or restrictions.',
    color: 'from-sky-500 to-blue-500',
    iconColor: 'text-sky-400',
    stats: '24/7',
    statLabel: 'Access'
  },
  {
    id: 12,
    icon: Star,
    title: 'Premium Quality',
    description: 'Highest quality streams with adaptive bitrate for perfect viewing every time.',
    color: 'from-yellow-500 to-amber-500',
    iconColor: 'text-yellow-400',
    stats: '4K HDR',
    statLabel: 'Quality'
  }
]

// Fixed TypeScript types for Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
}

const AnimatedFeatureGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  // Simple inView detection without the external library
  const [inView, setInView] = useState(false)

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Grid Container */}
        <motion.div
          onViewportEnter={() => setInView(true)}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const isHovered = hoveredId === feature.id
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group"
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative h-full p-6 rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-sm overflow-hidden">
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className="relative mb-6"
                    animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 flex items-center justify-center transition-all duration-300`}>
                      <div className="w-12 h-12 rounded-xl bg-surface/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Floating Stars */}
                    {isHovered && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center"
                        >
                          <Star className="w-3 h-3 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                          {feature.stats}
                        </div>
                        <div className="text-xs text-text-muted">
                          {feature.statLabel}
                        </div>
                      </div>
                      
                      {/* Animated Arrow */}
                      <motion.div
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          className="text-text-muted group-hover:text-white transition-colors"
                        >
                          <path 
                            d="M3 8H13M13 8L9 4M13 8L9 12" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 px-8 py-6 rounded-2xl bg-surface/30 backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                15K+
              </div>
              <div className="text-sm text-text-muted">Movies & Shows</div>
            </div>
            
            <div className="hidden sm:block h-12 w-px bg-white/10" />
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-text-muted">Uptime</div>
            </div>
            
            <div className="hidden sm:block h-12 w-px bg-white/10" />
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-text-muted">Countries</div>
            </div>
            
            <div className="hidden sm:block h-12 w-px bg-white/10" />
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-sm text-text-muted">User Rating</div>
            </div>
          </div>
          
          <p className="text-text-muted mt-6 max-w-2xl mx-auto">
            Join over 1 million users who have transformed their entertainment experience with MovieRoom Premium.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedFeatureGrid