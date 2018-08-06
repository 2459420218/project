


$(function(){

    $(".daceng").load("../../page/mine/mine.html");



    //切换
    $(".my").click(function() {
        $(".daceng").load($(this).data("page"));
    })
    $(".guan").click(function() {
        $(".daceng").load($(this).data("page"));
    })
    $(".find").click(function() {
        $(".daceng").load($(this).data("page"));
    })
    $(".bofang-right1").click(function() {
        $(".zhuye").load($(this).data("page"));
    })
    // $(".bofang").click(function() {
    //     $("#quanye").load($(this).data("page"));
    // })
    // $(".zanting").click(function() {
    //     $("#quanye").load($(this).data("page"));
    // })

})