document.addEventListener("scroll", (event) => {
  const lastKnownScrollPosition = window.scrollY;
  console.log(lastKnownScrollPosition);
});

const theBox = document.getElementById("the-box");
const magicBox = document.getElementById("magic-box");
const nav = document.querySelector("nav");
const topBar = document.querySelector("top-bar");
const namesList = document.querySelector(".project-names-list");
const imgsList = document.querySelector(".project-images-list");

magicBox.addEventListener("mouseover", function () {
  console.log("mouseover");
  theBox.classList.add("expanded");
  theBox.classList.remove("retracted");
  nav.style.transform = "rotate(90deg) translateX(100%)";
  //   nav.style.marginTop = "-20px";
  //   nav.style.marginTop = "-20px";
  //   namesList.style.top = "25vh";
  namesList.style.transform = "translateY(22vh)";
  imgsList.style.transform = "translateY(25vh)";
  //   namesList.style.marginTop = "0px";
});

magicBox.addEventListener("mouseleave", function () {
  console.log("mouseleave");
  theBox.classList.add("retracted");
  theBox.classList.remove("expanded");
  nav.style.transform = "rotate(90deg) translateX(50%)";
  //   nav.style.marginTop = "20px";
  //   namesList.style.top = "24px";
  namesList.style.transform = "translateY(0)";
  imgsList.style.transform = "translateY(0)";
});

const projectLinks = document.querySelectorAll(".project-names-list a");

projectLinks.forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    event.preventDefault();
    const project = link.getAttribute("data-project");
    const projectImage = document.getElementById(project);
    const projectImageTop = projectImage.offsetTop;
    window.scrollTo({
      //   top: projectImageTop - 24,
      top: projectImageTop - 24,
      behavior: "smooth",
    });
  });
});

// highlight project name on viewport

window.addEventListener("scroll", highlightProjectName);

function highlightProjectName() {
  const projectItems = document.querySelectorAll(".project-images-list");
  projectItems.forEach((item) => {
    const projectImg = item.querySelector(".project-image");
    const projectName = projectImg.dataset.name;
    console.log(projectImg.classList);
    projectImg.classList.add("highlighted");
    console.log(projectImg);
    const bounding = item.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const project = document.querySelector('[data-project="project1"]');
    console.log({ project });
    project.classList.add("highlighted");

    if (
      bounding.top + windowHeight * 0.5 >= 0 &&
      bounding.bottom - windowHeight * 0.5 <= windowHeight &&
      getComputedStyle(projectImg).getPropertyValue("display") !== "none"
    ) {
    } else {
      projectImg.classList.remove("highlighted");
    }
  });
}
