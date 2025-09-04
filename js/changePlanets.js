// Planet data
const planets = {
  Moon: {
    img: "images/moon.png",
    title: "Moon",
    desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days"
  },
  Mars: {
    img: "images/mars.png",
    title: "Mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    time: "9 months"
  },
  Europa: {
    img: "images/europa.png",
    title: "Europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter wonderland. Scientists think it might even have an ocean beneath its icy crust that could harbor life.",
    distance: "628 mil. km",
    time: "3 years"
  },
  Titan: {
    img: "images/titan.png",
    title: "Titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home. Filled with rivers and lakes of liquid methane, it’s a place like no other.",
    distance: "1.6 bil. km",
    time: "7 years"
  }
};

// Elements
const planetImg = document.querySelector("#leftSideImg img");
const planetTitle = document.getElementById("desTitle");
const planetDesc = document.querySelector("#rightSideDiv p.text-preset-7");
const planetDistance = document.querySelector("#distance .secP span");
const planetTime = document.querySelector("#traveltime .secP span");

// Function to change planet
function changePlanet(event, planetName) {
  event.preventDefault();
  const planet = planets[planetName];

  planetImg.src = planet.img;
  planetTitle.textContent = planet.title;
  planetDesc.textContent = planet.desc;
  planetDistance.textContent = planet.distance.split(" ")[0]; // numbers only
  document.querySelector("#distance .secP").innerHTML = `<span>${planet.distance.split(" ")[0]}</span> ${planet.distance.split(" ")[1]}`;
  document.querySelector("#traveltime .secP").innerHTML = `<span>${planet.time.split(" ")[0]}</span> ${planet.time.split(" ")[1]}`;
}
