// Below two functions are the same but below one uses async/await but above one doesn't.

// export async function getAllPokemon(url) {
//   return new Promise((resolve, reject) => {
//       return fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           resolve(data);
//         });
//   });
// }

export async function getAllPokemon(url) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    const data = await res.json();
    resolve(data);
  });
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}
