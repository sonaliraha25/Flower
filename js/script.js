let animate=document.getElementById('in');
let Two=document.getElementById('intwo');
let Three=document.getElementById('inthree');
let Four =document.getElementById('infour');

function move(){
    let pos=0;
    let id =null;
    id = setInterval(frame,2);
   function frame(){
    if(pos===400){
      clearInterval(id);
      animate.style.top= 0 +"px";
      animate.style.left= 0 +"px";
      Two.style.top= 0 +"px";
      Two.style.right = 0 +"px";
      Three.style.bottom= 0 +"px";
      Three.style.left = 0 +"px";
      Four.style.bottom= 0 +"px";
      Four.style.right = 0 +"px";
    }
    else{
        pos++;
        animate.style.top = pos +"px";
        animate.style.left=pos + "px";
        Two.style.top = pos +"px";
        Two.style.right= pos + "px";
        Three.style.bottom= pos +"px";
      Three.style.left = pos +"px";
      Four.style.bottom= pos +"px";
      Four.style.right = pos +"px";
    }
   }
}
