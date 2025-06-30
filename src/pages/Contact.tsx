
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react"

const Contact = () => {
  const contactInfo = {
    email: "matteogrech@gmail.com",
    phone: "06 56 04 28 46",
    address: "252 Avenue Théofrege de Mercourt, 34000 Montpellier"
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "#",
      color: "bg-black",
      hoverColor: "hover:bg-gray-800"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email professionnel</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-warm-500 rounded-2xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-warm-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold mb-4">Disponibilité</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Disponible pour alternance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Ouvert aux stages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warm-500 rounded-full"></div>
                  <span>Projets collaboratifs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-bold mb-6">Retrouvez-moi sur</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`${social.color} ${social.hoverColor} text-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center text-center group`}
                    style={{animationDelay: `${0.3 + (index * 0.1)}s`}}
                  >
                    <social.icon className="h-8 w-8 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Message de contact */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h2 className="text-2xl font-bold mb-4">Envoyez-moi un message</h2>
              <p className="text-muted-foreground mb-6">
                Que ce soit pour une opportunité professionnelle, une collaboration ou simplement pour échanger, 
                je serai ravi de vous répondre rapidement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="ios-button flex-1 text-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Envoyer un email
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="glass-card rounded-3xl p-8 mt-12 text-center animate-scale-in">
          <h2 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h2>
          <p className="text-muted-foreground mb-6">
            Je suis actuellement à la recherche d'une alternance en administration système et réseau. 
            Si mon profil vous intéresse, contactez-moi !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=Opportunité d'alternance`}
              className="ios-button"
            >
              Proposer une alternance
            </a>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200">
              Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
