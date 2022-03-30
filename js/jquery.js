//로딩화면 제작
$(window).load(function(){
  $(".loading-container").fadeOut();
  $("body").css("background", "white")
  $("#home").fadeIn();
  if($(window).outerHeight(true)>$(".container").outerHeight(true))
  $("#home").css("height",$(window).outerHeight(true))
  else
  $("#home").css("height",$(".container").innerHeight)
});
$(window).resize(function (){
  if($(window).outerHeight(true)>$(".container").outerHeight(true))
  $("#home").css("height",$(window).outerHeight(true))
  else
  $("#home").css("height",$(".container").innerHeight)
})

var page = 1;
(function ($) {
  $.fn.hasHorizontalScrollBar = function () {
    return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
  };
})(jQuery);
if (!$("#element").hasHorizontalScrollBar()) {
  //가로 스크롤 바가 없을때
  $("#enters").append(
    "<h1>Page " +
      page +
      "</h1><BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~"
  );
}

$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $("#enters").append(
      "<h1>Page " +
        page +
        "</h1><BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~<BR/>So<BR/>MANY<BR/>BRS<BR/>YEAHHH~"
    );
  }
});
