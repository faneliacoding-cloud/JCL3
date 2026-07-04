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
  "JCL Staging was born from a simple conviction: the way a home feels is more powerful than how it looks.": "JCL Staging nació de una convicción simple: la forma en que se siente un hogar es más poderosa que cómo se ve.",
  "Julia Carias-Linares, Creative Director, brings a painter's eye to every project. Alfredo Linares, Lead Executor, ensures vision becomes flawless reality. Together since 2017, they have transformed over 850 properties across the Tri-State area.": "Julia Carias-Linares, Directora Creativa, aporta el ojo de un pintor a cada proyecto. Alfredo Linares, Ejecutor Principal, garantiza que la visión se convierta en realidad impecable. Juntos desde 2017, han transformado más de 850 propiedades en el área Tri-State.",
  "CEO & Creative Director": "CEO y Directora Creativa",
  "COO & Lead Executor": "COO y Ejecutor Principal",
  "Design is how we speak to people before they know us.": "El diseño es cómo hablamos a las personas antes de que nos conozcan.",
  "Excellence is in the execution.": "La excelencia está en la ejecución.",
  "Emotion First": "La Emoción Primero",
  "Meticulous Craft": "Artesanía Meticulosa",
  "Genuine Partnership": "Asociación Genuina",
  "We design for feeling before function. A buyer must fall in love the moment they cross the threshold — before they read a floor plan or hear a price. Emotion closes deals that logic cannot.": "Diseñamos para el sentimiento antes que para la función. Un comprador debe enamorarse en el momento en que cruza el umbral — antes de leer un plano o escuchar un precio. La emoción cierra tratos que la lógica no puede.",
  "No detail is beneath our attention. The angle of a throw pillow, the scent of a room, the precise height of an art piece — these are the invisible touches that separate good staging from unforgettable staging.": "Ningún detalle está por debajo de nuestra atención. El ángulo de un cojín, el aroma de una habitación, la altura precisa de una obra de arte — estos son los toques invisibles que separan el buen staging del staging inolvidable.",
  "We are not vendors — we are collaborators. Many of our clients return project after project, trusting us not just with their properties but with their reputations. Long-term partnership is the foundation of everything we do.": "No somos proveedores — somos colaboradores. Muchos de nuestros clientes regresan proyecto tras proyecto, confiándonos no solo sus propiedades sino también sus reputaciones. La asociación a largo plazo es la base de todo lo que hacemos.",
  "NY Times Real Estate": "NY Times Real Estate",
  "Architectural Digest": "Architectural Digest",
  "Elle Decor": "Elle Decor",
  "The Wall Street Journal": "The Wall Street Journal",
  "Curbed NY": "Curbed NY",
  "Founded": "Fundado",
  "First luxury listing sold in 3 days 22% above asking": "Primer listado de lujo vendido en 3 días al 22% sobre el precio",
  "Partnership with Douglas Elliman, Compass, Sotheby's": "Asociación con Douglas Elliman, Compass, Sotheby's",
  "Expanded to NJ and CT": "Expansión a NJ y CT",
  "500th property staged": "Propiedad número 500 preparada",
  "Launched Builder & Developer division": "Lanzamiento de división de Constructores y Promotores",
  "Named Top Staging Studio by NY Real Estate Magazine": "Nombrado Mejor Estudio de Staging por NY Real Estate Magazine",
  "Launched Olivia AI Design Concierge": "Lanzamiento de Olivia, Conserje de Diseño IA",
  "850+ properties, 97% satisfaction": "850+ propiedades, 97% de satisfacción",
  "Full-service staging for extraordinary properties. We transform vacant and occupied spaces with curated furnishings, fine art, and objects of intention — creating the emotional experience that compels buyers to act decisively.": "Staging de servicio completo para propiedades extraordinarias. Transformamos espacios vacíos y habitados con mobiliario curado, arte fino y objetos de intención — creando la experiencia emocional que impulsa a los compradores a actuar decisivamente.",
  "Complete property consultation": "Consulta completa de la propiedad",
  "Furniture & art curation from our exclusive inventory": "Curación de muebles y arte de nuestro inventario exclusivo",
  "Professional installation & styling": "Instalación y estilismo profesional",
  "Photography coordination": "Coordinación de fotografía",
  "The most nuanced of our services — working with what you already have, refining, editing, and adding precisely chosen pieces that transform familiar rooms into extraordinary ones.": "El más matizado de nuestros servicios — trabajando con lo que ya tiene, refinando, editando y añadiendo piezas precisamente elegidas que transforman habitaciones familiares en extraordinarias.",
  "In-home styling consultation": "Consulta de estilismo en el hogar",
  "Strategic furniture repositioning": "Reposicionamiento estratégico de muebles",
  "Curated accent and accessory placement": "Colocación curada de acentos y accesorios",
  "Pre-photography finishing": "Acabado previo a la fotografía",
  "Selling a development begins long before the first homeowner moves in. We create model home environments that sell a lifestyle, a community, and a future — helping builders achieve faster sell-outs at premium prices.": "Vender un desarrollo comienza mucho antes de que el primer propietario se mude. Creamos ambientes de hogares modelo que venden un estilo de vida, una comunidad y un futuro — ayudando a los constructores a lograr ventas más rápidas a precios premium.",
  "Complete model unit furnishing": "Amueblado completo de unidades modelo",
  "Community lifestyle storytelling": "Narración del estilo de vida comunitario",
  "Multiple unit coordination": "Coordinación de múltiples unidades",
  "Move-in-ready finishes": "Acabados listos para mudarse",
  "From Hamptons estates to Connecticut retreats, vacation property staging commands premium booking rates and inspires the kind of loyalty that brings guests back year after year.": "Desde fincas en los Hamptons hasta retiros en Connecticut, el staging de propiedades vacacionales genera tarifas de reserva premium e inspira la lealtad que trae a los huéspedes año tras año.",
  "Seasonal staging programs": "Programas de staging estacional",
  "Short-term rental optimization": "Optimización de alquileres a corto plazo",
  "Photography-first approach": "Enfoque centrado en la fotografía",
  "Turnkey setup and removal": "Configuración y retiro llave en mano",
  "Boutique offices, hospitality spaces, and co-working environments that inspire the people who inhabit them. Beautiful environments attract better clients and better talent.": "Oficinas boutique, espacios de hospitalidad y entornos de co-trabajo que inspiran a las personas que los habitan. Los entornos hermosos atraen mejores clientes y mejor talento.",
  "Office & showroom staging": "Staging de oficinas y salas de exposición",
  "Hospitality environments": "Entornos de hospitalidad",
  "Co-working space design": "Diseño de espacios de co-trabajo",
  "Brand-aligned aesthetics": "Estética alineada con la marca",
  "For pre-construction developments, new listings that need immediate online impact, or properties that benefit from showing furnished before furnishing. Photorealistic renders that sell before a single piece of furniture arrives.": "Para desarrollos de preconstrucción, nuevos listados que necesitan impacto en línea inmediato, o propiedades que se benefician de mostrarse amuebladas antes de amueblar. Renders fotorrealistas que venden antes de que llegue un solo mueble.",
  "Photorealistic CGI renders": "Renders CGI fotorrealistas",
  "Multiple style options": "Múltiples opciones de estilo",
  "Same-week delivery": "Entrega en la misma semana",
  "MLS & marketing-ready files": "Archivos listos para MLS y marketing",
  "Every project begins with a conversation. Our complimentary 30-minute discovery session is where we learn your home, your goals, and your timeline — and where we begin to see the possibilities.": "Todo proyecto comienza con una conversación. Nuestra sesión de descubrimiento gratuita de 30 minutos es donde conocemos su hogar, sus objetivos y su cronograma — y donde comenzamos a ver las posibilidades.",
  "Complimentary 30-min call": "Llamada gratuita de 30 minutos",
  "Property walkthrough": "Recorrido de la propiedad",
  "Tailored proposal": "Propuesta personalizada",
  "No commitment required": "Sin compromiso requerido",
  "Book Your Consultation": "Reserve Su Consulta",
  "How quickly can you stage my property?": "¿Qué tan rápido pueden preparar mi propiedad?",
  "What areas do you serve?": "¿Qué áreas sirven?",
  "Do you work with occupied homes?": "¿Trabajan con hogares habitados?",
  "What is the ROI of staging?": "¿Cuál es el ROI del staging?",
  "Do you offer virtual staging?": "¿Ofrecen staging virtual?",
  "What happens after my home sells?": "¿Qué pasa después de que se vende mi hogar?",
  "The Park Avenue Penthouse": "El Penthouse de Park Avenue",
  "Upper East Side, Manhattan": "Upper East Side, Manhattan",
  "West Village Residence": "Residencia West Village",
  "West Village, NY": "West Village, NY",
  "Brooklyn Heights Brownstone": "Brownstone de Brooklyn Heights",
  "Brooklyn, NY": "Brooklyn, NY",
  "Tribeca Loft Collection": "Colección de Lofts de Tribeca",
  "Tribeca, Manhattan": "Tribeca, Manhattan",
  "The Riverside Estate": "La Finca Riverside",
  "Riverdale, NY": "Riverdale, NY",
  "The Founders Suite": "La Suite de los Fundadores",
  "Midtown, Manhattan": "Midtown, Manhattan",
  "Chelsea Gallery Loft": "Loft Galería Chelsea",
  "Chelsea, NY": "Chelsea, NY",
  "The Central Park View": "La Vista al Central Park",
  "Columbus Circle, NY": "Columbus Circle, NY",
  "Tell us about your property and goals.": "Cuéntenos sobre su propiedad y objetivos.",
  "Property Type": "Tipo de Propiedad",
  "Select property type": "Seleccione el tipo de propiedad",
  "Condominium": "Condominio",
  "Townhouse": "Casa adosada",
  "Single Family Home": "Casa Unifamiliar",
  "Co-op": "Cooperativa",
  "Commercial Space": "Espacio Comercial",
  "New Development": "Nuevo Desarrollo",
  "Service Needed": "Servicio Necesario",
  "Select service": "Seleccione el servicio",
  "Luxury Home Staging (Vacant)": "Staging de Lujo (Vacante)",
  "Occupied Home Staging": "Staging de Hogar Habitado",
  "Interior Styling": "Estilismo de Interiores",
  "Virtual Staging": "Staging Virtual",
  "Model Home / Developer": "Hogar Modelo / Promotor",
  "Commercial Staging": "Staging Comercial",
  "Square Footage": "Metros Cuadrados",
  "Approximate square footage": "Metraje aproximado",
  "Timeline": "Cronograma",
  "Select timeline": "Seleccione cronograma",
  "Within 2 weeks": "En 2 semanas",
  "2-4 weeks": "2-4 semanas",
  "1-2 months": "1-2 meses",
  "3+ months": "3+ meses",
  "Full Name": "Nombre Completo",
  "Your full name": "Su nombre completo",
  "Email Address": "Correo Electrónico",
  "Your email address": "Su correo electrónico",
  "Phone Number": "Número de Teléfono",
  "Your phone number": "Su número de teléfono",
  "Property Address": "Dirección de la Propiedad",
  "Full address of the property": "Dirección completa de la propiedad",
  "Tell us more about your property and goals": "Cuéntenos más sobre su propiedad y objetivos",
  "Additional Notes": "Notas Adicionales",
  "Submit Consultation Request": "Enviar Solicitud de Consulta",
  "By submitting this form, you agree to our": "Al enviar este formulario, acepta nuestros",
  "and": "y",
  "Previous": "Anterior",
  "Next": "Siguiente",
  "Step": "Paso",
  "of": "de",
  "Send us a message": "Envíenos un mensaje",
  "Your Name": "Su Nombre",
  "Email": "Correo Electrónico",
  "Phone": "Teléfono",
  "Message": "Mensaje",
  "How can we help you?": "¿Cómo podemos ayudarle?",
  "Send Message": "Enviar Mensaje",
  "Studio Hours": "Horario del Estudio",
  "Monday – Friday": "Lunes – Viernes",
  "Saturday": "Sábado",
  "Sunday": "Domingo",
  "By appointment only": "Solo con cita previa",
  "Closed": "Cerrado",
  "New York, NY": "Nueva York, NY",
  "Serving the Tri-State Area": "Sirviendo el Área Tri-State",
  "New York City": "Ciudad de Nueva York",
  "New Jersey": "Nueva Jersey",
  "Connecticut": "Connecticut",
  "The Hamptons": "Los Hamptons",
  "Westchester": "Westchester",
  "Our typical timeline is 5–10 days from consultation to completion. For urgent listings, we offer rush services and have executed full installations in 48 hours. Contact us to discuss your specific timeline.": "Nuestro cronograma típico es de 5 a 10 días desde la consulta hasta la finalización. Para listados urgentes, ofrecemos servicios de urgencia y hemos ejecutado instalaciones completas en 48 horas. Contáctenos para hablar sobre su cronograma específico.",
  "Always before. The first 7 days of a listing generate the most buyer interest, the most showings, and the most competitive offers. We coordinate with your timeline to ensure your home is staged, photographed, and market-ready before the listing goes live.": "Siempre antes. Los primeros 7 días de un listado generan el mayor interés de los compradores, las más visitas y las ofertas más competitivas. Coordinamos con su cronograma para asegurarnos de que su hogar esté preparado, fotografiado y listo para el mercado antes de que el listado salga al aire.",
  "Our clients consistently see 5–10x return on their staging investment, measured by the increased sale price above comparable unstaged properties. Staged homes also sell an average of 73% faster than unstaged equivalents — meaning fewer carrying costs and a faster path to your next chapter.": "Nuestros clientes ven consistentemente un retorno de 5 a 10 veces su inversión en staging, medido por el aumento en el precio de venta sobre propiedades comparables sin staging. Los hogares preparados también se venden un 73% más rápido en promedio — lo que significa menos costos de mantenimiento y un camino más rápido hacia su próximo capítulo.",
  "Latest from the Studio": "Lo Último del Estudio",
  "Featured Article": "Artículo Destacado",
  "Read Article": "Leer Artículo",
  "Read More": "Leer Más",
  "Min Read": "Min de Lectura",
  "min read": "min de lectura",
  "Market Intelligence": "Inteligencia de Mercado",
  "Staging Science": "Ciencia del Staging",
  "Before & After": "Antes y Después",
  "Drag to reveal": "Deslice para revelar",
  "The living room transformation that changed everything": "La transformación de la sala que cambió todo",
  "View Project": "Ver Proyecto",
  "Meet Olivia.": "Conozca a Olivia.",
  "Your 24/7 AI Design Concierge": "Su Conserje de Diseño IA 24/7",
  "Start Chatting": "Comenzar a Chatear",
  "Available 24/7": "Disponible 24/7",
  "Instant Responses": "Respuestas Instantáneas",
  "Design Expertise": "Experiencia en Diseño",
  "What Olivia Can Help You With": "En qué Olivia Puede Ayudarle",
  "Learn More": "Saber Más",
  "See All": "Ver Todo",
  "View All": "Ver Todo",
  "Back to Home": "Volver al Inicio",
  "Return Home": "Volver al Inicio",
  "Loading...": "Cargando...",
  "Send": "Enviar",
  "Close": "Cerrar",
  "Open": "Abrir",
  "Menu": "Menú",
  "Search": "Buscar",
  "2017": "2017",
  "850+": "850+",
  "97%": "97%",
  "73%": "73%",
  "EN": "EN",
  "ES": "ES",
  "\"JCL didn't just stage my apartment — they gave it a soul. Within four days of listing, I had three offers above asking. I genuinely believe it was the staging that made buyers feel they had to have it.\"": "\"JCL no solo preparó mi apartamento — le dieron un alma. A los cuatro días de publicar el anuncio, tuve tres ofertas por encima del precio. Verdaderamente creo que fue el staging lo que hizo que los compradores sintieran que tenían que tenerlo.\"",
  "\"As a realtor, JCL is my secret weapon. Every listing they touch attracts more buyers, more quickly, and sells for more. Non-negotiable for any serious listing.\"": "\"Como agente inmobiliario, JCL es mi arma secreta. Cada propiedad que tocan atrae más compradores, más rápidamente, y se vende por más. Innegociable para cualquier listado serio.\"",
  "\"The attention to detail is extraordinary. They understood our brand, our buyers, and what our development needed to say before we even finished explaining it. True partners.\"": "\"La atención al detalle es extraordinaria. Entendieron nuestra marca, nuestros compradores y lo que nuestro desarrollo necesitaba comunicar antes de que termináramos de explicarlo. Verdaderos socios.\"",
  
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
