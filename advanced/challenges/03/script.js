const box = document.querySelector('.box');


function handleClick() {
  box.classList.add("pressed");
  setTimeout(()=>box.classList.remove('pressed'),100);
}

box.addEventListener('click',handleClick);