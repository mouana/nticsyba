
class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="first-header">
        <div class="logo">
        <div class="logo-img">
            <img src="/photos/header/Elegant_Public_Library_Logo_Template__1_-removebg-preview.png">
        </div>
        <ul id="lang-list">
        <li id="DECONNECTER"><a href="/seconnecter/se_connecter.html">se connecter</a></li>
        <li id="languge">
            <div class="langages">
                <div class="arabic">
                    <a href="#">
                        <img src="/photos/header/download.png" alt="">
                        <p>AR/</p>
                    </a>
                </div>
                <div class="frensh">
                    <a href="blogs.html">
                        <img src="/photos/header/Flag_of_France.svg.png" alt="">
                        <p>FR</p>
                    </a>
                </div>
            </div>
        </li>
    </ul>
    </div>
    </div>

        <nav class="mybar">
        <div id="menubr">
            <a href="#" id="menubr-link"><i class="fa fa-bars" style="font-size:30px"></i></a>
        </div>
        <ul class="barlist bardisp">
            <li id="Home"><a class = 'nav_link' href="/home/home.html">accueil</a><span></span></li>
            <li id="somme"><a class = 'nav_link' href="/qui_somme_nous/qui-somme-nous.html">a propos</a><span></span></</li>
            <li id="mission" ><a class = 'nav_link' href="/mission/mission.html">mission</a><span></span></</li>
            <li id="evenement"><a class = 'nav_link' href="/enenement/evenement.html">evenement</a><span></span></</li>
            <li id="blog"><a class = 'nav_link' href="/Blogs/blogs.html">blog</a><span></span><span></span></</li>
            <li id="administration"><a class = 'nav_link' href="/administration/administration.html">adminstration</a><span></span></</li>
            <li id="contact"><a class = 'nav_link' href="/contacter/contact.html">contact</a><span></span></</li>
            <li id="aid"><a class = 'nav_link' href="/aide/aid.html">aide</a><span></span></</li>
        </ul> 
    </nav>`
    }
}
window.customElements.define('nav-bar', Header);

const windowPathname = window.location.pathname;
const liElements = document.querySelectorAll('.bardisp li');
liElements.forEach(li => {
    const navItems = li.querySelector('a');
    const navLinksItems = new URL(navItems.href).pathname;
    
    if ((navLinksItems === windowPathname) || (windowPathname === '/index.html' && navLinksItems === '/')) {
        navItems.classList.add('active');
    }
    navItems.addEventListener('mouseover', function(){
        navItems.classList.add('active');
    });
    navItems.addEventListener('mouseout', function(){
        if ((navLinksItems !== windowPathname) && !(windowPathname === '/index.html' && navLinksItems === '/')) {
            navItems.classList.remove('active');
        }
    });
});

const navBar = document.querySelector('.first-header');
const navBarOffset = navBar.offsetTop;
let prevScrollY = window.scrollY;

function toggleSticky() {
    const scrollY = document.documentElement.scrollTop || window.scrollY;
    if (scrollY > navBarOffset) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }

    const myBar = document.querySelector('.mybar');
    if (scrollY < prevScrollY) { 
        myBar.classList.add('sticky');
    } else {
        myBar.classList.remove('sticky');
    }
    prevScrollY = scrollY;
}
window.addEventListener('scroll', toggleSticky);





























