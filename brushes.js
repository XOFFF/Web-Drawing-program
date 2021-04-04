var squareButton = document.getElementById('square');
var circleButton = document.getElementById('circle');

function switchToSquare(){
    if(circleButton.className == "brushType act"){
        console.log("changing to square");
        circleButton.className = 'brushType';
        squareButton.className += " act";
    }
}
function switchToCicrle(){
    if(squareButton.className == "brushType act"){
        console.log("changing to circle");
        squareButton.className = 'brushType';
        circleButton.className += " act";
    }
}

circleButton.addEventListener('click', switchToCicrle);
squareButton.addEventListener('click', switchToSquare);

//function switchBrushType(){
//    if(circleButton.className == "brushType act"){
//        console.log("changing to square");
//        circleButton.className = 'brushType';
//        squareButton.className += " act";
//    }else if(squareButton.className == "brushType act"){
//        console.log("changing to circle");
//        squareButton.className = 'brushType';
//        circleButton.className += " act";
//    }
//}

//circleButton.addEventListener('click', switchBrushType);
//squareButton.addEventListener('click', switchBrushType);