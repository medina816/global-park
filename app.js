

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

const block7 = [
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
    {
        img:'./img/shutterstock_1637496319 2.png'

    },
]


const container = document.getElementById('block7');

block7.map((item, index) => {
    const productElement = `
        <div class="">
        <img src="${item.img}" class="w-[300px]" >
        </div>
      
    `;
    container.innerHTML += productElement;
});

const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('prevBtn');
const prevBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 750, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -750, behavior: 'smooth' });
});
const btn = document.getElementById('btn');

btn.onclick = () => {
    const input1 = document.getElementById('name').value;
    const input2 = document.getElementById('phone').value;
    let valid = true;

    if (!input1.trim()) {
        document.getElementById('error1').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error1').style.display = 'none';
    }

    if (!input2.trim()) {
        document.getElementById('error2').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error2').style.display = 'none';
    }

    if (valid) {
        document.getElementById('modalInput1').textContent = input1;
        document.getElementById('modalInput2').textContent = input2;
        document.getElementById('modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
};

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
