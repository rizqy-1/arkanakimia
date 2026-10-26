import './style.css'

// 1. Script untuk toggle menu mobile pada navbar
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    const icon = btn.querySelector('svg');
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        } else {
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        }
    });
}

// Helper function for image gallery
window.changeProductImage = (src) => {
    const mainImg = document.getElementById('main-product-image');
    if (mainImg) {
        mainImg.src = src;
    }
};

// 2. Data Produk Lengkap
export const products = [
    {
        id: "asam-humate",
        nama: "Asam Humate",
        gambar: "/assets/AsamHumate.jpeg",
        deskripsiSingkat: "Suplemen tanah organik premium untuk pertanian.",
        deskripsiLengkap: "Asam Humate adalah senyawa organik kompleks yang sangat penting untuk kesehatan dan kesuburan tanah. Produk kami diekstrak dari sumber alami berkualitas tinggi, dirancang khusus untuk meningkatkan struktur tanah, kapasitas menahan air, dan ketersediaan nutrisi bagi tanaman. Penggunaan rutin akan merangsang pertumbuhan akar yang kuat, meningkatkan hasil panen, dan mengurangi kebutuhan pupuk anorganik, menjadikannya pilihan ideal untuk pertanian berkelanjutan.",
        manfaat: [
            "Meningkatkan struktur dan porositas tanah",
            "Meningkatkan kapasitas retensi air (menahan air)",
            "Meningkatkan kapasitas tukar kation (KTK) tanah",
            "Merangsang aktivitas mikroba tanah yang menguntungkan",
            "Meningkatkan efisiensi penyerapan pupuk"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "kaporit-tjiwi-60",
        nama: "Calcium Hypochlorite (Kaporit Tjiwi 60%)",
        gambar: "/assets/CalciumHypochlorite(Kaporittjiwi60℅).jpeg", // Sesuaikan nama file jika error
        deskripsiSingkat: "Disinfektan kuat untuk kolam renang dan pengolahan air.",
        deskripsiLengkap: "Calcium Hypochlorite, umumnya dikenal sebagai kaporit, dengan konsentrasi klorin aktif 60% dari merek terpercaya Tjiwi. Produk ini adalah agen sanitasi dan oksidator yang sangat efektif. Sangat ideal untuk sterilisasi air kolam renang, pengolahan air minum, dan disinfeksi air limbah. Kaporit ini bekerja cepat membunuh bakteri, virus, dan alga, menjaga air tetap jernih, bersih, dan aman digunakan.",
        manfaat: [
            "Disinfeksi air kolam renang yang cepat dan efektif",
            "Pembasmian alga dan lumut membandel",
            "Sterilisasi fasilitas pengolahan air minum (PDAM)",
            "Sanitasi air limbah industri sebelum dibuang",
            "Disinfeksi permukaan dan peralatan di industri makanan"
        ],
        kemasan: "Drum 15 Kg"
    },
    {
        id: "caustic-soda-flake",
        nama: "Caustic Soda Flake (NaOH)",
        gambar: "/assets/CausticSodaFlake(NaohFlake).jpeg",
        deskripsiSingkat: "Bahan esensial untuk sabun dan pengolahan limbah.",
        deskripsiLengkap: "Caustic Soda Flake (Natrium Hidroksida) berbentuk serpihan putih adalah basa kuat yang sangat reaktif. Ini merupakan bahan kimia dasar yang tak tergantikan di berbagai industri. Produk kami memiliki tingkat kemurnian tinggi, sangat mudah larut dalam air dengan melepaskan panas. Banyak digunakan dalam proses saponifikasi (pembuatan sabun), netralisasi asam dalam pengolahan air limbah, pemrosesan kertas, dan industri tekstil.",
        manfaat: [
            "Bahan baku utama pembuatan sabun padat dan deterjen",
            "Pengatur pH (penaik pH) dalam instalasi pengolahan air limbah (IPAL)",
            "Membersihkan pipa saluran yang tersumbat (drain cleaner)",
            "Proses *pulping* dalam industri kertas",
            "Proses *mercerization* dalam industri tekstil katun"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "citric-acid",
        nama: "Citric Acid (C6H8O7)",
        gambar: "/assets/CitridAcid(C6H8O7).jpeg",
        deskripsiSingkat: "Pengatur keasaman dan pembersih ramah lingkungan.",
        deskripsiLengkap: "Citric Acid atau Asam Sitrat adalah asam organik lemah yang ditemukan secara alami dalam buah jeruk. Ini adalah salah satu bahan tambahan makanan yang paling umum digunakan sebagai pengatur keasaman (pengasam) dan pengawet. Selain industri makanan dan minuman, Asam Sitrat kami sangat efektif digunakan sebagai agen pembersih kerak (descaler) ramah lingkungan dan *chelating agent* dalam industri kosmetik dan pembersih rumah tangga.",
        manfaat: [
            "Memberikan rasa asam yang menyegarkan pada makanan & minuman",
            "Pengawet alami yang menghambat pertumbuhan bakteri",
            "Membersihkan kerak mineral (kalsium) pada boiler dan pipa",
            "Bahan aktif dalam produk pembersih rumah tangga ramah lingkungan",
            "Menyesuaikan pH dalam produk kosmetik dan perawatan kulit"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "hcl",
        nama: "Hydrochloric Acid (HCL)",
        gambar: "/assets/HydrochloricAcid(HCL).jpeg",
        deskripsiSingkat: "Asam kuat untuk pembersihan industri dan penyesuaian pH.",
        deskripsiLengkap: "Hydrochloric Acid (Asam Klorida) adalah asam kuat korosif yang merupakan larutan gas hidrogen klorida dalam air. Produk ini sangat penting dalam berbagai proses industri berat. HCL kami biasa digunakan untuk *pickling* baja (menghilangkan karat dan kerak sebelum pemrosesan), regenerasi resin *ion exchange*, pengaturan pH air industri, dan produksi berbagai senyawa kimia organik maupun anorganik.",
        manfaat: [
            "*Pickling* (pembersihan permukaan) logam dan baja",
            "Menurunkan pH air (pengatur keasaman) di kolam renang dan IPAL",
            "Pembersihan kerak keras pada instalasi pipa industri",
            "Regenerasi resin pada sistem *Water Treatment Plant* (WTP)",
            "Bahan baku dalam produksi PVC dan poliuretan"
        ],
        kemasan: "Jerigen 30 Kg / IBC Tank"
    },
    {
        id: "hydrogen-peroxide",
        nama: "Hydrogen Peroxide (H2O2)",
        gambar: "/assets/HydrogenPeroxide(H2O2).jpeg",
        deskripsiSingkat: "Agen pemutih, oksidator, dan disinfektan serbaguna.",
        deskripsiLengkap: "Hydrogen Peroxide adalah oksidator kuat yang sangat serbaguna dan ramah lingkungan, karena hanya terurai menjadi air dan oksigen. Produk H2O2 kami digunakan secara luas sebagai agen pemutih bebas klorin di industri kertas dan tekstil. Selain itu, ia merupakan disinfektan berspektrum luas yang efektif untuk sterilisasi permukaan, pengolahan air limbah, dan aplikasi di industri medis dan kosmetik.",
        manfaat: [
            "Pemutih (bleaching) ramah lingkungan untuk *pulp*, kertas, dan tekstil",
            "Disinfeksi dan sterilisasi permukaan di fasilitas kesehatan",
            "Oksidasi polutan organik dalam pengolahan air limbah (Advanced Oxidation Process)",
            "Bahan aktif dalam pewarna rambut dan produk kosmetik",
            "Sterilisasi kemasan di industri makanan dan minuman (aseptic packaging)"
        ],
        kemasan: "Jerigen 30-35 Kg"
    },
    {
        id: "magnesium-sulfate",
        nama: "Magnesium Sulfate (MgSO4)",
        gambar: "/assets/Magnesiumsulfate(MgSo4).jpeg",
        deskripsiSingkat: "Digunakan sebagai pupuk pertanian dan aplikasi garam medis.",
        deskripsiLengkap: "Magnesium Sulfate, umumnya dikenal sebagai Garam Epsom, adalah senyawa kimia yang mengandung magnesium, sulfur, dan oksigen. Produk ini sangat krusial dalam pertanian modern sebagai pupuk sekunder untuk mengatasi defisiensi magnesium pada tanah, yang penting untuk produksi klorofil tanaman. Selain itu, digunakan dalam industri tekstil, pembuatan kertas, dan sebagai garam mandi untuk relaksasi otot.",
        manfaat: [
            "Pupuk krusial untuk mencegah daun menguning (klorosis)",
            "Meningkatkan produksi klorofil untuk fotosintesis optimal",
            "Garam relaksasi otot (Epsom salt) di industri kesehatan & kecantikan",
            "Koagulan dalam pembuatan tahu (food grade)",
            "Bahan pemberat dalam industri tekstil katun dan sutra"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "msg",
        nama: "Monosodium Glutamate (MSG)",
        gambar: "/assets/Monosodiumglumate(MSG).jpeg",
        deskripsiSingkat: "Bahan tambahan pangan penguat rasa (flavor enhancer).",
        deskripsiLengkap: "Monosodium Glutamate adalah garam natrium dari asam glutamat, salah satu asam amino non-esensial yang paling melimpah di alam. MSG kami adalah bahan tambahan makanan *food-grade* berkualitas tinggi yang digunakan secara luas di seluruh dunia untuk menonjolkan rasa *umami* (gurih) pada berbagai hidangan gurih, sup, makanan ringan, dan produk daging olahan.",
        manfaat: [
            "Memberikan rasa *umami* (gurih) yang kaya pada masakan",
            "Meningkatkan profil rasa kaldu, sup, dan saus",
            "Bahan kunci dalam industri makanan ringan dan *snack*",
            "Digunakan dalam produk daging olahan (sosis, bakso)",
            "Dapat mengurangi penggunaan garam dapur (NaCl) tanpa mengorbankan rasa"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "oxalic-acid",
        nama: "Oxalic Acid (H2C2O4)",
        gambar: "/assets/OxalicAcid(H2C2O4).jpeg",
        deskripsiSingkat: "Zat pembersih karat dan pemutih kayu (bleaching).",
        deskripsiLengkap: "Oxalic Acid atau Asam Oksalat adalah asam organik kuat yang berbentuk kristal putih. Kemampuannya yang luar biasa untuk mengikat mineral menjadikannya pembersih karat dan kerak yang tak tertandingi. Produk ini sangat populer sebagai bahan pemutih (bleaching) kayu ringan, mengembalikan warna asli kayu yang kusam. Juga digunakan dalam pencucian mineral, *mordant* dalam pewarnaan tekstil, dan industri kulit.",
        manfaat: [
            "Menghilangkan noda karat pada permukaan logam dan kain",
            "Pemutih kayu (wood bleach) yang efektif memulihkan warna cerah",
            "Membersihkan kerak kalsium dan silika di radiator dan pipa",
            "Agen pengikat zat warna (*mordant*) di industri tekstil",
            "Proses penyamakan kulit"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "pac-jepang",
        nama: "Poly Aluminium Chloride (PAC Jepang)",
        gambar: "/assets/PolyAluminiunChloride(PacJepang).jpeg",
        deskripsiSingkat: "Koagulan penjernih air kualitas tinggi dari Jepang.",
        deskripsiLengkap: "PAC Jepang adalah koagulan anorganik polimerik premium yang diimpor langsung dari Jepang. Dikenal dengan kemurnian dan efektivitasnya yang sangat tinggi, PAC ini bereaksi sangat cepat untuk mengikat partikel tersuspensi dalam air, membentuk flok yang padat dan cepat mengendap. Sangat direkomendasikan untuk instalasi pengolahan air minum (PDAM) yang menuntut standar kebersihan dan keamanan tertinggi, serta minim residu aluminium.",
        manfaat: [
            "Pembentukan flok sangat cepat dan besar, mempercepat pengendapan",
            "Efektif pada rentang pH air yang lebih luas",
            "Menghasilkan air yang lebih jernih dengan kekeruhan (turbidity) sangat rendah",
            "Meninggalkan residu aluminium yang jauh lebih rendah di air olahan",
            "Sangat ideal untuk pengolahan air minum bersih (PDAM)"
        ],
        kemasan: "Zak 20 Kg"
    },
    {
        id: "pac-jerman",
        nama: "Poly Aluminium Chloride (PAC Jerman)",
        gambar: "/assets/PolyAluminiunChloride(PacJerman).jpeg",
        deskripsiSingkat: "Koagulan penjernih air limbah dan industri dari Jerman.",
        deskripsiLengkap: "PAC Jerman menawarkan keseimbangan sempurna antara kinerja yang kuat dan efisiensi biaya. Koagulan ini dirancang secara optimal untuk menangani air limbah industri yang kompleks dengan beban polutan organik dan anorganik yang tinggi. Sangat efektif dalam menurunkan kadar COD (Chemical Oxygen Demand) dan BOD, serta menghilangkan warna pada air limbah pabrik tekstil dan kertas.",
        manfaat: [
            "Sangat kuat dalam mengendapkan partikel di air limbah industri berat",
            "Efektif menurunkan kadar COD dan BOD air limbah",
            "Kapasitas dekolorisasi (penghilangan warna) yang sangat baik di limbah tekstil",
            "Berkinerja tinggi dalam pengolahan air limbah industri kertas",
            "Mengurangi volume lumpur (sludge) yang dihasilkan"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "pac-yellow",
        nama: "Poly Aluminium Chloride (PAC Yellow)",
        gambar: "/assets/PolyAluminiunChloride(PacYellow).jpeg",
        deskripsiSingkat: "Koagulan serbaguna bentuk bubuk kuning untuk water treatment.",
        deskripsiLengkap: "PAC Yellow adalah varian PAC yang paling umum dan serbaguna dalam bentuk bubuk berwarna kuning. Ini adalah solusi ekonomis namun sangat andal untuk berbagai kebutuhan penjernihan air skala menengah hingga besar. Mudah dilarutkan dan digunakan secara luas di seluruh dunia untuk *Municipal Water Treatment* (pengolahan air kota), penjernihan air sungai, dan IPAL komunal.",
        manfaat: [
            "Solusi koagulasi ekonomis untuk berbagai skala kebutuhan",
            "Sangat efektif menjernihkan air sungai yang keruh",
            "Penggunaan luas di Instalasi Pengolahan Air Limbah (IPAL)",
            "Mudah disimpan dan dilarutkan dalam air",
            "Membantu memisahkan minyak dan air di limbah industri"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "soda-ash",
        nama: "Soda Ash (Na2CO3)",
        gambar: "/assets/Sodaash(Na2CO3).jpeg",
        deskripsiSingkat: "Bahan baku pembuatan kaca, deterjen, dan pengatur pH air.",
        deskripsiLengkap: "Soda Ash (Natrium Karbonat) adalah bubuk putih tanpa bau yang merupakan garam natrium. Ini adalah salah satu bahan kimia anorganik yang paling banyak diproduksi di dunia. Penggunaan terbesarnya adalah sebagai *flux* dalam industri pembuatan kaca (menurunkan titik leleh pasir silika). Selain itu, Soda Ash adalah komponen kunci dalam formulasi deterjen bubuk kering dan sangat efektif sebagai pengatur pH (penaik basa) di kolam renang dan pengolahan air.",
        manfaat: [
            "Bahan baku utama (flux) industri pembuatan kaca (kaca lembaran & botol)",
            "Bahan aktif utama (builder) dalam deterjen bubuk pembersih",
            "Menaikkan dan menstabilkan pH air kolam renang",
            "Melembutkan air sadah (hard water) dengan mengendapkan ion kalsium",
            "Industri metalurgi untuk pemrosesan bijih aluminium"
        ],
        kemasan: "Zak 50 Kg"
    },
    {
        id: "spc",
        nama: "Sodium Percarbonate (SPC)",
        gambar: "/assets/SodiumPercarbonate(SPC).jpeg",
        deskripsiSingkat: "Sumber oksigen aktif untuk pemutih ramah lingkungan.",
        deskripsiLengkap: "Sodium Percarbonate adalah bahan kimia serbuk putih yang ketika dilarutkan dalam air akan melepaskan hidrogen peroksida dan natrium karbonat. Ini menjadikannya agen pemutih oksigen kering yang sangat kuat namun ramah lingkungan, ideal untuk deterjen pencerah warna (color-safe bleach). Produk SPC kami tidak beracun dan terurai dengan aman di lingkungan, sering disebut sebagai pemutih oksigen padat.",
        manfaat: [
            "Pemutih pakaian yang aman untuk warna (Color-safe oxygen bleach)",
            "Bahan utama dalam deterjen bubuk premium *Oxi-action*",
            "Penghilang noda membandel (kopi, anggur, darah) organik",
            "Ramah lingkungan: terurai menjadi air, oksigen, dan soda ash",
            "Disinfektan ramah lingkungan untuk peralatan *home-brewing*"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "sodium-sulfate",
        nama: "Sodium Sulfate IBR (Na2SO4)",
        gambar: "/assets/SodiumSulfateIBR(Na2So4).jpeg",
        deskripsiSingkat: "Digunakan luas dalam industri deterjen bubuk dan tekstil.",
        deskripsiLengkap: "Sodium Sulfate Anhydrous, umumnya *grade* IBR, adalah senyawa kimia stabil berwujud bubuk kristal putih. Fungsinya yang paling masif adalah sebagai bahan pengisi (filler) inert dalam produksi deterjen bubuk, membuat deterjen mudah mengalir bebas (free-flowing). Di industri tekstil, Sodium Sulfate adalah agen perata warna (*leveling agent*) yang memastikan pewarna tekstil terserap secara merata dan sempurna ke dalam serat kain.",
        manfaat: [
            "Bahan pengisi (*filler*) utama agar deterjen bubuk tidak menggumpal",
            "Membantu penyerapan pewarna yang merata (*leveling agent*) di tekstil kain katun",
            "Industri pembuatan *pulp* kertas Kraft",
            "Industri pembuatan kaca untuk menghilangkan gelembung udara",
            "Bahan baku pembuatan bahan kimia *sodium sulfide*"
        ],
        kemasan: "Zak 50 Kg"
    },
    {
        id: "talc-powder",
        nama: "Talc Powder",
        gambar: "/assets/Talcpowder.jpeg",
        deskripsiSingkat: "Bahan pengisi (filler) industri cat, plastik, dan kosmetik.",
        deskripsiLengkap: "Talc Powder (Bedak Talk) adalah mineral lempung magnesium silikat alami yang sangat halus dan lembut. Sifatnya yang *hydrophobic* (menolak air) dan keputihannya yang tinggi menjadikannya bahan pengisi (filler) fungsional yang sangat dihargai di berbagai industri. Talk kami meningkatkan kekakuan dan ketahanan panas pada plastik, memperbaiki tekstur dan penyebaran pada cat/pelapis, dan merupakan basa bedak yang umum di industri farmasi dan kosmetik.",
        manfaat: [
            "Bahan *filler* penguat pada industri plastik (Polypropylene)",
            "Meningkatkan kelancaran aliran dan daya tutup pada cat dan pelapis",
            "Agen anti-lengket (anti-caking) pada industri karet dan kabel",
            "Bahan dasar pembuatan bedak tabur kosmetik",
            "Meningkatkan kelicinan pada proses pembuatan kertas"
        ],
        kemasan: "Zak 25 Kg"
    },
    {
        id: "tcca-granular",
        nama: "TCCA 90% (Granular)",
        gambar: ["/assets/TrichloroisocyanuricAcid(TccaGranural).jpeg", "/assets/tccagranular2.png"],
        deskripsiSingkat: "Klorin murni bentuk butiran untuk sanitasi air kolam renang.",
        deskripsiLengkap: "Trichloroisocyanuric Acid (TCCA) dengan kandungan klorin aktif 90% berbentuk butiran (Granular). Ini adalah pembunuh bakteri dan algasida yang sangat kuat. Bentuk butirannya memungkinkan pelepasan klorin yang terkendali namun cukup cepat saat ditaburkan ke air. Produk ini sangat disukai untuk sanitasi harian dan penanganan air kolam renang ukuran besar secara profesional, menjaga air tetap jernih biru berkilau.",
        manfaat: [
            "Disinfeksi air kolam renang harian yang praktis ditabur",
            "Kandungan klorin sangat stabil terhadap sinar UV matahari",
            "Pemberantasan bakteri, virus, dan lumut yang sangat efektif",
            "Tidak mengubah pH air kolam secara signifikan",
            "Sangat ekonomis karena kandungan klorin aktif yang sangat tinggi (90%)"
        ],
        kemasan: "Drum 50 Kg / Drum 15 Kg"
    },
    {
        id: "tcca-powder",
        nama: "TCCA 90% (Powder)",
        gambar: "/assets/TrichloroisocyanuricAcid(TccaPowder).jpeg",
        deskripsiSingkat: "Klorin murni bentuk bubuk, larut cepat untuk shock treatment.",
        deskripsiLengkap: "TCCA 90% Powder (Bubuk) menawarkan kecepatan kelarutan yang jauh lebih tinggi dibandingkan granular atau tablet. Karena sifatnya yang langsung larut, produk ini merupakan senjata utama untuk *Shock Treatment*—tindakan darurat menaikkan kadar klorin secara drastis untuk membunuh 'ledakan' alga hijau yang tiba-tiba, atau membersihkan air kolam yang sangat kotor setelah hujan lebat atau penggunaan padat.",
        manfaat: [
            "Sangat cepat larut, ideal untuk *Shock Treatment* darurat kolam renang",
            "Membasmi seketika ledakan alga hijau dan air keruh",
            "Cepat memulihkan kejernihan air setelah curah hujan tinggi",
            "Disinfeksi cepat fasilitas umum seperti rumah sakit dan toilet",
            "Bisa digunakan sebagai bahan pemutih industri (konsentrasi tinggi)"
        ],
        kemasan: "Drum 50 Kg / Drum 15 Kg"
    },
    {
        id: "tcca-tablet",
        nama: "TCCA 90% (Tablet)",
        gambar: "/assets/TrichloroisocyanuricAcid(TccaTabletBesar).jpeg",
        deskripsiSingkat: "Klorin murni bentuk tablet larut lambat untuk perawatan rutin kolam.",
        deskripsiLengkap: "TCCA 90% Tablet (biasanya berukuran besar 200 gram) dirancang khusus untuk melarut secara sangat lambat di dalam air. Tablet ini ditempatkan di dalam *chlorine feeder* atau keranjang skimmer kolam. Ini adalah solusi *maintenance* (perawatan rutin) yang paling bebas repot; tablet akan terus melepaskan klorin murni dalam dosis rendah secara konsisten selama berminggu-minggu, menjaga kebersihan air tanpa perlu takaran harian.",
        manfaat: [
            "Perawatan kolam renang otomatis dan bebas repot (Low maintenance)",
            "Pelepasan klorin yang lambat dan sangat stabil",
            "Bisa bertahan berhari-hari hingga berminggu-minggu (tergantung aliran air)",
            "Sangat ideal untuk *Dispenser* klorin otomatis terapung",
            "Melindungi kejernihan air saat kolam ditinggalkan untuk waktu lama"
        ],
        kemasan: "Drum 50 Kg (Isi Tablet)"
    },
    {
        id: "sodakue",
        nama: "Sodium Bikarbonat (Soda Kue)",
        gambar: "/assets/sodiumbicarbonate(sodakue).jpeg",
        deskripsiSingkat: "Digunakan luas sebagai bahan pengembang dalam adonan kue.",
        deskripsiLengkap: "Senyawa kimia dengan rumus NaHCO₃ yang tersusun dari ion natrium dan ion bikarbonat.",
        manfaat: [
            "Pengembang dalam adonan kue saat dipanaskan.",
            "Berfungsi meredakan gejala sakit maag, perut kembung, dan rasa panas di dada (heartburn).",
            "Bahan pembersih abrasif ringan atau penghilang bau tidak sedap."
        ],
        kemasan: "Zak 25 Kg"
    }
];

// 3. Script khusus untuk halaman detail-produk.html
document.addEventListener('DOMContentLoaded', () => {
    // Cek apakah kita sedang berada di halaman detail produk
    const productDetailContainer = document.getElementById('product-detail-container');
    
    if (productDetailContainer) {
        // Ambil ID produk dari URL, contoh: detail-produk.html?id=asam-humate
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Cari produk berdasarkan ID
        const product = products.find(p => p.id === productId);

        if (product) {
            // Update Title Halaman HTML
            document.title = `${product.nama} | Arkana Kimia`;
            
            // Handle gambar (convert to array if it's a string for backward compatibility)
            const images = Array.isArray(product.gambar) ? product.gambar : [product.gambar];
            
            // Format pesan WA khusus produk ini
            const waText = encodeURIComponent(`Halo Arkana Kimia, saya ingin memesan:\n\nNama :\nJenis barang yg di butuhkan : *${product.nama}*\nJumlah barang yg di butuhkan :\nAlamat kirim :`);
            const waLink = `https://wa.me/6282123616156?text=${waText}`;

            // Bangun list HTML untuk manfaat produk
            let manfaatHtml = '';
            product.manfaat.forEach(m => {
                manfaatHtml += `<li class="flex items-start mb-2"><svg class="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-gray-700">${m}</span></li>`;
            });

            // Generate thumbnails HTML
            let thumbnailsHtml = '';
            images.forEach((img, index) => {
                thumbnailsHtml += `
                    <button onclick="window.changeProductImage('${img}')" class="w-20 h-20 border-2 border-transparent hover:border-primary rounded-md overflow-hidden transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
                        <img src="${img}" alt="${product.nama} view ${index + 1}" class="w-full h-full object-cover">
                    </button>`;
            });

            // Isi template HTML dengan data produk
            productDetailContainer.innerHTML = `
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div class="flex flex-col md:flex-row">
                        <!-- Kolom Gambar -->
                        <div class="w-full md:w-5/12 bg-gray-100 p-8 flex flex-col items-center justify-center gap-4">
                            <div class="relative group w-full flex justify-center">
                                <img id="main-product-image" src="${images[0]}" alt="${product.nama}" class="max-w-full h-auto rounded-lg shadow-md object-cover transition transform duration-300 max-h-[500px]">
                            </div>
                            <div class="flex gap-2 overflow-x-auto pb-2">
                                ${thumbnailsHtml}
                            </div>
                        </div>
                        
                        <!-- Kolom Detail -->
                        <div class="w-full md:w-7/12 p-8 lg:p-12">
                            <div class="uppercase tracking-wide text-sm text-primary font-semibold mb-2">Katalog Bahan Kimia</div>
                            <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">${product.nama}</h1>
                            <p class="text-xl text-gray-600 mb-6 font-medium">${product.deskripsiSingkat}</p>
                            
                            <div class="prose prose-blue max-w-none text-gray-600 mb-8 leading-relaxed">
                                <p>${product.deskripsiLengkap}</p>
                            </div>

                            <div class="mb-8">
                                <h3 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Spesifikasi Kemasan</h3>
                                <div class="flex items-center text-gray-700">
                                    <svg class="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    <span class="font-medium text-lg">${product.kemasan}</span>
                                </div>
                            </div>

                            <div class="mb-10">
                                <h3 class="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Keunggulan & Aplikasi Utama</h3>
                                <ul>
                                    ${manfaatHtml}
                                </ul>
                            </div>

                            <div class="flex flex-col sm:flex-row gap-4 mt-8">
                                <a href="${waLink}" target="_blank" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-center transition flex items-center justify-center shadow-lg">
                                    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/></svg>
                                    Pesan via WhatsApp Sekarang
                                </a>
                                <a href="produk.html" class="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 font-bold py-4 px-6 rounded-lg text-center transition">
                                    Kembali ke Katalog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Jika ID produk tidak ditemukan di URL
            productDetailContainer.innerHTML = `
                <div class="text-center py-20 bg-white rounded-2xl shadow-xl">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h2>
                    <p class="text-gray-600 mb-8">Maaf, bahan kimia yang Anda cari tidak tersedia di katalog kami.</p>
                    <a href="produk.html" class="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition">Lihat Katalog Produk</a>
                </div>
            `;
        }
    }
});