import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from "lucide-react"

const Diplomes = () => {
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
    },
    {
      titre: "Introduction à la Cybersécurité",
      organisme: "Cisco",
      description: "Certification officielle Cisco couvrant les fondamentaux de la cybersécurité et la protection des réseaux.",
      icon: "🔐",
    },
    {
      titre: "Bac Pro SN",
      organisme: "Éducation Nationale",
      description: "Baccalauréat Professionnel Système et Numérique – Mention Bien.",
      icon: "🎓",
    },
  ]

  const statutColor = (statut: string) => {
    if (statut === "Obtenu") return "bg-green-100 text-green-700"
    if (statut === "En cours") return "bg-warm-100 text-warm-700"
    return "bg-gray-100 text-gray-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Diplômes & Formations
          </h1>
          <p className="text-xl text-muted-foreground">Parcours scolaire et certifications</p>
        </div>

        {/* Parcours scolaire */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
            <GraduationCap className="h-6 w-6" />
            Parcours scolaire
          </h2>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-400 to-warm-200 rounded-full"></div>

            <div className="space-y-8">
              {parcours.map((etape, index) => (
                <div key={index} className="relative pl-16 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Point */}
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

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
            <Award className="h-6 w-6" />
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-6 card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-warm-700 mb-1">{cert.titre}</h3>
                <p className="text-sm font-medium text-primary mb-3">{cert.organisme}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Diplomes
