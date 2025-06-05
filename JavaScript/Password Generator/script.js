let container = document.getElementsByClassName("container")[0];
let outputVal = document.getElementById("inputval");
let slide = document.getElementById("mySlider");
let numVal = document.getElementById("numVal");
let checkVal = document.getElementsByClassName("check");

const numbers = '0123456789';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const mixCased = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';


const generatePassword = () => {
    let pass = "";
    let charSet = "";
    if(checkVal[0].checked) charSet += numbers;
    if(checkVal[1].checked) charSet += letters;
    if(checkVal[2].checked) charSet += mixCased;
    if(checkVal[3].checked) charSet += symbols;
    for(let i = 0;i< parseInt(numVal.innerText) ; i++){
        pass += charSet.charAt(Math.floor(Math.random()*charSet.length));
    }
    outputVal.value = charSet ? pass : "";

}

[slide, ...checkVal].forEach(el => {
    el.addEventListener('input', () => {
      numVal.textContent = slide.value;
      generatePassword();
    });
  });

const copyOperation = () => {
    console.log(outputVal.value);
    if(outputVal.value == ""){
        let span = document.createElement("div");
        span.classList.add("alert2");
        span.innerText = "Please select atleast one checkbox to generate";
        container.appendChild(span);

        setTimeout(() => span.remove(), 3000);
        return;

    }
    navigator.clipboard.writeText(outputVal.value)
    .then(() => {
        if(outputVal.value == "") return error;
        let span = document.createElement("div");
        span.classList.add("alert");
        span.innerText = "Password copied to Clipboard";
        container.appendChild(span);

        setTimeout(() => span.remove(), 3000);
    })
    .catch((err) => alert(err.type));
}

generatePassword();
