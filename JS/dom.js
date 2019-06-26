// GSAP library
const logo = document.querySelector(".main-logo");
logo.addEventListener("click", () => {
    TweenMax.staggerTo(".main-logo", 1, { rotation: 360, y: 10 }, 0.5);
});

// mouseover
const appButtons = document.querySelectorAll(".app-store-block img");
appButtons.forEach(appButton => {
  appButton.addEventListener("mouseover", () => {
    appButton.style.transform = "scale(1.05)";
    appButton.style.transition = "all 0.3s ease 0s";
  });
});

appButtons.forEach(appButton => {
  appButton.addEventListener("mouseout", () => {
    appButton.style.transform = "scale(1)";
    appButton.style.transition = "all 0.3s ease 0s";
  });
});

// mouseover
const ctaimages = document.querySelectorAll(".card-content h3");
ctaimages.forEach(ctaimage => {
    ctaimage.addEventListener("mouseover", () => {
        ctaimage.style.transform = "scale(1.1)";
        ctaimage.style.transition = "all 0.3s ease 0s";
    })
});

ctaimages.forEach(ctaimage => {
  ctaimage.addEventListener("mouseout", () => {
    ctaimage.style.transform = "scale(1)";
    ctaimage.style.transition = "all 0.3s ease 0s";
  });
});

// double click
const boxes = document.querySelectorAll(".how-it-works-list-item");
boxes.forEach(box => {
  box.addEventListener("dblclick", () => {
    box.style.transform = "scale(1.05)";
    box.style.transition = "all 0.3s ease 0s";
  });
});

boxes.forEach(box => {
  box.addEventListener("click", () => {
    box.style.transform = "scale(0.99)";
    box.style.transition = "all 0.3s ease 0s";
  });
});

const titleLabels = document.querySelectorAll(".title-label");
titleLabels.forEach(titleLabel => {
    titleLabel.addEventListener("mouseover", () => {
        titleLabel.style.transform = "scale(1.05)";
        titleLabel.style.transition = "all 0.3s ease 0s";
    })
});

titleLabels.forEach(titleLabel => {
  titleLabel.addEventListener("mouseout", () => {
    titleLabel.style.transform = "scale(1)";
    titleLabel.style.transition = "all 0.3s ease 0s";
  });
});

const headings = document.querySelectorAll("section h2");
headings.forEach(heading => {
  heading.addEventListener("mouseover", () => {
    heading.style.transform = "scale(1.05)";
    heading.style.transition = "all 0.3s ease 0s";
  });
});

headings.forEach(heading => {
  heading.addEventListener("mouseout", () => {
    heading.style.transform = "scale(1)";
    heading.style.transition = "all 0.3s ease 0s";
  });
});

const mainheading = document.querySelector(".cta-layout h1");
mainheading.addEventListener("mouseover", () => {
    mainheading.style.transform = "scale(1.05)";
    mainheading.style.transition = "all 0.3s ease 0s";
  });

mainheading.addEventListener("mouseout", () => {
    mainheading.style.transform = "scale(1)";
    mainheading.style.transition = "all 0.3s ease 0s";
  });

