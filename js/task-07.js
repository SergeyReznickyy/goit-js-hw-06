const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

textSpan.style.fontSize = `${fontSizeControl.value}px`;
const handleFontSize = (event) => {
  const newSize = `${event.target.value}px`;
  textSpan.style.fontSize = newSize;
};
fontSizeControl.addEventListener("input", handleFontSize);
