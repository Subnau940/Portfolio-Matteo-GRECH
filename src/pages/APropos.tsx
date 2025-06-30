
import { Heart, Target, Lightbulb, Coffee } from "lucide-react"

const APropos = () => {
  const valeurs = [
    {
      icon: Target,
      titre: "Rigueur",
      description: "J'accorde une grande importance à la précision et à la qualité dans tout ce que j'entreprends."
    },
    {
      icon: Lightbulb,
      titre: "Curiosité",
      description: "Toujours à l'affût des nouvelles technologies et des meilleures pratiques du secteur."
    },
    {
      icon: Heart,
      titre: "Passion",
      description: "L'informatique est ma passion, ce qui me motive à me dépasser chaque jour."
    },
    {
      icon: Coffee,
      titre: "Persévérance",
      description: "Face aux défis techniques, j'aime trouver des solutions créatives et efficaces."
    }
  ]

  const loisirs = [
    "Veille technologique",
    "Projets personnels",
    "Gaming",
    "Sport",
    "Lecture tech",
    "Open source"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de moi</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez qui je suis et ce qui me motive
          </p>
        </div>

        {/* Introduction personnelle */}
        <div className="glass-card rounded-3xl p-8 mb-12 animate-scale-in">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-warm-500 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                VN
              </div>
              <h2 className="text-xl font-bold">Votre Nom</h2>
              <p className="text-muted-foreground">21 ans</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Qui suis-je ?</h3>
              <p className="text-muted-foreground mb-4">
                Étudiant passionné en BTS SIO SISR à l'ESICAD, je me spécialise dans 
                l'administration système et réseau. Mon objectif est de devenir un expert 
                en infrastructure informatique et d'accompagner les entreprises dans leur 
                transformation numérique.
              </p>
              <p className="text-muted-foreground">
                Ce qui me caractérise ? Une approche méthodique, une curiosité constante 
                pour les nouvelles technologies et une réelle envie d'apprendre et de 
                partager mes connaissances.
              </p>
            </div>
          </div>
        </div>

        {/* Mes valeurs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Mes valeurs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {valeurs.map((valeur, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 card-hover animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <valeur.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{valeur.titre}</h3>
                    <p className="text-muted-foreground">{valeur.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Objectifs et ambitions */}
        <div className="glass-card rounded-3xl p-8 mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Mes objectifs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">Court terme</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Réussir mon BTS SIO SISR avec mention
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Obtenir une certification CCNA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Trouver une alternance enrichissante
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-warm-600">Long terme</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                  Devenir administrateur système senior
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                  Me spécialiser en cybersécurité
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                  Créer ma propre ESN
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className="glass-card rounded-3xl p-8 animate-scale-in">
          <h2 className="text-2xl font-bold mb-6">Centres d'intérêt</h2>
          <p className="text-muted-foreground mb-6">
            En dehors des études, j'aime explorer différents domaines qui nourrissent 
            ma passion pour la technologie et m'aident à maintenir un équilibre de vie.
          </p>
          <div className="flex flex-wrap gap-3">
            {loisirs.map((loisir, index) => (
              <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-2xl text-sm font-medium">
                {loisir}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default APropos
