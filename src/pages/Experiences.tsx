import { PageHeader } from "@/components/PageHeader"

interface Realisation {
  titre: string
  detail: string
}

interface Poste {
  titre: string
  entreprise: string
  contrat: string
  periode: string
  contexte: string
  missions: string[]
  realisations?: Realisation[]
  stack: string[]
}

const postes: Poste[] = [
  {
    titre: "Technicien réseau N2",
    entreprise: "Info.U",
    contrat: "Alternance · Bachelor",
    periode: "Depuis sept. 2026",
    contexte:
      "Équipe Analyste Support Expert : prise en charge des incidents complexes escaladés par le N1, sur une infrastructure de plus de 1 500 points de vente.",
    missions: [
      "Diagnostic et résolution des incidents réseau complexes (switching, routage, SD-WAN, multi-FAI)",
      "Supervision des liens et des équipements, analyse des alertes",
      "Appui au N1 sur les cas bloquants",
    ],
    realisations: [
      {
        titre: "NetSonar",
        detail:
          "Outil interne de cartographie réseau : à partir des données LLDP de la base SQL Server, il génère pour chaque magasin un schéma navigable, switch par switch et port par port, sur un parc hétérogène (Juniper, Huawei, HP, Aruba).",
      },
    ],
    stack: ["SD-WAN", "Cisco Meraki", "Cradlepoint", "Cato", "Fortinet", "Juniper", "Huawei", "Aruba", "SQL Server"],
  },
  {
    titre: "Technicien helpdesk réseau N1",
    entreprise: "Info.U",
    contrat: "Alternance · BTS SIO SISR",
    periode: "2024 – 2026",
    contexte: "Hotline réseau d'un prestataire d'infrastructure pour la grande distribution.",
    missions: [
      "Prise en charge et résolution des incidents réseau et encaissement, escalade au N2",
      "Supervision 4G, Wi-Fi, VPN et liens de secours, ticketing ServiceNow",
    ],
    realisations: [
      {
        titre: "Supervision du déploiement SD-WAN",
        detail:
          "Suivi hebdomadaire des alertes Wi-Fi Cisco Meraki et routeurs 4G sur environ 1 500 points de vente : tri des faux positifs, retours d'expérience et synthèse pour l'équipe N2.",
      },
      {
        titre: "Documentation support",
        detail:
          "Procédures pour la hotline dans la base de connaissances ServiceNow, et guides simplifiés avec tutoriels vidéo pour les magasins.",
      },
    ],
    stack: ["ServiceNow", "Cisco Meraki", "4G", "VPN", "Fortinet"],
  },
]

const stages = [
  { entreprise: "CNRS", titre: "Technicien support IT", annee: "2023", detail: "Tickets GLPI, Active Directory / GPO, parc multi-OS" },
  { entreprise: "Maintronic", titre: "Technicien support SAV", annee: "2024", detail: "Déploiement de postes, diagnostic et réparation" },
  { entreprise: "Dell Technologies", titre: "Technicien support IT", annee: "2022", detail: "Support utilisateurs, maintenance du parc" },
  { entreprise: "SPIE Informatique", titre: "Technicien support N1", annee: "2021", detail: "Tickets, configuration de postes Windows" },
]

const Experiences = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        kicker="expériences"
        title="Expériences"
        intro="Deux ans d'alternance sur la même infrastructure, de la hotline N1 au support expert N2."
      />

      <div className="relative border-l border-border pl-8 space-y-10">
        {postes.map((p) => (
          <article key={p.titre} className="relative">
            <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="glass-card rounded-xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-foreground">
                  {p.titre} <span className="text-muted-foreground font-normal">· {p.entreprise}</span>
                </h2>
                <span className="font-mono text-xs text-muted-foreground">{p.periode}</span>
              </div>
              <p className="font-mono text-xs text-primary mt-1">{p.contrat}</p>
              <p className="text-sm text-muted-foreground mt-4">{p.contexte}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {p.missions.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="text-primary font-mono select-none">›</span>
                    {m}
                  </li>
                ))}
              </ul>

              {p.realisations && (
                <div className="mt-5 grid md:grid-cols-2 gap-3">
                  {p.realisations.map((r) => (
                    <div key={r.titre} className="rounded-lg border border-border bg-background/40 p-4">
                      <p className="kicker mb-1">réalisation</p>
                      <h3 className="text-sm font-semibold text-foreground">{r.titre}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">Stages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {stages.map((s) => (
            <div key={s.entreprise} className="glass-card rounded-xl p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold text-foreground">{s.entreprise}</h3>
                <span className="font-mono text-xs text-muted-foreground">{s.annee}</span>
              </div>
              <p className="text-sm text-foreground/80 mt-0.5">{s.titre}</p>
              <p className="text-xs text-muted-foreground mt-2">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-mono text-xs text-primary mr-2">autres</span>
          Jobs d'été en logistique : GLS (agent de quai, 2023) et E.Leclerc Drive (préparation de commandes, 2023).
        </p>
      </section>
    </div>
  )
}

export default Experiences
