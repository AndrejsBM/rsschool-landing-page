const themeToggle = document.querySelector('.toggle');
const body = document.body;

themeToggle.addEventListener('click', function (e) {
  e.target.value === 'dark' ? toggleTheme('dark') : toggleTheme('light');
});

function toggleTheme(theme) {
  localStorage.setItem('theme', theme);
  body.setAttribute('data-theme', theme);
}

function updateTheme() {
  localStorage.getItem('theme')
    ? body.setAttribute('data-theme', localStorage.getItem('theme'))
    : body.setAttribute('data-theme', 'light');

  localStorage.getItem('theme') === 'dark'
    ? (themeToggle.checked = true)
    : (themeToggle.checked = false);
}

window.addEventListener('DOMContentLoaded', updateTheme);

// const themeToggle = document.getElementById('toggle-theme');
// const body = document.body;

// themeToggle.addEventListener('click', function (e) {
//   e.target.checked ? toggleTheme('dark') : toggleTheme('light');
// });

// function toggleTheme(theme) {
//   localStorage.setItem('theme', theme);
//   body.setAttribute('data-theme', theme);
// }

// function updateTheme() {
//   localStorage.getItem('theme')
//     ? body.setAttribute('data-theme', localStorage.getItem('theme'))
//     : body.setAttribute('data-theme', 'light');

//   localStorage.getItem('theme') === 'dark'
//     ? (themeToggle.checked = true)
//     : (themeToggle.checked = false);
// }

// window.addEventListener('DOMContentLoaded', updateTheme);
