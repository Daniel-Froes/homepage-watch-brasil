export default function ExclusiveContentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Exclusive Content</h1>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 p-8 rounded-xl border border-red-600/30">
            <h2 className="text-2xl font-bold text-white mb-4">Bastidores</h2>
            <p className="text-gray-300 mb-4">
              Acesso exclusivo aos bastidores dos shows, entrevistas com artistas 
              e conteúdos que você não encontra em nenhum outro lugar.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Ver Conteúdo
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Documentários</h2>
            <p className="text-gray-300 mb-4">
              Documentários exclusivos sobre a história do festival e dos artistas participantes.
            </p>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">
              Assistir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}