function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}

if (localStorage.getItem('') === "dark") {
    document.getElementById('applicationsImg1').src = "assets/img/darkmode-img4.png"
}
else

    document.getElementById('applicationsImg1').src = "assets/img/illustration4.png"
