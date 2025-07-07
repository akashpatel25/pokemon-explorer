import Link from 'next/link'
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

export default function PokemonCard({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="block">
       <div className="pokemon-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold capitalize text-gray-800">
              {pokemon.name}
            </h3>
            <span className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</span>
          </div>
        </div>
        <div className="relative h-40 bg-gray-100 flex items-center justify-center">
        <img
  src={pokemon.image}
  alt={pokemon.name}
  className="object-contain w-full h-full"
  loading="lazy"
/>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`type-badge ${typeColors[type] || 'bg-gray-500'}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}