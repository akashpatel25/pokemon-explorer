# Pokemon Explorer

A Next.js application for exploring Pokemon data from PokeAPI.

## Features

- Browse a list of Pokemon
- Search for Pokemon by name
- View detailed information about each Pokemon
- Responsive design

## Technologies Used

- Next.js
- React
- Tailwind CSS
- PokeAPI

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install


Pokemon Explorer - How I Built It

1. Layout Component (components/Layout.js)
This is like the frame that holds everything together. I made sure every page has:

A consistent red header with the Pokeball logo and app title

A simple footer giving credit to the PokeAPI

Proper HTML structure for better SEO
I used Next.js's Head component to manage page titles and metadata.

2. Pokemon Cards (components/PokemonCard.js)
Each Pokemon gets its own card showing:

The Pokemon's name and ID number (formatted as #001, #025 etc.)

An image of the Pokemon

Color-coded type tags (water=blue, fire=red etc.)
The cards are clickable and take you to that Pokemon's detailed page. I made sure the images load efficiently and added a nice hover effect.

3. Pokemon Details Page (components/PokemonDetails.js)
When you click a Pokemon, you see:

A large image on the left

All the stats with visual bars showing their strength

The Pokemon's abilities

A list of moves (showing first 30 with a "+ more" indicator)
I organized this in a clean two-column layout that works on mobile too.

4. Search Functionality (components/SearchBar.js)
I built a search bar that:

Lets you type a Pokemon name

Updates the URL when you search

Shows results instantly
It handles basic errors like empty searches and keeps the search term in the URL.

5. Homepage (pages/index.js)
The main page does several things:

Loads the first 151 Pokemon when you first visit

Shows a loading spinner while waiting

Displays errors if something goes wrong

Changes to search results when you use the search bar
I added an 8-second timeout so it won't hang forever if the API is slow.

6. Individual Pokemon Pages (pages/pokemon/[id].js)
Each Pokemon has its own page that:

Gets its data based on the ID in the URL

Shows a loading spinner while loading

Displays errors if the Pokemon can't be found

Has a back button to return to the main list

7. Configuration (next.config.js)
I set up the project to:

Allow images from the Pokemon API domain

Keep React's strict mode for better code quality

Handle image optimization properly