'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Star, TrendingUp, Users, Smartphone } from 'lucide-react'
import InteractivePhoneMockup from '@/app/components/ui/InteractivePhoneMockup'
import DownloadButton from '@/app/components/ui/DownloadButton'

// FIXED Animation variants with proper TypeScript types
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const  // ✅ Fixed: Added 'as const'
    }
  }
}

const staggerChildren = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

// Decorative elements constants moved outside to ensure purity
const PARTICLES = [
  { left: '25%', top: '30%', duration: 4.2, delay: 0.5 },
  { left: '45%', top: '20%', duration: 3.8, delay: 1.2 },
  { left: '75%', top: '40%', duration: 5.1, delay: 0.8 },
  { left: '15%', top: '60%', duration: 4.5, delay: 2.1 },
  { left: '85%', top: '70%', duration: 3.2, delay: 0.3 },
  { left: '35%', top: '80%', duration: 4.8, delay: 1.5 },
  { left: '65%', top: '15%', duration: 3.5, delay: 0.7 },
  { left: '20%', top: '45%', duration: 5.5, delay: 1.1 },
  { left: '80%', top: '25%', duration: 4.1, delay: 2.5 },
  { left: '55%', top: '55%', duration: 3.9, delay: 0.2 },
  { left: '40%', top: '75%', duration: 4.7, delay: 1.8 },
  { left: '70%', top: '35%', duration: 5.2, delay: 0.9 },
]

const BORDER_PARTICLES = [
  { left: '10%', top: '20%', duration: 3.5, delay: 1.2 },
  { left: '30%', top: '80%', duration: 4.2, delay: 0.5 },
  { left: '50%', top: '40%', duration: 3.8, delay: 2.1 },
  { left: '70%', top: '90%', duration: 5.1, delay: 0.8 },
  { left: '90%', top: '30%', duration: 4.5, delay: 1.5 },
  { left: '20%', top: '60%', duration: 3.2, delay: 0.3 },
  { left: '60%', top: '10%', duration: 4.8, delay: 2.5 },
  { left: '80%', top: '50%', duration: 3.5, delay: 0.7 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px),
                             linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center lg:text-left relative z-10"
          >
            {/* Premium Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6 group hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary relative z-10">PREMIUM EDITION</span>
              <span className="text-xs text-text-muted ml-2 relative z-10">v2.0</span>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 blur-md -z-10" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-space"
            >
              <span className="block opacity-90">Your Ultimate</span>
              <motion.span
                className="text-gradient bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                Movie Companion
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-text-muted mb-8 max-w-2xl leading-relaxed"
            >
              Discover, save, and enjoy movies like never before.
              <span className="text-primary font-semibold mx-1">No ads, no spoilers</span>,
              just pure cinematic magic. Download the premium movie experience today.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {[
                { icon: Shield, text: '100% Safe & Secure', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                { icon: Zap, text: 'Latest Version v2.0', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
                { icon: Star, text: 'Premium Features', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.bg} ${badge.border} border backdrop-blur-sm`}
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 relative"
            >
              {/* Download Button Component */}
              <DownloadButton />

              {/* Secondary Button */}
              <Link
                href="/features"
                className="group px-8 py-5 glass-effect rounded-2xl font-bold text-lg hover:bg-surface/70 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <span>Explore Features</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-md mx-auto lg:mx-0 lg:max-w-none"
            >
              {[
                { value: '10K+', label: 'Downloads', icon: TrendingUp, color: 'text-primary', delay: 0 },
                { value: '4.9★', label: 'Rating', icon: Star, color: 'text-yellow-400', delay: 0.1 },
                { value: '500+', label: 'Movies Daily', icon: Smartphone, color: 'text-secondary', delay: 0.2 },
                { value: '98%', label: 'Satisfaction', icon: Users, color: 'text-green-400', delay: 0.3 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group p-4 rounded-2xl hover:bg-surface/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-3 text-sm text-text-muted"
            >
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Direct download • No app store required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Android 8.0+ • 26 MB • Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>No login required • Offline support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <InteractivePhoneMockup />

              {/* Floating elements around phone */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" as const }
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-2xl hidden md:flex border-2 border-primary/50 z-20"
              >
                <Sparkles className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  times: [0, 0.5, 0.75, 1]
                }}
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-secondary to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl hidden md:flex border-2 border-secondary/50 z-20"
              >
                <span className="text-white font-bold text-2xl">🎬</span>
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-md" />
              </motion.div>

              {/* Floating particles */}
              {PARTICLES.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut" as const
                  }}
                />
              ))}

              {/* Platform Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-24 left-0 right-0 flex justify-center gap-4"
              >
                {['Android 8.0+', '100MB Free', 'No Root'].map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 text-sm"
                  >
                    {text}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center group cursor-pointer z-10"
      >
        <motion.span
          className="text-sm text-text-muted mb-2 group-hover:text-primary transition-colors"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/60 transition-colors relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"
          />
          {/* Scroll indicator glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/10 blur-sm"
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      {/* Animated border bottom */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear" as const,
        }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      {/* Interactive floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {BORDER_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut" as const
            }}
          />
        ))}
      </div>
    </section>
  )
}