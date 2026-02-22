'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbC8vSh2ZjCmnwNbuc0s'
const STORAGE_KEY = 'movieroom_whatsapp_invite_dismissed'

export default function WhatsAppInvite() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user dismissed it recently (within 24 hours)
        const lastDismissed = localStorage.getItem(STORAGE_KEY)
        const now = new Date().getTime()

        if (lastDismissed) {
            const dismissTime = parseInt(lastDismissed)
            const oneDay = 24 * 60 * 60 * 1000
            if (now - dismissTime < oneDay) {
                return
            }
        }

        // Show after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const handleLater = () => {
        setIsVisible(false)
        localStorage.setItem(STORAGE_KEY, new Date().getTime().toString())
    }

    const handleJoin = () => {
        window.open(WHATSAPP_CHANNEL_URL, '_blank')
        setIsVisible(false)
        localStorage.setItem(STORAGE_KEY, new Date().getTime().toString())
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A]/80 p-6 shadow-2xl backdrop-blur-xl group">
                        {/* Background Accent */}
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-500/10 blur-3xl transition-colors group-hover:bg-green-500/20" />

                        <button
                            onClick={handleLater}
                            className="absolute right-4 top-4 rounded-full p-1 text-text-muted transition-colors hover:bg-white/10 hover:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/20">
                                <MessageCircle className="h-6 w-6 text-white" />
                            </div>

                            <div className="space-y-1">
                                <h3 className="font-bold text-white">WhatsApp Support</h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    We have a WhatsApp support channel where we post and discuss about settings, features and also assist our users.
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm font-medium text-white/90">
                            Would you like to join us there?
                        </p>

                        <div className="mt-6 flex items-center justify-end gap-3">
                            <button
                                onClick={handleLater}
                                className="px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-white"
                            >
                                Later
                            </button>
                            <button
                                onClick={handleJoin}
                                className="rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:shadow-green-500/30 active:scale-95"
                            >
                                Yes Please
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
