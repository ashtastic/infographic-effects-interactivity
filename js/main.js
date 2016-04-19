var $hOrangeEmotional = $('.l-horizontal-orange-emotional');
var $emotional = $('#emotional');
var $emotionalBox = $('.emotional-box')

var $hOrangeImpulsive = $('.l-horizontal-orange-impulsive');
var $impulsive = $('#impulsive');
var $impulsiveBox = $('.impulsive-box')

var $hOrangeCreative = $('.l-horizontal-orange-creative');
var $creative = $('#creative');
var $creativeBox = $('.creative-box')

var $hOrangeSound = $('.l-horizontal-orange-sound');
var $sound = $('#sound');
var $soundBox = $('.sound-box')

var $hOrangeIntuitive = $('.l-horizontal-orange-intuitive');
var $intuitive = $('#intuitive');
var $intuitiveBox = $('.intuitive-box')

var $hOrangePsychic = $('.l-horizontal-orange-psychic');
var $psychic = $('#psychic');
var $psychicBox = $('.psychic-box')

var $hBluePlanner = $('.l-horizontal-blue-planner');
var $planner = $('#planner');
var $plannerBox = $('.planner-box')

var $hBlueRealistic = $('.l-horizontal-blue-realistic');
var $realistic = $('#realistic');
var $realisticBox = $('.realistic-box')

var $hBlueCritic = $('.l-horizontal-blue-critic');
var $critic = $('#critic');
var $criticBox = $('.critic-box')

var $hBlueLogical = $('.l-horizontal-blue-logical');
var $logical = $('#logical');
var $logicalBox = $('.logical-box')

var $hBlueRational = $('.l-horizontal-blue-rational');
var $rational = $('#rational');
var $rationalBox = $('.rational-box')

var $hBluePrecise = $('.l-horizontal-blue-precise');
var $precise = $('#precise');
var $preciseBox = $('.precise-box')

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
