class Tab {
  constructor(props) {
    this.element = props;
    this.tab = props.dataset.tab;
    this.review = document.querySelector(`.review[data-review='${this.tab}']`);
    this.element.addEventListener("click", () => this.active());
  }

  hidden() {
    document.querySelector(".review-active").classList.toggle("review-active");
    document.querySelector(".tab-active").classList.toggle("tab-active");
  }

  active() {
    this.hidden();
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
    this.tabs = Array.from(document.querySelectorAll(".tab"));
    this.setInterval();
  }

  setInterval() {
    setInterval(count, 5000, this.tabs);
  }
}

const tabs = Array.from(document.querySelectorAll(".tab")).map(element => new Tab(element));

let reviews = document.querySelector(".reviews");
reviews = new Reviews(reviews);