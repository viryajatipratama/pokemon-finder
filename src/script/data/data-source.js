class DataSource {
  static async searchPokemon(keyword) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`);
    const responseJson = await response.json();
    if (responseJson.name) {
      return Promise.resolve(responseJson.name);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
}

export default DataSource;
