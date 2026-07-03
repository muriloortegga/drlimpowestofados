import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/site-chrome";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MessageCircle, Clock, ShieldCheck, Sparkles, Check, ArrowDown, Star } from "lucide-react";

export const Route = createFileRoute("/estofados")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados — Dr. Limpow · Vargem Grande Paulista e Cotia" },
      {
        name: "description",
        content:
          "Sofás, poltronas, cadeiras, carros e tapetes higienizados no seu endereço. A partir de R$280, em até 3 horas. Fale no WhatsApp.",
      },
      { property: "og:title", content: "Higienização de Estofados — Dr. Limpow" },
      {
        property: "og:description",
        content: "Manchas, odores e ácaros saem. Higienização profissional no seu endereço, a partir de R$280.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstofadosPage,
});

const WA =
  "https://wa.me/5511942815534?text=Ol%C3%A1!%20Gostaria%20de%20limpar%20meu%20estofado.";

const SERVICES = [
  { name: "Sofá (2 a 3 lugares)", meta: "aprox. 2–3h · a partir de R$280" },
  { name: "Poltrona", meta: "aprox. 1h" },
  { name: "Cadeiras de jantar", meta: "aprox. 30–40 min cada" },
  { name: "Bancos de carro (interna)", meta: "aprox. 1–2h" },
  { name: "Tapetes e carpetes", meta: "a partir de 1h" },
  { name: "Colchões e cabeceiras", meta: "sob consulta" },
];

const STEPS = [
  {
    n: "1",
    title: "Agendamento pelo WhatsApp",
    body: "Você manda mensagem, a gente responde rápido e combina a data certa. Sem formulário, sem espera.",
  },
  {
    n: "2",
    title: "A gente vai até o seu endereço",
    body: "Levamos equipamento e produto profissional. Você não precisa carregar nada nem liberar espaço além do estofado. Normalmente levamos menos de 10 minutos pra montar tudo.",
  },
  {
    n: "3",
    title: "Estofado higienizado, você aprova na hora",
    body: "Você vê o resultado antes de finalizar. Se tiver algo a ajustar, a gente resolve ali mesmo.",
  },
];

const FAQ = [
  {
    q: "Vai sujar minha casa durante o processo?",
    a: "Não. Trabalhamos com equipamento de extração — o processo aspira a sujeira ao mesmo tempo que limpa. Saímos deixando o lugar arrumado.",
  },
  {
    q: "Quanto tempo o estofado fica úmido depois?",
    a: "Entre 2 e 4 horas, dependendo do tecido e da ventilação do ambiente. Na maioria dos casos, está pronto pra usar no mesmo dia.",
  },
  {
    q: "Os produtos são seguros pra crianças e pets?",
    a: "Sim. Usamos produtos de limpeza profissionais sem agressivos químicos residuais. Depois da secagem, o estofado é completamente seguro.",
  },
  {
    q: "E se a mancha não sair?",
    a: "A gente avisa antes. Se avaliarmos que a mancha tem baixa chance de remoção completa (ex: tinta permanente, corrosão), falamos antes de começar — sem cobrar por um resultado que não conseguimos entregar.",
  },
  {
    q: "Preciso estar em casa durante o atendimento?",
    a: "Recomendamos que sim para acompanhar o resultado e aprovar no final. Mas se não puder, conversamos caso a caso.",
  },
  {
    q: "Vocês atendem no meu bairro?",
    a: "Atendemos Vargem Grande Paulista e Cotia. Regiões próximas como Itapevi, São Roque e Ibiúna também podem ser atendidas — consulte via WhatsApp.",
  },
];

const GALLERY = [
  "Sofá 3 lugares — antes/depois",
  "Poltrona reclinável — antes/depois",
  "Cadeiras de jantar — antes/depois",
  "Banco de carro — antes/depois",
  "Tapete de sala — antes/depois",
  "Colchão king — antes/depois",
];

const TESTIMONIALS = [
  {
    text: "Sofá parecia novo depois. Marcaram no dia, chegaram no horário, resolveram em uma tarde.",
    author: "Cliente — Cotia",
  },
  {
    text: "Tinha uma mancha antiga que eu já achava impossível. Saiu completamente. Vale cada centavo.",
    author: "Cliente — Vargem Grande Paulista",
  },
  {
    text: "Tenho dois gatos e estava com receio dos produtos. Ficaram longe durante o processo e depois voltou tudo normal. Sofá impecável.",
    author: "Cliente — placeholder",
  },
];

const TRUST = [
  "5+ anos de operação",
  "Atendimento no seu endereço",
  "Produto profissional seguro",
  "Resultado aprovado na hora",
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <MessageCircle className={className} strokeWidth={2} />;
}

function EstofadosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 45% at 50% 0%, color-mix(in oklch, var(--color-primary) 18%, transparent), transparent 70%)",
            }}
          />
          <div className="container-page pt-14 pb-16 sm:pt-24 sm:pb-20">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" /> Higienização de estofados
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Manchas, odores e ácaros saem. Seu estofado volta a ser confortável.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-secondary sm:text-lg">
              Higienização profissional de sofás, poltronas, cadeiras, tapetes e estofados de carro — feita no seu endereço, sem você precisar carregar nada.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-border-strong bg-card/70 px-4 py-3 text-sm sm:text-base">
              <Clock className="h-4 w-4 text-primary" />
              <span>
                A higienização de um sofá começa em <strong>R$280</strong> — e dura no máximo <strong>3 horas</strong> no seu endereço.
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Quero higienizar meu estofado
              </a>
              <a href="#processo" className="btn-ghost">
                Ver como funciona <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="container-page py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">O que higienizamos</h2>
            <p className="mt-3 text-secondary">
              Tempo estimado e faixa de preço aproximada, pra você já ter uma ideia antes de perguntar.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li
                key={s.name}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{s.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="border-y border-border bg-muted/60">
          <div className="container-page py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl">O processo no detalhe</h2>
              <p className="mt-3 text-secondary">
                Três passos simples. Sem burocracia, sem esperar dias por um retorno.
              </p>
            </div>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ / OBJEÇÕES */}
        <section className="container-page py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="chip"><ShieldCheck className="h-3.5 w-3.5" /> Perguntas frequentes</span>
              <h2 className="mt-4 text-3xl sm:text-4xl">Dúvidas antes de marcar</h2>
              <p className="mt-3 text-secondary">
                Reunimos as perguntas reais que a gente mais escuta. Se ficar faltando alguma, chama no WhatsApp — a gente responde direto.
              </p>
            </div>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="last:border-0">
                  <AccordionTrigger className="text-base py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-secondary leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA intermediário */}
        <section className="container-page">
          <div className="rounded-3xl border border-border-strong bg-primary text-primary-foreground p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl">Já tirou as dúvidas? Então bora marcar.</h3>
            <div className="mt-6 flex justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="container-page py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">Antes e depois</h2>
            <p className="mt-3 text-secondary">
              Galeria em atualização — em breve com fotos reais dos atendimentos.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY.map((caption) => (
              <figure key={caption}>
                <div className="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-br from-muted to-card grid place-items-center text-muted-foreground text-sm">
                  Foto em breve
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-y border-border bg-muted/60">
          <div className="container-page py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl">O que dizem os clientes</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.author} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed">"{t.text}"</p>
                  <footer className="mt-4 text-sm text-muted-foreground">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="container-page py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl">Pronto pra deixar seu estofado como novo?</h2>
            <p className="mt-4 text-secondary">
              Mande uma mensagem agora e combine seu atendimento. Simples assim.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-secondary">
              {TRUST.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sem formulário. Resposta direta com o Victor. Normalmente respondemos em menos de 1h.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
