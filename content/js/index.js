// const start=() => {

//      score=0;
//      timer="";
//      userI
//      document.getElementById("strat").style.display="none";
//      document.getElementById("stop").style.display="block";
// }

let typeWords=document.getElementById("mywords")
const btn=document.getElementById("btn")
// const stop=document.getElementById("stop")
let msg=document.getElementById("msg")
const time=document.getElementById("time")
const words=document.getElementById("Words")
const massage=document.getElementById("massage")
// document.getElementById("body").style.background=" "
const speedEl=document.getElementById("speed")

 msg.style.background="#051937"
  msg.style.color='#fff'
 typeWords.style.background="#CCF278"
 typeWords.style.boxShadow="black 5px 8px 5px"
 let strattime , endtime;

let wordEl=[
      "If the kite doesn’t face adverse wind it won’t rise" ,
      "The curves of your lips rewrite history",
      "If equal affection cannot be, let the more loving one be me",
      "And now that you don't have to be perfect, you can be good", 
      "Push yourself, because no one else is going to do it for you.",
      "Failure is the condiment that gives success its flavor.",
      "Wake up with determination. Go to bed with satisfaction.",
      "It's going to be hard, but hard does not mean impossible.",
      "Learning never exhausts the mind.",
      "The only way to do great work is to love what you do."
];


function playgame(){
      let randomnumber=Math.floor(Math.random()*wordEl.length);
      msg.innerText=wordEl[randomnumber];
      let date=new Date();
      strattime=date.getTime();
    
      btn.innerText="Done"
    
}

function endplay(){
      let date=new Date();
      endtime=date.getTime();
      let total=((endtime-strattime)/1000);
      time.innerText=total
      let word=wordsEl(typeWords.value)
      let speed=Math.round((word/total)*60)
     // msg.innerText="speed : "+speed
      speedEl.innerText=speed
}

btn.addEventListener('click' , function(){
     if(this.innerText=='START'){
           start();
           playgame();

     }else if(this.innerText=="Done"){
           typeWords.disabled=true;
           btn.innerText="START"
          
          if(typeWords.value==msg.innerText){
                massage.innerHTML='\n correct ✅';
                massage.style.color=" darkgreen"

          }else{
                massage.innerHTML='\n not correct ❌'; 
          }
           endplay();
     }
})

  

function  wordsEl(str){
      let response=str.split(" ").length;
      words.innerText=response
     //  console.log(response);
      return response;    
 }

  function start(){
      typeWords.disabled=false;
           time.textContent=""
           words.textContent=""
           speedEl.textContent=""
           typeWords.value=""
           massage.innerHTML=""
  }


//  typewords.addEventListener('input',function(){
//      if(typewords.value==msg.innerText){
//           massage.innerHTML='\n correct ✅';
//           massage.style.color=" darkgreen"
         
//      }else{
//           massage.innerHTML='\n not correct ❌';
          
//      }
//  });