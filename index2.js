
const random = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById (`input`);
const btn = document.getElementById (`btn`);
const text = document.getElementById(`text`);
console.log(random);
btn.addEventListener (`click`, () => {
    const guess = Number(input.value);
       if (guess === random) {s
       text.innerHTML = "You Win!!";
  } else if (guess > random) {
      text.innerHTML = "Guess Smaller"; 
    } else {
        text.innerHTML = "Guess Larger";
   }
});
