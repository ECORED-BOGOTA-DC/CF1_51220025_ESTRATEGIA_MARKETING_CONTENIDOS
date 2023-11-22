<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En el mundo del <em>marketing</em> digital, es necesario tener claridad a qué segmento se ha apuntado dado que este es el punto de partida de las empresas hacia su norte, investigar y gestionar la información, así como validar y verificar la proveniencia de esta, es una tarea diaria, dado que la normatividad del <em>copyright</em> defendiendo los derechos con la propiedad intelectual se debe respetar. De esta manera se continúa con el proceso de social media y llegar a las plataformas virtuales en donde las redes sociales influyen en la vida de los clientes reales y potenciales, logrando alcanzar ese posicionamiento de marca y de producto que tanto se ha buscado. Crear contenidos digitales es el paso siguiente, con una estrategia clara dada por elección cuidadosa y direccionada, según el plan de <em>marketing</em> en busca del posicionamiento que las compañías necesitan para tener éxito en la incursión en un nuevo mercado o mejoramiento de ventas reflejado por el crecimiento de los clientes, siguiendo técnicas y criterios de publicación según el <em>buyer persona</em>.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
