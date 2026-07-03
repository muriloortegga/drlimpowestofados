import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/estofados", label: "Estofados" },
];

const WA = "https://wa.me/5511942815534?text=Ol%C3%A1!%20Gostaria%20de%20limpar%20meu%20estofado.";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
            D
          </span>
          <span className="tracking-tight">Dr. Limpow</span>
        </Link>
        <nav className="hidden gap-6 text-sm text-secondary sm:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm hidden sm:inline-flex">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">D</span>
          <span>© {new Date().getFullYear()} Dr. Limpow · Higienização profissional</span>
        </div>
        <div className="flex gap-5">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
          <span>Vargem Grande Paulista · Cotia</span>
        </div>
      </div>
    </footer>
  );
}
