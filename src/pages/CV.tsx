
import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mon CV</h1>
          <p className="text-xl text-muted-foreground">
            Téléchargez mon curriculum vitae complet
          </p>
        </div>

        {/* CV Download Section */}
        <div className="glass-card rounded-3xl p-8 mb-8 text-center animate-scale-in">
          <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Download className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Télécharger mon CV</h2>
          <p className="text-muted-foreground mb-6">
            Version mise à jour - Format PDF
          </p>
          <button className="ios-button">
            <Download className="mr-2 h-5 w-5" />
            Télécharger le CV
          </button>
        </div>

        {/* CV Preview */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-3xl mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  VN
                </div>
                <h3 className="text-xl font-bold">Votre Nom</h3>
                <p className="text-muted-foreground">Étudiant BTS SIO SISR</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">votre.email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">06 XX XX XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Votre ville, France</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Compétences</h4>
                <div className="space-y-3">
                  {[
                    "Administration système",
                    "Réseaux TCP/IP",
                    "Windows Server",
                    "Linux",
                    "Virtualisation",
                    "Sécurité informatique"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Formation */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">Formation</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">BTS SIO SISR</h4>
                    <p className="text-muted-foreground text-sm">ESICAD • 2023-2025</p>
                    <p className="text-sm">Spécialité Solutions d'Infrastructure, Systèmes et Réseaux</p>
                  </div>
                  <div className="border-l-4 border-warm-300 pl-4">
                    <h4 className="font-semibold">Baccalauréat</h4>
                    <p className="text-muted-foreground text-sm">Lycée • 2023</p>
                    <p className="text-sm">Mention [votre mention]</p>
                  </div>
                </div>
              </section>

              {/* Expériences */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">Expériences</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Stage Technicien Informatique</h4>
                    <p className="text-muted-foreground text-sm">Entreprise XYZ • Mai-Juin 2024</p>
                    <p className="text-sm">Maintenance parc informatique, installation postes de travail</p>
                  </div>
                  <div className="border-l-4 border-warm-300 pl-4">
                    <h4 className="font-semibold">Job d'été</h4>
                    <p className="text-muted-foreground text-sm">Été 2023</p>
                    <p className="text-sm">Développement de compétences professionnelles</p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-warm-50 p-4 rounded-2xl">
                    <h4 className="font-semibold">CCNA</h4>
                    <p className="text-sm text-muted-foreground">En cours</p>
                  </div>
                  <div className="bg-warm-50 p-4 rounded-2xl">
                    <h4 className="font-semibold">CompTIA A+</h4>
                    <p className="text-sm text-muted-foreground">Prévu 2024</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
