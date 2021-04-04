var radiusSize = document.getElementById('radval');
var radiusBrush = document.getElementById('radiusRange');

var defaultRadSize = 20;

var moveRadSize = function(){
    console.log('size changing');
    radiusSize.value = document.getElementById('radiusRange').value.toString();
    radius = radiusSize.value;
    context.lineWidth = radiusSize.value * 2;
    
//    radiusSize.innerHTML = radius;
}
var enterToSetRadSize = function(){
    console.log('hey');
    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 13 && document.hasFocus(radiusSize) == true){
            // change text size
            radiusBrush.value = radiusSize.value;
            moveRadSize();
        }
    });
}
radiusBrush.addEventListener('input', moveRadSize);
radiusSize.addEventListener('focus', enterToSetRadSize);

var startWebsite = true;

if(startWebsite == true){
    radiusBrush.value = radiusSize.value;
    moveRadSize();
    startWebsite = false;
}


//function setDefaultRadSize(){
//    var once = true;
//    if(once == true){
//        moveRadSize();
//        once = false;
//    }
//}

//var setRadius = function(newRadius){
//    if(newRadius<minRad)
//        newRadius = minRad;
//    else if(newRadius>maxRad)
//        newRadius = maxRad;
//    radius = newRadius;
//    context.lineWidth = radius*2;
//    
//    radSpan.innerHTML = radius;
//}
//
//
//var minRad = 0.5,
//    maxRad = 100,
//    defaultRad = 20,
//    interval = 5,
//    radSpan = document.getElementById('radval'),
//    decRad = document.getElementById('decrad'),
//    incRad = document.getElementById('incrad');
//
//decRad.addEventListener('click', function(){
//    setRadius(radius-interval);
//});
//incRad.addEventListener('click', function(){
//    if(radius == minRad)
//        radius = 0;
//    setRadius(radius+interval);
//});
//
//setRadius(defaultRad);