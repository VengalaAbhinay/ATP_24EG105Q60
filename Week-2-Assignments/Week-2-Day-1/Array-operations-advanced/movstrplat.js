const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const scifi=movies.filter(item=>item.genre=="Sci-Fi")
console.log("movies with genre Sci-Fi:",scifi)
const inception=movies.map(item=>`${item.title} (${item.rating})`)
console.log(inception)
let avgmra=movies.reduce((acc,curr)=>acc+curr.rating,0)/movies.length
console.log("Average movie rating:",avgmra)
let joker=movies.find(item=>item.title=="Joker")
if(joker)
    console.log("Joker title:",joker)
let indexofavengers=movies.findIndex(item=>item.title=="Avengers")
console.log("Index of Avengers",indexofavengers)