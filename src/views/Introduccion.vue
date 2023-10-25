<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .container-100.pt-4(style="background: linear-gradient(0deg, rgba(255,255,255,1) 29%, rgba(225,214,243,1) 29%, rgba(225,214,243,1) 80%)")
      .d-flex.flex-wrap.mb-5
        img.mb-4.mb-md-auto(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px" data-aos="fade-right")
        .col-md.ps-md-4
          p.mb-0(data-aos="fade-left") Este componente busca reconocer la importancia de la valoración integral de la salud en la primera infancia, a través de la adecuada aplicación de la EAD-3. En el siguiente video se presenta, de manera genérica, su marco legal y normativo.

      figure.col-12.mx-auto.mb-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
