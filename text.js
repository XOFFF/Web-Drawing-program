var dragging = false;
var defaultTextSize = 50;
//var rotateText = 25;

var newTextIndex = 0;

var addTextButton = document.getElementById('text');
var inputFrame = document.getElementById('someText');
var rangePosition = document.getElementById('range');
var textSize = document.getElementById('textSize');
//var textChangeSize = document.getElementById('textChangeSize');

///     Add input frame
var addInputFrame = function(){
//    textSize.style.visibility = 'hidden';
//    textChangeSize.style.visibility = 'visible';
//    textChangeSize.innerHTML = textSize.value;
    
    var text = document.getElementById("someText");

    defaultTextSize = document.getElementById('range').value;
    text.style.fontSize = defaultTextSize.toString() + 'px';
//    text.style.transform.rotate = rotateText.toString() + 'deg';
    text.style.visibility = 'visible';
//    text.style.color = color;
    document.getElementById('changeText').appendChild(text);
    var inputFrame = document.getElementById('someText');
    inputFrame.style.top = '100px';
    inputFrame.style.left = '200px';
    
    inputFrame.draggable = 'true';
    
//    var heightValue = inputFrame.style.fontSize.substr(0,inputFrame.style.fontSize.length-2);
//    heightValue = heightValue * 0.7;
//    inputFrame.style.height = heightValue.toString() + 'px';
    
    console.log(inputFrame.style.height);
    changeInput();
    addNewText(newTextIndex);
    
}

//    document.getElementById("someText").remove();
//    var text = document.createElement('input');
//    text.id = "someText";
//    text.type = "text";
//    text.value = "Add text";

//var moveText = function(e){
//    if (dragging && inputFrame.id == 'someText'){
//        var position = inputFrame.getBoundingClientRect();
//        console.log('e.clientX :', e.clientX);
//        console.log('position.left :', position.left);
//        
////        if(position.right < canvas.width){
//        
//        var moveX = e.clientX - position.width; //  40 - defaultTextSize
//        moveX = e.clientX - position.width/2;
//        console.log('moveX :', moveX);
//
//        var moveY = e.clientY - position.height; // - position.top; // - defaultTextSize;
//        moveY = e.clientY - position.height/2;
//        console.log('moveY :', moveY);
//        console.log('position.height :', position.height);
//
//        inputFrame.style.left = moveX.toString() + 'px';
//        inputFrame.style.top = moveY.toString() + 'px';
//    }
//}

var moveTextSize = function(){
    inputFrame.style.fontSize = document.getElementById('range').value.toString() + 'px';
    textSize.value = document.getElementById('range').value.toString();
    changeInput();
}


/// press "Enter" in size input
var enterToSetTextSize = function(){
//    rangePosition.value = textSize.value;
//    moveTextSize();
    
    textSize.addEventListener('keydown', function(e) {
        if(e.keyCode == 13 && document.hasFocus(textSize)){
            // change text size
            rangePosition.value = textSize.value;
            moveTextSize();
        }
    });
}

var changeInput = function(){
//    var position = inputFrame.getBoundingClientRect();
    console.log('inputFrame.style.fontSize', inputFrame.style.fontSize);
    var size = inputFrame.style.fontSize.substr(0,inputFrame.style.fontSize.length-2);
    size = parseInt(size);
    console.log('size', size);
    var setLength = inputFrame.value.length * size/2;
//    inputFrame.style.width = setLength.toString() + 'px';
    //                                                                                  *** problem is here! ***
    var setHeight = size * 0.705;
    inputFrame.style.height = setHeight.toString() + 'px';
}

//var changeInputHeight = function(){
//    var heightValue = inputFrame.style.fontSize.substr(0,inputFrame.style.fontSize.length-2);
//    heightValue = heightValue * 0.7;
//    inputFrame.style.height = heightValue.toString() + 'px';
//}

var addNewText = function(index){
    var newText = document.createElement('span');
    newText.className = 'newText';
    newText.id = 'newText_' + index.toString();
    document.getElementById('textList').appendChild(newText);
}

var convertToText = function(index){
    var changeToText = document.getElementById('newText_' + index.toString());
    console.log('changeToText', changeToText);
//    var textValue = inputFrame.value;
    
    changeToText.style.visibility = 'visible';
    var position = inputFrame.getBoundingClientRect();

    changeToText.innerHTML = inputFrame.value;
    changeToText.style.width = position.width;
    changeToText.style.height = position.height;
    changeToText.style.left = position.left.toString() + 'px';
    changeToText.style.top = position.top.toString() + 'px';
    changeToText.style.fontSize = inputFrame.style.fontSize;
    changeToText.style.color = inputFrame.style.color;
//    changeToText.style.display = 'none';
    
//    context.font = '48px sans-serif';
    context.font = inputFrame.style.fontSize + ' sans-serif';
    console.log(context);
//    context.style.height = 'auto';
    
    
//    context.fillText('Hello world', 100, 200);
    var top_px = position.top + inputFrame.style.height + position.height*2;
//    context.fillText(inputFrame.value, position.left, top_px);
    context.fillText(inputFrame.value, position.left, position.top + position.height);//////////////////////// ????????????????
    
//    console.log(position.left, changeToText.style.left);
//    console.log(position.top, changeToText.style.top);
    
    inputFrame.style.visibility = 'hidden';
//    inputFrame.style.display = 'none';
    inputFrame.value = 'Add text';
    changeToText.style.visibility = 'hidden';
}

/// press "Enter" in text input
inputFrame.addEventListener('keydown', function(e) {
    if(e.keyCode == 13 && document.hasFocus(textSize) == true){
//        addNewText(newTextIndex);
        convertToText(newTextIndex);
        newTextIndex++;
    }
});


//var startWebsite2 = true;
//
//if(startWebsite2 == true){
//    rangePosition.value = textSize.value;
//    moveTextSize();
//    startWebsite2 = false;
//}


var engage = function(e){
    console.log('hello');
    dragging = true;
//    inputFrame.style.borderStyle = 'dashed';
//    inputFrame.style.borderWidth = '5px';
//    moveText(e); 
}

var disengage = function(){
    dragging = false;
//    inputFrame.style.borderStyle = 'none';
//    inputFrame.style.borderWidth = '0px';
}

addTextButton.addEventListener('mouseup', addInputFrame);

inputFrame.addEventListener('mousedown', engage);
//inputFrame.addEventListener('mousemove', moveText);
inputFrame.addEventListener('mouseup', disengage);
//inputFrame.addEventListener('mouseout', moveText);
//inputFrame.addEventListener('mouseover', moveText);
inputFrame.addEventListener('input', changeInput);


inputFrame.onmousedown = function(e) { // 1. отследить нажатие
    var coords = getCoords(inputFrame);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    
    inputFrame.style.position = 'absolute';
    moveAt(e);
    // put to the body, to input not be in position:relative
    document.body.appendChild(inputFrame);

    inputFrame.style.zIndex = 1000; // put the input upper than another items

    // change input position to position of the cursor
    function moveAt(e) {
        inputFrame.style.left = e.pageX - shiftX + 'px';
        inputFrame.style.top = e.pageY - shiftY + 'px';
    }

    // dragging on
    document.onmousemove = function(e) {
        moveAt(e);
    }

    // end of dragging
    inputFrame.onmouseup = function() {
        document.onmousemove = null;
        inputFrame.onmouseup = null;
    }
    
    inputFrame.ondragstart = function() {
        return false;
    }
    
    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        }
    }
}



//inputFrame.addEventListener('onmousedown', moveText);
//document.addEventListener('onmousemove', moveAt);



rangePosition.addEventListener('input', moveTextSize);
textSize.addEventListener('input', enterToSetTextSize);