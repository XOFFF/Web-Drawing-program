var defaultColor = 'black';
var color = defaultColor;
    
var colorInputFrame = document.getElementById('colorRange');

var setColor = function(){
    var color = colorInputFrame.value.toString();
    var text = document.getElementById("someText");
    context.fillStyle = color;
    context.strokeStyle = color;
    text.style.color = color;
}

colorInputFrame.addEventListener('input', setColor);


//var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
//for(var i=0, n=colors.length; i<n; i++){
//    var swatch = document.createElement('div');
//    swatch.className = 'swatch';
//    swatch.style.backgroundColor = colors[i];
//    swatch.addEventListener('click', setSwatch);
//    document.getElementById('colors').appendChild(swatch);
//}
//
//function setColor(color){
//    context.fillStyle = color;
//    context.strokeStyle = color;
//    var active = document.getElementsByClassName('active')[0];
//    if(active){
//        active.className = 'swatch';
//    }
//}
//
//function setSwatch(e){
//    //identify swatch
//    var swatch = e.target;
//    //set color
//    setColor(swatch.style.backgroundColor);
//    //give active class
//    swatch.className += ' active';
//}
//
//setSwatch({target: document.getElementsByClassName('swatch')[0]});