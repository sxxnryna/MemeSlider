import { meme } from "./memeBank.js";

export class memeSlider {
  constructor(memes) {
    this.memes = memes;
    this.currentIndex = 0;
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

    sliderContainer.appendChild(memePicture);
    sliderContainer.appendChild(memeTextBox);
    sliderContainer.appendChild(memePagination);
    sliderContainer.appendChild(imgBox);
    sliderContainer.appendChild(subGridBox);

    memeTextBox.appendChild(memeDescription);
    subGridBox.appendChild(memeTextBox);
    subGridBox.appendChild(memePagination);
    imgBox.appendChild(memePicture);

    return sliderContainer;
  }

  updateSlider() {
    const sliderContainer = document.getElementById("memeSlider");
    sliderContainer.innerHTML = "";
    this.render();
  }
}
