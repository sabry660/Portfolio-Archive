'use client'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0a0a0a] border-t border-zinc-800/60 px-8 md:px-16 lg:px-24 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-zinc-600 text-xs font-mono">
          Mohamed Sabry
        </span>
        <span className="text-zinc-700 text-xs font-mono">
          Professional portfolio
        </span>
      </div>
    </footer>
  )
}
