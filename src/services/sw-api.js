const baseUrl = "https://swapi.dev"

export async function getStarships(){
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}