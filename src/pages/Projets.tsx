import { useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react"

const Projets = () => {
  const [openDemoIndex, setOpenDemoIndex] = useState<number | null>(null); // index du projet ouvert

  const projets = [
    {
       title: "Supervision et gestion des alertes réseaux 4G et Wi-Fi",
       description: "...",
       technologies: ["Supervision réseau", "4G", "Wi-Fi", "Gestion d'incidents"],
       date: "2024",
       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
       competences: ["Gestion du patrimoine informatique", "Réponse aux incidents", "Travail en mode projet"],
       github: "#",
       demoImages: ["/1000016892.png", "/1000016894.png"],
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
    },
    {
      title: "Supervision Zabbix d'un parc de machines",
      description: "Déploiement complet de Zabbix pour superviser plusieurs machines Windows et Linux : installation du serveur, ajout des agents, configuration des hôtes, création de tableaux de bord et gestion des alertes.",
      technologies: ["Zabbix", "Linux", "Windows", "Supervision", "Monitoring"],
      date: "2025",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Déploiement de services réseau",
        "Supervision d'infrastructure",
        "Diagnostic et résolution d'incidents"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "IDS/IPS avec Snort sur pfSense",
      description: "Installation de pfSense, configuration du package Snort, activation de l'IDS puis du mode IPS, mise en place des règles de détection pour protéger un réseau local contre les attaques.",
      technologies: ["pfSense", "Snort", "IDS", "IPS", "Sécurité réseau"],
      date: "2025",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3liZXJ8ZW58MHx8MHx8fDI%3D",
      competences: [
        "Sécurisation réseau",
        "Analyse de trafic",
        "Détection d'intrusions"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Implémentation d'un serveur Active Directory (AD-DS)",
      description: "Mise en place d'un contrôleur de domaine avec AD-DS, DNS intégré, création d'OU, gestion des utilisateurs, stratégies GPO et automatisation partielle des tâches d'administration.",
      technologies: ["Windows Server", "AD-DS", "DNS", "GPO", "Administration système"],
      date: "2025",
      image: "https://images.unsplash.com/photo-1748366416622-8bd7b3530dd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGluZm9ybWF0aXF1ZXxlbnwwfHwwfHx8Mg%3D%3D",
      competences: [
        "Administration système",
        "Gestion des identités",
        "Configuration réseau"
      ],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden card-hover animate-scale-in group">
              <div className="aspect-video overflow-hidden">
                <img src={projet.image} alt={projet.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3>{projet.title}</h3>
                <p>{projet.description}</p>

                <div className="flex gap-3 mt-4">
                  <a href={projet.github}>Code</a>

                  {projet.demoImages && projet.demoImages.length > 0 ? (
                    <button
                      onClick={() =>
                        setOpenDemoIndex(openDemoIndex === index ? null : index)
                      }
                    >
                      Demo
                    </button>
                  ) : (
                    <a href={projet.demo}>Demo</a>
                  )}
                </div>

                {openDemoIndex === index && projet.demoImages && (
                  <div className="mt-4 flex flex-col gap-2">
                    {projet.demoImages.map((img, i) => (
                      <img key={i} src={img} alt={`Demo ${i+1}`} className="w-full rounded-lg" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projets
