import { useState } from "react";
import { ExternalLink, Github, Calendar, ChevronDown, ChevronUp, Download, LayoutList } from "lucide-react";

const DESCRIPTION_LIMIT = 160;

const Projets = () => {
  const [showDemo, setShowDemo] = useState<{ [key: number]: boolean }>({});
  const [expandedDescs, setExpandedDescs] = useState<{ [key: number]: boolean }>({});

  const toggleDemo = (index: number) => {
    setShowDemo(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleDesc = (index: number) => {
    setExpandedDescs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const projets = [
    {
      title: "Supervision et gestion des alertes réseaux 4G et Wi-Fi",
      description: "Mise en place d'un système ...",
      technologies: ["Supervision réseau", "4G", "Wi-Fi", "Gestion d'incidents"],
      date: "2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      competences: ["Gestion du patrimoine informatique", "Réponse aux incidents", "Travail en mode projet"],
      github: null,
      demo: ["/1000016892.png", "/1000016894.png"],
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
      github: null,
      demo: ["/1000016898.jpg"],
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
      github: null,
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
      github: null,
      demo: ["/pfsens.png"],
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
      github: null,
      demo: ["/ad-ds.png"],
    },
    {
      title: "Déploiement SIEM/XDR Wazuh – Client CUB (E6 BTS SIO SISR)",
      description: "Mission E6 en tant qu'ESN Securitech : déploiement d'une solution SIEM/XDR Wazuh sur l'infrastructure Proxmox de l'incubateur CUB. Installation du serveur Wazuh (Manager + Indexer OpenSearch + Dashboard) sur Ubuntu Server 24.04, configuration de 2 agents (Debian 12 DHCP, Windows Server 2019 AD). Hardening CIS Benchmark réalisé sur les deux agents. Simulation d'attaque brute force SSH via Hydra (14,3 millions de tentatives, dictionnaire rockyou.txt) depuis Kali Linux, détection en temps réel par Wazuh (17 000+ alertes) et blocage automatique de l'IP attaquante via Active Response (firewall-drop).",
      technologies: ["Wazuh", "SIEM", "XDR", "SOC", "Proxmox", "Linux", "Hardening", "CIS Benchmark", "Cybersécurité", "BTS SIO SISR"],
      date: "2025",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60",
      competences: [
        "Administration Linux & Windows Server",
        "Virtualisation Proxmox",
        "Déploiement et configuration SIEM (Wazuh / OpenSearch)",
        "Hardening CIS Benchmark (SCA)",
        "Détection d'intrusion et réponse aux incidents",
        "Active Response automatique (firewall-drop)",
        "Simulation d'attaque (Hydra, brute force SSH)",
        "Configuration rsyslog, UFW, iptables, Filebeat"
      ],
      github: null,
      demo: "#",
    },
    {
      title: "Déploiement solution de supervision Zabbix (E6 BTS SIO SISR)",
      description: "Mission E6 : déploiement d'une solution de supervision réseau et système Zabbix 7.0 LTS sur infrastructure virtualisée Proxmox pour une mise en situation professionnelle. Création d'une VM Ubuntu 22.04 (IP fixe 10.3.0.50/16, QEMU Guest Agent), déploiement du serveur Zabbix avec backend MySQL 8.0, configuration du frontend Apache2/PHP et de l'interface d'administration. Déploiement des agents sur les hôtes Linux supervisés, création des hôtes et association des templates. Supervision temps réel des métriques système (CPU, RAM, disque, réseau, services), configuration des triggers d'alerte, mise en place de dashboards personnalisés et tests de supervision (arrêt de services, vérification des alertes).",
      technologies: ["Zabbix", "Supervision", "Monitoring", "Proxmox", "Linux", "MySQL", "Infrastructure", "BTS SIO SISR"],
      date: "2025",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      competences: [
        "Administration Linux & virtualisation Proxmox",
        "Déploiement Zabbix 7.0 LTS (Server + Frontend + Agent)",
        "Configuration MySQL 8.0 et gestion des droits",
        "Déploiement Apache2 / PHP",
        "Supervision d'infrastructure (CPU, RAM, disque, réseau)",
        "Configuration des triggers et alertes",
        "Création de dashboards personnalisés",
        "Tests de supervision et dépannage système"
      ],
      github: null,
      demo: ["/zabbix.png", "/zabbix2.png"],
    },
    {
      title: "Blog SIO1 – Site vitrine de la classe avec base de données",
      description: "Développement en équipe d'un site web complet présentant la classe BTS SIO SISR : profils des élèves, section école, tableau de notes et espace de contact. Le projet intègre une base de données SQL pour la gestion des utilisateurs, des profils et des notes, un système d'authentification PHP (login, sessions, changement de mot de passe) et un déploiement en production via Railway avec Docker et Nginx. La gestion du projet s'est faite en méthode agile avec Trello pour la répartition des tâches et le suivi de l'avancement. Conformité RGPD respectée (consentement photos élèves).",
      technologies: ["PHP", "SQL", "HTML", "CSS", "Docker", "Nginx", "Railway", "BTS SIO SISR"],
      date: "2024 – 2025",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60",
      competences: [
        "Développement PHP back-end (authentification, sessions, CRUD)",
        "Modélisation et intégration base de données SQL",
        "Gestion des utilisateurs, profils et notes",
        "Déploiement conteneurisé Docker + Nginx sur Railway",
        "Respect du RGPD et gestion du consentement",
        "Méthode agile (Trello) — planification et suivi de sprint",
        "Travail collaboratif en équipe (132 commits, fork collaboratif)",
        "Architecture MVC côté serveur (routing, header, sessions)",
      ],
      github: "https://github.com/Subnau940/Blog-sio1",
      trello: "https://trello.com/b/xN4TcR0U/projet-bd-portfolio",
      demo: "https://blog-sio1-production.up.railway.app",
    },
    {
      title: "Blog de classe BTS SIO SISR – Site vitrine de la promotion",
      description: "Dans le cadre de notre formation en BTS Services Informatiques aux Organisations option SISR, j'ai participé à la réalisation d'un blog de classe présentant la formation, les étudiants et les activités réalisées durant l'année. Le projet a été mené en équipe selon une méthode agile, avec Trello pour répartir les tâches et suivre l'avancement. Une attention particulière a été portée au respect du RGPD : les photos des étudiants ont été publiées uniquement après recueil de leur consentement, garantissant ainsi la protection des données personnelles.",
      technologies: ["Développement web", "Méthode Agile", "Trello", "RGPD", "Travail d'équipe", "BTS SIO SISR"],
      date: "2024 – 2025",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60",
      competences: [
        "Développement et mise en ligne d'un site web",
        "Organisation en méthode agile (Trello)",
        "Respect du RGPD et gestion du consentement",
        "Travail collaboratif en équipe",
        "Présentation de la formation et des activités"
      ],
      github: "https://github.com/WanPanchi/esicad-sio1-blog-hub",
      demo: "https://esicad-sio1-blog-hub.lovable.app/bts-sio1",
    },
    {
      title: "Création et gestion de documentation interne",
      description: "Conception, structuration et maintenance d'une documentation technique destinée à deux publics : l'équipe support (hotline) et les magasins (PDV). Pour l'équipe support, la documentation est intégrée dans ServiceNow sous forme de base de connaissances pour retrouver rapidement des procédures et solutions à des incidents récurrents. Pour les magasins, la documentation est publiée sur Univers, une plateforme dédiée avec des guides simplifiés et tutoriels vidéo permettant une résolution autonome des problèmes.",
      technologies: ["ServiceNow", "Base de connaissances", "Documentation technique", "Tutoriels vidéo", "Univers"],
      date: "2024 – 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=60",
      competences: [
        "Création de procédures et guides techniques",
        "Réalisation de tutoriels vidéo",
        "Mise à jour et amélioration des contenus",
        "Centralisation des connaissances",
        "Amélioration de l'efficacité de la hotline",
        "Autonomie des utilisateurs finaux"
      ],
      github: null,
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen py-12">
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
          {projets.map((projet, index) => {
            const isLong = projet.description.length > DESCRIPTION_LIMIT;
            const isExpanded = expandedDescs[index];
            const displayedDescription =
              isLong && !isExpanded
                ? projet.description.slice(0, DESCRIPTION_LIMIT).trimEnd() + "…"
                : projet.description;

            return (
              <div
                key={index}
                className="glass-card rounded-3xl overflow-hidden card-hover animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

                  <div className="mb-4">
                    <p className="text-muted-foreground">{displayedDescription}</p>
                    {isLong && (
                      <button
                        onClick={() => toggleDesc(index)}
                        className="mt-1 flex items-center gap-1 text-sm text-warm-600 hover:text-warm-800 font-medium transition-colors duration-200"
                      >
                        {isExpanded ? (
                          <>Voir moins <ChevronUp className="h-4 w-4" /></>
                        ) : (
                          <>Voir plus <ChevronDown className="h-4 w-4" /></>
                        )}
                      </button>
                    )}
                  </div>

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
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-4">
                    {projet.github && (
                      <a
                        href={projet.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-2xl hover:bg-foreground/90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {"trello" in projet && projet.trello && (
                      <a
                        href={(projet as any).trello}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        <LayoutList className="h-4 w-4" />
                        Trello
                      </a>
                    )}
                    {/* Demo : URL externe → lien, tableau d'images → bouton toggle */}
                    {projet.demo !== "#" && typeof projet.demo === "string" && (
                      <a
                        href={projet.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Voir le site
                      </a>
                    )}
                    {Array.isArray(projet.demo) && (
                      <button
                        onClick={() => toggleDemo(index)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </button>
                    )}
                  </div>

                  {showDemo[index] && Array.isArray(projet.demo) && (
                    <div className="mt-4 space-y-4">
                      {projet.demo.map((imgSrc, i) => (
                        <div key={i} className="relative group/img">
                          <img
                            src={imgSrc}
                            alt={`Demo ${i + 1}`}
                            className="w-full rounded-lg border border-warm-200"
                          />
                          <a
                            href={imgSrc}
                            download
                            className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white text-xs font-medium rounded-xl backdrop-blur-sm transition-all duration-200 opacity-0 group-hover/img:opacity-100"
                          >
                            <Download className="h-3.5 w-3.5" />
                            Télécharger
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projets;
