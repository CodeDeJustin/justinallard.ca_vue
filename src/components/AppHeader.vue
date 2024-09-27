<template>
  <header class="cover">
    <div id="particle-slider">
      <div class="slides">
        <div
          id="first-slide"
          class="slide"
          data-src="data:image/png;base64,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"
        ></div>
      </div>
      <canvas class="draw"></canvas>
    </div>
    <!-- Fin du Particle Slider -->

    <router-link to="/" class="header-link">
      <p>Développeur Full Stack | Concepteur senior | PSM™ II, PSPO™ I, PSM™ I</p>
    </router-link>

    <nav role="navigation">
      <div id="header-menu-toggle">
        <input type="checkbox" id="menu-toggle-checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="header-menu">
          <router-link to="/"><li>Accueil</li></router-link>
          <router-link to="/certifications"><li>Certifications</li></router-link>
          <router-link to="/materiel"><li>Matériel de travail</li></router-link>
          <router-link to="/outils"><li>Outils de travail</li></router-link>
          <router-link to="/portfolio"><li>Portfolio</li></router-link>
          <router-link to="/contact"><li>Contact</li></router-link>
          <router-link to="/pacman" target="_blank"><li>Coin détente!</li></router-link>
        </ul>
      </div>
    </nav>

    <div class="header-social-icons">
      <button id="theme-toggle" aria-label="Changer le thème">
        <i id="theme-icon" class="fas fa-sun"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
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

html,
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
  padding: 0;
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

/***********/
/* SECTION */
/***********/
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

.profile-pic {
  max-width: 100%;
  height: auto;
  display: inline-block;
  box-shadow: 0 0 35px rgba(0, 0, 0, 1);
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
}

div.col-contenu {
  width: 60%;
  padding-left: 16px;
}

.float-right {
  float: right;
}

.profile-pic:hover {
  transform: scale(1.025) rotate(1deg);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
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