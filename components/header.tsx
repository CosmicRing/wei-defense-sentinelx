'use client'

import Link from 'next/link'
import {Menu, X} from 'lucide-react'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const navByLang = {
    en: [['Solutions', '#solutions'], ['Products', '#products'], ['Platform', '#platform'], ['SentinelX', '/sentinelx?lang=en']],
    zh: [['解决方案', '#solutions'], ['产品体系', '#products'], ['平台', '#platform'], ['铜雀台', '/sentinelx?lang=zh']],
    ar: [['الحلول', '#solutions'], ['المنتجات', '#products'], ['المنصة', '#platform'], ['SentinelX', '/sentinelx?lang=ar']],
    la: [['Soluciones', '#solutions'], ['Productos', '#products'], ['Plataforma', '#platform'], ['SentinelX', '/sentinelx?lang=la']],
    sl: [['Resenja', '#solutions'], ['Proizvodi', '#products'], ['Platforma', '#platform'], ['SentinelX', '/sentinelx?lang=sl']],
} as const

const languages = [
    ['en', 'EN'],
    ['zh', '中'],
    ['ar', 'AR'],
    ['la', 'LA'],
    ['sl', 'SL'],
]

function WeiLogo() {
    return (
        <span className="inline-flex h-8 skew-x-[-10deg] items-center border border-amber-400/50 px-2 font-black tracking-[-0.08em]">
            <span className="skew-x-[10deg]">W</span>
            <span className="skew-x-[10deg]">E</span>
            <span className="skew-x-[10deg]">I</span>
        </span>
    )
}

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const searchParams = useSearchParams()
    const activeLang = searchParams.get('lang') || 'en'
    const nav = navByLang[activeLang as keyof typeof navByLang] || navByLang.en

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-30 w-full border-b border-white/10 bg-background/55 backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/?lang=en#top" aria-label="WEI DEFENSE home" className="flex items-center gap-3">
                                <WeiLogo/>
                                <span className="grid leading-tight">
                                    <span className="font-mono text-sm font-semibold tracking-[0.18em]">WEI DEFENSE</span>
                                <span className="text-xs text-muted-foreground">{activeLang === 'zh' ? '大魏防务' : 'SentinelX Systems'}</span>
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"/>
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"/>
                            </button>
                        </div>

                        <div
                            className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border border-white/10 p-5 shadow-2xl shadow-black/20 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
                                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                                    {nav.map(([label, href]) => (
                                        <Link key={href} href={href} className="text-sm text-muted-foreground duration-150 hover:text-foreground">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex gap-1 rounded-full border border-white/10 p-1">
                                    {languages.map(([code, label]) => (
                                        <Link
                                            key={code}
                                            href={`/?lang=${code}#top`}
                                            className={`rounded-full px-2.5 py-1 text-xs font-mono duration-150 ${
                                                activeLang === code ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
                                            }`}>
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
