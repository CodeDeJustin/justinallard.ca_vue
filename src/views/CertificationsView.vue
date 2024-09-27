<template>
  <div>
    <!-- HEADER -->
<AppHeader />

    <!-- SECTION POLYGONE HAUT -->
    <main>
<AppPolygone />

      <!-- SECTION PRINCIPALE -->
      <section class="section">
        <h2>Certifications</h2>

        <div class="certifications-container">
          <div class="certification-item">
            <a :href="require('@/assets/media/Professional Scrum Master II.pdf')" target="_blank">
              <img
                class="certification-img"
                :src="require('@/assets/media/professional-scrum-master-ii-psm-ii.png')"
                alt="Certification Professional Scrum Master™ II"
              />
            </a>
            <p>
              <a
                :href="require('@/assets/media/Professional Scrum Master II.pdf')"
                class="clickable-link"
                target="_blank"
                >Professional Scrum Master™ II</a
              >
            </p>
            <p>
              La certification Professional Scrum Master™ II (PSM II) valide ma
              capacité en tant que Scrum Master à appliquer le cadre Scrum, à
              soutenir les équipes Scrum et à résoudre des problèmes complexes
              dans le monde réel.
              <br /><br />
              PSM II est reconnu par l’industrie comme une certification
              démontrant une connaissance avancée de Scrum et une compréhension
              approfondie des rôles et responsabilités d'un Scrum Master.
            </p>
          </div>
          <div class="certification-item">
            <a :href="require('@/assets/media/Professional Scrum Product Owner I.pdf')" target="_blank">
              <img
                class="certification-img"
                :src="require('@/assets/media/professional-scrum-product-owner-i-pspo-i.png')"
                alt="Certification Professional Scrum Product Owner™ I"
              />
            </a>
            <p>
              <a
                :href="require('@/assets/media/Professional Scrum Product Owner I.pdf')"
                class="clickable-link"
                target="_blank"
                >Professional Scrum Product Owner™ I</a
              >
            </p>
            <p>
              La certification Professional Scrum Product Owner™ I (PSPO I)
              valide ma connaissance du cadre Scrum et ma capacité à soutenir et
              à permettre la création et la livraison de valeur.
              <br /><br />
              Obtenir la certification PSPO I démontre ma compréhension de la
              manière de combler l'écart entre la stratégie et la gestion de
              produit agile afin de créer des produits à forte valeur ajoutée en
              utilisant Scrum.
            </p>
          </div>
          <div class="certification-item">
            <a :href="require('@/assets/media/Professional Scrum Master I.pdf')" target="_blank">
              <img
                class="certification-img"
                :src="require('@/assets/media/professional-scrum-master-i-psm-i.png')"
                alt="Certification Professional Scrum Master™ I"
              />
            </a>
            <p>
              <a
                :href="require('@/assets/media/Professional Scrum Master I.pdf')"
                class="clickable-link"
                target="_blank"
                >Professional Scrum Master™ I</a
              >
            </p>
            <p>
              La certification Professional Scrum Master™ I (PSM I) valide ma
              connaissance du framework Scrum, des responsabilités Scrum Master
              et de la manière d'appliquer Scrum.
              <br /><br />
              PSM I est reconnu par l’industrie comme une certification
              démontrant un niveau fondamental de maîtrise de Scrum. En tant que
              titulaire de la certification PSM I, j'ai prouvé que je comprends
              Scrum tel que décrit dans le Guide Scrum et comment appliquer
              Scrum dans les équipes Scrum.
            </p>
          </div>
          <div class="certification-item">
            <a :href="require('@/assets/media/Certificate_C-C6SBD7TKMF.pdf')" target="_blank">
              <img
                class="certification-img"
                :src="require('@/assets/media/ASSOCIATE - MECHANICAL DESIGN.png')"
                alt="Certification Associate Mechanical Design SolidWorks"
              />
            </a>
            <p>
              <a
                :href="require('@/assets/media/Certificate_C-C6SBD7TKMF.pdf')"
                class="clickable-link"
                target="_blank"
                >SolidWorks Associate Mechanical Design</a
              >
            </p>
            <p>
              Cette certification valide mes compétences fondamentales en
              conception mécanique et en analyse avec SOLIDWORKS.
              <br /><br />
              Elle atteste de ma capacité à concevoir des pièces et des
              assemblages complexes et à réaliser des mises en plan techniques
              selon les normes de l'industrie. Elle démontre également ma
              maîtrise des fonctionnalités essentielles de SOLIDWORKS, y compris
              les contraintes géométriques, les relations d'esquisse et les
              techniques de modélisation avancées.
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
  name: 'CertificationsView',
  components: {
    AppHeader,
    AppFooter,
    AppPolygone,
  },
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

/******************/
/* CERTIFICATIONS */
/******************/
.certifications-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background: none;
  border: none;
}

.certification-item {
  width: calc(25% - 20px);
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: none;
  border: none;
  padding: 0;
}

.certification-img {
  width: 100%;
  height: auto;
  max-width: 250px;
  margin: 0 auto;
  box-shadow: none;
  border-radius: 0;
  transition: all 0.3s ease-in-out;
  background: none;
  border: none;
  padding: 0;
}

.certification-img:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: none;
  transition: all 0.3s ease-in-out;
}

.certification-item p {
  color: var(--text-color);
  margin: 10px 0;
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
@media only screen and (max-width: 1024px) {
  .certification-item {
    width: calc(50% - 20px);
  }
}

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

  /************/
  /* SECTIONS */
  /************/
  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-polygone-haut {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%);
    padding-bottom: 40px;
  }

  .section-polygone-bas {
    clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%);
    padding-top: 40px;
  }

  h2 {
    font-size: 30px;
  }

  /******************/
  /* CERTIFICATIONS */
  /******************/
  .certification-item {
    width: 100%;
    margin-bottom: 20px;
    padding: 20px 0;
  }

  .certification-img {
    max-width: 100%;
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
