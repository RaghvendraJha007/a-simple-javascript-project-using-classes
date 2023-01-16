const button = document.querySelector('button');

// const buttonAdd = () => {
//   alert('Button was clicked.');
// };
const buttonHandler = (event) => {
  //   event.target.disabled = true;
  console.log(event);
};

// button.addEventListener('click', btn);

// setTimeout(() => {
//   button.removeEventListener('click', btn);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonHandler);
// });

// window.addEventListener('scroll', (e) => console.log(e));

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');
div.addEventListener('click', (event) => {
  console.log('Div Clicked');
  console.log(event);
});

button.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Button Clicked');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', (event) => {
  // console.log(event.currentTarget);
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  // button.click();
  form.querySelector('button').click();
});
