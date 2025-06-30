
import React from "react"
import { Calendar, MapPin, Award, BookOpen } from "lucide-react"

const Parcours = () => {
  const etapes = [
    {
      annee: "2025",
      titre: "Obtention du BTS SIO SISR",
      lieu: "ESICAD",
      description: "Diplôme en Solutions d'Infrastructure, Systèmes et Réseaux",
      statut: "En cours",
      type: "formation"
    },
    {
      annee: "2024",
      titre: "Stage Technicien Réseau",
      lieu: "Entreprise ABC",
      description: "6 semaines de stage en administration réseau et support utilisateur",
      statut: "Terminé",
      type: "experience"
    },
    {
      annee: "2023",
      titre: "Début BTS SIO SISR",
      lieu: "ESICAD",
      description: "Entrée en formation BTS Services Informatiques aux Organisations",
      statut: "Terminé",
      type: "formation"
    },
    {
      annee: "2023",
      titre: "Baccalauréat",
      lieu: "Lycée Jean Moulin",
      description: "Obtention du baccalauréat avec mention",
      statut: "Terminé",
      type: "diplome"
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "formation":
        return BookOpen
      case "experience":
        return Award
      case "diplome":
        return Award
      default:
        return Calendar
    }
  }

  const getColor = (type: string) => {
    switch (type) {
      case "formation":
        return "bg-primary"
      case "experience":
        return "bg-warm-500"
      case "diplome":
        return "bg-warm-600"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mon Parcours</h1>
          <p className="text-xl text-muted-foreground">
            Retracez mon cheminement académique et professionnel
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-warm-400 to-warm-600 rounded-full"></div>
          
          <div className="space-y-12">
            {etapes.map((etape, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                {/* Point sur la timeline */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-8 h-8 ${getColor(etape.type)} rounded-full flex items-center justify-center z-10`}>
                  {React.createElement(getIcon(etape.type), { className: "h-4 w-4 text-white" })}
                </div>
                
                {/* Contenu */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card rounded-3xl p-6 card-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{etape.annee}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        etape.statut === 'En cours' 
                          ? 'bg-warm-100 text-warm-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {etape.statut}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{etape.titre}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{etape.lieu}</span>
                    </div>
                    <p className="text-muted-foreground">{etape.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <p className="text-muted-foreground">Années d'études</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Projets réalisés</p>
          </div>
          <div className="glass-card rounded-3xl p-6 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <p className="text-muted-foreground">Stages effectués</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parcours
