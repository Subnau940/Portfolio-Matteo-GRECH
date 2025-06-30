
import { ExternalLink, Github, Calendar } from "lucide-react"

const Projets = () => {
  const projets = [
    {
      title: "Supervision et gestion des alertes réseaux 4G et Wi-Fi",
      description: "Mise en place d'un système de supervision pour suivre, contrôler et répertorier les alertes réseau (4G et Wi-Fi). Ce projet a permis de réduire significativement le nombre d'alertes, d'améliorer le suivi des incidents et de diminuer le backlog interne.",
      technologies: ["Supervision réseau", "4G", "Wi-Fi", "Gestion d'incidents"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      competences: [
        "Gestion du patrimoine informatique",
        "Réponse aux incidents",
        "Travail en mode projet"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Co-révision du lexique interne de l'entreprise",
      description: "Participation à la mise à jour et à l'amélioration du lexique interne pour faciliter l'intégration des nouveaux collaborateurs. Ce travail collaboratif vise à améliorer la communication interne et contribue au développement professionnel de l'équipe.",
      technologies: ["Documentation", "Communication", "Collaboration"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      competences: [
        "Réponse aux demandes d'évolution",
        "Travail en mode projet",
        "Organisation du développement professionnel"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Veille informatique en cybersécurité",
      description: "Mise en place d'un système de veille technologique complet en cybersécurité, incluant la surveillance des nouvelles menaces, l'analyse des vulnérabilités et le suivi des meilleures pratiques de sécurité. Organisation et structuration des sources d'information pour maintenir une expertise à jour.",
      technologies: ["Cybersécurité", "Veille technologique", "Analyse de risques", "MISP"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      competences: [
        "Analyse des vulnérabilités",
        "Gestion des alertes de sécurité",
        "Documentation technique",
        "Suivi des rapports CVE"
      ],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-black to-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les projets que j'ai réalisés dans le cadre de ma formation BTS SIO SISR
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden card-hover animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-warm-200/20 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={projet.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{projet.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">
                  {projet.title}
                </h3>
                <p className="text-muted-foreground mb-4">{projet.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-warm-700">Compétences développées :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {projet.competences.map((comp, compIndex) => (
                      <li key={compIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-warm-500 rounded-full"></div>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/20 hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={projet.github} className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-2xl hover:bg-foreground/90 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a href={projet.demo} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projets
