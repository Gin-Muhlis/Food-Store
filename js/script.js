// !membuat data untuk menampilkan produk 
const DATA_STORE = [{
        nama: 'Mie Daging Pedas',
        harga: '10.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food1.png',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Nasi Goreng',
        harga: '20.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food2.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Sushi',
        harga: '35.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food3.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Sosis Bakar',
        harga: '10.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food4.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Hamburger',
        harga: '15.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food5.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Pizza',
        harga: '25.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food6.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Sate Ayam',
        harga: '20.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food7.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
    {
        nama: 'Hot Dog',
        harga: '15.000',
        bahan: ['bahan-1', 'bahan-2', 'bahan-3', 'bahan-4', 'bahan-5', 'bahan-6'],
        url: 'food8.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ullam harum cumque nostrum ut magni, quia vel sed nulla.'
    },
]

// !animasi hamburger-menu dan navigasi
const menus = document.querySelectorAll(".menu");
const navMenu = document.querySelector('.nav-menu');

menus.forEach(function (menu) {
    const hambergerMenu = menu.querySelector(".hamberger-menu");
    menu.addEventListener("click", function () {
        hambergerMenu.classList.toggle("open");
        navMenu.classList.toggle('show');
    });
});

// !animasi menu kategori
const circleMenus = document.querySelectorAll('.circle');
const dropMenu = document.querySelector('.drop-down-menu');

for (let i = 0; i < circleMenus.length; i++) {
    circleMenus[i].addEventListener('click', () => {
        dropMenu.classList.toggle('show');
    })
}

// !menampilkan produk sesuai kategori yang diklik user
const listProduk = document.querySelector('.row-product');
const detail = document.createElement('div');
const detailButton = document.createElement('a');
const textDetailButton = document.createTextNode('Detail');

detail.appendChild(detailButton)
detailButton.setAttribute('href', '#detail');
detailButton.setAttribute('class', 'detail-button button');
detailButton.textContent = 'Detail';
console.log(detailButton)

dropMenu.addEventListener('click', events => {
    if (events.target.classList.contains('category-1')) return category(DATA_STORE[0], DATA_STORE[1]);
    if (events.target.classList.contains('category-2')) return category(DATA_STORE[2], DATA_STORE[3]);
    if (events.target.classList.contains('category-3')) return category(DATA_STORE[4], DATA_STORE[7]);
    if (events.target.classList.contains('category-4')) return category(DATA_STORE[5]);
    if (events.target.classList.contains('category-5')) return category(DATA_STORE[6]);
    if (events.target.classList.contains('category-6')) {
        dropMenu.classList.remove('show');
        listProduk.innerHTML = cetakProduk(DATA_STORE)
    };
})

function category(...item) {
    dropMenu.classList.remove('show');
    listProduk.innerHTML = item.map(el => {
        return `<div class="col-8">
        <div class="image-product" style="background-image: url(../assets/${el.url});"></div>
        <div class="text-product">
            <h3>${el.nama}</h3>
            <p>${el.harga}</p>
            <div class="button-product">
            <a href="" class="order button">Order</a>
            </div>
        </div>
    </div>`
    }).join('')
}

const buttonProduct = document.querySelectorAll('.order');
console.log(buttonProduct)
for( let i = 0; i < buttonProduct.length; i++) {
}

listProduk.innerHTML = detail;

// !menampilkan detail produk sesuai yang diklik user
function cetakDetailProduk(el) {
        return `<div class="col-8">
            <div class="title-detail">
                <h3 class="name-of-food">${el.nama}</h3>
            </div>
            <div class="image-detail" style="background-image: url(../assets/${el.url});"></div>
            <div class="more-detail">
                <p>${el.keteranngan}</p>
                <div class="ingredients">
                    <h3>Bahan-bahan :</h3>
                    <ul>    
                        ${cetakBahan(el.bahan)}
                    </ul>
                </div>
            </div>
        </div>`
}

function cetakBahan(bahan) {
    return bahan.map(el => {
        return `<li>${el}</li>`
    }).join('');
}

const rowDetail = document.querySelector('.row-detail');

function showDetail() {
    console.log('hello world')
}

