// 網頁的主程式寫在這裡

$(".navbar .nav-link").click(function () {
    // 印出當下被使用者所點到的按鈕 <a class="nav-link" href=.....>
    console.log(this);
    // 點到後要去到的目標 (目標是href屬性的值, 像是 #introSection), 並存在一個變數裡
    const target = $(this).attr("href");
    // 印出 "移動目標＋target變數"
    console.log("移動目標", target);
    // 取得目標的座標,並存在一個變數裡
    const position = $(target).offset().top;
    // 印出 "座標＋position變數"
    console.log("座標", position);
    // 用jQuery的animate函數執行動畫
    $("html,body").stop().animate({
        scrollTop: position
    }, 1000);

    // Ｍenu選單收合起來
    $('.navbar-collapse').collapse('hide');
})


