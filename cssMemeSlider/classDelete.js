document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector("#memeSlider");

  function handleSubGridBox() {
    const subGridBox = document.querySelector(".subGridBox");
    const subGridBoxContent = Array.from(subGridBox?.children || []);
    const imgBox = document.querySelector(".imgBox");
    const memeTextBox = document.querySelector(".memeTextBox");
    const memePagination = document.querySelector(".pagination");

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

        if (memeTextBox) newSubGridBox.appendChild(memeTextBox);
        if (memePagination) newSubGridBox.appendChild(memePagination);

        sliderContainer.insertBefore(newSubGridBox, imgBox.nextSibling);
      }
    }
  }

  handleSubGridBox();
  window.addEventListener("resize", handleSubGridBox);
});
