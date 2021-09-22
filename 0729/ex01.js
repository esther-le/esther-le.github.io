// let x=4
// console.log(Math.pow(x,3));



    document.getElementById('myButton').onclick=
    function(){
        let x=Math.random();
        x=x*4;
        x=Math.floor(x);
       if(x==document.getElementById('myInput').value){
           alert("恭喜，您猜對了!");
       }else{
           alert("您猜錯了，這個數字是"+ x);
       }
       
    }