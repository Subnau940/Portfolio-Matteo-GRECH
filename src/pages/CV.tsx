
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from "lucide-react"

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Mon CV
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez mon parcours et mes compétences
          </p>
        </div>

        {/* CV Image */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-scale-in">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">CV - Mattéo Grech</h2>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/8975e34f-f0dc-4b3b-ab5d-22c4dff4e2ad.png" 
                alt="CV de Mattéo Grech"
                className="max-w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-6 flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-primary to-warm-500 text-white rounded-2xl hover:from-primary/90 hover:to-warm-500/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Download className="h-5 w-5" />
              Télécharger le CV
            </button>
          </div>
        </div>

        {/* Résumé des informations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations personnelles */}
          <div className="glass-card rounded-3xl p-6 animate-scale-in">
            <h3 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">Informations personnelles</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">matteo.grech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">06 95 48 27 04</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Montpellier, France</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">21 ans</span>
              </div>
            </div>
          </div>

          {/* Compétences clés */}
          <div className="glass-card rounded-3xl p-6 animate-scale-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent">Compétences clés</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Administration système et réseau</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Supervision d'infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Gestion des incidents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Veille technologique</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Cybersécurité</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
