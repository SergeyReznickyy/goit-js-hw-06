const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const inputValue = input.value.trim();
  const isValid = inputValue.length === expectedLength;

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
