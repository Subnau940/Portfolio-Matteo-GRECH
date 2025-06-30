
import { Shield, Search, Bell, Database, Link, Globe, Rss, Bot } from "lucide-react"

const Veille = () => {
  const sources = [
    {
      type: "Sites spécialisés",
      items: ["Zataz", "LeMagIT", "The Hacker News", "Krebs on Security"]
    },
    {
      type: "Forums et communautés",
      items: ["Reddit (r/netsec, r/cybersecurity)", "Twitter (@ANSSI_FR, @USCERT_gov, @TheHackersNews, @troyhunt, @SwiftOnSecurity)"]
    },
    {
      type: "Bulletins officiels",
      items: ["ANSSI", "CERT-FR", "US-CERT"]
    }
  ]

  const outils = [
    {
      nom: "Google Alerts",
      description: "Mots-clés comme cyber, vulnérabilités, faille...",
      icon: Search
    },
    {
      nom: "Flux RSS",
      description: "Avec Feedly ou Inoreader, regroupant les sources spécialisées",
      icon: Rss
    }
  ]

  const automatisation = [
    {
      titre: "Partage d'indicateurs",
      description: "Utilisation de scripts ou plateformes comme MISP (partage d'indicateurs de compromission)",
      icon: Database
    },
    {
      titre: "Suivi des rapports",
      description: "Suivi des rapports réguliers, par exemple ceux des vulnérabilités CVE",
      icon: Bell
    }
  ]

  const organisation = [
    {
      titre: "Documentation",
      description: "Consigner les informations importantes dans un wiki, des notes ou un outil type Notion",
      icon: Database
    },
    {
      titre: "Priorisation",
      description: "Prioriser selon la spécialité : réseaux, malware, audit, etc.",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Veille informatique en cybersécurité
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comment faire efficacement sa veille technologique en cybersécurité
          </p>
        </div>

        {/* Question principale */}
        <div className="glass-card rounded-3xl p-8 mb-12 animate-scale-in text-center">
          <h2 className="text-2xl font-bold mb-4 text-warm-700">Comment faire efficacement ?</h2>
        </div>

        {/* Sources fiables */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">
            Sources fiables à suivre
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sources.map((source, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 card-hover animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-500 to-warm-700 rounded-2xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-warm-700">{source.type}</h3>
                </div>
                <ul className="space-y-2">
                  {source.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-warm-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Outils d'alerte */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">
            Outils d'alerte
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {outils.map((outil, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 card-hover animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-warm-500 rounded-2xl flex items-center justify-center">
                    <outil.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-warm-700">{outil.nom}</h3>
                </div>
                <p className="text-muted-foreground">{outil.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Automatisation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">
            Automatisation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {automatisation.map((item, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 card-hover animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-600 to-warm-800 rounded-2xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-warm-700">{item.titre}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organisation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">
            Organisation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organisation.map((item, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 card-hover animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-700 to-warm-900 rounded-2xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-warm-700">{item.titre}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Veille
