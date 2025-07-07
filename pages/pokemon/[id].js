import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonDetails from '../../components/PokemonDetails'
import Link from 'next/link'

export default function PokemonDetail() {
  const router = useRouter()
  const { id } = router.query
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        const pokemonData = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
          types: response.data.types.map(t => t.type.name),
          abilities: response.data.abilities.map(a => a.ability.name),
          stats: response.data.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
          moves: response.data.moves.map(m => m.move.name),
        }
        
        setPokemon(pokemonData)
        setError(null)
      } catch (err) {
        console.error('Error fetching Pokemon details:', err)
        setError('Failed to fetch Pokemon details. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <Link href="/">
      <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800 transition duration-200">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
  Back to Pokemon List
</Link>
      </Link>
      
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  )
}