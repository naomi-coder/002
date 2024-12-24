'use strict';

const openButtons = document.querySelectorAll('Button');  
const modal = document.getElementById('easyModal');
const modalHeader = document.querySelector('.modalHeader h2');
const modalText = document.querySelector('#modalTxt p');
const modalImg = document.querySelector('.modalImg');
const modalList = document.querySelector('.modalList ul');

if (openButtons.length > 0) {
  openButtons.forEach(button => {
      button.addEventListener('click', () => {
      const className = button.classList[0];  

            let newHeader, newText, newImage, newListItems;
          
          // クラス名に基づいて内容を変更
          if (className === 'modalButton') {
            newHeader = "寧夏夜市";  // 
            newText = "寧夏路夜市は台湾伝統の屋台料理やB級グルメがメインの夜市です。特に大同区の圓環付近には懐かしいグルメがたくさん集まっていますので、思う存分味わってください。また、ここの夜市は歩道と車道が分かれているので、食事やショッピングに便利です。食の夜市とも言われる寧夏路夜市には毎日、大勢の人々が訪れています。";
            newImage = "../taipei/images/pcModal1.png";
            newListItems = [
                "営業時間",
                "日曜日17:00 - 25:00",
                "月曜日17:00 - 25:00",
                "火曜日17:00 - 25:00",
                "水曜日17:00 - 25:00",
                "木曜日17:00 - 25:00",
                "金曜日17:00 - 25:00",
                "土曜日17:00 - 25:00"
            ];
        } else if (className === 'modalButton2') {
            newHeader = "饒河街観光夜市";
            newText = "饒河街観光夜市は、屋台料理から雑貨や生活用品も扱う夜市です。その手ごろな値段が魅力的で、多くの人々で賑わいます。最も観光客に人気があるのは「藥燉排骨」「胡椒餅」「水煎包」「蚵仔麵線」など行列ができる人気料理と、「麻辣臭豆腐」「牛肉麵」「天婦羅」など台湾の伝統的な屋台料理も定番です。";
            newImage = "../taipei/images/pcModal2.png";
            newListItems = [
                "営業時間",
                "日曜日17:00 - 23:00",
                "月曜日17:00 - 23:00",
                "火曜日17:00 - 23:00",
                "水曜日17:00 - 23:00",
                "木曜日17:00 - 23:00",
                "金曜日17:00 - 23:00",
                "土曜日17:00 - 23:00"
            ];
        } else if (className === 'modalButton3') {
            newHeader = "士林夜市";
            newText = "ここは市内で最も規模が大きく知名度の高い夜市で、台湾のおいしい屋台グルメからユニークな雑貨まで、ありとあらゆるものが売られています。その種類の豊富さ、敷地の広さ、歴史、そして夜遊びスポットとしての人気度と、士林夜市の魅力は何から何まで台北ナンバーワン。台北観光では絶対にはずせない魅惑スポットです。";
            newImage = "../taipei/images/pcModal3.png";
            newListItems = [
                "営業時間",
                "日曜日16:00 - 00:00",
                "月曜日16:00 - 00:00",
                "火曜日16:00 - 00:00",
                "水曜日16:00 - 00:00",
                "木曜日16:00 - 00:00",
                "金曜日16:00 - 00:00",
                "土曜日16:00 - 00:00"
            ];
        } else if (className === 'modalButton4') {
            newHeader = "通化夜市";
            newText = "台北の他の夜市と比べると小規模ではあるものの、食べ物においてはどの夜市にも決して劣りません。有名な駱記小炒(炒め物)、裕品元の氷火湯円、平価鉄板焼、通化夜市の揚げサツマイモボールは、ぜひとも賞味したい特色的な伝統軽食です。マッサージ店もたくさんあり、1日の終わりに最適な夜市です。";
            newImage = "../taipei/images/pcModal4.png";
            newListItems = [
                "営業時間",
                "日曜日18:00 - 24:00",
                "月曜日18:00 - 24:00",
                "火曜日18:00 - 24:00",
                "水曜日18:00 - 24:00",
                "木曜日18:00 - 24:00",
                "金曜日18:00 - 24:00",
                "土曜日18:00 - 24:00"
            ];
        }

         

          // モーダル内の要素を更新
          modalHeader.innerHTML = newHeader;
          modalText.innerHTML = newText;
          modalImg.src = newImage;

          // リストの内容を更新
          modalList.innerHTML = '';
          newListItems.forEach(item => {
              const li = document.createElement('li');
              li.textContent = item;
              modalList.appendChild(li);
          });

          // モーダルを表示
          modal.style.display = 'block';
      });
  });
} 



// モーダルを閉じるボタン
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // モーダルを非表示にする
});

// モーダルの外側をクリックしたら閉じる
window.onclick = function(event) {
    if (event.target === modal) { // モーダルの背景（外側）をクリックした場合
      modal.style.display = "none"; // モーダルを非表示
    }
}




  //ローディング画面を取得
  const loading = document.querySelector(".loading");
  //ページの読み込み完了時に処理を実行
  window.addEventListener("load", () => {
    //3秒後にローディング画面を非表示にする
    setTimeout(() => {
      loading.classList.add("loaded");
    }, 3000);
  });