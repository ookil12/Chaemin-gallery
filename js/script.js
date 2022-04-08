var isshowed = 0;
function showWarning() {
  $("#contents").animate({ opacity: "0.1" }, 1000);
  $("#warning").animate({ opacity: "0.99" }, 1000, function () {
    isshowed = 1;
  });
}
function hideWarning() {
  if (isshowed == 1) {
    $("#contents").animate({ opacity: "0.99" }, 1000);
    $("#warning").animate({ opacity: "0" }, 1000);
    isshowed = 0;
  }
}
function showWarning1() {
  $("#contents").animate({ opacity: "0" }, 1000);
  $("#warningsize").animate({ opacity: "0.99" }, 1000);
}
function hideWarning1() {
  $("#contents").animate({ opacity: "0.99" }, 1000);
  $("#warningsize").animate({ opacity: "0" }, 1000);
}
$(document).ready(function () {
  if ($(window).width() <= 1900) {
    console.log("small");
    showWarning1();
  } else {
    console.log("big");
    hideWarning1();
  }
});
$(window).resize(function () {
  if ($(window).width() <= 1900) {
    showWarning1();
  } else {
    hideWarning1();
  }
});
