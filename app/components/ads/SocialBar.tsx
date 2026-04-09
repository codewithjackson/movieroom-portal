'use client'

import { useEffect } from 'react'

/**
 * Adsterra Social Bar Component
 * 
 * This component injects the Adsterra Social Bar script after a 4-second delay.
 * The delay ensures that the initial landing page experience remains premium
 * and doesn't immediately distract the user from the main download CTA.
 */
export default function SocialBar() {
  useEffect(() => {
    // 4000ms (4s) delay for a premium user experience
    const loadTimeout = setTimeout(() => {
      try {
        // Create the script element
        const script = document.createElement('script')
        script.src = "https://lasereither.com/77/bd/96/77bd96a0e79598a8cdc30aabb8333ddc.js"
        script.async = true
        
        // Append to body to ensure it doesn't block initial rendering
        document.body.appendChild(script)
      } catch (error) {
        console.error('Failed to load Adsterra Social Bar:', error)
      }
    }, 4000)

    // Cleanup timeout on component unmount
    return () => clearTimeout(loadTimeout)
  }, [])

  return null
}
