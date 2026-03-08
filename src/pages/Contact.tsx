import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const Contact = () => {
  const email = "matteo1grech@gmail.com"
  const phone = "06 34 04 28 46"

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Coordonnées */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-warm-700">Mes coordonnées</h2>
              <div className="space-y-5">
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-0.5">Email</h3>
                    <span className="text-warm-600 group-hover:text-warm-800 transition-colors font-medium">
                      {email}
                    </span>
                  </div>
                </a>

                <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-0.5">Téléphone</h3>
                    <span className="text-warm-600 group-hover:text-warm-800 transition-colors font-medium">
                      {phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-0.5">Localisation</h3>
                    <span className="font-medium">Montpellier 34000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-bold mb-4 text-warm-700">Disponibilité</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Disponible pour alternance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Ouvert aux opportunités cybersécurité / réseau</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warm-500 rounded-full"></div>
                  <span className="text-sm">Projets collaboratifs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-4 text-warm-700">Envoyez-moi un message</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Que ce soit pour une opportunité professionnelle, une collaboration ou simplement
                pour échanger, je vous répondrai rapidement.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-button flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Envoyer un email
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="px-6 py-3 border-2 border-warm-500 text-warm-600 rounded-2xl font-semibold hover:bg-warm-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Appeler
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-bold mb-4 text-warm-700">Retrouvez-moi sur</h2>
              <a
                href="https://www.linkedin.com/in/matteo-grech-369b06268/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="h-7 w-7 flex-shrink-0" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-blue-200">Mattéo Grech</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="glass-card rounded-3xl p-8 mt-12 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-3 text-warm-700">Prêt à collaborer ?</h2>
          <p className="text-muted-foreground mb-6">
            Je suis à la recherche d'une alternance en cybersécurité ou administration réseau/système.
            Si mon profil vous intéresse, contactez-moi !
          </p>
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-button inline-flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Proposer une alternance
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
