import Image from 'next/image'

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-400',
  rock: 'bg-yellow-700',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
}

const statColors = {
  hp: 'bg-red-500',
  attack: 'bg-orange-500',
  defense: 'bg-yellow-500',
  'special-attack': 'bg-blue-400',
  'special-defense': 'bg-green-500',
  speed: 'bg-pink-500',
}

export default function PokemonDetails({ pokemon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 p-6 bg-gray-100 flex flex-col items-center">
          <div className="relative w-64 h-64">
          <img
  src={pokemon.image}
  alt={pokemon.name}
  className="object-contain w-64 h-64"
/>
          </div>
          <h1 className="text-3xl font-bold capitalize mt-4 text-gray-800">
            {pokemon.name}
          </h1>
          <span className="text-gray-500 text-xl">
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`type-badge ${typeColors[type] || 'bg-gray-500'} text-sm`}
              >
                {type}
              </span>
            ))}
          </div>
          
          <div className="mt-6 w-full">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Abilities</h2>
            <div className="grid grid-cols-2 gap-2">
              {pokemon.abilities.map((ability) => (
                <span key={ability} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 capitalize">
                  {ability.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Stats</h2>
            <div className="space-y-3">
              {pokemon.stats.map((stat) => (
                <div key={stat.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize font-medium text-gray-700">
                      {stat.name.replace('-', ' ')}
                    </span>
                    <span className="text-gray-600">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${statColors[stat.name] || 'bg-gray-500'}`}
                      style={{ width: `${Math.min(100, (stat.value / 255) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Moves</h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.moves.slice(0, 30).map((move) => (
                <span key={move} className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 capitalize">
                  {move.replace('-', ' ')}
                </span>
              ))}
              {pokemon.moves.length > 30 && (
                <span className="bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                  +{pokemon.moves.length - 30} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}