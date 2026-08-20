import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 z-10">
        <nav className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Minha Marca
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#recursos" className="hover:text-blue-600 transition-colors">Recursos</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center gap-12 px-6 py-24 text-center md:py-32">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Conectando ideias ao sucesso do seu negócio
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Uma landing page simples e moderna construída com Next.js e Tailwind CSS.
            Rápida, acessível e pronta para escalar junto com seu crescimento.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
          >
            Comece agora
          </a>
        </section>

        <section id="recursos" className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold mb-12">Recursos</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">Rápido e otimizado</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Renderização no servidor e carregamento otimizado garantem
                  desempenho excepcional.
                </p>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">Responsivo</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Layout adaptável a todos os dispositivos, do mobile ao desktop.
                </p>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold">Escalável</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Arquitetura modular que cresce com as necessidades do seu projeto.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Sobre nós</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Somos uma equina focada em transformar ideias em produtos digitais
              que geram resultados reais. Com Next.js no coração, criamos
              experiências rápidas e acessíveis para você e seus clientes.
            </p>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-gray-200 dark:border-gray-800 py-10">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Minha Marca. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="mailto:contato@exemplo.com" className="hover:text-blue-600 transition-colors">
              contato@exemplo.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
