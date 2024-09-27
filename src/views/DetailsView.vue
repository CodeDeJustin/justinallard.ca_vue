<template>
  <div>
    <!-- Vidéo en plein écran -->
    <video width="100%" height="auto" controls autoplay>
      <source :src="require('@/assets/media/EasterEgg.mp4')" type="video/mp4" />
      <!-- Ce texte n'apparaît que si la vidéo ne peut pas être lue -->
      Votre navigateur ne supporte pas l'élément vidéo.
    </video>
  </div>
</template>

<script>
export default {
  name: 'DetailsView',
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>