// red button function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// blue button functon
const blueButton = document.getElementById( 'make-blue' );
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// handle event using anonymous function
const makeAquamarine = document.getElementById( 'make-aquamarine' );
console.log( makeAquamarine );
// annomious function
makeAquamarine.onclick = function () {
    document.body.style.backgroundColor = 'aquamarine';
}
// handle by using add eventlisenter
const makeDeepPink = document.getElementById( 'make-deepPink' );
makeDeepPink.addEventListener( 'click', makeColorDeepPink );
function makeColorDeepPink() {
    document.body.style.backgroundColor = 'deepPink';
}
// addEventListener
const makeCornflowerBlue = document.getElementById( 'make-cornflowerBlue' );
makeCornflowerBlue.addEventListener( 'click', function () {
    document.body.style.backgroundColor = 'cornflowerBlue';
} )
// direct shortcut
document.getElementById( 'make-coral' ).addEventListener( 'click', function () {
    document.body.style.backgroundColor = 'coral';
} )