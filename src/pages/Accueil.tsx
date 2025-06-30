
import { ArrowRight, Code, Database, Shield, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const Accueil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-warm-600 bg-clip-text text-transparent mb-6">
              Bonjour, je suis
              <br />
              <span className="text-foreground">Votre Nom</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Étudiant en BTS SIO SISR à l'ESICAD, passionné par les réseaux, 
              l'administration système et les services aux entreprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projets" className="ios-button">
                Voir mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/cv" className="px-6 py-3 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                Télécharger mon CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mes domaines d'expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Sécurité",
                description: "Configuration firewall, gestion des accès"
              },
              {
                icon: Database,
                title: "Réseaux",
                description: "Administration réseau, protocoles TCP/IP"
              },
              {
                icon: Code,
                title: "Systèmes",
                description: "Linux, Windows Server, virtualisation"
              },
              {
                icon: Zap,
                title: "Services",
                description: "Déploiement et maintenance d'applications"
              }
            ].map((skill, index) => (
              <div key={index} className="glass-card p-6 rounded-3xl card-hover animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
            <p className="text-muted-foreground mb-6">
              Je recherche des opportunités de stage et d'alternance dans le domaine 
              des réseaux et de l'administration système.
            </p>
            <Link to="/apropos" className="ios-button">
              En savoir plus sur moi
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil
