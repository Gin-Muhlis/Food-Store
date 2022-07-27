// !membuat data produk
const DATA_STORE = [
    {
        nama: 'Mie Ayam',
        harga: '10.000',
        bahan: ['- Mie', '- Daging Ayam', '- Sawi', '- Pangsit'],
        url: 'food1.jpg',
        wa: 'https://wa.me/6281809448488?text=Mie%20Ayam%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Mie Ayam walaupun sering kita jumpai di pinggir jalan tapi kita jarang mampir untuk beli, jadi kami menyediakan mie ayam buatan sendiri agar kalian mengerti jika mie ayam itu ada dan mempunyai rasa yang enak.'
    },
    {
        nama: 'Mentai',
        harga: '10.000',
        bahan: ['- Nasi', '- Nori', '- Mayo', '- Boncabe'],
        url: 'food2.jpg',
        wa: 'https://wa.me/+6285950895918',
        keteranngan: 'Mentai adalah salah satu makanan Khas Jepang yang berbasis bahan nasi. Dengan mayo pedasnya yang melimpah, dan isi kornet / telur sosisnya, membuat rasa mentai satu ini gurih, enak dan sedap di mulut. Tak hanya bisa menjadi makanan selingan, dengan adanya nasi, membuat mentai bisa menjadi makanan utama anda.'
    },
    {
        nama: 'Basreng Spicy',
        harga: '3.000',
        bahan: ['- Baso ikan', '- Cabe kering', '- Bawang Putih', '- Minyak'],
        url: 'food3.webp',
        wa: 'https://wa.me/62895325722289?text=Basreng%20Spicy%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Basreng goreng dengan rasa yang unik dan khas, dibuat dengan baso ikan terbaik dan di padukan dengan bumbu pedas serta ditambah daun jeruk sehingga mempunyai wangi yang bisa membuat anda ketagihan.'
    },
    {
        nama: 'Donat Enak',
        harga: '3.000',
        bahan: ['- Terigu', '- Mentega', '- Ragi',  '- Gula Tepung', '- Telur', '- Air'],
        url: 'food4.jpg',
        wa: 'https://wa.me/6283184522191?text=Donat%20Enak%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Yang manis bukan hanya crush mu tapi ada donat enak dari rpl 1 yang ga kalah manis juga enak banget cocok dimakan kapan saja.'
    },
    {
        nama: 'Sebring TAFIRA',
        harga: '3.000',
        bahan: [],
        url: 'food5.jpg',
        wa: 'https://wa.me/6289516807559?text=Sebring%20TAFIRA%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Cemilan satu ini membuat semua tergila gila, semoga kalian tidak gila karena kehabisan produk kami.'
    },
    {
        nama: 'Onigiri',
        harga: '8.000',
        bahan: ['- Nasi', '- Nori', '- Telur', '- Sosis'],
        url: 'food6.jpg',
        wa: 'https://wa.me/+6285950895918',
        keteranngan: 'Onigiri adalah segenggam nasi yang dibentuk menjadi bentuk yang praktis. Onigiri bisa menjadi "go to main dish" anda. Kepalan nasi berbentuk segitiga yang berisi telur sosis / kornet, yang bisa membuat lidah dan perut anda berbahagia saat memakannya. Dengan adanya nasi, membuat onigiri bisa menjadi makanan utama anda yang praktis.'
    },
    {
        nama: 'Nugget Cobek',
        harga: '5.000',
        bahan: ['- Nugget', '- Cabe rawit', '- Cikur', '- Bawang Merah', '- Bawang Putih', '- Tomat'],
        url: 'food7.jpg',
        wa: 'https://wa.me/6281809448488?text=Mie%20Ayam%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Cobek Nugget memang terlihat biasa tapi tapi karena itulah yang membuat cobek nugget ini enak, rasa pedas yang terdapat di bumbunya membuat kalian ketagihan, seperti kalian yang sering ditolak tapi tetap ketagihan untuk mendapatkan pacar.'
    }
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
        <a href="${el.wa}" class="order button" target="_blank">Order</a>
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
        category(DATA_STORE[3]);
        const detailButton = document.querySelector('.for-detail');
        detailButton.setAttribute('data-set', 3);
        detailButton.addEventListener('click', () => {
            const angka = detailButton.getAttribute('data-set');
            return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
        })
    }
    if (events.target.classList.contains('category-2')) {
        category(DATA_STORE[0], DATA_STORE[6]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 0);
            detailButton[1].setAttribute('data-set', 6);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-3')) {
        category(DATA_STORE[1], DATA_STORE[5]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 1);
            detailButton[1].setAttribute('data-set', 5);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-4')) {
        category(DATA_STORE[2]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelector('.for-detail');
        detailButton.setAttribute('data-set', 2);
        detailButton.addEventListener('click', () => {
            const angka = detailButton.getAttribute('data-set');
            return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
        })
    }
    if (events.target.classList.contains('category-5')) {
        category(DATA_STORE[4])
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelector('.for-detail');
        detailButton.setAttribute('data-set', 4);
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
        <p>Rp. ${el.harga}</p>
        <div class="button-product">
        <a href="${el.wa}" class="order button" target="_blank">Order</a>
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