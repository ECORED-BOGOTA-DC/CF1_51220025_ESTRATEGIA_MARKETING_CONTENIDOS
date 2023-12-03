<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 2
      h1 <em>Social media</em>
    
    p.mb-5(data-aos="fade-right") Para comprender mejor lo planteado, de manera general se desarrollará algunos de los conceptos básicos en torno a las social media, las técnicas de masificación, y las diferentes plataformas que permiten hacer parte de este mundo, veamos:
  
    .mb-5.tarjeta.d-flex.flex-wrap.align-items-center.p-4(style="background-color: #FFE5DD" data-aos="fade-right")
      img.mx-auto.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/img-1.png' style="max-width: 226px")
      .col-lg-7.pe-lg-4
        .titulo-segundo.color-acento-contenido.mb-4
          h2 <em>Social media</em>
        p.mb-4 Con el fin de contextualizarlo en el tema del social media, le invitamos a que revise el siguiente recurso.
        .col-auto
          a.boton.boton--b(:href="obtenerLink('downloads/PDF-Social_media.pdf')" target="_blank")
            span Descargar 
            i.fas.fa-file-download
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1. Tipos de redes sociales y contenido
    
    .d-flex.flex-wrap.mb-5.align-items-center
      img.mb-4.mb-lg-auto.col-lg-4.col-xl-3.mx-auto(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 295px" data-aos="fade-right")
      .col-lg-8.col-xl-9.ps-lg-4(data-aos="fade-left")
        p En el mundo existen múltiples redes sociales, algunas solo llegan a ser divulgadas en una zona, región o país y otras llegan a traspasar fronteras, como lo son Facebook, X, Instagram, LinkedIn, entre otras. Estas son las aplicaciones que tienen más descargas en el mundo tanto para Android como iOS, dichas plataformas son totalmente gratis, pero hay versiones pagas donde se puede publicitar, tener diferentes interacciones con los usuarios como es el caso de LinkedIn o tener estadísticas para el beneficio de un usuario, empresa o grupo de personas.
        p.mb-0 Las diferentes redes sociales que se encuentran actualmente son las siguientes:

    .d-flex.mb-5
      h3.d-flex.align-items-center.py-2.ps-3.pe-4(style="background-color: #FF5A20; border-radius: 50px")
        p.mb-0.me-4(style="width: 36px; height: 36px; border-radius: 50%; border: 5px solid white;" data-aos="fade-up")
        |<span data-aos="fade-left">Facebook</span>
    
    .d-flex.flex-wrap.mb-5
      .col-md-7.col-lg-9.col-xl-10.order-2.order-md-1.pe-md-4(data-aos="fade-right")
        p Como ya es sabido, Mark Zuckerberg en 2004, creó la red social Facebook, esto lo hizo junto con sus compañeros de Harvard, Eduardo Saverin, Andrew MacCollum, Dustin Moskovitz y Chris Hughes, estudiantes de la misma universidad y fue creada con el fin de intercambiar información y conectarse con todos los estudiantes de esta universidad, tuvo una acogida increíble y se extendió a lo largo de las universidades en Boston y posteriormente creció hasta abarcar la mayoría de las universidades en el todo el territorio de los estados unidos hasta convertirse en el magnate que se conoce hoy con más de 2.800 millones de usuarios activos mensuales y ser la red social más conocida en todo el planeta y tener el mayor número de usuarios registrados.
        p.mb-0 Existen diferentes herramientas dentro y fuera de la aplicación que generan beneficios para los diferentes usuarios como son:
      img.mb-4.mb-md-auto.mx-auto.col-md-5.col-lg-3.col-xl-2.order-1.order-md-2(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 185px" alt="imagen del logo de facebook" data-aos="fade-left")
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-2.d-flex.mb-4(data-aos="fade-right")
        .tarjeta(style="background-color: #E1D6F3; overflow: hidden;")
          img(src="@/assets/curso/temas/tema2/img-4.png")
          p.p-4.mb-0 <b>Business Manager de Facebook</b>
            br
            br
            | Aplicación gratuita que ayuda a administrar  las acciones que se deben tomar en <em>marketing</em> en el marco de una empresa para optimizar y hacer más rentable un negocio.
      .col-lg-6.ps-lg-2.d-flex.mb-4(data-aos="fade-left")
        .tarjeta(style="background-color: #E1D6F3; overflow: hidden;")
          img(src="@/assets/curso/temas/tema2/img-5.png")
          p.p-4.mb-0 <b>Marketplace</b>
            br
            br
            | Herramienta dentro de la aplicación para la compra y venta de diferentes productos o servicios. Esta aplicación se ha convertido en una fuente primordial para campañas publicitarias digitales, ya que cuentan con información que segmenta de manera ágil el mercado ligado a los gustos y afinidades de un usuario.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-9.order-2.order-mlg1.pe-md-4(data-aos="fade-right")
        p Actualmente, Facebook pertenece a Meta, un conglomerado de redes sociales y tecnología estadounidense, este gran magnate compró una aplicación de mensajería instantánea conocida como (WhatsApp), con el fin de hacer crecer su portafolio de servicios y para el 2020 el incremento de publicidad aumentó un 20 % con relación al año anterior. Su creador actualmente es la quinta persona más rica del mundo, según datos de Bloomberg.
        p.mb-0 Dentro de esta aplicación existe una versión paga, esta es para promocionar sus productos o servicios, ya sea desde historias, videos o publicación de fotos, estas funcionan de manera ágil y rápida debido a su algoritmo. Los gustos, las interacciones, las ubicaciones, los seguidores y personas seguidas por un usuario, hacen que esta plataforma segmente el mercado  y sea más fácil abordar con  publicidad a los clientes objetivos de cada empresa.
      img.mb-4.mb-md-auto.mx-auto.col-lg-3.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 295px" data-aos="fade-left")

    .d-flex.mb-5
      h3.d-flex.align-items-center.py-2.ps-3.pe-4(style="background-color: #FF5A20; border-radius: 50px")
        p.mb-0.me-4(style="width: 36px; height: 36px; border-radius: 50%; border: 5px solid white;" data-aos="fade-up")
        |<span data-aos="fade-left">X</span>
      
    .d-flex.flex-wrap.mb-5.align-items-center
      img.mb-4.mb-lg-auto.col-lg-4.mx-auto(src="@/assets/curso/temas/tema2/img-7.png" style="max-width: 295px" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        p(data-aos="fade-left") En 2006 su fundador Jack Dorse y lanza al mercado una red social con las palabras “configurando mi twitter”. Odeo fue una gran revolución del siglo en las redes sociales al convertirse en una plataforma para escuchar <em>podcast</em>  en la red social que hoy se conoce como  X y que casi llega a su fin por iTunes, el objetivo nuevo era tener un chat instantáneo de no mayor a 240 caracteres.  De esta red social nacieron varios caracteres que son usadas por otras aplicaciones como son el @ para contestar a mensajes y tener una identidad dentro de una red social, idea de Robert Andersen, el <em>hashtag</em>, sugerido por Chris Messina o el <em>retweet</em> idea de  Eric Rice. Esta es una de las aplicaciones que ha tenido menos cambios en su estructura y quieren seguir cultivando ya que hace parte de la esencia de esta empresa.
        .d-flex.flex-wrap
          .col-lg-9.col-xl-10.order-2.order-lg-1.pe-md-4
            p.mb-0(data-aos="fade-left") Actualmente, es una red social que crea tendencias, gracias a su simpleza y es una de las mayores o la mayor red social que usan los mandatarios de estados, empresarios, personajes influyentes para dar su opinión acerca de un tema de una manera práctica, rápida y donde se puede canalizar información y puntos de vista de la mayoría de los usuarios.
          img.mb-4.mb-lg-auto.mx-auto.col-lg-3.col-xl-2.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 185px" alt="imagen del logo de X" data-aos="fade-up")
    
    .d-flex.mb-5
      h3.d-flex.align-items-center.py-2.ps-3.pe-4(style="background-color: #FF5A20; border-radius: 50px")
        p.mb-0.me-4(style="width: 36px; height: 36px; border-radius: 50%; border: 5px solid white;" data-aos="fade-up")
        |<span data-aos="fade-left">LinkedIn</span>
      
    .d-flex.flex-wrap.mb-5.align-items-center
      .col-lg-9.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Es la red social de profesionales más grande del mundo. Usada para el <em>networking</em>, negocios e incrementar el valor a la marca personal de cada usuario.  Nace en 2003 gracias a sus fundadores Reid Hoffman, Konstantin Guericke, Jean-Luc Vaillant, Eric Ly, Allen Blue, como un portal de búsqueda de empleo. En 2016 Microsoft compró a LinkedIn, actualmente cuenta con millones de usuarios, y es una red social que bajo el lema “para llegar lejos tienes que conocer a las personas adecuadas”, conecta y comunica a millones de empresas, empresarios, formadores, academias y profesionales en una red de uso profesional, muy diferente a lo que conocemos de las otras redes donde el estilo de vida o vender un producto o servicio son de las principales características para crear un usuario.
        .d-flex.flex-wrap
          img.mb-4.mb-lg-auto.mx-auto.col-lg-3.col-xl-2(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 185px" alt="imagen del logo de linkedin" data-aos="fade-up")
          .col-lg-9.col-xl-10.ps-md-4
            p.mb-0(data-aos="fade-right") Esta red social tiene una versión gratuita y una paga con atributos potenciales para las personas que lo usan, una ventaja de la versión paga es él envío de mensajes sin límite a diferentes usuarios en un día, otra de ellas son las tabulaciones que realiza a la hora de una postulación de trabajo y que cada usuario vea las competencias de los demás aspirantes.
      img.mb-4.mb-lg-auto.col-lg-3.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema2/img-9.png" style="max-width: 295px" data-aos="fade-left")

    .d-flex.mb-5
      h3.d-flex.align-items-center.py-2.ps-3.pe-4(style="background-color: #FF5A20; border-radius: 50px")
        p.mb-0.me-4(style="width: 36px; height: 36px; border-radius: 50%; border: 5px solid white;" data-aos="fade-up")
        |<span data-aos="fade-left">Instagram</span>
      
    .d-flex.flex-wrap.align-items-center
      img.mb-4.mb-lg-auto.col-lg-3.mx-auto(src="@/assets/curso/temas/tema2/img-11.png" style="max-width: 295px" data-aos="fade-right")
      .col-lg-9.ps-lg-4
        p(data-aos="fade-left") Esta red social nace en Estados Unidos en 2010 gracias a Kevin Systrom y Mike Krieger, como un proyecto de fotografía para tecnología móvil, antes se llamaba Burbn y era una herramienta de georreferenciación, su gran éxito se formó gracias a personajes de la farándula donde publicaban las cosas de su día a día y esto agradaba mucho, ya que se podía estar al tanto lo que los ídolos o actores de preferencia del usuario hacían. Actualmente, cuenta con más de 600 millones de cuentas activas y es una de las redes sociales con más descargas en el mundo.
        .d-flex.flex-wrap
          .col-lg-9.col-xl-10.order-2.order-lg-1.pe-md-4
            p.mb-0(data-aos="fade-left") La finalidad de esta red social es generar una interacción entre dos usuarios,  en términos de negocio su finalidad es la misma, agregado a esto se busca que el alcance de un producto o servicio sea mayor, incrementar el reconocimiento de marca en las masas lo cual da como resultado más ventas para una empresa. Esta es una aplicación gratuita y cuenta con diversas opciones dentro de su menú como lo son las tiendas, esta nueva forma de vender ha gustado a sus clientes debido a que no necesitan generar una comunicación, para saber el costo de algún producto o servicio que se venda a través de esta opción.
          img.mb-4.mb-lg-auto.mx-auto.col-lg-3.col-xl-2.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 185px" alt="imagen del logo de instagram" data-aos="fade-up")

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Técnicas de masificación
    
    p(data-aos="fade-right") En la mayoría de redes sociales existen diferentes formas de incrementar las interacciones de los usuarios con otros usuarios o con empresas. Como se ha mencionado anteriormente existen estadísticas donde se mide dicha interacción con el fin de masificar e incrementar el volumen de usuarios allegados a una cuenta. 
    p(data-aos="fade-right") El <em>engagement</em> es el lazo que se crea emocionalmente con un usuario o producto, generado en las diferentes plataformas y se ve clasificado por número de me gustas, número de comentarios, número de veces compartido por algunas personas, número de veces que guardan una publicación, el número de vistas a un perfil, el número de alcance de una publicación, número de vistas a la página web, el alcance de la publicación, historia y comentario. Esta información también está descritay resumida en gráficas de comportamiento, como la edad, género y lugares de interacción. 
    p.mb-5(data-aos="fade-right") Entre las múltiples formas de estrategia para generar <em>engagement</em> de manera gratuita se encuentran las siguientes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-1.svg' style="width: 64px" alt='Implementar calendario de publicaciones')
        h5.mb-0 1. Implementar calendario de publicaciones
        p Este es un calendario común y corriente donde se incluyen fechas especiales dependiendo de la zona geográfica donde se ubique, en este se anotan las horas y días de celebración, o fechas de valor significativo para el usuario, esto con el fin de cumplir objetivos diarios no flexibles.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-2.svg' style="width: 64px" alt='Utilizar Instagram Stories')
        h5.mb-0 2. Utilizar Instagram <em>Stories</em>
        p Las <em>stories</em> transmiten una sensación del presente, del ahora, es muy importante realizar publicaciones casi en tiempo real y no pregrabadas para generar más empatía con los usuarios.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-3.svg' style="width: 64px" alt='Utilizar preguntas en los contenidos')
        h5.mb-0 3. Utilizar preguntas en los contenidos
        p Las interacciones con los usuarios son muy importantes, generar preguntas hacen un llamado a la respuesta y a la creación de vínculos con los usuarios de forma directa al ser respondidos de manera personal.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-4.svg' style="width: 64px" alt='Crear concursos o sorteos')
        h5.mb-0 4. Crear concursos o sorteos
        p El realizar estas actividades genera un <em>engagement</em> muy alto, ya que tiene que estar interactuando con una publicación directamente para ser tomados en cuenta en dicha actividad, es una manera de darse a conocer con usuarios que no están familiarizados aún con el producto, servicio u otro usuario.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-5.svg' style="width: 64px" alt='Utilizar hashtags populares o que identifiquen al usuario')
        h5.mb-0 5. Utilizar <em>hashtags</em> populares o que identifiquen al usuario
        p El número máximo de <em>hashtags</em> que se pueden incluir en la mayoría de aplicaciones es de 30, estos son muy importantes para llegar a gran parte del nicho de mercado o ubicación, el crear un <em>hashtag</em> único para un usuario o que lo identifique es muy bueno para ir generando identidad de marca, ya sea de un usuario, un servicio o un producto. 
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-6.svg' style="width: 64px" alt='Realizar publicaciones cuando la audiencia objetivo esté más activa')
        h5.mb-0 6. Realizar publicaciones cuando la audiencia objetivo esté más activa
        p Dentro de las múltiples estadísticas que son arrojadas por las redes sociales están incluidas las horas en las que existe más interacción con los usuarios o cuando ellos están activos, estas horas son primordiales para hacer publicaciones y <em>stories</em> y estas lleguen a tener un mayor alcance.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-7.svg' style="width: 64px" alt='En la publicidad tradicional incluir las redes sociales')
        h5.mb-0 7. En la publicidad tradicional incluir las redes sociales
        p Es muy importante que en toda la publicidad ATL sean incluidas las redes sociales de un usuario, empresa, producto o servicio ya que genera complementar lo que se da a conocer en estas piezas publicitarias.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-8.svg' style="width: 64px" alt='Llamar al call to actions en las publicaciones o stories')
        h5.mb-0 8. Llamar al <em>call to actions</em> en las publicaciones o <em>stories</em>
        p Hacer estas llamadas es incitar al usuario que ve una interacción más allá de lo visto en una pieza publicitaria en una <em>storie</em>  o publicación, en este se agregan botones con el fin de llevarlos a la página web oficial de un usuario, comprar un producto de manera fácil o suscribirse a algún servicio.
      
      .tarjeta.mx-auto.p-4(style="background-color: #E0D6F2; max-width: 400px")
        img.mb-4(src='@/assets/curso/temas/tema2/sl-9.svg' style="width: 64px" alt='Publicar una vez al día algún tipo de contenido')
        h5.mb-0 9. Publicar una vez al día algún tipo de contenido
        p Generar publicaciones diarias con el algoritmo de la mayoría de redes genera un <em>engagement</em>  que solo se puede evidenciar con una sola publicación, ya que al hacer muchas publicaciones en un día se compiten dentro de ellas mismas por ver cual genera más visualización. 

    p.mb-5(data-aos="fade-right") Entre las formas de  estrategia para generar <em>engagement</em> de manera paga se encuentran las siguientes:

    .row
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="fade-right")
        .w-100.tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p
            b Promocionar las publicaciones que mejor funcionan con el público al cual va dirigido
          p Estos son servicios especiales que tiene un costo para los usuarios que los adquieran y gracias a los algoritmos de cada aplicación, se puede enviar publicidad a un nicho de mercado donde va a tener mayor recepción de usuarios. 

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex(data-aos="fade-left")
        .w-100.tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2(style="color: white") 2
          p
            b Promocionar usuarios, servicios o productos, con influenciadores
          p En Colombia la Superintendencia De Industria y Comercio se encarga de regular las actividades de promoción de usuarios, productos o servicios a los influenciadores, gracias a estos personajes célebres se crea un <em>engagement</em> con usuarios de un nicho de mercado desconocido o generar fidelización de otros. 

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Plataformas publicitarias (adWords, adsense) y métodos de uso (<em>mass media</em>, red de <em>display</em>)
    
    p(data-aos="fade-right") Las métricas de internet son muy importantes para los especialistas en mercadeo a la hora de buscar falencias, fortalezas y oportunidades de una empresa; estas herramientas ayudan a los usuarios a desglosar y obtener información de manera ordenada y tabulada para lograr una investigación y planeación estratégica de cómo llegar a un mercado objetivo. 
    p.mb-5(data-aos="fade-right") Existen diversas plataformas publicitarias como las que se describen a continuación:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-edit-acordeon" data-aos="fade-left")
      .row.col-lg-11.mx-auto(titulo="AdWords")
        img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema2/img-13.svg' style="max-width: 133px" alt='imagen del logo adWords')
        .col-md.ps-lg-4
          p Actualmente, se conoce como Google ADS, es un sistema de publicidad que pertenece a Google, nació en el año 2000 y hoy se posiciona como una de las plataformas de publicidad <em>online</em> más grandes del mercado. Su principal característica es que logra conectar empresas con clientes de manera muy fácil y  precios ajustables para pequeñas, medianas y grandes empresas.
          p De igual manera cuenta con diferentes formas de publicitar y de esto determina el valor, si se desea aparecer más o aparecer al inicio en el motor de búsqueda va a tener un costo más elevado, Google ADS ayuda a potenciar  la visualización de un producto o servicio para llegar a nuevos clientes de la red de Google.
          p.mb-0 Para obtener esta plataforma publicitaria, solo se necesita una cuenta, que se crea de manera gratuita, para pautar ya es necesario de una inversión económica, estas páginas son totalmente intuitivas y vienen con el paso a paso de lo requerido para realizar las pautas publicitarias que se quieren.
      .row.col-lg-11.mx-auto(titulo="AdSense")
        img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema2/img-14.svg' style="max-width: 133px" alt='imagen del logo AdSense')
        .col-md.ps-lg-4
          p Google es una plataforma que permite tener ingresos pasivos gracias a los clics de la publicidad que se genera en Google Ads, para tener Google AdSense es necesario contar con una cuenta en YouTube o Display. 
          p.mb-0 Para hacer uso de esta plataforma es más complejo ya que tiene que pasar por diferentes procesos de evaluación y en caso de cumplir alguno simplemente niegan el acceso y hasta pueden suspender o eliminar las cuentas que se vinculan a Adsense. Para que los anuncios sean pagados en YouTube debe ser aprobado por un programa de  <em>partners</em>  de dicha aplicación, con el fin de estandarizar los anuncios que se presentan. 
      .row.col-lg-11.mx-auto(titulo="<em>Mass media</em>")
        img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema2/img-15.svg' style="max-width: 133px" alt='imagen del logo Mass media')
        .col-md.ps-lg-4
          p Los medios de comunicación de masas es el método por el cual un emisor envía a un grupo de receptores un mensaje, en este caso publicidad, este grupo de personas tiene ciudades como ser heterogéneo grande y anónimo, dentro del grupo de medios que se encuentra el <em>mass media</em>, se incluye la televisión, la radio, la prensa o periódico y la Internet.  
      .row.col-lg-11.mx-auto(titulo="Red de <em>display</em>")
        img.mb-4.mb-md-auto(src='@/assets/curso/temas/tema2/img-16.svg' style="max-width: 133px" alt='imagen del logo Red de display')
        .col-md.ps-lg-4
          p Conjunto de plataformas, páginas web, aplicaciones donde se puede realizar pauta para las publicidades de empresas, productos o servicios, se usa para aumentar el tráfico de personas que ven las piezas publicitarias y generar ventas en la página web. 
          p.mb-0 Google es el intermediario entre estas plataformas y los usuarios que quieran pautar. Estas publicidades vienen en textos, imágenes o vídeos, por lo general, estos <em>social display</em> aparecen en la parte superior o lateral de la página web de una empresa. 


</template>

<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema2',
  components: { SlyderF },
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
