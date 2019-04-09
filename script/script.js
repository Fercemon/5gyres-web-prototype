const navBtn = document.querySelector("#navBtn");

navBtn.addEventListener("click", openNav);

var count=1;

function openNav(){

    count++;

    if(count % 2 == 0){
        document.getElementById("mobile-nav").style.height="100%";
    } else {
        document.getElementById("mobile-nav").style.height=0;
    }
}
