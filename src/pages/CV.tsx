
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

        {/* CV Embed */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">Aperçu du CV</h2>
          <div className="w-full h-[800px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/8975e34f-f0dc-4b3b-ab5d-22c4dff4e2ad.png" 
              alt="CV de Mattéo Grech" 
              className="w-full h-full object-contain bg-white"
            />
          </div>
        </div>

        {/* CV Preview */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-3xl mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  MG
                </div>
                <h3 className="text-xl font-bold">Mattéo Grech</h3>
                <p className="text-muted-foreground">Étudiant BTS SIO SISR - 18 ans</p>
                <p className="text-sm text-muted-foreground">Alternance</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">matteogrech@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">06 56 04 28 46</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">252 Avenue Théofrege de Mercourt, 34000 Montpellier</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Compétences</h4>
                <div className="space-y-3">
                  {[
                    "Sécurité informatique",
                    "Langage technique",
                    "Management de parc informatique (GLPI, phpGLPI)",
                    "Polyvalence des OS",
                    "Maintenance/réparation Hardware"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Centres d'intérêt</h4>
                <div className="space-y-3">
                  {[
                    "Moto",
                    "Boxe", 
                    "Veille technologique",
                    "Jeux vidéo",
                    "Musculation",
                    "Cybersécurité",
                    "Cosmologie",
                    "Musique"
                  ].map((interest, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                      <span className="text-sm">{interest}</span>
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
                    <p className="text-muted-foreground text-sm">Lycée Saint Joseph Pierre Rouge • 2022-En cours</p>
                    <p className="text-sm">Spécialité Solutions d'Infrastructure, Systèmes et Réseaux</p>
                  </div>
                  <div className="border-l-4 border-warm-300 pl-4">
                    <h4 className="font-semibold">Bac Pro MTNE</h4>
                    <p className="text-muted-foreground text-sm">Lycée Pierre Mendes France • 2020-2022</p>
                    <p className="text-sm">Métiers Des Transitions Numérique et Énergétique (5 mois)</p>
                  </div>
                </div>
              </section>

              {/* Expériences */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">Expériences</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Stagiaire - Maintronic</h4>
                    <p className="text-muted-foreground text-sm">1 mois</p>
                    <p className="text-sm">Réparation matériel informatique, support utilisateur</p>
                  </div>
                  <div className="border-l-4 border-warm-300 pl-4">
                    <h4 className="font-semibold">Stagiaire - CNRS</h4>
                    <p className="text-muted-foreground text-sm">2 x 1 mois</p>
                    <p className="text-sm">Gestion tickets, configuration multi-OS</p>
                  </div>
                  <div className="border-l-4 border-warm-400 pl-4">
                    <h4 className="font-semibold">Stagiaire - Dell Technologie</h4>
                    <p className="text-muted-foreground text-sm">1 mois</p>
                    <p className="text-sm">Service technique, formatage Windows</p>
                  </div>
                </div>
              </section>

              {/* Savoir-être */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-primary">Savoir-être</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Assidu",
                    "Persévérant", 
                    "Curieux",
                    "Esprit d'équipe"
                  ].map((quality, index) => (
                    <div key={index} className="bg-warm-50 p-4 rounded-2xl">
                      <h4 className="font-semibold">{quality}</h4>
                    </div>
                  ))}
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
