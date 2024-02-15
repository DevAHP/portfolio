let text = document.getElementById("circle");
  console.log("hhahaha",text)
  text.innerHTML = text.innerText.split('').map((char, i) => {
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
  }).join('');