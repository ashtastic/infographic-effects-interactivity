var $psychicBox = $('.psychic-box');
var $preciseBox = $('.precise-box');
var $intuitiveBox = $ ('.intuitive-box');
var $rationalBox = $('.rational-box');
var $soundBox = $('.sound-box');
var $logicalBox = $('.logical-box');
var $creativeBox = $('.creative-box');
var $musicBox = $('.music-box');
var $impulsiveBox = $('.impulsive-box');
var $realisticBox = $('.realistic-box');
var $emotionalBox = $('.emotional-box');
var $plannerBox = $('.planner-box');

$dino1.waypoint(function (direction) {
  if (direction == 'down') {
    $psychicBox.addClass('js-svg-animate');
  } else {
    $dino1.removeClass('js-svg-animate');
  }
}, { offset: '25%'});
