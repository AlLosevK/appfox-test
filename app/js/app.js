$(document).ready(function () {
  $(".faq__item-a").hide();

  $(".faq__item-q").click(function () {
    $(".faq__item-a").hide();
    $(this).next(".faq__item-a").show();
  });
});
