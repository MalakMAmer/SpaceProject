
// data
const shipsData = {
  1: {
    img: "images/TecA.jpg",
    shipName: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  2: {
    img: "images/TecB.jpg",
    shipName: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  3: {
    img: "images/TecC.jpg",
    shipName: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  },
};

// Elements
const tecImg = document.querySelector("#shipImgDiv img");
const tecName = document.getElementById("shipType");
const shipdescription = document.getElementById("description");


// Function
function changeShip(event, index) {
  event.preventDefault();
  const ship = shipsData[index];

  tecImg.src = ship.img;
  tecName.textContent = ship.shipName;
  shipdescription.textContent = ship.desc;

}
