import { useState } from "react"
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react"

type FilterType = "all" | "diplomes" | "certifications"

const Diplomes = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const parcours = [
    {
      annee: "2021 – 2024",
      titre: "Bac PRO Système et Numérique",
      lieu: "Lycée Saint Joseph Pierre Rouge",
      ville: "Montpellier",
      statut: "Obtenu",
      mention: "Mention Bien",
      type: "bac",
    },
    {
      annee: "2024 – 2026",
      titre: "BTS SIO option SISR",
      lieu: "My Digital School / ESICAD",
      ville: "Montpellier",
      statut: "En cours",
      mention: null,
      type: "bts",
    },
    {
      annee: "2026 – 2029",
      titre: "Bachelor Administrateur Réseaux",
      lieu: "EPSI",
      ville: "Montpellier",
      statut: "À venir",
      mention: null,
      type: "bachelor",
    },
  ]

  const certifications = [
    {
      titre: "MOOC SecNumAcadémie",
      organisme: "ANSSI",
      description: "Formation nationale en cybersécurité délivrée par l'Agence Nationale de la Sécurité des Systèmes d'Information.",
      icon: "🛡️",
      image: null,
      link: null,
    },
    {
      titre: "Introduction à la Cybersécurité",
      organisme: "Cisco",
      description: "Certification officielle Cisco couvrant les fondamentaux de la cybersécurité et la protection des réseaux.",
      icon: "🔐",
      image: null,
      link: null,
    },
    {
      titre: "Bac Pro SN",
      organisme: "Éducation Nationale",
      description: "Baccalauréat Professionnel Système et Numérique – Mention Bien.",
      icon: "🎓",
      image: null,
      link: null,
    },
    {
      titre: "Networking Basics",
      organisme: "Cisco Networking Academy",
      description: "Certification Cisco couvrant les bases des réseaux informatiques : modèles OSI/TCP-IP, adressage IP, protocoles et équipements réseau.",
      icon: null,
      image: "/cisco-networking-basics.png",
      link: "https://www.credly.com/badges/cc048eb5-4475-4088-ab6d-519bd37ff1f3/public_url",
    },
  ]

  const filters: { label: string; value: FilterType; count: number }[] = [
    { label: "Tout", value: "all", count: parcours.length + certifications.length },
    { label: "Diplômes", value: "diplomes", count: parcours.length },
    { label: "Certifications", value: "certifications", count: certifications.length },
  ]

  const statutColor = (statut: string) => {
    if (statut === "Obtenu") return "bg-green-100 text-green-700"
    if (statut === "En cours") return "bg-warm-100 text-warm-700"
    return "bg-gray-100 text-gray-500"
  }

  const showDiplomes = activeFilter === "all" || activeFilter === "diplomes"
  const showCertifications = activeFilter === "all" || activeFilter === "certifications"

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Diplômes & Formations
          </h1>
          <p className="text-xl text-muted-foreground">Parcours scolaire et certifications</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 ${
                activeFilter === f.value
                  ? "bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-lg"
                  : "bg-white border border-warm-200 text-muted-foreground hover:border-warm-400 hover:text-warm-700"
              }`}
            >
              {f.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === f.value ? "bg-white/20 text-white" : "bg-warm-100 text-warm-700"
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Parcours scolaire */}
        {showDiplomes && (
          <section className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              Parcours scolaire
            </h2>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-400 to-warm-200 rounded-full"></div>

              <div className="space-y-8">
                {parcours.map((etape, index) => (
                  <div key={index} className="relative pl-16 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className={`absolute left-3 top-6 w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center ${
                      etape.statut === "Obtenu" ? "bg-green-500" :
                      etape.statut === "En cours" ? "bg-warm-500" : "bg-gray-300"
                    }`}>
                      {etape.statut === "Obtenu" && <CheckCircle className="h-3 w-3 text-white" />}
                    </div>

                    <div className="glass-card rounded-3xl p-6 card-hover">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {etape.annee}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statutColor(etape.statut)}`}>
                          {etape.statut}
                        </span>
                        {etape.mention && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                            {etape.mention}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-warm-700 mb-2">{etape.titre}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{etape.lieu} — {etape.ville}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {showCertifications && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
              <Award className="h-6 w-6" />
              Certifications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card rounded-3xl p-6 card-hover animate-scale-in flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {cert.image ? (
                    <div className="flex justify-center mb-4">
                      <img
                        src={cert.image}
                        alt={cert.titre}
                        className="w-24 h-24 object-contain rounded-xl"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl mb-4">{cert.icon}</div>
                  )}
                  <h3 className="font-bold text-warm-700 mb-1">{cert.titre}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{cert.organisme}</p>
                  <p className="text-sm text-muted-foreground flex-1">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-1.5 text-sm text-warm-600 hover:text-warm-800 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Voir le badge
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Diplomes
