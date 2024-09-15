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
    memePicture.classList.add("memePic");

    const subGridBox = document.createElement("div");
    subGridBox.classList.add("subGridBox");

    const memeTextBox = document.createElement("div");
    memeTextBox.classList.add("memeTextBox");

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
    this.render();
  }

  handleResize() {
    const sliderContainer = document.getElementById("memeSlider");
    const imgBox = sliderContainer.querySelector(".imgBox");
    const subGridBox = sliderContainer.querySelector(".subGridBox");

    if (window.innerWidth >= 500 && window.innerWidth <= 768) {

      sliderContainer.style.display = "flex";
      sliderContainer.style.flexDirection = "column";
      imgBox.style.order = "1";
      subGridBox.style.order = "2";
    } else {
      sliderContainer.style.display = "grid";
      sliderContainer.style.gridTemplateColumns = "1fr";
      sliderContainer.style.gridTemplateRows = "auto auto";
      imgBox.style.gridRow = "1 / 2";
      subGridBox.style.gridRow = "2 / 3";
    }
  }
}
