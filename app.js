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