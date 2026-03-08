import { FileText, Upload } from "lucide-react"

const TableauE5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100 py-12">
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

        {/* Image du tableau */}
        <div className="glass-card rounded-3xl overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-warm-100">
            <h3 className="font-semibold text-warm-700">Annexe 8-3 : Grille d'aide à l'évaluation (verso)</h3>
          </div>
          <div className="p-4">
            {/* Placeholder – remplacez par l'image réelle du tableau */}
            <img
              src="/tableau-e5.png"
              alt="Tableau de synthèse E5 – Grille d'évaluation BTS SIO SISR"
              className="w-full h-auto rounded-2xl border border-warm-200"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".placeholder-msg")) {
                  const div = document.createElement("div");
                  div.className = "placeholder-msg flex flex-col items-center justify-center py-20 gap-4 text-muted-foreground";
                  div.innerHTML = `
                    <div class="w-16 h-16 bg-warm-100 rounded-2xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    </div>
                    <p class="font-medium">Image du tableau de synthèse</p>
                    <p class="text-sm text-center max-w-sm">Déposez le fichier <code class="bg-warm-100 px-1 rounded">tableau-e5.png</code> dans le dossier <code class="bg-warm-100 px-1 rounded">public/</code> pour afficher le tableau.</p>
                  `;
                  parent.appendChild(div);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableauE5
