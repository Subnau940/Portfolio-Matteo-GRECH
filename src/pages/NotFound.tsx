import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="max-w-6xl mx-auto px-6 py-32">
    <p className="kicker mb-4">// 404</p>
    <h1 className="text-3xl font-bold text-foreground">Cette page n'existe pas.</h1>
    <p className="mt-3 text-muted-foreground font-mono text-sm">$ ls ./page → No such file or directory</p>
    <Link to="/" className="ios-button mt-8">Retour à l'accueil</Link>
  </div>
)

export default NotFound
