import Link from 'next/link'
import React from 'react'

const links = [
    ['Solutions', '#solutions'],
    ['Products', '#products'],
    ['Platform', '#platform'],
    ['Case', '#case'],
    ['Framework', '#framework'],
]

export default function FooterSection() {
    return (
        <footer className="py-14 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <Link href="/?lang=en#top" aria-label="go home" className="mx-auto flex w-fit items-center gap-3">
                    <span className="inline-flex h-8 skew-x-[-10deg] items-center border border-amber-400/50 px-2 font-black tracking-[-0.08em]">
                        <span className="skew-x-[10deg]">W</span>
                        <span className="skew-x-[10deg]">E</span>
                        <span className="skew-x-[10deg]">I</span>
                    </span>
                    <span className="font-mono text-sm tracking-[0.18em]">WEI DEFENSE</span>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map(([title, href]) => (
                        <Link key={href} href={href} className="block text-muted-foreground duration-150 hover:text-primary">
                            {title}
                        </Link>
                    ))}
                </div>
                <span className="block text-center text-sm text-muted-foreground">
                    WEI DEFENSE - Defend today, secure tomorrow.
                </span>
            </div>
        </footer>
    )
}
