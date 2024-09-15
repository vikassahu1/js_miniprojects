var istatus = document.querySelector("h3")
var addFriend = document.querySelector("#add")
var check = 0;
addFriend.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove"
        check = 1;
    }
    else{
        check = 0;
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Tomato"
        addFriend.innerHTML = "Add Friend"
    }

})

