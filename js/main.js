var $hOrangeEmotional = $('.l-horizontal-orange-emotional');
var $emotional = $('#emotional');
var $emotionalBox = $('.emotional-box');

var $hOrangeImpulsive = $('.l-horizontal-orange-impulsive');
var $impulsive = $('#impulsive');
var $impulsiveBox = $('.impulsive-box');

var $hOrangeCreative = $('.l-horizontal-orange-creative');
var $creative = $('#creative');
var $creativeBox = $('.creative-box');

var $hOrangeSound = $('.l-horizontal-orange-sound');
var $sound = $('#sound');
var $soundBox = $('.sound-box');

var $hOrangeIntuitive = $('.l-horizontal-orange-intuitive');
var $intuitive = $('#intuitive');
var $intuitiveBox = $('.intuitive-box');

var $hOrangePsychic = $('.l-horizontal-orange-psychic');
var $psychic = $('#psychic');
var $psychicBox = $('.psychic-box');

var $hBluePlanner = $('.l-horizontal-blue-planner');
var $planner = $('#planner');
var $plannerBox = $('.planner-box');

var $hBlueRealistic = $('.l-horizontal-blue-realistic');
var $realistic = $('#realistic');
var $realisticBox = $('.realistic-box');

var $hBlueCritic = $('.l-horizontal-blue-critic');
var $critic = $('#critic');
var $criticBox = $('.critic-box');

var $hBlueLogical = $('.l-horizontal-blue-logical');
var $logical = $('#logical');
var $logicalBox = $('.logical-box');

var $hBlueRational = $('.l-horizontal-blue-rational');
var $rational = $('#rational');
var $rationalBox = $('.rational-box');

var $hBluePrecise = $('.l-horizontal-blue-precise');
var $precise = $('#precise');
var $preciseBox = $('.precise-box');

var $lbBox1 = $('.lb-box-1');
var $lbBox2 = $('.lb-box-2');
var $lbBox3 = $('.lb-box-3');
var $lbBox4 = $('.lb-box-4');
var $lbBox5 = $('.lb-box-5');
var $lbBox6 = $('.lb-box-6');

var $rbBox1 = $('.rb-box-1');
var $rbBox2 = $('.rb-box-2');
var $rbBox3 = $('.rb-box-3');
var $rbBox4 = $('.rb-box-4');
var $rbBox5 = $('.rb-box-5');
var $rbBox6 = $('.rb-box-6');

$emotional.on('click', function () {
  $hOrangeEmotional.toggleClass('grow');
  $emotionalBox.toggleClass('show');
});

$impulsive.on('click', function () {
  $hOrangeImpulsive.toggleClass('grow');
  $impulsiveBox.toggleClass('show');
});

$creative.on('click', function () {
  $hOrangeCreative.toggleClass('grow');
  $creativeBox.toggleClass('show');
});

$sound.on('click', function () {
  $hOrangeSound.toggleClass('grow');
  $soundBox.toggleClass('show');
});

$intuitive.on('click', function () {
  $hOrangeIntuitive.toggleClass('grow');
  $intuitiveBox.toggleClass('show');
});

$psychic.on('click', function () {
  $hOrangePsychic.toggleClass('grow');
  $psychicBox.toggleClass('show');
});

$planner.on('click', function () {
  $hBluePlanner.toggleClass('grow');
  $plannerBox.toggleClass('show');
});

$realistic.on('click', function () {
  $hBlueRealistic.toggleClass('grow');
  $realisticBox.toggleClass('show');
});

$critic.on('click', function () {
  $hBlueCritic.toggleClass('grow');
  $criticBox.toggleClass('show');
});

$logical.on('click', function () {
  $hBlueLogical.toggleClass('grow');
  $logicalBox.toggleClass('show');
});

$rational.on('click', function () {
  $hBlueRational.toggleClass('grow');
  $rationalBox.toggleClass('show');
});

$precise.on('click', function () {
  $hBluePrecise.toggleClass('grow');
  $preciseBox.toggleClass('show');
});

$lbBox1.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox1.addClass('js-svg-animate');
  } else {
    $lbBox1.removeClass('js-svg-animate');
  }
}, {offset: '75%'});

$lbBox2.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox2.addClass('js-svg-animate');
  } else {
    $lbBox2.removeClass('js-svg-animate');
  }
}, {offset: '70%'});

$lbBox3.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox3.addClass('js-svg-animate');
  } else {
    $lbBox3.removeClass('js-svg-animate');
  }
}, {offset: '65%'});

$lbBox4.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox4.addClass('js-svg-animate');
  } else {
    $lbBox4.removeClass('js-svg-animate');
  }
}, {offset: '73%'});

$lbBox5.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox5.addClass('js-svg-animate');
  } else {
    $lbBox5.removeClass('js-svg-animate');
  }
}, {offset: '68%'});

$lbBox6.waypoint(function (direction) {
  if (direction == 'down') {
    $lbBox6.addClass('js-svg-animate');
  } else {
    $lbBox6.removeClass('js-svg-animate');
  }
}, {offset: '63%'});

$rbBox1.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox1.addClass('js-svg-animate');
  } else {
    $rbBox1.removeClass('js-svg-animate');
  }
}, {offset: '63%'});

$rbBox2.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox2.addClass('js-svg-animate');
  } else {
    $rbBox2.removeClass('js-svg-animate');
  }
}, {offset: '68%'});

$rbBox3.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox3.addClass('js-svg-animate');
  } else {
    $rbBox3.removeClass('js-svg-animate');
  }
}, {offset: '73%'});

$rbBox4.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox4.addClass('js-svg-animate');
  } else {
    $rbBox4.removeClass('js-svg-animate');
  }
}, {offset: '65%'});

$rbBox5.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox5.addClass('js-svg-animate');
  } else {
    $rbBox5.removeClass('js-svg-animate');
  }
}, {offset: '70%'});

$rbBox6.waypoint(function (direction) {
  if (direction == 'down') {
    $rbBox6.addClass('js-svg-animate');
  } else {
    $rbBox6.removeClass('js-svg-animate');
  }
}, {offset: '75%'});
