const revealButton = document.querySelector('#reveal');
const hideButton = document.querySelector('#hide');

revealButton.addEventListener('click', () => {
  document.querySelectorAll('#hidden').forEach((elem) => {
    elem.classList.remove('departures__time--hidden');
    revealButton.classList.add('departures__time--hidden');
    hideButton.classList.remove('departures__time--hidden');
  });
});

hideButton.addEventListener('click', () => {
  document.querySelectorAll('#hidden').forEach((elem) => {
    elem.classList.add('departures__time--hidden');
    hideButton.classList.add('departures__time--hidden');
    revealButton.classList.remove('departures__time--hidden');
  });
});
