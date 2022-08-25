// !membuat data produk
const DATA_STORE = [
    {
        nama: 'Es Semlo',
        harga: '5.000',
        bahan: ['- Pisang', '- Jeruk Nipis', '- Kayu Manis', '- Gular Pasir', '- Air', '- Jahe', '- Dll.'],
        url: 'semlo.jpg',
        wa: 'https://wa.me/6289517022885?text=Es%20Semlo%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Es Semlo merupakan hidangan khas keraton Jogja, Sekilas nampak seperti setup pisang namun diberi tambahan gula pasir dan rempah seperti jahe dan kayu manis.'
    },
    {
        nama: 'Kue Bakpia',
        harga: '3.000',
        bahan: ['- Gula', '- Kacang Hijau', '- Terigu', '- Dll.'],
        url: 'bakpia.jpg',
        wa: 'https://wa.me/6289516807559?text=Kue%20Bakpia%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20https://wa.me/6289516807559?text=Kue%20Bakpia%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: "Dalam bahasa Tiongkok, bakpia disebut dengan 'tou luk pia' yang berarti kue pia kacang hijau. Namun ada pula yang menyebut bahwa bakpia berasal dari kata 'bak' dan 'pia'."
    },
    {
        nama: 'Es Dawet',
        harga: '5.000',
        bahan: ['- Tepung', '- Gula Merah', '- Air', '- Santan', '- Dll.'],
        url: 'dawet.jpg',
        wa: 'https://wa.me/6287899312186?text=Es%20Dawet%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Es Dawet merupakan minuman khas jogjakarta yang terbuat dari tepung beras ataupun tepung beras ketan, disajikan dengan es parut serta gula merah cair dan santan.'
    },
    {
        nama: 'Mie Tek-tek Goreng',
        harga: '-',
        bahan: ['- Mie Telor', '- Cabai', '- Bawang Merah', '- Bawang Putih', '- Telur', '- Dll.'],
        url: 'mie.jpg',
        wa: 'https://wa.me/6281313846133?text=Mie%20Tek%20Tek%20Goreng%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Mie tek-tek adalah salah satu olahan mie yang populer di Indonesia. Rasanya yang enak dan lezat, dengan rasa yang khas bisa membuat anda ketagihan.'
    },
    {
        nama: 'Nasi Kumis Kucing',
        harga: '5.000',
        bahan: ['- Nasi', '- Tempe', '- Teri',  '- Sambal khas Angkringan', '- Dll.'],
        url: 'nasi.jpg',
        wa: 'https://wa.me/6281809448488?text=Nasi%20Kumis%20Kucing%0ANama%20%3A%20%0AKelas%20%3A%20%0AJumlah%20pesanan%20%3A%20%0ADiantar%20ke%20%3A%20',
        keteranngan: 'Nasi Kumis kucing adalah nasi khas angkringan walaupun sederhana tapi memiliki rasa khas tersendiri.'
    }
    
]

// !loader
const content = document.getElementById('content');
const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', () => {
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.add('show');
    }, 5000);

    setTimeout(() => {
        typing();
    }, 5600);
})

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
        category(DATA_STORE[1], DATA_STORE[3], DATA_STORE[4]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 1);
            detailButton[1].setAttribute('data-set', 3);
            detailButton[2].setAttribute('data-set', 4);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-2')) {
        category(DATA_STORE[0], DATA_STORE[2]);
        dropMenu.classList.toggle('show');
        const detailButton = document.querySelectorAll('.for-detail');
        for (let i = 0; i < detailButton.length; i++) {
            detailButton[0].setAttribute('data-set', 0);
            detailButton[1].setAttribute('data-set', 2);
            detailButton[i].addEventListener('click', () => {
                const angka = detailButton[i].getAttribute('data-set');
                return rowDetail.innerHTML = cetakDetailProduk(DATA_STORE[angka]);
            })
        }
    }
    if (events.target.classList.contains('category-3')) {
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

// !text animation
let templete = document.querySelector('.rpl');
let text = 'RPL Store.';
let i = 0;

function typing() {
    if (i < text.length) {
        templete.innerHTML += text.charAt(i);
        i++;

        setTimeout(typing, 400);
    } else if (i === text.length) {
        templete.style.borderRightColor = 'transparent';
    }
}

