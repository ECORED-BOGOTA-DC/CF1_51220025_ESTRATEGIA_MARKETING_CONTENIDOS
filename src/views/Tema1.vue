<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
    
    .container-100.pt-4(style="background: linear-gradient(0deg, rgba(255,255,255,1) 29%, #FFDED2 29%, #FFDED2 80%)")
      p.mb-5 En lo que respecta a la investigación, técnicas, métodos de búsqueda y análisis de la información en el ámbito del marketing digital, son varios los aspectos que se deben tener en cuenta en relación con el registro de los derechos de autor. Por ello, se pretende que aborde sobre técnicas y métodos de búsqueda, análisis y validación de datos, y criterios de identificación de estándares informáticos con el fin de que su aprendizaje sea lo suficientemente amplio como para desenvolverse de manera más práctica en este ámbito.
        br
        br
        |Por lo anterior lo invitamos a observar el video que se presenta a continuación con el fin de que amplíe los conocimientos sobre este importante tema, esto es:

      figure.col-12.mx-auto.mb-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
