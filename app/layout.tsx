import React, {Suspense} from "react"
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'
import Dither from "@/components/Dither";
import FooterSection from "@/components/footer";
import {HeroHeader} from "@/components/header";

const _geist = Geist({subsets: ["latin"]});
const _geistMono = Geist_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'WEI DEFENSE | Autonomous Security Systems',
    description: 'Autonomous UAV patrol, layered response, command center, and digital twin simulation for critical infrastructure security.',
    generator: 'Codex',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className="font-sans antialiased">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-dvh w-full max-h-155 sm:max-h-115 md:max-h-125 lg:max-h-190 xl:max-h-195">
            <Dither
                waveColor={[0.45, 0.36, 0.24]}
                disableAnimation={false}
                enableMouseInteraction
                mouseRadius={0.3}
                colorNum={4}
                pixelSize={2}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div>
        <Suspense fallback={null}>
            <HeroHeader/>
        </Suspense>
        <div className="relative z-10">
            {children}
        </div>
        <FooterSection/>
        <Analytics/>
        </body>
        </html>
    )
}
