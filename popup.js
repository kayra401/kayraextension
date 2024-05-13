document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "Başarı tesadüf değildir.",
        "Sabır, acının en iyi ilacıdır.",
        "Bilgi güçtür.",
        "Azim, başarının anahtarıdır.",
        "Başarısızlık, başarının temelidir.",
        "Hayaller gerçek olabilir.",
        "Zaman her şeyin ilacıdır.",
        "Düşünmek için zaman ayır.",
        "Yapabileceğine inan.",
        "Hata yapmaktan korkma.",
        "Her son, yeni bir başlangıçtır.",
        "Zorluklar, fırsatlardır.",
        "Yarın için bugün hazırlan.",
        "Yenilgiden ders al.",
        "Az konuş, çok dinle.",
        "Her günü değerli kıl.",
        "İyimser ol, olumlu düşün.",
        "Önce kendine inan.",
        "İşini sev, başarıyı yakala.",
        "Tekrar tekrar denemekten vazgeçme."
        // Daha fazla atasözü ekleyebilirsiniz.
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});