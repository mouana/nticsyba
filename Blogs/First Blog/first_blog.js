
var backBlog = document.querySelector('.fa-regular');
backBlog.addEventListener('click',()=>{
var url = '../blogs.html'
window.location.href = url;
})
function afficher() {
    var shows = document.getElementsByClassName("show");
    var hides = document.getElementsByClassName("hide");
    var button = document.querySelector(".lire_plus");

    for (var i = 0; i < hides.length; i++) {
        if (hides[i].style.display === "none" || hides[i].style.display === "") {
            hides[i].style.display = "block";
            button.textContent = "Lire moins";
        } else {
            hides[i].style.display = "none";
            button.textContent = "Lire plus";
        }
    }
};

// fonction pour afficher les commentaire
function AfficheCmnt() {
    var cmnt = document.getElementById("commentaire").value;
    if(cmnt !==""){
        cmnt.innerHTML = ""
        var paragraphe = document.createElement("p");
        var text = document.createTextNode(cmnt);
        paragraphe.setAttribute("class","pbord")
        paragraphe.setAttribute("width","auto")
        paragraphe.setAttribute("height","auto")
        paragraphe.append(text);
        var divCmnt = document.getElementById("divCmnt");
        divCmnt.append(paragraphe);
    }
  }
  
  //Pour les btns suiv et prec
  
var mainpage = 0; // page principale , indice 0
affichePage(mainpage); 

function affichePage(n) {
var pages = document.getElementsByClassName("page");
pages[n].style.display = "block";
if (n == 0) {
document.getElementById("precedBtn").style.display = "none";
} else {
document.getElementById("precedBtn").style.display = "inline";
}
if (n == (pages.length - 1)) {
document.getElementById("suivantBtn").innerHTML = "Page Blog";
} else {
document.getElementById("suivantBtn").innerHTML = "Suivant";
}
fixStepIndicator(n)
}

function SuivantPrecedent(n) {
//quelle page nous sommes ou
var pages = document.getElementsByClassName("page");
// masque la page ou nous sommes
pages[mainpage].style.display = "none";
mainpage = mainpage + n;
if (mainpage == pages.length - 1) {
document.getElementById("suivantBtn").style.display="none";

}else{
document.getElementById("suivantBtn").style.display="inline";

}

affichePage(mainpage);
}

// pour ecraser "active" pour les pas(steps)
function fixStepIndicator(n) {
var i, pas = document.getElementsByClassName("step");
for (i = 0; i < pas.length; i++) {
pas[i].className = pas[i].className.replace(" active", "");
}
pas[n].className += " active";
}