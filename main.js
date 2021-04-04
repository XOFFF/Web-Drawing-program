var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 20;
var dragging = false;

//var squareButton = document.getElementById('square');
//var circleButton = document.getElementById('circle');

//window.onload = startup;
//			var ballX = 400;
//			var ballY = 400;
//			var mouseX = 0;
//			var mouseY = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = 'black';

//context.font = '48px sans-serif';
//context.fillText('Hello world', 100, 200);

//window.onload = fillAll;
//
//var fillAll = function(){
//    context.fillStyle = "blue";
//    context.fillRect(0, 0, canvas.width, canvas.height);
//}

//// mute or not
window.onresize = function(){
    var image = context.getImageData(0,0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.putImageData(image, 0,0);
    context.lineWidth = radius*2; //
    setColor();
//    setSwatch({target: document.getElementsByClassName('active')[0]});
}

function clearCanvas(canvas){
    canvas.width = canvas.width;
    context.lineWidth = radius*2;
}

//context.lineWidth = radius*2;



var putPoint = function(e){
    if (dragging && circleButton.className == 'brushType act'){ 
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }else if(dragging && squareButton.className == 'brushType act'){
        //      Pythagorean theorem
//        var leg = radius*2;
//        var hypotenuse = Math.sqrt(Math.pow(leg, 2)*2);
//        context.lineWidth = radius*2;
        
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.rect(e.clientX-radius, e.clientY-radius, radius*2, radius*2);//
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}




//function startup() {
//    canvas.onmousemove = mouseMove;
//    setInterval("moveBall()",0);
//}
//
//function mouseMove(e) {
//    mouseX = e.clientX;
//    mouseY = e.clientY;
//}
//
//function moveBall() {
//    if(dragging == false){
//        var image = context.getImageData(0,0, canvas.width, canvas.height);
//    //    canvas.width = window.innerWidth;
//    //    canvas.height = window.innerHeight;
//
//        ballX = mouseX;
//        ballY = mouseY;
//
//        
//
//        context.clearRect(0, 0, canvas.width, canvas.height);
//        context.putImageData(image, 0,0);
//
//    //    context.arc(ballX, ballY, radius, 0, 2* Math.PI);
//    //    context.fillStyle = "white";
//    //    context.fill();
//    //    context.lineWidth = 1;
//    ////    context.strokeStyle = "white";
//    //    context.stroke();
//
//    //    clearCanvas(canvas);
//
//        context.beginPath();
//        context.arc(ballX, ballY, radius, 0, 2* Math.PI);
//    //    context.fillStyle = "green";
//        context.fill();
//    //    context.lineWidth = 1;
//    //    context.strokeStyle = "black";
//    //    context.stroke();
//        context.lineWidth = radius*2;
//    }
//}



var engage = function(e){
    dragging = true;
    putPoint(e);
}

var disengage = function(){
    dragging = false;
    context.beginPath();
}

document.addEventListener('keydown', function(e) {
    if( e.keyCode == 67 ){
        // clear
        clearCanvas(canvas);
        console.log('Cleared');
    }
})

//function switchBrushType(){
//    if(circleButton.className == "brushType act"){
//        circleButton.className = 'brushType';
//        squareButton.className += " act";
//    }else if(squareButton.className == "brushType act"){
//        squareButton.className = 'brushType';
//        circleButton.className += " act";
//    }
//}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mouseout', disengage);
canvas.addEventListener('mouseover', disengage);

//squareButton.addEventListener('click', switchBrushType);
//circleButton.addEventListener('click', switchBrushType);

/// Version to correct the bug

//var putPoint = (function(e){
//    if (dragging){   
//        context.lineTo(e.clientX, e.clientY);
//        context.closePath();
//        context.stroke();
//        
//        context.beginPath();
//        context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
//        context.closePath();
//        context.fill();
//        
//        context.beginPath();
//        context.moveTo(e.clientX, e.clientY);
//    }
//});
//
//var engage = (function(e){
//    dragging = true;
//    context.beginPath();
//    putPoint(e);
//});
//
//var disengage = (function(e){
//    dragging = false;
//    context.closePath();
//});
//
//var pauseDrawing = (function(e){
//    context.closePath();
//});
//
//var resumeDrawing = (function(e){
//    if(dragging){
//        context.beginPath();
//        putPoint(e);
//    }
//});
//
//canvas.addEventListener('mousedown', engage);
//canvas.addEventListener('mousemove', putPoint);
//canvas.addEventListener('mouseup', disengage);
//canvas.addEventListener('mouseout', pauseDrawing);
//canvas.addEventListener('mouseover', resumeDrawing);







