let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor(){
    let max = 200;
    let min = 50;
    let green = Math.floor(Math.random()*(max - min +1))+min;
    let color = "rgba(255,"+ green +",100,1.0)";
    return color;
}


function makeBox(){
    let time= Math.random();
    time=time*2000;
    setTimeout(function(){
        if (Math.random()>=0.5){
            document.getElementById('box').style.borderRadius = "70px";
        }else{
            document.getElementById('box').style.borderRadius="0px";
        }

        // console.log(window.innerWidth);
        // console.log(window.innerHeight);

        
        let min =0;
        let max = window.innerHeight -280;
        let top = Math.floor(Math.random()*(max - min +1))+min;
      

        min =0;
        max = window.innerHeight -140;

        let dynamicBound;
        if (window.innerWidth>window.innerHeight){
            dynamicBound = window.innerWidth / 8;
        }else{
            dynamicBound = window.innerHeight / 8;
        }
        dynamicBound = dynamicBound+"px";
        document.documentElement.style.setProperty("--bound", dynamicBound);
         
        let left = Math.floor(Math.random()*(max - min +1))+min;
       

        document.getElementById('box').style.top = top+"px";
        document.getElementById('box').style.left= left+"px";

        document.getElementById('box').style.backgroundColor = getRandomColor();
        document.getElementById('box').style.display="block";
        createdTime=Date.now(); },time);
   
    
}



document.getElementById('box').onclick=function(){
    this.style.display="none";
    clickedTime=Date.now();
    reactionTime=(clickedTime - createdTime)/1000;
    document.getElementById('time').innerHTML=reactionTime;
    makeBox();
}
makeBox();