// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">JADE CÉLÉRIER</h1>
          <p className="text-purple-200 text-lg">Dodge Women Basket</p>
        </div>

        {/* Boutons */}
        <div className="w-full space-y-6">
          <a
            href="https://jade-calendrier.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-6 rounded-2xl shadow-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-white/20 text-center transform transition-transform hover:scale-105"
          >
         <h2 className="text-2xl font-bold text-purple-900 mb-2">CALENDRIER</h2>
            <p className="text-purple-800 font-medium">Matchs à venir</p>
          </a>
          
          <a
            href="https://jade-livestats.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block  w-full p-6 rounded-2xl shadow-2xl bg-gradient-to-r from-white to-purple-200 border-2 border-white/20 text-center transform transition-transform hover:scale-105"
          >
            
            <h2 className="text-2xl font-bold text-purple-900 mb-2">LIVE STATS</h2>
            <p className="text-purple-800 font-medium">Statistiques en direct</p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-center">
        <p className="text-purple-300 text-sm">
          Fait avec <span className="text-red-400">❤️</span> par fan_carlaleite
        </p>
      </footer>
    </div>
  )
}