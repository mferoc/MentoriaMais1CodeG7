const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchAllPokemons = async () => {
  const allPokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {return response.json()})
  console.log("All response -> ")
  console.log(allPokemonsResponse)
  console.log(allPokemonsResponse.results[0].name)
  console.log(allPokemonsResponse.results[0].name == "nome")
}

fetchAllPokemons()

//   const pokemonName = document.querySelector('.pokemon__name')
//   const pokemonNumber = document.querySelector('.pokemon__number');
//   const pokemonImage = document.querySelector('.pokemon__image');

//   const form = document.querySelector('.form');
//   const input = document.querySelector('.input__search');
//   const buttonPrev = document.querySelector('.btn-prev');
//   const buttonNext = document.querySelector('.btn-next');

//   let searchPokemon = 1;

//   const fetchPokemon = async (pokemon) => {
//     const APIResponse = await fetch("GET https://pokeapi.co/api/v2/pokemonpokemon${pokemon}");

//     if (APIResponse.status === 200) {
//       const data = await APIResponse.json();
//       return data;
//     }
//   }

//   const renderPokemon = async (pokemon) => {

//     pokemonName.innerHTML = 'Loading...';
//     pokemonNumber.innerHTML = '';

//     const data = await fetchPokemon(pokemon);

//     if (data) {
//       pokemonImage.style.display = 'block';
//       pokemonName.innerHTML = data.name;
//       pokemonNumber.innerHTML = data.id;
//       pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
//       input.value = '';
//       searchPokemon = data.id;
//     } else {
//       pokemonImage.style.display = 'none';
//       pokemonName.innerHTML = 'Not found :c';
//       pokemonNumber.innerHTML = '';
//     }
//   }

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     renderPokemon(input.value.toLowerCase());
//   });

//   buttonPrev.addEventListener('click', () => {
//     if (searchPokemon > 1) {
//       searchPokemon -= 1;
//       renderPokemon(searchPokemon);
//     }
//   });

//   buttonNext.addEventListener('click', () => {
//     searchPokemon += 1;
//     renderPokemon(searchPokemon);
//   });

//   renderPokemon(searchPokemon);

//   if (APIResponse.status === 200) {
//     const data = await APIResponse.json();
//     return data;
//   }
// }

// const renderPokemon = async (pokemon) => {

//   pokemonName.innerHTML = 'Loading...';
//   pokemonNumber.innerHTML = '';

//   const data = await fetchPokemon(pokemon);

//   if (data) {
//     pokemonImage.style.display = 'block';
//     pokemonName.innerHTML = data.name;
//     pokemonNumber.innerHTML = data.id;
//     pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
//     input.value = '';
//     searchPokemon = data.id;
//   } else {
//     pokemonImage.style.display = 'none';
//     pokemonName.innerHTML = 'Not found :c';
//     pokemonNumber.innerHTML = '';
//   }
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   renderPokemon(input.value.toLowerCase());
// });

// buttonPrev.addEventListener('click', () => {
//   if (searchPokemon > 1) {
//     searchPokemon -= 1;
//     renderPokemon(searchPokemon);
//   }
// });

// buttonNext.addEventListener('click', () => {
//   searchPokemon += 1;
//   renderPokemon(searchPokemon);
// });

// renderPokemon(searchPokemon);
