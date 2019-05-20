// Для мобильной версии
$(document).ready(function () {
    if(window.innerWidth < 850){
        $(".block").removeClass("mx-5");
        $(".block").addClass("mx-2");
        $(".block").removeClass("px-5");
        $(".block").addClass("px-3");
    }
});
