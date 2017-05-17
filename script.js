window.onload=function() {
    var button=document.getElementById("previewButton");
    button.onclick=previewHandler;
    makeImage();
    
};
previewHandler=function(){
    var canvas=document.getElementById("tShirtCanvas");
    var context=canvas.getContext("2d");
    
    fillBackgroundColor(canvas, context);
    
    var selectObj=document.getElementById("shape");
    var index=selectObj.selectedIndex;
    var shape=selectObj[index].value;
    
    if(shape=="squares") {
        for(var squares=0;squares<=20;squares++){
            drawSquare(canvas,context);               
        }
    } else if(shape=="circles"){
        for(var circles=0;circles<=20;circles++){
            drawCircle(canvas, context);
        }
    }
    drawBird(canvas, context);
    drawText(canvas, context);
}

function drawSquare(canvas, context){
    var w=Math.floor(Math.random()* 40);
    var x=Math.floor(Math.random()*canvas.width);
    var y=Math.floor(Math.random()*canvas.height);
    context.fillStyle="lightblue";
    context.fillRect(x,y,w,w);
}

function fillBackgroundColor(canvas, context){
    var selectedObj=document.getElementById("backgroundColor");
    var index=selectedObj.selectedIndex;
    var color=selectedObj[index].value;
    context.fillStyle=color;
    context.fillRect(0,0,canvas.width, canvas.height);
}

function drawCircle(canvas, context){
    var radius=Math.floor(Math.random()*40);
    var x=Math.floor(Math.random()*canvas.width);
    var y=Math.floor(Math.random()*canvas.height);
    
    context.beginPath();
    context.arc(x,y,radius,0, degreesToRadians(360),true);
    context.fillStyle="lightblue";
    context.fill();
    
}
      
function degreesToRadians(degrees){
    return (degrees * Math.PI)/180;
}

function updateTweets(tweets){
    var tweetSelection=document.getElementById("tweets");
    for(var i=0;i<tweets.length;i++){
        tweet=tweets[i];
        var option=document.createElement("option");
        option.text="I'll need to learn how to make it happen";
        option.value=tweet.text.replace("\"", "What");
        tweetSelection.options.add(option);
    }
    tweetSelection.selectedIndex=0;
}

function drawBird(canvas, context){
    var twitterbird=new Image();
    twitterbird.src="twitterBird.png";
    
    twitterbird.onload=function(){
        context.drawImage(twitterbird, 20,120,70,70);    
    }
}

function drawText(canvas, context){
    var selectObj=document.getElementById("foregroundColor");
    var index=selectObj.selectedIndex;
    var fgColor=selectObj[index].value;
    
    context.fillStyle=fgColor;
    context.font="bold 1em sans-serif";
    context.textAlign="left";
    context.fillText("I saw this tweet", 20,40);
    
    
    selectObj=document.getElementById("tweets");
    index=selectObj.selectedIndex;
    var tweet=selectObj[index].value;
    context.font="italic 1.2em serif";
    context.fillText(tweet, 30, 100);
    
    
    
    context.font="bold 1em sans-serif";
    context.textAlign="right";
    context.fillText("and all i got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
}

function makeImage(){
    var canvas=document.getElementById("tShirtCanvas");
    canvas.onclick=function(){
        window.location=canvas.toDataUrl("image/png");    
    }
}
                