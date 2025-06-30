
import React from "react"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

const Experiences = () => {
  const experiences = [
    {
      type: "stage",
      titre: "Stagiaire Administrateur Système",
      entreprise: "Maintronic",
      lieu: "Montpellier, France",
      periode: "1 mois",
      duree: "1 mois",
      description: "Stage informatique, prise en charge d'utilisateur, réparation de matériel informatique, réparation de tablette/téléphone",
      competences: ["Support utilisateur", "Réparation matériel", "Diagnostic pannes", "Maintenance"],
      missions: [
        "Prise en charge et assistance utilisateur",
        "Réparation de matériel informatique",
        "Réparation de tablettes et téléphones",
        "Diagnostic et résolution de pannes techniques"
      ]
    },
    {
      type: "stage",
      titre: "Stagiaire Support Informatique",
      entreprise: "CNRS",
      lieu: "Montpellier, France",
      periode: "2 x 1 mois",
      duree: "2 mois",
      description: "Stage informatique prise en charge de ticket utilisateur, Configuration informatique dépannage et réparation d'ordinateur (Linux-Mac-Os-Windows)",
      competences: ["Ticketing", "Configuration système", "Multi-OS", "Dépannage"],
      missions: [
        "Gestion et résolution de tickets utilisateur",
        "Configuration informatique multi-environnements",
        "Dépannage et réparation d'ordinateurs",
        "Support technique Linux, Mac OS et Windows"
      ]
    },
    {
      type: "stage",
      titre: "Stagiaire Technicien",
      entreprise: "Dell Technologie",
      lieu: "Montpellier, France",
      periode: "1 mois",
      duree: "1 mois",
      description: "Service technique prise en charge d'utilisateur, formattage d'ordinateur (Windows)",
      competences: ["Service technique", "Formatage", "Windows", "Support client"],
      missions: [
        "Prise en charge technique des utilisateurs",
        "Formatage et réinstallation de systèmes Windows",
        "Support client et assistance technique",
        "Maintenance préventive et corrective"
      ]
    },
    {
      type: "stage",
      titre: "Stagiaire Maintenance",
      entreprise: "SPIE Informatique",
      lieu: "Montpellier, France",
      periode: "5 semaines",
      duree: "5 semaines",
      description: "Service de maintenance informatique, formatage d'ordinateur (Windows)",
      competences: ["Maintenance informatique", "Formatage", "Windows", "Service client"],
      missions: [
        "Service de maintenance informatique préventive",
        "Formatage et configuration de postes de travail",
        "Assistance technique aux utilisateurs",
        "Gestion du parc informatique"
      ]
    },
    {
      type: "stage",
      titre: "Stagiaire Support",
      entreprise: "Nano Réseaux",
      lieu: "Montpellier, France",
      periode: "1 semaine",
      duree: "1 semaine",
      description: "Assistance et service de sécurité informatique",
      competences: ["Sécurité informatique", "Assistance", "Support technique", "Réseaux"],
      missions: [
        "Assistance en sécurité informatique",
        "Support technique spécialisé",
        "Audit de sécurité réseau",
        "Mise en place de mesures de protection"
      ]
    }
  ]

  const getIcon = (type: string) => {
    return type === "stage" ? GraduationCap : Briefcase
  }

  const getTypeLabel = (type: string) => {
    return type === "stage" ? "Stage" : "Job d'été"
  }

  const getTypeColor = (type: string) => {
    return type === "stage" ? "bg-primary text-primary-foreground" : "bg-warm-500 text-white"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Expériences</h1>
          <p className="text-xl text-muted-foreground">
            Stages et expériences professionnelles
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p className="text-muted-foreground">Stages</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl font-bold text-primary mb-2">11</div>
            <p className="text-muted-foreground">Semaines d'expérience</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p className="text-muted-foreground">Entreprises</p>
          </div>
        </div>

        {/* Liste des expériences */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* En-tête */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${getTypeColor(exp.type)} rounded-2xl flex items-center justify-center`}>
                      {React.createElement(getIcon(exp.type), { className: "h-5 w-5" })}
                    </div>
                    <span className={`px-3 py-1 ${getTypeColor(exp.type)} rounded-full text-sm font-medium`}>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exp.titre}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">{exp.entreprise}</h4>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.lieu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.periode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.duree}</span>
                    </div>
                  </div>
                </div>

                {/* Contenu détaillé */}
                <div className="lg:w-2/3">
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Missions principales :</h5>
                    <ul className="space-y-2">
                      {exp.missions.map((mission, missionIndex) => (
                        <li key={missionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Compétences développées :</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.competences.map((comp, compIndex) => (
                        <span key={compIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section recherche */}
        <div className="glass-card rounded-3xl p-8 mt-12 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-4">À la recherche de nouvelles opportunités</h2>
          <p className="text-muted-foreground mb-6">
            Je suis actuellement à la recherche d'une alternance ou d'un stage en administration 
            système et réseau pour approfondir mes compétences et contribuer à des projets concrets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="ios-button">
              Télécharger mon CV
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
