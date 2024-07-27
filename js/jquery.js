// 当該jsの読み込みの可否
console.log("jquery.js読み込みログ")

// 題名のアニメーション等
$(document).ready(function() {
    $('#main-title').css('color', '#ff5722'); 
    $('#main-title').css({
        'transition': 'color 6s',
        'transform': 'scale(1.2)',
        'color': '#0086f9' 
    });
});
// 未開発のボタンのアラート
$(document).ready(function() {
    $('.unfind').click(function(event) {
        event.preventDefault(); 
        alert("未開発です");
    });
});
// test
$(document).ready(function() {
    $('#zoomButton').click(function(event) {
        $('html, body').animate({
            scrollTop: $('#targetTopic').offset().top
        }, 500, function() {
            $('#targetTopic').css({
                'transform': 'scale(1.14)',
                'transform-origin': 'top left' 
            });
        });
    });

    $('#resetButton').click(function(event) {
        $('#targetTopic').css('transform', 'scale(1)');
    });
});