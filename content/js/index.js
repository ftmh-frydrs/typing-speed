// const start=() => {

//      score=0;
//      timer="";
//      userI
//      document.getElementById("strat").style.display="none";
//      document.getElementById("stop").style.display="block";
// }

let typewords=document.getElementById("mywords")
const btn=document.getElementById("btn")
// const stop=document.getElementById("stop")
let msg=document.getElementById("msg")
const time=document.getElementById("time")
const words=document.getElementById("Words")
const massage=document.getElementById("massage")
document.getElementById("body").style.background=" #fe9801"
const speed1=document.getElementById("speed")

 msg.style.background="#ccda46"
 typewords.style.background=" #f5f5c6"
 typewords.style.boxShadow="black 5px 8px 5px"
let strattime , endtime;

let softofwords=[
     "If the kite doesn’t face adverse wind it won’t rise" ,
     "The curves of your lips rewrite history",
      "If equal affection cannot be, let the more loving one be me",
      "And now that you don't have to be perfect, you can be good", 
];



let content=" "


function playgame(){
    let randomnumber=Math.floor(Math.random()*softofwords.length);
     msg.innerText=softofwords[randomnumber];
     let date=new Date();
     strattime=date.getTime();
    
     btn.innerText="Done"
    
}

function endplay(){
      let date=new Date();
      endtime=date.getTime();
     let total=((endtime-strattime)/1000);
      time.innerText=total
     
     
     // console.log(total)
     // let totalstr=typewords.value;
     let word=word_(typewords.value)
     let speed=Math.round((word/total)*60)
     // msg.innerText="speed : "+speed
     speed1.innerText=speed

}

btn.addEventListener('click' , function(){
     if(this.innerText=='START'){
           typewords.disabled=false;
          time.textContent=content
          words.textContent=content
          speed1.textContent=content
          // typewords.textContent=content
          // msg.textContent=content
           
          
          playgame();


     }else if(this.innerText=="Done"){
          
           typewords.disabled=true;
          btn.innerText="START"
          

          
          endplay();

     }
})

  

function  word_(str){
     let response=str.split(" ").length;
      words.innerText=response
     //  console.log(response);
      return response;
      
 }

 

 typewords.addEventListener('input',function(){
     if(typewords.value==msg.innerText){
          massage.innerHTML='\n correct ✅';
          massage.style.color=" darkgreen"
         
     }else{
          massage.innerHTML='\n not correct ❌';
          
     }
 });