import '../component/list-pokemon.js';
import '../component/search-pokemon.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector('search-pokemon');
    const pokemonListElement = document.querySelector('list-pokemon');

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchPokemon(searchElement.value);
            renderResult(result);
        }catch(message){
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        pokemonListElement.pokemons = results;
    };

    const fallbackResult = message => {
        pokemonListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;