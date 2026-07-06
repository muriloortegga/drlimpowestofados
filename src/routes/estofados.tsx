import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/site-chrome";
import { LogoIcon } from "@/components/site/Logo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Clock,
  Sparkles,
  Check,
  X,
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

const PROOF = [
  { n: "5+", label: "anos higienizando estofados na região" },
  { n: "500+", label: "sofás, colchões e bancos entregues limpos" },
  { n: "5,0", label: "média de avaliação no Google" },
  { n: "<1h", label: "tempo médio de resposta no WhatsApp" },
];

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

const COMPARISON = [
  { crit: "Equipamento de extração profissional", home: false, us: true },
  { crit: "Remoção real de ácaros e alérgenos", home: false, us: true },
  { crit: "Atendimento no seu endereço", home: true, us: true },
  { crit: "Produto seguro para crianças e pets", home: false, us: true },
  { crit: "Secagem em poucas horas, não dias", home: false, us: true },
  { crit: "Resultado avaliado com você antes de ir embora", home: false, us: true },
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
    author: "Karina M.",
    role: "Cliente residencial · Cotia",
  },
  {
    text: "Excelente serviço em Vargem Grande. Chegaram exatamente na hora agendada, foram muito cuidadosos com o piso de madeira da sala e o sofá secou rápido. Valeu cada centavo.",
    author: "Rodrigo S.",
    role: "Cliente residencial · Vargem Grande Paulista",
  },
  {
    text: "Trabalho muito profissional. Fiz a higienização dos bancos do meu carro e a higienização do colchão no mesmo dia. Atendimento ágil e preço justo.",
    author: "Marcos F.",
    role: "Cliente residencial + automotivo · Cotia",
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

function ChapterLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="chapter-label reveal">
      <span className="inline-block h-px w-8 bg-brand-text/60" />
      Capítulo {n} · {title}
    </div>
  );
}

function EstofadosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* HERO — Capítulo 1 : Problema/Promessa */}
        <section className="relative overflow-hidden border-b border-border-soft">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(80% 50% at 50% 0%, var(--brand-soft), transparent 75%)",
            }}
          />
          <div className="container-page pt-14 pb-20 sm:pt-24 sm:pb-28">
            <ChapterLabel n="1" title="O problema" />
            <h1 className="reveal mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl text-white tracking-tight">
              Seu estofado limpo, higienizado e renovado sem você sair de casa.
            </h1>
            <p className="reveal mt-6 max-w-2xl text-base text-foreground-soft sm:text-lg leading-relaxed">
              Manchas, odores, ácaros e o cansaço de olhar pro sofá e adiar mais uma vez. A gente
              resolve isso no seu endereço — sem você mover móvel, sem tirar do lugar, sem esperar
              dias pra usar de novo.
            </p>
            <div className="reveal mt-8 inline-flex items-center gap-3 rounded-xl surface-2 px-5 py-4 text-sm sm:text-base text-foreground-soft">
              <Clock className="h-5 w-5 text-brand-light flex-shrink-0" />
              <span>
                <strong className="text-white">A partir de R$280</strong> · Atendimento no seu
                endereço · <strong className="text-white">Até 3 horas</strong>
              </span>
            </div>
            <div className="reveal mt-10 flex flex-wrap gap-4 items-center">
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

        {/* CAPÍTULO 2 — PROVA */}
        <section className="border-b border-border-soft" id="prova">
          <div className="container-page py-16 sm:py-20">
            <ChapterLabel n="2" title="A prova" />
            <h2 className="reveal mt-4 max-w-3xl text-3xl sm:text-4xl text-white font-bold">
              Antes de explicar como a gente trabalha, olha o que já entregamos.
            </h2>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF.map((p) => (
                <div key={p.label} className="surface-1 reveal-num p-6">
                  <dt className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {p.n}
                  </dt>
                  <dd className="mt-2 text-sm text-foreground-soft leading-snug">{p.label}</dd>
                </div>
              ))}
            </dl>

            {/* Comparativo lado a lado */}
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
              <div className="reveal">
                <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                  Higienização caseira vs. Dr. Limpow
                </h3>
                <p className="mt-4 text-foreground-soft leading-relaxed text-sm sm:text-base">
                  Aspirador de pó, pano úmido e sabão neutro tiram o que está na superfície. O que
                  fica dentro da espuma — ácaro, gordura, urina de pet, suor acumulado — só sai com
                  extração profissional.
                </p>
              </div>

              <div className="surface-2 overflow-hidden">
                <div className="grid grid-cols-[1.6fr_1fr_1fr] text-xs sm:text-sm">
                  <div className="px-4 py-3 sm:px-6 sm:py-4 text-foreground-soft font-mono uppercase tracking-wider text-[11px]">
                    Critério
                  </div>
                  <div className="px-4 py-3 sm:px-6 sm:py-4 text-center text-muted font-semibold">
                    Limpeza caseira
                  </div>
                  <div className="px-4 py-3 sm:px-6 sm:py-4 text-center text-brand-text font-semibold">
                    Dr. Limpow
                  </div>
                </div>
                <div className="divide-y divide-border-soft border-t border-border-soft">
                  {COMPARISON.map((row) => (
                    <div
                      key={row.crit}
                      className="reveal-row grid grid-cols-[1.6fr_1fr_1fr] items-center text-sm"
                    >
                      <div className="px-4 py-4 sm:px-6 text-white">{row.crit}</div>
                      <div className="px-4 py-4 sm:px-6 flex justify-center">
                        {row.home ? (
                          <Check className="h-5 w-5 text-good" />
                        ) : (
                          <X className="h-5 w-5 text-muted" />
                        )}
                      </div>
                      <div className="px-4 py-4 sm:px-6 flex justify-center">
                        {row.us ? (
                          <Check className="h-5 w-5 text-good" />
                        ) : (
                          <X className="h-5 w-5 text-muted" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Depoimento nomeado destacado */}
            <figure className="reveal mt-14 surface-2 p-8 sm:p-10 max-w-3xl">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-white leading-relaxed">
                "Meu sofá parecia condenado devido à sujeira dos cachorros. Deixaram ele parecendo
                novo. Cheiroso e limpo."
              </blockquote>
              <figcaption className="mt-6 text-sm text-foreground-soft">
                <strong className="text-white">Karina M.</strong> — Cliente residencial, Cotia
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CAPÍTULO 3 — COMO FUNCIONA */}
        <section id="processo" className="border-b border-border-soft bg-background-soft/30">
          <div className="container-page py-20">
            <ChapterLabel n="3" title="Como funciona" />
            <h2 className="reveal mt-4 text-3xl sm:text-4xl text-white font-bold max-w-3xl">
              Três passos, zero burocracia.
            </h2>
            <p className="reveal mt-4 max-w-2xl text-foreground-soft leading-relaxed">
              Sem formulário, sem cadastro. Você fala com o Victor no WhatsApp e a gente se acerta.
            </p>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="reveal surface-1 p-8 relative group">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand font-mono text-xl font-bold text-white"
                    style={{
                      transition:
                        "transform var(--motion-duration-state) var(--motion-ease), opacity var(--motion-duration-state) var(--motion-ease)",
                    }}
                  >
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

        {/* SERVIÇOS */}
        <section className="container-page py-20 border-b border-border-soft" id="servicos">
          <div className="max-w-3xl">
            <ChapterLabel n="3.1" title="O que higienizamos" />
            <h2 className="reveal mt-4 text-3xl sm:text-4xl text-white font-bold">
              Soluções completas de higienização
            </h2>
            <p className="reveal mt-4 text-foreground-soft leading-relaxed">
              Prazos estimados e o que levamos até você. Sem letra miúda, sem surpresa no final.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.name} className="reveal surface-1 flex items-start gap-4 p-6">
                <span className="mt-1 grid h-7 w-7 place-items-center rounded-lg bg-brand-soft text-brand-text">
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

        {/* CAPÍTULO 4 — PARCERIA / FAQ */}
        <section className="container-page py-20 border-b border-border-soft" id="faq">
          <ChapterLabel n="4" title="A gente cuida junto" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="reveal text-3xl sm:text-4xl text-white font-bold">
                Dúvidas reais de quem já pensou em higienizar um estofado
              </h2>
              <p className="reveal mt-4 text-foreground-soft leading-relaxed">
                A gente não trata cliente como pedido único. Se você tem sofá, colchão, tapete e
                carro em casa, tá tudo dentro do mesmo relacionamento — mesmo WhatsApp, mesma
                pessoa, mesmo cuidado.
              </p>
              <div className="reveal mt-8 flex items-center gap-2 text-sm text-foreground-soft surface-1 p-4">
                <MapPin className="h-5 w-5 text-brand-light flex-shrink-0" />
                <span>Atendemos também Itapevi, São Roque e Ibiúna sob consulta de frete.</span>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="reveal rounded-xl surface-1 px-6 py-2"
            >
              {FAQ.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border-soft last:border-0"
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
          <div className="reveal surface-2 p-8 sm:p-12 text-center rounded-3xl relative overflow-hidden">
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
            <ChapterLabel n="4.1" title="Resultados reais" />
            <h2 className="reveal mt-4 text-3xl sm:text-4xl text-white font-bold">
              Veja a transformação
            </h2>
            <p className="reveal mt-4 text-foreground-soft leading-relaxed">
              Sem filtros e sem edição. Apenas resultados de serviços realizados pela equipe.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY.map((g, index) => (
              <div key={index} className="reveal surface-1 p-4">
                <div className="aspect-[4/3] rounded-lg bg-background-soft flex items-center justify-center text-muted text-sm font-semibold border border-border-soft overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-soft/10" />
                  <Sparkles className="h-8 w-8 text-brand-text/30" />
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-white text-sm">{g.title}</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-b border-border-soft bg-background-soft/30" id="depoimentos">
          <div className="container-page py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h2 className="reveal text-3xl sm:text-4xl text-white font-bold">
                  O que nossos clientes dizem
                </h2>
                <span className="chip flex items-center gap-1.5 shrink-0">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> 5,0 no Google
                </span>
              </div>
              <p className="reveal mt-2 text-foreground-soft leading-relaxed">
                Avaliações reais publicadas no Google por clientes que confiaram no nosso trabalho.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="reveal surface-1 p-8 flex flex-col justify-between">
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
                  <footer className="mt-6 pt-4 border-t border-border-soft text-sm">
                    <div className="text-white font-semibold flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-light"></span>
                      {t.author}
                    </div>
                    <div className="mt-1 text-xs text-muted pl-3.5">{t.role}</div>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPÍTULO 5 — AÇÃO */}
        <section className="container-page py-24" id="ação">
          <ChapterLabel n="5" title="A hora é agora" />
          <div className="reveal mt-6 mx-auto max-w-4xl text-center surface-2 rounded-3xl p-8 sm:p-16 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(85% 85% at 50% 115%, var(--brand-soft), transparent 75%)",
              }}
            />
            <div className="flex justify-center mb-6">
              <LogoIcon colorScheme="dark-bg" className="h-12 w-auto opacity-80" />
            </div>
            <h2 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Seu estofado merece esse cuidado.
            </h2>
            <p className="mt-4 text-foreground-soft max-w-xl mx-auto leading-relaxed">
              Fale com a gente pelo WhatsApp e receba seu orçamento de forma rápida e descomplicada.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-foreground-soft">
              {TRUST.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-good" />
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
