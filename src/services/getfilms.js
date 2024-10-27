const KEY = 55232223;

export async function getfilms(film) {
  console.log(film);

  const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&S=${film}`);
  const data = await res.json();
  console.log(data);

  return data;
}
