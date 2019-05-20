// Мобильная версия
$(document).ready(function () {
    if(window.innerWidth < 960){
        $("#short").removeClass("mx-5");
        $("#short").addClass("mx-2");
    }
    if(window.innerWidth < 800){
        $("#map").empty();
        $("#map").append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afe4da413e83a5e32e20bb6ec66d2b4acddb92cbcaed871a8fa883c3c8c3464e1&amp;width=320&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>');
        $("#contact").removeClass("px-5");
        $("#contact").addClass("px-3");
    }
});
