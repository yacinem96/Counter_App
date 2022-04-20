var btns =document.querySelectorAll(".btn");
var val=document.getElementById("value");
var cpt=0;

btns.forEach( (btn)=>{

btn.addEventListener("click", (e)=>{
    // console.log(e.target);
    e.preventDefault();
    if (e.target.classList.contains("decrease")) {
        cpt--;
        
    } else if (e.target.classList.contains("increase")) {
        cpt++;
    } else {
        cpt=0;
    }
    
    val.innerText=cpt;
    
    if (cpt<0) {
        val.style.color="red"
    } else if (cpt>0) {
        val.style.color="green"
    } else {
        val.style.color="black"
    
    }

})

});



