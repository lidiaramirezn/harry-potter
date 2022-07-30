export const loadCharacters = async() => {
  const urlAPI = `https://hp-api.herokuapp.com/api/characters`;

  const response = await fetch(urlAPI);
  const results = await response.json();
  console.log(results)

  const data = results.map( result => ({
    name: result.name,
    image: result.image,
    species: result.species
  }));

  return data;
}