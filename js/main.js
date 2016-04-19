var $hOrangeEmotional = $('.l-horizontal-orange-emotional, .xl-horizontal-orange-emotional');
var $emotional = $('#emotional');
var $emotionalBox = $('.emotional-box');

var $hOrangeImpulsive = $('.l-horizontal-orange-impulsive, .xl-horizontal-orange-impulsive');
var $impulsive = $('#impulsive');
var $impulsiveBox = $('.impulsive-box');

var $hOrangeCreative = $('.l-horizontal-orange-creative, .xl-horizontal-orange-creative');
var $creative = $('#creative');
var $creativeBox = $('.creative-box');

var $hOrangeSound = $('.l-horizontal-orange-sound, .xl-horizontal-orange-sound');
var $sound = $('#sound');
var $soundBox = $('.sound-box');

var $hOrangeIntuitive = $('.l-horizontal-orange-intuitive, .xl-horizontal-orange-intuitive');
var $intuitive = $('#intuitive');
var $intuitiveBox = $('.intuitive-box');

var $hOrangePsychic = $('.l-horizontal-orange-psychic, .xl-horizontal-orange-psychic');
var $psychic = $('#psychic');
var $psychicBox = $('.psychic-box');

var $hBluePlanner = $('.l-horizontal-blue-planner, .xl-horizontal-blue-planner');
var $planner = $('#planner');
var $plannerBox = $('.planner-box');

var $hBlueRealistic = $('.l-horizontal-blue-realistic, .xl-horizontal-blue-realistic');
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
  if ($hOrangeEmotional.hasClass('grow')) {
    $hOrangeEmotional.removeClass('grow').css('transition-delay', '100ms');
    $emotionalBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangeEmotional.css('transition-delay', '0ms').addClass('grow');
    $emotionalBox.css('transition-delay', '420ms').addClass('show');
  }
});

$impulsive.on('click', function () {
  if ($hOrangeImpulsive.hasClass('grow')) {
    $hOrangeImpulsive.removeClass('grow').css('transition-delay', '100ms');
    $impulsiveBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangeImpulsive.css('transition-delay', '0ms').addClass('grow');
    $impulsiveBox.css('transition-delay', '420ms').addClass('show');
  }
});

$creative.on('click', function () {
  if ($hOrangeCreative.hasClass('grow')) {
    $hOrangeCreative.removeClass('grow').css('transition-delay', '100ms');
    $creativeBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangeCreative.css('transition-delay', '0ms').addClass('grow');
    $creativeBox.css('transition-delay', '420ms').addClass('show');
  }
});

$sound.on('click', function () {
  if ($hOrangeSound.hasClass('grow')) {
    $hOrangeSound.removeClass('grow').css('transition-delay', '100ms');
    $soundBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangeSound.css('transition-delay', '0ms').addClass('grow');
    $soundBox.css('transition-delay', '420ms').addClass('show');
  }
});

$intuitive.on('click', function () {
  if ($hOrangeIntuitive.hasClass('grow')) {
    $hOrangeIntuitive.removeClass('grow').css('transition-delay', '100ms');
    $intuitiveBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangeIntuitive.css('transition-delay', '0ms').addClass('grow');
    $intuitiveBox.css('transition-delay', '420ms').addClass('show');
  }
});

$psychic.on('click', function () {
  if ($hOrangePsychic.hasClass('grow')) {
    $hOrangePsychic.removeClass('grow').css('transition-delay', '100ms');
    $psychicBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hOrangePsychic.css('transition-delay', '0ms').addClass('grow');
    $psychicBox.css('transition-delay', '420ms').addClass('show');
  }
});

$planner.on('click', function () {
  if ($hBluePlanner.hasClass('grow')) {
    $hBluePlanner.removeClass('grow').css('transition-delay', '100ms');
    $plannerBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBluePlanner.css('transition-delay', '0ms').addClass('grow');
    $plannerBox.css('transition-delay', '420ms').addClass('show');
  }
});

$realistic.on('click', function () {
  if ($hBlueRealistic.hasClass('grow')) {
    $hBlueRealistic.removeClass('grow').css('transition-delay', '100ms');
    $realisticBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBlueRealistic.css('transition-delay', '0ms').addClass('grow');
    $realisticBox.css('transition-delay', '420ms').addClass('show');
  }
});

$critic.on('click', function () {
  if ($hBlueCritic.hasClass('grow')) {
    $hBlueCritic.removeClass('grow').css('transition-delay', '100ms');
    $criticBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBlueCritic.css('transition-delay', '0ms').addClass('grow');
    $criticBox.css('transition-delay', '420ms').addClass('show');
  }
});

$logical.on('click', function () {
  if ($hBlueLogical.hasClass('grow')) {
    $hBlueLogical.removeClass('grow').css('transition-delay', '100ms');
    $logicalBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBlueLogical.css('transition-delay', '0ms').addClass('grow');
    $logicalBox.css('transition-delay', '420ms').addClass('show');
  }
});

$rational.on('click', function () {
  if ($hBlueRational.hasClass('grow')) {
    $hBlueRational.removeClass('grow').css('transition-delay', '100ms');
    $rationalBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBlueRational.css('transition-delay', '0ms').addClass('grow');
    $rationalBox.css('transition-delay', '420ms').addClass('show');
  }
});

$precise.on('click', function () {
  if ($hBluePrecise.hasClass('grow')) {
    $hBluePrecise.removeClass('grow').css('transition-delay', '100ms');
    $preciseBox.removeClass('show').css('transition-delay', '0ms');
  } else {
    $hBluePrecise.css('transition-delay', '0ms').addClass('grow');
    $preciseBox.css('transition-delay', '420ms').addClass('show');
  }
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
