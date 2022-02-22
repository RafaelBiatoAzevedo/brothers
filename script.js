import {
  services,
  professionals,
  mason,
  plumber,
  electrician,
  painter,
  installationGeneral,
  company,
} from './data.js';

const createElement = (data) => {
  const div = document.createElement('div');
  div.className = 'service-container';
  const image = document.createElement('img');
  image.className = 'service-image';
  image.src = data.image;
  div.appendChild(image);
  const div2 = document.createElement('div');
  div2.className = 'text-container';
  const h2 = document.createElement('h2');
  h2.className = 'service-title';
  h2.innerText = data.title;
  const p = document.createElement('p');
  p.className = 'service-description';
  p.innerText = data.description;
  const btn = document.createElement('button');
  btn.className = 'btn-order service-btn';
  btn.id = 'btnOrder';
  btn.innerText = 'Solicitar Orçamento';
  div2.appendChild(h2);
  div2.appendChild(p);
  div2.appendChild(btn);
  div.appendChild(div2);
  document.querySelector('#containerMain').appendChild(div);
};

const createServices = (list) =>
  list.forEach((service) => createElement(service));

const createElementContacts = (data) => {
  const div = document.createElement('div');
  div.className = 'contact-container';
  const image = document.createElement('img');
  image.className = 'contact-image';
  image.src = data.picture;
  const h2 = document.createElement('h2');
  h2.className = 'contact-name';
  h2.innerText = data.name;
  const descri = document.createElement('p');
  descri.className = 'contact-description';
  descri.innerText = data.description;
  const cel = document.createElement('p');
  cel.className = 'contact-cel';
  cel.innerText = `WhatsApp ${data.cel}`;
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(descri);
  div.appendChild(cel);
  const divMain = document.querySelector('#contactContainerMain');
  divMain.appendChild(div);
};

const createContacts = () => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';

  const divMain = document.createElement('div');
  divMain.className = 'container-contacts';
  divMain.id = 'container-contacts';

  const div = document.createElement('div');
  div.className = 'contact-container-main';
  div.id = 'contactContainerMain';

  const p = document.createElement('p');
  p.className = 'contact-msg';
  p.innerText =
    '>> Mande mensagem ou ligue para um de nossos profissionais para agendar uma visita <<';

  divMain.appendChild(p);
  divMain.appendChild(div);
  container.appendChild(divMain);
  professionals.forEach((profi) => createElementContacts(profi));
};

const eventsBtn = () =>
  document
    .querySelectorAll('#btnOrder')
    .forEach((btn) => btn.addEventListener('click', createContacts));

const showInMain = (list, evt) => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';
  createServices(list);
  eventsBtn();
  const allNavs = document.querySelectorAll('.a-nav');
  allNavs.forEach((nav) => nav.classList.remove('isActive'));
  if (evt.target) {
    evt.target.classList.add('isActive');
  }
};

const showCompany = () => {
  const container = document.querySelector('#containerMain');
  container.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'logo-description';
  const h2 = document.createElement('h2');
  h2.innerText = 'Informações';
  h2.className = 'subtitle logoSubtitle';
  const paragraph = document.createElement('p');
  paragraph.innerText = company;
  paragraph.className = 'paragraph-logo';
  div.appendChild(h2);
  div.appendChild(paragraph);
  container.appendChild(div);
};

const eventBtnHeader = () =>
  document
    .querySelector('#btnHeader')
    .addEventListener('click', createContacts);

const eventsMenu = () => {
  eventBtnHeader();
  const logo = document.querySelector('#logoType');
  logo.addEventListener('click', showCompany);
  const spanServices = document.querySelector('#spanNav');
  spanServices.addEventListener('click', () => showInMain(services));
  const masonServices = document.querySelector('#masonNav');
  masonServices.addEventListener('click', (evt) => showInMain(mason, evt));
  const plumerServices = document.querySelector('#plumerNav');
  plumerServices.addEventListener('click', (evt) => showInMain(plumber, evt));
  const electricianServices = document.querySelector('#electrician');
  electricianServices.addEventListener('click', (evt) =>
    showInMain(electrician, evt)
  );
  const painterServices = document.querySelector('#painter');
  painterServices.addEventListener('click', (evt) => showInMain(painter, evt));
  const installationGeneralServices = document.querySelector(
    '#instalationGeneral'
  );
  installationGeneralServices.addEventListener('click', (evt) =>
    showInMain(installationGeneral, evt)
  );
};

window.onload = () => {
  eventsMenu();
  showInMain(services);
};
