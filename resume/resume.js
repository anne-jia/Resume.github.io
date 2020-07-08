// 设置高度自适应



$(document).ready(function(){
    $(".left").height($(window).innerHeight());
    $(".right").height($(window).innerHeight());
    if($(window).innerWidth()<576){
    }
})

console.log($("#v-pills-about").height(),$("#v-pills-skill").height())
