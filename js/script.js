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
const hambergerMenu = document.querySelector(".hamberger-menu");

menus.forEach(function (menu) {
    menu.addEventListener("click", function () {
        hambergerMenu.classList.toggle("open");
        navMenu.classList.toggle('show');
    });
});

// !menampilkan produk-produk
function cetakProduk(item) {
    return item.map(el => {
        return `<div class="col-8">
    <div class="image-product" style="background-image: url(../assets/${el.url});"></div>
    <div class="text-product">
        <h3>${el.nama}</h3>
        <p>Rp. ${el.harga}</p>
        <div class="button-product">
        <a href="" class="order button">Order</a>
        <a href="#detail" class="detail-button button" onlick="showDetail()">Detail</a>
        </div>
    </div>
</div>`
    }).join('')
}

const listProduk = document.querySelector('.row-product');
listProduk.innerHTML = cetakProduk(DATA_STORE);


// !animasi menu kategori
const categoryMenu = document.querySelector('.category');
const dropMenu = document.querySelector('.drop-down-menu');

categoryMenu.addEventListener('click', () => {
    dropMenu.classList.toggle('show');
});

// !menampilkan produk sesuai kategori yang diklik user
dropMenu.addEventListener('click', events => {
    if (events.target.classList.contains('category-1')) {
        dropMenu.classList.toggle('show');
        category(DATA_STORE[0], DATA_STORE[1]);
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 0);
            detailButton[1].setAttribute('data-set', 1);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-2')) {
        category(DATA_STORE[2], DATA_STORE[3]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 2);
            detailButton[1].setAttribute('data-set', 3);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-3')) {
        category(DATA_STORE[4], DATA_STORE[5]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 4);
            detailButton[1].setAttribute('data-set', 5);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-4')) {
        category(DATA_STORE[6]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelector('.for-detail');
        detailButton.setAttribute('data-set', 6);
        detailButton.addEventListener('click', () => {
            const angka = detailButton.getAttribute('data-set');
            return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
        })
    }
    if (events.target.classList.contains('category-5')) {
        category(DATA_STORE[7]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelector('.for-detail');
        detailButton.setAttribute('data-set', 7);
        detailButton.addEventListener('click', () => {
            const angka = detailButton.getAttribute('data-set');
            return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
        })
    }
    if (events.target.classList.contains('category-6')) {
        listProduk.innerHTML = cetakProduk(DATA_STORE);
        showDetail()
    };
})

function category(...item) {
    dropMenu.classList.toggle('show');
    listProduk.innerHTML = item.map(el => {
        return `<div class="col-8">
    <div class="image-product" style="background-image: url(../assets/${el.url});"></div>
    <div class="text-product">
        <h3>${el.nama}</h3>
        <p>${el.harga}</p>
        <div class="button-product">
        <a href="" class="order button">Order</a>
        <a href="#detail" class="detail-button button for-detail" onlick="showDetail()">Detail</a>
        </div>
    </div>
</div>`
    }).join('')
}

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
    const detailButton = document.querySelectorAll('.detail-button');
    for (let i = 0; i < DATA_STORE.length; i++) {
        detailButton[i].setAttribute('data-set', i);
        detailButton[i].addEventListener('click', () => {
            const angka = detailButton[i].getAttribute('data-set')
            return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
        })
    }
}

showDetail();

// !menghilangkan navbar menu ketika salah satu menu di klik
const listMenu = document.querySelectorAll('.row-list a');
listMenu.forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hambergerMenu.classList.toggle("open");
  })  
})