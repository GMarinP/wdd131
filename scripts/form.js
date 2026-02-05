console.log(document.lastModified)
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const reviewsDisplay = document.querySelector(".review");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
	reviewsDisplay.textContent = numReviews;
} else {
	reviewsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);