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

let imageInView = undefined;

highlightProjectName();

function getNumberOfPixelsInView(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const pixelsInView =
    Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)) *
    Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));
  return pixelsInView;
}

function highlightProjectName() {
  const images = document.querySelectorAll(".project-image");
  let mostInView = images[0];
  let mostInViewPixels = 0;
  for (let i = 0; i < images.length; i++) {
    const pixelsInView = getNumberOfPixelsInView(images[i]);
    if (pixelsInView > mostInViewPixels) {
      mostInView = images[i];
      mostInViewPixels = pixelsInView;
    }
  }

  if (imageInView === undefined) {
    const newNameNode = document.querySelector(
      `[data-project="${mostInView.id}"]`
    );
    newNameNode.classList.add("highlighted");
    imageInView = mostInView.id;
  } else if (mostInView.id !== imageInView) {
    const previousNameNode = document.querySelector(
      `[data-project="${imageInView}"]`
    );
    const newNameNode = document.querySelector(
      `[data-project="${mostInView.id}"]`
    );
    previousNameNode.classList.remove("highlighted");
    newNameNode.classList.add("highlighted");

    imageInView = mostInView.id;
  }
}

window.addEventListener("scroll", highlightProjectName);
