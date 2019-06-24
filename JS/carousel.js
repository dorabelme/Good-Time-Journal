// class Carousel {
//   constructor(carouselElement) {
//     this.carouselElement = carouselElement;
//     this.leftButton = carouselElement.querySelector(".left-button");
//     this.rightButton = carouselElement.querySelector(".right-button");
//     this.images = carouselElement.querySelectorAll("img");
//     this.currentIndex = 0;
//     this.images[this.currentIndex].classList.toggle("active");

//     this.leftButton.addEventListener("click", () =>
//       this.select(this.leftIndex)
//     );
//     this.rightButton.addEventListener("click", () =>
//       this.select(this.rightIndex)
//     );
//   }

//   select(indexFn) {
//     this.images.forEach(image => image.classList.remove("active"));
//     this.currentIndex = indexFn(this.currentIndex);
//     const nextImage = this.images[this.currentIndex];
//     nextImage.classList.toggle("active");
//   }

//   rightIndex(currentIndex) {
//     return (currentIndex + 1) % 4;
//   }

//   leftIndex(currentIndex) {
//     // return this.rightIndex(currentIndex + 1);
//     return (currentIndex + 2) % 4;
//   }
// }

// const carousel = document.querySelector(".carousel");
// const newClass = new Carousel(carousel);

class Tab {
  constructor(props) {
    this.element = props;
    this.tab = props.dataset.tab;
    this.review = document.querySelector(`.review[data-review='${this.tab}']`);
    this.element.addEventListener("click", () => this.display());
  }

  hide() {
    document.querySelector(".review-active").classList.toggle("review-active");
    document.querySelector(".tab-active").classList.toggle("tab-active");
  }

  display() {
    this.hide();
    this.review.classList.toggle("review-active");
    this.element.classList.toggle("tab-active");
  }
}

let i = 0;

const count = array => {
  if (i >= array.length) i = 0;
  array[i].click();
  i++;
};

class Reviews {
  constructor(props) {
    this.element = props;
    this.reviews = Array.from(document.querySelectorAll(".review"));
    this.tab = Array.from(document.querySelectorAll(".tab"));
    this.setInterval();
  }

  setInterval() {
    setInterval(count, 5000, this.tab);
  }
}

document.querySelectorAll(".tab").forEach(el => new Tab(el));

let reviews = document.querySelector(".reviews");
reviews = new Reviews(reviews);