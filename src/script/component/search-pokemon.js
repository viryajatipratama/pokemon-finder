class searchPokemon extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} event
   */
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchBar").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      #search-container{
      max-width: 800px;
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      border-radius: 5px;
      display: flex;
      position: sticky;
      top: 10px;
      background-color: white;
      }

      #search-container > input {
        width: 75%;
        padding: 20px;
        border: 0;
        border-bottom: 1px solid #0A285F;
        font-weight: bold;
      }

      #search-container > button > img{
        display:block;
        margin-top:13px;
        margin-left:20px;
        width:10%;
      }

      #search-container > a{
        curson:pointer;
      }

      #search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #0A285F;
      }

      </style>
    
      
      <div id="search-container">
        <input type="search" id="searchElement" placeholder="Search Pokemon">
        <button id="searchButtonElement" href=""><img src="/src/img/pokeball.png"></button>
      </div>
        
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-pokemon", searchPokemon);
