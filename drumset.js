/**
 * Created by justinqassis on 2/1/17.
 **/

var buttonOne = document.getElementById('button1');
var buttonTwo = document.getElementById('button2');
var buttonThree = document.getElementById('button3');
var boomNoise = document.getElementById('boom');
var clapNoise = document.getElementById('clap');
var kickNoise  = document.getElementById('kick');

buttonOne.addEventListener('click', function () {
    boomNoise.play()
});
buttonTwo.addEventListener('click', function () {
    clapNoise.play()
});
buttonThree.addEventListener('click', function () {
    kickNoise.play()
});