import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard'

export default function Home() {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()
  const { search } = router.query

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 8000) // 8 second timeout
        
        if (search) {
          url = `https://pokeapi.co/api/v2/pokemon/${search}`
          try {
            const response = await axios.get(url)
            const pokemon = {
              id: response.data.id,
              name: response.data.name,
              image: response.data.sprites.other['official-artwork'].front_default,
              types: response.data.types.map(t => t.type.name),
            }
            setPokemonList([pokemon])
            setError(null)
          } catch (err) {
            if (err.response && err.response.status === 404) {
              setPokemonList([])
              setError('No Pokemon found with that name.')
            } else {
              throw err
            }
          }
        } else {
          const response = await axios.get(url, {
            signal: controller.signal
          })
          const results = response.data.results
          
          const pokemonData = await Promise.all(
            results.map(async (pokemon) => {
              const res = await axios.get(pokemon.url)
              return {
                id: res.data.id,
                name: res.data.name,
                image: res.data.sprites.other['official-artwork'].front_default,
                types: res.data.types.map(t => t.type.name),
              }
            })
          )
          
          setPokemonList(pokemonData)
          setError(null)
        }
      } catch (err) {
        console.error('Error fetching Pokemon:', err)
        setError('Failed to fetch Pokemon data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [search])

  return (
    <div>
      <SearchBar />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : pokemonList.length === 0 ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">No Pokemon found.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  )
}