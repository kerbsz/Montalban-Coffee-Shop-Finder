function Showmenu() {
    const menushow = document.querySelector("#menushow");
    if (window.innerWidth < 768) { 
        menushow.classList.toggle("hidden");
    }
}
