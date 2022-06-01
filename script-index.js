const menuButton = document.getElementById('menu-button');
const openIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

function changeIcon() {
  if (closeIcon.classList.contains('d-none')) {
    closeIcon.classList.remove('d-none');
    openIcon.classList.add('d-none');
  } else {
    closeIcon.classList.add('d-none');
    openIcon.classList.remove('d-none');
  }
}
