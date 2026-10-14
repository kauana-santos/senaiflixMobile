
export async function searchMovies() {
  const resposta = await fetch("http://10.92.201.130:3000/filmes");

  if (!resposta.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  const json = await resposta.json();
  return json;
}
