// GSAP library
const logo = document.querySelector(".main-logo");
logo.addEventListener("click", () => {
  TweenMax.staggerTo(".main-logo", 1, { rotation: 360, y: 10 }, 0.5);
});

// Function for adding events
function addEventToElement(element, event, scale) {
  element.addEventListener(event, () => {
    element.style.transform = `scale(${scale})`;
    element.style.transition = "all 0.3s ease 0s";
  });
};

function addEventToElements(elements, event, scale) {
  elements.forEach(element => addEventToElement(element, event, scale));
};

const mainheading = document.querySelector(".cta-layout h1");
addEventToElement(mainheading, "mouseover", "1.05");
addEventToElement(mainheading, "mouseout", "1");

const querySelectorAll1 = [
  ".app-store-block img",
  ".card-content h3",
  ".card-content h5",
  ".title-label",
  "section h2",
  ".card-icon img",
  ".technology-img",
  ".technology-list-item h3",
  ".review h4",
  ".review p"
];

querySelectorAll1.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  addEventToElements(elements, "mouseover", "1.05");
  addEventToElements(elements, "mouseout", "1");
});

const querySelectorAll2 = [
  ".how-it-works-list-item",
  ".technology-list-item",
  ".team-list-item",
];


querySelectorAll2.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  addEventToElements(elements, "dblclick", "1.05");
  addEventToElements(elements, "click", "0.99");
});
