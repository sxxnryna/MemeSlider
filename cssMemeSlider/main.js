import { meme } from "./memeBank.js";

export class memeSlider {
  constructor(memes) {
    this.memes = memes;
    this.currentIndex = 0;
    this.render();
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  render() {
    const sliderContainer = document.getElementById("memeSlider");
    sliderContainer.innerHTML = "";

    const imgBox = document.createElement("div");
    imgBox.classList.add("imgBox");

    const memePicture = document.createElement("img");
    memePicture.src = `./${this.memes[this.currentIndex].img}`;
    memePicture.alt = "meme";
    memePicture.classList.add("memePic", "fade-in");

    const subGridBox = document.createElement("div");
    subGridBox.classList.add("subGridBox");

    const memeTextBox = document.createElement("div");
    memeTextBox.classList.add("memeTextBox", "fade-in-text");

    const memeDescription = document.createElement("p");
    memeDescription.classList.add("memeDescription");
    memeDescription.textContent = this.memes[this.currentIndex].description;

    const memePagination = document.createElement("div");
    memePagination.classList.add("pagination");

    this.memes.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === this.currentIndex) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        this.currentIndex = index;
        this.updateSlider();
      });

      memePagination.appendChild(dot);
    });

    sliderContainer.appendChild(imgBox);
    sliderContainer.appendChild(subGridBox);

    imgBox.appendChild(memePicture);
    subGridBox.appendChild(memeTextBox);
    subGridBox.appendChild(memePagination);
    memeTextBox.appendChild(memeDescription);

    this.handleResize();
  }

  updateSlider() {
    const sliderContainer = document.getElementById("memeSlider");
    const memePicture = sliderContainer.querySelector(".memePic");
    const memeTextBox = sliderContainer.querySelector(".memeTextBox");
    const memeDescription = sliderContainer.querySelector(".memeDescription");
    const dots = sliderContainer.querySelectorAll(".dot");

    memePicture.classList.add("fade-out");
    memeTextBox.classList.add("fade-out-text");

    setTimeout(() => {
      memePicture.src = `./${this.memes[this.currentIndex].img}`;
      memeDescription.textContent = this.memes[this.currentIndex].description;

      memePicture.classList.remove("fade-out");
      memePicture.classList.add("fade-in");

      memeTextBox.classList.remove("fade-out-text");
      memeTextBox.classList.add("fade-in-text");

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[this.currentIndex].classList.add("active");
    }, 500);
  }

  handleResize() {
    const sliderContainer = document.getElementById("memeSlider");
    const imgBox = sliderContainer.querySelector(".imgBox");
    const subGridBox = sliderContainer.querySelector(".subGridBox");

    if (window.innerWidth >= 500 && window.innerWidth <= 768) {
      if (subGridBox) {
        while (subGridBox.firstChild) {
          sliderContainer.insertBefore(subGridBox.firstChild, subGridBox);
        }
        subGridBox.remove();
      }
    } else {
      if (!subGridBox) {
        const newSubGridBox = document.createElement("div");
        newSubGridBox.classList.add("subGridBox");

        const memeTextBox = sliderContainer.querySelector(".memeTextBox");
        const memePagination = sliderContainer.querySelector(".pagination");

        if (memeTextBox) newSubGridBox.appendChild(memeTextBox);
        if (memePagination) newSubGridBox.appendChild(memePagination);

        sliderContainer.appendChild(newSubGridBox);
      }
    }
  }
}
