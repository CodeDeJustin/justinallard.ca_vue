<template>
  <div>
    <!-- HEADER -->
<AppHeader />

    <!-- SECTION POLYGONE HAUT -->
    <main>
<AppPolygone />

      <!-- SECTION PRINCIPALE -->
      <section class="section">
        <h2>Matériel de travail</h2>

        <div class="col-contenu-img">
          <div id="drag-container">
            <div id="spin-container">
              <img :src="carrousel1Image" alt="Carrousel 1" />
              <img :src="carrousel2Image" alt="Carrousel 2" />
              <img :src="carrousel3Image" alt="Carrousel 3" />
              <img :src="carrousel4Image" alt="Carrousel 4" />
              <img :src="carrousel5Image" alt="Carrousel 5" />
              <img :src="carrousel6Image" alt="Carrousel 6" />

              <!-- Text at center of ground -->
              <p>Mon matériel de travail</p>
            </div>
            <div id="ground"></div>
          </div>
        </div>

        <div id="music-container"></div>

        <!-- Texte sur le matériel de travail -->
        <div class="col-contenu float-right">
          <div class="texte-avec-ligne-verticale">
            <p>
              Dans le monde de la programmation et de la modélisation 3D, avoir
              un espace de travail équipé et fiable est essentiel. Mon bureau
              est conçu pour garantir efficacité et fiabilité dans tous mes
              projets, qu'ils soient liés au développement web ou à la
              modélisation 3D.
            </p>
            <p>
              <strong>Ordinateur de bureau Dell XPS :</strong> Le cœur de mon
              espace de travail est mon ordinateur de bureau Dell XPS,
              spécialement configuré pour gérer des tâches exigeantes. Avec un
              processeur rapide et une carte graphique avancée, il est
              parfaitement adapté pour le développement logiciel et la création
              3D, garantissant une performance optimale à chaque étape du
              projet.
            </p>
            <p>
              <strong>Moniteurs triple Dell :</strong> Pour une productivité
              maximale et une expérience immersive, je m'appuie sur trois
              moniteurs Dell 27 pouces. Ils offrent un affichage clair et
              réactif, essentiel pour le multitâche et la gestion précise des
              détails dans mes projets.
            </p>
            <p>
              <strong>Webcam et audio :</strong> Les réunions en ligne et la
              collaboration à distance sont facilitées grâce à une webcam haute
              définition et des enceintes Logitech, garantissant une
              communication claire et efficace avec les clients et les
              collaborateurs.
            </p>
            <p>
              <strong>Bureau ergonomique :</strong> Conscient de l'importance de
              l'ergonomie dans un espace de travail, mon bureau à hauteur
              réglable Motionwise me permet de travailler confortablement, en
              position assise ou debout, adaptant ainsi l'espace à mes besoins
              tout au long de la journée.
            </p>
            <p>
              <strong>Ordinateur portable HP Envy :</strong> Pour rester
              productif même en déplacement, je dispose également d'un
              ordinateur portable HP Envy, qui me permet de continuer à
              travailler avec la même efficacité hors du bureau.
            </p>
            <p>
              <strong>Batteries de secours APC :</strong> La fiabilité est une
              priorité dans mon travail. C'est pourquoi j'ai équipé mon bureau
              de batteries de secours APC, assurant une alimentation constante
              et évitant toute interruption inattendue dans mon travail.
            </p>
            <p>
              <strong>Accessoires supplémentaires :</strong> Chaque détail
              compte, et c'est pourquoi mon espace de travail inclut également
              des accessoires complémentaires comme un casque PlayStation PULSE
              3D pour des communications nettes et un environnement sonore
              immersif.
            </p>
            <p>
              En somme, mon espace de travail est soigneusement équipé pour
              répondre aux exigences de la programmation et de la modélisation
              3D, garantissant non seulement la performance mais aussi le confort
              et la fiabilité.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppPolygone from '@/components/AppPolygone.vue';

export default {
  name: 'MaterielView',
  components: {
    AppHeader,
    AppFooter,
    AppPolygone,
  },
  data() {
    return {
      carrousel1Image: require("@/assets/media/carrousel1.jpg"),
      carrousel2Image: require("@/assets/media/carrousel2.jpg"),
      carrousel3Image: require("@/assets/media/carrousel3.jpg"),
      carrousel4Image: require("@/assets/media/carrousel4.jpg"),
      carrousel5Image: require("@/assets/media/carrousel5.jpg"),
      carrousel6Image: require("@/assets/media/carrousel6.jpg"),
      profileImage: require("@/assets/media/profile.png")
    };
  }
};
</script>

<style scoped>
/*********************/
/* CLASSES GÉNÉRALES */
/*********************/
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

:root {
  --font: Arial, sans-serif;
  --font-outils: "ROBOTO", sans-serif;
  --font-outils-nav: "Josefin Sans", sans-serif;

  /* CLAIR */
  --background-color: #fefefe;
  --color-vertical-line: #3576e2;
  --color-funky: #ff0266;
  --color-funky-soft: #7f4a88;
  --color-header-image: #e4e4e4;
  --color-header-title: #ffffff;
  --color-header-description: #d3d3d3;
  --color-header-icons: #ffffff;
  --color-polygon: #e4e4e4;
  --color-polygon-text: #505050;
  --color-hamburger-background-menu: #333333f2;
  --color-hamburger-link: #e4e4e4;
  --text-color: #333333;
  --color-footer-background: #333333;
  --color-footer-text: #ffffff;

  /* SOMBRE */
  --dark-background-color: #1e1f26;
  --dark-color-vertical-line: #3576e2;
  --dark-color-funky: #ff0266;
  --dark-color-funky-soft: #faebd7;
  --dark-color-header-image: #e4e4e4;
  --dark-color-header-title: #ffffff;
  --dark-color-header-description: #d3d3d3;
  --dark-color-header-icons: #ffffff;
  --dark-polygon-color: #2f3e55;
  --dark-polygon-color-text: #e8e8e8;
  --dark-color-hamburger-background-menu: #333333f2;
  --dark-color-hamburger-link: #e4e4e4;
  --dark-text-color: #cccccc;
  --dark-color-footer-background: #383d48;
  --dark-color-footer-text: #f5f5f5;
}

body[data-theme="dark"] {
  --background-color: var(--dark-background-color);
  --color-vertical-line: var(--dark-color-vertical-line);
  --color-funky: var(--dark-color-funky);
  --color-funky-soft: var(--dark-color-funky-soft);
  --color-header-image: var(--dark-color-header-image);
  --color-header-title: var(--dark-color-header-title);
  --color-header-description: var(--dark-color-header-description);
  --color-header-icons: var(--dark-color-header-icons);
  --color-polygon: var(--dark-polygon-color);
  --color-polygon-text: var(--dark-polygon-color-text);
  --color-hamburger-background-menu: var(
    --dark-color-hamburger-background-menu
  );
  --color-hamburger-link: var(--dark-color-hamburger-link);
  --text-color: var(--dark-text-color);
  --color-footer-background: var(--dark-color-footer-background);
  --color-footer-text: var(--dark-color-footer-text);
}

.transition-enabled {
  transition: background-color 0.5s ease, color 0.5s ease,
    border-color 0.5s ease, fill 0.5s ease;
}

.transition-enabled .section,
.transition-enabled div.separateur,
.transition-enabled .section-polygone-haut,
.transition-enabled .section-polygone-haut p,
.transition-enabled h2,
.transition-enabled p,
.transition-enabled img.col-contenu,
.transition-enabled .col-contenu-img,
.transition-enabled .profile-pic,
.transition-enabled div.col-contenu,
.transition-enabled .clickable-link {
  transition: background-color 0.5s ease, color 0.5s ease,
    border-color 0.5s ease, fill 0.5s ease;
}

.clickable-link:hover,
.clickable-link:focus {
  color: var(--text-color);
}

* {
  box-sizing: border-box;
}

body {
  display: -webkit-box;
  display: -ms-flexbox;
  background-color: var(--background-color);
  background: var(--background-color);
  font-family: var(--font);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

main {
  flex: 1;
}

img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/****************/
/* HEADER COVER */
/****************/
header.cover {
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/media/cover.jpg') no-repeat center/cover;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

#particle-slider {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

header.cover p {
  color: var(--color-header-description);
  font-size: 14px;
  position: absolute;
  top: 220px;
  width: 100%;
  text-align: center;
}

.header-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  position: absolute;
  top: 20px;
  text-align: center;
}

/******************/
/* MENU HAMBURGER */
/******************/
#header-menu {
  position: fixed;
  top: -3px;
  left: 0px;
  width: 250px;
  padding-top: 40px;
  background: var(--color-hamburger-background-menu);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  z-index: 11;
}

#header-menu-toggle {
  position: absolute;
  top: 36px;
  left: 45px;
  z-index: 12;
  -webkit-user-select: none;
  user-select: none;
}

#header-menu li {
  padding: 10px 20px;
  font-size: 16px;
}

#header-menu a {
  color: var(--color-hamburger-link);
  text-decoration: none;
  font-family: var(--font);
  transition: color 0.3s;
}

#header-menu a:hover,
#header-menu a:focus {
  color: var(--color-vertical-line);
  border-radius: 5px;
}

#header-menu-toggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 13;
}

#header-menu-toggle span {
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: var(--color-header-icons);
  border-radius: 3px;
  z-index: 12;
  transform-origin: 50%;
  transition: transform 0.5s, opacity 0.55s ease;
}

/* Rotation des barres pour former un "X" */
#header-menu-toggle input:checked ~ span {
  transform: rotate(45deg);
  position: absolute;
  left: 0;
}

#header-menu-toggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
}

#header-menu-toggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg);
}

#header-menu-toggle input:checked ~ #header-menu {
  transform: translateX(+10%);
}

#header-menu-toggle:hover span {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/****************/
/* SOCIAL ICONS */
/****************/
.header-social-icons {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

.header-social-icons a {
  text-decoration: none;
  outline: none;
  transition: transform 0.3s ease;
  border-radius: 50%;
  display: inline-block;
}

.header-social-icons i {
  color: var(--color-header-icons);
  font-size: 30px;
  width: 20px;
}

.header-social-icons a:hover {
  transform: scale(1.2);
}

#theme-toggle {
  background-color: transparent;
  border: none;
  padding-right: 15px;
  cursor: pointer;
}

#theme-toggle i {
  transition: transform 0.3s ease;
}

#theme-toggle:hover i {
  transform: scale(1.2);
}

/************/
/* SECTIONS */
/************/
.section {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 5px;
  padding-bottom: 30px;
  overflow: auto;
}

div.separateur {
  background-color: var(--color-polygon-text);
  position: relative;
  height: 1px;
  width: 150px;
  left: 50%;
  margin-left: -75px;
}

.section-polygone-haut {
  background-color: var(--color-polygon);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 135px), 0 100%);
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 70px;
  overflow: auto;
}

.section-polygone-haut p {
  color: var(--color-polygon-text);
  font-size: 22px;
  text-align: center;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  color: var(--text-color);
  text-align: center;
  font-size: 34px;
  margin-top: 0px;
}

/****************/
/* COLONNES IMG */
/****************/
img.col-contenu {
  max-width: 400px;
}

.col-contenu-img {
  width: 40%;
  float: left;
  text-align: center;
  padding: 0;
}

div.col-contenu {
  width: 60%;
  padding-left: 16px;
}

.float-right {
  float: right;
}

/******************/
/* COLONNES TEXTE */
/******************/
.texte-avec-ligne-verticale {
  border-left: 4px solid var(--color-vertical-line);
  color: var(--text-color);
  display: inline-block;
  padding-left: 8px;
  height: 75px;
  z-index: 9999;
}

.texte-avec-ligne-verticale p {
  margin-top: 0;
}

/********************/
/* LIENS CLIQUABLES */
/********************/
.clickable-link {
  color: var(--color-vertical-line);
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: bold;
}

.clickable-link:hover,
.clickable-link:focus {
  color: var(--text-color);
}

/**************/
/* PARTICULES */
/**************/
#particles-js {
  position: absolute;
  top: 360px;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 150vh, 0% 100%);
  z-index: 1;
}

/*************/
/* CARROUSEL */
/*************/
#drag-container,
#spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  width: 40vw;
  height: 35vh;
  display: flex;
  margin: auto;
  pointer-events: auto;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg);
  transform: rotateX(-10deg);
  z-index: 0;
}

#drag-container img,
#drag-container video {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  -webkit-box-shadow: 0 0 8px #fff;
  box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent, #0005);
}

#drag-container img:hover,
#drag-container video:hover {
  -webkit-box-shadow: 0 0 15px #fffd;
  box-shadow: 0 0 15px #fffd;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
  font-family: Serif;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotateX(90deg);
  transform: translate(-50%, -50%) rotateX(90deg);
  color: #fff;
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotateX(90deg);
  transform: translate(-50%, -50%) rotateX(90deg);
  background: -webkit-radial-gradient(
    center center,
    farthest-side,
    #9993,
    transparent
  );
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }

  to {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }

  to {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@-webkit-keyframes spinRevert {
  from {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }

  to {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}

@keyframes spinRevert {
  from {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }

  to {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}

/************************/
/** MODALE DES COOKIES **/
/************************/
.cky-modal:not(.cky-show) {
  display: none;
}

.cky-modal {
  top: 30% !important;
}

/************************/
/******** FOOTER ********/
/************************/
.footer {
  background: var(--color-footer-background);
  color: var(--color-footer-text);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  flex: 1;
}

.footer-profile {
  border: 2px solid var(--color-header-image);
  border-radius: 50%;
  width: 100px;
  margin-bottom: 10px;
}

.footer-profile:hover {
  animation: pulse 1s infinite ease-in-out;
  border-color: var(--color-vertical-line);
  transition: border-width 0.5s ease, border-color 0.5s ease;
}

.footer-text {
  color: var(--color-footer-text);
  margin: 5px 0;
  line-height: 1.3;
}

.footer-text a {
  color: var(--color-vertical-line);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-text a:hover {
  color: var(--color-footer-text);
}

/*********************/
/* RESPONSIVE DESIGN */
/*********************/
@media only screen and (max-width: 767px) {
  /******************/
  /* MENU HAMBURGER */
  /******************/
  #header-menu {
    left: 0px;
    width: 55vw;
    padding-top: 20px;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  #header-menu li {
    padding: 10px 20px;
    font-size: 24px;
  }

  #header-menu a {
    font-size: 2vw;
    padding: 2px;
  }

  /***********/
  /* SECTION */
  /***********/
  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-polygone-haut {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%);
    padding-bottom: 40px;
  }

  h2 {
    font-size: 30px;
  }

  /****************/
  /* COLONNES IMG */
  /****************/
  img.col-contenu {
    width: 100%;
  }

  .col-contenu-img {
    width: 100%;
    float: none;
    padding: 0;
  }

  .profile-pic {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    height: auto;
  }

  div.col-contenu {
    width: 100%;
    padding-left: 0px;
    margin-top: 20px;
  }

  /************************/
  /******** FOOTER ********/
  /************************/
  .footer-profile {
    width: 70px;
  }

  .footer-content {
    margin: 5px;
    flex-basis: 100%;
  }
}

</style>
