export default function ExclusiveContentPage() {
  return (
    <div className="min-h-screen py-watch-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-watch-4xl font-watch-bold text-watch-text-white mb-watch-8">Exclusive Content</h1>
        <div className="space-y-watch-8">
          <div className="bg-gradient-to-r from-watch-secondary/20 to-watch-secondary-dark/20 p-watch-8 rounded-watch-xl border border-watch-secondary/30">
            <h2 className="text-watch-2xl font-watch-bold text-watch-text-white mb-watch-4">Bastidores</h2>
            <p className="text-watch-text-secondary mb-watch-4">
              Acesso exclusivo aos bastidores dos shows, entrevistas com artistas 
              e conteúdos que você não encontra em nenhum outro lugar.
            </p>
            <button className="bg-watch-secondary text-watch-text-white px-watch-6 py-watch-2 rounded-watch-md hover:bg-watch-secondary-dark transition-colors">
              Ver Conteúdo
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-watch-gray-800/50 to-watch-gray-900/50 p-watch-8 rounded-watch-xl border border-watch-gray-700">
            <h2 className="text-watch-2xl font-watch-bold text-watch-text-white mb-watch-4">Documentários</h2>
            <p className="text-watch-text-secondary mb-watch-4">
              Documentários exclusivos sobre a história do festival e dos artistas participantes.
            </p>
            <button className="bg-watch-gray-700 text-watch-text-white px-watch-6 py-watch-2 rounded-watch-md hover:bg-watch-gray-600 transition-colors">
              Assistir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}