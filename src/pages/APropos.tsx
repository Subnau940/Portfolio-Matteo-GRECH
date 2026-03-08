import { Mail, Phone, MapPin, Shield, Network, Monitor, Users, Dumbbell, Bike, Telescope, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const APropos = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            À Propos de Moi
          </h1>
          <p className="text-xl text-muted-foreground">Technicien IT passionné · Cybersécurité & Réseaux</p>
        </div>

        {/* Carte identité */}
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

        {/* Compétences techniques */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-warm-700 text-center">Compétences techniques</h2>
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

        {/* CTA */}
        <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-3 text-warm-700">En recherche d'alternance</h2>
          <p className="text-muted-foreground mb-6">
            Disponible pour une alternance en administration système, réseau ou cybersécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="ios-button">
              Me contacter
            </Link>
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
