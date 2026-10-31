import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WebVitalsMonitor } from "@/components/web-vitals-monitor"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: "Everest Preparatórios - Intensivo EAOF 2027",
    template: "%s | Everest Preparatórios"
  },
  description: "Turma Intensiva EAOF 2027: Português, Redação e Regulamentos Comuns para o CIAAR. Aulas gravadas, 3.095 flashcards, 6.213 quizzes, simulados, correção de redações e 11 mentorias ao vivo. 210 alunos aprovados desde 2010.",
  keywords: [
    "EAOF", "EAOF 2027", "CIAAR", "concurso militar", "aeronáutica", "preparatório",
    "português", "redação", "regulamentos militares", "flashcards", "simulados", "Professor Tiago Costa", "Capitão Elói",
    "concurso público", "militar", "preparação", "estudo"
  ],
  authors: [{ name: "Professor Tiago Costa", url: "https://everestpreparatorios.com.br" }],
  creator: "Everest Preparatórios",
  publisher: "Everest Preparatórios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ciaar.everestpreparatorios.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Everest Preparatórios - Intensivo EAOF 2027",
    description: "Turma Intensiva EAOF 2027: Português, Redação e Regulamentos Comuns para o CIAAR, com aulas gravadas, simulados, correção de redações e mentorias ao vivo.",
    url: 'https://ciaar.everestpreparatorios.com.br',
    siteName: 'Everest Preparatórios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Everest Preparatórios - Intensivo EAOF 2027',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Everest Preparatórios - Intensivo EAOF 2027",
    description: "Turma Intensiva EAOF 2027: Português, Redação e Regulamentos Comuns para o CIAAR.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'education',
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload recursos críticos para LCP - apenas imagem do professor */}
        <link rel="preload" href="/professor-tiago-costa.jpg" as="image" fetchPriority="high" type="image/jpeg" />

        {/* Preconnect para recursos externos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://hnhzindsfuqnaxosujay.supabase.co" />

        {/* DNS Prefetch para recursos secundários */}
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://app.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* CSS Crítico otimizado para melhor LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *, *::before, *::after {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            html {
              font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
              line-height: 1.5;
              -webkit-text-size-adjust: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              scroll-behavior: smooth;
            }

            body {
              background: #000;
              color: #fff;
              overflow-x: hidden;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }

            /* Prevenção de CLS */
            .hero-section {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            /* Otimizações de performance */
            img, video {
              max-width: 100%;
              height: auto;
            }

            /* Loading spinner crítico */
            .spinner {
              width: 40px;
              height: 40px;
              border: 4px solid #374151;
              border-top: 4px solid #f97316;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
          <WebVitalsMonitor />
        </ThemeProvider>
      </body>
    </html>
  )
}
