import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Pokemon Explorer</title>
        <meta name="description" content="Explore the world of Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex items-center">
        <Image 
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
  alt="Pokeball" 
  width={40} 
  height={40} 
  className="mr-3"
/>
          <h1 className="text-3xl font-bold">Pokemon Explorer</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Pokemon Explorer - Data from PokeAPI</p>
        </div>
      </footer> */}
    </div>
  )
}