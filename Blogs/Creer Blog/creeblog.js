var cree = document.getElementById("valider");
cree.addEventListener("click", getnewcontent);
function getnewcontent() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    document.getElementById("section_creeblog").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "new.txt");
  xhttp.send();
}
var backBlog = document.querySelector('.fa-regular');
backBlog.addEventListener('click',()=>{
var url = '../blogs.html'
window.location.href = url;
})