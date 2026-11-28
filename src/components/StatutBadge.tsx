import type { Statut } from "@/data/projets"

export function StatutBadge({ statut, annee }: { statut: Statut; annee?: string }) {
  const enCours = statut === "En cours"
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-[11px] text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${enCours ? "bg-primary animate-pulse" : "bg-muted-foreground/60"}`} />
      {statut}
      {annee && <span className="text-muted-foreground/60">· {annee}</span>}
    </span>
  )
}
