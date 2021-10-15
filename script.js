document.getElementById("mybutton").addEventListener("click", function () { alert("button clicked"); });
document.getElementById("mybutton2").className += "red-background";
const toggleBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};
toggleBackground();