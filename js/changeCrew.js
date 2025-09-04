// data
const crewData = {
  1: {
    img: "images/firstCrew.png",
    position: "commander",
    crewName: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  2: {
    img: "images/secCrew.png",
    position: "Mission Specialist ",
    crewName: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  3: {
    img: "images/thirdCrew.png",
    position: "PILOT",
    crewName: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  4: {
    img: "images/fourthCrew.png",
    position: "Flight Engineer",
    crewName: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
};

// Elements
const crewImg = document.getElementById("crewImg");
const crewPosition = document.getElementById("position");
const crewName = document.querySelector("#leftCrewDiv h2");
const description = document.querySelector("#leftCrewDiv p.description");


// Function
function changeCrew(event, index) {
  event.preventDefault();
  const crew = crewData[index];

  crewImg.src = crew.img;
  crewPosition.textContent = crew.position;
  crewName.textContent = crew.crewName;
  description.textContent = crew.desc;

}
