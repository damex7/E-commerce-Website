document.addEventListener("DOMContentLoaded", function(){

    let bars = document.getElementById("bars");
    let cancel = document.getElementById("cancel");
    let navbarul = document.getElementById("navbarul");

    bars.addEventListener('click', ()=>{
        if(!navbarul.classList.contains("shows")){
          navbarul.classList.add("shows");
          bars.classList.add("hide");
        }
    });

    cancel.addEventListener('click', ()=>{
        if(navbarul.classList.contains("shows")){
          navbarul.classList.remove("shows");
          bars.classList.remove("hide");
        }
        // else{
        //     if(!bars.classList.contains("shows")){

        //     }
        // }
    })

})


// product 

let MainImg = document.getElementById("MainImg");
let SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].addEventListener('click',()=>{
  MainImg.src = SmallImg[0].src;
})
SmallImg[1].addEventListener('click',()=>{
  MainImg.src = SmallImg[1].src;
})
SmallImg[2].addEventListener('click',()=>{
  MainImg.src = SmallImg[2].src;
})
SmallImg[3].addEventListener('click',()=>{
  MainImg.src = SmallImg[3].src;
})