<template>
  <div class="footer-content">
    <router-link to="/details">
      <img class="footer-profile" src="@/assets/media/profile.png" alt="Justin Allard" id="profilePic" />
    </router-link>
    <div class="footer-text">
      <p>
        Besoin de discuter de vos projets pour une future collaboration?
        <br />
        <router-link to="/contact"><b> 😊 Contactez-moi ! 😊</b></router-link>
        <br /><br />
        <router-link to="/confidentialite-ca">Politique de confidentialité</router-link>
        <br /><br />
        © Justin Allard 2024
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style>
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

#app {
  margin-top: 0;
  padding-top: 0;
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
