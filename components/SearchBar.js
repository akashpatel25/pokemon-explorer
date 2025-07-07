import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/?search=${searchTerm.toLowerCase()}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokemon by name..."
          className="flex-grow px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-red-500"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-r-lg transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  )
}