
export async function searchMovie(id: string) {
  const resposta = await fetch("http://10.92.201.130:3000/filmes/" + id);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  const json = await resposta.json();
  return json;
}
