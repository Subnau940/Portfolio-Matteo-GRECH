
import { ExternalLink, Github, Calendar } from "lucide-react"

const Projets = () => {
  const projets = [
    {
      title: "Infrastructure réseau entreprise",
      description: "Mise en place d'une infrastructure réseau complète avec DHCP, DNS et VLAN pour une PME de 50 employés.",
      technologies: ["Windows Server", "Cisco", "VLAN", "Active Directory"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Serveur web sécurisé",
      description: "Déploiement d'un serveur web LAMP avec certificats SSL et configuration de sécurité avancée.",
      technologies: ["Linux", "Apache", "MySQL", "PHP", "SSL"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Système de monitoring",
      description: "Mise en place d'une solution de monitoring réseau avec alertes en temps réel et tableaux de bord.",
      technologies: ["Nagios", "Grafana", "InfluxDB", "Python"],
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Sauvegarde automatisée",
      description: "Script de sauvegarde automatique des données critiques avec rotation et vérification d'intégrité.",
      technologies: ["Bash", "Rsync", "Cron", "Linux"],
      date: "2023",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les projets que j'ai réalisés dans le cadre de ma formation BTS SIO SISR
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden card-hover animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-warm-200/20 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={projet.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{projet.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{projet.title}</h3>
                <p className="text-muted-foreground mb-4">{projet.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={projet.github} className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-2xl hover:bg-foreground/90 transition-colors">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a href={projet.demo} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-colors">
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
