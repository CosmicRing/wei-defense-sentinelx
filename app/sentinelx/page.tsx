import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {TextEffect} from '@/components/motion-primitives/text-effect'
import {AnimatedGroup} from '@/components/motion-primitives/animated-group'
import {transitionVariants} from '@/lib/utils'
import {AlertTriangle, ClipboardCheck, Eye, Megaphone, Radar, RotateCcw, ShieldCheck, Waypoints} from 'lucide-react'

const copy = {
    en: {
        name: 'SentinelX',
        alias: 'Tongque Platform',
        title: 'SentinelX mission workflow for refinery drone security.',
        intro: 'SentinelX converts refinery security into an auditable state machine: detect early, warn first, respond in layers, assess effect, and reset for the next mission cycle.',
        back: 'Back to main site',
    },
    zh: {
        name: 'SentinelX',
        alias: '铜雀台',
        title: 'SentinelX（铜雀台）炼油厂无人机安防任务流程。',
        intro: '铜雀台把炼油厂安防抽象为可审计的任务状态机：提前发现、先行警告、分层处置、效果评估，并在任务完成后复位进入下一轮。', 
        back: '返回官网首页',
    },
    ar: {
        name: 'SentinelX',
        alias: 'منصة Tongque',
        title: 'سير مهمة SentinelX لأمن طائرات المصفاة.',
        intro: 'يحول SentinelX أمن المصفاة إلى آلة حالات قابلة للتدقيق: كشف مبكر، تحذير أولا، استجابة طبقية، تقييم الأثر، ثم إعادة ضبط.',
        back: 'العودة إلى الموقع',
    },
    la: {
        name: 'SentinelX',
        alias: 'Plataforma Tongque',
        title: 'Flujo SentinelX para seguridad UAV en refinerias.',
        intro: 'SentinelX convierte la seguridad de refineria en una maquina de estados auditable: detectar temprano, advertir primero, responder por capas, evaluar y reiniciar.',
        back: 'Volver al sitio',
    },
    sl: {
        name: 'SentinelX',
        alias: 'Tongque platforma',
        title: 'SentinelX tok misije za UAV bezbednost rafinerije.',
        intro: 'SentinelX pretvara bezbednost rafinerije u proverljivu masinu stanja: rano otkrivanje, prvo upozorenje, slojeviti odgovor, procena efekta i reset.',
        back: 'Nazad na sajt',
    },
}

const phaseIcons = [Radar, Eye, Waypoints, AlertTriangle, Radar, ClipboardCheck, Eye, Megaphone, ShieldCheck, ClipboardCheck, ShieldCheck, ShieldCheck, ShieldCheck, ClipboardCheck, RotateCcw] as const

const phaseCopy = {
    en: [
    ['01', 'Standby / Node Sleep', 'Distributed nodes remain ready while system health and mission parameters are checked.', Radar],
    ['02', 'Patrol / Early Warning', 'Patrol UAV follows perimeter routes and watches high-risk refinery assets.', Eye],
    ['03', 'Surveillance / Recon', 'Key areas receive focused reconnaissance when a patrol route reaches a sensitive zone.', Waypoints],
    ['04', 'Anomaly Detected', 'Suspicious movement, vehicle approach, heat source, or fence breach triggers an anomaly state.', AlertTriangle],
    ['05', 'Target Recognition', 'Sensor confidence is validated before the system escalates from observation to report.', Radar],
    ['06', 'Alert Reported', 'The command center receives target location, image, time, confidence, threat level, and UAV state.', ClipboardCheck],
    ['07', 'Target Tracking', 'Patrol UAV keeps the target locked while maintaining safe distance and continuous telemetry.', Eye],
    ['08', 'Warning & Deterrence', 'Audio, light, or platform warning is issued first before any response layer is activated.', Megaphone],
    ['09', 'Layer 1 Response', 'Nearest response node performs close warning, interception posture, and route blocking.', ShieldCheck],
    ['10', 'Effect Assessment', 'SentinelX checks whether the warning or response was effective before escalating.', ClipboardCheck],
    ['11', 'Layer 2 Escalation', 'Additional UAVs activate if the target remains active or approaches a protected zone.', ShieldCheck],
    ['12', 'Layer 3 Escalation', 'Reserve nodes converge for full suppression in the simulation workflow.', ShieldCheck],
    ['13', 'Threat Neutralized', 'Target withdraws or threat state is removed from the active queue.', ShieldCheck],
    ['14', 'Mission Feedback', 'Logs, metrics, operator decisions, routes, and response effects are archived.', ClipboardCheck],
    ['15', 'Return to Standby', 'UAVs return, land, recharge, and reset for the next mission cycle.', RotateCcw],
    ],
    zh: [
        ['01', '待命 / 节点休眠', '分布式节点保持待命，同时完成系统健康检查和任务参数加载。'],
        ['02', '巡航 / 早期预警', '巡航无人机沿边界路线飞行，持续观察高风险设施。'],
        ['03', '监视 / 重点侦察', '到达关键区域后执行重点侦察，补充目标区域态势。'],
        ['04', '异常发现', '可疑人员、车辆靠近、热源异常或围栏破坏触发异常状态。'],
        ['05', '目标识别', '系统校验传感器置信度，再从观察状态升级为上报状态。'],
        ['06', '告警上报', '控制中心接收目标位置、图像、时间、置信度、威胁等级和无人机状态。'],
        ['07', '目标跟踪', '巡航无人机保持目标锁定，并持续上传安全距离内的遥测数据。'],
        ['08', '警告与驱离', '优先执行声光或平台警告，在处置层级激活前先进行威慑。'],
        ['09', '第一层响应', '最近处置节点执行近距警告、拦截姿态和路线封控。'],
        ['10', '效果评估', '铜雀台判断警告或处置是否有效，再决定是否升级。'],
        ['11', '第二层升级', '目标仍活跃或接近保护区时，额外无人机节点被激活。'],
        ['12', '第三层升级', '预备节点汇聚，在仿真流程中形成完整压制态势。'],
        ['13', '威胁解除', '目标撤离或威胁状态从活动队列中移除。'],
        ['14', '任务反馈', '日志、指标、授权决策、路线和处置效果进入归档。'],
        ['15', '返回待命', '无人机返航、降落、充电，并复位进入下一轮任务周期。'],
    ],
    ar: [
        ['01', 'استعداد', 'تبقى العقد جاهزة مع فحص النظام ومعلمات المهمة.'],
        ['02', 'دورية وإنذار مبكر', 'تراقب الطائرة الحدود والأصول الحساسة.'],
        ['03', 'استطلاع مركز', 'تزيد المراقبة عند الوصول إلى منطقة حساسة.'],
        ['04', 'كشف شذوذ', 'حركة مشبوهة أو مركبة أو خرق للسور يطلق الحالة.'],
        ['05', 'تعرف الهدف', 'يتم التحقق من ثقة المستشعر قبل رفع البلاغ.'],
        ['06', 'إبلاغ مركز القيادة', 'يرسل الموقع والصورة والوقت ومستوى التهديد.'],
        ['07', 'تتبع الهدف', 'تحافظ الطائرة على القفل مع مسافة آمنة.'],
        ['08', 'تحذير وردع', 'يصدر تحذير صوتي أو ضوئي أولا.'],
        ['09', 'استجابة الطبقة الأولى', 'أقرب عقدة تنفذ التحذير والاعتراض.'],
        ['10', 'تقييم الأثر', 'يفحص النظام هل نجح التحذير أو يلزم التصعيد.'],
        ['11', 'تصعيد الطبقة الثانية', 'تعمل طائرات إضافية إذا بقي الهدف نشطا.'],
        ['12', 'تصعيد الطبقة الثالثة', 'تتقارب العقد الاحتياطية للسيطرة الكاملة.'],
        ['13', 'تحييد التهديد', 'ينسحب الهدف أو تزال حالة التهديد.'],
        ['14', 'تسجيل المهمة', 'تحفظ السجلات والقرارات والمسارات والنتائج.'],
        ['15', 'عودة للاستعداد', 'تعود الطائرات وتهبط وتشحن وتعيد الضبط.'],
    ],
    la: [
        ['01', 'Espera', 'Los nodos quedan listos mientras se verifica sistema y parametros.'],
        ['02', 'Patrulla temprana', 'El UAV vigila perimetro y activos sensibles.'],
        ['03', 'Reconocimiento', 'Se intensifica la observacion en zonas clave.'],
        ['04', 'Anomalia detectada', 'Movimiento, vehiculo o brecha activa el estado.'],
        ['05', 'Reconocimiento de objetivo', 'Se valida la confianza del sensor antes de reportar.'],
        ['06', 'Alerta al centro', 'Se envia ubicacion, imagen, tiempo y amenaza.'],
        ['07', 'Seguimiento', 'El UAV mantiene bloqueo a distancia segura.'],
        ['08', 'Advertencia', 'Se emite disuasion antes de activar respuesta.'],
        ['09', 'Respuesta capa 1', 'El nodo mas cercano bloquea y advierte.'],
        ['10', 'Evaluacion', 'Se decide si la advertencia funciono o escala.'],
        ['11', 'Escalado capa 2', 'Se activan UAV adicionales si el objetivo sigue activo.'],
        ['12', 'Escalado capa 3', 'Nodos de reserva convergen para control completo.'],
        ['13', 'Amenaza neutralizada', 'El objetivo se retira o sale de la cola activa.'],
        ['14', 'Registro', 'Se archivan metricas, rutas, decisiones y efectos.'],
        ['15', 'Retorno a espera', 'Los UAV vuelven, aterrizan, cargan y reinician.'],
    ],
    sl: [
        ['01', 'Pripravnost', 'Cvorovi ostaju spremni dok se proverava sistem i misija.'],
        ['02', 'Rana patrola', 'UAV nadzire perimetar i kriticnu imovinu.'],
        ['03', 'Izvidjanje', 'Klucne zone dobijaju pojacano osmatranje.'],
        ['04', 'Anomalija', 'Sumnjivo kretanje, vozilo ili proboj aktivira stanje.'],
        ['05', 'Prepoznavanje cilja', 'Proverava se pouzdanost senzora pre prijave.'],
        ['06', 'Alarm centru', 'Salju se lokacija, slika, vreme i nivo pretnje.'],
        ['07', 'Pracenje cilja', 'UAV drzi cilj zakljucan na bezbednoj distanci.'],
        ['08', 'Upozorenje', 'Prvo se izdaje zvucno ili svetlosno upozorenje.'],
        ['09', 'Odgovor sloj 1', 'Najblizi cvor vrsi upozorenje i blokadu.'],
        ['10', 'Procena efekta', 'Sistem odlucuje da li treba eskalacija.'],
        ['11', 'Eskalacija sloj 2', 'Dodatni UAV se aktiviraju ako cilj ostane aktivan.'],
        ['12', 'Eskalacija sloj 3', 'Rezervni cvorovi se skupljaju za punu kontrolu.'],
        ['13', 'Pretnja uklonjena', 'Cilj se povlaci ili izlazi iz aktivne liste.'],
        ['14', 'Zapis misije', 'Arhiviraju se metrike, odluke, rute i efekti.'],
        ['15', 'Povratak', 'UAV se vracaju, slecu, pune i resetuju.'],
    ],
} as const

type SearchParams = Promise<{ lang?: string }>

export default async function SentinelXPage({searchParams}: { searchParams?: SearchParams }) {
    const params = await searchParams
    const lang = (params?.lang && params.lang in copy ? params.lang : 'en') as keyof typeof copy
    const t = copy[lang]
    const phases = phaseCopy[lang].map((phase, index) => [...phase, phaseIcons[index]] as const)

    return (
        <main dir={lang === 'ar' ? 'rtl' : 'ltr'} className="overflow-x-hidden pt-24">
            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0 -z-10">
                    <Image src="/generated/layered-response-overview.png" alt="" fill priority className="object-cover opacity-32"/>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background),rgba(0,0,0,.72),rgba(0,0,0,.46)),linear-gradient(0deg,var(--background),transparent_60%)]"/>
                </div>
                <div className="mx-auto max-w-6xl px-6">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300">{t.alias}</p>
                    <TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-none md:text-7xl">
                        {t.title}
                    </TextEffect>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
                    <div className="mt-8">
                        <Button asChild variant="outline"><Link href={`/?lang=${lang}#top`}>{t.back}</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
                        {['Patrol / Surveillance', 'Warning / Command', 'Armed Response / Escalation', 'Completion / Reset', 'Audit / Logging'].map((item, index) => (
                            <div key={item} className="rounded-xl border border-white/10 bg-card/60 p-4">
                                <p className="font-mono text-xs text-amber-300">0{index + 1}</p>
                                <p className="mt-2 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-20 md:pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="rounded-3xl border border-white/10 bg-card/30 p-4 md:p-6">
                        <AnimatedGroup
                            triggerOnView
                            variants={{container: {visible: {transition: {staggerChildren: 0.035, delayChildren: 0.2}}}, ...transitionVariants}}
                            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {phases.map(([number, title, body, Icon]) => (
                                <article key={number} className="min-h-48 rounded-2xl border border-white/10 bg-background/70 p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-mono text-sm text-amber-300">{number}</span>
                                        <Icon className="size-5 text-amber-300"/>
                                    </div>
                                    <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
                                </article>
                            ))}
                        </AnimatedGroup>
                    </div>
                </div>
            </section>
        </main>
    )
}
