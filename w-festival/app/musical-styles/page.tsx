export default function MusicalStylesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Musical Styles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Rock</h3>
            <p className="text-gray-400">
              O melhor do rock nacional e internacional
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Pop</h3>
            <p className="text-gray-400">
              Sucessos que marcaram gerações
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">MPB</h3>
            <p className="text-gray-400">
              A riqueza da música popular brasileira
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}