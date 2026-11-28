import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { DOCS_URL } from "@/lib/links"
import { PROJETS } from "@/data/projets"
import { StatutBadge } from "@/components/StatutBadge"

const enAvant = ["agent-ia-pentest", "writeups-ctf", "insider-threat"]
  .map((id) => PROJETS.find((p) => p.id === id)!)
  .filter(Boolean)

const domaines = [
  { titre: "Offensif", detail: "Pentest en lab (Kali, nmap, Metasploit), CTF : crypto, web, forensic, reverse" },
  { titre: "Défensif", detail: "SIEM/XDR Wazuh, IDS/IPS, durcissement Active Directory (tiering)" },
  { titre: "Réseau", detail: "SD-WAN, multi-FAI, switching multi-constructeurs, pare-feu, haute dispo" },
  { titre: "IA & outillage", detail: "LLM locaux (Ollama), agents Python, automatisation" },
]

const Accueil = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-20 animate-fade-in">
        <p className="kicker mb-6">// technicien réseau N2 · bachelor cybersécurité</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-foreground max-w-4xl">
          Je sécurise des réseaux.
          <br />
          <span className="text-muted-foreground">J'apprends à les </span>
          <span className="text-primary">attaquer</span>
          <span className="text-muted-foreground">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Technicien réseau N2 en alternance sur une infrastructure de plus de 1 500 sites, en Bachelor Cybersécurité et
          Administrateur Réseaux. Mon cap : la Red Team. En dehors du poste, je construis un agent IA de pentest et je
          documente mes CTF.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/projets" className="ios-button">
            Voir les projets <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="ghost-button">
            Base de connaissances <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Projets en avant */}
      <section className="pb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Projets récents</h2>
          <Link to="/projets" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
            Tous les projets <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {enAvant.map((p) => (
            <Link key={p.id} to="/projets" className="glass-card card-hover rounded-xl p-6 flex flex-col">
              <StatutBadge statut={p.statut} annee={p.annee} />
              <h3 className="mt-3 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.resume}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t.toLowerCase()}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Domaines */}
      <section className="pb-20">
        <h2 className="text-xl font-semibold text-foreground mb-6">Domaines</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {domaines.map((d) => (
            <div key={d.titre} className="bg-card p-6">
              <p className="kicker mb-2">{d.titre}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="pb-8">
        <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Échangeons</h2>
            <p className="text-sm text-muted-foreground mt-1">Une question sur un projet, une opportunité, un CTF à faire ensemble.</p>
          </div>
          <Link to="/contact" className="ios-button whitespace-nowrap">Me contacter</Link>
        </div>
      </section>
    </div>
  )
}

export default Accueil
