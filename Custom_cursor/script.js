var man = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

man.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y + "px";
})