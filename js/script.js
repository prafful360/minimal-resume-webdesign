// let about = document.getElementById("about");
// about.addEventListener("click", about1);

// function about1() {
//   alert("you don't wanna know");
// }

// const dialogue = document.getElementById("dialogue");

// let details = document.getElementById("profiler");
// details.addEventListener("click", e => {
//   console.log(dialogue);
//   dialogue.classList.add("show-dialogue");
//   dialogue.classList.remove("dialogue");
// });
let boxAnime = document.getElementById("back");
boxAnime.addEventListener("click", anime1);

function anime1() {
  const newContainer = document.getElementById("NewContainer");
  const oldContainer = document.getElementById("container");
  const resume = document.getElementById("resume");
  const body1 = document.getElementsByTagName("BODY")[0];
  const newaboutMe = document.getElementById("detailedBox");
  // Styles
  body1.style.backgroundColor = "#66BB6A";
  newContainer.style.display = "block";
  oldContainer.style.display = "none";
  newContainer.style.backgroundColor = "#FAFAFA";
  newaboutMe.style.display = "none";

  // ABout work
  let about1 = document.getElementById("aboutLi");
  about1.addEventListener("click", aboutMe);

  function aboutMe() {
    const newaboutMe = document.getElementById("detailedBox");
    newaboutMe.style.display = "block";
  }
}
