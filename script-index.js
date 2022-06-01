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

const speakers = [
  {
    name: 'Dorothy Smith',
    image: 'images/speakers/dorothy-smith.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Fonje Distry',
    image: 'images/speakers/fonje-distry.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Ingrid Son',
    image: 'images/speakers/ingrid-son.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'James Dodes',
    image: 'images/speakers/james-dodes.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Jim Genes',
    image: 'images/speakers/jim-genes.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Rodríguez Jóhannsson',
    image: 'images/speakers/rodríguez-jóhannsson.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.'
  },
];
