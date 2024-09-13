export class memeSlider {
  constructor(memes) {
    this.memes = memes;
    this.currentIndex = 0;
  }

  render() {
    const sliderContainer = document.getElementById("memeSlider");

    sliderContainer.innerHTML = "";

    const memePicture = document.createElement("img");
    memePicture.src = `./${this.memes[this.currentIndex].img}`;
    memePicture.alt = "meme";
    memePicture.classList.add("memePic");

    const memeTextBox = document.createElement("div");
    memeTextBox.classList.add("memeTextBox");

    const memeDescription = document.createElement("p");
    memeDescription.classList.add("memeDescription");
    memeDescription.textContent = this.memes[this.currentIndex].description;
    const memePagination = document.createElement("div");
    memePagination.classList.add("pagination");

    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.classList.add("controlBtn");
    prevButton.addEventListener("click", () => this.showPrevious());

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("controlBtn");
    nextButton.addEventListener("click", () => this.showNext());

    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(memePicture);
    sliderContainer.appendChild(memeTextBox);
    sliderContainer.appendChild(nextButton);
    sliderContainer.appendChild(memePagination);

    memeTextBox.appendChild(memeDescription);

    return sliderContainer;
  }
}
