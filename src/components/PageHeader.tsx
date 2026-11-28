interface PageHeaderProps {
  kicker: string
  title: string
  intro?: string
}

/** En-tête commun : petit libellé mono (« // projets »), titre, phrase d'intro. */
export function PageHeader({ kicker, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-12 animate-fade-in">
      <p className="kicker mb-3">// {kicker}</p>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
      {intro && <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p>}
    </header>
  )
}
