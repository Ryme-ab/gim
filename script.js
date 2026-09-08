const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const originalTitle = document.title;
const originalDescription = document.querySelector('meta[name="description"]')?.content || "";
const htmlElement = document.documentElement;
const languageStorageKey = "gimpo-language";
let currentLanguage = window.localStorage.getItem(languageStorageKey) || "en";

const englishTranslations = {
  title: "GIMPO | Industrial electrical solutions",
  description:
    "GIMPO / SARL GIMELEC POWER provides electrical, automation and industrial maintenance solutions in Algeria.",
  single: [
    [".main-nav a[href='#solutions']", "Solutions"],
    [".main-nav a[href='#products']", "Products"],
    [".main-nav a[href='#partners']", "Partners"],
    [".main-nav a[href='#services']", "Services"],
    [".main-nav a[href='#projects']", "References"],
    [".main-nav a[href='news.html']", "News"],
    [".main-nav a[href='#contact']", "Contact"],
    [".hero .eyebrow", "GIMPO / SARL GIMELEC POWER"],
    [".hero h1", "Your EPC partner for electrical solutions, automation and industrial maintenance."],
    [
      ".hero-copy > p:not(.eyebrow)",
      "Based in Algeria, GIMPO is an EPC company (Engineering, Procurement & Construction). We provide distribution, integration, installation and maintenance of electrical equipment and industrial automation systems for the energy, infrastructure and industrial sectors.",
    ],
    [".hero-actions .primary", "Request a consultation"],
    [".hero-actions .glass", "Copy phone"],
    [".hero-actions .ghost", "Explore products"],
    [".intro .eyebrow", "Mission"],
    [".intro h2", "Deliver reliable, efficient and durable solutions."],
    [
      ".intro > p",
      "As an EPC company, GIMPO supports its clients from design to commissioning: electrical equipment, industrial electricity, automation, control, maintenance and technical assistance. The company relies on strong partnerships with globally recognized manufacturers.",
    ],
    [".solutions .eyebrow", "Business areas"],
    [".solutions h2", "Solutions for sites that cannot stop."],
    [".products .eyebrow", "Products & technologies"],
    [".products h2", "Product carousels for the critical needs of your installations."],
    [".partners-detail .eyebrow", "Partners"],
    [".partners-detail h2", "Three technical partners for a coherent industrial offer."],
    [".services .eyebrow", "Capabilities"],
    [".services h2", "Maintenance, automation and integrated workshop."],
    [".commitments .eyebrow", "Commitments"],
    [".commitments h2", "Service quality and technical proximity."],
    [".projects .eyebrow", "References"],
    [".projects h2", "Completed projects."],
    [".partners .eyebrow", "Partners & brands"],
    [".partners h2", "Recognized manufacturers for demanding installations."],
    [".location .eyebrow", "Location"],
    [".location h2", "Find GIMPO in Cheraga, Algiers."],
    [".map-card h3", "El Qods Business Center"],
    [".map-card p", "Bu 39 08, Cheraga, Algiers"],
    [".map-card .primary", "Open Google Maps"],
    [".footer > div p", "Electrical and industrial solutions for a modern, connected and high-performing industry."],
    [".footer-links a:first-child", "GIMPO on LinkedIn"],
    [".footer-links a:last-child", "Location"],
    [".contact-card h2", "Contact"],
    [".contact-actions:nth-of-type(1) .contact-line span", "Main phone"],
    [".contact-actions:nth-of-type(2) .contact-line span", "Technical mobile"],
    [".mail-card span", "Business email"],
    [".mail-card em", "Open mailbox"],
    [".linkedin-card span", "LinkedIn"],
    [".linkedin-card strong", "Contact GIMPO on LinkedIn"],
    [".footer .contact-card > p", "El Qods Business Center, Cheraga, Algiers, Bu 39 08"],
  ],
  groups: [
    {
      selector: ".hero-panel > div > span",
      values: [
        "years of technical experience since 1990",
        "Office and workshop space",
        "products and solutions compliant with international standards",
      ],
    },
    {
      selector: ".solution-grid article h3",
      values: [
        "Hydraulics & desalination",
        "Oil & gas",
        "Energy",
        "Cement & heavy industry",
      ],
    },
    {
      selector: ".solution-grid article p",
      values: [
        "Pumping, medium-voltage drives, power continuity and supervision.",
        "Drives, motors, starters and assistance for critical applications.",
        "Production, distribution, switchboards, generators, controls and commissioning.",
        "Maintenance of rotating machines, low- and medium-voltage motors and field diagnostics.",
      ],
    },
    {
      selector: ".carousel-tabs button",
      values: ["INVT Drives", "INVT UPS", "Sifang SCADA", "Sifang starters", "LAEG motors"],
    },
    {
      selector: ".product-slide .eyebrow",
      values: ["INVT GD350 / GD5000", "INVT UPS", "Sifang / Syfang", "Sifang / Syfang", "LAEG"],
    },
    {
      selector: ".product-slide h3",
      values: [
        "Low- and medium-voltage drives",
        "Modular uninterruptible power supplies",
        "SCADA, control and industrial switchgear",
        "Soft starters and drive support",
        "Industrial electric motors",
      ],
    },
    {
      selector: ".product-slide:nth-of-type(1) > div > p:last-of-type",
      values: ["Motor control solutions for pumps, cement plants, energy and industrial processes. INVT ranges deliver precision, energy efficiency and open communications."],
    },
    {
      selector: ".product-slide:nth-of-type(2) > div > p:last-of-type",
      values: ["UPS systems for data centers, industries and sensitive infrastructure with redundant N+X architecture, simplified maintenance and intelligent supervision."],
    },
    {
      selector: ".product-slide:nth-of-type(3) > div > p:last-of-type",
      values: ["Supervision and control integration for electrical installations: process visualization, alarm tracking, equipment control and diagnostics."],
    },
    {
      selector: ".product-slide:nth-of-type(4) > div > p:last-of-type",
      values: ["GIMPO works on Sifang, INVT and other brands: repair, parameter setting, testing, commissioning and field support for critical machines."],
    },
    {
      selector: ".product-slide:nth-of-type(5) > div > p:last-of-type",
      values: ["Ranges of low-voltage motors, special motors, universal motors and PM Drive & Control solutions for electromechanical and automation applications."],
    },
    {
      selector: ".product-slide li",
      values: [
        "Advanced vector control for synchronous and asynchronous motors",
        "GD5000: efficiency above 97% in pumping applications",
        "Modbus-TCP, Profibus, Profinet, EtherNet/IP and CANopen",
        "Online double-conversion VFI technology",
        "Hot-swappable modules for maintenance without interruption",
        "Flexible expansion from 25 to 900 kVA depending on site needs",
        "Control of plants, pumps and production lines",
        "Operator interface for operations and maintenance",
        "Integration with existing switchboards, cells and automation systems",
        "Repair and parameter setting of soft starters",
        "Low- and medium-voltage maintenance",
        "Workshop or on-site intervention at the customer location",
        "Low-voltage, PMSM, SynRM and special motors",
        "Performance-oriented approach with efficiency and low-carbon design",
        "GIMPO support: selection, installation, maintenance and refurbishment",
      ],
    },
    {
      selector: ".partner-cards h3",
      values: [
        "Automation, drives and UPS",
        "Electric motors and electromechanics",
        "Soft starters, drives and control",
      ],
    },
    {
      selector: ".partner-cards p",
      values: [
        "INVT is an international supplier of industrial automation, electric drives and secure power systems. For GIMPO, the brand covers GD350/GD5000 drives and modular UPS systems for critical applications.",
        "LAEG is presented in GIMPO materials as a company focused on electric motors and inverters, with an electromechanical, automation and low-carbon solutions mindset.",
        "Sifang is one of the brands on which GIMPO works for maintenance, parameter setting and commissioning. The offer covers soft starters, supervision and industrial control applications.",
      ],
    },
    {
      selector: ".partner-cards li",
      values: [
        "Low- and medium-voltage frequency drives",
        "Modular UPS and supervision",
        "Solutions for pumping, energy and industry",
        "Low-voltage and special motors",
        "PMSM, SynRM and PM Drive & Control solutions",
        "Maintenance support through GIMPO workshops",
        "Soft starters and field support",
        "SCADA and industrial equipment control",
        "Integration with switchgear and electrical panels",
      ],
    },
    {
      selector: ".services h3",
      values: [
        "Commissioning & start-up",
        "Low- and medium-voltage motor maintenance",
        "Drives & starters",
        "Switchboards & automation",
        "Industrial diagnostics",
        "Spare parts",
      ],
    },
    {
      selector: ".services p",
      values: [
        "On-site or workshop commissioning, parameter setting, testing, start-up and customer support.",
        "Stator and rotor rewinding, bearings, plain bearings, brushes, accessories and painting.",
        "Repair, overhaul, parameter setting, application optimization and INVT product training.",
        "Manufacture, installation, modification, commissioning and maintenance of electrical panels.",
        "Vibration analysis, dynamic balancing, dimensional inspection, testing and technical analysis.",
        "Supply of original parts and mechanical/electrical refurbishment of equipment.",
      ],
    },
    {
      selector: ".commitment-row span",
      values: ["Quality", "Reliability", "Compliance", "Innovation", "Proximity"],
    },
    {
      selector: ".project-grid h3",
      values: [
        "Hounaine desalination plant",
        "CHLEF cement plant",
        "SORASUCRE Guelma",
      ],
    },
    {
      selector: ".project-grid p",
      values: [
        "17 soft starters, 10 frequency drives, programming and commissioning.",
        "Installation support, commissioning and start-up of a 3700 kW motor.",
        "Complete EPC: WEG GPW500 generators, TGM turbines, MCC, controls and SCADA.",
      ],
    },
    {
      selector: ".partners .partner-strip span",
      values: ["INVT", "WEG", "SIFANG", "LOGSTRUP", "WATT Drives", "PROVITECH"],
    },
  ],
  attrs: [
    { selector: ".nav-toggle", attr: "aria-label", value: "Open menu" },
    { selector: ".brand", attr: "aria-label", value: "GIMPO home" },
    { selector: ".map-card .primary", attr: "aria-label", value: "Open GIMPO on Google Maps" },
  ],
};

const newsEnglishTranslations = {
  title: "GIMPO | News",
  description:
    "GIMPO news: events, projects, partnerships and industrial innovations.",
  single: [
    [".news-hero__copy h1", "GIMPO's latest news, events and achievements."],
    [
      ".news-hero__copy > p:not(.eyebrow)",
      "Discover GIMPO events, international trade fairs, technical days, industrial partnerships and technological innovations in energy, industrial automation, electrical substations, variable-speed drives, MV/HV motors and protection systems.",
    ],
  ],
  groups: [
    {
      selector: ".main-nav a",
      values: ["Solutions", "Products", "Partners", "Services", "References", "News", "Contact"],
    },
    {
      selector: ".news-hero__meta span",
      values: ["News", "Events", "Industry & Energy", "Innovation"],
    },
    {
      selector: ".news-carousel__slide .eyebrow",
      values: ["Featured event", "Technical exchanges", "Welcome", "Presentation", "High voltage", "Motor systems", "Protection"],
    },
    {
      selector: ".news-carousel__slide h2",
      values: [
        "Over 70 professionals gathered for the GIMPO Technical Day at the Sheraton Club des Pins.",
        "Conferences and demonstrations followed by industry professionals.",
        "A day structured around the presentation of GIMPO technologies.",
        "Solutions tailored to the needs of the energy and industrial sectors.",
        "A focus on HV switchgear, MV motors and protection relays.",
        "Variable-speed drives, motors and supervision in one ecosystem.",
        "Digital relays, supervision and control systems in the spotlight.",
      ],
    },
    {
      selector: ".news-carousel__slide p:last-child",
      values: [
        "A day dedicated to new technologies for electrical networks, industrial automation and electrical-installation protection.",
        "Participants discovered solutions designed for modern electrical infrastructure.",
        "The event highlighted teams, partners and new industrial applications.",
        "Discussions covered automation, continuity of service and energy efficiency.",
        "A clear message focused on reliability and installation safety.",
        "A coherent offer for demanding industrial sites.",
        "Protecting installations remains at the heart of the value delivered by GIMPO.",
      ],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-article__head .eyebrow",
      values: ["GIMPO event"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-article__head h2",
      values: ["GIMPO Technical Day at the Sheraton Club des Pins"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-meta-card span",
      values: ["Date"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-meta-card strong",
      values: ["July 2026"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-article__content > p",
      values: [
        "GIMPO successfully hosted a Technical Day at the Sheraton Club des Pins in Algiers, bringing together more than 70 engineers, maintenance managers, industrial operators, consultants, engineering firms and electrical-network specialists.",
        "The event showcased the latest innovations in industrial electrical equipment while creating a forum for exchange among professionals from Algeria's energy sector.",
        "The presentations highlighted the latest equipment for energy, heavy industry, critical infrastructure, pumping, cement, metallurgy and medium-voltage electrical installations.",
        "Participants discovered new generations of digital protection relays, control-system architectures and integration best practices for demanding industrial environments.",
        "Beyond the technical conferences, the day created a genuine meeting place for industrial companies, operators, engineers, maintenance managers and technology partners.",
        "These exchanges directly support technical skills development and strengthen relationships between stakeholders in Algeria's energy sector.",
        "With more than 70 participants, the Technical Day confirms GIMPO's commitment to promoting new technologies and supporting companies toward more efficient, intelligent and reliable electrical infrastructure.",
        "We warmly thank all participants, technology partners and speakers who contributed to the success of this event.",
      ],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-article__content h3",
      values: ["Technologies for modern industries", "Rich exchanges between professionals", "Strong participation"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-callout strong",
      values: ["Programme"],
    },
    {
      selector: ".news-layout:not(#pollutec) .news-callout p",
      values: ["High-voltage switchgear, medium-voltage motors, protection relays, substation automation, SCADA, variable-speed drives and energy-efficiency solutions."],
    },
    {
      selector: "#pollutec .news-article__head .eyebrow",
      values: ["International trade fair"],
    },
    {
      selector: "#pollutec .news-article__head h2",
      values: ["GIMPO takes part in the POLLUTEC Algeria International Trade Fair"],
    },
    {
      selector: "#pollutec .news-meta-card span",
      values: ["Date"],
    },
    {
      selector: "#pollutec .news-article__content > p",
      values: [
        "At the POLLUTEC Algeria International Trade Fair, GIMPO was pleased to present its expertise in electrical equipment, industrial automation and innovative energy solutions.",
        "This major event enabled GIMPO to meet industrial companies, engineering firms, integrators, operators and decision-makers from the energy sector who came to discover its solutions.",
        "Throughout the exhibition, GIMPO teams welcomed many visitors to present their latest achievements, international partners and solutions for energy, industry, water, infrastructure and industrial processes.",
        "Through its participation in POLLUTEC, GIMPO confirms its commitment to developing innovative solutions that meet the requirements of Industry 4.0, digitalisation and the energy transition.",
      ],
    },
    {
      selector: "#pollutec .news-article__content h3",
      values: ["Solutions presented", "A trade fair rich in exchanges", "Towards more efficient industry"],
    },
    {
      selector: "#pollutec .news-list li",
      values: ["High-voltage switchgear", "MV & LV electrical panels", "Industrial variable-speed drives", "Soft starters", "Digital protection relays", "Medium-voltage motors", "Industrial PLCs", "SCADA systems", "Industrial supervision", "Energy-efficiency solutions"],
    },
    {
      selector: ".news-sidebar .eyebrow",
      values: ["Latest topics"],
    },
    {
      selector: ".news-sidebar .news-widget__item strong",
      values: ["Desalination project and field support", "Maintenance of heavy installations"],
    },
    {
      selector: ".news-sidebar .news-widget__item span",
      values: ["Adjustment, commissioning and on-site support.", "Expertise tailored to high-power motors."],
    },
    {
      selector: ".news-grid-section .section-heading .eyebrow",
      values: ["Latest news"],
    },
    {
      selector: ".news-grid-section .section-heading h2",
      values: ["Discover GIMPO's latest activities."],
    },
    {
      selector: ".news-grid-section .section-heading > p:last-child",
      values: ["Follow the events, achievements, industrial projects and partnerships that illustrate GIMPO's commitment to developing electrical infrastructure and industrial automation."],
    },
    {
      selector: ".news-grid .eyebrow",
      values: ["Project", "Technology", "Partnership"],
    },
    {
      selector: ".news-grid h3",
      values: ["Industrial delivery from specifications to start-up", "Drives and UPS systems for power continuity", "LAEG electric motors for demanding applications"],
    },
    {
      selector: ".news-grid .news-card > div > p:last-child",
      values: ["Manufacturing, testing, integration and validation in demanding production environments.", "INVT architectures provide flexibility, supervision and energy efficiency.", "An approach focused on efficiency, robustness and technical support for critical installations."],
    },
  ],
  attrs: [
    {
      selector: ".news-carousel__slide img",
      attr: "alt",
      values: ["GIMPO Technical Day at the Sheraton", "GIMPO conference at the Sheraton", "Welcome of participants", "Technical presentation", "High-voltage presentation", "Motor systems presentation", "Protection relays"],
    },
    {
      selector: ".news-event-carousel img",
      attr: "alt",
      values: ["Group of participants at the Sheraton", "Participants at the GIMPO Technical Day", "Welcome of participants at the Sheraton", "GIMPO technical presentation", "High-voltage presentation at the trade fair", "GIMPO area at the trade fair", "SCADA and automation solutions", "Industrial project presented", "Discussion with visitors", "GIMPO stand at the POLLUTEC trade fair", "Discussions at the GIMPO stand"],
    },
    { selector: "[data-news-prev]", attr: "aria-label", values: ["Previous photo"] },
    { selector: "[data-news-next]", attr: "aria-label", values: ["Next photo"] },
    { selector: "[data-inline-prev]", attr: "aria-label", values: ["Previous item", "Previous item"] },
    { selector: "[data-inline-next]", attr: "aria-label", values: ["Next item", "Next item"] },
  ],
};

const projectDetails = [
  {
    image: "assets/project-hounaine.jpg",
    eyebrow: { en: "Reference project", fr: "Projet de référence" },
    title: { en: "Hounaine desalination plant", fr: "Usine de dessalement de Hounaine" },
    description: {
      en: "Seventeen soft starters, ten frequency drives, programming and commissioning.",
      fr: "17 démarreurs progressifs, 10 variateurs de fréquence, programmation et mise en service.",
    },
    bullets: {
      en: [
        "Control and sequencing for desalination pumping lines.",
        "On-site commissioning and parameter tuning.",
        "Continuous support for critical production equipment.",
      ],
      fr: [
        "Commande et séquencement des lignes de pompage de dessalement.",
        "Mise en service sur site et réglage des paramètres.",
        "Support continu pour les équipements critiques de production.",
      ],
    },
  },
  {
    image: "assets/project-chlef.jpg",
    eyebrow: { en: "Reference project", fr: "Projet de référence" },
    title: { en: "CHLEF cement plant", fr: "Cimenterie CHLEF" },
    description: {
      en: "Installation support, commissioning and start-up of a 3700 kW motor.",
      fr: "Assistance installation, mise en service et démarrage d'un moteur 3700 kW.",
    },
    bullets: {
      en: [
        "Industrial support for a high-power drive train.",
        "Commissioning with site validation and start-up checks.",
        "Coordination with electrical and mechanical teams.",
      ],
      fr: [
        "Support industriel pour une chaîne d'entraînement de forte puissance.",
        "Mise en service avec validation terrain et contrôles de démarrage.",
        "Coordination avec les équipes électriques et mécaniques.",
      ],
    },
  },
  {
    image: "assets/project-sorasucre.jpg",
    eyebrow: { en: "Reference project", fr: "Projet de référence" },
    title: { en: "SORASUCRE Guelma", fr: "SORASUCRE Guelma" },
    description: {
      en: "Complete EPC: WEG GPW500 generators, TGM turbines, MCC, controls and SCADA.",
      fr: "EPC complet: générateurs WEG GPW500, turbines TGM, MCC, commandes et SCADA.",
    },
    bullets: {
      en: [
        "Integrated electrical and process supervision.",
        "Generator, turbine and control-system coordination.",
        "Delivered as a turnkey industrial package.",
      ],
      fr: [
        "Supervision électrique et process intégrée.",
        "Coordination des générateurs, turbines et systèmes de commande.",
        "Livré comme un package industriel clé en main.",
      ],
    },
  },
];

function cacheOriginalText(element) {
  if (!element || element.dataset.originalText !== undefined) return;
  element.dataset.originalText = element.textContent;
}

function cacheOriginalAttr(element, attr) {
  if (!element) return;
  const key = `original${attr
    .split("-")
    .map((part, index) => (index === 0 ? part[0].toUpperCase() + part.slice(1) : part[0].toUpperCase() + part.slice(1)))
    .join("")}`;
  if (element.dataset[key] !== undefined) return;
  const value = element.getAttribute(attr);
  if (value !== null) element.dataset[key] = value;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (!element) return;
  cacheOriginalText(element);
  element.textContent = value;
}

function setGroup(selector, values) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (index >= values.length) return;
    cacheOriginalText(element);
    element.textContent = values[index];
  });
}

function setAttr(selector, attr, value) {
  const element = document.querySelector(selector);
  if (!element) return;
  cacheOriginalAttr(element, attr);
  element.setAttribute(attr, value);
}

function setGroupAttr(selector, attr, values) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    if (index >= values.length) return;
    cacheOriginalAttr(element, attr);
    element.setAttribute(attr, values[index]);
  });
}

function restoreText(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    if (element.dataset.originalText !== undefined) {
      element.textContent = element.dataset.originalText;
    }
  });
}

function restoreAttr(selector, attr) {
  document.querySelectorAll(selector).forEach((element) => {
    const key = `original${attr
      .split("-")
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("")}`;
    if (element.dataset[key] !== undefined) {
      element.setAttribute(attr, element.dataset[key]);
    }
  });
}

function updateLanguageButton() {
  const button = document.querySelector("[data-lang-toggle]");
  if (!button) return;
  button.textContent = currentLanguage === "en" ? "FR" : "EN";
  button.setAttribute("aria-label", currentLanguage === "en" ? "Switch to French" : "Switch to English");
}

function applyEnglish() {
  document.title = englishTranslations.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = englishTranslations.description;
  htmlElement.lang = "en";

  englishTranslations.single.forEach(([selector, value]) => setText(selector, value));
  englishTranslations.groups.forEach(({ selector, values }) => setGroup(selector, values));
  englishTranslations.attrs.forEach(({ selector, attr, value }) => setAttr(selector, attr, value));

  if (document.querySelector(".news-page")) {
    document.title = newsEnglishTranslations.title;
    if (description) description.content = newsEnglishTranslations.description;
    newsEnglishTranslations.single.forEach(([selector, value]) => setText(selector, value));
    newsEnglishTranslations.groups.forEach(({ selector, values }) => setGroup(selector, values));
    newsEnglishTranslations.attrs.forEach(({ selector, attr, values }) => setGroupAttr(selector, attr, values));
  }

  updateLanguageButton();
  currentLanguage = "en";
}

function restoreFrench() {
  document.title = originalTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = originalDescription;
  htmlElement.lang = "fr";

  englishTranslations.single.forEach(([selector]) => restoreText(selector));
  englishTranslations.groups.forEach(({ selector }) => restoreText(selector));
  englishTranslations.attrs.forEach(({ selector, attr }) => restoreAttr(selector, attr));

  if (document.querySelector(".news-page")) {
    newsEnglishTranslations.single.forEach(([selector]) => restoreText(selector));
    newsEnglishTranslations.groups.forEach(({ selector }) => restoreText(selector));
    newsEnglishTranslations.attrs.forEach(({ selector, attr }) => restoreAttr(selector, attr));
  }

  setText(".main-nav a[href='#projects']", "Références");
  setText(".projects .eyebrow", "Références");

  updateLanguageButton();
  currentLanguage = "fr";
}

function setLanguage(language) {
  if (language === currentLanguage) return;
  if (language === "en") {
    applyEnglish();
  } else {
    restoreFrench();
  }
  window.localStorage.setItem(languageStorageKey, language);
}

function ensureLanguageToggle() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  let toggle = nav.querySelector("[data-lang-toggle]");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "lang-switch";
    toggle.dataset.langToggle = "";
    nav.insertBefore(toggle, nav.querySelector(".nav-cta") || null);
  }

  toggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "fr" : "en"));
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text) {
  const prefix = currentLanguage === "en" ? "Number copied: " : "Numéro copié : ";

  try {
    await navigator.clipboard.writeText(text);
    showToast(prefix + text);
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
    showToast(prefix + text);
  }
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => copyText(button.dataset.copy));
  });
}

function setupProductCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".product-slide")];
  const tabs = [...carousel.querySelectorAll("[data-slide]")];
  const dotsBox = carousel.querySelector("[data-dots]");
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  let active = 0;
  let timer;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show product ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index, true));
    dotsBox?.appendChild(dot);
  });

  const dots = [...(dotsBox?.querySelectorAll("button") || [])];

  function showSlide(index, manual = false) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === active));
    tabs.forEach((tab, tabIndex) => tab.classList.toggle("active", tabIndex === active));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === active));

    if (manual) restartTimer();
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(active + 1), 6500);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => showSlide(Number(tab.dataset.slide), true));
  });

  prev?.addEventListener("click", () => showSlide(active - 1, true));
  next?.addEventListener("click", () => showSlide(active + 1, true));

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", restartTimer);

  showSlide(0);
  restartTimer();
}

function createProjectModal() {
  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="project-modal__backdrop" data-project-close></div>
    <div class="project-modal__panel" role="dialog" aria-modal="true" aria-label="Project image preview">
      <button class="project-modal__close" type="button" aria-label="Close image preview" data-project-close>&times;</button>
      <img data-project-image alt="" />
    </div>
  `;

  document.body.appendChild(modal);
  return modal;
}

function setupReferenceCarousel() {
  const section = document.querySelector("#projects");
  const track = section?.querySelector(".project-grid");
  if (!section || !track) return;

  const slides = [...track.querySelectorAll("article")];
  if (!slides.length) return;

  const controls = document.createElement("div");
  controls.className = "project-carousel-controls";
  controls.innerHTML = `
    <button type="button" data-project-prev aria-label="Previous reference">&larr;</button>
    <button type="button" data-project-next aria-label="Next reference">&rarr;</button>
  `;

  const dotsBox = document.createElement("div");
  dotsBox.className = "carousel-dots project-dots";

  section.querySelector(".section-heading")?.insertAdjacentElement("afterend", controls);
  track.insertAdjacentElement("afterend", dotsBox);

  track.classList.add("project-carousel-track");
  slides.forEach((slide, index) => {
    slide.classList.add("project-slide");
    slide.tabIndex = 0;
    slide.setAttribute("role", "button");
    slide.dataset.projectIndex = String(index);
    slide.addEventListener("click", () => openProjectModal(index));
    slide.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(index);
      }
    });
  });

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show reference ${index + 1}`);
    dot.addEventListener("click", () => showReference(index, true));
    dotsBox.appendChild(dot);
  });

  const dots = [...dotsBox.querySelectorAll("button")];
  const prev = controls.querySelector("[data-project-prev]");
  const next = controls.querySelector("[data-project-next]");
  const visibleCount = Math.min(2, slides.length);
  let active = 0;
  const modal = createProjectModal();
  const modalImage = modal.querySelector("[data-project-image]");

  function openProjectModal(index) {
    const image = slides[index].querySelector("img");
    if (!image) return;
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt;
    modal.hidden = false;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  }

  function closeProjectModal() {
    modal.classList.remove("open");
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  modal.querySelectorAll("[data-project-close]").forEach((element) => {
    element.addEventListener("click", closeProjectModal);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeProjectModal();
  });

  let timer = null;

  function showReference(index, manual = false) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const inWindow =
        slideIndex >= active && slideIndex < active + visibleCount;
      slide.classList.toggle("active", inWindow);
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === active));
    if (manual) {
      slides[active].focus({ preventScroll: true });
      restartTimer();
    }
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => showReference(active + visibleCount), 7000);
  }

  prev?.addEventListener("click", () => showReference(active - visibleCount, true));
  next?.addEventListener("click", () => showReference(active + visibleCount, true));
  track.addEventListener("mouseenter", () => window.clearInterval(timer));
  track.addEventListener("mouseleave", restartTimer);

  showReference(0);
  restartTimer();
}

function setupNewsCarousel() {
  const carousel = document.querySelector("[data-news-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".news-carousel__slide")];
  if (!slides.length) return;

  const prev = carousel.querySelector("[data-news-prev]");
  const next = carousel.querySelector("[data-news-next]");
  const dotsBox = carousel.querySelector("[data-news-dots]");
  let active = 0;
  let timer = null;

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show photo ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index, true));
    dotsBox?.appendChild(dot);
  });

  const dots = [...carousel.querySelectorAll("[data-news-dots] button")];

  function showSlide(index, manual = false) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === active);
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === active));

    if (manual) {
      window.clearInterval(timer);
      startTimer();
    }
  }

  function startTimer() {
    timer = window.setInterval(() => showSlide(active + 1), 6500);
  }

  prev?.addEventListener("click", () => showSlide(active - 1, true));
  next?.addEventListener("click", () => showSlide(active + 1, true));
  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", startTimer);

  showSlide(0);
  startTimer();
}

function setupInlineNewsCarousels() {
  const carousels = document.querySelectorAll("[data-inline-news-carousel]");
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".news-event-carousel__slide")];
    if (!slides.length) return;

    const prev = carousel.querySelector("[data-inline-prev]");
    const next = carousel.querySelector("[data-inline-next]");
    const dotsBox = carousel.querySelector("[data-inline-dots]");
    let active = 0;
    let timer = null;

    slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show event item ${index + 1}`);
      dot.addEventListener("click", () => showSlide(index, true));
      dotsBox?.appendChild(dot);
    });

    const dots = [...carousel.querySelectorAll("[data-inline-dots] button")];

    function showSlide(index, manual = false) {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === active);
        if (slideIndex !== active) {
          slide.querySelectorAll("video").forEach((video) => video.pause());
        }
      });
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === active));

      if (manual) {
        window.clearInterval(timer);
        startTimer();
      }
    }

    function startTimer() {
      timer = window.setInterval(() => showSlide(active + 1), 6200);
    }

    prev?.addEventListener("click", () => showSlide(active - 1, true));
    next?.addEventListener("click", () => showSlide(active + 1, true));
    carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
    carousel.addEventListener("mouseleave", startTimer);

    showSlide(0);
    startTimer();
  });
}

function setupRevealAnimations() {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .intro > p, .solution-grid article, .service-grid article, .project-grid article, .partner-cards article, .partner-logo-card, .commitment-row span, .partner-strip span, .map-layout, .contact-card, .footer > div:first-child"
  );

  revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const end = Number(element.dataset.count);
        const duration = 1200;
        const startTime = performance.now();

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(end * eased).toLocaleString(currentLanguage === "fr" ? "fr-FR" : "en-US");

          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(element);
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function initialize() {
  const isLandingPage = Boolean(document.querySelector(".hero") && document.querySelector(".products"));
  const isNewsPage = Boolean(document.querySelector(".news-page"));

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => nav.classList.toggle("open"));

    document.querySelectorAll(".main-nav a, .main-nav button").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  ensureLanguageToggle();
  setupProductCarousel();
  setupReferenceCarousel();
  setupNewsCarousel();
  setupInlineNewsCarousels();
  setupRevealAnimations();
  setupCounters();

  if (isLandingPage || isNewsPage) {
    if (currentLanguage === "fr") {
      restoreFrench();
    } else {
      applyEnglish();
    }
  }
}

initialize();
