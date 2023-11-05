// // JavaScript Document
// console.log("Howdy!");

// //zoom functie op landkaart//

// const map = document.querySelector('.map');
// const locations = document.querySelectorAll('.location');

// locations.forEach(location => {
//   location.addEventListener('click', () => {
//     // Zoom in naar de geselecteerde locatie
//     map.classList.add('zoomed');
//     // Hier kun je logica toevoegen om de kaart te centreren op de geselecteerde locatie
//   });
// });

// map.addEventListener('mouseleave', () => {
//   // Reset zoomniveau wanneer de muis de kaart verlaat
//   map.classList.remove('zoomed');
// });

//detailinfo van elke locatie//

// const markers = document.querySelectorAll('.map-container span');
// const overlay = document.querySelector('.overlay');
// const overlayContent = document.querySelector('.overlay .overlay-content');


// function appear() {
//     document.querySelector(".close-button").style.display = "block"; 
//     document.querySelector(".overlay").style.display = "block"; 
// }


// function disappear() {
//     document.querySelector(".close-button").style.display = "none"; 
//     document.querySelector(".overlay").style.display = "none";
// }




// const markers = document.querySelectorAll('.map-container span');
// const overlay = document.querySelector('.overlay');
// const overlayContent = document.querySelector('.overlay .overlay-content');
// const closeButton = document.querySelector('.close-button');

// // Define an array of objects containing information for each marker
// const markerInfo = [
//   {
//     imageSrc: 'images/marker1.png',
//     title: 'Marker 1',
//     description: 'Information about Marker 1.'
//   },
//   {
//     imageSrc: 'images/marker2.png',
//     title: 'Marker 2',
//     description: 'Information about Marker 2.'
//   },
//   {
//     imageSrc: 'images/marker3.png',
//     title: 'Marker 3',
//     description: 'Information about Marker 3.'
//   },
//   {
//     imageSrc: 'images/marker4.png',
//     title: 'Marker 4',
//     description: 'Information about Marker 4.'
//   }
// ];

// function appear(markerIndex) {
//     document.querySelector(".close-button").style.display = "block";
//     document.querySelector(".overlay").style.display = "block";

//     // Get the information for the specific marker
//     const currentMarker = markerInfo[markerIndex];
    
//     // Set the content of the overlay based on the marker information
//     overlayContent.innerHTML = `
//       <h3>${currentMarker.title}</h3>
//       <img src="${currentMarker.imageSrc}" alt="Marker Image">
//       <p>${currentMarker.description}</p>
//     `;
// }

// function disappear() {
//     document.querySelector(".close-button").style.display = "none";
//     document.querySelector(".overlay").style.display = "none";
// }

// // Add click event listeners to each marker
// markers.forEach((marker, index) => {
//     marker.addEventListener('click', () => appear(index));
// });

// // Add click event listener to the close button
// closeButton.addEventListener('click', disappear);

const markers = document.querySelectorAll('.marker');
const overlay = document.querySelector('.overlay');
const markerTitleElement = document.querySelector('.marker-title');
const markerImage = document.querySelector('.marker-image');
const markerText = document.querySelector('.marker-text');
const closeButton = document.querySelector('.close-button');

markers.forEach((marker, index) => {
  marker.addEventListener('click', () => appear(index));
});

closeButton.addEventListener('click', disappear);

function appear(markerIndex) {
  const selectedOverlayContent = document.getElementById(`marker-${markerIndex}`);
  selectedOverlayContent.style.display = 'block';
  overlay.style.display = 'block';
}

function disappear() {
  const overlayContents = document.querySelectorAll('.overlay-content');
  overlayContents.forEach(content => {
    content.style.display = 'none';
  });
  overlay.style.display = 'none';
}

disappear();



//sounds//

const buttonBommel = document.getElementById('bommelButton');
const audioBommel = document.getElementById('bommelAudio');
const buttonTomPoes = document.getElementById('tom-poesButton');
const audioTomPoes = document.getElementById('tom-poesAudio');

buttonBommel.addEventListener('click', function() {
  audioBommel.play(); // Play the sound when the button is clicked
});

buttonTomPoes.addEventListener('click', function() {
  audioTomPoes.play(); // Play the sound when the button is clicked
});



