const btn =  document.querySelector('#btn');
const h1 =  document.querySelector('h1');

// const hello = function() {
//   h1.style.color = 'red';
//   console.log(this);
// };

function changeColor() {
  h1.style.color = 'red';
}

function changeBgColor() {
  h1.style.backgroundColor = 'pink';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);

