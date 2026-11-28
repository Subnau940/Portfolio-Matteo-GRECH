import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { EMAIL, PHONE, LINKEDIN_URL, GITHUB_URL } from "@/lib/links"

const canaux = [
  { icon: Mail, label: "E-mail", valeur: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Téléphone", valeur: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", valeur: "Mattéo Grech", href: LINKEDIN_URL },
  { icon: Github, label: "GitHub", valeur: "Subnau940", href: GITHUB_URL },
]

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        kicker="contact"
        title="Contact"
        intro="Pour une opportunité, une question sur un projet ou un échange technique : le plus simple est l'e-mail."
      />
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {canaux.map(({ icon: Icon, label, valeur, href }) => {
          const externe = href.startsWith("http")
          return (
            <a
              key={label}
              href={href}
              target={externe ? "_blank" : undefined}
              rel={externe ? "noopener noreferrer" : undefined}
              className="glass-card card-hover rounded-xl p-5 flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block font-mono text-[11px] text-muted-foreground">{label}</span>
                <span className="block text-sm font-medium text-foreground">{valeur}</span>
              </span>
              {externe && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
            </a>
          )
        })}
      </div>
      <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" /> Montpellier (34)
      </p>
    </div>
  )
}

export default Contact
