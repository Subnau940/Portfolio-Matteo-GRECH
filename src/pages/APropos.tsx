import React, { useState } from "react"
import { Mail, Phone, MapPin, Shield, Network, Monitor, Dumbbell, Bike, Telescope, BookOpen, GraduationCap, Award, Calendar, CheckCircle, Download, FileText } from "lucide-react"
import { Link } from "react-router-dom"

const APropos = () => {
  const [showCV, setShowCV] = useState(false)

  const softSkills = [
    { label: "Assidu", emoji: "📌" },
    { label: "Persévérant", emoji: "💪" },
    { label: "Curieux", emoji: "🔍" },
    { label: "Esprit d'équipe", emoji: "🤝" },
  ]

  const interets = [
    { label: "Veille technologique", icon: BookOpen },
    { label: "Boxe anglaise", icon: Dumbbell },
    { label: "Moto", icon: Bike },
    { label: "Cosmologie", icon: Telescope },
  ]

  const competences = [
    {
      icon: Shield,
      categorie: "Cybersécurité",
      items: ["IAM", "Hardening (ACL)", "Sensibilisation utilisateurs", "SIEM/XDR (Wazuh)", "IDS/IPS (Snort)"],
    },
    {
      icon: Network,
      categorie: "Réseau",
      items: ["Switch (VLANs, PoE, sécurité des ports)", "Routeurs Wi-Fi/4G", "Firewall (NAT)", "VPN (IPsec/SSL)", "Protocoles sécurisés"],
    },
    {
      icon: Monitor,
      categorie: "Système",
      items: ["Active Directory (GPO)", "Windows Server", "Linux (CLI/Bash)", "GLPI", "ServiceNow"],
    },
  ]

  const parcours = [
    {
      annee: "2021 – 2024",
      titre: "Bac PRO Système et Numérique",
      lieu: "Lycée Saint Joseph Pierre Rouge",
      ville: "Montpellier",
      statut: "Obtenu",
      mention: "Mention Bien",
    },
    {
      annee: "2024 – 2026",
      titre: "BTS SIO option SISR",
      lieu: "My Digital School / ESICAD",
      ville: "Montpellier",
      statut: "En cours",
      mention: null,
    },
    {
      annee: "2026 – 2029",
      titre: "Bachelor Administrateur Réseaux",
      lieu: "EPSI",
      ville: "Montpellier",
      statut: "À venir",
      mention: null,
    },
  ]

  const certifications = [
    {
      titre: "MOOC SecNumAcadémie",
      organisme: "ANSSI",
      logo: "/anssi-logo.png",
      logoFallback: "🛡️",
      link: null,
      download: "/Certification-MOOC.pdf",
      downloadLabel: "Télécharger le diplôme",
    },
    {
      titre: "Introduction à la Cybersécurité",
      organisme: "Cisco Networking Academy",
      logo: "https://images.credly.com/badges/0fd07c77-dd32-4272-b926-6d0701af5bfb/image.png",
      logoFallback: "🔐",
      link: "https://www.credly.com/badges/0fd07c77-dd32-4272-b926-6d0701af5bfb/linked_in_profile",
      download: null,
      downloadLabel: null,
    },
    {
      titre: "Bac Pro Système et Numérique",
      organisme: "Éducation Nationale – Mention Bien",
      logo: null,
      logoFallback: "🎓",
      link: null,
      download: null,
      downloadLabel: null,
    },
  ]

  const statutColor = (statut: string) => {
    if (statut === "Obtenu") return "bg-green-100 text-green-700"
    if (statut === "En cours") return "bg-warm-100 text-warm-700"
    return "bg-gray-100 text-gray-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            À Propos de Moi
          </h1>
          <p className="text-xl text-muted-foreground">Technicien IT passionné · Cybersécurité & Réseaux</p>
        </div>

        {/* Identité + Contact */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-scale-in group">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-warm-400 to-warm-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold transition-transform duration-300 group-hover:scale-105">
                MG
              </div>
              <h2 className="text-xl font-bold text-warm-700">Mattéo Grech</h2>
              <p className="text-muted-foreground text-sm mt-1">En recherche d'alternance</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Passionné par la cybersécurité et son évolution, je relève chaque défi avec curiosité et détermination.
                En recherche d'alternance.
              </p>
              <div className="space-y-3">
                <a href="tel:0634042846" className="flex items-center gap-3 text-muted-foreground hover:text-warm-700 transition-colors group/item">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center group-hover/item:bg-warm-200 transition-colors">
                    <Phone className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>06 34 04 28 46</span>
                </a>
                <a href="mailto:matteo1grech@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-warm-700 transition-colors group/item">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center group-hover/item:bg-warm-200 transition-colors">
                    <Mail className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>matteo1grech@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 bg-warm-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-warm-600" />
                  </div>
                  <span>Montpellier 34000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-warm-700">Soft skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105">
                <span className="text-3xl mb-2">{s.emoji}</span>
                <span className="font-semibold text-warm-700 text-sm text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-warm-700">Centres d'intérêt</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {interets.map((interet, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center mb-3">
                  <interet.icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-warm-700 text-sm text-center">{interet.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences techniques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-warm-700">Compétences techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {competences.map((cat, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 card-hover animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-warm-700">{cat.categorie}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-warm-500 rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Parcours scolaire */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-warm-700 flex items-center gap-3">
            <GraduationCap className="h-6 w-6" />
            Parcours scolaire
          </h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-400 to-warm-200 rounded-full"></div>
            <div className="space-y-6">
              {parcours.map((etape, index) => (
                <div key={index} className="relative pl-12 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className={`absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center ${
                    etape.statut === "Obtenu" ? "bg-green-500" :
                    etape.statut === "En cours" ? "bg-warm-500" : "bg-gray-300"
                  }`}>
                    {etape.statut === "Obtenu" && <CheckCircle className="h-3 w-3 text-white" />}
                  </div>
                  <div className="glass-card rounded-2xl p-5 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />{etape.annee}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statutColor(etape.statut)}`}>{etape.statut}</span>
                      {etape.mention && <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">{etape.mention}</span>}
                    </div>
                    <h3 className="font-bold text-warm-700">{etape.titre}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{etape.lieu} — {etape.ville}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diplômes / Certifications */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-warm-700 flex items-center gap-3">
            <Award className="h-6 w-6" />
            Diplômes / Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, i) => {
              const CardWrapper = cert.link
                ? ({ children }: { children: React.ReactNode }) => (
                    <a href={cert.link!} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105 text-center cursor-pointer">
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <div className="flex flex-col items-center p-5 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 transition-all duration-200 hover:scale-105 text-center">
                      {children}
                    </div>
                  )
              return (
                <CardWrapper key={i}>
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.organisme}
                      className="h-16 w-16 object-contain mb-3 rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                        const span = e.currentTarget.nextElementSibling as HTMLElement
                        if (span) span.style.display = "block"
                      }}
                    />
                  ) : null}
                  <span className={`text-3xl mb-3 ${cert.logo ? "hidden" : ""}`}>{cert.logoFallback}</span>
                  <p className="font-bold text-warm-700 text-sm mb-1">{cert.titre}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.organisme}</p>
                  {cert.link && (
                    <span className="text-xs text-blue-600 font-medium">Voir le badge ↗</span>
                  )}
                  {cert.download && (
                    <a
                      href={cert.download}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-warm-600 hover:text-warm-800 font-medium mt-1 transition-colors"
                    >
                      <Download className="h-3 w-3" />
                      {cert.downloadLabel}
                    </a>
                  )}
                </CardWrapper>
              )
            })}
          </div>
        </div>

        {/* CV Section */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-warm-700 flex items-center gap-3">
              <FileText className="h-6 w-6" />
              Mon CV
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCV(!showCV)}
                className="px-4 py-2 border-2 border-warm-400 text-warm-600 rounded-xl font-medium text-sm hover:bg-warm-50 transition-all duration-200"
              >
                {showCV ? "Masquer" : "Aperçu"}
              </button>
              <a
                href="/CV-GRECH-Matteo.pdf"
                download="CV-GRECH-Matteo.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-warm-500 to-warm-600 text-white rounded-xl font-medium text-sm hover:from-warm-600 hover:to-warm-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                Télécharger le CV
              </a>
            </div>
          </div>

          {showCV && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-warm-200 animate-fade-in">
              <iframe
                src="/CV-GRECH-Matteo.pdf"
                className="w-full h-[800px]"
                title="CV Mattéo Grech"
                onError={() => {}}
              />
            </div>
          )}

          {!showCV && (
            <p className="text-sm text-muted-foreground">
              Cliquez sur <strong>Aperçu</strong> pour visualiser le CV directement sur la page, ou <strong>Télécharger</strong> pour l'enregistrer.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-3 text-warm-700">En recherche d'alternance</h2>
          <p className="text-muted-foreground mb-6">
            Disponible pour une alternance en administration système, réseau ou cybersécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="ios-button">Me contacter</Link>
            <Link to="/projets" className="px-6 py-3 border-2 border-warm-500 text-warm-600 rounded-2xl font-semibold hover:bg-warm-50 transition-all duration-200">
              Voir mes projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APropos
