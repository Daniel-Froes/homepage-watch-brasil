export default function MusicalStylesPage() {
  return (
    <div className="min-h-screen py-watch-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-watch-4xl font-watch-bold text-watch-text-white mb-watch-8">Musical Styles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-watch-6">
          <div className="bg-watch-gray-800 p-watch-6 rounded-watch-lg">
            <h3 className="text-watch-xl font-watch-semibold text-watch-text-white mb-watch-3">Rock</h3>
            <p className="text-watch-gray-400">
              O melhor do rock nacional e internacional
            </p>
          </div>
          <div className="bg-watch-gray-800 p-watch-6 rounded-watch-lg">
            <h3 className="text-watch-xl font-watch-semibold text-watch-text-white mb-watch-3">Pop</h3>
            <p className="text-watch-gray-400">
              Sucessos que marcaram gerações
            </p>
          </div>
          <div className="bg-watch-gray-800 p-watch-6 rounded-watch-lg">
            <h3 className="text-watch-xl font-watch-semibold text-watch-text-white mb-watch-3">MPB</h3>
            <p className="text-watch-gray-400">
              A riqueza da música popular brasileira
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}