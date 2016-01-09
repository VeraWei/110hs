(function () {
  var $details = $('.details');
  var $example = $('.example');
  init();
  $('.time-start').on('click', function  () {
    var myDate = new Date();
    var currentTime = myDate.toLocaleString();
    $example.TimeCircles().start();
  });
  $('.time-stop').on('click', function  () {
    var myDate = new Date();
    var currentTime = myDate.toLocaleString();
    $example.TimeCircles().stop();
  });
  function init() {
    $example.TimeCircles({
      start: false
    });
  };
})(this);