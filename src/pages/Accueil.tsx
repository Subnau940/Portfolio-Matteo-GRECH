import { ArrowRight, Shield, Network, Monitor, Search } from "lucide-react"
import { Link } from "react-router-dom"

const Accueil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100">
      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              En recherche d'alternance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Bonjour, je suis
              <br />
              <span className="bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
                Mattéo Grech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Passionné par la cybersécurité et son évolution, je relève chaque défi avec
              curiosité et détermination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apropos" className="ios-button">
                Découvrir mon profil
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-2xl border-2 border-warm-500 text-warm-600 font-semibold hover:bg-warm-50 transition-all duration-200">
                Me Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Mes domaines d'expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Cybersécurité",
                description: "SIEM/XDR Wazuh, IDS/IPS Snort, hardening CIS, IAM"
              },
              {
                icon: Network,
                title: "Réseaux",
                description: "VLANs, VPN IPsec/SSL, Firewall NAT, Wi-Fi/4G, supervision"
              },
              {
                icon: Monitor,
                title: "Systèmes",
                description: "Active Directory, Windows Server, Linux CLI/Bash, GLPI"
              },
              {
                icon: Search,
                title: "Monitoring",
                description: "Zabbix, supervision réseau/système, dashboards, alertes"
              }
            ].map((skill, index) => (
              <div key={index} className="glass-card p-6 rounded-3xl card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Prêt à collaborer ?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Technicien IT en alternance chez INFO.U, je suis ouvert à de nouvelles opportunités
              dans la cybersécurité et l'administration réseau/système.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projets" className="ios-button">
                Voir mes projets
              </Link>
              <Link to="/contact" className="px-6 py-3 border-2 border-warm-500 text-warm-600 rounded-2xl font-semibold hover:bg-warm-50 transition-all duration-200">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil
