'use client'

import {useEffect, useRef} from 'react'

type Step = {
    id: string
    title: string
    sub: string
    tone: 'blue' | 'amber' | 'red' | 'green' | 'gray'
    x: number
    y: number
    w: number
    h: number
}

type Module = {
    title: string
    x: number
    y: number
    w: number
    h: number
}

const toneClass = {
    blue: 'border-cyan-400/70 bg-cyan-950/40 shadow-[0_0_24px_rgba(34,211,238,.22)]',
    amber: 'border-amber-400/70 bg-amber-950/35 shadow-[0_0_24px_rgba(251,191,36,.2)]',
    red: 'border-red-400/70 bg-red-950/35 shadow-[0_0_24px_rgba(248,113,113,.2)]',
    green: 'border-green-400/70 bg-green-950/35 shadow-[0_0_24px_rgba(74,222,128,.18)]',
    gray: 'border-zinc-400/60 bg-zinc-900/60',
}

const copy = {
    en: {
        title: 'Drone Security Mission State Machine',
        subtitle: 'State transitions, external modules, escalation loops, and reset path',
        legend: [['Blue', 'Patrol / Surveillance'], ['Amber', 'Command / Assessment'], ['Red', 'Layered response'], ['Green', 'Completion / Reset']],
        start: 'Start',
        modules: [
            ['System Initialization & Self-check', 6, 17, 18, 12],
            ['External Input: Radar / Sensor / Manual Report', 6, 37, 18, 12],
            ['Alarm Notification: Ground Station / Operator / Platform', 72, 35, 20, 12],
            ['Resource Management: UAV Pool / Status / Payload', 72, 52, 20, 12],
            ['Activate More Interceptors', 7, 73, 19, 10],
        ] as Array<[string, number, number, number, number]>,
        steps: [
            ['1', 'Standby', 'Idle / Monitoring', 'gray', 38, 15, 24, 11],
            ['2', 'Patrol & Monitor', 'Surveillance', 'blue', 38, 32, 24, 11],
            ['3', 'Detection & Alarm', 'Track / Identify / Alert', 'blue', 38, 49, 24, 11],
            ['4', 'Task Assignment', 'Activate Interceptors', 'amber', 38, 64, 24, 11],
            ['5', 'Engage', 'Warning / Intercept', 'red', 39, 78, 22, 10],
            ['6', 'Assessment', 'Effect Assessment', 'amber', 38, 91, 24, 10],
            ['7', 'RTB / Recovery', 'Return / Land / Recharge', 'green', 76, 91, 22, 10],
        ] as Array<[string, string, string, Step['tone'], number, number, number, number]>,
        labels: ['Start patrol mission', 'Abnormality detected', 'Threat confirmed', 'Target neutralized', 'No threat remaining', 'Mission complete / reset'],
    },
    zh: {
        title: '无人机安防任务状态机',
        subtitle: '状态流转、外部模块、升级闭环与任务复位路径',
        legend: [['蓝色', '巡航 / 监视'], ['琥珀', '指挥 / 评估'], ['红色', '分层处置'], ['绿色', '完成 / 复位']],
        start: '开始',
        modules: [
            ['系统初始化与自检', 6, 17, 18, 12],
            ['外部输入：雷达 / 传感器 / 人工上报', 6, 37, 18, 12],
            ['告警通知：地面站 / 操作员 / 平台', 72, 35, 20, 12],
            ['资源管理：无人机池 / 状态 / 载荷', 72, 52, 20, 12],
            ['激活更多处置无人机', 7, 73, 19, 10],
        ] as Array<[string, number, number, number, number]>,
        steps: [
            ['1', '待命', '空闲 / 监控', 'gray', 38, 15, 24, 11],
            ['2', '巡航监控', '边界与重点区域巡查', 'blue', 38, 32, 24, 11],
            ['3', '发现与告警', '跟踪 / 识别 / 上报', 'blue', 38, 49, 24, 11],
            ['4', '任务分配', '选择并激活处置节点', 'amber', 38, 64, 24, 11],
            ['5', '处置执行', '警告 / 拦截', 'red', 39, 78, 22, 10],
            ['6', '效果评估', '威胁是否解除', 'amber', 38, 91, 24, 10],
            ['7', '返航恢复', '返航 / 降落 / 充电', 'green', 76, 91, 22, 10],
        ] as Array<[string, string, string, Step['tone'], number, number, number, number]>,
        labels: ['启动巡航任务', '发现异常', '威胁确认', '目标解除', '无剩余威胁', '任务完成 / 系统复位'],
    },
    ar: {
        title: 'آلة حالة مهمة أمن الطائرات',
        subtitle: 'انتقالات الحالة، الوحدات الخارجية، حلقات التصعيد، ومسار إعادة الضبط',
        legend: [['أزرق', 'دورية / مراقبة'], ['كهرماني', 'قيادة / تقييم'], ['أحمر', 'استجابة طبقية'], ['أخضر', 'إكمال / إعادة ضبط']],
        start: 'بدء',
        modules: [
            ['تهيئة النظام والفحص الذاتي', 6, 17, 18, 12],
            ['مدخل خارجي: رادار / مستشعر / تقرير يدوي', 6, 37, 18, 12],
            ['إشعار إنذار: محطة أرضية / مشغل / منصة', 72, 35, 20, 12],
            ['إدارة الموارد: أسطول / حالة / حمولة', 72, 52, 20, 12],
            ['تفعيل معترضات إضافية', 7, 73, 19, 10],
        ] as Array<[string, number, number, number, number]>,
        steps: [
            ['1', 'استعداد', 'خمول / مراقبة', 'gray', 38, 15, 24, 11],
            ['2', 'دورية ومراقبة', 'مراقبة الموقع', 'blue', 38, 32, 24, 11],
            ['3', 'كشف وإنذار', 'تتبع / تعريف / تنبيه', 'blue', 38, 49, 24, 11],
            ['4', 'تخصيص المهمة', 'تفعيل المعترضات', 'amber', 38, 64, 24, 11],
            ['5', 'اشتباك', 'تحذير / اعتراض', 'red', 39, 78, 22, 10],
            ['6', 'تقييم الأثر', 'تأكيد حالة التهديد', 'amber', 38, 91, 24, 10],
            ['7', 'عودة وتعاف', 'عودة / هبوط / شحن', 'green', 76, 91, 22, 10],
        ] as Array<[string, string, string, Step['tone'], number, number, number, number]>,
        labels: ['بدء الدورية', 'رصد خلل', 'تأكيد التهديد', 'تحييد الهدف', 'لا تهديد متبق', 'اكتملت المهمة / إعادة ضبط'],
    },
    la: {
        title: 'Maquina de estados de seguridad UAV',
        subtitle: 'Transiciones, modulos externos, escalamiento y ruta de reinicio',
        legend: [['Azul', 'Patrulla / Vigilancia'], ['Ambar', 'Mando / Evaluacion'], ['Rojo', 'Respuesta por capas'], ['Verde', 'Cierre / Reinicio']],
        start: 'Inicio',
        modules: [
            ['Inicializacion del sistema y autodiagnostico', 6, 17, 18, 12],
            ['Entrada externa: radar / sensor / reporte manual', 6, 37, 18, 12],
            ['Notificacion de alarma: estacion / operador / plataforma', 72, 35, 20, 12],
            ['Gestion de recursos: flota UAV / estado / carga', 72, 52, 20, 12],
            ['Activar mas interceptores', 7, 73, 19, 10],
        ] as Array<[string, number, number, number, number]>,
        steps: [
            ['1', 'Espera', 'Inactivo / Monitoreo', 'gray', 38, 15, 24, 11],
            ['2', 'Patrulla y monitor', 'Vigilancia', 'blue', 38, 32, 24, 11],
            ['3', 'Deteccion y alarma', 'Rastrear / Identificar / Alertar', 'blue', 38, 49, 24, 11],
            ['4', 'Asignacion', 'Activar interceptores', 'amber', 38, 64, 24, 11],
            ['5', 'Intervencion', 'Advertir / Interceptar', 'red', 39, 78, 22, 10],
            ['6', 'Evaluacion', 'Confirmar efecto', 'amber', 38, 91, 24, 10],
            ['7', 'Retorno', 'Volver / Aterrizar / Recargar', 'green', 76, 91, 22, 10],
        ] as Array<[string, string, string, Step['tone'], number, number, number, number]>,
        labels: ['Iniciar patrulla', 'Anomalia detectada', 'Amenaza confirmada', 'Objetivo neutralizado', 'Sin amenaza restante', 'Mision completa / reinicio'],
    },
    sl: {
        title: 'Masina stanja za UAV bezbednost',
        subtitle: 'Prelazi stanja, spoljni moduli, eskalacija i reset misije',
        legend: [['Plavo', 'Patrola / Nadzor'], ['Zuto', 'Komanda / Procena'], ['Crveno', 'Slojeviti odgovor'], ['Zeleno', 'Zavrsetak / Reset']],
        start: 'Start',
        modules: [
            ['Inicijalizacija sistema i samoprovera', 6, 17, 18, 12],
            ['Spoljni ulaz: radar / senzor / rucni izvestaj', 6, 37, 18, 12],
            ['Alarm: zemaljska stanica / operater / platforma', 72, 35, 20, 12],
            ['Upravljanje resursima: UAV fond / status / teret', 72, 52, 20, 12],
            ['Aktiviraj dodatne presretace', 7, 73, 19, 10],
        ] as Array<[string, number, number, number, number]>,
        steps: [
            ['1', 'Pripravnost', 'Mirovanje / Nadzor', 'gray', 38, 15, 24, 11],
            ['2', 'Patrola i nadzor', 'Nadzor objekta', 'blue', 38, 32, 24, 11],
            ['3', 'Detekcija i alarm', 'Prati / Prepoznaj / Javi', 'blue', 38, 49, 24, 11],
            ['4', 'Dodela zadatka', 'Aktiviraj presretace', 'amber', 38, 64, 24, 11],
            ['5', 'Odgovor', 'Upozorenje / Presretanje', 'red', 39, 78, 22, 10],
            ['6', 'Procena', 'Procena efekta', 'amber', 38, 91, 24, 10],
            ['7', 'Povratak', 'Povratak / Sletanje / Punjenje', 'green', 76, 91, 22, 10],
        ] as Array<[string, string, string, Step['tone'], number, number, number, number]>,
        labels: ['Pokreni patrolu', 'Anomalija detektovana', 'Pretnja potvrdjena', 'Cilj neutralisan', 'Nema preostale pretnje', 'Misija zavrsena / reset'],
    },
} as const

function getCopy(lang: string) {
    return lang in copy ? copy[lang as keyof typeof copy] : copy.en
}

type GsapTween = {
    kill: () => void
}

type GsapTimeline = GsapTween & {
    to: (targets: unknown, vars: unknown, position?: unknown) => GsapTimeline
    play: (position?: unknown) => GsapTimeline
}

type GsapApi = {
    timeline: (options?: unknown) => GsapTimeline
    set: (targets: unknown, vars: unknown) => void
    to: (targets: unknown, vars: unknown) => GsapTween
    ticker?: {
        wake: () => void
    }
}

export default function MissionStateMachine({lang}: { lang: string }) {
    const data = getCopy(lang)
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let killed = false
        let timeline: GsapTimeline | undefined
        let pulse: GsapTween | undefined
        let revealFallback: number | undefined

        async function animate() {
            if (!rootRef.current) return

            const module = await import('../vendor/gsap.min.js')
            const gsap = ((module as { gsap?: GsapApi; default?: GsapApi }).gsap || (module as { default?: GsapApi }).default) as GsapApi | undefined
            if (killed || !gsap || !rootRef.current) return

            const root = rootRef.current
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            gsap.set(root.querySelectorAll('.gsm-node, .gsm-module, .gsm-label'), {autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16})
            gsap.set(root.querySelectorAll('.gsm-path'), {strokeDasharray: 1, strokeDashoffset: reduceMotion ? 0 : 1})

            if (reduceMotion) return

            revealFallback = window.setTimeout(() => {
                if (!rootRef.current) return
                gsap.set(rootRef.current.querySelectorAll('.gsm-node, .gsm-module, .gsm-label'), {autoAlpha: 1, y: 0})
                gsap.set(rootRef.current.querySelectorAll('.gsm-path'), {strokeDashoffset: 0})
            }, 2200)

            timeline = gsap.timeline({defaults: {duration: 0.55, ease: 'power3.out'}})
            timeline.to(root.querySelectorAll('.gsm-node'), {autoAlpha: 1, y: 0, stagger: 0.08})
                .to(root.querySelectorAll('.gsm-module'), {autoAlpha: 1, y: 0, stagger: 0.05}, '<0.15')
                .to(root.querySelectorAll('.gsm-path'), {strokeDashoffset: 0, duration: 1.0, stagger: 0.05, ease: 'power2.inOut'}, '<0.15')
                .to(root.querySelectorAll('.gsm-label'), {autoAlpha: 1, y: 0, stagger: 0.06}, '<0.25')
            gsap.ticker?.wake()
            timeline.play(0)

            pulse = gsap.to(root.querySelectorAll('.gsm-pulse'), {
                scale: 1.035,
                repeat: -1,
                yoyo: true,
                duration: 1.4,
                ease: 'sine.inOut',
                stagger: {each: 0.18, from: 'start'},
            })
        }

        animate()

        return () => {
            killed = true
            if (revealFallback) window.clearTimeout(revealFallback)
            timeline?.kill()
            pulse?.kill()
        }
    }, [lang])

    const steps = data.steps.map(([id, title, sub, tone, x, y, w, h]) => ({id, title, sub, tone, x, y, w, h}))
    const modules = data.modules.map(([title, x, y, w, h]) => ({title, x, y, w, h}))

    return (
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/20 bg-[#10140d] p-4 shadow-2xl shadow-black/30 md:p-6">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_10%,#6b7b3b_0_12%,transparent_13%),radial-gradient(circle_at_80%_30%,#29351e_0_16%,transparent_17%),radial-gradient(circle_at_40%_70%,#55623a_0_12%,transparent_13%)]"/>
            <div className="relative mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">{lang === 'zh' ? 'SentinelX / 铜雀台' : 'SentinelX'}</p>
                    <h2 className="mt-2 text-2xl font-semibold md:text-4xl">{data.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{data.subtitle}</p>
                </div>
                <div className="grid gap-1 text-xs md:grid-cols-2">
                    {data.legend.map(([name, text]) => (
                        <div key={name} className="rounded border border-white/10 bg-black/20 px-2 py-1">
                            <span className="font-mono text-lime-300">{name}</span> <span className="text-muted-foreground">{text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div ref={rootRef} className="relative overflow-x-auto rounded-2xl border border-white/10 bg-black/25">
                <div className="relative aspect-[16/10] min-h-[620px] min-w-[1040px]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 106" preserveAspectRatio="none" aria-hidden="true">
                    {[
                        'M50 7 V15',
                        'M50 26 V32',
                        'M50 43 V49',
                        'M50 60 V64',
                        'M50 75 V78',
                        'M50 88 V91',
                        'M62 96 H76',
                        'M87 91 V24 H62',
                        'M24 23 H38',
                        'M24 43 H38',
                        'M24 43 V54 H38',
                        'M62 54 H72',
                        'M62 69 H72',
                        'M39 83 H26 V78',
                        'M26 78 V96 H38',
                    ].map((d) => (
                        <path key={d} className="gsm-path" d={d} pathLength="1" fill="none" stroke="rgba(206,234,139,.72)" strokeWidth="0.32" strokeLinecap="round" strokeLinejoin="round"/>
                    ))}
                </svg>

                <div className="gsm-node absolute left-1/2 top-[4%] -translate-x-1/2 rounded-lg border border-white/70 bg-white px-5 py-2 font-semibold text-black">{data.start}</div>

                {steps.map((step) => (
                    <div key={step.id} className={`gsm-node gsm-pulse absolute rounded-xl border p-3 ${toneClass[step.tone]}`} style={{left: `${step.x}%`, top: `${step.y}%`, width: `${step.w}%`, minHeight: `${step.h}%`, transform: 'translate(-50%, -50%)'}}>
                        <div className="flex items-start gap-3">
                            <span className="grid size-7 shrink-0 place-items-center rounded border border-white/30 bg-black/40 font-mono text-xs text-lime-200">{step.id}</span>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wide">{step.title}</h3>
                                <p className="mt-1 text-xs leading-5 text-muted-foreground">{step.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {modules.map((module) => (
                    <div key={module.title} className="gsm-module absolute rounded-xl border border-dashed border-lime-300/55 bg-black/35 p-3 text-center text-xs leading-5 text-muted-foreground" style={{left: `${module.x}%`, top: `${module.y}%`, width: `${module.w}%`, minHeight: `${module.h}%`, transform: 'translate(-50%, -50%)'}}>
                        {module.title}
                    </div>
                ))}

                {data.labels.map((label, index) => (
                    <span key={label} className="gsm-label absolute rounded bg-black/50 px-2 py-1 text-[11px] text-lime-200" style={{
                        left: ['53%', '54%', '53%', '54%', '66%', '72%'][index],
                        top: ['29%', '46%', '62%', '84%', '93%', '18%'][index],
                    }}>{label}</span>
                ))}
                </div>
            </div>
        </div>
    )
}
