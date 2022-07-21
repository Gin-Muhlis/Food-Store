// !membuat data untuk menampilkan produk 
const DATA_STORE = [{
        nama: 'Mie Daging Pedas',
        harga: '10.000',
        bahan: [],
        url: 'food1.png',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Nasi Goreng',
        harga: '20.000',
        bahan: [],
        url: 'food2.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Sushi',
        harga: '35.000',
        bahan: [],
        url: 'food3.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Sosis Bakar',
        harga: '10.000',
        bahan: [],
        url: 'food4.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Hamburger',
        harga: '15.000',
        bahan: [],
        url: 'food5.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Pizza',
        harga: '25.000',
        bahan: [],
        url: 'food6.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Sate Ayam',
        harga: '20.000',
        bahan: [],
        url: 'food7.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
    {
        nama: 'Hot Dog',
        harga: '15.000',
        bahan: [],
        url: 'food8.jpg',
        keteranngan: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolor obcaecati possimus dolores minus. Consectetur.'
    },
]

// !membuat fungsi untuk menampilkan produk
const row_product = document.querySelector('.row-product');

function tampilkanProduk(produk) {
    return produk.map(item => {
        return `<div class="col-4">
            <img src="assets/${item['url']}" class="image-product">
            <h3>${item['nama']}</h3>
            <span>Rp. ${item['harga']}</span>
        </div>`
    }).join('')
}

row_product.innerHTML = tampilkanProduk(DATA_STORE)