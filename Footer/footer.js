
class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
        <div class="footer-cont">
            <div class="rows">
                <div class="columns">
                    <h3>Accueil</h3>
                    <ul>
                        <li><a href="/home/Home.html">accueil</a></li>
                        <li><a href="/Blogs/blogs.html">blog</a></li>
                        <li><a href="/Evenements/evenements.html">evenement</a></li>
                        <li><a href="/inscription/inscription.html">profile</a></li>
                    </ul>
                </div>
                <div class="columns">
                    <h3>a propos</h3>
                    <ul>
                        <li><a href="/qui-somme-nous/qui-somme-nous.html">qui-somme-nous</a></li>
                        <li><a href="/Missions/missions.html">Mission et Objectifs</a></li>
                        <li><a href="">Équipe et Culture</a></li>
                        <li><a href="">Historique</a></li>
                    </ul>
                </div>
                <div class="columns">
                    <h3>besoin d'aide</h3>
                    <ul>
                        <li><a href="">Assistance et Support</a></li>
                        <li><a href="">Restez Connecté(e)</a></li>
                        <li><a href="">Informations Légales</a></li>
                        <li><a href="">Découvrez Notre Entablissement</a></li>
                    </ul>
                </div>
                <div class="columns">
                    <h3>contactez-nous</h3>
                    <div class="reseaux">
                        <a id="wht" href="https://www.fa-whatsapp.com/" target="_blank"><i
                                class="fa-brands fa-whatsapp fa-xl"></i></a>
                        <a id="gm" href="https://www.gmail.com/" target="_blank"><i
                                class="fa-solid fa-envelope fa-xl"></i></a>
                        <a id="tw" href="https://www.twitter.com/" target="_blank"><i
                                class="fa-brands fa-twitter fa-xl"></i></a>
                        <a id="fb" href="https://www.facebook.com/" target="_blank"><i
                                class="fa-brands fa-facebook fa-xl"></i></a>
                        <a id="locat" href="#">
                            <address><i class="fa-solid fa-location-dot fa-xl"></i>&nbsp;&nbsp;ISTA NTIC Sidi youssef
                                Ben Ali Marrakech</address>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
    }
}
window.customElements.define('foot-js', Footer);