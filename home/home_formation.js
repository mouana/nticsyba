$(document).ready(function () {
  $(".itemfirst").click(function () {
    var big = $(this).closest(".gallery").find(".big");
    var tempBigHTML = big.html();
    var tempItemHTML = $(this).html();
    if ($(this).is(big)) {
      big.html($(".big-item-0").html());
      $(this).html(tempBigHTML);
      $(this).find(".item-text").removeClass("active_text ");
    } else {
      big.html(tempItemHTML);
      $(this).html(tempBigHTML);
      $(".item-text").removeClass("active_text ");
      big.find(".item-text").addClass("active_text ");
    }
  });
});
