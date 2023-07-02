// Quero selecionar por classe? Por Tag? por ID?

//Tags

let liPorTag = document.getElementsByTagName("li");
// let liPorQuery = document.querySelectorAll("li");


// console.log(liPorTag);
// estrutura de repetição FOR e for OF
// for (let i = 0; i < liPorTag.length; i++)

// for(let li of liPorTag) {
//   console.log(li)
// }

Array.from(liPorTag).forEach(a => console.log(a))


// console.log(liPorQuery);
// liPorQuery.forEach(a => console.log(a));