import { ArrowRight, ArrowUpRight, Shield, Network, Monitor, Bot, BookOpen, Server } from "lucide-react"
import { Link } from "react-router-dom"
import { DOCS_URL } from "@/lib/links"

const enCeMoment = [
  {
    icon: Bot,
    tag: "En cours",
    title: "Agent IA de pentest",
    description:
      "Un LLM local (Qwen3-8B, abliteré avec Heretic) piloté par un harnais Python qui exécute des commandes sur une Kali de lab isolé : méthodo PTES, garde-fous, CVE et GTFOBins.",
    href: `${DOCS_URL}/projets/ia-heretic/`,
    cta: "Lire la doc",
  },
  {
    icon: BookOpen,
    tag: "23 writeups",
    title: "Writeups CTF",
    description:
      "Mes résolutions de challenges (crypto, forensic, reverse, web) documentées pour garder le pourquoi de chaque faille, pas seulement le flag.",
    href: `${DOCS_URL}/ctf/`,
    cta: "Voir les writeups",
  },
  {
    icon: Server,
    tag: "Lab",
    title: "Homelab sécurité",
    description:
      "OPNsense / pfSense en HA, Active Directory avec tiering T0-T2, SIEM Wazuh avec Active Response, supervision Zabbix.",
    href: "/projets",
    cta: "Voir les projets",
    internal: true,
  },
]

const domaines = [
  { icon: Shield, title: "Cybersécurité", description: "SIEM/XDR Wazuh, IDS/IPS, durcissement AD, pentest en lab" },
  { icon: Network, title: "Réseau", description: "SD-WAN, multi-FAI, switching multi-constructeurs, pare-feu" },
  { icon: Monitor, title: "Systèmes", description: "Active Directory, Windows Server, Linux, virtualisation" },
  { icon: Bot, title: "IA & automatisation", description: "LLM locaux (Ollama), agents Python, RAG" },
]

const cardLinkClass =
  "mt-auto inline-flex items-center gap-1 text-sm font-semibold text-warm-700 hover:text-warm-900 transition-colors"

const Accueil = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-800 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Technicien réseau N2 · Bachelor cybersécurité en alternance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Réseau, sécurité offensive
            <br />
            <span className="bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
              et IA locale.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
            Le jour, je traite les incidents réseau d'une infrastructure de plus de 1 500 sites. Le reste du temps, je
            construis un lab de pentest piloté par IA et je résous des CTF. Ici : mes projets, et la base de
            connaissances où je documente tout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projets" className="ios-button inline-flex items-center justify-center">
              Voir les projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border-2 border-warm-500 text-warm-700 font-semibold hover:bg-warm-50 transition-all duration-200"
            >
              Base de connaissances
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* En ce moment */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground">En ce moment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {enCeMoment.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-3xl card-hover animate-scale-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-warm-500 to-warm-700 rounded-2xl flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-warm-100 text-warm-800">{item.tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{item.description}</p>
                {item.internal ? (
                  <Link to={item.href} className={cardLinkClass}>
                    {item.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardLinkClass}>
                    {item.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Domaines</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domaines.map((d) => (
              <div key={d.title} className="glass-card p-5 rounded-2xl">
                <d.icon className="h-5 w-5 text-warm-600 mb-3" />
                <h3 className="font-bold mb-1 text-foreground">{d.title}</h3>
                <p className="text-muted-foreground text-sm">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-12 pb-20">
        <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Un projet, une question, un CTF à faire ensemble ?</h2>
            <p className="text-muted-foreground text-sm">Objectif : SOC puis Red Team. Je suis preneur d'échanges avec des équipes sécu.</p>
          </div>
          <Link to="/contact" className="ios-button inline-flex items-center justify-center whitespace-nowrap">
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Accueil
