/**
 * Created by justinqassis on 2/1/17.
 **/

var boomButton = document.getElementById('boom-button');
var clapButton = document.getElementById('clap-button');
var kickButton = document.getElementById('kick-button');
var boomNoise = document.getElementById('boom');
var clapNoise = document.getElementById('clap');
var kickNoise  = document.getElementById('kick');



boomButton.addEventListener('mouseenter', function () {
  boomNoise.play()
});
clapButton.addEventListener('mouseenter', function () {
  clapNoise.play()
});

kickButton.addEventListener('mouseenter', function () {
  kickNoise.play()
});
boomButton.addEventListener('click', function () {
  boomNoise.play()
});
clapButton.addEventListener('click', function () {
  clapNoise.play()
});
kickButton.addEventListener('click', function () {
  kickNoise.play()
});
