console.log(document.lastModified)
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/215a9dc2298511eeacb9eeeeac1e26338fda42c9/full/1280%2C/0/default"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 30",
    area: 72000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/1280%2C/0/default"
  }
];

function createTempleCard(filteredTemples) {
	filteredTemples.forEach(temple => {
		let card = document.createElement('section');
		let name = document.createElement('h2');
		let location = document.createElement('p');
		let dedicated = document.createElement('p');
		let area = document.createElement('p');
		let image = document.createElement('img');

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

		document.querySelector("#templeCards").appendChild(card);
	
	});
}

function clearTempleCards() {
  document.querySelector("#templeCards").innerHTML = "";
}

createTempleCard(temples)

const allTemplesLink = document.querySelector('#home');
allTemplesLink.addEventListener("click", () => {
	clearTempleCards();
	createTempleCard(temples);
});

const oldTemplesLink = document.querySelector('#old');
oldTemplesLink.addEventListener("click", () => {
	clearTempleCards();
	const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated) 
	return year < 1900;
	});
	createTempleCard(oldTemples);
});

const newTemplesLink  = document.querySelector('#new');
newTemplesLink.addEventListener("click", () => {
	clearTempleCards();
	const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated) 
	return year > 2000;
	});
	createTempleCard(newTemples);
});

const largeTemplesLink  = document.querySelector('#large');
largeTemplesLink.addEventListener("click", () => {
	clearTempleCards();
	const largeTemples = temples.filter(temple => {
    const area = parseInt(temple.area) 
	return area > 90000;
	});
	createTempleCard(largeTemples);
});

const smallTemplesLink  = document.querySelector('#small');
smallTemplesLink.addEventListener("click", () => {
	clearTempleCards();
	const smallTemples = temples.filter(temple => {
    const area = parseInt(temple.area) 
	return area < 10000;
	});
	createTempleCard(smallTemples);
});
