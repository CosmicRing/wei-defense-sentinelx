import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {TextEffect} from '@/components/motion-primitives/text-effect'
import {AnimatedGroup} from '@/components/motion-primitives/animated-group'
import DecryptedText from '@/components/DecryptedText'
import {transitionVariants} from '@/lib/utils'
import {BrainCircuit, Crosshair, DatabaseZap, RadioTower, Route, ShieldCheck, type LucideIcon} from 'lucide-react'
import GlobalOpsMap from '@/components/global-ops-map'
import MissionStateMachine from '@/components/mission-state-machine'

const languages = {
    en: {
        heroKicker: 'SAUDI REFINERY SECURITY MISSION',
        heroTitleA: 'Autonomous defense',
        heroTitleB: 'for critical infrastructure',
        heroCopy: 'WEI DEFENSE turns patrol UAVs, response nodes, command software, and digital twin simulation into one mission-ready security platform.',
        primary: 'View layered response',
        secondary: 'Explore product lines',
        solutionsTitle: 'Autonomous security for facilities that cannot go dark.',
        productsTitle: 'Six product families from one command architecture.',
        platformTitle: 'Command center, digital twin, and multi-domain operations.',
        caseTitle: 'How the refinery defense chain works.',
        frameworkTitle: 'Dynamic mission framework',
        ctaTitle: 'Build your autonomous security program.',
        ctaCopy: 'From refinery simulation to command-center demonstrations, WEI DEFENSE packages product lines and mission workflows into deployable solution stories.',
        sentinel: 'Open SentinelX system page',
    },
    zh: {
        heroKicker: '沙特炼油厂安防任务',
        heroTitleA: '面向关键基础设施的',
        heroTitleB: '自主防御体系',
        heroCopy: '大魏防务将巡航无人机、处置节点、指挥软件与数字孪生仿真整合为可执行的任务级安防平台。',
        primary: '查看分层响应',
        secondary: '查看产品体系',
        solutionsTitle: '为不能停摆的关键设施提供自主安防。',
        productsTitle: '六大产品家族统一在一套指挥架构下。',
        platformTitle: '指挥中心、数字孪生与多域作战平台。',
        caseTitle: '炼油厂防御链路如何运转。',
        frameworkTitle: '动态任务框架',
        ctaTitle: '构建你的自主安防方案。',
        ctaCopy: '从炼油厂仿真到指挥中心演示，大魏防务可将产品体系与任务流程包装为可展示、可验证、可落地的解决方案。',
        sentinel: '进入 SentinelX（铜雀台）方案页',
    },
    ar: {
        heroKicker: 'مهمة أمن مصفاة سعودية',
        heroTitleA: 'دفاع ذاتي',
        heroTitleB: 'للبنية التحتية الحرجة',
        heroCopy: 'تجمع WEI DEFENSE بين طائرات الدورية، نقاط الاستجابة، برمجيات القيادة، ومحاكاة التوأم الرقمي في منصة أمنية جاهزة للمهمة.',
        primary: 'شاهد الاستجابة الطبقية',
        secondary: 'استكشف المنتجات',
        solutionsTitle: 'أمن ذاتي للمنشآت التي لا يمكن أن تتوقف.',
        productsTitle: 'ست عائلات منتجات ضمن بنية قيادة واحدة.',
        platformTitle: 'مركز قيادة وتوأم رقمي وعمليات متعددة المجالات.',
        caseTitle: 'كيف تعمل سلسلة دفاع المصفاة.',
        frameworkTitle: 'إطار المهمة الديناميكي',
        ctaTitle: 'ابن برنامجك للأمن الذاتي.',
        ctaCopy: 'من محاكاة المصافي إلى عروض مركز القيادة، تحول WEI DEFENSE خطوط المنتجات وسير المهام إلى حلول قابلة للنشر.',
        sentinel: 'افتح صفحة SentinelX',
    },
    la: {
        heroKicker: 'MISION DE SEGURIDAD EN REFINERIA',
        heroTitleA: 'Defensa autonoma',
        heroTitleB: 'para infraestructura critica',
        heroCopy: 'WEI DEFENSE integra UAV de patrulla, nodos de respuesta, software de mando y simulacion de gemelo digital en una plataforma lista para mision.',
        primary: 'Ver respuesta por capas',
        secondary: 'Explorar productos',
        solutionsTitle: 'Seguridad autonoma para instalaciones que no pueden detenerse.',
        productsTitle: 'Seis familias de producto desde una arquitectura de mando.',
        platformTitle: 'Centro de mando, gemelo digital y operaciones multi-dominio.',
        caseTitle: 'Como funciona la cadena defensiva de refineria.',
        frameworkTitle: 'Marco dinamico de mision',
        ctaTitle: 'Construye tu programa de seguridad autonoma.',
        ctaCopy: 'WEI DEFENSE empaqueta productos y flujos de mision como soluciones desplegables.',
        sentinel: 'Abrir pagina SentinelX',
    },
    sl: {
        heroKicker: 'MISIJA BEZBEDNOSTI RAFINERIJE',
        heroTitleA: 'Autonomna odbrana',
        heroTitleB: 'za kriticnu infrastrukturu',
        heroCopy: 'WEI DEFENSE povezuje patrolne UAV, cvorove odgovora, komandni softver i digitalni blizanac u platformu spremnu za misiju.',
        primary: 'Pogledaj slojeviti odgovor',
        secondary: 'Pogledaj proizvode',
        solutionsTitle: 'Autonomna bezbednost za objekte koji ne smeju stati.',
        productsTitle: 'Sest porodica proizvoda u jednoj komandnoj arhitekturi.',
        platformTitle: 'Komandni centar, digitalni blizanac i multi-domain operacije.',
        caseTitle: 'Kako radi odbrambeni lanac rafinerije.',
        frameworkTitle: 'Dinamicki okvir misije',
        ctaTitle: 'Izgradi autonomni sigurnosni program.',
        ctaCopy: 'WEI DEFENSE pakuje proizvode i tok misije u primenljiva resenja.',
        sentinel: 'Otvori SentinelX stranicu',
    },
}

const solutionsByLang = {
    en: [
        ['Oil & Gas', 'Refinery site security', 'Patrol UAVs monitor boundaries, tank farms, pipe racks, and gates, then coordinate alarms and response nodes.'],
        ['Low-altitude security', 'Counter-UAV defense', 'Real-time sensing, target identification, alarm confirmation, and layered response secure low-altitude airspace.'],
        ['Multi-domain', 'Autonomous base defense', 'Air, ground, maritime, command center, and digital twin assets operate as one coordinated defense system.'],
    ],
    zh: [
        ['油气能源', '炼油厂场站安防', '巡航无人机监控边界、储油罐区、管廊和门岗，并联动告警与处置节点。'],
        ['低空安全', '反无人机防御', '实时感知、目标识别、告警确认与分层响应共同守护低空区域。'],
        ['多域防御', '自主基地防御', '空中、地面、海上、指挥中心与数字孪生资产统一协同。'],
    ],
    ar: [
        ['النفط والغاز', 'أمن مواقع المصافي', 'تراقب الطائرات الحدود والخزانات والممرات والبوابات ثم تنسق الإنذار والاستجابة.'],
        ['الأمن الجوي المنخفض', 'دفاع ضد الطائرات غير المصرح بها', 'استشعار فوري وتعريف هدف وتأكيد إنذار واستجابة طبقية.'],
        ['متعدد المجالات', 'دفاع ذاتي للمنشآت', 'تعمل أصول الجو والأرض والبحر ومركز القيادة والتوأم الرقمي كنظام واحد.'],
    ],
    la: [
        ['Petroleo y gas', 'Seguridad de refinerias', 'UAV de patrulla vigilan perimetros, tanques, tuberias y accesos.'],
        ['Baja altitud', 'Defensa counter-UAV', 'Sensado en tiempo real, identificacion, alarma y respuesta por capas.'],
        ['Multi-dominio', 'Defensa autonoma de base', 'Aire, tierra, mar, mando y gemelo digital operan como sistema unico.'],
    ],
    sl: [
        ['Nafta i gas', 'Bezbednost rafinerije', 'Patrolni UAV nadziru perimetar, rezervoare, cevovode i kapije.'],
        ['Niska visina', 'Counter-UAV odbrana', 'Senzori, identifikacija, alarm i slojeviti odgovor.'],
        ['Vise domena', 'Autonomna odbrana baze', 'Vazduh, zemlja, more, komanda i digitalni blizanac rade kao sistem.'],
    ],
} as const

const productsByLang = {
    en: [['HU Series', 'Heavy patrol UAV'], ['XQ Series', 'High-speed reconnaissance UAV'], ['YL Series', 'High-value target defense'], ['Dock System', 'Automated UAV station'], ['XJ Series', 'Counter-UAV module'], ['SentinelX OS', 'Command operating system']],
    zh: [['虎豹系列', '重型巡防无人机'], ['骁骑系列', '高速侦察无人机'], ['羽林系列', '高价值目标防护系统'], ['中垒系统', '无人机巢与自动化机场'], ['陷阵系列', '反无人机防御模块'], ['铜雀台系统', '智能指挥作战系统']],
    ar: [['HU Series', 'طائرة دورية ثقيلة'], ['XQ Series', 'طائرة استطلاع عالية السرعة'], ['YL Series', 'حماية أهداف عالية القيمة'], ['Dock System', 'محطة طائرات ذاتية'], ['XJ Series', 'وحدة دفاع ضد الطائرات'], ['SentinelX OS', 'نظام قيادة ذكي']],
    la: [['HU Series', 'UAV de patrulla pesada'], ['XQ Series', 'UAV de reconocimiento rapido'], ['YL Series', 'Defensa de objetivos criticos'], ['Dock System', 'Estacion UAV automatizada'], ['XJ Series', 'Modulo counter-UAV'], ['SentinelX OS', 'Sistema operativo de mando']],
    sl: [['HU Series', 'Teski patrolni UAV'], ['XQ Series', 'Brzi izvidjacki UAV'], ['YL Series', 'Zastita kriticnih ciljeva'], ['Dock System', 'Automatska UAV stanica'], ['XJ Series', 'Counter-UAV modul'], ['SentinelX OS', 'Komandni operativni sistem']],
} as const

const productImagePositions = ['18% 38%', '66% 35%', '20% 72%', '52% 70%', '82% 70%', '88% 48%']

const capabilities: Array<[string, LucideIcon]> = [
    ['AI autonomous decision', BrainCircuit],
    ['Multi-domain data fusion', DatabaseZap],
    ['Swarm cooperation', RadioTower],
    ['Precision response', Crosshair],
    ['All-weather sensing', ShieldCheck],
    ['Mission route control', Route],
]

const capabilitiesByLang = {
    en: ['AI autonomous decision', 'Multi-domain data fusion', 'Swarm cooperation', 'Precision response', 'All-weather sensing', 'Mission route control'],
    zh: ['AI 自主决策', '多域数据融合', '集群协同', '精准响应', '全天候感知', '任务路线控制'],
    ar: ['قرار ذاتي بالذكاء الاصطناعي', 'دمج بيانات متعدد المجالات', 'تعاون السرب', 'استجابة دقيقة', 'استشعار كل الظروف', 'تحكم مسار المهمة'],
    la: ['Decision autonoma IA', 'Fusion de datos multi-dominio', 'Cooperacion de enjambre', 'Respuesta precisa', 'Sensado todo clima', 'Control de ruta'],
    sl: ['AI autonomna odluka', 'Fuzija podataka', 'Saradnja roja', 'Precizan odgovor', 'Senzori u svim uslovima', 'Kontrola rute'],
} as const

const states = [
    ['01', 'Standby', 'Self-check and standby'],
    ['02', 'Patrol & Monitor', 'Boundary and asset surveillance'],
    ['03', 'Detection & Alarm', 'Track, identify, and report'],
    ['04', 'Task Assignment', 'Activate nearest response node'],
    ['05', 'Engage', 'Warning and interception'],
    ['06', 'Assessment', 'Evaluate effect and threat state'],
    ['07', 'RTB / Recovery', 'Return, land, recharge, archive'],
]

type SearchParams = Promise<{ lang?: string }>

export default async function Home({searchParams}: { searchParams?: SearchParams }) {
    const params = await searchParams
    const lang = (params?.lang && params.lang in languages ? params.lang : 'en') as keyof typeof languages
    const t = languages[lang]
    const products = productsByLang[lang]
    const solutions = solutionsByLang[lang]
    const capabilityLabels = capabilitiesByLang[lang]
    const brandLabel = lang === 'zh' ? '大魏防务' : 'WEI DEFENSE'

    return (
        <main id="top" dir={lang === 'ar' ? 'rtl' : 'ltr'} className="overflow-x-hidden">
            <section className="relative min-h-screen overflow-hidden pt-28">
                <div className="absolute inset-0 -z-10">
                    <GlobalOpsMap/>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9),rgba(0,0,0,.48),rgba(0,0,0,.12)),linear-gradient(0deg,var(--background),transparent_48%)]"/>
                </div>
                <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_.84fr]">
                    <div className="max-w-3xl">
                        <DecryptedText
                            text={t.heroKicker}
                            animateOn="view"
                            sequential
                            speed={48}
                            className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300"
                        />
                        <h1 className="mt-5 text-balance text-5xl font-semibold leading-none md:text-7xl xl:text-8xl">
                            {t.heroTitleA}
                        </h1>
                        <h1 className="text-balance text-5xl font-semibold leading-none text-muted-foreground md:text-7xl xl:text-8xl">
                            {t.heroTitleB}
                        </h1>
                        <TextEffect per="line" preset="fade-in-blur" delay={0.45} speedSegment={0.3} as="p" className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                            {t.heroCopy}
                        </TextEffect>
                        <AnimatedGroup variants={{container: {visible: {transition: {staggerChildren: 0.05, delayChildren: 0.75}}}, ...transitionVariants}} className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg"><Link href="#case">{t.primary}</Link></Button>
                            <Button asChild size="lg" variant="outline" className="bg-background/20 backdrop-blur"><Link href="#products">{t.secondary}</Link></Button>
                            <Button asChild size="lg" variant="ghost" className="bg-background/20 backdrop-blur"><Link href={`/sentinelx?lang=${lang}`}>{t.sentinel}</Link></Button>
                        </AnimatedGroup>
                    </div>
                    <AnimatedGroup variants={{container: {visible: {transition: {staggerChildren: 0.05, delayChildren: 0.65}}}, ...transitionVariants}} className="grid gap-3">
                        {['Autonomous', 'Multi-domain', 'Real-time sensing', 'Layered response'].map((item) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-background/40 p-4 font-mono text-sm backdrop-blur">
                                {item}
                            </div>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            <section id="solutions" className="py-20 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle kicker="Solutions" title={t.solutionsTitle}/>
                    <AnimatedGroup triggerOnView variants={{container: {visible: {transition: {staggerChildren: 0.05, delayChildren: 0.2}}}, ...transitionVariants}} className="mt-10 grid gap-4 md:grid-cols-3">
                        {solutions.map(([tag, title, copy]) => (
                            <Card key={title} className="min-h-72 border-white/10 bg-card/60">
                                <CardHeader>
                                    <p className="font-mono text-xs uppercase text-amber-300">{tag}</p>
                                    <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                                </CardHeader>
                                <CardContent><p className="text-sm leading-6 text-muted-foreground">{copy}</p></CardContent>
                            </Card>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            <section id="products" className="py-20 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle kicker="Product Lines" title={t.productsTitle}/>
                    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                        <Image src="/generated/autonomous-product-family.png" alt="WEI DEFENSE autonomous product family" width={1774} height={887} className="w-full object-cover"/>
                    </div>
                    <AnimatedGroup triggerOnView variants={{container: {visible: {transition: {staggerChildren: 0.035, delayChildren: 0.2}}}, ...transitionVariants}} className="mt-4 grid gap-3 md:grid-cols-3">
                        {products.map(([title, copy], index) => (
                            <div key={title} className="rounded-xl border border-white/10 bg-card/60 p-5">
                                <div className="mb-5 h-36 overflow-hidden rounded-lg border border-white/10 bg-black">
                                    <Image src="/generated/autonomous-product-family.png" alt="" width={900} height={450} className="h-full w-full object-cover" style={{objectPosition: productImagePositions[index]}}/>
                                </div>
                                <p className="font-mono text-xs text-amber-300">{brandLabel}</p>
                                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                            </div>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            <section id="platform" className="py-20 md:py-32">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.15fr_.85fr]">
                    <div className="overflow-hidden rounded-3xl border border-white/10">
                        <Image src="/generated/command-center-clean.png" alt="Command center digital twin" width={1817} height={778} className="w-full object-cover"/>
                    </div>
                    <div>
                        <SectionTitle kicker="Operational Platform" title={t.platformTitle}/>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {capabilities.map(([, Icon], index) => (
                                <div key={capabilityLabels[index]} className="flex items-center gap-3 rounded-xl border border-white/10 bg-card/60 p-4">
                                    <Icon className="size-5 text-amber-300"/>
                                    <span className="text-sm">{capabilityLabels[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="case" className="py-20 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle kicker="Case Solution" title={t.caseTitle}/>
                    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                        <Image src="/generated/layered-response-overview.png" alt="Refinery target tracking and layered response chain" width={1672} height={941} className="w-full object-cover"/>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {['Patrol drone detects intrusion', 'Command center authorizes escalation', 'Response nodes converge by layer'].map((item, index) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-card/60 p-5">
                                <p className="font-mono text-xs text-amber-300">0{index + 1}</p>
                                <h3 className="mt-3 text-lg font-semibold">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="framework" className="py-20 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <MissionStateMachine lang={lang}/>
                </div>
            </section>

            <section className="mx-2 py-16">
                <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 px-6 py-12 text-center md:py-20 lg:py-28">
                    <TextEffect triggerOnView preset="fade-in-blur" speedSegment={0.3} as="h2" className="text-balance text-4xl font-semibold lg:text-5xl">
                        {t.ctaTitle}
                    </TextEffect>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.ctaCopy}</p>
                    <div className="mt-10 flex justify-center">
                        <Button asChild size="lg"><Link href="mailto:solutions@weidefense.example">solutions@weidefense.example</Link></Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

function SectionTitle({kicker, title}: { kicker: string; title: string }) {
    return (
        <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300">{kicker}</p>
            <TextEffect triggerOnView preset="fade-in-blur" speedSegment={0.3} as="h2" className="mt-3 text-balance text-3xl font-semibold md:text-5xl">
                {title}
            </TextEffect>
        </div>
    )
}
