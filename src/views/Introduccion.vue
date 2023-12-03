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
          p.mb-0(data-aos="fade-left") Estimado aprendiz, se da la bienvenida a este momento de aprendizaje orientado a reconocer entre otras cosas los beneficios de los contenidos digitales, al igual que la relevancia que actualmente tienen los tipos y herramientas de búsqueda, el <em>Social media</em>, técnicas de posicionamiento y muchos otros temas más que serán de gran importancia en este programa de formación que adelanta a partir de este momento. Antes de iniciar le invitamos a revisar el siguiente video con el fin de identificar el contexto de aprendizaje:

      figure.col-12.mx-auto.mb-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Xpvimv9gLB0?si=Q48DFgKgAYGu-Wim" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
