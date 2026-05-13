import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const A = "#0099ff";
const BG = "#0a0e1a";
const CARD = "#0d1627";
const CARD2 = "#0f1e36";
const BORDER = "rgba(0, 153, 255, 0.2)";
const MUTED = "#94a3b8";

function useSectionAnimations() {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((el) => el.classList.add("section-hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("section-hidden");
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CircuitDecor() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80" stroke="#0099ff" strokeWidth="1" fill="none" />
          <circle cx="40" cy="40" r="4" fill="none" stroke="#0099ff" strokeWidth="1" />
          <circle cx="40" cy="40" r="1.5" fill="#0099ff" />
          <path d="M0 0 H10 V10" stroke="#0099ff" strokeWidth="0.5" fill="none" />
          <path d="M80 80 H70 V70" stroke="#0099ff" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

function Divider() {
  return (
    <div style={{ position: "relative", height: "2px", margin: "0", overflow: "visible" }}>
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(0,153,255,0.5) 30%, rgba(0,153,255,0.8) 50%, rgba(0,153,255,0.5) 70%, transparent 100%)",
      }} />
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#0099ff",
        boxShadow: "0 0 10px rgba(0,153,255,0.8), 0 0 20px rgba(0,153,255,0.4)",
      }} />
    </div>
  );
}

function NextBtn({ href, label }: { href: string; label: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
      <a
        href={href}
        className="btn-primary"
        style={{ borderRadius: "999px", padding: "0.75rem 2rem", fontSize: "0.95rem" }}
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useSectionAnimations();

  return (
    <div style={{ backgroundColor: BG, color: "#fff", minHeight: "100vh" }}>
      {/* ───── NAVBAR ───── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "transparent",
          backdropFilter: "none",
          borderBottom: "none",
          transition: "top 0.4s ease",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#inicio">
          <img
            src="/logo barra acc.png"
            alt="Barra Acessórios e Assistência Técnica"
            style={{ height: "150px", display: "block" }}
          />
        </a>

        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden-mobile">
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#unidades" className="nav-link">Unidades</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#depoimentos" className="nav-link">Depoimentos</a>
          <a
            href="https://wa.me/5581986508550"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.55rem 1.4rem", fontSize: "0.9rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: `1px solid ${BORDER}`,
            borderRadius: "0.5rem",
            padding: "0.5rem 0.7rem",
            cursor: "pointer",
            color: "#fff",
            display: "none",
          }}
          className="menu-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: "rgba(10,14,26,0.98)",
            borderBottom: `1px solid ${BORDER}`,
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {["#servicos", "#unidades", "#sobre", "#depoimentos"].map((href) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
            </a>
          ))}
          <a
            href="https://wa.me/5581986508550"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: "fit-content" }}
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      )}

      {/* ───── HERO ───── */}
      <section
        id="inicio"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "160px 2rem 5rem",
          position: "relative",
          overflow: "hidden",
        }}
        className="circuit-bg"
      >
        <CircuitDecor />

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,153,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="grid-responsive">

          {/* Esquerda */}
          <div style={{ textAlign: "left" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              Tudo para o seu{" "}
              <span className="gradient-text">smartphone</span>
              <br />
              em um só lugar
            </h1>

            <p style={{ fontSize: "1rem", color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>
              Celulares novos e semi-novos, acessórios de qualidade e assistência técnica especializada.
              Mais de 5 anos de confiança e dedicação aos nossos clientes.
            </p>

            <a href="#servicos" className="btn-primary" style={{ marginBottom: "2rem", display: "inline-flex" }}>
              Ver Serviços
            </a>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginTop: "1rem" }}>
              {[
                { icon: "📍", text: "R. Cuiabá, 57, Barra de Jangada, Jaboatão dos Guararapes, PE" },
                { icon: "📞", text: "(81) 98650-8550" },
                { icon: "🕐", text: "Seg. a Sex.: 7h às 18h  |  Dom.: 7h às 12h" },
              ].map((c) => (
                <div key={c.icon} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
                  <span style={{ color: MUTED, fontSize: "0.88rem" }}>{c.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581986508550"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: "1.5rem", display: "inline-flex", background: "#25d366", backgroundColor: "#25d366" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Direita: formulário */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "1.2rem",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1.5rem", borderBottom: `1px solid ${BORDER}` }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.3rem" }}>Solicite um Orçamento</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>Preencha o formulário e entraremos em contato.</p>
            </div>
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { placeholder: "Seu nome completo", type: "text" },
                { placeholder: "WhatsApp ou telefone", type: "tel" },
                { placeholder: "Modelo do aparelho", type: "text" },
              ].map((field) => (
                <input
                  key={field.placeholder}
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    backgroundColor: CARD2,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.6rem",
                    padding: "0.85rem 1rem",
                    color: "#fff",
                    fontSize: "0.9rem",
                    width: "100%",
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
              <textarea
                placeholder="Descreva o problema ou o produto de interesse"
                rows={4}
                style={{
                  backgroundColor: CARD2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "0.6rem",
                  padding: "0.85rem 1rem",
                  color: "#fff",
                  fontSize: "0.9rem",
                  width: "100%",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                }}
              />
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Enviar Mensagem
              </button>
            </div>
          </div>

        </div>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: MUTED,
            fontSize: "0.75rem",
          }}
          className="animate-float"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <Divider />
      {/* ───── SERVIÇOS ───── */}
      <section
        id="servicos"
        className="circuit-bg animate-section"
        style={{ padding: "6rem 2rem", position: "relative", overflow: "hidden" }}
      >
        <CircuitDecor />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                color: A,
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              O que fazemos
            </span>
            <h2 className="section-title" style={{ marginTop: "0.7rem" }}>
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="section-subtitle">
              Da venda à manutenção, oferecemos soluções completas para o seu dispositivo.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: "📱",
                title: "Venda de Smartphones",
                desc: "Celulares novos e seminovos das melhores marcas. Samsung, iPhone, Xiaomi, Motorola e muito mais com preços competitivos e garantia.",
                items: ["Samsung", "Apple iPhone", "Xiaomi", "Motorola", "e outras marcas"],
              },
              {
                icon: "🔌",
                title: "Acessórios",
                desc: "Capinhas, películas, carregadores, fones, cabos e tudo que você precisa para proteger e potencializar o seu aparelho.",
                items: ["Capinhas protetoras", "Películas de vidro", "Carregadores rápidos", "Fones de ouvido", "Cabos e adaptadores"],
              },
              {
                icon: "🔧",
                title: "Assistência Técnica",
                desc: "Reparos rápidos e garantidos por técnicos especializados. Troca de tela, bateria, conector de carga e muito mais.",
                items: ["Troca de tela", "Troca de bateria", "Conector de carga", "Câmera e alto-falante"],
              },
            ].map((srv) => (
              <div
                key={srv.title}
                className="card-glow"
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "1.2rem",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #0099ff, #33ccff)",
                    borderRadius: "1.2rem 1.2rem 0 0",
                  }}
                />
                <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{srv.icon}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.8rem" }}>{srv.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.4rem", fontSize: "0.95rem" }}>{srv.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {srv.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: MUTED }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={A} strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <NextBtn href="#unidades" label="Nossas Unidades" />
        </div>
      </section>

      <Divider />
      {/* ───── BANNER CTA ───── */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "linear-gradient(135deg, rgba(0,153,255,0.15) 0%, rgba(0,100,200,0.08) 100%)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: "0.6rem" }}>
              Seu celular com problema?
            </h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.6 }}>
              Traga para a Barra Acessórios e saiba hoje mesmo o orçamento. Diagnóstico gratuito.
            </p>
          </div>
          <a
            href="https://wa.me/5581986508550"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <Divider />
      {/* ───── UNIDADES ───── */}
      <section id="unidades" style={{ padding: "6rem 2rem", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }} className="circuit-bg animate-section">
        <CircuitDecor />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                color: A,
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Onde nos encontrar
            </span>
            <h2 className="section-title" style={{ marginTop: "0.7rem" }}>
              Nossas <span className="gradient-text">Unidades</span>
            </h2>
            <p className="section-subtitle">
              Estamos presentes em 4 localidades para melhor atender você.
            </p>
          </div>

          <div
            className="units-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
          >
            {[
              {
                nome: "Barra de Jangada",
                bairro: "Barra de Jangada",
                endereco: "R. Cuiabá, 57",
                cidade: "Jaboatão dos Guararapes, PE",
                cep: "CEP 54470-000",
                maps: "https://maps.google.com/?q=R.+Cuiabá,+57,+Barra+de+Jangada,+Jaboatão+dos+Guararapes",
                destaque: true,
                imagem: "/matriz.png",
              },
              {
                nome: "Jardim Piedade",
                bairro: "Jardim Piedade",
                endereco: null,
                cidade: "Em breve",
                cep: null,
                maps: null,
                destaque: false,
                imagem: null,
              },
              {
                nome: "Cajueiro Seco",
                bairro: "Cajueiro Seco",
                endereco: null,
                cidade: "Em breve",
                cep: null,
                maps: null,
                destaque: false,
                imagem: null,
              },
              {
                nome: "Curcurana",
                bairro: "Curcurana",
                endereco: null,
                cidade: "Em breve",
                cep: null,
                maps: null,
                destaque: false,
                imagem: null,
              },
            ].map((unidade) => (
              <div
                key={unidade.nome}
                className="card-glow"
                style={{
                  backgroundColor: CARD,
                  border: "none",
                  borderRadius: "1.2rem",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  ...(unidade.imagem ? {
                    backgroundImage: `url(${unidade.imagem})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  } : {}),
                }}
              >
                {unidade.imagem && (
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(5,10,20,0.6) 0%, rgba(5,10,20,0.85) 100%)",
                    borderRadius: "1.2rem",
                  }} />
                )}
                {unidade.destaque && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #0099ff, #33ccff)",
                      borderRadius: "1.2rem 1.2rem 0 0",
                      zIndex: 1,
                    }}
                  />
                )}

                <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>📍</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1rem" }}>{unidade.nome}</div>
                    {unidade.destaque && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: A,
                          backgroundColor: "rgba(0,153,255,0.12)",
                          border: `1px solid ${BORDER}`,
                          borderRadius: "2rem",
                          padding: "0.1rem 0.5rem",
                        }}
                      >
                        Matriz
                      </span>
                    )}
                  </div>
                </div>

                {unidade.endereco ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                    <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>{unidade.endereco}</div>
                    <div style={{ color: MUTED, fontSize: "0.88rem" }}>{unidade.bairro}</div>
                    <div style={{ color: MUTED, fontSize: "0.88rem" }}>{unidade.cidade}</div>
                    {unidade.cep && <div style={{ color: MUTED, fontSize: "0.82rem" }}>{unidade.cep}</div>}
                  </div>
                ) : (
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        color: MUTED,
                        fontSize: "0.9rem",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: `1px dashed ${BORDER}`,
                        borderRadius: "0.6rem",
                        padding: "0.8rem 1rem",
                        fontStyle: "italic",
                      }}
                    >
                      Endereço em breve
                    </div>
                  </div>
                )}

                {unidade.maps && (
                  <a
                    href={unidade.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem", padding: "0.6rem 1rem" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Ver no Mapa
                  </a>
                )}
                </div>
              </div>
            ))}
          </div>
          <NextBtn href="#sobre" label="Sobre Nós" />
        </div>
      </section>

      <Divider />
      {/* ───── SOBRE / POR QUE NÓS ───── */}
      <section
        id="sobre"
        className="animate-section"
        style={{
          padding: "6rem 2rem",
          background: `linear-gradient(180deg, ${BG} 0%, #0b1220 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-200px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,153,255,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="grid-responsive"
        >
          <div>
            <span
              style={{
                color: A,
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Quem somos
            </span>
            <h2 className="section-title" style={{ marginTop: "0.7rem" }}>
              Por que escolher a{" "}
              <span className="gradient-text">Barra Acessórios</span>?
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
              Somos uma loja especializada em reparos de smartphones e venda de acessórios. Temos mais de 5 anos de confiança e dedicação aos nossos clientes que buscam qualidade, agilidade e preço justo.
            </p>

            {[
              {
                icon: "⚡",
                title: "Atendimento Rápido",
                desc: "A maioria dos reparos é entregue no mesmo dia.",
              },
              {
                icon: "✅",
                title: "Garantia nos Serviços",
                desc: "Todos os reparos e produtos possuem garantia.",
              },
              {
                icon: "💰",
                title: "Preço Justo",
                desc: "Orçamento transparente e sem surpresas.",
              },
              {
                icon: "🛠️",
                title: "Técnicos Especializados",
                desc: "Equipe treinada nas principais marcas do mercado.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.3rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(0, 153, 255, 0.12)",
                    border: `1px solid ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.2rem" }}>{item.title}</div>
                  <div style={{ color: MUTED, fontSize: "0.9rem" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "1.5rem",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,153,255,0.1) 0%, transparent 70%)",
              }}
            />
            <img
              src="/logo barra acc.png"
              alt="Barra Acessórios e Assistência Técnica"
              style={{ width: "100%", maxWidth: "260px", display: "block", margin: "0 auto 2rem", filter: "drop-shadow(0 0 20px rgba(0,153,255,0.3))" }}
              className="animate-float"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { num: "500+", label: "Clientes diariamente" },
                { num: "1k+", label: "Reparos" },
                { num: "5", label: "Anos" },
                { num: "4.9★", label: "Avaliação" },
              ].map((s) => (
                <div
                  key={s.num}
                  style={{
                    backgroundColor: CARD2,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: A }}>{s.num}</div>
                  <div style={{ fontSize: "0.8rem", color: MUTED, marginTop: "0.2rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <NextBtn href="#depoimentos" label="Depoimentos" />
        </div>
      </section>

      <Divider />
      {/* ───── DEPOIMENTOS ───── */}
      <section id="depoimentos" style={{ padding: "6rem 2rem", position: "relative" }} className="circuit-bg animate-section">
        <CircuitDecor />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                color: A,
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Clientes satisfeitos
            </span>
            <h2 className="section-title" style={{ marginTop: "0.7rem" }}>
              O que dizem nossos <span className="gradient-text">Clientes</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                name: "Cleydisson Ferreira",
                role: "6 meses atrás no Google",
                text: "Excelente atendimento. Profissionais qualificados para resolver o problema e os melhores preços.",
                stars: 5,
              },
              {
                name: "Sjsoras Soares",
                role: "5 meses atrás no Google",
                text: "Excelente loja, atendimento de qualidade com profissionais super educados.",
                stars: 5,
              },
              {
                name: "Adrn Soares",
                role: "5 meses atrás no Google",
                text: "Atendimento diferenciado, pontualidade nas entregas de serviços prestados, comprometimento com o cliente.",
                stars: 5,
              },
            ].map((dep) => (
              <div
                key={dep.name}
                className="card-glow"
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "1.2rem",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", marginBottom: "1rem", gap: "2px" }}>
                  {Array(dep.stars)
                    .fill(0)
                    .map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem", fontStyle: "italic" }}>
                  "{dep.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0, 153, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: A,
                      fontSize: "0.9rem",
                    }}
                  >
                    {dep.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{dep.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.78rem" }}>{dep.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <NextBtn href="#inicio" label="Voltar ao início" />
        </div>
      </section>


      <Divider />
      {/* ───── FOOTER ───── */}
      <footer
        style={{
          backgroundColor: "#07090f",
          borderTop: `1px solid ${BORDER}`,
          padding: "3rem 2rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <img
                src="/logo barra acc.png"
                alt="Barra Acessórios e Assistência Técnica"
                style={{ height: "50px", marginBottom: "1rem", filter: "brightness(1.1)" }}
              />
              <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7 }}>
                Especialistas em smartphones. Venda, acessórios e assistência técnica.
              </p>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>Serviços</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Venda de Smartphones", "Acessórios", "Troca de Tela", "Troca de Bateria", "Manutenção Geral"].map((s) => (
                  <li key={s}>
                    <a href="#servicos" style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }} className="nav-link">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>Marcas</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Apple iPhone", "Samsung", "Xiaomi", "Motorola", "Realme"].map((m) => (
                  <li key={m} style={{ color: MUTED, fontSize: "0.9rem" }}>{m}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>Contato Rápido</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <a
                  href="https://wa.me/5581986508550"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#25d366",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (81) 98650-8550
                </a>
                <div style={{ color: MUTED, fontSize: "0.85rem" }}>
                  Seg a Sex: 7h às 18h<br />
                  Dom: 7h às 12h
                </div>
                <div style={{ color: MUTED, fontSize: "0.85rem" }}>R. Cuiabá, 57, Barra de Jangada, Jaboatão dos Guararapes, PE</div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.8rem",
            }}
          >
            <p style={{ color: MUTED, fontSize: "0.82rem" }}>
              © {new Date().getFullYear()} Barra Acessórios e Assistência Técnica. Todos os direitos reservados.
            </p>
            <p style={{ color: MUTED, fontSize: "0.82rem" }}>
              Barra de Jangada, Jaboatão dos Guararapes, PE
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        ::placeholder { color: #4a5568; }

        @media (max-width: 768px) {
          /* Navbar */
          .hidden-mobile { display: none !important; }
          .menu-btn { display: flex !important; }

          /* Grids */
          .grid-responsive { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .units-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }

          /* Hero */
          #inicio { padding: 90px 1.2rem 3rem !important; min-height: auto !important; }
          #inicio h1 { font-size: 2rem !important; text-align: center !important; }
          #inicio p { text-align: center !important; }
          #inicio > div > div:first-child { text-align: center !important; align-items: center !important; }
          #inicio a { width: 100%; justify-content: center !important; }

          /* Seções */
          #servicos, #unidades, #sobre, #depoimentos {
            padding: 3.5rem 1.2rem !important;
          }
          #unidades { min-height: auto !important; }

          /* Sobre */
          #sobre > div > div[style] { grid-template-columns: 1fr !important; }

          /* Logo navbar */
          header img { height: 55px !important; }

          /* Banner CTA */
          section > div[style*="space-between"] { flex-direction: column !important; align-items: flex-start !important; }

          /* Footer */
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:last-child { flex-direction: column !important; text-align: center !important; }

          /* NextBtn */
          .btn-primary, .btn-outline { max-width: 280px; }

          /* Depoimentos e Serviços cards */
          #servicos [style], #depoimentos [style] { min-width: unset !important; }
        }

        @media (min-width: 769px) {
          .menu-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}
