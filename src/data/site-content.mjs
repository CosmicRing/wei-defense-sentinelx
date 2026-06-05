const assets = {
  heroImage: "assets/generated/refinery-patrol-hero.png",
  responseImage: "assets/generated/layered-response-overview.png",
  commandImage: "assets/generated/command-center-clean.png",
  productFamilyImage: "assets/generated/autonomous-product-family.png",
  referenceFlow: "assets/refinery-state-machine-reference.png"
};

const brand = {
  name: "WEI DEFENSE",
  chineseName: "大魏防务",
  mark: "魏",
  email: "solutions@weidefense.example"
};

const localeOptions = [
  ["en", "English", "EN"],
  ["zh", "中文", "中"],
  ["ar", "العربية", "AR"],
  ["la", "Latina", "LA"],
  ["sl", "Slavic", "SL"]
];

const sharedProducts = [
  ["虎豹系列", "HU Series", "Heavy strike UAV", "HU-1 / HU-2 / HU-X"],
  ["骁骑系列", "XQ Series", "High-speed reconnaissance UAV", "XQ-1 / XQ-2 / XQ-X"],
  ["羽林系列", "YL Series", "High-value target defense system", "YL-1 / YL-2 / YL-X"],
  ["中垒系统", "Dock System", "UAV nest and automated airport", "ZL-Dock / ZL-Station"],
  ["陷阵系列", "XJ Series", "Counter-UAV defense module", "XJ-1 / XJ-2 / XJ-X"],
  ["铜雀 OS", "Tongque OS", "Intelligent command operating system", "Mission command / data fusion"]
].map(([series, title, subtitle, models]) => ({ series, title, subtitle, models }));

const sharedStates = [
  ["01", "Standby", "Idle / Monitoring", "System self-check, UAV standby, task parameter loading."],
  ["02", "Patrol & Monitor", "Surveillance", "Execute patrol route and collect visual, thermal, and platform state data."],
  ["03", "Detection & Alarm", "Track / Identify / Alert", "Recognize target, generate alarm, upload location, confidence, and threat level."],
  ["04", "Task Assignment", "Activate Interceptors", "Select nearest response node and assign warning or interception mission."],
  ["05", "Engage", "Intercept / Warning", "Perform warning, close-range blocking, or authorized simulated response."],
  ["06", "Assessment", "BDA / Damage Assessment", "Judge whether the target leaves, threat remains, or escalation is required."],
  ["07", "RTB / Recovery", "Return / Land / Recharge", "Return, land, recharge, archive mission data, and reset system state."]
];

const sharedModules = [
  ["Initialization", "System Initialization & Self-check"],
  ["External", "Radar / Sensor / Manual Report"],
  ["Alarm", "Ground Station / Operator / Platform"],
  ["Resource", "UAV Pool / Status / Payload"],
  ["Escalation", "Activate More Interceptors"]
];

const en = {
  lang: "en",
  dir: "ltr",
  nav: [
    ["Solutions", "#solutions"],
    ["Products", "#products"],
    ["Platform", "#platform"],
    ["Case", "#case"],
    ["Framework", "#framework"]
  ],
  brand: {
    tagline: "Autonomous defense. Intelligent future.",
    statement: "Autonomous intelligence for every critical boundary.",
    about: "WEI DEFENSE provides autonomous security systems for critical infrastructure."
  },
  hero: {
    eyebrow: "Autonomous security systems",
    title: "A family of autonomous defense robots.",
    subtitle:
      "WEI DEFENSE turns patrol UAVs, interceptor systems, command software, and digital twin simulation into one mission-ready security platform.",
    primaryCta: "Explore products",
    secondaryCta: "View refinery case",
    metrics: [
      ["Autonomous", "AI decision support"],
      ["Multi-domain", "Air, ground, maritime"],
      ["Real-time", "Sensing and command"],
      ["Precision", "Layered response"]
    ]
  },
  identity: {
    kicker: "Brand Identity",
    title: "The WEI mark expresses strength, command, and protection.",
    meaning:
      "The character Wei signals resilience, intelligence, and power. The protective geometry expresses defense, control, and a future-facing technology system.",
    cards: [
      ["Chinese Logo", "大魏防务 / WEI DEFENSE"],
      ["English Logo", "WEI DEFENSE"],
      ["Promise", "Defend today. Secure tomorrow."]
    ]
  },
  sections: {
    solutionsKicker: "Solutions",
    solutionsTitle: "Autonomous security for facilities that cannot go dark.",
    productsKicker: "Product Lines",
    productsTitle: "Six product families extracted from the brand board.",
    platformKicker: "Operational Platform",
    platformTitle: "One command layer across air, ground, maritime, command center, and digital twin."
  },
  solutions: [
    ["Oil & Gas", "Refinery site security", "Patrol UAVs monitor boundaries, tank farms, pipe racks, and gates, then coordinate alarms and response nodes."],
    ["Low-altitude security", "Counter-UAV defense", "Real-time sensing, target identification, alarm confirmation, and layered response secure low-altitude airspace."],
    ["Multi-domain", "Autonomous base defense", "Air, ground, maritime, command center, and digital twin assets operate as one coordinated defense system."],
    ["Command OS", "Command and simulation", "Tongque OS, task states, and evaluation metrics make patrol, tracking, response, and review verifiable."]
  ],
  capabilities: [
    ["AI autonomous decision", "AI decision support"],
    ["Multi-domain data fusion", "Air / ground / maritime data"],
    ["Swarm cooperation", "Distributed response nodes"],
    ["Precision response", "Layered deterrence and response"],
    ["All-weather sensing", "Visual, thermal, and platform telemetry"],
    ["Autonomous control", "Mission state control"]
  ],
  platforms: [
    ["Air Platform", "Patrol and response UAVs"],
    ["Ground Platform", "Mobile and fixed defense nodes"],
    ["Maritime Platform", "Waterfront security extension"],
    ["Command Center", "Operator authorization and monitoring"],
    ["Digital Twin", "Simulation and mission replay"]
  ],
  case: {
    kicker: "Case Solution",
    title: "UAV patrol, early warning, and layered security response simulation for a Saudi refinery.",
    copy:
      "The document case is transformed into a mission-level product story: patrol UAVs monitor the perimeter and high-risk assets, the command center confirms threat level, and distributed response UAVs activate by layer.",
    scenario: [
      ["Scene", "Saudi desert refinery, tank farm, pipe rack, perimeter fence, gate roads."],
      ["Tasks", "Patrol, reconnaissance, abnormality detection, alarm upload, target tracking, warning, escalation, recovery."],
      ["Value", "Verify task logic, route planning, communication latency, UAV cooperation, control stability, and response strategy."]
    ]
  },
  framework: {
    kicker: "Animated Mission Framework",
    title: "From standby to patrol, alarm, assignment, engagement, assessment, and recovery.",
    states: sharedStates,
    modules: sharedModules
  },
  search: {
    title: "Search",
    label: "Capability",
    placeholder: "HU Series, Tongque OS, refinery patrol...",
    keywords: ["HU Series", "XQ Series", "Tongque OS", "Refinery", "AI Decision", "Digital Twin"]
  },
  contact: {
    title: "Build your autonomous security program.",
    copy: "From refinery simulation to command-center demonstrations, WEI DEFENSE packages product lines and mission workflows into deployable solution stories.",
    email: brand.email
  }
};

const zh = {
  ...en,
  lang: "zh",
  nav: [
    ["解决方案", "#solutions"],
    ["产品体系", "#products"],
    ["作战平台", "#platform"],
    ["案例", "#case"],
    ["流程框架", "#framework"]
  ],
  brand: {
    tagline: "自主防御，智能未来。",
    statement: "以自主智能科技，守护每一寸疆土与未来。",
    about: "大魏防务面向关键基础设施提供自主安防与仿真解决方案。"
  },
  hero: {
    eyebrow: "自主安防系统",
    title: "面向关键场景的自主防御机器人体系。",
    subtitle: "大魏防务将巡航无人机、处置系统、指挥软件与数字孪生仿真整合为可执行的任务级安防平台。",
    primaryCta: "查看产品体系",
    secondaryCta: "查看炼油厂案例",
    metrics: [
      ["自主智能", "AI 辅助决策"],
      ["多域协同", "空中 / 地面 / 海上"],
      ["实时感知", "传感与指挥联动"],
      ["精准响应", "分层处置链路"]
    ]
  },
  identity: {
    kicker: "品牌识别",
    title: "WEI 标识体现力量、指挥与守护。",
    meaning: "“魏”象征坚韧、智慧与力量；几何字标体现防御、控制和面向未来的自主科技体系。",
    cards: [
      ["中文标识", "大魏防务 / WEI DEFENSE"],
      ["英文标识", "WEI DEFENSE"],
      ["品牌承诺", "守护当下，确保未来。"]
    ]
  },
  sections: {
    solutionsKicker: "解决方案",
    solutionsTitle: "为不能停摆的关键设施提供自主安防。",
    productsKicker: "产品体系",
    productsTitle: "从品牌板块提取并重构的六大产品家族。",
    platformKicker: "作战平台",
    platformTitle: "空中、地面、海上、指挥中枢与数字孪生统一在一套指挥层。"
  },
  solutions: [
    ["油气能源", "炼油厂场站安防", "巡航无人机覆盖边界、储油罐区、管廊和门岗，发现异常后联动控制中心与处置节点。"],
    ["低空安全", "反无人机防御", "实时感知、目标识别、告警确认与分层处置共同支撑园区低空防护。"],
    ["多域防御", "自主基地防御", "空中、地面、海上、指挥中枢和数字孪生资产组成统一协同防御体系。"],
    ["指挥系统", "指挥与仿真", "通过铜雀 OS、任务状态和评估指标，让巡航、跟踪、响应与复盘成为可验证闭环。"]
  ],
  capabilities: [
    ["AI 自主决策", "AI 辅助威胁判断"],
    ["多域数据融合", "空地海数据统一"],
    ["集群协同作战", "分布式处置节点"],
    ["精准响应能力", "分层威慑与处置"],
    ["全天候感知", "可见光、热成像与平台遥测"],
    ["自主可控系统", "任务状态控制"]
  ],
  platforms: [
    ["空中平台", "巡航与处置无人机"],
    ["地面平台", "移动与固定防御节点"],
    ["海上平台", "港区与水域安防扩展"],
    ["指挥中枢", "授权、监控与调度"],
    ["数字孪生", "仿真、复盘与推演"]
  ],
  case: {
    kicker: "案例方案",
    title: "面向沙特炼油厂的无人机巡航预警与分层安防处置仿真。",
    copy: "文档案例被转化为任务级产品叙事：巡航无人机监控边界和高风险资产，控制中心确认威胁等级，分散部署的处置无人机按层级激活。",
    scenario: [
      ["场景", "沙特沙漠炼油厂、储油罐区、管廊、边界围栏和门岗道路。"],
      ["任务", "巡航、侦察、异常发现、报警上报、目标跟踪、警告、升级和恢复。"],
      ["价值", "验证任务逻辑、路线规划、通信延迟、无人机协同、控制稳定性和响应策略。"]
    ]
  },
  framework: {
    kicker: "动态任务框架",
    title: "从待命、巡航、告警、分配、处置、评估到返航恢复。",
    states: sharedStates,
    modules: sharedModules
  },
  search: {
    title: "搜索",
    label: "能力",
    placeholder: "虎豹系列、铜雀 OS、炼油厂巡航...",
    keywords: ["虎豹系列", "骁骑系列", "铜雀 OS", "炼油厂", "AI 决策", "数字孪生"]
  },
  contact: {
    title: "构建你的自主安防方案。",
    copy: "从炼油厂仿真到指挥中心演示，大魏防务可将产品体系与任务流程包装为可展示、可验证、可落地的解决方案。",
    email: brand.email
  }
};

const ar = {
  ...en,
  lang: "ar",
  dir: "rtl",
  nav: [
    ["الحلول", "#solutions"],
    ["المنتجات", "#products"],
    ["المنصة", "#platform"],
    ["الحالة", "#case"],
    ["الإطار", "#framework"]
  ],
  hero: {
    eyebrow: "أنظمة أمن ذاتية",
    title: "منظومة روبوتات دفاعية ذاتية.",
    subtitle: "تجمع WEI DEFENSE بين طائرات الدورية، أنظمة الاستجابة، برمجيات القيادة، ومحاكاة التوأم الرقمي في منصة أمنية جاهزة للمهمة.",
    primaryCta: "استكشف المنتجات",
    secondaryCta: "شاهد حالة المصفاة",
    metrics: [
      ["ذاتي", "دعم قرار بالذكاء الاصطناعي"],
      ["متعدد المجالات", "جو، أرض، بحر"],
      ["فوري", "استشعار وقيادة"],
      ["دقيق", "استجابة طبقية"]
    ]
  },
  sections: {
    solutionsKicker: "الحلول",
    solutionsTitle: "أمن ذاتي للمنشآت التي لا يمكن أن تتوقف.",
    productsKicker: "خطوط المنتجات",
    productsTitle: "ست عائلات منتجات لمنظومة WEI DEFENSE.",
    platformKicker: "منصة التشغيل",
    platformTitle: "طبقة قيادة واحدة عبر الجو والأرض والبحر ومركز القيادة والتوأم الرقمي."
  },
  solutions: [
    ["النفط والغاز", "أمن مواقع المصافي", "تراقب الطائرات الحدود والخزانات والممرات والبوابات ثم تنسق الإنذار ونقاط الاستجابة."],
    ["الأمن الجوي المنخفض", "دفاع ضد الطائرات غير المصرح بها", "استشعار فوري، تعريف الهدف، تأكيد الإنذار، واستجابة طبقية لحماية المجال المنخفض."],
    ["متعدد المجالات", "دفاع ذاتي للمنشآت", "تعمل أصول الجو والأرض والبحر ومركز القيادة والتوأم الرقمي كنظام دفاع واحد."],
    ["نظام القيادة", "القيادة والمحاكاة", "يجعل Tongque OS وحالات المهمة ومؤشرات التقييم الدورية والتتبع والاستجابة قابلة للتحقق."]
  ],
  case: {
    kicker: "حل الحالة",
    title: "محاكاة دورية الطائرات والإنذار المبكر والاستجابة الطبقية لمصفاة سعودية.",
    copy: "تتحول الحالة إلى قصة منتج على مستوى المهمة: تراقب الطائرات الحدود والأصول الحرجة، يؤكد مركز القيادة مستوى التهديد، وتعمل طائرات الاستجابة حسب الطبقات.",
    scenario: [
      ["المشهد", "مصفاة صحراوية، خزانات، ممرات أنابيب، سور محيط، وطرق بوابات."],
      ["المهام", "دورية، استطلاع، كشف شذوذ، إنذار، تتبع هدف، تحذير، تصعيد، واستعادة."],
      ["القيمة", "اختبار منطق المهمة، تخطيط المسار، تأخر الاتصال، التعاون، الثبات، واستراتيجية الاستجابة."]
    ]
  },
  contact: {
    title: "ابن برنامجك للأمن الذاتي.",
    copy: "من محاكاة المصافي إلى عروض مركز القيادة، تحول WEI DEFENSE خطوط المنتجات وسير المهام إلى قصص حلول قابلة للنشر.",
    email: brand.email
  }
};

const la = {
  ...en,
  lang: "la",
  nav: [
    ["Soluciones", "#solutions"],
    ["Productos", "#products"],
    ["Plataforma", "#platform"],
    ["Caso", "#case"],
    ["Marco", "#framework"]
  ],
  hero: {
    eyebrow: "Sistemas autonomos de seguridad",
    title: "Una familia de robots de defensa autonoma.",
    subtitle: "WEI DEFENSE integra UAV de patrulla, sistemas de respuesta, software de mando y simulacion de gemelo digital en una plataforma lista para mision.",
    primaryCta: "Explorar productos",
    secondaryCta: "Ver caso de refineria",
    metrics: [
      ["Autonomo", "Decision asistida por IA"],
      ["Multi-dominio", "Aire, tierra, mar"],
      ["Tiempo real", "Sensado y mando"],
      ["Precision", "Respuesta por capas"]
    ]
  },
  sections: {
    solutionsKicker: "Soluciones",
    solutionsTitle: "Seguridad autonoma para instalaciones que no pueden detenerse.",
    productsKicker: "Lineas de producto",
    productsTitle: "Seis familias de producto para WEI DEFENSE.",
    platformKicker: "Plataforma operacional",
    platformTitle: "Una capa de mando para aire, tierra, mar, centro de comando y gemelo digital."
  },
  solutions: [
    ["Petroleo y gas", "Seguridad de refinerias", "UAV de patrulla vigilan perimetros, tanques, tuberias y accesos, coordinando alarmas y respuesta."],
    ["Baja altitud", "Defensa counter-UAV", "Sensado en tiempo real, identificacion, confirmacion de alarma y respuesta por capas."],
    ["Multi-dominio", "Defensa autonoma de base", "Aire, tierra, mar, mando y gemelo digital operan como un unico sistema de defensa."],
    ["Command OS", "Mando y simulacion", "Tongque OS convierte patrulla, seguimiento, respuesta y revision en un ciclo verificable."]
  ],
  contact: {
    title: "Construye tu programa de seguridad autonoma.",
    copy: "De simulaciones de refineria a demostraciones de centro de mando, WEI DEFENSE empaqueta productos y flujos de mision como soluciones desplegables.",
    email: brand.email
  }
};

const sl = {
  ...en,
  lang: "sl",
  nav: [
    ["Resenja", "#solutions"],
    ["Proizvodi", "#products"],
    ["Platforma", "#platform"],
    ["Slucaj", "#case"],
    ["Okvir", "#framework"]
  ],
  hero: {
    eyebrow: "Autonomni sigurnosni sistemi",
    title: "Porodica autonomnih odbrambenih robota.",
    subtitle: "WEI DEFENSE povezuje patrolne UAV, sisteme odgovora, komandni softver i digitalni blizanac u platformu spremnu za misiju.",
    primaryCta: "Pogledaj proizvode",
    secondaryCta: "Pogledaj slucaj rafinerije",
    metrics: [
      ["Autonomno", "AI podrska odluci"],
      ["Vise domena", "Vazduh, zemlja, more"],
      ["Realno vreme", "Senzori i komanda"],
      ["Precizno", "Slojeviti odgovor"]
    ]
  },
  sections: {
    solutionsKicker: "Resenja",
    solutionsTitle: "Autonomna bezbednost za objekte koji ne smeju stati.",
    productsKicker: "Linije proizvoda",
    productsTitle: "Sest porodica proizvoda za WEI DEFENSE.",
    platformKicker: "Operativna platforma",
    platformTitle: "Jedan komandni sloj za vazduh, zemlju, more, komandni centar i digitalni blizanac."
  },
  solutions: [
    ["Nafta i gas", "Bezbednost rafinerije", "Patrolni UAV nadziru perimetar, rezervoare, cevovode i kapije, zatim koordinisu alarm i odgovor."],
    ["Niska visina", "Counter-UAV odbrana", "Senzori u realnom vremenu, identifikacija cilja, potvrda alarma i slojeviti odgovor."],
    ["Vise domena", "Autonomna odbrana baze", "Vazduh, zemlja, more, komanda i digitalni blizanac rade kao jedan odbrambeni sistem."],
    ["Command OS", "Komanda i simulacija", "Tongque OS, stanja misije i metrike cine patrolu, pracenje i odgovor proverljivim."]
  ],
  contact: {
    title: "Izgradi autonomni sigurnosni program.",
    copy: "Od simulacije rafinerije do demonstracije komandnog centra, WEI DEFENSE pakuje proizvode i tok misije u primenljiva resenja.",
    email: brand.email
  }
};

const locales = { en, zh, ar, la, sl };

export function getSiteContent(locale = "en") {
  const selected = locales[locale] ? locale : "en";
  const content = locales[selected];

  return {
    ...content,
    activeLocale: selected,
    assets,
    localeOptions,
    brand: { ...brand, ...content.brand },
    products: content.products || sharedProducts
  };
}

export const siteContent = getSiteContent("en");
