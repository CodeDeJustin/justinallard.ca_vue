<template>
  <div>
    <!-- HEADER -->
    <header>
      <!-- Le contenu de votre en-tête -->
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <section class="nav">
        <h1>OUTILS DE TRAVAIL</h1>
        <h3 class="span loader">
          <span class="m">M</span><span class="m">O</span><span class="m">N</span>
          <span class="m">&nbsp;</span><span class="m">C</span><span class="m">O</span>
          <span class="m">F</span><span class="m">F</span><span class="m">R</span>
          <span class="m">E</span><span class="m">&nbsp;</span><span class="m">À</span>
          <span class="m">&nbsp;</span><span class="m">O</span><span class="m">U</span>
          <span class="m">T</span><span class="m">I</span><span class="m">L</span>
          <span class="m">S</span>
        </h3>
        <div class="nav-container">
          <a class="nav-tab" href="#tab-langages">LANGAGES</a>
          <a class="nav-tab" href="#tab-frameworks">FRAMEWORKS</a>
          <a class="nav-tab" href="#tab-programmation">PROGRAMMATION</a>
          <a class="nav-tab" href="#tab-gestion">GESTION</a>
          <a class="nav-tab" href="#tab-modelisation">MODÉLISATION</a>
          <span class="nav-tab-slider"></span>
        </div>
      </section>

      <!-- SECTIONS -->
      <section id="tab-langages" class="slider">
        <h1>LANGAGES</h1>
        <h2 class="h2-columns">
          HTML<br>
          CSS<br>
          JavaScript<br>
          C#<br>
          TypeScript<br>
          Python<br>
          Kotlin<br>
          SQL<br>
          ASP.NET<br>
          Visual Basic<br>
          PHP<br>
          Java
        </h2>
      </section>

      <section id="tab-frameworks" class="slider">
        <h1>FRAMEWORKS</h1>
        <h2>
          React<br>
          Svelte & SvelteKit<br>
          Vue<br>
          Ionic<br>
          Django
        </h2>
      </section>

      <section id="tab-programmation" class="slider">
        <h1>PROGRAMMATION</h1>
        <h2 class="h2-columns">
          Visual Studio<br>
          Visual Studio Code<br>
          SQL Server Management<br>
          MySQL<br>
          Figma<br>
          Git, Github, GitKraken<br>
          Android Studio<br>
          Docker<br>
          Node.js<br>
          OpenAI GPT-4<br>
          (GPT-4 Licence d'équipe)
        </h2>
      </section>

      <section id="tab-gestion" class="slider">
        <h1>GESTION</h1>
        <h2>
          Professional Scrum Master™ I (PSM 1)<br>
          Professional Scrum Master™ II (PSM 2)<br>
          Professional Scrum Product Owner™ I (PSPO 1)<br>
          Cadre de développement Scrum (Méthode Agile)<br>
          Microsoft Teams<br>
          Notion.so<br>
          Confluence<br>
          Jira<br>
          Trello
        </h2>
      </section>

      <section id="tab-modelisation" class="slider">
        <h1>MODÉLISATION</h1>
        <h2>
          PTC Creo Parametric<br>
          PTC Creo Wildfire<br>
          Solidworks<br>
          Autodesk Inventor<br>
          Autodesk Revit
        </h2>
      </section>
      <canvas class="background"></canvas>
    </main>

    <!-- FOOTER -->
    <footer>
      <!-- Le contenu de votre pied de page -->
    </footer>
  </div>
</template>

<script>
import Particles from 'particlesjs';

export default {
  name: 'OutilsView',
  mounted() {
    // Particles.js Initialization
    Particles.init({
      selector: ".background",
      color: ["#3576E2", "#ff0266", "#000000"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: ["#faebd7", "#3576E2", "#ff0266"],
            maxParticles: 43,
            connectParticles: false,
          },
        },
      ],
    });

    // Navigation logic for tabs
    class NavigationPage {
      constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        this.lastScroll = 0;
        this.init();
      }

      init() {
        const self = this;
        document.querySelectorAll(".nav-tab").forEach(tab => {
          tab.addEventListener("click", function (event) {
            self.onTabClick(event, this);
          });
        });
        window.addEventListener("scroll", () => this.onScroll());
        window.addEventListener("resize", () => this.onResize());
      }

      onTabClick(event, element) {
        event.preventDefault();
        const targetId = element.getAttribute("href");
        const target = document.querySelector(targetId);
        const scrollTop = target.offsetTop - this.tabContainerHeight + 1;
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }

      onScroll() {
        this.checkHeaderPosition();
        this.findCurrentTabSelector();
        this.lastScroll = window.scrollY;
      }

      onResize() {
        if (this.currentId) {
          this.setSliderCss();
        }
      }

      checkHeaderPosition() {
        const headerHeight = 75;
        const navContainer = document.querySelector(".nav-container");
        if (window.scrollY > headerHeight) {
          navContainer.classList.add("nav-container--scrolled");
        } else {
          navContainer.classList.remove("nav-container--scrolled");
        }

        const offset = document.querySelector(".nav").offsetTop + document.querySelector(".nav").offsetHeight - this.tabContainerHeight - headerHeight;
        if (window.scrollY > this.lastScroll && window.scrollY > offset) {
          navContainer.classList.add("nav-container--move-up");
        } else {
          navContainer.classList.remove("nav-container--move-up");
        }
      }

      findCurrentTabSelector() {
        let newCurrentId = null;
        let newCurrentTab = null;

        document.querySelectorAll(".nav-tab").forEach(tab => {
          const id = tab.getAttribute("href");
          const target = document.querySelector(id);
          const offsetTop = target.offsetTop - this.tabContainerHeight;
          const offsetBottom = target.offsetTop + target.offsetHeight - this.tabContainerHeight;
          if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = tab;
          }
        });

        if (this.currentId !== newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
        }
      }

      setSliderCss() {
        if (this.currentTab) {
          const slider = document.querySelector(".nav-tab-slider");
          slider.style.width = `${this.currentTab.offsetWidth}px`;
          slider.style.left = `${this.currentTab.offsetLeft}px`;
        }
      }
    }

    new NavigationPage();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "ROBOTO", sans-serif;
}

.nav,
.slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: #1e1f26;
  text-align: center;
  padding: 0 2em;
}

.nav h1,
.slider h1 {
  font-family: "Josefin Sans", sans-serif;
  font-size: 5vw;
  margin: 15px;
  padding-bottom: 0.5rem;
  letter-spacing: 0.5rem;
  color: #3576E2;
  transition: all 0.3s ease;
  z-index: 3;
}

h1:hover {
  transform: translate3d(0, -10px, 22px);
  color: #ff0266;
}

.slider h2 {
  font-size: 2vw;
  letter-spacing: 0.3rem;
  font-family: "ROBOTO", sans-serif;
  font-weight: 300;
  color: #faebd7;
  z-index: 4;
}

h3.span {
  font-size: 2vw;
  letter-spacing: 0.7em;
  font-family: "ROBOTO", sans-serif;
  font-weight: 300;
  color: #faebd7;
  z-index: 4;
}

span:hover {
  color: #ff0266;
  font-weight: 500;
  font-size: 2.2vw;
}

a {
  text-decoration: none;
}

.nav-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: #1e1f26;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-container--top-first {
  position: fixed;
  top: 75px;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-container--top-second {
  position: fixed;
  top: 0;
}

.nav-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #3576E2;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;
  font-size: 2vw;
}

.nav-tab:hover {
  color: #1e1f26;
  background: #3576E2;
  transition: all 0.5s ease;
}

.nav-tab-slider {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #3576E2;
  transition: left 0.3s ease;
}

.background {
  position: absolute;
  height: 90vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: auto;
}

@media (min-width: 800px) {

  .nav h1,
  .slider h1 {
      font-size: 5vw;
  }

  .nav h2,
  .slider h2 {
      font-size: 3vw;
  }

  .nav-tab {
      font-size: 3vw;
  }
}

@media only screen and (min-width: 360px) {

  .nav h1,
  .slider h1 {
      font-size: 8vw;
  }

  .nav h2,
  .slider h2 {
      font-size: 2vw;
      letter-spacing: 0.2vw;
  }

  .nav-tab {
      font-size: 1.2vw;
  }
}

.background {
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.loader span {
  color: #faebd7;
  text-shadow: 0 0 0 #faebd7;
  -webkit-animation: loading 1s ease-in-out infinite alternate;
  animation: loading 1s ease-in-out infinite alternate;
  /* Standard property */
}

@-webkit-keyframes loading {
  to {
      text-shadow: 20px 0 70px #ff0266;
      color: #ff0266;
  }
}

@keyframes loading {

  /* Standard rule */
  to {
      text-shadow: 20px 0 70px #ff0266;
      color: #ff0266;
  }
}

.loader span:nth-child(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.loader span:nth-child(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.loader span:nth-child(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.loader span:nth-child(5) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.loader span:nth-child(6) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.loader span:nth-child(7) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.loader span:nth-child(8) {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.loader span:nth-child(9) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.loader span:nth-child(10) {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

.loader span:nth-child(11) {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.loader span:nth-child(12) {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
}

.loader span:nth-child(13) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

.loader span:nth-child(14) {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s;
}

.loader span:nth-child(15) {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
}

.loader span:nth-child(16) {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

.loader span:nth-child(17) {
  -webkit-animation-delay: 1.6s;
  animation-delay: 1.6s;
}

.loader span:nth-child(18) {
  -webkit-animation-delay: 1.7s;
  animation-delay: 1.7s;
}

.loader span:nth-child(19) {
  -webkit-animation-delay: 1.8s;
  animation-delay: 1.8s;
}

</style>