const background = document.getElementById("background");
const homePage = document.getElementById("homePage");
const desPage = document.getElementById("desPage");
const crewPage = document.getElementById("crewPage");
const tecPage = document.getElementById("tecPage");

const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");

// const pagesData = {
//   1: {
//     img: "../images/desktopBckG.png"
//   },
//   2: {
//     img: "../images/destinationBckG.png"
//   },
//   3: {
//     img: "../images/crewBckG.png"
//   },
//   4: {
//     img: "../images/technologyBckG.jpg"
//   },
// };

const pages = [homePage, desPage, crewPage, tecPage];
const lis = [li1, li2, li3, li4];
 
let index = 0;

// function setActive(index, bgImage) {
//     pages.forEach((page) => (page.style.display = "none"));
//     lis.forEach((li) => li.classList.remove("active"));

//     pages[index].style.display = "block";
//     lis[index].classList.add("active");

//     background.style.backgroundImage = `url('${bgImage}')`;
//     background.style.backgroundSize = "cover";
//     background.style.backgroundRepeat = "no-repeat";
//     background.style.backgroundPosition = "center";
//     background.style.transition = "all 500ms ease";
// }

function setActive(index, bgImage) {
  pages.forEach((page) => (page.style.display = "none"));
  lis.forEach((li) => li.classList.remove("active"));

  pages[index].style.display = "block";
  lis[index].classList.add("active");

  background.style.backgroundImage = `url('${bgImage}')`;
  background.style.backgroundSize = "cover";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundPosition = "center";
  background.style.transition = "all 500ms ease";
}

function toHomePage(event) {
    event.preventDefault();
    setActive(0, "../images/desktopBckG.png");
}

function toDesPage(event) {
    event.preventDefault();
    setActive(1, "../images/destinationBckG.png");
}

function toCrewPage(event) {
    event.preventDefault();
    setActive(2, "../images/crewBckG.png");
}

function toTecPage(event) {
    event.preventDefault();
    setActive(3, "../images/technologyBckG.jpg");
}
