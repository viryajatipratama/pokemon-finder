import "./item-pokemon.js";

class ListPokemon extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    /**
     * @param {any} pokemons
     */
    set pokemons(pokemons){
        this._pokemons = pokemons;
        this.render();
    }

    renderError(message){
        this.shadowDOM.innerHTML=`
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }      
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render(){
        this.shadowDOM.innerHTML = ``;
        this._pokemons.forEach((pokemon) => {
            const pokemonItemElement = document.createElement("item-pokemon");
            pokemonItemElement.pokemon = pokemon;
            this.shadowDOM.appendChild(pokemonItemElement);
        });
    }
}

customElements.define('list-pokemon', ListPokemon);