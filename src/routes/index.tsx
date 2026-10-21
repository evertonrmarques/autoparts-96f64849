import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Award, Car, Check, ChevronLeft, ChevronRight, Clock, Cog, Disc3, GitMerge,
  Mail, MapPin, Menu, MessageCircle, Phone, Shield, Star, Thermometer, Truck, X, Zap, FileText,
} from "lucide-react";
import logo from "@/assets/solucao-auto-parts-logo.png";
import hero from "@/assets/hero-storefront.jpg";
import categorias from "@/assets/categorias.png";
import workbench from "@/assets/hyundai-part-workbench-new.jpg";
import diagrama from "@/assets/diagrama.png";
import delivery from "@/assets/parts-delivery.jpg";
import warehouse from "@/assets/hyundai-warehouse-new.png";
import testimonialBox from "@/assets/testimonial-hyundai-box.png";
import lucas from "@/assets/lucas.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
  { name: "Motor e Componentes", icon: Cog },
  { name: "Sistema de Freios", icon: Disc3 },
  { name: "Suspensão e Direção", icon: GitMerge },
  { name: "Carroceria e Acessórios", icon: Car },
  { name: "Elétrica e Iluminação", icon: Zap },
  { name: "Arrefecimento e Climatização", icon: Thermometer },
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
  const [t, setT] = useState(0);
  const cur = testimonials[t];
  const step = (d: number) => setT((t + d + testimonials.length) % testimonials.length);

  return (
    <div id="top" className="min-h-screen bg-background font-sans text-navy">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20 bg-gradient-to-b from-black/35 via-black/10 to-transparent text-white backdrop-blur-[2px]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8">
          <div className="flex min-h-[68px] items-center gap-4">
            <button className="p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <a href="#top" className="relative flex h-16 w-28 items-center overflow-hidden lg:h-20 lg:w-40">
              <img src={logo} alt="Solução Auto Parts Distribuidora" className="absolute left-1/2 top-1/2 h-36 w-36 max-w-none -translate-x-1/2 -translate-y-[45%] object-contain lg:h-44 lg:w-44" />
            </a>
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
            <nav className="flex flex-col bg-navy pb-4 lg:hidden">
              {nav.map(([h, l]) => (
                <a key={h} href={h} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-sm font-semibold hover:bg-white/10">{l}</a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden md:min-h-[600px] lg:min-h-[680px]">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-brand/50" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-6xl items-center px-5 pb-12 pt-28 md:min-h-[600px] md:px-10 lg:min-h-[680px]">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold text-white/90 md:text-base">Distribuidora de peças Hyundai • +20 mil peças em estoque</p>
            <h1 className="mb-4 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">Peças Hyundai com nota fiscal e envio para todo o Brasil</h1>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-white/90 md:text-xl">Diga o modelo e a peça que você precisa. Respondemos no WhatsApp com preço e prazo de entrega.</p>
            <a href={QUOTE} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-whatsapp-hover md:text-base">
              <MessageCircle className="h-5 w-5" /> Pedir orçamento no WhatsApp
            </a>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/90 md:text-sm">
              {["Nota fiscal", "Garantia", "Envio rápido e seguro"].map((s) => (
                <span key={s} className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-whatsapp" />{s}</span>
              ))}
            </div>
            <p className="mb-2 mt-5 text-sm font-semibold text-white">Escolha seu modelo:</p>
            <div className="flex max-w-xl flex-wrap gap-2">
              {heroModels.map((m) => (
                <a key={m} href={wa(`Olá! Preciso de uma peça para meu ${m}.`)} target="_blank" rel="noreferrer" className="rounded-full border border-white/50 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20">{m}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Catálogo de Peças Hyundai</h2>
            <p className="mx-auto max-w-2xl px-2 text-lg text-muted-foreground md:text-xl">Escolha uma categoria abaixo ou fale com nossa equipe para encontrar a peça ideal para o seu Hyundai.</p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-4 md:mb-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {categories.map(({ name, icon: Icon }) => (
              <div key={name} className="flex flex-col gap-6 border border-l-4 border-l-brand bg-card py-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 px-6 text-lg font-semibold md:text-xl">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-soft text-brand"><Icon className="h-5 w-5" /></span>
                  {name}
                </div>
                <div className="px-6">
                  <a href={wa(`Olá! Preciso de uma peça de ${name} para meu Hyundai.`)} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-navy">
                    Consultar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Atendemos os principais modelos Hyundai</h3>
            <p className="mb-6 px-2 text-sm text-muted-foreground md:text-base">Peças originais e compatíveis para toda a linha Hyundai e demais modelos da marca.</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {allModels.map((m) => (
                <span key={m} className="border border-brand bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand md:px-4 md:py-2 md:text-base">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:mb-14 md:text-4xl">Galeria de peças</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border border-border bg-card p-2 shadow-md">
              <img src={categorias} alt="Categorias de peças automotivas: Amortecedores, Acessórios, Freios, Embreagens, Radiadores, Suspensão, Correias, Direção, Elétricas, Bateria" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-border bg-muted shadow-md">
              <img src={workbench} alt="Peça automotiva Hyundai segurada em frente ao estoque de peças genuínas" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-5xl md:mt-12">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
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
      <section id="about" className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Sobre Nós</h2>
            <div className="space-y-4 px-2 text-base leading-relaxed text-muted-foreground md:space-y-6 md:text-lg">
              <p>A <strong className="text-navy">Solução Auto Parts</strong> é especializada na comercialização de peças automotivas para veículos <strong className="text-navy">Hyundai</strong>, oferecendo produtos originais, genuínos e de primeira linha.</p>
              <p>Trabalhamos com fornecedores especializados, ampla variedade de componentes e atendimento personalizado para ajudar cada cliente a encontrar a peça correta para seu veículo.</p>
              <p>Atendemos clientes de todo o Brasil, com foco em qualidade, segurança, agilidade no envio e suporte durante toda a compra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-3 text-balance text-3xl font-bold text-navy sm:text-4xl md:mb-4 md:text-5xl">O que nossos clientes dizem</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">Avaliações reais de clientes que compraram e receberam nossas peças.</p>
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
      <section className="relative bg-cover bg-center bg-no-repeat py-12 md:py-20" style={{ backgroundImage: `url(${warehouse})` }}>
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container relative mx-auto px-4">
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
      <footer id="contact" className="bg-navy py-8 text-white md:py-12">
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
      <a href={QUOTE} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 transition-transform hover:scale-110">
        <img src={whatsappIcon} alt="WhatsApp" className="h-12 w-12 object-contain md:h-14 md:w-14" />
      </a>
    </div>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return <div className="border border-l-4 border-border border-l-brand bg-card p-6 shadow-md transition-shadow hover:shadow-lg md:p-8">{children}</div>;
}
