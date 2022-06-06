/* eslint-disable no-unused-vars */
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Fonje Distry',
    image: 'images/speakers/fonje-distry.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ingrid Son',
    image: 'images/speakers/ingrid-son.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'James Dodes',
    image: 'images/speakers/james-dodes.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Jim Genes',
    image: 'images/speakers/jim-genes.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rodríguez Jóhannsson',
    image: 'images/speakers/rodríguez-jóhannsson.jpg',
    workInfo: 'An example of the speaker\'s current job and position',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.',
  },
];

const speakerSection = document.getElementById('speaker-section');

const speakersMain = document.createElement('div');
speakersMain.className = 'container d-flex flex-column justify-content-center align-items-center';

speakersMain.innerHTML = `
<h2 class="mb-0 mt-4 pt-5">Featured Speakers</h2>

<hr class="theme-color-orange opacity-100 mt-3 mb-5">

<div id="speakers-list" class="row row-cols-1 row-cols-xl-2"></div>`;

speakerSection.appendChild(speakersMain);

const speakersList = document.getElementById('speakers-list');

speakers.forEach((speaker, speakerNum) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('col');
  speakerDiv.innerHTML = `
  <div id="book-${speakerNum}">
    <img src="${speakers[speakerNum].image}" alt="Picture of Speaker" class="" />
    <div class="card-body">
      <h5 class="fs-4 fw-bold card-title my-2">${speakers[speakerNum].name}</h5>

      <p class="fs-6 fst-italic theme-color-orange">${speakers[speakerNum].workInfo}</p>   

      <hr class="theme-color-grey opacity-50">
      
      <p class="fs-6">
        ${speakers[speakerNum].description}
      </p>
    </div>
  </div>`;

  speakersList.appendChild(speakerDiv);

  if (speakerNum > 1) {
    document.getElementById(`book-${speakerNum}`).className = 'card d-none d-md-flex flex-row border-0 my-5';
  }
});

const moreButton = document.createElement('button');
moreButton.className = 'btn d-md-none d-flex flex-row justify-content-center gap-2 bg-white border border-1 w-100 fs-5 py-3 mb-5';
moreButton.setAttribute('onclick', 'showMoreSpeakers()');
moreButton.innerHTML = `
MORE
<img src="images/icons/expand-speakers-icon.png" alt="" class=''>`;

speakersMain.appendChild(moreButton);

const cardList = document.getElementsByClassName('card d-none');

function showMoreSpeakers() {
  for (let i = 0; i < cardList.length;) {
    cardList[i].classList.remove('d-none');
    if (i >= cardList.length) {
      speakersMain.removeChild(moreButton);
    }
  }
}
