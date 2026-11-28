import { ArrowUpRight, Download } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { DOCS_URL } from "@/lib/links"

const competences = [
  {
    titre: "Offensif",
    items: ["Pentest en lab : Kali, nmap, Metasploit", "CTF : cryptographie, web, forensic, reverse", "Élévation de privilèges Linux (GTFOBins)"],
  },
  {
    titre: "Défensif",
    items: ["SIEM/XDR Wazuh, Active Response", "IDS/IPS Snort", "Durcissement CIS, tiering Active Directory"],
  },
  {
    titre: "Réseau",
    items: ["VLAN, ACL, NAT/PAT, VPN", "SD-WAN et multi-FAI en production", "Pare-feu Fortinet, pfSense, OPNsense, haute dispo CARP"],
  },
  {
    titre: "Systèmes",
    items: ["Active Directory, GPO, Windows Server", "Linux en ligne de commande", "Virtualisation Proxmox et VMware"],
  },
  {
    titre: "Supervision",
    items: ["Zabbix", "Wazuh", "ServiceNow, GLPI"],
  },
  {
    titre: "Dev & IA",
    items: ["Python, Bash", "LLM locaux : Ollama, llama.cpp, agents", "React, Git, GitHub Actions"],
  },
]

const formation = [
  {
    periode: "Depuis 2026",
    titre: "Bachelor Cybersécurité et Administrateur Réseaux",
    detail: "My Digital School Montpellier · titre RNCP37680 · en alternance",
    statut: "En cours",
  },
  {
    periode: "2024 – 2026",
    titre: "BTS SIO option SISR",
    detail: "My Digital School / ESICAD Montpellier · en alternance",
    statut: "Obtenu",
  },
  {
    periode: "2021 – 2024",
    titre: "Bac Pro Systèmes Numériques",
    detail: "Lycée Saint-Joseph Pierre Rouge, Montpellier · mention bien",
    statut: "Obtenu",
  },
]

const certifications = [
  { titre: "MOOC SecNumAcadémie", organisme: "ANSSI", href: "/Certification-MOOC.pdf" },
  {
    titre: "Introduction to Cybersecurity",
    organisme: "Cisco Networking Academy",
    href: "https://www.credly.com/badges/0fd07c77-dd32-4272-b926-6d0701af5bfb/linked_in_profile",
  },
  {
    titre: "Networking Basics",
    organisme: "Cisco Networking Academy",
    href: "https://www.credly.com/badges/cc048eb5-4475-4088-ab6d-519bd37ff1f3/public_url",
  },
  { titre: "ISC2 Certified in Cybersecurity (CC)", organisme: "ISC2 · en préparation", href: null },
]

const APropos = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader kicker="à propos" title="À propos" />

      {/* Profil */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Je suis technicien réseau N2 en alternance chez Info.U, où je traite les incidents complexes d'une
            infrastructure de plus de 1 500 points de vente. J'y suis passé du N1 au N2 en septembre 2026, en même temps
            que j'ai démarré le Bachelor Cybersécurité et Administrateur Réseaux, après avoir obtenu mon BTS SIO SISR.
          </p>
          <p>
            Cette base réseau est mon point de départ. Mon objectif est la <span className="text-foreground">Red Team</span> :
            je m'y prépare avec des CTF, un homelab et un agent IA de pentest que je développe moi-même, et je documente
            tout sur ma base de connaissances.
          </p>
        </div>
        <div className="glass-card rounded-xl p-6 h-fit">
          <p className="kicker mb-3">cv</p>
          <p className="text-sm text-muted-foreground mb-4">Le CV à jour, en une page.</p>
          <a href="/CV-GRECH-Matteo.pdf" download className="ios-button w-full text-sm">
            <Download className="mr-2 h-4 w-4" /> Télécharger le CV
          </a>
        </div>
      </section>

      {/* Compétences */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">Compétences</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {competences.map((c) => (
            <div key={c.titre} className="bg-card p-6">
              <p className="kicker mb-3">{c.titre}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary font-mono select-none">›</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">Formation</h2>
        <div className="space-y-3">
          {formation.map((f) => (
            <div key={f.titre} className="glass-card rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-xs text-muted-foreground sm:w-28 shrink-0">{f.periode}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{f.titre}</h3>
                <p className="text-sm text-muted-foreground">{f.detail}</p>
              </div>
              <span className={`font-mono text-[11px] ${f.statut === "En cours" ? "text-primary" : "text-muted-foreground"}`}>
                {f.statut}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-foreground mb-6">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((c) => {
            const contenu = (
              <>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{c.titre}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.organisme}</p>
                </div>
                {c.href && <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0" />}
              </>
            )
            return c.href ? (
              <a
                key={c.titre}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover rounded-xl p-5 flex items-center justify-between gap-4"
              >
                {contenu}
              </a>
            ) : (
              <div key={c.titre} className="glass-card rounded-xl p-5 flex items-center justify-between gap-4">
                {contenu}
              </div>
            )
          })}
        </div>
      </section>

      {/* Veille + intérêts */}
      <section className="grid md:grid-cols-2 gap-5">
        <div className="glass-card rounded-xl p-6">
          <p className="kicker mb-3">veille</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Je suis les publications de l'ANSSI et du CERT-FR, les mises à jour de MITRE ATT&amp;CK et les nouvelles
            vulnérabilités critiques, centralisées dans Feedly. Ce que j'en retiens en pratique finit dans mes notes
            et mes writeups.
          </p>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Base de connaissances <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="glass-card rounded-xl p-6">
          <p className="kicker mb-3">en dehors</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Moto, boxe anglaise, cosmologie. Et l'électronique : ESP32, Bluetooth Low Energy, détection de présence par
            le Wi-Fi.
          </p>
        </div>
      </section>
    </div>
  )
}

export default APropos
