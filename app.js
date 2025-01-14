
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const applicationForm = document.getElementById('applicationForm');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

document.getElementById("modal").addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

applicationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Заявка отправлена!');
});

let section2 = document.querySelector(".section2");
let products = [
  {
    image: "./img/image3.png",
  },
  {
    image: "./img/image3.png",
  },
  {
    image: "./img/image3.png",
  },
  {
    image: "./img/image3.png",
  },
];

section2.innerHTML = `
  <h1>Наши лицензии и сертификаты</h1>
  <div class="card">
    ${products.map((item) => `
      <div class="image-wrapper">
        <img src="${item.image}" alt="">
        <div class="overlay"></div>
      </div>
    `
      )
      .join("")}
  </div>`;
