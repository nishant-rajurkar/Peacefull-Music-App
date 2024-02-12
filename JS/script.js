// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Aayat1.jpg";
  song.src = "./assets/Songs/Aayat.mp3";
  songName.innerText = "Aayat";
  songBy.innerText = "Arijit";
  title.innerText = "Aayat";
  download.href = "./assets/Songs/Aayat.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Aayat' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight. ";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/chhod diya1.jpg";
  song.src = "./assets/Songs/Chhod Diya.mp3";
  songName.innerText = "Chhod Diya";
  songBy.innerText = "Arijit";
  title.innerText = "Chhod Diya";
  download.href = "./assets/Songs/Chhod Diya.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Chhod Diya' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Gerua1.jpg";
  song.src = "./assets/Songs/Gerua.mp3";
  songName.innerText = "Gerua";
  songBy.innerText = "Arijit";
  title.innerText = "Gerua";
  download.href = "./assets/Songs/Gerua.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Gerua' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Hamari Adhuri Kahani1.jpg";
  song.src = "./assets/Songs/Hamari Adhuri Kahani.mp3";
  songName.innerText = "Hamari Adhuri Kahani";
  songBy.innerText = "Arijit";
  title.innerText = "Hamari Adhuri Kahani";
  download.href = "./assets/Songs/Hamari Adhuri Kahani.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Hamari Adhuri Kahani' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Heeriye1.jpg";
  song.src = "./assets/Songs/Heeriye.mp3";
  songName.innerText = "Heeriye";
  songBy.innerText = "Arijit";
  title.innerText = "Heeriye";
  download.href = "./assets/Songs/Heeriye.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Heeriye' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Hum Mar Jayenge1.jpg";
  song.src = "./assets/Songs/Hum Mar Jayenge.mp3";
  songName.innerText = "Hum Mar Jayenge";
  songBy.innerText = "Arijit";
  title.innerText = "Hum Mar Jayenge";
  download.href = "./assets/Songs/Hum Mar Jayenge.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Hum Mar Jayenge' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight"
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Humdard1.jpg";
  song.src = "./assets/Songs/Humdard.mp3";
  songName.innerText = "Humdard";
  songBy.innerText = "Arijit";
  title.innerText = "Humdard";
  download.href = "./assets/Songs/Humdard.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Humdard' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Lutt Putt Gaya1.avif";
  song.src = "./assets/Songs/Lutt Putt Gaya.mp3";
  songName.innerText = "Lutt Putt Gaya";
  songBy.innerText = "Arijit";
  title.innerText = "Lutt Putt Gaya";
  download.href = "./assets/Songs/Lutt Putt Gaya.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Lutt Putt Gaya' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/O Bedardeya1.jpg";
  song.src = "./assets/Songs/O Bedardeya.mp3";
  songName.innerText = "O Bedardeya";
  songBy.innerText = "Arijit";
  title.innerText = "O Bedardeya";
  download.href = "./assets/Songs/O Bedardeya.mp3";
  aboutSong.innerText="Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'O Bedardiya' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Sanam Re1.jpg";
  song.src = "./assets/Songs/Sanam Re.mp3";
  songName.innerText = "Sanam Re";
  songBy.innerText = "Arijit";
  title.innerText = "Sanam Re";
  download.href = "./assets/Songs/Sanam Re.mp3";
  aboutSong.innerText="Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Sanam Re' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Soch Na Sake1.jpg";
  song.src = "./assets/Songs/Soch Na Sake.mp3";
  songName.innerText = "Soch Na Sake";
  songBy.innerText = "Arijit";
  title.innerText = "Soch Na Sake";
  download.href = "./assets/Songs/Soch Na Sake.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Soch Na Sake' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Tum Hi Ho1.jpeg";
  song.src = "./assets/Songs/Tum Hi Ho.mp3";
  songName.innerText = "Tum Hi Ho";
  songBy.innerText = "Arijit";
  title.innerText = "Tum Hi Ho";
  download.href = "./assets/Songs/Tum Hi Ho.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'Tum Hi Ho' by singer,Arijit Singh who is ready to twirl up emotions and make you feel the jitters of love at first sight";
});