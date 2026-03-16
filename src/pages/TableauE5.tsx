import { FileText, Download } from "lucide-react"

const TableauE5 = () => {
  const pdfFile = "/tableau-synthese.pdf"

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-warm-500 to-warm-700 bg-clip-text text-transparent">
            Tableau de synthèse E5
          </h1>
          <p className="text-xl text-muted-foreground">
            BTS SIO SISR – Annexe 8-3 : Grille d'aide à l'évaluation
          </p>
        </div>

        {/* Description */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-scale-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-warm-700 mb-2">Épreuve E5 – BTS SIO SISR</h2>
              <p className="text-muted-foreground">
                Ce tableau de synthèse présente la grille d'évaluation des compétences développées
                dans le cadre de l'épreuve E5 du BTS SIO option SISR. Il recense les niveaux de
                maîtrise atteints pour chaque compétence professionnelle.
              </p>
            </div>
          </div>
        </div>

        {/* Téléchargement PDF */}
        <div className="glass-card rounded-3xl p-8 mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#E53935"/>
                  <path d="M28 12H16a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V20l-6-8z" fill="white"/>
                  <path d="M28 12v8h6" stroke="#E53935" strokeWidth="1.5" fill="none"/>
                  <text x="12" y="33" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#E53935">PDF</text>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-warm-700">Tableau de synthèse E5</p>
                <p className="text-sm text-muted-foreground">Fichier PDF – Grille d'évaluation BTS SIO SISR</p>
              </div>
            </div>
            <a
              href={pdfFile}
              download
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              Télécharger le tableau
            </a>
          </div>
        </div>

        {/* Aperçu PDF intégré */}
        <div className="glass-card rounded-3xl overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-warm-100 flex items-center justify-between">
            <h3 className="font-semibold text-warm-700">Annexe 8-3 : Grille d'aide à l'évaluation</h3>
            <a
              href={pdfFile}
              download
              className="flex items-center gap-2 px-4 py-1.5 text-sm bg-warm-500 text-white rounded-xl hover:bg-warm-600 transition-all duration-200 hover:scale-105 font-medium"
            >
              <Download className="h-3.5 w-3.5" />
              Télécharger
            </a>
          </div>
          <div className="p-0">
            <iframe
              src={pdfFile}
              title="Tableau de synthèse E5"
              className="w-full"
              style={{ height: "80vh", minHeight: "600px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableauE5
