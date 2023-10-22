const wordList = [
    {
        word: "gitar",
        hint: "Alat musik dengan benang."
    },
    {
        word: "oksigen",
        hint: "Gas tidak berwarna dan tidak berbau yang penting bagi kehidupan."
    },
    {
        word: "gunung",
        hint: " permukaan bumi yang sangat tinggi."
    },
    {
        word: "lukisan",
        hint: "Suatu bentuk seni yang menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "studi ilmiah tentang benda dan fenomena langit ."
    },
    {
        word: "football",
        hint: "Olahraga populer yang dimainkan dengan bola berbentuk oval."
    },
    {
        word: "cokelat",
        hint: "Camilan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu kupu",
        hint: "Serangga dengan sayap berwarna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari alas bulat pipih dengan topping daging, keju, saos."
    },
    {
        word: "jazz",
        hint: "Genre musik yang bercirikan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Perangkat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "diamond",
        hint: "Batu permata berharga yang terkenal karena kecemerlangan dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang mengasyikkan atau berani."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alam."
    },
    {
        word: "sepeda",
        hint: "Kendaraan bertenaga manusia dengan dua roda."
    },
    {
        word: "sunset",
        hint: "Hilangnya matahari setiap hari di bawah cakrawala."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein populer yang terbuat dari biji kopi panggang."
    },
    {
        word: "menari",
        hint: "Gerakan tubuh yang berirama sering dilakukan diiringi musik."
    },
    {
        word: "galaxy",
        hint: "Sistem luas yang terdiri dari bintang, gas, dan debu yang disatukan oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Sekelompok besar musisi memainkan berbagai alat musik."
    },
    {
        word: "gunung berapi",
        hint: "Gunung atau bukit dengan lubang tempat keluarnya lava, pecahan batu, uap panas, dan gas."
    },
    {
        word: "novel",
        hint: "Sebuah karya fiksi yang panjang, biasanya dengan alur dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "simfoni",
        hint: "Komposisi musik yang panjang untuk orkestra lengkap, biasanya dalam beberapa gerakan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tarian klasik yang bercirikan gerakan tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Seseorang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan ilmu pengetahuan untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh pemantulan, pembiasan, dan dispersi cahaya."
    },
    {
        word: "alam semesta",
        hint: "Semua materi, ruang, dan waktu yang ada secara keseluruhan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts sehingga menyebabkan palu memukul senarnya."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang dikhususkan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan lebat yang ditandai dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Gedung atau area luar ruangan tempat pertunjukan drama, film, atau pertunjukan lainnya dipentaskan."
    },
    {
        word: "telepon",
        hint: "Perangkat yang digunakan untuk mengirimkan suara dalam jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Suatu sistem komunikasi yang terdiri dari word-word, gerak tubuh, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah tandus atau gersang dengan sedikit atau tanpa curah hujan."
    },
    {
        word: "bunga matahari",
        hint: "Tanaman tinggi dengan kepala bunga kuning besar."
    },
    {
        word: "fantasi",
        hint: "Sebuah genre fiksi imajinatif yang melibatkan unsur sihir dan supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat optik yang digunakan untuk melihat objek jauh di luar angkasa."
    },
    {
        word: "angin",
        hint: "Angin yang lembut."
    },
    {
        word: "oasis",
        hint: "Tempat subur di gurun tempat ditemukannya air."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik membuat gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat aslinya."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak menghasilkan cahayanya sendiri."
    },
    {
        word: "sungai",
        hint: "Aliran air alami yang besar mengalir dalam saluran menuju laut, danau, atau aliran sejenis lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di wilayah antara Tropic of Cancer dan Tropic of Capricorn."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "teka-teki",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan atau situasi yang bertentangan atau bertentangan dengan intuisi."
    },
    {
        word:"teka teki ",
        hint: "Permainan, mainan, atau soal yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "berbisik",
        hint: "Berbicara dengan sangat lembut atau pelan, sering kali secara rahasia."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh suatu benda yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disembunyikan atau tidak diketahui orang lain."
    },
    {
        word: "rasa ingin tahu",
        hint: "Keinginan yang kuat untuk mengetahui atau mempelajari sesuatu."
    },
    {
        word: "masa depan lu",
        hint: "Tidak dapat diramalkan atau diketahui sebelumnya 'ini susah banget wkwkwwkwkw'."
    },
    {
        word: "mengaburkan",
        hint: "membingungkan seseorang, membuat sesuatu menjadi tidak jelas atau sulit dimengerti."
    },
    {
        word: "mengungkapkan",
        hint: "Untuk memberitahukan atau mengungkapkan sesuatu yang sebelumnya rahasia atau tidak diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan yang salah; penampilan atau kesan yang menipu."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan sentimental atau kasih sayang yang menyedihkan terhadap masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat pintar, berbakat, atau mengesankan."
    },
];