
let boxAnime = document.getElementById("back");
boxAnime.addEventListener("click", anime1);

function anime1() {
  const newContainer = document.getElementById("NewContainer");
  const oldContainer = document.getElementById("container");
  const resume = document.getElementById("resume");
  const body1 = document.getElementsByTagName("BODY")[0];
  const newaboutMe = document.getElementById("detailedBox");
  const newSkills = document.getElementById("skillsPara");
  // Styles
  body1.style.backgroundColor = "#66BB6A";
  newContainer.style.display = "block";
  oldContainer.style.display = "none";
  newContainer.style.backgroundColor = "#FAFAFA";
  newaboutMe.style.display = "none";
  newSkills.style.display = "none";

  // ABout me
  let about1 = document.getElementById("aboutLi");
  about1.addEventListener("click", aboutMe);

  function aboutMe() {
    const newaboutMe = document.getElementById("detailedBox");
    newaboutMe.style.display = "block";
  }
  // Skills
  let skills1 = document.getElementById("skillsLi");
  skills1.addEventListener("click", aboutSkills);
  function aboutSkills() {
    const newSkills = document.getElementById("skillsPara");
    newSkills.style.display = "block";
    newaboutMe.style.display = "none";
  }
}
