"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, BookOpen, Target, Trophy, Zap, Shield, ArrowRight, Play, Clock, Award, Medal, TrendingUp, BarChart3, Brain, CheckSquare, Moon, Video, FileText, Headphones, MessageCircle, Gift, Bookmark, Calendar, MessageCircle as WhatsApp, X, Check, Instagram, Youtube } from "lucide-react";
import { Suspense, lazy } from "react";
// Lazy load modals para reduzir bundle inicial
const PrivacyPolicyModal = lazy(() => import("@/components/privacy-policy-modal").then(module => ({ default: module.PrivacyPolicyModal })));
const TermsOfUseModal = lazy(() => import("@/components/terms-of-use-modal").then(module => ({ default: module.TermsOfUseModal })));
import ProfessorPhoto from "@/components/professor-photo";
import { YouTubeEmbedOptimized } from "@/components/youtube-embed-optimized";
import { OptimizedVideo } from "@/components/optimized-video";
import { MobileVideoStrategy } from "@/components/mobile-video-strategy";
import { MobileOptimizedImage } from "@/components/mobile-optimized-image";
import { useState } from "react";

export default function LandingPage() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const checkoutUrl = "https://pay.cakto.com.br/mwxrttx_939974";

  return (
    <>


      {/* CSS Crítico Mobile-First para melhor LCP */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-section { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          .hero-content { text-align: center; z-index: 10; position: relative; padding: 1rem; }
          .hero-title { font-size: clamp(1.75rem, 4vw, 3rem); font-weight: 700; line-height: 1.1; margin-bottom: 1rem; background: linear-gradient(45deg, #f97316, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .professor-photo-container { position: relative; width: 150px; height: 150px; margin: 0 auto 1.5rem; }
          .professor-photo { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 2px solid transparent; }
          @media (min-width: 768px) { .professor-photo-container { width: 200px; height: 200px; margin-bottom: 2rem; } .professor-photo { border-width: 3px; } }
          @media (min-width: 1024px) { .professor-photo-container { width: 250px; height: 250px; } }
        `
      }} />

      <div className="min-h-screen bg-black text-white overflow-x-hidden" aria-hidden="false">
        {/* Conteúdo principal */}
        <div className="relative z-10">
          {/* Header/Navigation */}
          <header className="relative z-50 overflow-hidden">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex flex-row items-center relative w-full">
                {/* Logo - Canto esquerdo */}
                <div className="flex items-center flex-shrink-0">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Everest Preparatórios"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Título centralizado - Só aparece em desktop */}
                <div className="flex-1 flex justify-center hidden md:block">
                  <span className="text-orange-500 font-bold text-xl">EVEREST PREPARATÓRIOS</span>
                </div>

              </div>
            </nav>
          </header>

          {/* LED Light Bar - Luz fina de LED com cores alternadas */}
          <div className="relative w-full h-1 bg-black overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80 animate-led-sweep-orange"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 animate-led-sweep-blue"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-80 animate-led-sweep-green"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80 animate-led-sweep-purple"></div>
          </div>

          {/* Hero Section */}
          <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* Badge com animação sutil */}
                <Badge className="mb-4 sm:mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse">
                  <Star className="w-4 h-4 mr-2" />
                  Plataforma #1 para CIAAR
                </Badge>

                {/* Título principal sem efeito LED */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent leading-tight px-2">
                  Conquiste sua
                  <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight">
                    Vaga no CIAAR
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                  A plataforma mais completa para estudar Português e Redação para o CIAAR 2027.
                  <span className="text-orange-400 font-semibold"> 196 aulas, +131 horas, 3.095 flashcards, 6.213 quizzes</span>, simulados, correção de redações e mentorias ao vivo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-sm text-gray-400 px-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-500 mr-2" />
                    <span>+83 alunos aprovados EAOF 2026</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-orange-400 mr-2" />
                    <span>+72 alunos Everest convocados EAOF 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Botões dos Grupos - WhatsApp e Telegram */}
          <section className="py-12 sm:py-16 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                  Junte-se à nossa
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Comunidade Exclusiva</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                  Entre nos nossos grupos e receba dicas diárias, materiais exclusivos e tire suas dúvidas diretamente com os professores
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-2">
                {/* Botão WhatsApp */}
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 opacity-30 blur-sm"></div>
                  <a
                    href="https://chat.whatsapp.com/D3hgVDf0Rax5Y6wiBjL1PO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-green-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/25 h-full m-1">
                      <div className="text-center">
                        {/* Ícone WhatsApp SVG */}
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-12 h-12 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.515" />
                          </svg>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-green-400">Grupo WhatsApp</h3>
                        <p className="text-gray-300 mb-4">
                          📱 Preparatório CIAAR 2027<br />
                          <span className="text-sm text-gray-400">(Português e Redação)</span>
                        </p>

                        <div className="space-y-2 text-sm text-gray-300 mb-6">
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Dicas diárias exclusivas</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Materiais complementares</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Suporte direto dos professores</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300 inline-flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          Entrar no Grupo
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Botão Degustação CIAAR 2027 */}
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 opacity-30 blur-sm"></div>
                  <a
                    href="https://app.everestpreparatorios.com.br/invite/degustacao-eaof-2027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/25 h-full m-1">
                      <div className="text-center">
                        {/* Badge Grátis */}
                        <div className="absolute -top-3 right-4 sm:right-6">
                          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                            GRÁTIS
                          </span>
                        </div>

                        {/* Ícone Plataforma */}
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-white ml-1" />
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-orange-400">Turma de Degustação</h3>
                        <p className="text-gray-300 mb-4">
                          Extensivo CIAAR 2027<br />
                          <span className="text-sm text-orange-300/80">Experimente a plataforma gratuitamente</span>
                        </p>

                        <div className="space-y-2 text-sm text-gray-300 mb-6">
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Acesso a aulas demonstrativas</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Conheça a plataforma por dentro</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Sem compromisso</span>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 inline-flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          Experimentar Grátis
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Badge adicional */}
              <div className="text-center mt-12">
                <div className="relative group overflow-hidden">
                  {/* Efeito de brilho pulsante */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>

                  {/* Badge principal com gradiente premium */}
                  <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 border-2 border-orange-400/50 text-white px-6 sm:px-8 py-4 rounded-2xl text-base font-semibold shadow-2xl group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-300/70 m-2">
                    {/* Ícone estrela com brilho */}
                    <div className="flex items-center justify-center space-x-3">
                      <div className="relative">
                        <Star className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                        {/* Brilho da estrela */}
                        <div className="absolute inset-0 w-6 h-6 bg-yellow-300 rounded-full blur-sm opacity-60 animate-ping"></div>
                      </div>

                      {/* Texto com gradiente */}
                      <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent font-bold">
                        Grupos 100% gratuitos para alunos e interessados no CIAAR
                      </span>

                      {/* Ícone de presente */}
                      <div className="relative">
                        <Gift className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                        {/* Brilho do presente */}
                        <div className="absolute inset-0 w-6 h-6 bg-yellow-300 rounded-full blur-sm opacity-60 animate-ping delay-300"></div>
                      </div>
                    </div>

                    {/* Linha decorativa */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full opacity-60"></div>
                  </div>

                  {/* Partículas flutuantes */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce delay-100 opacity-80"></div>
                  <div className="absolute -bottom-1 -left-3 w-1 h-1 bg-yellow-300 rounded-full animate-bounce delay-200 opacity-80"></div>
                  <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce delay-300 opacity-80"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Casos de Sucesso */}
          <section className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  NOSSOS ALUNOS: PARABÉNS AOS APROVADOS!
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  É com imensa alegria e orgulho que compartilhamos uma grande notícia: das 248 vagas disponíveis, 72 alunos Everest foram convocados e 83 alcançaram a aprovação no EAOF 2026!
                </p>
                <p className="text-2xl font-bold text-orange-400 mb-4">
                  🏆 A MAIOR APROVAÇÃO DO BRASIL! 🏆
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Confira abaixo a lista completa dos nossos campeões aprovados:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2">
                {/* Card SVE com efeito LED */}
                <div className="relative group h-full overflow-hidden">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500  opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-blue-500/30 hover:border-blue-500/50 rounded-lg p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25 h-full flex flex-col m-1">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      SVE
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ADRIANO PONTES NEPOMUCENO</div>
                      <div className="text-sm text-gray-300">🏆 CARLOS MAURÍCIO MACHADO AIETA</div>
                      <div className="text-sm text-gray-300">🏆 HUMBERTO DA COSTA REZENDE</div>
                      <div className="text-sm text-gray-300">🏆 LUIS ANDRE GARCIA DA SILVA</div>
                    </div>
                  </div>
                </div>

                {/* Card GDS com efeito LED */}
                <div className="relative group h-full">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 via-emerald-500 to-green-500  opacity-75" style={{ animationDelay: '1s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-green-500/30 hover:border-green-500/50 rounded-lg p-4 sm:p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/25 h-full flex flex-col m-1">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      GDS
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ALEXANDRE ALEX LUDOVINO DA FONSECA</div>
                      <div className="text-sm text-gray-300">🏆 ANDERSON BARBOSA MARTINS</div>
                      <div className="text-sm text-gray-300">🏆 GILSON CONCEIÇÃO DE ARAÚJO</div>
                      <div className="text-sm text-gray-300">🏆 MANUEL COSTA SOARES</div>
                      <div className="text-sm text-gray-300">🏆 ROBSON MARTINS REIS</div>
                      <div className="text-sm text-gray-300">🏆 THIAGO SOARES DE BARROS</div>
                    </div>
                  </div>
                </div>

                {/* Card CTA com efeito LED */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  opacity-75" style={{ animationDelay: '2s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-purple-500/20 hover:border-purple-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      CTA
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ALINE VEIGA DO NASCIMENTO</div>
                      <div className="text-sm text-gray-300">🏆 FLÁVIA CARVALHO CALDAS</div>
                      <div className="text-sm text-gray-300">🏆 GEANDRO PINHEIRO PIRES</div>
                      <div className="text-sm text-gray-300">🏆 MARCOS CORREIA DOS SANTOS</div>
                    </div>
                  </div>
                </div>



                {/* ANV - Análise */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 via-pink-500 to-red-500  opacity-75" style={{ animationDelay: '4s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-red-500/20 hover:border-red-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-red-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      ANV
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 DAVID RODRIGO GONÇALVES RIBEIRO</div>
                      <div className="text-sm text-gray-300">🏆 FÁBIO HENRIQUE PEREIRA DOS SANTOS</div>
                      <div className="text-sm text-gray-300">🏆 ROBERVAL CORRÊA ESPADIM</div>
                    </div>
                  </div>
                </div>

                {/* SVA - Serviços Administrativos */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500  opacity-75" style={{ animationDelay: '5s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-indigo-500/20 hover:border-indigo-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-indigo-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      SVA
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ANDERSON EVANGELISTA DOS SANTOS</div>
                      <div className="text-sm text-gray-300">🏆 ANTONIO CARLOS MENDONÇA</div>
                      <div className="text-sm text-gray-300">🏆 EDILSON LINDEMBERG DIAS BARBOSA</div>
                      <div className="text-sm text-gray-300">🏆 ELVAIR DOS SANTOS LIBORIO</div>
                      <div className="text-sm text-gray-300">🏆 FABIO MARTINS</div>
                      <div className="text-sm text-gray-300">🏆 JUSSIÊ BARBOSA DE SOUSA</div>
                      <div className="text-sm text-gray-300">🏆 LUIZ GUILHERME DOS SANTOS MORAES</div>
                      <div className="text-sm text-gray-300">🏆 PRISCILA PONTES DOS SANTOS</div>
                      <div className="text-sm text-gray-300">🏆 SHIRLEY DOS SANTOS</div>
                      <div className="text-sm text-gray-300">🏆 ROGÉRIO PINTO DE AZEVEDO</div>
                      <div className="text-sm text-gray-300">🏆 RAQUEL MACIAS DOS SANTOS</div>
                      <div className="text-sm text-gray-300">🏆 ANDRÉ LUIZ MOREIRA TEIXEIRA</div>
                      <div className="text-sm text-gray-300">🏆 CLÁUDIO JOSÉ DA SILVA</div>
                    </div>
                  </div>
                </div>

                {/* SVH - Serviços Hospitalares */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500  opacity-75" style={{ animationDelay: '6s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-pink-500/20 hover:border-pink-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      SVH
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 RAQUEL WEISHEIMER DE SOUZA</div>
                      <div className="text-sm text-gray-300">🏆 THIAGO RODRIGUES EVANGELISTA</div>
                      <div className="text-sm text-gray-300">🏆 VIVIANE MANHAES XAVIER</div>
                      <div className="text-sm text-gray-300">🏆 PRISCILA BORDUAM DA SILVA</div>
                    </div>
                  </div>
                </div>

                {/* SVI - Serviços de Informática */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500  opacity-75" style={{ animationDelay: '7s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-teal-500/20 hover:border-teal-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-teal-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      SVI
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ALISSON ALVES OLIVEIRA LEITE</div>
                      <div className="text-sm text-gray-300">🏆 ANTONIO DE PÁDUA AGUIAR FILHO</div>
                      <div className="text-sm text-gray-300">🏆 REGINALDO CESAR DUARTE</div>
                      <div className="text-sm text-gray-300">🏆 VICTOR SALUSTRINO BEZERRA</div>
                      <div className="text-sm text-gray-300">🏆 WAGNER DOS SANTOS DA SILVA</div>
                    </div>
                  </div>
                </div>

                {/* SVM - Serviços de Manutenção */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500  opacity-75" style={{ animationDelay: '8s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-amber-500/20 hover:border-amber-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-amber-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      SVM
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 CARLOS EDUARDO BEZERRA DE SOUZA</div>
                      <div className="text-sm text-gray-300">🏆 WESLEY BARLATTI DE MACEDO</div>
                    </div>
                  </div>
                </div>

                {/* Outras Especialidades */}
                <div className="relative group h-full">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-500 via-slate-500 to-gray-500  opacity-75" style={{ animationDelay: '9s' }}></div>
                  <div className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-gray-500/20 hover:border-gray-500/40 rounded-lg p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gray-500/25 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center flex-shrink-0">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
                      Outras
                    </h3>
                    <div className="space-y-2 flex-grow">
                      <div className="text-sm text-gray-300">🏆 ANDERSON CARVALHO DE LIMA (MET)</div>
                      <div className="text-sm text-gray-300">🏆 FERNANDA DE SOUZA BERNARDO (SUP)</div>
                      <div className="text-sm text-gray-300">🏆 GETULIO TIAGO VALENTE SANFELICE (SUP)</div>
                      <div className="text-sm text-gray-300">🏆 NATÁLIA FERNANDES GALENO (SIA)</div>
                      <div className="text-sm text-gray-300">🏆 ROBERTO MÁRCIO DE MELO JUNIOR (FOT)</div>
                      <div className="text-sm text-gray-300">🏆 ALEX DIAS GUIMARÃES (SIA)</div>
                      <div className="text-sm text-gray-300">🏆 ANTONIO FIDELIS DIAS (SIA)</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg">
                  <Trophy className="w-6 h-6 mr-3" />
                  Total: 83 Alunos Aprovados EAOF 2026
                </div>
              </div>

              {/* Texto completo sobre os aprovados */}
              <div className="mt-16 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl p-8 border border-orange-500/20">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Cada nome nesta lista representa uma jornada de muito estudo, persistência e dedicação. Ver o sucesso de vocês é a nossa maior recompensa e a prova do compromisso do Professor Tiago Costa com a excelência no ensino.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Parabenizamos a todos que alcançaram este objetivo tão significativo e desejamos ainda mais sucesso nesta nova etapa!
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    A todos os nossos aprovados, recebam novamente os nossos mais sinceros parabéns por essa grande conquista! Que esta seja a primeira de muitas vitórias em suas jornadas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Principal */}
          <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para conquistar sua
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> vaga no CIAAR 2027?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Junte-se aos 83 alunos aprovados no EAOF 2026 que já passaram com nossa metodologia comprovada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 sm:px-4">
                {/* Botão principal - Premium */}
                <div className="relative group w-full sm:w-auto">
                  {/* Efeito de brilho pulsante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>

                  {/* Efeito de borda sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl opacity-30"></div>

                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button size="lg" className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-105 border-2 border-orange-400/30 hover:border-orange-300/50 w-full sm:w-auto">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                          {/* Brilho do ícone */}
                          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full blur-sm opacity-60 animate-ping"></div>
                        </div>
                        <span className="text-base sm:text-lg font-extrabold">Garantir Minha Vaga</span>
                        <div className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-sm font-bold">
                          12x de R$ 82,32
                        </div>
                      </div>
                    </Button>
                  </a>
                </div>

                {/* Botão secundário - Elegante */}
                <div className="relative group w-full sm:w-auto">
                  {/* Efeito de brilho pulsante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>

                  {/* Efeito de borda sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-2xl opacity-20"></div>

                  <Link href="https://alunos.everestpreparatorios.com.br/" className="block w-full" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 hover:from-slate-700/90 hover:to-slate-800/90 border-2 border-blue-400/50 hover:border-blue-300 text-blue-300 hover:text-blue-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                          {/* Brilho do ícone */}
                          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full blur-sm opacity-60 animate-ping delay-300"></div>
                        </div>
                        <span className="text-base sm:text-lg font-semibold">Já tenho conta</span>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>



          {/* Vídeo Demonstrativo das Aulas */}
          <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Conheça o
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Professor Tiago Costa</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Assista ao vídeo e entenda como nossa metodologia funciona.
                </p>
              </div>

              <div className="relative w-full max-w-4xl mx-auto">
                {/* Container do vídeo com efeito LED */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500  opacity-75 blur-sm"></div>
                  <YouTubeEmbedOptimized
                    videoId="3Yq9DtPtyd4"
                    title="Vídeo Demonstrativo - Everest Preparatórios"
                    className="w-full max-w-4xl mx-auto"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-2">
                    <Play className="w-4 h-4 mr-2" />
                    Vídeo Demonstrativo das Aulas
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Cases de Sucesso - Vídeos */}
          <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Cases de
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Sucesso</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Assista aos depoimentos reais de alunos que passaram no EAOF usando nossa metodologia
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                {[
                  { id: "2CnIID2l3aI", title: "Depoimento Flávia", desc: "A preparação certa faz toda a diferença na hora da prova!" },
                  { id: "Lwy8OPCVq18", title: "Depoimento 2", desc: "Consegui minha aprovação graças à metodologia do Professor Tiago!" },
                  { id: "lssL3Hw-krc", title: "Depoimento 3", desc: "Sonho realizado! Agora sou oficial da Aeronáutica!" },
                  { id: "nuYHx5ajoTI", title: "Depoimento 4", desc: "A plataforma completa fez toda a diferença na minha aprovação" },
                  { id: "8MODKdxPo6U", title: "Depoimento 5", desc: "O suporte do Professor Tiago foi essencial para minha conquista" },
                  { id: "2CnIID2l3aI", title: "Depoimento 6", desc: "O curso transformou minha preparação e me deu confiança para a prova" },
                ].map((v, i) => (
                  <div key={i} className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl p-4 sm:p-5 border-2 border-orange-500/30 shadow-lg">
                    <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden mb-4 border border-orange-500/20 relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                        title={v.title}
                        className="w-full h-full absolute inset-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-orange-400 px-1">{v.title}</h3>
                    <p className="text-sm text-gray-300 px-1">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-400 text-sm">
                  Estes são apenas alguns dos 83 alunos aprovados no EAOF 2026 que usaram nossa metodologia
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="recursos" className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Tudo que você precisa para
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> passar no CIAAR</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Nossa plataforma foi desenvolvida especificamente para o concurso da FAB,
                  com conteúdo 100% alinhado ao edital e metodologia comprovada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                {/* Card Flashcards com efeito LED */}
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500  opacity-75 blur-sm"></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col shadow-lg m-1">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">3.095 Flashcards</CardTitle>
                      <CardDescription className="text-gray-300">
                        6 matérias e 83 tópicos para memorização eficiente
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          6 matérias completas
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          83 tópicos organizados
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Repetição espaçada para memorização
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Quizzes com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  opacity-75 blur-sm" style={{ animationDelay: '1s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <CheckSquare className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">6.213 Quizzes</CardTitle>
                      <CardDescription className="text-gray-300">
                        7 matérias, 89 tópicos e banco de questões completo
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          7 matérias e 89 tópicos
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Banco com 6.213 questões
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Prática direcionada por tema
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Mapas Mentais com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500  opacity-75 blur-sm" style={{ animationDelay: '2s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">9 Mapas Mentais</CardTitle>
                      <CardDescription className="text-gray-300">
                        299 conceitos organizados visualmente para revisão rápida
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          9 mapas completos
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          299 conceitos-chave
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Revisão visual e rápida
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Acervo Digital com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-500  opacity-75 blur-sm" style={{ animationDelay: '3s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">Acervo Digital</CardTitle>
                      <CardDescription className="text-gray-300">
                        133 materiais, 33 livros e 100 provas com gabaritos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          133 materiais de apoio
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          33 livros do edital
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          100 provas com gabaritos
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Evercast Podcast com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500  opacity-75 blur-sm" style={{ animationDelay: '4s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">Evercast (Podcast)</CardTitle>
                      <CardDescription className="text-gray-300">
                        Escute as aulas em formato podcast onde e quando quiser
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Aulas em áudio
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Estude em qualquer lugar
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Conteúdo completo em podcast
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Plano de Estudo e Gamificação com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-red-500  opacity-75 blur-sm" style={{ animationDelay: '5s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">Plano de Estudo + Gamificação</CardTitle>
                      <CardDescription className="text-gray-300">
                        Cronômetro, ranking da turma, desempenho, progresso e conquistas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Cronômetro e plano de estudo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Ranking da turma e gamificação
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Desempenho, progresso e conquistas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* O que está incluído */}
          <section className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  O que está
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> incluído</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Extensivo CIAAR 2027 com acesso por 12 meses. Tudo que você precisa para passar no CIAAR.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                {/* Card Aulas Gravadas com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500  opacity-75 blur-sm"></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col shadow-lg">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">196 Aulas Gravadas</CardTitle>
                      <CardDescription className="text-gray-300">
                        +131 horas de aulas de GIT em 9 frentes, com visualização off-line
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Gramática (teoria e prática)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Redação (teoria e prática)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Material de aula, exercícios, flashcards e quiz
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Material de Apoio com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  opacity-75 blur-sm" style={{ animationDelay: '1s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">Acervo Digital</CardTitle>
                      <CardDescription className="text-gray-300">
                        133 materiais, 33 livros e 100 provas com gabaritos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          133 materiais de apoio
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          33 livros do edital
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          100 provas com gabaritos
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Simulados com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500  opacity-75 blur-sm" style={{ animationDelay: '2s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">10 Simulados</CardTitle>
                      <CardDescription className="text-gray-300">
                        10 provas simuladas com 10 temas de redação
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Provas no formato do edital
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Resoluções em vídeo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          10 temas de redação
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Lives Semanais com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-500  opacity-75 blur-sm" style={{ animationDelay: '3s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">24 Mentorias ao Vivo</CardTitle>
                      <CardDescription className="text-gray-300">
                        Mentorias ao vivo para dúvidas e prática de questões - início em abril
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Retirada de dúvidas ao vivo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Prática de análise de questões
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Disponíveis no site após a live
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Comunidade com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500  opacity-75 blur-sm" style={{ animationDelay: '4s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">Comunidade</CardTitle>
                      <CardDescription className="text-gray-300">
                        Comunidade da turma, comunidade geral e canais de dúvidas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Comunidade da turma e geral
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Canais de dúvidas por matéria
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Suporte direto dos professores
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Correção de Redações com efeito LED */}
                <div className="relative h-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-red-500  opacity-75 blur-sm" style={{ animationDelay: '5s' }}></div>
                  <Card className="relative bg-gradient-to-br from-[#1e293b] to-[#334155] border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-orange-400">10 Redações Corrigidas</CardTitle>
                      <CardDescription className="text-gray-300">
                        Correção detalhada com laudo avaliativo e auxílio de IA
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Laudo avaliativo completo
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Auxílio de IA
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Sugestões de melhoria
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Professor Tiago Costa Section */}
          <section id="sobre" className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Conheça o
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Professor Tiago Costa</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Especialista em concursos militares com mais de 10 anos de experiência
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <ProfessorPhoto />
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">Tiago Costa de Oliveira</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Especialista dedicado exclusivamente aos concursos militares
                  </p>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Metodologia comprovada com +83 aprovados EAOF 2026</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Aulas estruturadas entre teoria e prática</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Abordagem direta e objetiva</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Suporte personalizado durante todo o curso</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl p-6 border border-orange-500/20">
                    <h4 className="text-xl font-bold mb-4 text-orange-400">Metodologia Comprovada</h4>
                    <p className="text-gray-300 mb-4">
                      O professor Tiago Costa apresenta o curso com módulos organizados entre teoria e prática,
                      garantindo uma abordagem estruturada e direta para sua aprovação no EAOF.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Target className="w-4 h-4 text-orange-400 mr-2" />
                        <span>Foco no EAOF</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 text-orange-400 mr-2" />
                        <span>Material Atualizado</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-orange-400 mr-2" />
                        <span>+83 Aprovados EAOF 2026</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 text-orange-400 mr-2" />
                        <span>Resultados Comprovados</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-2xl p-6 border border-orange-500/20">
                    <h4 className="text-xl font-bold mb-4 text-orange-400">Por que escolher o Professor Tiago?</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Especialista dedicado exclusivamente aos concursos militares</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Metodologia testada e aprovada por 83 alunos no EAOF 2026</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Aulas práticas e diretas ao ponto</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Suporte personalizado durante todo o curso</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Preços */}
          <section id="precos" className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Investimento
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> especial</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Garanta o valor promocional de apenas 12x de R$ 82,32 ou R$ 797,00 à vista.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-2">
                {/* Card Preço Original - Desvalorizado */}
                <div className="relative group">
                  {/* Efeito de brilho sutil */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

                  <Card className="relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 border-2 border-gray-500/30 hover:border-gray-400/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm">
                    {/* Badge "Não Recomendado" */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gray-500 text-white px-4 py-1 text-xs font-semibold border border-gray-400/50">
                        <X className="w-3 h-3 mr-1" />
                        Não Recomendado
                      </Badge>
                    </div>

                    <CardHeader className="text-center pt-6">
                      <CardTitle className="text-2xl text-gray-300">De</CardTitle>
                      <div className="relative">
                        <div className="text-5xl font-black text-gray-400 line-through opacity-60">R$ 1.987,00</div>
                        {/* Símbolo de "não vale a pena" */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white font-bold" />
                        </div>
                      </div>
                      <CardDescription className="text-gray-400 text-lg">
                        Preço original
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <ul className="space-y-3 text-sm text-gray-400 mb-6">
                        <li className="flex items-center">
                          <X className="w-5 h-5 text-red-400 mr-3" />
                          <span>Curso básico</span>
                        </li>
                        <li className="flex items-center">
                          <X className="w-5 h-5 text-red-400 mr-3" />
                          <span>Sem bônus</span>
                        </li>
                        <li className="flex items-center">
                          <X className="w-5 h-5 text-red-400 mr-3" />
                          <span>Acesso limitado</span>
                        </li>
                      </ul>

                      {/* Mensagem de desvalorização */}
                      <div className="text-center p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm font-semibold">❌ Não vale a pena!</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Card Oferta Limitada - SUPER ATRATIVO */}
                <div className="relative group">
                  {/* Efeito de brilho pulsante premium */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>

                  {/* Efeito de borda animada */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl  opacity-75"></div>

                  <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/50 hover:border-orange-300/70 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm shadow-2xl group-hover:shadow-orange-500/30">
                    {/* Badge "Oferta Limitada" Premium */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="relative">
                        {/* Efeito de brilho pulsante */}
                        <div className="absolute inset-0 bg-orange-400 rounded-full blur-lg opacity-60 animate-ping"></div>

                        <Badge className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-bold border-2 border-orange-300/50 shadow-lg whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Gift className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                            <span>OFERTA LIMITADA - Até 02/04</span>
                            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse flex-shrink-0"></div>
                          </div>
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="text-center pt-14">
                      <CardTitle className="text-2xl text-orange-300">Por</CardTitle>
                      <div className="relative">
                        {/* Preço principal com efeito de brilho */}
                        <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                          12x de R$ 82,32
                        </div>
                        <p className="mt-2 text-lg font-bold text-green-300">ou R$ 797,00 à vista</p>

                        {/* Símbolo de "vale muito a pena" */}
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <Check className="w-6 h-6 text-white font-bold" />
                        </div>
                      </div>


                      {/* Economia destacada */}
                      <div className="mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 text-sm font-bold">
                          💰 ECONOMIA DE R$ 1.190,00 + BÔNUS!
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <ul className="space-y-3 text-sm mb-6">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-green-300 font-semibold">196 aulas + acervo digital</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-green-300 font-semibold">10 simulados + 10 redações corrigidas</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-green-300 font-semibold">24 mentorias ao vivo + acesso 12 meses</span>
                        </li>
                      </ul>

                      {/* Botão CTA Premium */}
                      <div className="relative">
                        {/* Efeito de brilho pulsante no botão */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur-lg opacity-60 animate-pulse"></div>

                        <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="relative w-full py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-105 border-0">
                            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                              <div className="relative">
                                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                                {/* Brilho do ícone */}
                                <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full blur-sm opacity-60 animate-ping"></div>
                              </div>
                              <span className="text-sm sm:text-base">GARANTIR MINHA VAGA</span>
                              <div className="bg-yellow-400 text-orange-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                                AGORA!
                              </div>
                            </div>
                          </Button>
                        </a>
                      </div>

                      {/* Urgência e escassez */}
                      <div className="mt-4 text-center p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <p className="text-red-300 text-sm font-bold">
                          ⏰ ÚLTIMAS VAGAS DISPONÍVEIS!
                        </p>
                        <p className="text-red-400 text-xs mt-1">
                          Oferta por tempo limitado
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bônus */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Bônus Exclusivos</span> (Valor: R$ 387,00)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-lg p-6 border border-orange-500/20">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Bookmark className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-orange-400">E-book "Dicas de Prova"</h4>
                    <p className="text-sm text-gray-300">50 dicas exclusivas para maximizar sua pontuação</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-lg p-6 border border-orange-500/20">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-orange-400">Workshop "Como Estudar"</h4>
                    <p className="text-sm text-gray-300">Metodologia comprovada de estudo eficiente</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-lg p-6 border border-orange-500/20">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-orange-400">Cronograma Personalizado</h4>
                    <p className="text-sm text-gray-300">Plano de estudos adaptado ao seu tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* CTA Final */}
          <section className="py-20 bg-black relative overflow-hidden">
            {/* Background animado com efeitos LED */}
            <div className="absolute inset-0 bg-black">
              {/* Círculos decorativos com efeito LED */}
              <div className="absolute top-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern futurístico */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para conquistar sua
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> vaga no CIAAR 2027?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Junte-se aos 83 alunos aprovados no EAOF 2026 que já passaram com nossa metodologia comprovada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 sm:px-4">
                {/* Botão principal - Premium */}
                <div className="relative group w-full sm:w-auto">
                  {/* Efeito de brilho pulsante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>

                  {/* Efeito de borda animada */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl  opacity-75"></div>

                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button size="lg" className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-105 border-2 border-orange-400/30 hover:border-orange-300/50 w-full sm:w-auto">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                          {/* Brilho do ícone */}
                          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full blur-sm opacity-60 animate-ping"></div>
                        </div>
                        <span className="text-base sm:text-lg font-extrabold">Garantir Minha Vaga</span>
                        <div className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-sm font-bold">
                          12x de R$ 82,32
                        </div>
                      </div>
                    </Button>
                  </a>
                </div>

                {/* Botão secundário - Elegante */}
                <div className="relative group w-full sm:w-auto">
                  {/* Efeito de brilho pulsante */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>

                  {/* Efeito de borda animada */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-2xl  opacity-50"></div>

                  <Link href="https://alunos.everestpreparatorios.com.br/" className="block w-full" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 hover:from-slate-700/90 hover:to-slate-800/90 border-2 border-blue-400/50 hover:border-blue-300 text-blue-300 hover:text-blue-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="relative">
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                          {/* Brilho do ícone */}
                          <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full blur-sm opacity-60 animate-ping delay-300"></div>
                        </div>
                        <span className="text-base sm:text-lg font-semibold">Já tenho conta</span>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Everest Preparatórios
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Plataforma educacional independente para preparação de concursos militares.
                </p>

                {/* Redes Sociais */}
                <div className="flex justify-center space-x-6 mb-6">
                  <a
                    href="https://www.instagram.com/everestpreparatorios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@everestcursospreparatorios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>

                <div className="flex justify-center space-x-6 text-sm text-gray-400">
                  <button
                    onClick={() => setIsTermsModalOpen(true)}
                    className="hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    Termos de Uso
                  </button>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    Política de Privacidade
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-6">
                  &copy; {new Date().getFullYear()} Everest Preparatórios. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>

        {/* WhatsApp Flutuante */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/55981554037?text=Olá! Gostaria de saber mais sobre os cursos do Everest! 🎯"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative">
              {/* Efeito de brilho pulsante */}
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-green-300 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse delay-100 scale-125"></div>

              {/* Botão principal com gradiente mais bonito */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-green-400/60 transition-all duration-300 group-hover:scale-110 border-2 border-green-300/30">
                {/* Ícone WhatsApp SVG customizado */}
                <svg
                  className="w-9 h-9 text-white drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.515" />
                </svg>
              </div>

              {/* Badge de notificação mais estilizado */}
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center animate-bounce shadow-lg border-2 border-white">
                <span className="text-white text-xs font-bold">1</span>
              </div>

              {/* Ondas de animação */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-green-300/20 animate-ping delay-100 scale-110"></div>
            </div>

            {/* Tooltip mais bonito */}
            <div className="absolute right-20 bottom-2 bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Fale conosco no WhatsApp!</span>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
            </div>
          </a>
        </div>


        {/* Modais com lazy loading */}
        <Suspense fallback={null}>
          {isPrivacyModalOpen && (
            <PrivacyPolicyModal
              isOpen={isPrivacyModalOpen}
              onClose={() => setIsPrivacyModalOpen(false)}
            />
          )}
          {isTermsModalOpen && (
            <TermsOfUseModal
              isOpen={isTermsModalOpen}
              onClose={() => setIsTermsModalOpen(false)}
            />
          )}
        </Suspense>

      </div>
    </>
  );
}
