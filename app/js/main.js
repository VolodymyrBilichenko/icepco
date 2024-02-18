// input number //

const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const iti = window.intlTelInput(input, {
  initialCountry: "us",
  nationalMode: true,
  utilsScript: "/intl-tel-input/js/utils.js?1707906286003" // just for formatting/placeholders etc
});

const handleChange = () => {
  let text;
  if (input.value) {
    text = iti.isValidNumber()
      ? "Valid number! Full international format: " + iti.getNumber()
      : "Invalid number - please try again";
  } else {
    text = "Please enter a valid number below";
  }
  const textNode = document.createTextNode(text);
  output.innerHTML = "";
  output.appendChild(textNode);
};

// listen to "keyup", but also "change" to update when the user selects a country
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);



// slider sum //

const slider = document.getElementById("myRange");
const demo = document.getElementById("demo");

slider.oninput = function() {
    demo.textContent = this.value.toLocaleString('us-USD') + ' $';
};

const range = document.getElementById("myRange");

range.addEventListener("input", () => {
    const value = range.value;
    const min = range.min;
    const max = range.max;
    const percent = (value - min) / (max - min);

    range.style.background = `linear-gradient(to right, #32acff ${percent*100}%, transparent ${percent*100}%)`;
});