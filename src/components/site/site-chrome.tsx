import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const NAV = [{ to: "/estofados", label: "Estofados" }];

const WA = "https://wa.me/5511942815534?text=Ol%C3%A1!%20Gostaria%20de%20limpar%20meu%20estofado.";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background-soft/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo mode="color" size={32} className="w-auto h-8 animate-fade-in" />
          <span className="font-logo text-brand-text text-2xl font-bold tracking-tight">
            Dr. Limpow
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm text-foreground-soft sm:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-white transition-colors"
              activeProps={{ className: "text-white font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm hidden sm:inline-flex"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background-soft/40">
      <div className="container-page py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted">
        <div className="flex items-center gap-3">
          <Logo mode="color" size={24} className="w-auto h-6" />
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-logo text-brand-text font-bold">Dr. Limpow</span> · Higienização
            profissional
          </span>
        </div>
        <div className="flex gap-5">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <span>Vargem Grande Paulista · Cotia</span>
        </div>
      </div>
    </footer>
  );
}
