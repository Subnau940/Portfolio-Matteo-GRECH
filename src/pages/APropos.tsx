import React, { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Shield, Network, Monitor, Dumbbell, Bike, Telescope, BookOpen, GraduationCap, Award, Calendar, CheckCircle, Download, FileText, User, Wrench, BookMarked, Menu, X, Activity, Terminal, ListChecks } from "lucide-react"
import { Link } from "react-router-dom"

type DiploFilter = "all" | "diplomes" | "certifications"

const sections = [
  { id: "section-profil",        label: "Profil",         icon: User },
  { id: "section-softskills",    label: "Soft Skills",    icon: BookOpen },
  { id: "section-interets",      label: "Intérêts",       icon: Telescope },
  { id: "section-competences",   label: "Compétences",    icon: Wrench },
  { id: "section-formation",     label: "Formation",      icon: GraduationCap },
  { id: "section-certifications",label: "Certifications", icon: Award },
  { id: "section-cv",            label: "Mon CV",         icon: FileText },
]

const APropos = () => {
  const [showCV, setShowCV] = useState(true)
  const [diploFilter, setDiploFilter] = useState<DiploFilter>("all")
  const [compTheme, setCompTheme] = useState<string>("all")
  const [activeSection, setActiveSection] = useState("section-profil")
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    const OFFSET = 160
    const handleScroll = () => {
      // Si on est tout en bas de la page → activer la dernière section
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20
      if (atBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }
      let current = sections[0].id
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= OFFSET) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 110
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
    setTocOpen(false)
  }

  const softSkills = [
    { label: "Assidu", emoji: "📌" },
    { label: "Persévérant", emoji: "💪" },
    { label: "Curieux", emoji: "🔍" },
    { label: "Esprit d'équipe", emoji: "🤝" },
  ]

  const interets = [
    { label: "Veille technologique", icon: BookOpen },
    { label: "Boxe anglaise", icon: Dumbbell },
    { label: "Moto", icon: Bike },
    { label: "Cosmologie", icon: Telescope },
  ]

  const competences: { icon: React.ElementType; categorie: string; color: string; items: string[] }[] = [
    {
      icon: Network,
      categorie: "Infrastructure & Réseau",
      color: "from-blue-500 to-blue-700",
      items: [
        "Segmentation VLANs, règles NAT et firewall",
        "VPN (IPsec/SSL) — configuration et dépannage",
        "Routage avancé — diagnostic et remise en service complète",
        "Configuration switches (VLANs, PoE, sécurité des ports)",
        "Services réseau (DHCP, DNS, proxy)",
        "Analyse de trames (Wireshark)",
        "Protocoles de routage statique et dynamique",
        "Câblage et architecture réseau",
      ],
    },
    {
      icon: Shield,
      categorie: "Cybersécurité défensive",
      color: "from-red-500 to-red-700",
      items: [
        "Déploiement SIEM/XDR Wazuh (Proxmox, agents Win/Linux, Active Response)",
        "IDS/IPS Snort sur pfSense — règles de détection réseau",
        "Hardening CIS Benchmark (SCA)",
        "IAM, GPO, ACL — hardening système",
        "Analyse de vulnérabilités, tests basiques (lab Kali/Windows)",
        "Veille active SOC, threat intelligence",
      ],
    },
    {
      icon: Activity,
      categorie: "Supervision & Monitoring",
      color: "from-green-500 to-green-700",
      items: [
        "Déploiement Zabbix 7.0 LTS (Server, Frontend, Agent)",
        "Supervision CPU, RAM, disque, réseau — dashboards personnalisés",
        "Configuration des triggers et tests d'alertes",
        "Supervision réseau 4G/Wi-Fi en conditions de production",
        "Gestion des alertes et résolution d'incidents en temps réel",
      ],
    },
    {
      icon: Monitor,
      categorie: "Administration Système",
      color: "from-purple-500 to-purple-700",
      items: [
        "Active Directory (AD-DS, DNS, DHCP, GPO)",
        "Windows Server — administration et configuration",
        "Linux — CLI/Bash",
        "Virtualisation Proxmox et VMware",
        "Sauvegarde et restauration de systèmes",
        "GLPI — gestion du parc et des tickets",
        "ServiceNow — base de connaissances et gestion d'incidents",
      ],
    },
    {
      icon: Terminal,
      categorie: "Développement & Outillage",
      color: "from-warm-400 to-warm-600",
      items: [
        "Scripting Bash et Python — automatisation de tâches système",
        "HTML, CSS, JavaScript, React — portfolio perso + blog BTS (Vercel)",
        "SQL / MySQL",
        "Développement d'outils internes pour l'équipe",
        "Documentation technique — base de connaissances, tutoriels vidéo",
      ],
    },
    {
      icon: ListChecks,
      categorie: "Gestion de projet & Méthodes",
      color: "from-amber-500 to-amber-700",
      items: [
        "Méthode agile (Trello/Scrum)",
        "Rédaction de documentations techniques et rapports de projet",
        "Réponse aux appels d'offres, gestion relation client",
        "Sensibilisation et formation des utilisateurs",
      ],
    },
  ]

  const parcours = [
    {
      annee: "2021 – 2024",
      titre: "Bac PRO Système et Numérique",
      lieu: "Lycée Saint Joseph Pierre Rouge",
      ville: "Montpellier",
      statut: "Obtenu",
      mention: "Mention Bien",
    },
    {
      annee: "2024 – 2026",
      titre: "BTS SIO option SISR",
      lieu: "My Digital School / ESICAD",
      ville: "Montpellier",
      statut: "En cours",
      mention: null,
    },
    {
      annee: "2026 – 2029",
      titre: "Bachelor Administrateur Réseaux",
      lieu: "EPSI",
      ville: "Montpellier",
      statut: "À venir",
      mention: null,
    },
  ]

  const certifications = [
    {
      titre: "MOOC SecNumAcadémie",
      organisme: "ANSSI",
      type: "certification" as const,
      logo: "/anssi-logo.png",
      logoFallback: "🛡️",
      link: null,
      download: "/Certification-MOOC.pdf",
      downloadLabel: "Télécharger le diplôme",
    },
    {
      titre: "Introduction à la Cybersécurité",
      organisme: "Cisco Networking Academy",
      type: "certification" as const,
      logo: "/cisco.logo.png",
      logoFallback: "🔐",
      link: "https://www.credly.com/badges/0fd07c77-dd32-4272-b926-6d0701af5bfb/linked_in_profile",
      download: null,
      downloadLabel: null,
    },
    {
      titre: "Networking Basics",
      organisme: "Cisco Networking Academy",
      type: "certification" as const,
      logo: "/cisco-networking-basics.png",
      logoFallback: "🌐",
      link: "https://www.credly.com/badges/cc048eb5-4475-4088-ab6d-519bd37ff1f3/public_url",
      download: null,
      downloadLabel: null,
    },
    {
      titre: "Bac Pro Système et Numérique",
      organisme: "Éducation Nationale – Mention Bien",
      type: "diplome" as const,
      logo: null,
      logoFallback: "🎓",
      link: null,
      download: null,
      downloadLabel: null,
    },
  ]

  const filteredCerts = certifications.filter((c) => {
    if (diploFilter === "all") return true
    if (diploFilter === "certifications") return c.type === "certification"
    return c.type === "diplome"
  })

  const statutColor = (statut: string) => {
    if (statut === "Obtenu") return "bg-green-100 text-green-700"
    if (statut === "En cours") return "bg-warm-100 text-warm-700"
    return "bg-gray-100 text-gray-500"
  }

  return (
    <div className="min-h-screen py-12">
      {/* ─── Sommaire flottant desktop ─── */}
      <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-0.5 bg-white/90 backdrop-blur-md border border-warm-200 shadow-lg rounded-2xl p-2.5 max-h-[calc(100vh-6rem)] overflow-y-auto">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              title={label}
              className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap
                transition-all duration-200 ease-out active:scale-95 overflow-hidden
                ${isActive
                  ? "bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-md"
                  : "text-muted-foreground hover:text-warm-700 hover:bg-warm-50 hover:translate-x-0.5"
                }`}
            >
              <Icon className={`h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              <span className="transition-all duration-200">{label}</span>
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white/40 rounded-r-full" />
              )}
            </button>
          )
        })}
      </aside>

      {/* ─── Sommaire mobile (bouton flottant) ─── */}
      <div className="xl:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-12 h-12 bg-gradient-to-br from-warm-500 to-warm-600 text-white rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 ease-out"
          aria-label="Sommaire"
        >
          <span className={`transition-all duration-200 ${tocOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
            {tocOpen ? <X className="h-5 w-5" /> : <BookMarked className="h-5 w-5" />}
          </span>
        </button>
        {tocOpen && (
          <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-md border border-warm-200 shadow-xl rounded-2xl p-2.5 w-52 flex flex-col gap-0.5 animate-slide-in-right">
            {sections.map(({ id, label, icon: Icon }, idx) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{ animationDelay: `${idx * 0.03}s` }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ease-out active:scale-95 text-left
                    ${isActive
                      ? "bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow"
                      : "text-muted-foreground hover:text-warm-700 hover:bg-warm-50 hover:pl-4"
                    }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            À Propos de Moi
          </h1>
          <p className="text-xl text-muted-foreground">Technicien IT passionné · Cybersécurité & Réseaux</p>
        </div>

        {/* Identité + Contact */}
        <div id="section-profil" className="glass-card rounded-3xl p-8 mb-8 animate-scale-in group scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-3xl mx-auto mb-4 overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img src="/logo.png" alt="Logo Mattéo Grech" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-bold text-warm-700">Mattéo Grech</h2>
              <p className="text-muted-foreground text-sm mt-1">En recherche d'alternance pour la rentrée 2026</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Passionné par la cybersécurité et son évolution, je relève chaque défi avec curiosité et détermination.
                En recherche d'alternance pour la rentrée 2026.
              </p>
              <div className="space-y-3">
                <a href="tel:0634042846" className="flex items-center gap-3 text-muted-foreground hover:text-warm-700 transition-colors group/item">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center group-hover/item:bg-warm-200 transition-colors">
                    <Phone className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>06 34 04 28 46</span>
                </a>
                <a href="mailto:matteo1grech@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-warm-700 transition-colors group/item">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center group-hover/item:bg-warm-200 transition-colors">
                    <Mail className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>matteo1grech@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>Montpellier 34000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div id="section-softskills" className="glass-card rounded-3xl p-8 mb-8 animate-fade-in scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 text-warm-700">Soft skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105">
                <span className="text-3xl mb-2">{s.emoji}</span>
                <span className="font-semibold text-warm-700 text-sm text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div id="section-interets" className="glass-card rounded-3xl p-8 mb-8 animate-fade-in scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 text-warm-700">Centres d'intérêt</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interets.map((interet, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center mb-3">
                  <interet.icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-warm-700 text-sm text-center">{interet.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences techniques */}
        <div id="section-competences" className="mb-8 scroll-mt-24">
          {/* En-tête + filtres thèmes */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-warm-700">Compétences techniques</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCompTheme("all")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
                  ${compTheme === "all"
                    ? "bg-warm-500 text-white shadow-md"
                    : "bg-white/80 border border-warm-200 text-muted-foreground hover:bg-warm-50 hover:text-warm-700"
                  }`}
              >
                Tout
              </button>
              {competences.map((cat) => {
                const Icon = cat.icon
                const isActive = compTheme === cat.categorie
                return (
                  <button
                    key={cat.categorie}
                    onClick={() => setCompTheme(isActive ? "all" : cat.categorie)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
                      ${isActive
                        ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                        : "bg-white/80 border border-warm-200 text-muted-foreground hover:bg-warm-50 hover:text-warm-700"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    {cat.categorie.split(" ")[0]}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grille */}
          {compTheme === "all" ? (
            <div className="grid md:grid-cols-2 gap-6">
              {competences.map((cat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-3xl p-6 card-hover animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  onClick={() => setCompTheme(cat.categorie)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <cat.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-warm-700">{cat.categorie}</h3>
                    <span className="ml-auto text-xs text-muted-foreground">{cat.items.length} compétences →</span>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-warm-500 rounded-full flex-shrink-0 mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            (() => {
              const cat = competences.find(c => c.categorie === compTheme)!
              return (
                <div className="glass-card rounded-3xl p-8 animate-scale-in">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <cat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-warm-700">{cat.categorie}</h3>
                      <p className="text-sm text-muted-foreground">{cat.items.length} compétences</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 bg-warm-50 rounded-2xl border border-warm-100">
                        <div className={`w-2 h-2 bg-gradient-to-br ${cat.color} rounded-full flex-shrink-0 mt-1.5`}></div>
                        <span className="text-sm text-warm-800 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()
          )}
        </div>

        {/* Parcours scolaire */}
        <div id="section-formation" className="glass-card rounded-3xl p-8 mb-8 animate-fade-in scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
            <GraduationCap className="h-6 w-6" />
            Parcours scolaire
          </h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-400 to-warm-200 rounded-full"></div>
            <div className="space-y-6">
              {parcours.map((etape, index) => (
                <div key={index} className="relative pl-12 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className={`absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center ${
                    etape.statut === "Obtenu" ? "bg-green-500" :
                    etape.statut === "En cours" ? "bg-warm-500" : "bg-gray-300"
                  }`}>
                    {etape.statut === "Obtenu" && <CheckCircle className="h-3 w-3 text-white" />}
                  </div>
                  <div className="glass-card rounded-2xl p-5 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />{etape.annee}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statutColor(etape.statut)}`}>{etape.statut}</span>
                      {etape.mention && <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">{etape.mention}</span>}
                    </div>
                    <h3 className="font-bold text-warm-700">{etape.titre}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{etape.lieu} — {etape.ville}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications / Diplômes */}
        <div id="section-certifications" className="glass-card rounded-3xl p-8 mb-8 animate-scale-in scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-warm-700 flex items-center gap-3">
              <Award className="h-6 w-6" />
              Certifications &amp; Diplômes
            </h2>
            {/* Filtres */}
            <div className="flex gap-2 flex-wrap">
              {([
                { label: "Tout", value: "all" as DiploFilter },
                { label: "Certifications", value: "certifications" as DiploFilter },
                { label: "Diplômes", value: "diplomes" as DiploFilter },
              ]).map((f) => (
                <button
                  key={f.value}
                  onClick={() => setDiploFilter(f.value)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 ${
                    diploFilter === f.value
                      ? "bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow"
                      : "bg-warm-50 border border-warm-200 text-muted-foreground hover:border-warm-400 hover:text-warm-700"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredCerts.map((cert, i) => {
              const CardWrapper = cert.link
                ? ({ children }: { children: React.ReactNode }) => (
                    <a href={cert.link!} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105 text-center cursor-pointer">
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div className="flex flex-col items-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105 text-center">
                      {children}
                    </div>
                  )
              return (
                <CardWrapper key={i}>
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.organisme}
                      className="h-16 w-16 object-contain mb-3 rounded-xl"
                      onError={(e) => {
                        const img = e.currentTarget
                        if (img.src.includes("cisco.logo.png")) {
                          img.src = "https://images.credly.com/badges/0fd07c77-dd32-4272-b926-6d0701af5bfb/image.png"
                          return
                        }
                        img.style.display = "none"
                        const span = img.nextElementSibling as HTMLElement
                        if (span) span.style.display = "block"
                      }}
                    />
                  ) : null}
                  <span className={`text-3xl mb-3 ${cert.logo ? "hidden" : ""}`}>{cert.logoFallback}</span>
                  <p className="font-bold text-warm-700 text-sm mb-1">{cert.titre}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.organisme}</p>
                  {cert.link && (
                    <span className="text-xs text-blue-600 font-medium">Voir le badge ↗</span>
                  )}
                  {cert.download && (
                    <a
                      href={cert.download}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-warm-600 hover:text-warm-800 font-medium mt-1 transition-colors"
                    >
                      <Download className="h-3 w-3" />
                      {cert.downloadLabel}
                    </a>
                  )}
                </CardWrapper>
              )
            })}
          </div>
        </div>

        {/* CV Section */}
        <div id="section-cv" className="glass-card rounded-3xl p-8 mb-8 animate-fade-in scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-warm-700 flex items-center gap-3">
              <FileText className="h-6 w-6" />
              Mon CV
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCV(!showCV)}
                className="px-4 py-2 border-2 border-warm-400 text-warm-600 rounded-xl font-medium text-sm hover:bg-warm-50 transition-all duration-200"
              >
                {showCV ? "Masquer l'aperçu" : "Afficher l'aperçu"}
              </button>
              <a
                href="/CV-GRECH-Matteo.pdf"
                download="CV-GRECH-Matteo.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warm-500 to-warm-600 text-white rounded-xl font-medium text-sm hover:from-warm-600 hover:to-warm-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                Télécharger le CV
              </a>
            </div>
          </div>

          {showCV && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-warm-200 animate-fade-in">
              <iframe
                src="/CV-GRECH-Matteo.pdf"
                className="w-full h-[800px]"
                title="CV Mattéo Grech"
                onError={() => {}}
              />
            </div>
          )}

          {!showCV && (
            <p className="text-sm text-muted-foreground animate-fade-in">
              Cliquez sur <strong>Afficher l'aperçu</strong> pour visualiser le CV directement, ou <strong>Télécharger</strong> pour l'enregistrer.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-3 text-warm-700">En recherche d'alternance pour la rentrée 2026</h2>
          <p className="text-muted-foreground mb-6">
            Disponible pour une alternance en administration système, réseau ou cybersécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="ios-button">Me contacter</Link>
            <Link to="/projets" className="px-6 py-3 border-2 border-warm-500 text-warm-600 rounded-2xl font-semibold hover:bg-warm-50 transition-all duration-200">
              Voir mes projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APropos
