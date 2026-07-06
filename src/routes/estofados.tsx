import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/site-chrome";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowDown,
  Star,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/estofados")({
  head: () => ({
    meta: [
      {
        title:
          "Higienização e Impermeabilização de Sofás e Estofados — Dr. Limpow · Vargem Grande Paulista e Cotia",
      },
      {
        name: "description",
        content:
          "Limpeza profissional e impermeabilização de sofás, poltronas, colchões, tapetes e estofados automotivos a domicílio em Vargem Grande Paulista, Cotia, Itapevi e região. A partir de R$280.",
      },
      {
        property: "og:title",
        content: "Impermeabilização e Higienização de Estofados — Dr. Limpow",
      },
      {
        property: "og:description",
        content:
          "Manchas, odores e ácaros saem. Limpeza profissional de sofá no seu endereço, a partir de R$280. Agende já pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstofadosPage,
});

const WA = "https://wa.me/5511942815534?text=Ol%C3%A1!%20Gostaria%20de%20limpar%20meu%20estofado.";

const SERVICES = [
  {
    name: "Sofá (2 a 3 lugares)",
    meta: "Aprox. 2h a 3h · A partir de R$280 · Limpeza profunda e remoção de odores",
  },
  {
    name: "Colchão (casal, queen ou king)",
    meta: "Eliminação de ácaros, fungos e alérgenos · Sob consulta de tempo",
  },
  {
    name: "Cadeiras e poltronas",
    meta: "Aprox. 30 min a 1h por unidade · Renovação completa de fibras",
  },
  {
    name: "Tapetes e carpetes",
    meta: "Extração profunda de poeira e desodorização a partir de 1h",
  },
  {
    name: "Estofados de automóvel",
    meta: "Bancos, carpete interno e teto · Aprox. 1h a 2h · Higienização de tecido ou couro",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Envie uma foto",
    body: "Compartilhe algumas fotos do estofado pelo WhatsApp para uma avaliação rápida. É simples e sem compromisso.",
  },
  {
    n: "2",
    title: "Agende o melhor dia",
    body: "Após a avaliação, enviamos o orçamento e marcamos juntos a data e o horário que funciona melhor pra você.",
  },
  {
    n: "3",
    title: "A gente vai até você",
    body: "Chegamos no seu endereço com todos os equipamentos necessários. Você não precisa carregar nada nem preparar nada além de liberar acesso ao estofado.",
  },
];

const FAQ = [
  {
    q: "Vai sujar minha sala durante a limpeza do sofá?",
    a: "Não. Nossas extratoras profissionais aplicam o produto e aspiram a sujeira simultaneamente. Todo o líquido e poeira são sugados para a máquina, deixando seu piso e paredes intactos. Saímos deixando tudo em ordem.",
  },
  {
    q: "Quanto tempo o estofado fica úmido depois da lavagem?",
    a: "Geralmente entre 2 e 4 horas. O tempo de secagem completa varia ligeiramente com base no tipo de tecido e na ventilação natural do ambiente. Na maioria das vezes, o estofado está pronto para uso no mesmo dia.",
  },
  {
    q: "Os produtos são seguros para crianças e animais de estimação?",
    a: "Com certeza. Utilizamos produtos de limpeza profissionais ecológicos, hipoalergênicos e biodegradáveis. Após o processo de extração e secagem, a superfície fica livre de resíduos e é totalmente segura para toda a família.",
  },
  {
    q: "Como funciona a remoção de manchas e odores difíceis?",
    a: "Avaliamos o estofado antes de iniciar. Manchas de gordura, sujeira do dia a dia, mofo e urina de pets saem com facilidade. No entanto, se detectarmos manchas com desgaste físico do tecido ou corrosão ácida (onde a fibra foi queimada), avisamos com antecedência.",
  },
  {
    q: "Vocês atendem no meu bairro?",
    a: "Nosso foco de atendimento principal é Vargem Grande Paulista e Cotia. Também atendemos regiões vizinhas como Itapevi, São Roque e Ibiúna sob consulta. Entre em contato via WhatsApp para confirmar a agenda para seu endereço.",
  },
];

const GALLERY = [
  { title: "Sofá retrátil", desc: "Remoção de encardido profundo e manchas de uso diário" },
  { title: "Poltrona em suede", desc: "Revitalização da cor e eliminação de ácaros" },
  {
    title: "Cadeiras de jantar",
    desc: "Eliminação de respingos de comida e renovação do estofado",
  },
  { title: "Banco automotivo", desc: "Higienização completa e estética da cabine do veículo" },
  { title: "Tapete bouclé", desc: "Extração de poeira profunda e desodorização" },
  { title: "Colchão Casal King", desc: "Desinfecção profunda contra ácaros e fungos nas camadas" },
];

const TESTIMONIALS = [
  {
    text: "Meu sofá parecia condenado devido à sujeira dos cachorros. A equipe da Dr. Limpow veio em Cotia e deixou ele parecendo novo. Cheiroso e limpo. Recomendo muito!",
    author: "Karina M. — Cotia",
  },
  {
    text: "Excelente serviço em Vargem Grande. Chegaram exatamente na hora agendada, foram muito cuidadosos com o piso de madeira da sala e o sofá secou rápido. Valeu cada centavo.",
    author: "Rodrigo S. — Vargem Grande Paulista",
  },
  {
    text: "Trabalho muito profissional. Fiz a higienização dos bancos do meu carro e a higienização do colchão no mesmo dia. Atendimento ágil e preço justo.",
    author: "Marcos F. — Cotia",
  },
];

const TRUST = [
  "5+ anos de experiência na região",
  "Atendimento prático no seu endereço",
  "Produtos aprovados pela ANVISA e seguros",
  "Resultado verificado e aprovado na hora",
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <MessageCircle className={className} strokeWidth={2.2} />;
}

function EstofadosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border-soft">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(80% 50% at 50% 0%, var(--brand-soft), transparent 75%)",
            }}
          />
          <div className="container-page pt-14 pb-20 sm:pt-24 sm:pb-28">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 mr-1" /> Higienização de estofados premium
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl text-white tracking-tight">
              Seu estofado limpo, higienizado e renovado sem você sair de casa.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-foreground-soft sm:text-lg leading-relaxed">
              Higienizamos sofás, colchões, tapetes, cadeiras, poltronas e estofados de automóveis
              com atendimento em domicílio.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-card-2/80 px-5 py-4 text-sm sm:text-base text-foreground-soft">
              <Clock className="h-5 w-5 text-brand-light flex-shrink-0" />
              <span>
                <strong className="text-white">A partir de R$280</strong> · Atendimento no seu
                endereço · <strong className="text-white">Até 3 horas</strong>
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar orçamento
              </a>
              <a href="#processo" className="btn-ghost flex items-center gap-1.5">
                Como agendar <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="container-page py-20 border-b border-border-soft" id="servicos">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-text flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-brand-light"></span> O que nós limpamos
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">
              Soluções completas de higienização
            </h2>
            <p className="mt-4 text-foreground-soft leading-relaxed">
              Confira os prazos estimados e as soluções que levamos até você. Agilidade e
              transparência em cada detalhe.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hover:border-brand-light/30 transition-all duration-300 group"
              >
                <span className="mt-1 grid h-7 w-7 place-items-center rounded-lg bg-brand-soft text-brand-text group-hover:bg-brand-light group-hover:text-white transition-colors">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-bold text-white text-base">{s.name}</h4>
                  <p className="mt-2 text-sm text-foreground-soft leading-relaxed">{s.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMO AGENDAR */}
        <section id="processo" className="border-b border-border-soft bg-background-soft/30">
          <div className="container-page py-20">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-text flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-brand-light"></span> Simples assim
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">Como agendar</h2>
              <p className="mt-4 text-foreground-soft leading-relaxed">
                Três passos simples, sem burocracia e sem você precisar sair de casa.
              </p>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-xl border border-border bg-card p-8 relative overflow-hidden group hover:border-brand-light/20 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand font-mono text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {s.n}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-soft">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-page py-20 border-b border-border-soft" id="faq">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <span className="chip mb-4">
                <ShieldCheck className="h-3.5 w-3.5 mr-1" /> Perguntas frequentes
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-bold">
                Dúvidas sobre a higienização de sofá
              </h2>
              <p className="mt-4 text-foreground-soft leading-relaxed">
                Respondemos às perguntas mais recorrentes de nossos clientes em Vargem Grande
                Paulista e Cotia para te dar total segurança antes de fechar.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-foreground-soft bg-card p-4 rounded-xl border border-border">
                <MapPin className="h-5 w-5 text-brand-light flex-shrink-0" />
                <span>Atendemos também Itapevi, São Roque e Ibiúna sob consulta de frete.</span>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-border bg-card px-6 py-2"
            >
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="text-base py-5 text-white hover:text-brand-text text-left font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-soft pb-5 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA INTERMEDIÁRIO */}
        <section className="container-page py-6">
          <div className="rounded-3xl border border-border bg-card-2 p-8 sm:p-12 text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-soft/20 via-transparent to-brand-soft/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl text-white font-bold">
              Pronto para agendar a limpeza do seu sofá?
            </h3>
            <p className="mt-3 text-foreground-soft max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Você agenda pelo WhatsApp em menos de 2 minutos. Escolha o melhor dia e deixe o resto
              conosco.
            </p>
            <div className="mt-8 flex justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Falar com o Victor no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className="container-page py-20 border-b border-border-soft" id="galeria">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-text flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-brand-light"></span> Antes e depois
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold">Veja a transformação</h2>
            <p className="mt-4 text-foreground-soft leading-relaxed">
              Sem filtros e sem edição. Apenas resultados reais de serviços realizados pela nossa
              equipe.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY.map((g, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-4 hover:border-brand-light/20 transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-lg bg-background-soft flex items-center justify-center text-muted text-sm font-semibold border border-border-soft overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-soft/10 group-hover:bg-brand-soft/20 transition-colors" />
                  <Sparkles className="h-8 w-8 text-brand-text/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-white text-sm">{g.title}</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar orçamento
            </a>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-b border-border-soft bg-background-soft/30" id="depoimentos">
          <div className="container-page py-20">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-text flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-brand-light"></span> Avaliações
              </span>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl sm:text-4xl text-white font-bold">
                  O que nossos clientes dizem
                </h2>
                <span className="chip flex items-center gap-1.5 shrink-0">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> 5,0 ·{" "}
                  <span className="text-brand-text">[X avaliações] no Google</span>
                </span>
              </div>
              <p className="mt-2 text-foreground-soft leading-relaxed">
                Avaliações reais publicadas no Google por clientes que confiaram no nosso trabalho.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between hover:border-brand-light/10 transition-all duration-300"
                >
                  <div>
                    <div className="flex gap-1 text-yellow-500 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground-soft text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                  <footer className="mt-6 pt-4 border-t border-border-soft text-sm text-white font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-light"></span> {t.author}
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="container-page py-24">
          <div className="mx-auto max-w-4xl text-center bg-card-2 border border-border rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(85% 85% at 50% 115%, var(--brand-soft), transparent 75%)",
              }}
            />
            <h2 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Seu estofado merece esse cuidado.
            </h2>
            <p className="mt-4 text-foreground-soft max-w-xl mx-auto leading-relaxed">
              Fale com a gente pelo WhatsApp e receba seu orçamento de forma rápida e descomplicada.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-foreground-soft">
              {TRUST.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4.5 w-4.5 text-good" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar orçamento
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              Sem formulário. Resposta direta com o Victor. Normalmente respondemos em menos de 1h.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
