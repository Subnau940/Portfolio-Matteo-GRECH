import { useMemo, useState } from "react"
import { ArrowUpRight, BookOpen, Code2, ExternalLink, FileText } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { StatutBadge } from "@/components/StatutBadge"
import { YouTubeFacade } from "@/components/YouTubeFacade"
import { PROJETS, SECTIONS, TAGS, type Lien, type Projet, type Tag } from "@/data/projets"

const lienIcon = { doc: BookOpen, code: Code2, site: ExternalLink, pdf: FileText }

function LienBouton({ lien }: { lien: Lien }) {
  const Icon = lienIcon[lien.kind]
  const externe = lien.href.startsWith("http")
  return (
    <a
      href={lien.href}
      target={externe ? "_blank" : undefined}
      rel={externe ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
    >
      <Icon className="h-4 w-4" />
      {lien.label}
      {externe && <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />}
    </a>
  )
}

function CarteProjet({ projet }: { projet: Projet }) {
  const large = Boolean(projet.youtubeId || projet.sousProjets)
  return (
    <article className={`glass-card card-hover rounded-xl p-6 flex flex-col ${large ? "lg:col-span-2" : ""}`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-foreground">{projet.title}</h3>
        <StatutBadge statut={projet.statut} annee={projet.annee} />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">{projet.resume}</p>

      <div className={large && projet.youtubeId ? "grid lg:grid-cols-2 gap-6 mt-5" : "mt-5"}>
        {projet.youtubeId && <YouTubeFacade id={projet.youtubeId} title={`${projet.title} — trailer`} />}

        {projet.points.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {projet.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-primary font-mono select-none">›</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {projet.sousProjets && (
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          {projet.sousProjets.map((sp) => (
            <div key={sp.title} className="rounded-lg border border-border bg-background/40 p-4 flex flex-col">
              <h4 className="text-sm font-semibold text-foreground mb-1">{sp.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{sp.detail}</p>
              {sp.lien && (
                <div className="mt-3">
                  <LienBouton lien={sp.lien} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {projet.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
        {projet.liens.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {projet.liens.map((l) => (
              <LienBouton key={l.href} lien={l} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

const Projets = () => {
  const [filtre, setFiltre] = useState<Tag | null>(null)

  const visibles = useMemo(
    () => (filtre ? PROJETS.filter((p) => p.tags.includes(filtre)) : PROJETS),
    [filtre],
  )

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        kicker="projets"
        title="Projets"
        intro="Ce que j'ai construit, testé et documenté. Chaque projet renvoie vers sa documentation complète sur la base de connaissances."
      />

      {/* Filtre par tag : un seul actif, cliquer à nouveau le retire */}
      <div className="flex flex-wrap items-center gap-2 mb-12" role="group" aria-label="Filtrer par thème">
        <button
          onClick={() => setFiltre(null)}
          className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${
            filtre === null ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          tout
        </button>
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setFiltre(filtre === t ? null : t)}
            aria-pressed={filtre === t}
            className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${
              filtre === t ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {SECTIONS.map((section) => {
          const projets = visibles.filter((p) => p.contexte === section.id)
          if (projets.length === 0) return null
          return (
            <section key={section.id}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground">{section.titre}</h2>
                <p className="text-sm text-muted-foreground mt-1">{section.intro}</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                {projets.map((p) => (
                  <CarteProjet key={p.id} projet={p} />
                ))}
              </div>
            </section>
          )
        })}
        {visibles.length === 0 && (
          <p className="text-muted-foreground font-mono text-sm">Aucun projet pour ce filtre.</p>
        )}
      </div>
    </div>
  )
}

export default Projets
