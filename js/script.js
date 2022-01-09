let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".sitio-header .busqueda-form");

searchBtn.onclick = () =>{
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle('active');
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove('active');
}

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".sitio-header .navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle('active');
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove('active');
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove('active');
}