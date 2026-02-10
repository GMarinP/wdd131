console.log(document.lastModified)
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();


const reviewsDisplay = document.querySelector(".review");

let numReviews = Number(window.localStorage.getItem("numReviews-ls"));

if (numReviews !== 0) {
	reviewsDisplay.textContent = numReviews;
} else {
	reviewsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);