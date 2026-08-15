import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Printer, Truck, ShieldCheck, Clock, Sparkles, Phone, Mail, MapPin, ArrowRight, Menu, X } from "lucide-react";
import heroPress from "@/assets/hero-press.jpg";
import { products } from "@/lib/products";
import { PriceCalculator } from "@/components/PriceCalculator";
import logo from "@/assets/image.png";
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,

} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRINTIT — Printing, Packaging & Designing Solutions | Business Cards, Brochures, Boxes" },
      { name: "description", content: "PRINTIT delivers high-quality offset & digital printing plus custom packaging across India. Instant price calculator, free design proof, fast turnaround." },
      { name: "keywords", content: "printing, packaging, offset printing, digital printing, business cards, brochures, flyers, custom boxes, book printing, standees, India" },
      { property: "og:title", content: "PRINTIT — Printing, Packaging & Designing Solutions" },
      { property: "og:description", content: "End-to-end printing and packaging: business cards, brochures, books, boxes, standees and more. Get an instant price estimate." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "PRINTIT — Printing, Packaging & Designing Solutions" },
      { name: "twitter:description", content: "Offset & digital printing plus custom packaging with instant price calculator." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PRINTIT Printing, Packaging & Designing Solutions",
          description: "Offset printing, digital printing and custom packaging solutions across India.",
          telephone: "+91 6354535789",
          email: "press.printit@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rambali Nagar",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            addressCountry: "INDIA",
          },
          priceRange: "₹₹",
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <ProductsGrid />
      <CalculatorSection />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#calculator", label: "Price Calculator" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PRINT IT"
            className="h-300 w-50 object-contain"
          />

          {/* <span className="font-display text-xl font-bold tracking-tight">
    PRINT<span className="text-primary">IT</span>
  </span> */}
        </a>
        <nav className="hidden md:flex gap-7 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90">
          Get a Quote <ArrowRight className="h-4 w-4" />
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col px-4 py-3 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-sm font-medium">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold text-center">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPress} alt="Offset printing press" width={1600} height={1000} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-36 text-ink-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> India's trusted print partner since 1997
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
          Prints that <span className="text-gradient-cmyk">speak</span> for your brand.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/80">
          Offset printing, digital printing and custom packaging — designed, printed and delivered with precision. Get an instant estimate for your next order.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#calculator" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 shadow-glow">
            Calculate Price <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
            Explore Products
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            ["30+", "Years in print industry "],
            ["5,000+", "Happy clients"],
            ["72 hours", "Fastest turnaround"],
            ["Pan-India", "Delivery"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="text-3xl font-bold text-gradient-cmyk">{k}</div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Offset Printing", "Digital Printing", "UV Printing", "Custom Packaging", "Foil Stamping", "Die Cutting", "Spot UV", "Embossing"];
  return (
    <div className="border-y bg-ink text-ink-foreground overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap py-4 animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.3em] opacity-70">◆ {t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function Services() {
  const services = [

    { icon: Sparkles, title: "Digital Printing", desc: "Fast, high-quality digital printing for business cards, sticker, flyers, brochures, and personalized marketing materials." },
    { icon: Printer, title: "Offset Printing", desc: "Reliable high-volume printing for brochures, catalogues, books, stationery, and other professional print materials with consistent colour and finish." },
    { icon: ShieldCheck, title: "Custom Packaging", desc: "Professional printing solutions for mono cartons, display files, folders, stationery, and a wide range of customised printed products." },


  ];
  return (
    <section id="services" className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold">From design to delivery — we handle every press.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border bg-card p-8 hover:shadow-card transition">
            <div className="h-12 w-12 rounded-xl bg-cmyk grid place-items-center text-white">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsGrid() {
  return (
    <section id="products" className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our products</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">Everything you'd ever want to print.</h2>
          </div>
          <a href="#calculator" className="text-sm font-semibold text-primary hover:underline">Get instant pricing →</a>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => (
            <a key={p.slug} href="#calculator" className="group rounded-2xl overflow-hidden bg-card border hover:shadow-card transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.blurb}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-primary font-semibold">From ₹{Math.round(p.basePer100 / p.minQty * 10) / 10}/pc</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Instant price calculator</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold">Get a live estimate in seconds.</h2>
        <p className="mt-4 text-muted-foreground">Pick a product, dial the quantity and finish — we'll show a live estimate. Confirm to lock the price and receive a design proof within 24 hours.</p>
      </div>
      <div className="mt-10">
        <PriceCalculator />
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Clock, title: "On-time delivery", desc: "72-hour express dispatch on standard products across India." },
    { icon: ShieldCheck, title: "Quality guaranteed", desc: "Colour-managed workflow with pre-press proofs on every order." },
    { icon: Truck, title: "Pan-India shipping", desc: "Delivered to 19,000+ pincodes with tracked logistics." },
    { icon: Sparkles, title: "Design help", desc: "In-house design team for artwork, layout and packaging dielines." },
  ];
  return (
    <section id="why" className="bg-ink text-ink-foreground py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why PRINTIT</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">Quality, reliability and creativity — in every print.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <i.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-bold text-lg">{i.title}</h3>
              <p className="mt-1 text-sm text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Enquire", "Pick your product and quantity in the calculator or share a brief."],
    ["02", "Design proof", "Our team sends a pre-press proof for your approval within 24 hours."],
    ["03", "Print & pack", "Approved artwork goes on press with strict quality checks."],
    ["04", "Deliver", "Tracked pan-India shipping — express dispatch available."],
  ];
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold">From click to doorstep in 4 steps.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-4 gap-5">
        {steps.map(([n, t, d]) => (
          <div key={n} className="rounded-2xl border bg-card p-6">
            <div className="text-4xl font-display font-bold text-gradient-cmyk">{n}</div>
            <h3 className="mt-4 font-bold text-lg">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "The packaging boxes were beyond expectations — sharp print, sturdy build. Our brand looks premium now.", n: "Anika Rao", r: "Founder, Bloom Skincare" },
    { q: "Turnaround on 5,000 catalogues in 4 days was incredible. PRINTIT is our go-to for every campaign.", n: "Rohit Mehta", r: "Marketing Head, NovaTech" },
    { q: "From dieline to delivery, the team handled it end-to-end. Fantastic quality and communication.", n: "Sara Iqbal", r: "Brand Manager, Kaya Foods" },
  ];
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Loved by brands</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">5,000+ businesses print with us.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {t.map((x) => (
            <div key={x.n} className="rounded-2xl bg-card border p-8">
              <div className="text-4xl text-primary leading-none font-display">"</div>
              <p className="mt-2 text-lg leading-relaxed">{x.q}</p>
              <div className="mt-6 pt-6 border-t">
                <p className="font-bold">{x.n}</p>
                <p className="text-sm text-muted-foreground">{x.r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 md:py-28">
      <div className="rounded-3xl bg-ink text-ink-foreground p-8 md:p-16 grid md:grid-cols-2 gap-12 shadow-glow">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in touch</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">Ready to print something great?</h2>
          <p className="mt-4 text-white/70 max-w-md">Share your requirements and our team will send a quote and design proof within 24 hours.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> +91 6354535789</li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> press.printit@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Rambali Nagar Industrial Area, Indore,Madhya Pradesh</li>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">
                Need a Final Quotation?
              </h3>



              <p className="mt-3 text-sm font-medium">
                Connect with our printing team directly by Call or WhatsApp.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Get an exact quotation based on your quantity, size, material,
                finishing and delivery requirements.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+916354535789"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  📞 Call for Quotation
                </a>

                <a
                  href="https://wa.me/916354535789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold hover:bg-muted transition"
                >
                  💬 WhatsApp for Quotation
                </a>
              </div>
            </div>


          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out within 24 hours."); }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4"
        >
          {[
            { l: "Name", t: "text", p: "Your full name" },
            { l: "Email", t: "email", p: "you@company.com" },
            { l: "Phone", t: "tel", p: "+91 ..." },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-xs uppercase tracking-widest text-white/60">{f.l}</label>
              <input required type={f.t} placeholder={f.p} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-accent" />
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-widest text-white/60">Requirement</label>
            <textarea required rows={3} placeholder="E.g. 1,000 business cards, matt lam, both sides" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-accent" />
          </div>
          <button className="w-full rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-cmyk grid place-items-center">
              <Printer className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">PRINT<span className="text-primary">IT</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">Printing and packaging solutions built for brands that care about quality.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {products.slice(0, 6).map((p) => <li key={p.slug}><a href="#products" className="hover:text-primary">{p.name}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#why" className="hover:text-primary">Why PRINTIT</a></li>
            <li><a href="#calculator" className="hover:text-primary">Price Calculator</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d386.7907243912157!2d75.8395335457339!3d22.735887542795542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd03baac8957%3A0xad1f9f4f0e6b3ae8!2sPrint%20It%20Press!5e0!3m2!1sen!2sin!4v1786691408768!5m2!1sen!2sin"

                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Print It Press Indore Location"
              />
            </div>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider">Contact</h4>
          {/* <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>+91 6354535789</li>
            <li>press.printit@gmail.com</li>
            <li>Rambali Nagar Industrial Area, Indore, MP</li>
          </ul> */}

          <div>
            <h3 className="font-semibold text-foreground">
              Contact PRINT IT
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">

              {/* Phone */}
              <li>
                <a
                  href="tel:+916354535789"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 63545 35789
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/916354535789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp Us
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:press.printit@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  press.printit@gmail.com
                </a>
              </li>

              {/* Location */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Print+It+Press+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary transition"
                >
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />

                  <span>
                    Rambali Nagar, Industrial Area,
                    <br />
                    Indore, Madhya Pradesh
                  </span>
                </a>
              </li>

            </ul>

            {/* SOCIAL MEDIA */}
            <div className="mt-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow PRINT IT
              </p>

              <div className="mt-3 flex items-center gap-2">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/press.printit_indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PRINT IT on Instagram"
                  className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1HfcNXeoBm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PRINT IT on Facebook"
                  className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@printitpress-indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PRINT IT on YouTube"
                  className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
                >
                  <Youtube className="h-4 w-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916354535789"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PRINT IT on WhatsApp"
                  className="h-9 w-9 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PRINTIT Printing, Packaging & Designing Solutions. All rights reserved.
      </div>
    </footer>
  );
}
