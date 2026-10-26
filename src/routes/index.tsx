import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Award, Car, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, Cog, Disc3, GitMerge,
  Mail, MapPin, Menu, MessageCircle, Phone, Shield, Thermometer, Truck, X, Zap, FileText,
} from "lucide-react";
import logo from "@/assets/solucao-auto-parts-logo.webp";
import hero from "@/hero-fachada1.jpg.jpg";
import categorias from "@/assets/categorias.png";
import workbench from "@/galeria-pecas.jpg.png";
import delivery from "@/garantia-pecas.jpg.png";
import lucas from "@/assets/lucas.png";
import primeiraPeca from "@/primeira-peça.jpg.jpg";
import lanterna from "@/lanterna.jpg.jpg";
import danielCarvalho from "@/daniel-carvalho.jpg.png";
import parachoque from "@/parachoque.jpg.jpg";
import retrovisor from "@/retrovisor.jpg.jpg";
import jonasSantos from "@/jonas-santos.jpg.png";
import niltonFerreira from "@/nilton-ferreira.jpg.png";
import segurancaArte from "@/formas-de-pag2.jpg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solução Auto Parts | Peças Hyundai com nota fiscal" },
      { name: "description", content: "Especializada em peças Hyundai com envio imediato para todo o Brasil." },
      { property: "og:title", content: "Solução Auto Parts | Peças Hyundai com nota fiscal" },
      { property: "og:description", content: "Especializada em peças Hyundai com envio imediato para todo o Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "5511952709818";
const wa = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const QUOTE = wa("Olá! Gostaria de falar com o setor de peças e solicitar uma cotação.");

const nav = [
  ["#catalog", "Catálogo"], ["#gallery", "Galeria"], ["#guarantee", "Garantia"],
  ["#about", "Sobre"], ["#testimonials", "Avaliações"], ["#contact", "Contato"],
];
const heroModels = ["HB20", "HB20S", "HB20X", "Creta", "Tucson", "ix35", "Santa Fe", "i30", "Azera", "HR"];
const categories = [
  {
    name: "Motor e Componentes",
    icon: Cog,
    description: "Peças essenciais para o funcionamento, a vedação e o desempenho do motor.",
    items: ["Bloco e cabeçote", "Pistões e anéis", "Bielas e virabrequim", "Comando de válvulas", "Juntas e retentores", "Correias e tensores", "Coxins do motor"],
  },
  {
    name: "Sistema de Freios",
    icon: Disc3,
    description: "Componentes para frenagem segura e controle adequado do veículo.",
    items: ["Pastilhas de freio", "Discos e tambores", "Pinças de freio", "Cilindros de roda", "Cilindro mestre", "Flexíveis e mangueiras", "Sensores do ABS"],
  },
  {
    name: "Suspensão e Direção",
    icon: GitMerge,
    description: "Peças que ajudam na estabilidade, no conforto e na precisão da direção.",
    items: ["Amortecedores", "Molas", "Bandejas e buchas", "Pivôs e bieletas", "Terminais de direção", "Barras axiais", "Caixa de direção"],
  },
  {
    name: "Carroceria e Acessórios",
    icon: Car,
    description: "Peças externas e acabamentos para reposição e reparo da carroceria.",
    items: ["Para-choques", "Capô e para-lamas", "Portas e dobradiças", "Retrovisores", "Grades dianteiras", "Maçanetas", "Frisos e acabamentos"],
  },
  {
    name: "Elétrica e Iluminação",
    icon: Zap,
    description: "Componentes elétricos e de iluminação para os sistemas do veículo.",
    items: ["Alternador", "Motor de partida", "Baterias", "Faróis e lanternas", "Fusíveis e relés", "Sensores e interruptores", "Bobinas de ignição"],
  },
  {
    name: "Arrefecimento e Climatização",
    icon: Thermometer,
    description: "Peças para controlar a temperatura do motor e o conforto térmico da cabine.",
    items: ["Radiador", "Eletroventilador", "Bomba d'água", "Válvula termostática", "Reservatório e mangueiras", "Compressor do ar-condicionado", "Condensador e evaporador"],
  },
];
const reasons = [
  { icon: Award, title: "Peças Hyundai com procedência", text: "Trabalhamos com peças originais, genuínas e compatíveis para diversos modelos Hyundai." },
  { icon: Car, title: "Compatibilidade orientada", text: "Informe o modelo, o ano e a versão do veículo para ajudarmos a localizar a peça adequada." },
  { icon: Shield, title: "Compra com segurança", text: "Atendimento claro, nota fiscal e garantia conforme as condições de cada peça." },
  { icon: Truck, title: "Envio para todo o Brasil", text: "Enviamos para diferentes regiões do país, com o prazo informado no orçamento." },
  { icon: MessageCircle, title: "Atendimento especializado", text: "Tire suas dúvidas com nossa equipe antes de fechar o pedido." },
];
const testimonials = [
  {
    img: parachoque,
    productLabel: "Para-choque — parte central",
    text: "Recebi a peça do para-choque direitinho. Ela veio bem protegida, e o atendimento me ajudou a encontrar a opção certa para o meu carro.",
    name: "Jonas Santos",
    city: "Aracaju - SE",
    avatar: jonasSantos,
    draft: true,
  },
  {
    img: primeiraPeca,
    productLabel: "Peça",
    text: "Chegou aqui sim. Produto muito bem embalado e no prazo. Pode ficar tranquilo que deu tudo certo.",
    name: "Lucas F.",
    city: "Fortaleza, CE",
    avatar: lucas,
    draft: false,
  },
  {
    img: lanterna,
    productLabel: "Lanterna",
    text: "A lanterna chegou certinha, bem embalada e conforme combinado. O atendimento foi atencioso e o envio ocorreu dentro do prazo.",
    name: "Daniel Carvalho",
    city: "São Paulo - SP",
    avatar: danielCarvalho,
    draft: true,
  },
  {
    img: retrovisor,
    productLabel: "Retrovisor",
    text: "O retrovisor chegou tudo certo! Consegui tirar minhas dúvidas durante o atendimento e a peça veio bem embalada.",
    name: "Nilton Ferreira",
    city: "Salvador - BA",
    avatar: niltonFerreira,
    draft: true,
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex]!;

  return (
    <div id="top" className="min-h-screen bg-background font-sans text-navy">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20 bg-gradient-to-b from-black/35 via-black/10 to-transparent text-white backdrop-blur-[2px]">
        <div className="relative mx-auto max-w-[1320px] px-4 md:px-8">
          <div className="flex min-h-[68px] items-center gap-2 sm:gap-4">
            <a href="#top" aria-label="Solução Auto Parts — início" className="relative flex h-16 w-36 shrink-0 items-center overflow-hidden lg:h-20 lg:w-40">
              <img src={logo} alt="Solução Auto Parts Distribuidora" className="absolute inset-0 h-full w-full object-contain" />
            </a>
            <button className="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="mobile-navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <nav className="ml-auto hidden items-center lg:flex">
              {nav.map(([h, l]) => (
                <a key={h} href={h} className="px-5 py-6 text-sm font-semibold text-white transition-colors hover:bg-white/10">{l}</a>
              ))}
              <a href={QUOTE} target="_blank" rel="noreferrer" className="ml-3 bg-whatsapp px-4 py-2.5 text-sm font-bold text-white hover:bg-whatsapp-hover">
                Pedir orçamento no WhatsApp
              </a>
            </nav>
          </div>
          {menuOpen && (
            <nav id="mobile-navigation" aria-label="Navegação principal" className="mobile-nav-panel absolute right-0 top-[calc(100%-0.25rem)] z-50 flex w-[min(20rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl p-1.5 lg:hidden">
              {nav.map(([h, l]) => (
                <a key={h} href={h} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-lg border-b border-white/[0.05] px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:bg-white/[0.08] focus-visible:outline-none">{l}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88svh] overflow-hidden md:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-brand/50" />
        <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[46%]" />
        <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-6xl items-start px-5 pb-8 pt-[6.75rem] sm:pb-10 sm:pt-28 md:min-h-[600px] md:items-center md:px-10 md:pb-12 md:pt-28 lg:min-h-[680px]">
          <div className="max-w-2xl -translate-y-[10svh] md:translate-y-0">
            <p className="mb-3 max-w-xl text-xs font-semibold leading-[1.45] tracking-[-0.01em] text-white/90 sm:text-sm md:text-base">Especializada em peças Hyundai com envio imediato para todo o Brasil.</p>
            <h1 className="mb-3 text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:mb-4 sm:text-4xl sm:tracking-tight md:text-6xl">Peças Hyundai com nota fiscal e envio para todo o Brasil</h1>
            <p className="mb-4 max-w-xl text-[15px] leading-[1.55] text-white/90 sm:mb-5 sm:text-base sm:leading-relaxed md:text-xl">Diga o modelo e a peça que você precisa. Respondemos no WhatsApp com preço e prazo de entrega.</p>
            <div className="mb-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-stretch">
              <a href={QUOTE} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold leading-tight text-white shadow-lg transition-colors hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:px-5 md:text-base">
                <span className="flex w-full items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-center">Pedir orçamento no WhatsApp</span>
                </span>
              </a>
              <a href={wa("Olá! Gostaria de falar com o setor de peças e solicitar uma cotação sobre entrega hoje.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-amber-500 bg-amber-400 px-4 py-2.5 text-sm font-bold text-navy shadow-lg transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:min-w-[250px]">
                <span className="flex w-full items-center justify-center gap-2">
                  <Zap className="h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                  <span className="flex flex-col items-center text-center leading-tight">
                    <span>Quer entrega imediata?</span>
                    <span className="mt-0.5 underline decoration-2 underline-offset-2">Clique aqui e fale agora!</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold leading-5 text-white/95 sm:mb-2 sm:text-sm">
              <Phone className="h-4 w-4 shrink-0 text-white/90" />
              <a href="tel:+5511952709818" className="underline decoration-white/50 underline-offset-4 transition-colors hover:text-amber-300">(11) 95270-9818</a>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] font-medium leading-5 text-white/90 sm:mt-3 sm:gap-x-4 sm:gap-y-2 sm:text-xs md:text-sm">
              {[
                { label: "Nota fiscal", Icon: Check },
                { label: "Garantia", Icon: Check },
                { label: "Envio imediato!", Icon: Zap },
              ].map(({ label, Icon }) => (
                <span key={label} className="inline-flex items-center gap-1"><Icon className={`h-3.5 w-3.5 flex-shrink-0 ${label === "Envio imediato!" ? "text-amber-300" : "text-whatsapp"} sm:h-4 sm:w-4`} />{label}</span>
              ))}
            </div>
            <p className="mb-2 mt-4 text-xs font-semibold leading-5 text-white sm:mt-5 sm:text-sm">Peças em estoque para os principais modelos Hyundai:</p>
            <div className="flex max-w-xl flex-wrap gap-1.5 sm:gap-2">
              {heroModels.map((m) => (
                <a key={m} href={wa(`Olá! Gostaria de falar com o setor de peças e solicitar uma cotação para meu ${m}.`)} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium leading-4 text-white/90 transition-colors hover:bg-white/15 sm:px-3 sm:py-1.5 sm:text-xs">{m}</a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-muted py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:mb-4 md:text-4xl">Catálogo de Peças Hyundai</h2>
            <p className="mx-auto max-w-2xl px-2 text-base leading-relaxed text-muted-foreground md:text-xl">Escolha uma categoria abaixo ou fale com nossa equipe para encontrar a peça ideal para o seu Hyundai.</p>
          </div>
          <div className="mb-9 grid grid-cols-1 gap-3 sm:gap-4 md:mb-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {categories.map(({ name, icon: Icon, description, items }, index) => {
              const isExpanded = expandedCategories.includes(name);
              return (
              <div key={name} className="flex h-full flex-col gap-3 rounded-xl border border-l-2 border-l-brand bg-card py-5 transition-colors hover:border-brand/60 sm:gap-4 md:py-6 md:shadow-sm md:hover:shadow-md">
                <div className="flex items-center gap-3 px-5 text-base font-semibold leading-snug md:px-6 md:text-xl">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-soft text-brand"><Icon className="h-5 w-5" /></span>
                  {name}
                </div>
                <p className="px-5 text-sm leading-relaxed text-muted-foreground md:px-6">{description}</p>
                <div className="px-5 md:px-6">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`category-items-${index}`}
                    onClick={() => setExpandedCategories((current) => isExpanded ? current.filter((category) => category !== name) : [...current, name])}
                    className="inline-flex min-h-10 w-full items-center justify-between gap-3 rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-left text-sm font-semibold text-foreground transition-colors hover:border-brand/60 hover:bg-brand-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span>{isExpanded ? "Ocultar componentes" : "Ver componentes"}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 text-brand transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  {isExpanded && (
                    <div id={`category-items-${index}`} className="pt-4">
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground/90 md:text-sm">Principais componentes</h3>
                      <ul className="grid grid-cols-1 gap-x-3 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-auto px-5 pt-2 md:px-6">
                  <a href={wa(`Olá! Gostaria de falar com o setor de peças e solicitar uma cotação de ${name} para meu Hyundai.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy md:py-2.5 md:font-medium">
                    Consultar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-background py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight md:mb-14 md:text-4xl">Galeria de peças</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border border-border bg-card p-2 shadow-md">
              <img src={categorias} alt="Categorias de peças automotivas: Amortecedores, Acessórios, Freios, Embreagens, Radiadores, Suspensão, Correias, Direção, Elétricas, Bateria" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-border bg-muted shadow-md">
              <img src={workbench} alt="Peça automotiva Hyundai segurada em frente ao estoque de peças genuínas" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-5xl md:mt-12">
            <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 md:grid-cols-3 md:gap-6">
              <Stat><div className="mb-2 text-3xl font-bold text-brand md:text-4xl">+20mil</div><p className="text-sm md:text-base">Peças em estoque</p></Stat>
              <Stat><div className="mb-2 text-3xl font-bold text-brand md:text-4xl">Garantia</div><p className="text-sm md:text-base">Peças com nota fiscal e garantia</p></Stat>
              <Stat><p className="text-lg font-bold md:text-xl">Envio para todo o Brasil<br />Postagem rápida e segura</p></Stat>
            </div>
            <Stat>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">DESDE 03/06/2024 SOLUÇÃO AUTO PARTS DISTRIBUIDORA</h3>
              <p className="mb-4 text-sm text-brand md:text-base">CNPJ: 55.364.781/0001-95</p>
              <p className="text-sm leading-relaxed md:text-base">Entendemos que o seu carro é mais do que um meio de transporte - ele é parte da sua vida, da sua rotina e dos seus momentos mais especiais. Por isso oferecemos peças genuínas e de alta qualidade para Hyundai, marca que é sinônimo de confiança, durabilidade e desempenho.</p>
            </Stat>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="bg-background py-10 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Peças com nota fiscal e garantia</h2>
            <p className="text-base md:text-lg">Encontre peças Hyundai originais e compatíveis com garantia, procedência e suporte especializado.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <iframe
                title="Localização da Solução Auto Parts no Google Maps"
                src="https://maps.google.com/maps?q=Rua%20Itaqueri%2C%20641%2C%20Alto%20da%20Mooca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003178-000&output=embed"
                className="h-[280px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Solução Auto Parts</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Rua Itaqueri, 641 — Alto da Mooca, São Paulo - SP, 03178-000</p>
                </div>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex min-h-10 shrink-0 cursor-not-allowed items-center justify-center rounded-lg bg-brand/50 px-4 py-2 text-sm font-semibold text-white/80"
                >
                  Como chegar
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
              <img src={delivery} alt="Entrega de caixa Solução Auto Parts na porta do cliente" className="h-full max-h-[320px] w-full object-cover md:max-h-[380px]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:mb-8 md:text-4xl">Sobre Nós</h2>
            <div className="space-y-4 px-1 text-sm leading-relaxed text-muted-foreground md:space-y-6 md:px-2 md:text-lg">
              <p>A <strong className="text-navy">Solução Auto Parts</strong> é especializada na comercialização de peças automotivas para veículos <strong className="text-navy">Hyundai</strong>, oferecendo produtos originais, genuínos e de primeira linha.</p>
              <p>Trabalhamos com fornecedores especializados, ampla variedade de componentes e atendimento personalizado para ajudar cada cliente a encontrar a peça correta para seu veículo.</p>
              <p>Atendemos clientes de todo o Brasil, com foco em qualidade, segurança, agilidade no envio e suporte durante toda a compra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative overflow-hidden bg-muted py-8 sm:py-10 md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/70 to-transparent" />
        <div className="container relative mx-auto max-w-5xl px-3 sm:px-4">
          <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-7">
            <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand sm:text-xs">
              <MessageCircle className="h-3.5 w-3.5" /> Feedback de cliente
            </span>
            <h2 className="mb-2 text-balance text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">A experiência de quem compra</h2>
            <p className="mx-auto max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Confira os relatos e use as setas para navegar. Os três novos textos são rascunhos para revisão.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[3/1] w-full overflow-hidden border-b border-border bg-muted">
                {currentTestimonial.img ? (
                  <img src={currentTestimonial.img} alt={`Foto do produto: ${currentTestimonial.productLabel}`} className="block h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-muted text-center text-slate-400">
                    <span className="text-2xl leading-none" aria-hidden="true">＋</span>
                    <span className="px-3 text-xs font-medium">{currentTestimonial.productLabel}</span>
                    <span className="text-[10px]">Espaço reservado para a foto</span>
                  </div>
                )}
              </div>

              <div className="flex min-w-0 flex-col justify-center p-4 sm:p-5 md:p-6">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground sm:text-base">
                  “{currentTestimonial.text}”
                </blockquote>
                <div className="my-3 h-px w-full bg-border" />
                <div className="flex items-center gap-2.5">
                  {currentTestimonial.avatar ? (
                    <img src={currentTestimonial.avatar} alt="" className="h-10 w-10 shrink-0 rounded-full border border-border object-cover" loading="lazy" />
                  ) : (
                    <div aria-label="Espaço reservado para foto circular do cliente" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-slate-300 bg-white text-center text-[9px] font-medium leading-tight text-slate-400">
                      Foto<br />cliente
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{currentTestimonial.name}</p>
                    {currentTestimonial.city && <p className="mt-0.5 text-xs text-muted-foreground">{currentTestimonial.city}</p>}
                  </div>
                  <span className="ml-auto text-[10px] text-muted-foreground sm:text-xs">{testimonialIndex + 1} de {testimonials.length}</span>
                </div>
              </div>
            </article>

            <div className="mt-3 flex items-center justify-between gap-3">
              <button
                type="button"
                aria-label="Ver avaliação anterior"
                onClick={() => setTestimonialIndex((index) => (index - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center justify-center gap-1.5" aria-label="Selecionar avaliação">
                {testimonials.map((item, index) => (
                  <button
                    key={item.productLabel}
                    type="button"
                    aria-label={`Ver avaliação ${index + 1}`}
                    aria-current={testimonialIndex === index ? "true" : undefined}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all ${testimonialIndex === index ? "w-6 bg-brand" : "w-2 bg-border hover:bg-brand/50"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Ver próxima avaliação"
                onClick={() => setTestimonialIndex((index) => (index + 1) % testimonials.length)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-5 text-center sm:mt-6">
            <a
              href={wa("Olá! Já comprei com a Solução Auto Parts e gostaria de compartilhar meu feedback sobre a experiência.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Comprou com a gente? Conte sua experiência
            </a>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">Os espaços de foto do produto e do perfil ficam reservados para substituir depois.</p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-muted py-10 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center md:mb-10">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Por que escolher a Solução Auto Parts?</h2>
            <p className="mx-auto max-w-2xl px-2 text-base text-muted-foreground md:text-lg">Mais segurança para comprar, orientação para encontrar a peça certa e atendimento dedicado para seu Hyundai.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={`flex min-h-[190px] flex-col items-center justify-center rounded-xl border border-border bg-card px-5 py-6 text-center shadow-sm transition-shadow hover:shadow-md sm:min-h-[205px] sm:px-6 ${index === 4 ? "sm:col-span-2 sm:min-h-[150px]" : ""}`}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center text-brand md:h-11 md:w-11"><Icon className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2.1} aria-hidden="true" /></div>
                <h3 className="mb-2 text-base font-semibold leading-snug text-foreground md:text-lg">{title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança da compra: banner antes do rodapé */}
      <section id="compra-segura" className="bg-background px-4 py-8 md:py-14">
        <div className="container mx-auto max-w-5xl">
          <img
            src={segurancaArte}
            alt="Compre com segurança e tranquilidade. Peças originais, política de privacidade, pagamentos Mastercard, Visa, Elo e Pix, proteção LGPD e certificado SSL."
            className="mx-auto block h-auto w-full object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-transparent py-8 text-white md:py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">Solução Auto Parts Distribuidora</h3>
              <p className="text-sm text-white/70 md:text-base">Especializada em peças Hyundai com envio imediato para todo o Brasil.</p>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold md:mb-4 md:text-lg">Contato</h4>
              <ul className="space-y-2 text-sm text-white/70 md:text-base">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href={QUOTE} className="hover:text-white">+55 11 95270-9818</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:solucaoautoparts@gmail.com" className="hover:text-white">solucaoautoparts@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base font-semibold md:mb-4 md:text-lg">Informações</h4>
              <ul className="space-y-2 text-sm text-white/70 md:text-base">
                <li className="flex items-center gap-2"><FileText className="h-4 w-4" />CNPJ: 55.364.781/0001-95</li>
                <li className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4" /><span>Rua Itaqueri, 641<br />Alto da Mooca, Sao Paulo - SP<br />03178-000</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/15 pt-6 text-center">
            <p className="text-sm text-white/70 md:text-base">© 2026 Solução Auto Parts Distribuidora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={QUOTE} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 hover:bg-whatsapp-hover md:bottom-5 md:right-5 md:h-16 md:w-16">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7 md:h-8 md:w-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-1.958-.173-.221-.018-.341.13-.45.134-.11.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </div>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-l-2 border-border border-l-brand bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:p-7">{children}</div>;
}
