import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Award, Car, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, Cog, Disc3, GitMerge,
  Mail, MapPin, Menu, MessageCircle, Phone, Shield, Star, Thermometer, Truck, X, Zap, FileText,
} from "lucide-react";
import logo from "@/assets/solucao-auto-parts-logo.webp";
import hero from "@/assets/hero-storefront.jpg";
import categorias from "@/assets/categorias.png";
import workbench from "@/assets/hyundai-part-workbench-new.jpg";
import diagrama from "@/assets/diagrama.png";
import delivery from "@/assets/parts-delivery.jpg";
import warehouse from "@/assets/hyundai-warehouse-new.png";
import testimonialBox from "@/assets/testimonial-hyundai-box.png";
import lucas from "@/assets/lucas.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solução Auto Parts | Peças Hyundai com nota fiscal" },
      { name: "description", content: "Distribuidora de peças Hyundai com +20 mil peças em estoque, nota fiscal, garantia e envio para todo o Brasil." },
      { property: "og:title", content: "Solução Auto Parts | Peças Hyundai com nota fiscal" },
      { property: "og:description", content: "Peças Hyundai originais e compatíveis com envio para todo o Brasil. Peça orçamento no WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "5511952709818";
const wa = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const QUOTE = wa("Olá! Vim pelo site e preciso de um orçamento de peça Hyundai.");

const nav = [
  ["#catalog", "Catálogo"], ["#gallery", "Galeria"], ["#guarantee", "Garantia"],
  ["#about", "Sobre"], ["#testimonials", "Avaliações"], ["#contact", "Contato"],
];
const heroModels = ["HB20", "HB20S", "HB20X", "Creta", "Tucson", "ix35", "Santa Fe", "i30", "Azera", "HR"];
const allModels = ["HB20", "HB20S", "HB20X", "Creta", "Tucson", "ix35", "Santa Fe", "Grand Santa Fe", "Azera", "i30", "Elantra", "Sonata", "Veloster", "HR", "Atos"];
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
  { icon: Shield, title: "Garantia de Qualidade", text: "Todas as peças com garantia e certificação de qualidade" },
  { icon: Truck, title: "Entrega Nacional", text: "Entregamos para todo o Brasil com rapidez e segurança" },
  { icon: Award, title: "Peças Hyundai", text: "Trabalhamos com peças originais, genuínas e compatíveis para diversos modelos Hyundai." },
  { icon: Clock, title: "Atendimento Ágil", text: "Resposta rápida e atendimento personalizado" },
];
const testimonials = [
  { img: testimonialBox, text: "Chegou aqui sim. Produto muito bem embalado e no prazo. Pode ficar tranquilo que deu tudo certo.", time: "14:22", name: "Lucas F.", city: "Fortaleza, CE", avatar: lucas },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [t, setT] = useState(0);
  const cur = testimonials[t] ?? testimonials[0]!;
  const step = (d: number) => setT((t + d + testimonials.length) % testimonials.length);

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
            <p className="mb-3 max-w-xl text-xs font-semibold leading-[1.45] tracking-[-0.01em] text-white/90 sm:text-sm md:text-base">Distribuidora de peças Hyundai • +20 mil peças em estoque</p>
            <h1 className="mb-3 text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:mb-4 sm:text-4xl sm:tracking-tight md:text-6xl">Peças Hyundai com nota fiscal e envio para todo o Brasil</h1>
            <p className="mb-4 max-w-xl text-[15px] leading-[1.55] text-white/90 sm:mb-5 sm:text-base sm:leading-relaxed md:text-xl">Diga o modelo e a peça que você precisa. Respondemos no WhatsApp com preço e prazo de entrega.</p>
            <a href={QUOTE} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-whatsapp-hover md:text-base">
              <MessageCircle className="h-5 w-5" /> Pedir orçamento no WhatsApp
            </a>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] font-medium leading-5 text-white/90 sm:mt-4 sm:gap-x-4 sm:gap-y-2 sm:text-xs md:text-sm">
              {["Nota fiscal", "Garantia", "Envio rápido e seguro"].map((s) => (
                <span key={s} className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 flex-shrink-0 text-whatsapp sm:h-4 sm:w-4" />{s}</span>
              ))}
            </div>
            <p className="mb-2 mt-4 text-xs font-semibold leading-5 text-white sm:mt-5 sm:text-sm">Escolha seu modelo:</p>
            <div className="flex max-w-xl flex-wrap gap-1.5 sm:gap-2">
              {heroModels.map((m) => (
                <a key={m} href={wa(`Olá! Preciso de uma peça para meu ${m}.`)} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium leading-4 text-white/90 transition-colors hover:bg-white/15 sm:px-3 sm:py-1.5 sm:text-xs">{m}</a>
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
                  <a href={wa(`Olá! Preciso de uma peça de ${name} para meu Hyundai.`)} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy md:py-2.5 md:font-medium">
                    Consultar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              );
            })}
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-3 text-lg font-bold md:mb-4 md:text-2xl">Atendemos os principais modelos Hyundai</h3>
            <p className="mb-6 px-2 text-sm text-muted-foreground md:text-base">Peças originais e compatíveis para toda a linha Hyundai e demais modelos da marca.</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {allModels.map((m) => (
                <span key={m} className="rounded-full border border-brand/50 bg-brand-soft px-3 py-1.5 text-xs font-medium text-brand md:px-4 md:py-2 md:text-base">{m}</span>
              ))}
            </div>
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
            <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <img src={diagrama} alt="Diagrama técnico de peças automotivas - sistema de ar condicionado e aquecimento" className="h-full max-h-[320px] w-full object-contain md:max-h-[380px]" loading="lazy" />
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
      <section id="testimonials" className="bg-muted py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-navy sm:text-4xl md:mb-4 md:text-5xl">O que nossos clientes dizem</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">Avaliações reais de clientes que compraram e receberam nossas peças.</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden border border-border bg-card shadow-lg">
              <div className="flex items-center justify-between bg-gradient-to-r from-brand to-navy px-4 py-3 md:px-6">
                <span className="flex items-center gap-2 text-xs font-medium text-white md:text-sm"><MessageCircle className="h-4 w-4" /> via WhatsApp</span>
                <span className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</span>
              </div>
              <div className="flex min-h-64 items-center justify-center bg-muted p-4 md:min-h-80 md:p-6">
                <img src={cur.img} alt="Peça recebida pelo cliente" className="max-h-64 max-w-full object-contain md:max-h-80" loading="lazy" />
              </div>
              <div className="px-4 py-4 md:px-6 md:py-6">
                <div className="border border-brand/20 bg-brand-soft p-3 md:p-4">
                  <p className="text-sm leading-relaxed text-foreground md:text-base">"{cur.text}"</p>
                  <div className="mt-2 flex justify-end"><span className="text-xs text-muted-foreground">{cur.time}</span></div>
                </div>
              </div>
              <div className="border-t border-border px-4 py-4 md:px-6 md:py-5">
                <div className="flex items-center gap-3">
                  <img src={cur.avatar} alt={`Foto de ${cur.name}`} className="h-10 w-10 border-2 border-brand object-cover md:h-12 md:w-12" />
                  <div>
                    <p className="text-sm font-semibold text-foreground md:text-base">{cur.name}</p>
                    <p className="text-xs text-muted-foreground md:text-sm">{cur.city}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => step(-1)} aria-label="Anterior" className="border border-border bg-card p-2 hover:bg-brand-soft"><ChevronLeft className="h-5 w-5" /></button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setT(i)} aria-label={`Avaliação ${i + 1}`} className={`h-2 transition-all ${i === t ? "w-6 bg-brand" : "w-2 bg-border"}`} />
              ))}
              <button onClick={() => step(1)} aria-label="Próxima" className="border border-border bg-card p-2 hover:bg-brand-soft"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="why-choose-section relative isolate overflow-hidden bg-cover bg-center bg-no-repeat py-10 md:py-16" style={{ backgroundImage: `url(${warehouse})` }}>
        <div className="absolute inset-0 z-0 bg-navy/85" />
        <div aria-hidden="true" className="why-choose-fade why-choose-fade-top pointer-events-none absolute inset-x-0 top-0 z-[1]" />
        <div aria-hidden="true" className="why-choose-fade why-choose-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 z-[1]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Por que escolher a Solução Auto Parts?</h2>
            <p className="mx-auto max-w-2xl px-2 text-lg text-white/80 md:text-xl">Confiança, qualidade e compromisso com a excelência no atendimento</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-brand md:h-16 md:w-16"><Icon className="h-7 w-7 text-white md:h-8 md:w-8" /></div>
                <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">{title}</h3>
                <p className="text-sm text-white/80 md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-transparent py-8 text-white md:py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <section className="border-b border-white/15 px-2 pb-8 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Não achou a peça que procura?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/70 md:text-base">Fale com nossa equipe e informe o modelo e o ano do seu Hyundai.</p>
            <a href={QUOTE} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center bg-whatsapp px-7 py-3 text-sm font-bold text-white hover:bg-whatsapp-hover">Pedir orçamento no WhatsApp</a>
          </section>
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">Solução Auto Parts Distribuidora</h3>
              <p className="text-sm text-white/70 md:text-base">Especializada em peças Hyundai com envio para todo o Brasil.</p>
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
