<template>
  <div class="PacmanBody">
    <!-- HEADER -->
    <header class="PacmanHeader">
      <h1>PACMAN !</h1>
    </header>

    <div id="shim">shim for font face</div>

    <h2>Pacman !</h2>
    <div>
      <a href="https://github.com/daleharvey/pacman" target="_blank"></a>
    </div>

    <div id="pacman"></div>

    <!-- FOOTER -->
    <footer class="PacmanFooter">
      <nav>
        <router-link to="/">Retour à la page d'accueil</router-link>
      </nav>
      <br />
      © Justin Allard, 2024
    </footer>
  </div>
</template>

<script>
export default {
  name: "PacmanView",
  mounted() {
    // Script Pacman
    this.loadPacmanScripts();
  },
  methods: {
    loadPacmanScripts() {
      const script1 = document.createElement("script");
      script1.src = "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js";
      script1.defer = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
      script2.defer = true;
      document.body.appendChild(script2);

      const script3 = document.createElement("script");
      script3.src = "/js/pacman.js"; // Make sure pacman.js is accessible within your project
      script3.defer = true;
      document.body.appendChild(script3);
    }
  }
};
</script>

<style scoped>
/****************************************************/
/************ CSS en partie inspiré de: *************/
/*** https://codepen.io/Rowanimations/pen/ZEOEENe ***/
/********** Et adapté par: Justin Allard ************/
/****************************************************/

/**************************************/
/* MISE EN PAGE DE "PACMAN" */
/**************************************/
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  background-color: black;
}

body {
  background-color: black;
  font-family: Verdana, sans-serif;
  font-size: 100%;
  text-align: center;
  overflow: auto;
}

#pacman {
  height: 650px;
  width: 382px;
  border-radius: 5px;
  margin: 20px auto;
}

#shim {
  font-family: 'Permanent Marker', cursive;
  position: absolute;
  visibility: hidden;
}

.PacmanHeader {
  background-image: url("~@/assets/media/neon-pacman.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
  font-size: 180%;
  color: #fdff00;
  text-align: center;
}

.PacmanNav {
  background-color: black;
  text-align: center;
  position: sticky;
  top: 0;
  padding-right: 0px;
  z-index: 999;
}

.PacmanBody {
  background-color: black;
  font-family: Verdana, sans-serif;
  font-size: 100%;
  text-align: center;
  height: 0px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.PacmanFooter {
  background: #2121de;
  padding: 30px;
  color: white;
}

/*********************************/
/* MISE EN PAGE DE LA NAVIGATION */
/*********************************/
nav a {
  padding-right: 80px;
  padding-left: 80px;
  transition: 0.3s ease;
}

a {
  color: white;
  text-decoration: none;
  text-align: center;
}

h2 {
  font-family: Verdana, sans-serif;
  font-size: 300%;
  color: #fdff00;
  padding-left: 15px;
  text-align: center;
}

/*************************/
/* MISE EN PAGE DIVERSES */
/*************************/
p,
ul,
li,
td {
  color: black;
  font-size: 100%;
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  padding: 20px 300px;
}

a:link {
  color: yellow;
  text-decoration: underline;
}

a:visited {
  color: yellow;
}

a:hover {
  color: blue;
  text-decoration: none;
  font-weight: bold;
}

a:active,
a:focus {
  color: red;
}

.slidecontainer img {
  display: block;
  margin: 0;
  padding: 0;
}
</style>
