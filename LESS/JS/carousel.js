class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = carouselElement.querySelector(".left-button");
    this.rightButton = carouselElement.querySelector(".right-button");
    this.images = carouselElement.querySelectorAll("img");
    this.currentIndex = 0;
    this.images[this.currentIndex].classList.toggle("active");

    this.leftButton.addEventListener("click", () =>
      this.select(this.leftIndex)
    );
    this.rightButton.addEventListener("click", () =>
      this.select(this.rightIndex)
    );
  }

  select(indexFn) {
    this.images.forEach(image => image.classList.remove("active"));
    this.currentIndex = indexFn(this.currentIndex);
    const nextImage = this.images[this.currentIndex];
    nextImage.classList.toggle("active");
  }

  rightIndex(currentIndex) {
    return (currentIndex + 1) % 4;
  }

  leftIndex(currentIndex) {
    // return this.rightIndex(currentIndex + 1);
    return (currentIndex + 2) % 4;
  }
}

const carousel = document.querySelector(".carousel");
const newClass = new Carousel(carousel);
