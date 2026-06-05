export default function GlobalOpsMap() {
    const nodes = [
        [705, 345, 'Middle East'],
        [625, 275, 'Europe'],
        [815, 315, 'Asia'],
        [560, 430, 'Africa'],
        [305, 330, 'North America'],
        [380, 520, 'South America'],
        [945, 530, 'Oceania'],
    ] as const

    const arcs = [
        'M705 345 C650 275 610 265 625 275',
        'M705 345 C790 280 835 292 815 315',
        'M705 345 C610 380 575 410 560 430',
        'M705 345 C560 240 390 245 305 330',
        'M705 345 C595 520 475 560 380 520',
        'M705 345 C800 465 900 475 945 530',
    ]

    return (
        <div className="absolute inset-0 overflow-hidden">
            <svg className="h-full w-full" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                    <radialGradient id="mapGlow" cx="58%" cy="48%" r="56%">
                        <stop offset="0%" stopColor="#1d6fff" stopOpacity="0.22"/>
                        <stop offset="48%" stopColor="#c79a64" stopOpacity="0.09"/>
                        <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
                    </radialGradient>
                    <filter id="softGlow">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge>
                            <feMergeNode in="blur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <rect width="1200" height="720" fill="#050607"/>
                <rect width="1200" height="720" fill="url(#mapGlow)"/>

                <g opacity="0.18" stroke="#7aa7ff" strokeWidth="1">
                    {Array.from({length: 13}).map((_, i) => <path key={`lat-${i}`} d={`M40 ${120 + i * 42} H1160`}/>)}
                    {Array.from({length: 17}).map((_, i) => <path key={`lon-${i}`} d={`M${90 + i * 70} 60 V670`}/>)}
                </g>

                <g fill="#142129" opacity="0.82">
                    <path d="M128 245 C178 188 260 172 336 195 C394 212 405 250 375 291 C342 336 270 325 225 357 C170 395 105 354 93 305 C87 281 101 257 128 245Z"/>
                    <path d="M309 430 C360 390 420 410 435 462 C449 510 420 574 366 590 C318 604 292 558 300 516 C306 484 282 455 309 430Z"/>
                    <path d="M506 210 C560 175 646 174 708 206 C735 220 730 253 690 270 C640 292 589 277 545 300 C504 322 468 298 470 260 C471 240 486 222 506 210Z"/>
                    <path d="M572 331 C635 294 718 322 746 390 C780 474 707 559 621 535 C558 517 523 458 536 397 C542 365 553 344 572 331Z"/>
                    <path d="M739 236 C834 179 986 194 1052 270 C1105 332 1035 401 940 382 C884 371 845 407 785 380 C720 350 698 274 739 236Z"/>
                    <path d="M919 487 C969 466 1032 482 1058 529 C1082 572 1040 615 984 604 C930 594 890 554 897 520 C900 503 906 493 919 487Z"/>
                </g>

                <g fill="none" stroke="#c79a64" strokeWidth="2" strokeLinecap="round" filter="url(#softGlow)">
                    {arcs.map((d, i) => (
                        <path key={d} d={d} className="global-arc" style={{animationDelay: `${i * 0.35}s`}}/>
                    ))}
                </g>

                <g>
                    {nodes.map(([x, y, label], i) => (
                        <g key={label} transform={`translate(${x} ${y})`} className="global-node" style={{animationDelay: `${i * 0.25}s`}}>
                            <circle r="17" fill="#1d6fff" opacity="0.1"/>
                            <circle r="7" fill="#c79a64"/>
                            <circle r="3" fill="#fff3d7"/>
                        </g>
                    ))}
                </g>
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,transparent,rgba(0,0,0,.38)_44%,rgba(0,0,0,.88)_100%)]"/>
        </div>
    )
}
