import { useState } from "react"
import { Eye, Globe, ShieldAlert, Zap, FileSearch, ExternalLink, Star, ChevronDown, ChevronUp, CheckCircle, Smartphone } from "lucide-react"

type VeilleFilter = "all" | "detection" | "threat" | "vuln" | "offensif" | "forensic"

interface VeilleSource {
  nom: string
  description: string
  categorie: Exclude<VeilleFilter, "all">
  lien?: string
  priorite: "principal" | "secondaire"
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
    nom: "MITRE ATT&CK",
    description: "Référentiel mondial des TTPs : nouvelles techniques, groupes d'attaquants et mises à jour des tactiques.",
    categorie: "detection",
    lien: "https://attack.mitre.org",
    priorite: "principal",
  },
  {
    nom: "Wazuh Releases & Changelog",
    description: "Suivi de l'évolution de Wazuh : nouvelles règles, correctifs de sécurité et améliorations du moteur de détection.",
    categorie: "detection",
    lien: "https://github.com/wazuh/wazuh/releases",
    priorite: "principal",
  },
  {
    nom: "Règles Sigma",
    description: "Règles de détection SIEM universelles directement applicables sur Wazuh et d'autres plateformes.",
    categorie: "detection",
    lien: "https://github.com/SigmaHQ/sigma",
    priorite: "secondaire",
  },
  {
    nom: "Snort / Suricata Rules",
    description: "Nouvelles signatures IDS/IPS pour la détection réseau — règles communautaires et officielles.",
    categorie: "detection",
    priorite: "secondaire",
  },

  // ── Threat Intelligence ──────────────────────────────────────────────────
  {
    nom: "ANSSI — Rapports techniques",
    description: "Rapports sur des incidents réels français : très concrets, directement applicables en contexte SOC.",
    categorie: "threat",
    lien: "https://www.ssi.gouv.fr/actualite/",
    priorite: "principal",
  },
  {
    nom: "Mandiant / Google TAG",
    description: "Analyses approfondies de groupes APT, campagnes actives et rapports de threat intelligence.",
    categorie: "threat",
    lien: "https://cloud.google.com/blog/topics/threat-intelligence",
    priorite: "secondaire",
  },
  {
    nom: "Any.run / MalwareBazaar",
    description: "Nouvelles souches de malwares, comportements observés en sandbox, hashes et IOC frais.",
    categorie: "threat",
    lien: "https://bazaar.abuse.ch",
    priorite: "secondaire",
  },
  {
    nom: "VirusTotal",
    description: "Indicateurs de compromission (IOC), hashes de fichiers suspects, domaines et IPs malveillants.",
    categorie: "threat",
    lien: "https://www.virustotal.com",
    priorite: "secondaire",
  },

  // ── Vulnérabilités & Exploitation ────────────────────────────────────────
  {
    nom: "CISA KEV — Known Exploited Vulnerabilities",
    description: "Liste des CVE activement exploitées dans la nature — priorité absolue pour tout profil SOC/défense.",
    categorie: "vuln",
    lien: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    priorite: "principal",
  },
  {
    nom: "CVE NIST NVD",
    description: "Nouvelles CVE publiées avec scores CVSS, vecteurs d'attaque et détails techniques officiels.",
    categorie: "vuln",
    lien: "https://nvd.nist.gov",
    priorite: "principal",
  },
  {
    nom: "Exploit-DB",
    description: "PoC publics disponibles pour comprendre ce que les attaquants peuvent concrètement utiliser.",
    categorie: "vuln",
    lien: "https://www.exploit-db.com",
    priorite: "secondaire",
  },

  // ── Offensif ─────────────────────────────────────────────────────────────
  {
    nom: "HackTricks",
    description: "Référence absolue sur les techniques offensives : recon, privesc, lateral movement, persistance — indispensable pour savoir quoi détecter.",
    categorie: "offensif",
    lien: "https://book.hacktricks.xyz",
    priorite: "principal",
  },
  {
    nom: "GTFOBins / LOLBAS",
    description: "Binaires légitimes détournés par les attaquants (Living off the Land) — essentiel pour la détection comportementale.",
    categorie: "offensif",
    lien: "https://gtfobins.github.io",
    priorite: "secondaire",
  },
  {
    nom: "PayloadsAllTheThings",
    description: "Bibliothèque exhaustive de payloads et techniques d'exploitation classées par catégorie.",
    categorie: "offensif",
    lien: "https://github.com/swisskyrepo/PayloadsAllTheThings",
    priorite: "secondaire",
  },
  {
    nom: "PWNX / Root-Me / TryHackMe",
    description: "Challenges pratiques orientés red team — très formateurs pour comprendre les attaques par la pratique.",
    categorie: "offensif",
    lien: "https://tryhackme.com",
    priorite: "secondaire",
  },
  {
    nom: "OffSec Blog / Rapid7 Blog",
    description: "Analyses de techniques d'attaque récentes, exploits documentés et retours d'expérience offensifs.",
    categorie: "offensif",
    priorite: "secondaire",
  },
  {
    nom: "VX-Underground",
    description: "Samples de malwares réels et analyses détaillées — pour comprendre leur fonctionnement interne.",
    categorie: "offensif",
    lien: "https://www.vx-underground.org",
    priorite: "secondaire",
  },

  // ── Logs & Forensic ──────────────────────────────────────────────────────
  {
    nom: "DFIR.report",
    description: "Rapports d'incidents réels avec timeline complète, logs analysés et IOC — de l'or pour un profil défense.",
    categorie: "forensic",
    lien: "https://thedfirreport.com",
    priorite: "principal",
  },
  {
    nom: "SANS Blog / Eric Conrad",
    description: "Forensic, analyse de logs, blue team — référence incontournable pour la défense et l'investigation.",
    categorie: "forensic",
    lien: "https://www.sans.org/blog/",
    priorite: "secondaire",
  },
]

const feedlySteps = [
  {
    num: "01",
    titre: "Créer un compte",
    detail: "Inscris-toi gratuitement sur feedly.com ou télécharge l'app mobile. Le plan gratuit suffit pour démarrer.",
  },
  {
    num: "02",
    titre: "Ajouter des flux RSS",
    detail: "Clique sur « Add Content », colle l'URL d'un site ou son flux RSS (ex: cert.ssi.gouv.fr/feed/). Feedly le trouve automatiquement.",
  },
  {
    num: "03",
    titre: "Organiser en dossiers",
    detail: "Groupe tes sources par thème : Cybersécurité, Threat Intel, IA… Tu vois directement combien d'articles non lus attendent par catégorie.",
  },
  {
    num: "04",
    titre: "Prioriser les sources clés",
    detail: "Épingle les sources incontournables (CERT-FR, CISA…) en haut de ta liste. Utilise le marquage « Lu plus tard » pour les articles à approfondir.",
  },
  {
    num: "05",
    titre: "Instaurer une routine",
    detail: "5 min le matin : parcourir les titres. 15 min le soir : lire les alertes critiques en profondeur. Consistance > quantité.",
  },
]

const Veille = () => {
  const [activeFilter, setActiveFilter] = useState<VeilleFilter>("all")
  const [feedlyOpen, setFeedlyOpen] = useState(false)
  const [feedlyImg, setFeedlyImg] = useState(0)

  const filtered = activeFilter === "all" ? sources : sources.filter(s => s.categorie === activeFilter)
  const principal = filtered.filter(s => s.priorite === "principal")
  const secondaire = filtered.filter(s => s.priorite === "secondaire")

  const getCat = (v: Exclude<VeilleFilter, "all">) => categories.find(c => c.value === v)!

  const SourceCard = ({ source, i }: { source: VeilleSource; i: number }) => {
    const cat = getCat(source.categorie)
    const Icon = cat.icon
    return (
      <div
        className={`glass-card rounded-3xl p-5 card-hover animate-scale-in flex flex-col gap-3
          ${source.priorite === "principal" ? "ring-2 ring-warm-300/60" : ""}`}
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cat.badge}`}>
              <Icon className="h-3 w-3" />
              {cat.label}
            </span>
            {source.priorite === "principal" && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                Principale
              </span>
            )}
          </div>
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
  }

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

        {/* ── Veilles Principales ── */}
        {principal.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <h2 className="text-lg font-bold text-warm-700">Veilles Principales</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                {principal.length} source{principal.length > 1 ? "s" : ""}
              </span>
              <div className="flex-1 h-px bg-amber-200 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {principal.map((source, i) => (
                <SourceCard key={i} source={source} i={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Sources Complémentaires ── */}
        {secondaire.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-bold text-muted-foreground">Sources Complémentaires</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                {secondaire.length} source{secondaire.length > 1 ? "s" : ""}
              </span>
              <div className="flex-1 h-px bg-gray-200 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {secondaire.map((source, i) => (
                <SourceCard key={i} source={source} i={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Ma veille avec Feedly ── */}
        <div className="mt-12">
          {/* En-tête accordéon */}
          <button
            onClick={() => setFeedlyOpen(o => !o)}
            className="w-full flex items-center justify-between gap-4 glass-card rounded-3xl px-8 py-5 hover:shadow-md transition-all duration-200 active:scale-[0.99] group"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-bold text-warm-700 group-hover:text-warm-900 transition-colors">
                  Ma mise en place avec Feedly
                </h2>
                <p className="text-sm text-muted-foreground">Captures d'écran de mon Feedly + mini tuto veille efficace</p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-xl bg-warm-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${feedlyOpen ? "rotate-180" : ""}`}>
              <ChevronDown className="h-4 w-4 text-warm-600" />
            </div>
          </button>

          {/* Corps dépliant */}
          {feedlyOpen && (
            <div className="mt-4 grid lg:grid-cols-2 gap-6 animate-scale-in">

              {/* Galerie screenshots */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-warm-700 mb-4 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-orange-500" />
                  Mon Feedly en pratique
                </h3>
                {/* Image principale */}
                <div className="rounded-2xl overflow-hidden border border-warm-200 mb-3 bg-gray-50">
                  <img
                    src={`/feedly-${feedlyImg + 1}.jpg`}
                    alt={`Feedly screenshot ${feedlyImg + 1}`}
                    className="w-full object-contain max-h-96"
                  />
                </div>
                {/* Miniatures */}
                <div className="flex gap-2">
                  {[0, 1, 2].map(i => (
                    <button
                      key={i}
                      onClick={() => setFeedlyImg(i)}
                      className={`flex-1 rounded-xl overflow-hidden border-2 transition-all duration-150
                        ${feedlyImg === i ? "border-orange-400 shadow-md scale-[1.03]" : "border-warm-200 hover:border-orange-300"}`}
                    >
                      <img
                        src={`/feedly-${i + 1}.jpg`}
                        alt={`Miniature ${i + 1}`}
                        className="w-full h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  {feedlyImg === 0 && "Dossier Cybersécurité avec 9 sources actives (87 articles)"}
                  {feedlyImg === 1 && "Dossier IA — Hugging Face, MIT Technology Review, Import AI…"}
                  {feedlyImg === 2 && "Ajout d'un flux RSS — ici cert.ssi.gouv.fr/feed/ (CERT-FR)"}
                </p>
              </div>

              {/* Mini tuto */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-warm-700 mb-5 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Faire une veille efficace avec Feedly
                </h3>
                <ol className="space-y-4">
                  {feedlySteps.map(step => (
                    <li key={step.num} className="flex gap-4">
                      <span className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 text-white text-xs font-bold rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                        {step.num}
                      </span>
                      <div>
                        <p className="font-semibold text-warm-700 text-sm leading-snug">{step.titre}</p>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 p-3 bg-orange-50 rounded-2xl border border-orange-100">
                  <p className="text-xs text-orange-700 font-medium">
                    Feedly agrège automatiquement les flux RSS — plus besoin de visiter chaque site, tout arrive au même endroit.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Veille
