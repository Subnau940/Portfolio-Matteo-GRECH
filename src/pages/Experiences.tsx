import React, { useState } from "react"
import { Calendar, MapPin, Briefcase, GraduationCap, Building2 } from "lucide-react"

type ExpType = "alternance" | "stage" | "job"

interface Experience {
  type: ExpType
  titre: string
  entreprise: string
  lieu: string
  periode: string
  annee: number
  duree: string
  description: string
  missions: string[]
  competences: string[]
}

const experiences: Experience[] = [
  {
    type: "alternance",
    titre: "Technicien Helpdesk Réseau N1-N2",
    entreprise: "INFO.U",
    lieu: "Montpellier",
    periode: "2024 – 2026",
    annee: 2024,
    duree: "2 ans (alternance)",
    description: "Support et supervision d'une infrastructure réseau nationale pour des points de vente.",
    missions: [
      "Support incidents systèmes d'encaissement et réseau (N1/N2)",
      "Supervision réseau : 4G, Wi-Fi, VPN, backup",
      "Déploiement et support de projets informatiques terrain",
      "Gestion des tickets et suivi des incidents",
    ],
    competences: ["Helpdesk N1/N2", "Supervision réseau", "4G / Wi-Fi / VPN", "Déploiement", "Support projet"],
  },
  {
    type: "stage",
    titre: "Technicien Support SAV",
    entreprise: "Maintronic",
    lieu: "Montpellier",
    periode: "2024",
    annee: 2024,
    duree: "1 mois",
    description: "Service informatique SAV multi-supports pour particuliers et entreprises.",
    missions: [
      "Déploiement de postes de travail",
      "SAV laptop, imprimante, tablette, téléphone",
      "Diagnostic et réparation matériel",
      "Assistance technique utilisateurs",
    ],
    competences: ["SAV", "Déploiement poste", "Réparation matériel", "Support client"],
  },
  {
    type: "job",
    titre: "Agent de quai – Livraison",
    entreprise: "GLS",
    lieu: "Montpellier",
    periode: "2023",
    annee: 2023,
    duree: "2 mois et demi",
    description: "Job d'été au sein du réseau de livraison GLS.",
    missions: [
      "Agent de quai : tri et chargement de colis",
      "Relais colis et gestion des dépôts",
      "Tournées de livraison",
    ],
    competences: ["Logistique", "Organisation", "Travail en équipe"],
  },
  {
    type: "stage",
    titre: "Technicien Support IT",
    entreprise: "CNRS",
    lieu: "Montpellier",
    periode: "2023",
    annee: 2023,
    duree: "2 mois",
    description: "Support utilisateur au sein du service informatique de la délégation régionale CNRS.",
    missions: [
      "Support utilisateur et gestion des tickets GLPI",
      "Administration Active Directory / GPO",
      "Supervision et inventaire du parc informatique",
      "Configuration, installation et réparation (Linux / macOS / Windows)",
    ],
    competences: ["GLPI", "Active Directory", "GPO", "Multi-OS", "Ticketing"],
  },
  {
    type: "stage",
    titre: "Technicien Support IT",
    entreprise: "Dell Technologies",
    lieu: "Montpellier",
    periode: "2022",
    annee: 2022,
    duree: "1 mois",
    description: "Support technique et maintenance du parc informatique interne.",
    missions: [
      "Support utilisateurs et maintenance du parc",
      "Déploiement de périphériques",
      "Formatage et réinstallation Windows",
    ],
    competences: ["Support IT", "Déploiement", "Windows", "Maintenance parc"],
  },
  {
    type: "stage",
    titre: "Technicien Support N1",
    entreprise: "SPIE Informatique",
    lieu: "Montpellier",
    periode: "2021",
    annee: 2021,
    duree: "5 semaines",
    description: "Service de maintenance informatique N1 pour un prestataire multi-clients.",
    missions: [
      "Prise en charge de tickets et incidents",
      "Formatage et configuration de postes Windows",
      "Maintenance préventive du parc",
    ],
    competences: ["Support N1", "Ticketing", "Windows", "Maintenance"],
  },
]

const typeConfig: Record<ExpType, { label: string; color: string; activeBg: string; icon: React.ElementType }> = {
  alternance: { label: "Alternance", color: "bg-green-500 text-white", activeBg: "bg-green-500", icon: Building2 },
  stage: { label: "Stage", color: "bg-primary text-primary-foreground", activeBg: "bg-primary", icon: GraduationCap },
  job: { label: "Job d'été", color: "bg-warm-500 text-white", activeBg: "bg-warm-500", icon: Briefcase },
}

const filters: { label: string; value: ExpType | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Alternance", value: "alternance" },
  { label: "Stage", value: "stage" },
  { label: "Job d'été", value: "job" },
]

const Experiences = () => {
  const [activeFilter, setActiveFilter] = useState<ExpType | "all">("all")

  const filtered = [...experiences]
    .filter((e) => activeFilter === "all" || e.type === activeFilter)
    .sort((a, b) => b.annee - a.annee)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h1>
          <p className="text-xl text-muted-foreground">Alternance, stages et expériences terrain</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground text-sm">Expériences</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground text-sm">Entreprises</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary mb-2">3 ans</div>
            <p className="text-muted-foreground text-sm">d'expérience</p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                activeFilter === f.value
                  ? "bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-lg"
                  : "bg-white border border-warm-200 text-muted-foreground hover:border-warm-400 hover:text-warm-700"
              }`}
            >
              {f.label}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeFilter === f.value ? "bg-white/20" : "bg-warm-100 text-warm-600"}`}>
                {f.value === "all" ? experiences.length : experiences.filter(e => e.type === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Liste */}
        <div className="space-y-8">
          {filtered.map((exp, index) => {
            const config = typeConfig[exp.type]
            return (
              <div
                key={`${exp.entreprise}-${exp.annee}`}
                className="glass-card rounded-3xl p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* En-tête */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${config.color} rounded-2xl flex items-center justify-center`}>
                        {React.createElement(config.icon, { className: "h-5 w-5" })}
                      </div>
                      <span className={`px-3 py-1 ${config.color} rounded-full text-xs font-semibold`}>
                        {config.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-warm-700">{exp.titre}</h3>
                    <h4 className="text-base font-semibold text-primary mb-3">{exp.entreprise}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.lieu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.periode} · {exp.duree}</span>
                      </div>
                    </div>
                  </div>

                  {/* Détail */}
                  <div className="lg:w-2/3">
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-sm">Missions :</h5>
                      <ul className="space-y-1.5">
                        {exp.missions.map((mission, mi) => (
                          <li key={mi} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-warm-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.competences.map((comp, ci) => (
                        <span key={ci} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experiences
