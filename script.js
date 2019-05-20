$(document).ready(function () {
  // Фиксирование точек начала анимации
  var target1 = $('.target1');
  var target2 = $('.target2');
  var target3 = $('.target3');
  var target4 = $('.target4');
  var target5 = $('.target5');
  // Отключение анимаций, если ширина монитора < 1000px
  if(window.innerWidth > 1000){
    var targetPos1 = target1.offset().top;
    var winHeight1 = $(window).height();
    var scrollToElem1 = targetPos1 - winHeight1;
    var targetPos2 = target2.offset().top;
    var winHeight2 = $(window).height();
    var scrollToElem2 = targetPos2 - winHeight2;
    var targetPos3 = target3.offset().top;
    var winHeight3 = $(window).height();
    var scrollToElem3 = targetPos3 - winHeight3;
    var targetPos4 = target4.offset().top;
    var winHeight4 = $(window).height();
    var scrollToElem4 = targetPos4 - winHeight4;
    var targetPos5 = target5.offset().top;
    var winHeight5 = $(window).height();
    var scrollToElem5 = targetPos5 - winHeight5;
    // Скрыли и показали при достижении метки
    $('.foto1').hide();
    $(window).scroll(function(){
        var winScrollTop1 = $(this).scrollTop();
        if(winScrollTop1 > scrollToElem1){
          $(".foto1").show(1000);
        }
    });
    $('.foto2').hide();
    $(window).scroll(function(){
        var winScrollTop2 = $(this).scrollTop();
        if(winScrollTop2 > scrollToElem2){
          $(".foto2").show(1000);
        }
    });
    $('.foto3').hide();
    $(window).scroll(function(){
        var winScrollTop3 = $(this).scrollTop();
        if(winScrollTop3 > scrollToElem3){
          $(".foto3").show(1000);
        }
    });
    $('.Block').hide();
    $(window).scroll(function(){
        var winScrollTop4 = $(this).scrollTop();
        if(winScrollTop4 > scrollToElem4){
          $(".Block").slideDown(1000);
        }
    });
    $('.form1').hide();
    $(window).scroll(function(){
        var winScrollTop5 = $(this).scrollTop();
        if(winScrollTop5 > scrollToElem5){
          $(".form1").slideDown(1000);
        }
    });
  }
  // Перемена блоков местами
    if(window.innerWidth < 993){
        $('#order1').addClass("order-1");
        $('#order2').addClass("order-2");
    }
    // Начальная анимация
    $("#firstBlock").hide();
    $("#firstBlock").slideDown(700);
    // уменьшение картинки при < 520px
    if(window.innerWidth < 520){
        $(".image-wrapper > img").attr("height", "180");
    }
});
// Уборка анимаций и прокрутка до формы
$(".order").click(function () {
  $(".foto1").show();
  $(".foto2").show();
  $(".foto3").show();
  $(".Block").show();
  $(".form1").show().delay(200);
});
