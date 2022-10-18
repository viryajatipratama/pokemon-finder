// eslint-disable-next-line no-unused-vars
class ItemPokemon extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    /**
   * @param {any} pokemon
   */
    set pokemon(pokemon){
        this._pokemon = pokemon;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      pokemon-name {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      
      .pokemon-detail {
        padding: 24px;
      }
      
      .pokemon-detail > h2 {
        font-weight: lighter;
      }
      
      .pokemon-detail > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
        </style>

        <img class="pokemon-name" src="${this._pokemon.sprites.other.home.front_default}">
        <div class="pokemon-detail">
          <h2>${this._pokemon.forms.name}</h2>
          <p>${this._pokemon.types[0].type.name}</p>
          <p>${this._pokemon.types[1].type.name}</p>
        </div>
        `
    }
}