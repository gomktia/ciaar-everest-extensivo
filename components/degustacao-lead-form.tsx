"use client";

import React, { useState, useEffect } from "react";
import { Play, CheckCircle, Loader2, ArrowRight, ShieldCheck } from "lucide-react";

const DEGUSTACAO_URL =
  "https://app.everestpreparatorios.com.br/invite/degustacao-eaof-2027";

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function DegustacaoLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [utms, setUtms] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const captured: Record<string, string> = {};
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "campaign_name",
        "ad_name",
      ].forEach((k) => {
        const val = params.get(k);
        if (val) captured[k] = val;
      });
      setUtms(captured);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanPhone = whatsapp.replace(/\D/g, "");
    if (!name.trim()) {
      setErrorMsg("Por favor, preencha seu nome completo.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Por favor, insira um e-mail válido.");
      return;
    }
    if (cleanPhone.length < 10) {
      setErrorMsg("Por favor, insira um WhatsApp válido com DDD.");
      return;
    }

    setLoading(true);

    const payload = {
      full_name: name.trim(),
      email: email.trim().toLowerCase(),
      phone_number: "+55" + cleanPhone,
      campaign_name: utms.campaign_name || utms.utm_campaign || "EAOF 2027",
      ad_name: utms.ad_name || utms.utm_content || "Turma Degustacao",
      utm_source: utms.utm_source || "landingpage",
      utm_medium: utms.utm_medium || "",
      utm_term: utms.utm_term || "",
    };

    try {
      let res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Se estiver na Vercel (ex: ciaar.everestpreparatorios.com.br) onde o Cloudflare Functions não roda localmente, usa o endpoint ativo
      if (!res.ok) {
        res = await fetch("https://eaof.everestpreparatorios.com.br/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      try {
        await fetch("https://eaof.everestpreparatorios.com.br/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (e) {
        console.warn("Falha ao registrar lead:", e);
      }
    } finally {
      setLoading(false);
      setSubmitted(true);
      // Redireciona o usuário para a degustação
      setTimeout(() => {
        window.location.href = DEGUSTACAO_URL;
      }, 1500);
    }
  };

  return (
    <div
      id="degustacao"
      className="relative group overflow-hidden rounded-2xl transition-all duration-300 h-full"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 opacity-30 blur-sm pointer-events-none"></div>

      <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 h-full m-1 flex flex-col justify-between shadow-2xl">
        {/* Badge Grátis */}
        <div className="absolute -top-3 right-4 sm:right-6">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
            100% GRÁTIS
          </span>
        </div>

        <div>
          {/* Cabeçalho */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
              <Play className="w-9 h-9 text-white ml-1" />
            </div>

            <h3 className="text-2xl font-bold mb-1 text-orange-400">
              Turma de Degustação
            </h3>
            <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">
              INTENSIVO EAOF 2027
            </p>
            <p className="text-sm text-orange-200/90 mt-2">
              Cadastre-se para liberar seu acesso grátis à plataforma e tirar dúvidas com nossa equipe
            </p>
          </div>

          {/* Estado de Sucesso */}
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Acesso Liberado com Sucesso!
              </h4>
              <p className="text-sm text-gray-300">
                Redirecionando você para a plataforma de degustação...
              </p>
              <div className="pt-2">
                <a
                  href={DEGUSTACAO_URL}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
                >
                  Entrar na Degustação Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ) : (
            /* Formulário */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1 text-left">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1 text-left">
                  Seu melhor e-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: maria@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1 text-left">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatWhatsApp(e.target.value))}
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Liberando acesso...</span>
                  </>
                ) : (
                  <>
                    <span>Acessar Degustação Grátis</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Seus dados estão 100% seguros. Sem compromisso.</span>
              </div>
            </form>
          )}
        </div>

        {/* Benefícios rápidos no rodapé do card */}
        <div className="pt-6 mt-6 border-t border-slate-700/60 grid grid-cols-3 gap-2 text-center text-[11px] text-gray-300">
          <div>
            <span className="block font-semibold text-orange-400">Aulas</span>
            Demonstrativas
          </div>
          <div>
            <span className="block font-semibold text-orange-400">Plataforma</span>
            Acesso imediato
          </div>
          <div>
            <span className="block font-semibold text-orange-400">Sem Custo</span>
            Degustação 100% livre
          </div>
        </div>
      </div>
    </div>
  );
}

