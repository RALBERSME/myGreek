document.addEventListener("DOMContentLoaded", () => {
  const textBlock = document.getElementById("text-block");
  const toggleBtn = document.getElementById("toggle-btn");

  const fullText = textBlock.textContent.trim();
  const maxCharacters = 150;

  function handleTextDisplay() {
    if (window.innerWidth >= 1024) {
      textBlock.textContent = fullText;
      toggleBtn.style.display = "none";
      return;
    }

    if (fullText.length > maxCharacters) {
      toggleBtn.style.display = "block";

      if (!textBlock.classList.contains("expanded")) {
        textBlock.textContent = fullText.substring(0, maxCharacters) + "...";
        toggleBtn.textContent = "➽ Mehr lesen";
      } else {
        textBlock.textContent = fullText;
        toggleBtn.textContent = "➽ Weniger lesen";
      }
    } else {
      textBlock.textContent = fullText;
      toggleBtn.style.display = "none";
    }
  }

  toggleBtn.addEventListener("click", () => {
    textBlock.classList.toggle("expanded");
    handleTextDisplay();
  });

  handleTextDisplay();
  window.addEventListener("resize", handleTextDisplay);
});
