export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_36%),linear-gradient(135deg,_rgba(24,24,27,0.92),_rgba(0,0,0,1))]" />

      <section className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-amber-300/20 bg-black/55 px-8 py-14 text-center shadow-2xl shadow-amber-950/40 backdrop-blur md:px-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-amber-300">
          Decants & Frascos Originais
        </p>

        <h1 className="font-serif text-5xl font-semibold tracking-wide text-amber-100 md:text-7xl">
          La Luz Parfum
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-200 md:text-2xl">
          Catálogo de Perfumes Árabes - Decants & Frascos Originais
        </p>

        <button
          className="mt-10 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200/60"
          type="button"
        >
          Ver Decants Disponíveis
        </button>
      </section>
    </main>
  );
}
