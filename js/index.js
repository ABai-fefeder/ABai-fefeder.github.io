$(document).ready(function () {

  $(".back a").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 600);
  });

  $('#icon').hover(function () {
    // over
    $(this).addClass("animate__animated animate__flash");
  }, function () {
    // out
    $(this).removeClass("animate__animated animate__flash");
  }


  );

  $('.card').hover(function () {
    // over
    $(this).addClass('animate__animated animate__pulse');
  }, function () {
    // out
    $(this).removeClass('animate__animated animate__pulse');
  }
  );

  $('.nav-link').hover(function () {
    // over
    $(this).addClass("animate__animated animate__jello");
  }, function () {
    // out
    $(this).removeClass("animate__animated animate__jello");
  }
  );



});

var icon = document.getElementById("icon")
icon.onclick = function () {
  document.body.classList.toggle("dark-mode")
}