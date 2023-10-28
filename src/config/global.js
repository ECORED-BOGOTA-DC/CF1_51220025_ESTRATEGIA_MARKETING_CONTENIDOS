export default {
  global: {
    componenteFormativo: 'Social media, investigación y creación de contenidos',
    descripcionCurso:
      'Posicionar una empresa no solo requiere conocer las debilidades y fortalezas, aun segmentando correctamente el mercado, hace falta el factor principal, la creación de contenidos y social media, aprovechando el mundo virtual y su gran influencia en los patrones de compra y elecciones finales del consumidor. Por lo que el social media es vital para el desarrollo, crecimiento y posicionamiento de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Investigación, gestión de la Información y propiedad Intelectual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Técnicas y métodos de búsqueda y extracción de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis, validación y seguridad de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registro de derechos de autor, modelos y protección',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Social Media',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de redes sociales y contenido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de masificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Plataformas publicitarias (<em>adwords, adsense</em>) y métodos de uso (<em>mass media, red de display</em>)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contenidos digitales y técnicas de posicionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elección y publicación de contenidos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas y criterios de publicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indexación de contenidos según estrategias SEO y SEM',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de posicionamiento',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Reglamento de seguridad e higiene industrial para publicación de contenidos',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/51220025_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Investigación, gestión de la información y propiedad intelectual',
      referencia:
        'Chaffey, Dave, Juan Manuel Alegría Sacristán, Salvador Núñez Ramos, Mónica Soto Arredondo, and Fiona Ellis-Chadwick. Marketing Digital: Estrategia, Implementación Y Práctica. Quinta Edición. ed. México: Pearson, 2014. Print.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks0003832',
    },
    {
      tema: 'Social Media',
      referencia:
        'Carballar, J. Social Media Marketing Personal Y Profesional. España: España, 2012. Web.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_alfaomega17547',
    },
    {
      tema: 'Contenidos digitales y técnicas de posicionamiento',
      referencia:
        'Anuor Aguilar. (2016,  julio 24 de 2016). ¿Qué es posicionamiento de una marca? | BRANDING | POSITIONING | POSICIONAMIENTO de MERCADO [Archivo de Vídeo].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MA2B4yV9Z9Q',
    },
  ],
  glosario: [
    {
      termino: '<em>Engagement</em>',
      significado:
        'es el lazo que se crea emocionalmente con un usuario o producto.',
    },
    {
      termino: 'HTML',
      significado:
        'es la estructura que tiene el contenido de una página web, ya sea el texto, las listas, imágenes, videos, etc. Por medio de esta estructura se definen los títulos, párrafos y en general todo el contenido de la página.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Redes Sociales',
      significado:
        'es una página web en la que los usuarios intercambian información personal y contenidos multimedia buscando interactuar con otros usuarios.',
    },
    {
      termino: 'SEO',
      significado:
        '<em>Search Engine Optimization</em>, que en español hace referencia a la optimización para motores de búsqueda.',
    },
    {
      termino: 'SEM',
      significado:
        '<em>Search Engine Marketing</em>, que en español hace referencia al <em>marketing</em> de motores de búsqueda.',
    },
    {
      termino: 'Usuario',
      significado:
        'es el nombre que se le da en mundo del internet a una persona para poder tener una identidad dentro de la web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ambit. (2020). Blog. <em>Validación de sistemas informáticos</em>.',
      link:
        'https://www.ambit-bst.com/blog/validaci%C3%B3n-de-sistemas-inform%C3%A1ticos',
    },
    {
      referencia:
        'Dirección nacional de derechos de autor, unidad administrativa especial ministerio del interior: <em>Registro de obras.</em>',
      link: 'http://derechodeautor.gov.co:8080/registro-de-obras3',
    },
    {
      referencia:
        'Gómez, L. (2011). <em>Un espacio para la investigación documental.</em> Revista Vanguardia Psicológica Clínica Teórica y Práctica, 226-233.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4815129',
    },
    {
      referencia:
        'Sonia, M.(2016). <em>Twitter cumple 10 años y hacemos un repaso a su historia y récords</em>. Iebschool.',
      link:
        'https://www.iebschool.com/blog/twitter-cumple-10-anos-redes-sociales/',
    },
    {
      referencia: 'Marketing University. (2022). <em>SEM y SEO</em>.',
      link: 'https://marketinguniversity.co/sem-y-seo/',
    },
    {
      referencia:
        'Marketing University. (2021). <em>10 claves del content marketing</em>.',
      link:
        'https://marketinguniversity.co/10-claves-del-content-marketing-hiper-potencializa-tus-ventas-con-tu-estrategia-de-contenido/',
    },
    {
      referencia:
        'Ministerio de Salud Colombia. (2020). <em>Establecimientos de alimentos, bebidas y medicamentos con lineamientos por COVID-19.</em>',
      link:
        'https://www.minsalud.gov.co/Paginas/Establecimientos-de-alimentos-bebidas-y-medicamentos-con-lineamientos-por-COVID-19.aspx',
    },
    {
      referencia:
        'Molina David.( 2021).Historia de Facebook: nacimiento y evolución de la red social de Mark Zuckerberg. Iebschool. ',
      link:
        'https://www.iebschool.com/blog/auge-y-declive-de-un-imperio-llamado-facebook-redes-sociales/',
    },
    {
      referencia:
        'Molina, Jorge (1999). Viva la Publicidad Viva. Madrid. Bilenio Editores.',
      link: '',
    },
    {
      referencia: 'Ompi (s.f). Derecho de autor. <em>Blog</em>.',
      link: 'https://www.wipo.int/copyright/es/',
    },
    {
      referencia:
        'Raffo, J. (2020) <em>Marketing digital sin infringir derechos a terceros</em>. Asuntos Legales, Bogotá.',
      link:
        'https://www.asuntoslegales.com.co/analisis/johanna-raffo-faccini-2736819/marketing-digital-sin-infringir-derechos-de-terceros-3055140',
    },
    // {
    //   referencia:
    //     'Semrush. ( 2019). <em>Guía Práctica de marketing de contenidos basado en datos.</em>',
    //   link:
    //     'https://es.semrush.com/ebooks/guia-marketing-contenidos-basado-datos-sample.pdf',
    // },
    {
      referencia:
        'Vivar Zurita, H., & Vinader Segura, R. (2011). <em>El impulso de la industria de los contenidos digitales.</em> CIC. Cuadernos de Información y Comunicación, 115-124. ',
      link: 'https://www.redalyc.org/pdf/935/93521629007.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Otero Cano',
          cargo: 'Experto Temático',
          centro: 'Regional Cauca, Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
