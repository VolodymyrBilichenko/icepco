// input number //

const inputs = document.querySelectorAll(".phone");
const output = document.querySelector("#output");

inputs.forEach(input => {
    const iti = window.intlTelInput(input, {
        initialCountry: "us",
        nationalMode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1707906286003"
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

    input.addEventListener("change", handleChange);
    input.addEventListener("keyup", handleChange);
});



// slider sum //

const slider = document.getElementById("range");
const txtSum = document.getElementById("value");

slider.oninput = function() {
    txtSum.textContent = this.value.toLocaleString('us-USD') + ' $';
};

const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, ${progress}%, ${progress}%)`;
})