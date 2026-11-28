import { DOCS_URL } from "@/lib/links"

export type Tag = "Offensif" | "Défensif" | "Infra" | "IA" | "Dev" | "Documentation"
export const TAGS: Tag[] = ["Offensif", "Défensif", "Infra", "IA", "Dev", "Documentation"]

export type Statut = "En cours" | "Terminé"
export type Contexte = "perso" | "bachelor" | "formation"

export interface Lien {
  label: string
  href: string
  kind: "doc" | "code" | "site" | "pdf"
}

export interface SousProjet {
  title: string
  detail: string
  lien?: Lien
}

export interface Projet {
  id: string
  title: string
  contexte: Contexte
  resume: string
  points: string[]
  tags: Tag[]
  statut: Statut
  annee: string
  stack: string[]
  liens: Lien[]
  youtubeId?: string
  sousProjets?: SousProjet[]
}

export const SECTIONS: { id: Contexte; titre: string; intro: string }[] = [
  {
    id: "perso",
    titre: "Projets personnels & lab",
    intro: "Ce que je construis de ma propre initiative, en dehors du travail et des cours.",
  },
  {
    id: "bachelor",
    titre: "Projets Bachelor — Réseau & sécurité",
    intro: "Infrastructures montées dans le cadre du Bachelor Cybersécurité et Administrateur Réseaux.",
  },
  {
    id: "formation",
    titre: "Formation",
    intro: "Les projets techniques du BTS SIO SISR, regroupés avec leur documentation.",
  },
]

export const PROJETS: Projet[] = [
  {
    id: "agent-ia-pentest",
    title: "Agent IA de pentest autonome",
    contexte: "perso",
    resume:
      "Un LLM local (Qwen3-8B) dont j'ai retiré les refus par abliteration, piloté par un harnais Python qui exécute ses commandes en SSH sur une Kali de lab isolé.",
    points: [
      "Abliteration avec Heretic : 6 refus sur 100, divergence KL 0,07 (capacités préservées)",
      "Harnais V3.2 : méthodologie PTES, compte dédié à sudo restreint, liste noire, anti-boucle",
      "Faits extraits des vraies sorties, lookup CVE (API NVD) et RAG GTFOBins contre les hallucinations",
      "Élévation de privilèges obtenue en autonomie en lab",
    ],
    tags: ["Offensif", "IA", "Dev"],
    statut: "En cours",
    annee: "2026",
    stack: ["Python", "Ollama", "llama.cpp", "paramiko", "Kali"],
    liens: [{ label: "Documentation", href: `${DOCS_URL}/projets/ia-heretic/`, kind: "doc" }],
  },
  {
    id: "writeups-ctf",
    title: "Writeups CTF & base de connaissances",
    contexte: "perso",
    resume:
      "Mes résolutions de challenges documentées pour garder le pourquoi de chaque faille, publiées sur un site MkDocs déployé automatiquement.",
    points: [
      "23 writeups en 5 catégories : cryptographie (RSA, Boneh-Durfee), forensic, reverse, web, general skills",
      "Plan uniforme : faille, méthode, outils, réflexes à retenir",
      "Déploiement continu GitHub Actions vers GitHub Pages, domaine personnalisé en HTTPS",
    ],
    tags: ["Offensif", "Documentation"],
    statut: "En cours",
    annee: "2026",
    stack: ["MkDocs", "GitHub Actions", "picoCTF", "Root-Me"],
    liens: [
      { label: "Writeups", href: `${DOCS_URL}/ctf/`, kind: "doc" },
      { label: "Code", href: "https://github.com/Subnau940/CTF-Test-MkDocs", kind: "code" },
    ],
  },
  {
    id: "infra-ha-kiharo",
    title: "Infrastructure haute disponibilité (pfSense CARP, AD, GLPI)",
    contexte: "bachelor",
    resume:
      "Un socle réseau d'entreprise sans point unique de défaillance : deux pare-feu pfSense en cluster CARP/VIP, un Active Directory qui distribue DHCP et DNS pour que tout client rejoigne le réseau sans configuration, et GLPI pour l'inventaire et le support.",
    points: [
      "Cluster pfSense CARP/VIP avec lien de synchronisation dédié (pfsync + XMLRPC)",
      "Bascule automatique validée : un seul paquet perdu lors de la panne du pare-feu maître",
      "AD DHCP/DNS promu contrôleur de domaine : les postes se configurent tout seuls",
      "GLPI relié à l'AD par LDAP, puis segmentation en VLAN serveurs / clients",
      "Approche incrémentale : chaque brique validée avant d'empiler la suivante",
    ],
    tags: ["Infra", "Défensif", "Documentation"],
    statut: "En cours",
    annee: "2026",
    stack: ["pfSense", "CARP", "Active Directory", "GLPI", "VLAN", "VMware"],
    liens: [
      { label: "Documentation", href: "/Infrastructure-HA-pfSense-AD-GLPI.pdf", kind: "pdf" },
      { label: "Focus HA CARP", href: "/HA-CARP-pfSense.pdf", kind: "pdf" },
    ],
  },
  {
    id: "homelab",
    title: "Homelab sécurité",
    contexte: "perso",
    resume:
      "Un lab virtualisé monté dans un ordre réfléchi, qui me sert de terrain d'entraînement offensif et défensif.",
    points: [
      "Pare-feu OPNsense, segmentation en VLAN",
      "Domaine Active Directory avec modèle de tiering T0 / T1 / T2",
      "SIEM Wazuh avec Active Response, supervision Zabbix",
    ],
    tags: ["Défensif", "Infra"],
    statut: "En cours",
    annee: "2026",
    stack: ["VMware", "OPNsense", "pfSense", "Active Directory", "Wazuh"],
    liens: [],
  },
  {
    id: "insider-threat",
    title: "Insider Threat",
    contexte: "perso",
    resume:
      "Un jeu de société de sensibilisation : un loup-garou où la Red Team affronte la Blue Team, accompagné d'une application qui sert de narrateur sonore.",
    points: [
      "Rôles cyber : Red Team, Blue Team, Purple Team, CISO, SOC Analyst, Threat Hunter…",
      "Application web compagnon pour l'ambiance sonore et le déroulé de la partie",
      "Projet en équipe, entièrement en anglais, de 5 à 14 joueurs",
    ],
    tags: ["Dev", "Documentation"],
    statut: "Terminé",
    annee: "2026",
    stack: ["Flutter", "Game design", "Vercel"],
    youtubeId: "6v8RdgmB9Uc",
    liens: [
      { label: "Jouer", href: "https://insider-threat-english-game.vercel.app/", kind: "site" },
      { label: "Code", href: "https://github.com/elysabeth-studiolys/insider-threat", kind: "code" },
    ],
  },
  {
    id: "ha-redondance",
    title: "Haute disponibilité & redondance",
    contexte: "bachelor",
    resume:
      "Un réseau sans point unique de défaillance : passerelle redondée en HSRP, maillage de switches sans boucle avec STP, liens agrégés en LACP — chaque mécanisme validé par une panne provoquée.",
    points: [
      "HSRP : bascule sur le routeur de secours en ~2 paquets perdus, retour automatique (preempt)",
      "Diagnostic clé : le routage statique ne suivait pas la bascule, corrigé par OSPF",
      "STP : un seul port bloqué pour supprimer la boucle, choix du root bridge expliqué",
      "LACP : perte d'un câble d'un bundle sans aucune coupure",
    ],
    tags: ["Infra", "Documentation"],
    statut: "Terminé",
    annee: "2026",
    stack: ["Cisco", "HSRP", "OSPF", "STP", "LACP", "Packet Tracer"],
    liens: [{ label: "Documentation", href: `${DOCS_URL}/projets/reseau/haute-disponibilite/`, kind: "doc" }],
  },
  {
    id: "vlan-acl",
    title: "VLAN, routage inter-VLAN & ACL",
    contexte: "bachelor",
    resume:
      "Réseau d'entreprise segmenté en quatre VLAN métier, routés en router-on-a-stick, puis cloisonnés par des ACL standard et étendues. Chaque règle prouvée par un test qui passe et un test qui échoue.",
    points: [
      "Segmentation par port, trunks 802.1Q, sous-interfaces et routage statique inter-sites",
      "Constat de sécurité : le routage inter-VLAN casse l'isolation de niveau 2, les ACL la rétablissent",
      "Placement raisonné des ACL (routeur, interface, sens) et ordre des règles",
    ],
    tags: ["Infra", "Défensif", "Documentation"],
    statut: "Terminé",
    annee: "2026",
    stack: ["Cisco", "VLAN", "ACL", "802.1Q", "Packet Tracer"],
    liens: [{ label: "Documentation", href: `${DOCS_URL}/projets/reseau/vlan-routage-acl/`, kind: "doc" }],
  },
  {
    id: "routage-dynamique",
    title: "Routage dynamique (RIP, OSPF)",
    contexte: "bachelor",
    resume:
      "Deux domaines de routage, l'un en RIP, l'autre en OSPF, interconnectés proprement par redistribution sur un routeur frontière.",
    points: [
      "Comparaison distance vector / link state dans un cas concret",
      "Limite des routes par défaut, puis redistribution avec gestion des métriques",
      "Chemin vérifié de bout en bout par traceroute",
    ],
    tags: ["Infra", "Documentation"],
    statut: "Terminé",
    annee: "2026",
    stack: ["Cisco", "RIP", "OSPF", "Packet Tracer"],
    liens: [{ label: "Documentation", href: `${DOCS_URL}/projets/reseau/routage-dynamique/`, kind: "doc" }],
  },
  {
    id: "projets-bts",
    title: "Projets BTS SIO SISR",
    contexte: "formation",
    resume:
      "Quatre déploiements d'infrastructure et de sécurité, de l'installation jusqu'aux tests, et un projet web en équipe.",
    points: [],
    tags: ["Défensif", "Infra"],
    statut: "Terminé",
    annee: "2025",
    stack: ["Proxmox", "Wazuh", "Zabbix", "pfSense", "Windows Server"],
    liens: [],
    sousProjets: [
      {
        title: "SIEM/XDR Wazuh",
        detail:
          "Manager, indexeur et dashboard sur Proxmox, agents Linux et Windows, durcissement CIS. Brute force SSH simulé depuis Kali, détecté puis bloqué par Active Response.",
        lien: { label: "Rapport", href: "/Rapport_BTS_SIO_PROJET_WAZUH.pdf", kind: "pdf" },
      },
      {
        title: "Supervision Zabbix 7.0",
        detail:
          "Serveur Zabbix avec MySQL sur Proxmox, agents, templates, triggers, tableaux de bord et tests d'alerte.",
        lien: { label: "Compte rendu", href: "/Supervision_Zabbix_Compte_Rendu.pdf", kind: "pdf" },
      },
      {
        title: "IDS/IPS Snort sur pfSense",
        detail: "Installation de pfSense et du paquet Snort, passage du mode IDS au mode IPS, règles de détection.",
      },
      {
        title: "Active Directory (AD-DS)",
        detail: "Contrôleur de domaine avec DNS intégré, unités d'organisation, utilisateurs et stratégies de groupe.",
        lien: { label: "Rapport", href: "/Rapport_AD_BTS_SIO_GRECH.pdf", kind: "pdf" },
      },
      {
        title: "Blog SIO1",
        detail: "Site de la promotion en équipe : PHP, SQL, authentification, déploiement Docker + Nginx.",
        lien: { label: "Code", href: "https://github.com/Subnau940/Blog-sio1", kind: "code" },
      },
    ],
  },
]
