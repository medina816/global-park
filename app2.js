const certificates = [
    { id: 1, src: './img/sectevecatmirba.jpg',  },
    { id: 2, src: './img/sectevecatmirba.jpg',  },
    { id: 3, src: './img/sectevecatmirba.jpg',  },
    { id: 4, src: './img/sectevecatmirba.jpg',  }
  ];

  const certificatesContainer = document.getElementById('certificates');

  certificates.map((certificate) => {
    const card = document.createElement('div');
    card.className = 'relative w-full h-full overflow-hidden group cursor-pointer group-hover:opacity-0';

    card.innerHTML = `
    <div class="">
  <img src="${certificate.src}"  class="w-full h-full object-cover rounded shadow-md transition-transform duration-300">
</div>
<div class="absolute inset-0 bg-[#152F6099] ml-[25px] mt-[20px] w-[410px] h-[578px] bg-opacity-30 group-hover:bg-opacity-0 hover:bg-white flex items-center justify-center transition-opacity duration-300">
  <span class="opacity-0 group-hover:opacity-100 text-white text-2xl"><img src='./img/лупаmirba.svg'></span>
</div>
    `;

    certificatesContainer.appendChild(card);
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


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const swipeerData = [
  {
    name1: ' Соболев Даниил',
    name2: 'Константинович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m4.png'
  },
  {
    name1: ' Захаров Терентий',
    name2: 'Александрович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m1.png'
  },
  {
    name1: 'Кручинин Дмитрий',
    name2: ' Кириллович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m2.png'
  },
  {
    name1: ' Соболев Даниил Виноградов Филарет',
    name2: 'Максимович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m3.png'
  },
   {
    name1: ' Соболев Даниил',
    name2: 'Константинович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m4.png'
  },
  {
    name1: ' Захаров Терентий',
    name2: 'Александрович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m1.png'
  },
  {
    name1: 'Кручинин Дмитрий',
    name2: ' Кириллович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m2.png'
  },
  {
    name1: ' Соболев Даниил Виноградов Филарет',
    name2: 'Максимович',
    text: 'Заведующий кардиологическим отделением',
    img: './img/dude-m3.png'
  },
 
]
const swiper = document.getElementById('product-container'); // Получаем элемент-контейнер с нужным ID

swipeerData.forEach((ce) => {  // Используем forEach для перебора массива
  const sw = document.createElement('div');  // Создаем новый элемент div
  sw.className = 'relative w-full h-full group cursor-pointer group-hover:opacity-0';  // Добавляем классы для стилей

  sw.innerHTML = `
    <div class="product-card bg-white text-[22px] h-[520px]">
      <div class="product-image">
        <img src="${ce.img}" class="product-thumb" alt="Изображение продукта">
      </div>
      <div class="product-info ml-[10px]">
        <h2 class="product-brand">
          <span class="font-bold">${ce.name1}</span> ${ce.name2}
        </h2>
        <p class="product-short-description text-[16px]">${ce.text}</p>
      </div>
    </div>
  `;

  swiper.appendChild(sw);  // Добавляем новый элемент в контейнер swiper
});
