
import { Server, Shield, Network, Code, Users, Briefcase, BookOpen } from "lucide-react"

const Filiere = () => {
  const competences = [
    {
      icon: Server,
      titre: "Administration Système",
      description: "Installation, configuration et maintenance de serveurs Windows et Linux"
    },
    {
      icon: Network,
      titre: "Réseaux",
      description: "Conception et administration d'infrastructures réseau TCP/IP"
    },
    {
      icon: Shield,
      titre: "Sécurité",
      description: "Mise en place de solutions de sécurité et de surveillance"
    },
    {
      icon: Code,
      titre: "Scripting",
      description: "Automatisation de tâches avec PowerShell, Bash et Python"
    }
  ]

  const matieres = [
    "Support et mise à disposition de services informatiques",
    "Administration des systèmes et des réseaux",
    "Cybersécurité des services informatiques",
    "Mathématiques pour l'informatique",
    "Culture générale et expression",
    "Expression et communication en langue anglaise"
  ]

  const debouches = [
    "Technicien systèmes et réseaux",
    "Administrateur systèmes",
    "Technicien support informatique",
    "Technicien en cybersécurité",
    "Administrateur réseau",
    "Technicien maintenance informatique"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BTS SIO SISR</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions d'Infrastructure, Systèmes et Réseaux - 
            Une formation complète aux métiers de l'informatique d'entreprise
          </p>
        </div>

        {/* Présentation générale */}
        <div className="glass-card rounded-3xl p-8 mb-12 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce que le BTS SIO SISR ?</h2>
              <p className="text-muted-foreground mb-4">
                Le BTS Services Informatiques aux Organisations option Solutions d'Infrastructure, 
                Systèmes et Réseaux forme des techniciens capables de gérer et maintenir 
                l'infrastructure informatique d'une organisation.
              </p>
              <p className="text-muted-foreground">
                Cette formation de 2 ans allie théorie et pratique, avec des stages en entreprise 
                et de nombreux projets concrets pour acquérir une expérience professionnelle solide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">2</div>
                <p className="text-sm text-muted-foreground">Années de formation</p>
              </div>
              <div className="bg-warm-100 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-warm-600 mb-2">12</div>
                <p className="text-sm text-muted-foreground">Semaines de stage</p>
              </div>
              <div className="bg-warm-100 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-warm-600 mb-2">Bac+2</div>
                <p className="text-sm text-muted-foreground">Niveau obtenu</p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">120</div>
                <p className="text-sm text-muted-foreground">Crédits ECTS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences clés */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Compétences développées</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competences.map((comp, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 text-center card-hover animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <comp.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-3">{comp.titre}</h3>
                <p className="text-muted-foreground text-sm">{comp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Matières et débouchés */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-3xl p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Matières principales</h2>
            </div>
            <div className="space-y-3">
              {matieres.map((matiere, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{matiere}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Débouchés professionnels</h2>
            </div>
            <div className="space-y-3">
              {debouches.map((debouche, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{debouche}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pourquoi ESICAD */}
        <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
          <h2 className="text-3xl font-bold mb-6">Pourquoi l'ESICAD ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Accompagnement personnalisé</h3>
              <p className="text-muted-foreground text-sm">Suivi individuel et classes à effectifs réduits</p>
            </div>
            <div>
              <Network className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Équipements modernes</h3>
              <p className="text-muted-foreground text-sm">Laboratoires informatiques équipés du matériel professionnel</p>
            </div>
            <div>
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Réseau d'entreprises</h3>
              <p className="text-muted-foreground text-sm">Partenariats pour faciliter stages et insertion professionnelle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filiere
