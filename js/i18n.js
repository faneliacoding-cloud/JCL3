/* ═══════════════════════════════════════════════════════════
   JCL STAGING — Bilingual EN/ES
   Text-node walker: translates ALL text automatically.
   Just add strings to JCL_STRINGS below.
══════════════════════════════════════════════════════════ */
'use strict';

const JCL_STRINGS = {
  /* NAV */
  "Luxury begins with first impressions.": "El lujo comienza con las primeras impresiones.",
  "Portfolio": "Portafolio",
  "Transformations": "Transformaciones",
  "Services": "Servicios",
  "Journal": "Revista",
  "About": "Nosotros",
  "AI Concierge": "Conserje IA",
  "Book Consultation": "Reservar Consulta",
  "Contact": "Contacto",
  "Get in Touch": "Contáctenos",
  "FAQ": "Preguntas Frecuentes",

  /* HERO */
  "New York's Premier Luxury Staging Studio": "El Estudio Premier de Staging de Lujo de Nueva York",
  "Every Home": "Cada Hogar",
  "Has a Story.": "Tiene una Historia.",
  "We Make It Unforgettable.": "Lo Hacemos Inolvidable.",
  "Luxury staging and interior styling designed to create": "Staging de lujo y estilismo de interiores diseñados para crear",
  "unforgettable first impressions and exceptional value.": "primeras impresiones inolvidables y valor excepcional.",
  "Explore Our Portfolio": "Ver Nuestro Portafolio",
  "Book a Consultation": "Reservar una Consulta",
  "Watch Our Story": "Ver Nuestra Historia",
  "Scroll": "Desplazar",

  /* BRAND STATEMENT */
  "The Philosophy": "La Filosofía",
  "Buyers Fall in Love Before They Read the Listing.": "Los Compradores Se Enamoran Antes de Leer el Anuncio.",
  "In the first seven seconds of walking through a door, buyers have already decided how they feel. That feeling — of warmth, aspiration, and belonging — is what we architect. Not furniture. Not décor. Emotion.": "En los primeros siete segundos de entrar por una puerta, los compradores ya han decidido cómo se sienten. Ese sentimiento — de calidez, aspiración y pertenencia — es lo que nosotros diseñamos. No muebles. No decoración. Emoción.",
  "Sell at or above asking": "Venden al precio pedido o por encima",
  "Faster days on market": "Menos días en el mercado",
  "Properties transformed": "Propiedades transformadas",
  "Our Story": "Nuestra Historia",
  "West Village Penthouse, 2025": "Penthouse West Village, 2025",

  /* COLLECTION */
  "The Collection": "La Colección",
  "A Service for Every Vision": "Un Servicio para Cada Visión",
  "Each offering is crafted with the same intention — to transform your property into an experience that buyers cannot forget.": "Cada servicio está diseñado con la misma intención — transformar su propiedad en una experiencia que los compradores no puedan olvidar.",
  "Luxury Home Staging": "Staging de Lujo para Hogares",
  "For properties that deserve to be experienced, not merely viewed. Full-service curation that elevates every detail.": "Para propiedades que merecen ser experimentadas, no simplemente vistas. Curación de servicio completo que eleva cada detalle.",
  "Interior Styling": "Estilismo de Interiores",
  "The art of perfection — every object, every angle, precisely considered.": "El arte de la perfección — cada objeto, cada ángulo, considerado con precisión.",
  "Model Homes": "Hogares Modelo",
  "For builders and developers — selling a lifestyle before a home is built.": "Para constructores y promotores — vendiendo un estilo de vida antes de que se construya un hogar.",
  "Vacation Properties": "Propiedades Vacacionales",
  "From Hamptons estates to mountain retreats — creating escapes that command premium bookings.": "Desde fincas en los Hamptons hasta retiros en la montaña — creando escapadas que generan reservas premium.",
  "Commercial & Virtual": "Comercial y Virtual",
  "Boutique offices, hospitality spaces, and photorealistic virtual staging for properties before they're built.": "Oficinas boutique, espacios de hospitalidad y staging virtual fotorrealista para propiedades antes de ser construidas.",
  "Explore": "Explorar",

  /* TRANSFORMATION */
  "The Transformation": "La Transformación",
  "The Before. The After. The Difference.": "El Antes. El Después. La Diferencia.",
  "Drag the slider to witness the transformation. Every property holds extraordinary potential — we simply reveal it.": "Deslice el control para ver la transformación. Cada propiedad tiene un potencial extraordinario — nosotros simplemente lo revelamos.",
  "Before": "Antes",
  "After": "Después",
  "Average Days on Market Reduced": "Promedio de Días en Mercado Reducidos",
  "Higher Buyer Engagement": "Mayor Participación de Compradores",
  "Properties Transformed": "Propiedades Transformadas",
  "Client Satisfaction": "Satisfacción del Cliente",

  /* FEATURED */
  "Featured Estates": "Propiedades Destacadas",
  "Selected Works": "Obras Seleccionadas",
  "Sold · 18% Over Ask": "Vendido · 18% Sobre el Precio",
  "Upper East Side, Manhattan": "Upper East Side, Manhattan",
  "The Park Avenue Residence": "La Residencia de Park Avenue",
  "A 4,200 sq ft pre-war classic that needed to speak to a new generation of luxury buyers. We layered warm neutrals, commissioned art, and curated vintage pieces that honored the architecture while inviting modern aspiration.": "Un clásico de preguerra de 4,200 pies cuadrados que necesitaba hablarle a una nueva generación de compradores de lujo. Incorporamos neutros cálidos, arte encargado y piezas vintage curadas que honraron la arquitectura mientras invitaban a la aspiración moderna.",
  "Square Feet": "Pies Cuadrados",
  "Days on Market": "Días en el Mercado",
  "Sale Price": "Precio de Venta",
  "View Full Project": "Ver Proyecto Completo",
  "Builder · Sold Out": "Constructor · Agotado",
  "Tribeca, Manhattan": "Tribeca, Manhattan",
  "The Tribeca Loft Collection": "La Colección de Lofts de Tribeca",
  "Three model units for a luxury boutique development. Each space told a different chapter — the artist, the executive, the family — drawing precisely the buyers the developer needed. All three sold within 30 days.": "Tres unidades modelo para un desarrollo boutique de lujo. Cada espacio contó un capítulo diferente — el artista, el ejecutivo, la familia — atrayendo exactamente a los compradores que el promotor necesitaba. Las tres se vendieron en 30 días.",
  "Model Units": "Unidades Modelo",
  "Days to Sell Out": "Días para Agotarse",
  "Total Value": "Valor Total",
  "View All Projects": "Ver Todos los Proyectos",

  /* PROCESS */
  "How We Work": "Cómo Trabajamos",
  "From Vision to Unforgettable": "De la Visión a lo Inolvidable",
  "Seven carefully considered stages that transform a property into a story buyers cannot resist.": "Siete etapas cuidadosamente consideradas que transforman una propiedad en una historia que los compradores no pueden resistir.",
  "Discover": "Descubrir",
  "We walk through your property with fresh eyes — learning its bones, its light, its story. A home tells us what it needs.": "Recorremos su propiedad con ojos nuevos — aprendiendo su estructura, su luz, su historia. Un hogar nos dice lo que necesita.",
  "Design": "Diseño",
  "Our creative team develops a complete design concept — mood, palette, material story — specific to your property and buyer profile.": "Nuestro equipo creativo desarrolla un concepto de diseño completo — ambiente, paleta, historia de materiales — específico para su propiedad y perfil de comprador.",
  "Curate": "Curar",
  "We source from our exclusive collection of fine furniture, art, and objects — selecting pieces that feel lived-in, aspirational, and irreplaceable.": "Nos abastecemos de nuestra colección exclusiva de muebles finos, arte y objetos — seleccionando piezas que se sienten habitadas, aspiracionales e irremplazables.",
  "Install & Style": "Instalar y Estilizar",
  "Our team arrives with precision and care. Within hours, a space is transformed — every surface, every corner, every room intentional.": "Nuestro equipo llega con precisión y cuidado. En pocas horas, un espacio se transforma — cada superficie, cada rincón, cada habitación intencional.",
  "Photograph & Launch": "Fotografiar y Lanzar",
  "We coordinate with top architectural photographers to ensure the staging reads brilliantly online — where 92% of buyers begin their search.": "Coordinamos con los mejores fotógrafos de arquitectura para garantizar que el staging se vea brillantemente en línea — donde el 92% de los compradores comienzan su búsqueda.",
  "Start Your Project": "Iniciar Su Proyecto",

  /* TESTIMONIALS */
  "Client Stories": "Testimonios de Clientes",
  "The Results Speak Beautifully.": "Los Resultados Hablan por Sí Solos.",
  "Alexandra Chen": "Alexandra Chen",
  "Homeowner · Upper West Side, NY": "Propietaria · Upper West Side, NY",
  "Above Asking Price": "Por Encima del Precio Pedido",
  "Days to Offer": "Días hasta la Oferta",
  "Competing Offers": "Ofertas Competidoras",
  "Marcus Rivera": "Marcus Rivera",
  "Luxury Realtor · Douglas Elliman": "Agente de Lujo · Douglas Elliman",
  "Sophia Marchetti": "Sophia Marchetti",
  "Developer · Tribeca Residences": "Promotora · Tribeca Residences",

  /* JOURNAL */
  "Editorial Journal": "Revista Editorial",
  "Stories Worth Reading": "Historias que Vale la Pena Leer",
  "All Articles": "Todos los Artículos",
  "Psychology of Buying": "Psicología de la Compra",
  "The Seven-Second Decision: Why Buyers Know Before They Walk In": "La Decisión de Siete Segundos: Por Qué los Compradores Saben Antes de Entrar",
  "Neuroscience tells us that emotional decisions are made in moments. Here's how great staging speaks to those instincts — and why it changes everything.": "La neurociencia nos dice que las decisiones emocionales se toman en momentos. Así es como el buen staging habla a esos instintos — y por qué lo cambia todo.",
  "Julia Carias-Linares": "Julia Carias-Linares",
  "12 min read": "12 min de lectura",
  "Design Trends": "Tendencias de Diseño",
  "The Materials of 2026: What Luxury Buyers Are Looking For": "Los Materiales de 2026: Lo que Buscan los Compradores de Lujo",
  "Alfredo Linares": "Alfredo Linares",
  "8 min read": "8 min de lectura",
  "Behind the Project": "Detrás del Proyecto",
  "The \$4M Listing That Sold for \$4.7M: A Staging Story": "La Propiedad de \$4M que se Vendió por \$4.7M: Una Historia de Staging",
  "JCL Editorial": "Editorial JCL",
  "10 min read": "10 min de lectura",

  /* FOOTER STATS */
  "Est. in New York": "Fundado en Nueva York",
  "Properties Staged": "Propiedades Preparadas",
  "Sell at or Above Asking": "Venden al Precio Pedido o Más",
  "Client Rating": "Calificación del Cliente",

  /* CTA */
  "Begin Your Transformation": "Comience Su Transformación",
  "Your Home Deserves to Be Extraordinary.": "Su Hogar Merece Ser Extraordinario.",
  "Every great outcome begins with a conversation. Tell us about your property — we'll show you what's possible.": "Todo gran resultado comienza con una conversación. Cuéntenos sobre su propiedad — le mostraremos lo que es posible.",
  "View Our Work": "Ver Nuestro Trabajo",

  /* FOOTER */
  "Follow Our Work": "Síguenos",
  "Transforming New York properties into extraordinary experiences that sell since 2017.": "Transformando propiedades en Nueva York en experiencias extraordinarias que se venden desde 2017.",
  "Stay Connected": "Manténgase Conectado",
  "Design inspiration, luxury market insights, and behind-the-scenes stories from our studio.": "Inspiración de diseño, perspectivas del mercado de lujo e historias detrás de escena de nuestro estudio.",
  "Subscribe": "Suscribirse",
  "Privacy Policy": "Política de Privacidad",
  "Terms of Service": "Términos de Servicio",
  "Accessibility": "Accesibilidad",
  "Sitemap": "Mapa del Sitio",
  "Book Now": "Reservar Ahora",

  /* OLIVIA */
  "Chat with Olivia": "Chatear con Olivia",
  "Design Concierge · Online": "Conserje de Diseño · En Línea",
  "Welcome to JCL Staging. I'm Olivia, your Design Concierge.": "Bienvenido a JCL Staging. Soy Olivia, su Conserje de Diseño.",
  "I'd love to learn about your home and help you create an unforgettable first impression. What brings you here today?": "Me encantaría conocer su hogar y ayudarle a crear una primera impresión inolvidable. ¿Qué le trae aquí hoy?",
  "I want to stage my home for sale": "Quiero preparar mi hogar para la venta",
  "I'm a realtor": "Soy agente inmobiliario",
  "What do you charge?": "¿Cuánto cobran?",
  "Message Olivia…": "Escriba a Olivia…",
  "Ask Olivia anything…": "Pregúntele a Olivia…",

  /* PORTFOLIO */
  "Our Work": "Nuestro Trabajo",
  "A Portfolio of Extraordinary Homes": "Un Portafolio de Hogares Extraordinarios",
  "All Work": "Todo el Trabajo",
  "Luxury Homes": "Hogares de Lujo",
  "Condos": "Condominios",
  "Occupied Staging": "Staging Habitado",
  "Commercial": "Comercial",
  "Ready to Transform Your Property?": "¿Listo para Transformar Su Propiedad?",
  "Every extraordinary home begins with a conversation.": "Todo hogar extraordinario comienza con una conversación.",

  /* SERVICES */
  "Every Service, Exceptionally Delivered": "Cada Servicio, Excepcionalmente Entregado",
  "Common Questions": "Preguntas Comunes",
  "Everything You Need to Know": "Todo lo que Necesita Saber",

  /* ABOUT */
  "Design is Not Decoration. It is Emotion.": "El Diseño No es Decoración. Es Emoción.",
  "The Founders": "Los Fundadores",
  "Our Journey": "Nuestro Camino",
  "A Decade of Transformation": "Una Década de Transformación",
  "Recognition": "Reconocimiento",
  "As Seen In": "Visto En",

  /* CONSULTATION/CONTACT */
  "Tell Us About Your Home.": "Cuéntenos Sobre Su Hogar.",
  "Begin Your Journey": "Comience Su Viaje",
  "Begin the Conversation": "Comience la Conversación",
  "Where We Work": "Dónde Trabajamos",
  "Every Question, Answered Beautifully": "Cada Pregunta, Respondida con Elegancia",
};

/* ─── Switcher ───────────────────────────────────────────── */
window.JCL_Lang = {
  current: 'en',
  _saved: [],   /* [{node, original}] stored on first translate */

  switchTo: function(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    this.current = lang;
    try { localStorage.setItem('jcl-lang', lang); } catch(e) {}
    document.documentElement.lang = lang;
    this._apply(lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
      var on = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('langchange', {detail:{lang:lang}}));
  },

  _apply: function(lang) {
    var self = this;

    /* First time: snapshot every text node */
    if (self._saved.length === 0) {
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      var n;
      while ((n = w.nextNode())) {
        if (n.textContent.trim().length > 1) {
          self._saved.push({ node: n, original: n.textContent });
        }
      }
    }

    self._saved.forEach(function(entry) {
      if (lang === 'en') {
        entry.node.textContent = entry.original;
      } else {
        var trimmed = entry.original.trim();
        var es = JCL_STRINGS[trimmed];
        if (es) {
          var lead = entry.original.match(/^(\s*)/)[1];
          var tail = entry.original.match(/(\s*)$/)[1];
          entry.node.textContent = lead + es + tail;
        }
      }
    });
  },

  init: function() {
    var self = this;
    var saved = null;
    try { saved = localStorage.getItem('jcl-lang'); } catch(e) {}
    var urlLang = new URLSearchParams(window.location.search).get('lang');
    var browser = (navigator.language||'').toLowerCase().startsWith('es') ? 'es' : 'en';
    var lang = (urlLang==='en'||urlLang==='es') ? urlLang
             : (saved==='en'||saved==='es') ? saved : browser;

    document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        self.switchTo(btn.getAttribute('data-lang-btn'));
      });
    });

    self.switchTo(lang);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function(){ window.JCL_Lang.init(); });
} else {
  window.JCL_Lang.init();
}
