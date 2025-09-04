const introTexts = {
    hobby: `趣味：<a href="https://www.japanpadel.com/charm-2/" target="_blank" rel="noopener noreferrer" style="color:#ff8800; text-decoration: underline;">パデル</a>。皆さんパデルとはご存じでしょうか？簡単に言いますとテニスとスカッシュが混ざったスポーツです。環境やルールとしてはテニスに近いですが、壁を利用する部分がスカッシュの要素が入った特徴を持っています。`,
    skill: `特技：<a href="https://www.usopen.org/index.html" target="_blank" rel="noopener noreferrer" style="color:#ff8800; text-decoration: underline;">テニス</a>。私は幼いころからテニスを続けてきました。右の写真はテニスで活躍した時の写真です。何位だったかは覚えていませんが、全国大会にも出場したことがあります。もしテニスにご興味がある方がいましたら、一緒にやりましょう！`,
    anime: `<a href="https://abema.tv/video/title/149-11" target="_blank" rel="noopener noreferrer" style="color:#ff8800; text-decoration: underline;">おすすめアニメ</a>。私の特に好きなアニメをご紹介していきたいと思います。このアニメは「無職転生」というアニメでご存じの方も多いとは思いますが、名前の通り転生もののアニメです。見どころはたくさんありますが、百聞は一見に如かずと言葉があるよう上のサイトからでもご覧いただき一緒に語り合いましょう！`
};

// 全て見たら次に行く
window.addEventListener("DOMContentLoaded", () => {
    // HTMLの指定したものをすべて取ってくる「趣味」「特技」「アニメ」って書いてある場所
    const listItems = document.querySelectorAll("#intro-list li");
    // 指定したidを取得
    const introParagraph = document.getElementById("intro-text");
    // forEachでitemを一つずつ見てる
    listItems.forEach(item => {
        // ３つの項目がクリックされたら
        item.addEventListener("click", () => {
            // keyの中に３つのうちのどれかを入れる
            const key = item.getAttribute("data-key");
            // introtextの箱にkeyがあったら（introparagraph）説明が出る欄に説明が見えるように入れる
            if (introTexts[key]) {
                introParagraph.innerHTML = introTexts[key];
            }
        });
    });
});
