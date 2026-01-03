'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Check, Loader2, Shield, Zap, Sparkles, FileDown, Smartphone } from 'lucide-react'

// Define a type for the download progress callback
type DownloadProgressCallback = (progress: number) => void

// Mock download function for now
const downloadAPK = (onProgress?: DownloadProgressCallback): Promise<void> => {
  return new Promise((resolve) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      if (onProgress) onProgress(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        
        // Create a fake download
        const link = document.createElement('a')
        link.href = '/app-release.apk' // Updated to point to the file in the public folder
        link.download = 'app-release.apk'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Trigger confetti
        triggerConfetti()
        resolve()
      }
    }, 100)
  })
}

const triggerConfetti = () => {
  // Simple confetti effect
  const confettiCount = 100
  const confettiElements = []
  
  for (let i = 0; i < confettiCount; i++) {
    const confettiEl = document.createElement('div')
    confettiEl.className = 'fixed w-2 h-2 rounded-full z-50 pointer-events-none'
    confettiEl.style.left = Math.random() * 100 + 'vw'
    confettiEl.style.top = '-10px'
    confettiEl.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`
    document.body.appendChild(confettiEl)
    confettiElements.push(confettiEl)
  }
  
  // Animate confetti
  confettiElements.forEach((el, i) => {
    const animation = el.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 1000,
      easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    })
    
    animation.onfinish = () => el.remove()
  })
}

// Version type
type VersionType = {
  id: string
  label: string
  size: string
  recommended: boolean
}

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [downloadCount, setDownloadCount] = useState(10427)
  const [showTooltip, setShowTooltip] = useState(false)

  // Simulate live download counter
  useEffect(() => {
    const interval = window.setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    
    return () => window.clearInterval(interval)
  }, [])

  const handleDownload = async (version = 'v2.0') => {
    if (isDownloading) return
    
    setIsDownloading(true)
    setProgress(0)
    setIsComplete(false)
    setShowOptions(false)
    
    // Show downloading animation
    const progressInterval = window.setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          window.clearInterval(progressInterval)
          return 95
        }
        return prev + Math.random() * 15
      })
    }, 200)

    try {
      await downloadAPK((realProgress) => {
        setProgress(realProgress)
      })
      
      window.clearInterval(progressInterval)
      setProgress(100)
      setIsComplete(true)
      
      // Increase download count
      setDownloadCount(prev => prev + 1)
      
      // Reset after 4 seconds
      window.setTimeout(() => {
        setIsComplete(false)
        setIsDownloading(false)
        setProgress(0)
      }, 4000)
      
    } catch (error) {
      console.error('Download failed:', error)
      window.clearInterval(progressInterval)
      setIsDownloading(false)
      setProgress(0)
    }
  }

  const versions: VersionType[] = [
    { id: 'v2.0', label: 'Latest Version', size: '42 MB', recommended: true },
    { id: 'v1.9', label: 'Previous Version', size: '38 MB', recommended: false },
    { id: 'lite', label: 'Lite Version', size: '24 MB', recommended: false },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" as const
      }
    }
  }

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.2, 
        ease: "backOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { 
        duration: 0.2, 
        ease: "easeIn" as const
      }
    }
  }

  return (
    <div className="relative">
      {/* Main Download Button */}
      <div className="relative group">
        <button
          onClick={() => handleDownload()}
          disabled={isDownloading || isComplete}
          className="relative px-8 py-5 bg-gradient-to-r from-primary via-purple-600 to-secondary rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 glow-border disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-full sm:w-auto min-w-[280px]"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-secondary -z-10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear" as const,
            }}
            style={{
              backgroundSize: '200% 200%',
              filter: 'blur(12px)',
              opacity: 0.6,
            }}
          />
          
          {/* Button content */}
          <div className="flex items-center justify-center gap-3 relative z-10">
            {/* Icon */}
            {isComplete ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "backOut" as const }}
                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            ) : isDownloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" as const }}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              >
                <Loader2 className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
              >
                <Download className="w-7 h-7 text-white" />
              </motion.div>
            )}
            
            {/* Text */}
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-white text-lg font-bold">
                  {isComplete ? 'Download Complete!' : 
                   isDownloading ? 'Downloading...' : 
                   'Download MovieRoom'}
                </span>
                {!isDownloading && !isComplete && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                )}
              </div>
              <div className="text-sm text-white/80 flex items-center gap-2">
                <span>{isDownloading ? `${progress.toFixed(0)}%` : 'v2.0 • 42 MB'}</span>
                <span className="text-xs px-2 py-0.5 bg-white/20 rounded-full">
                  {downloadCount.toLocaleString()} downloads
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          {isDownloading && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 rounded-b-2xl overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </motion.div>
          )}
        </button>

        {/* Version dropdown button */}
        {!isDownloading && !isComplete && (
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-effect border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors z-20 group"
          >
            <motion.div
              animate={{ rotate: showOptions ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="text-text-muted group-hover:text-white"
            >
              ▼
            </motion.div>
          </button>
        )}
      </div>

      {/* Version Options Dropdown */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={scaleIn}
            className="absolute top-full mt-3 left-0 right-0 bg-surface/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl z-30 overflow-hidden"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {/* Dropdown header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold flex items-center gap-2">
                  <FileDown className="w-4 h-4" />
                  Select Version
                </h4>
                <button
                  onClick={() => setShowOptions(false)}
                  className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-text-muted">Choose the version that fits your needs</p>
            </div>
            
            {/* Version list */}
            <div className="p-2">
              {versions.map((version) => (
                <motion.button
                  key={version.id}
                  onClick={() => {
                    handleDownload(version.id)
                    setShowOptions(false)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-xl mb-2 flex items-center justify-between transition-all ${
                    version.recommended 
                      ? 'bg-primary/10 border border-primary/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      version.recommended 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-white/10 text-text-muted'
                    }`}>
                      {version.recommended ? (
                        <Zap className="w-5 h-5" />
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{version.label}</span>
                        {version.recommended && (
                          <span className="text-xs px-2 py-0.5 bg-primary/30 text-primary rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-muted">{version.size}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-text-muted mb-1">APK</div>
                    <div className="text-sm font-medium">Free</div>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {/* Dropdown footer */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-text-muted">
                  <Shield className="w-4 h-4" />
                  <span>Virus-free guaranteed</span>
                </div>
                <div className="text-xs text-text-muted">
                  Last updated: Today
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            className="absolute -bottom-20 left-0 right-0"
          >
            <div className="inline-flex flex-col items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, ease: "easeInOut" as const }}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <Check className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-left">
                  <div className="font-bold text-green-400">Download Successful!</div>
                  <div className="text-sm text-text-muted">Check your downloads folder</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors">
                  <Smartphone className="w-4 h-4" />
                  Install now
                </button>
                <span className="text-white/30">•</span>
                <button className="text-text-muted hover:text-white transition-colors">
                  Show in folder
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Stats */}
      {!isDownloading && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: "easeOut" as const }}
          className="absolute -bottom-16 left-0 right-0"
        >
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-text-muted">Live download counter</span>
            </div>
            <div className="text-primary font-bold">
              {downloadCount.toLocaleString()}+
            </div>
          </div>
        </motion.div>
      )}

      {/* Tooltip on hover */}
      <div 
        className="absolute -top-12 left-1/2 -translate-x-1/2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <AnimatePresence>
          {showTooltip && !isDownloading && !isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
              className="bg-surface border border-white/10 rounded-lg px-3 py-2 text-sm whitespace-nowrap shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>100% Safe & Verified</span>
              </div>
              <div className="text-xs text-text-muted mt-1">No ads, no viruses, pure app</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative elements */}
      <div className="absolute -inset-4 -z-10">
        {isDownloading && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random(),
                  ease: "easeInOut" as const
                }}
              />
            ))}
          </>
        )}
        
        {isComplete && (
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: [
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 40px rgba(34, 197, 94, 0.3)',
                '0 0 0px rgba(34, 197, 94, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          />
        )}
      </div>
    </div>
  )
}