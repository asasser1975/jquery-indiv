jQuery(document).ready(function() {
  var tags = ["h1", "p", "img"];

  tags.forEach(function(tag) {
  //debugger;
    $(tag).click(function() {
      alert("This is a " + tag + ".");
    });
  });

  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });

  $(".clickable").click(function() {
    $("#show-image").toggle();
    $("#hide-image").toggle();
  });
});
