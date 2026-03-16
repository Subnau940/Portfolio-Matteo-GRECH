import { useState } from "react"
import { Eye, Globe, ShieldAlert, Zap, FileSearch, ExternalLink } from "lucide-react"

type VeilleFilter = "all" | "detection" | "threat" | "vuln" | "offensif" | "forensic"

interface VeilleSource {
  nom: string
  description: string
  categorie: Exclude<VeilleFilter, "all">
  lien?: string
}

const categories: { value: VeilleFilter; label: string; icon: React.ElementType; badge: string; ring: string; activeBg: string }[] = [
  { value: "all",       label: "Tout",                    icon: Globe,       badge: "bg-warm-100 text-warm-700",     ring: "ring-warm-300",   activeBg: "bg-warm-500" },
  { value: "detection", label: "Détection & Analyse",     icon: Eye,         badge: "bg-blue-100 text-blue-700",     ring: "ring-blue-300",   activeBg: "bg-blue-500" },
  { value: "threat",    label: "Threat Intelligence",     icon: Globe,       badge: "bg-purple-100 text-purple-700", ring: "ring-purple-300", activeBg: "bg-purple-500" },
  { value: "vuln",      label: "Vulnérabilités",          icon: ShieldAlert, badge: "bg-red-100 text-red-700",       ring: "ring-red-300",    activeBg: "bg-red-500" },
  { value: "offensif",  label: "Offensif",                icon: Zap,         badge: "bg-orange-100 text-orange-700", ring: "ring-orange-300", activeBg: "bg-orange-500" },
  { value: "forensic",  label: "Logs & Forensic",         icon: FileSearch,  badge: "bg-green-100 text-green-700",   ring: "ring-green-300",  activeBg: "bg-green-500" },
]

const sources: VeilleSource[] = [
  // ── Détection & Analyse ──────────────────────────────────────────────────
  {
    nom: "Règles Sigma",
    description: "Règles de détection SIEM universelles directement applicables sur Wazuh et d'autres plateformes.",
    categorie: "detection",
    lien: "https://github.com/SigmaHQ/sigma",
  },
  {
    nom: "MITRE ATT&CK",
    description: "Référentiel mondial des TTPs : nouvelles techniques, groupes d'attaquants et mises à jour des tactiques.",
    categorie: "detection",
    lien: "https://attack.mitre.org",
  },
  {
    nom: "Wazuh Releases & Changelog",
    description: "Suivi de l'évolution de Wazuh : nouvelles règles, correctifs de sécurité et améliorations du moteur de détection.",
    categorie: "detection",
    lien: "https://github.com/wazuh/wazuh/releases",
  },
  {
    nom: "Snort / Suricata Rules",
    description: "Nouvelles signatures IDS/IPS pour la détection réseau — règles communautaires et officielles.",
    categorie: "detection",
  },

  // ── Threat Intelligence ──────────────────────────────────────────────────
  {
    nom: "Mandiant / Google TAG",
    description: "Analyses approfondies de groupes APT, campagnes actives et rapports de threat intelligence.",
    categorie: "threat",
    lien: "https://cloud.google.com/blog/topics/threat-intelligence",
  },
  {
    nom: "ANSSI — Rapports techniques",
    description: "Rapports sur des incidents réels français : très concrets, directement applicables en contexte SOC.",
    categorie: "threat",
    lien: "https://www.ssi.gouv.fr/actualite/",
  },
  {
    nom: "Any.run / MalwareBazaar",
    description: "Nouvelles souches de malwares, comportements observés en sandbox, hashes et IOC frais.",
    categorie: "threat",
    lien: "https://bazaar.abuse.ch",
  },
  {
    nom: "VirusTotal",
    description: "Indicateurs de compromission (IOC), hashes de fichiers suspects, domaines et IPs malveillants.",
    categorie: "threat",
    lien: "https://www.virustotal.com",
  },

  // ── Vulnérabilités & Exploitation ────────────────────────────────────────
  {
    nom: "CVE NIST NVD",
    description: "Nouvelles CVE publiées avec scores CVSS, vecteurs d'attaque et détails techniques officiels.",
    categorie: "vuln",
    lien: "https://nvd.nist.gov",
  },
  {
    nom: "Exploit-DB",
    description: "PoC publics disponibles pour comprendre ce que les attaquants peuvent concrètement utiliser.",
    categorie: "vuln",
    lien: "https://www.exploit-db.com",
  },
  {
    nom: "CISA KEV — Known Exploited Vulnerabilities",
    description: "Liste des CVE activement exploitées dans la nature — priorité absolue pour tout profil SOC/défense.",
    categorie: "vuln",
    lien: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
  },

  // ── Offensif ─────────────────────────────────────────────────────────────
  {
    nom: "HackTricks",
    description: "Référence absolue sur les techniques offensives : recon, privesc, lateral movement, persistance — indispensable pour savoir quoi détecter.",
    categorie: "offensif",
    lien: "https://book.hacktricks.xyz",
  },
  {
    nom: "PayloadsAllTheThings",
    description: "Bibliothèque exhaustive de payloads et techniques d'exploitation classées par catégorie.",
    categorie: "offensif",
    lien: "https://github.com/swisskyrepo/PayloadsAllTheThings",
  },
  {
    nom: "PWNX / Root-Me / TryHackMe",
    description: "Challenges pratiques orientés red team — très formateurs pour comprendre les attaques par la pratique.",
    categorie: "offensif",
    lien: "https://tryhackme.com",
  },
  {
    nom: "OffSec Blog / Rapid7 Blog",
    description: "Analyses de techniques d'attaque récentes, exploits documentés et retours d'expérience offensifs.",
    categorie: "offensif",
  },
  {
    nom: "VX-Underground",
    description: "Samples de malwares réels et analyses détaillées — pour comprendre leur fonctionnement interne.",
    categorie: "offensif",
    lien: "https://www.vx-underground.org",
  },
  {
    nom: "GTFOBins / LOLBAS",
    description: "Binaires légitimes détournés par les attaquants (Living off the Land) — essentiel pour la détection comportementale.",
    categorie: "offensif",
    lien: "https://gtfobins.github.io",
  },

  // ── Logs & Forensic ──────────────────────────────────────────────────────
  {
    nom: "DFIR.report",
    description: "Rapports d'incidents réels avec timeline complète, logs analysés et IOC — de l'or pour un profil défense.",
    categorie: "forensic",
    lien: "https://thedfirreport.com",
  },
  {
    nom: "SANS Blog / Eric Conrad",
    description: "Forensic, analyse de logs, blue team — référence incontournable pour la défense et l'investigation.",
    categorie: "forensic",
    lien: "https://www.sans.org/blog/",
  },
]

const Veille = () => {
  const [activeFilter, setActiveFilter] = useState<VeilleFilter>("all")

  const filtered = activeFilter === "all" ? sources : sources.filter(s => s.categorie === activeFilter)

  const getCat = (v: Exclude<VeilleFilter, "all">) => categories.find(c => c.value === v)!

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Veille en Cybersécurité
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les sources que je suis activement, classées par domaine
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {categories.slice(1).map((cat) => {
            const count = sources.filter(s => s.categorie === cat.value).length
            const Icon = cat.icon
            return (
              <div key={cat.value} className="glass-card rounded-2xl p-4 text-center animate-scale-in">
                <div className={`w-9 h-9 ${cat.activeBg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="text-2xl font-bold text-warm-600">{count}</div>
                <p className="text-xs text-muted-foreground leading-tight mt-0.5">{cat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeFilter === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
                  ${isActive
                    ? `${cat.activeBg} text-white shadow-md`
                    : "bg-white/80 border border-warm-200 text-muted-foreground hover:bg-warm-50 hover:text-warm-700"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
                {cat.value !== "all" && (
                  <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold
                    ${isActive ? "bg-white/25 text-white" : "bg-warm-100 text-warm-600"}`}>
                    {sources.filter(s => s.categorie === cat.value).length}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Grille de sources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((source, i) => {
            const cat = getCat(source.categorie)
            const Icon = cat.icon
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-5 card-hover animate-scale-in flex flex-col gap-3"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {/* Badge catégorie */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cat.badge}`}>
                    <Icon className="h-3 w-3" />
                    {cat.label}
                  </span>
                  {source.lien && (
                    <a
                      href={source.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-warm-600 transition-colors active:scale-95"
                      aria-label={`Ouvrir ${source.nom}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Nom */}
                {source.lien ? (
                  <a
                    href={source.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-warm-700 hover:text-warm-900 transition-colors leading-snug"
                  >
                    {source.nom}
                  </a>
                ) : (
                  <p className="font-bold text-warm-700 leading-snug">{source.nom}</p>
                )}

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{source.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Veille
