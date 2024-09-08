const names = ["Khaista Rahman", "Frontend Developer"];
let nameIndex = 0;
let letterIndex = 0;
const h1 = document.getElementById('name');

function typeText() {
  if (letterIndex < names[nameIndex].length) {
    let span = document.createElement('span');
    span.textContent = names[nameIndex][letterIndex];
    h1.appendChild(span);
    letterIndex++;
    setTimeout(typeText, 150); 
  } else {
    setTimeout(clearText, 2000); 
  }
}

function clearText() {
  h1.textContent = '';
  letterIndex = 0;
  nameIndex = (nameIndex + 1) % names.length;
  typeText();
}

typeText();
