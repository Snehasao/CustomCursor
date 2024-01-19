var cusor=document.querySelector(".cursor")
cusor.style.backgroundColor="blue"

main.addEventListener("mousemove",function(e){

    cusor.style.left=e.x+"px"
    cusor.style.top=e.y+"px"
})