(function () {

  // ── GSAP + ScrollTrigger ─────────────────────────────────────
  gsap.registerPlugin(ScrollTrigger);

  // ── Idioma ───────────────────────────────────────────────────
  let lang = localStorage.getItem('roden-lang') || 'es';

  const WA_BASE = 'https://wa.me/5491145047893?text=';
  const WA = {
    float:      { es: 'Hola Gustavo, tengo una consulta sobre rødën.', en: 'Hi Gustavo, I have a question about rødën.' },
    integral:   { es: 'Hola Gustavo. Estoy evaluando un proyecto integral —equipamiento completo de un departamento o casa— con rødën y me gustaría conversar.', en: "Hi Gustavo. I'm considering a full project — complete furnishing for an apartment or house — with rødën and I'd like to chat." },
    ambiente:   { es: 'Hola Gustavo. Estoy evaluando un ambiente completo (cocina, vestidor, biblioteca o similar) con rødën y me gustaría conversar.', en: "Hi Gustavo. I'm considering a complete room (kitchen, walk-in closet, library or similar) with rødën and I'd like to chat." },
    puntual:    { es: 'Hola Gustavo. Tengo una consulta sobre una pieza puntual con rødën y me gustaría conversar.', en: "Hi Gustavo. I have a question about a specific piece with rødën and I'd like to chat." },
    generic:    { es: 'Hola Gustavo, me gustaría conversar sobre un proyecto con rødën.', en: "Hi Gustavo, I'd like to chat about a project with rødën." },
    inspiracion:{ es: 'Hola Gustavo. Miré la página de Inspiración y me gustaría empezar un proyecto desde cero.', en: "Hi Gustavo. I browsed the Inspiration page at rødën and I'd like to start a project from scratch." },
  };
  const wa = key => WA_BASE + encodeURIComponent(WA[key][lang]);

  const T = {
    es: {
      'nav.proyectos':'Proyectos','nav.estudio':'Estudio','nav.inspiracion':'Inspiración','nav.proceso':'Proceso',
      'hero.h1':'Estudio taller de equipamiento integral diseñado y fabricado por un arquitecto.',
      'hero.sub':'Relevamiento en tu casa. Diseño desde cero. Fabricación y supervisión de obra a cargo del mismo arquitecto.',
      'hero.cta1':'Agendá un relevamiento','hero.cta2':'Conocer el estudio',
      'puntos.h2':'Cómo empieza tu proyecto.','puntos.intro':'Hay tres formas de partir.',
      'puntos.01.h3':'Desde cero','puntos.01.p':'Definís qué necesitás. Lo diseñamos, fabricamos e instalamos.',
      'puntos.02.h3':'Desde una idea tuya','puntos.02.p':'Traés una imagen, un plano o una referencia. La desarrollamos.',
      'puntos.03.h3':'Desde un diseño rødën','puntos.03.p':'Elegís uno de nuestros diseños como base. Lo adaptamos a tu espacio.',
      'puntos.cta':'Ver diseños rødën →',
      'proyh.h2':'Proyectos seleccionados','proyh.intro':'Equipamientos integrales y ambientes específicos diseñados y fabricados por rødën.',
      'proyh.cta':'Ver todos los proyectos →','proyh.loading':'Cargando proyectos…','proyh.empty':'No hay proyectos publicados todavía.',
      'sis.h2':'Sistema rødën','sis.intro':'Un método de trabajo en seis módulos para que lo que se proyecta coincida con lo que se fabrica e instala.',
      'sis.01.h3':'Relevamiento','sis.01.p':'Diagnóstico en contexto real. Evita errores de medida y diseños mal adaptados al uso real.',
      'sis.02.h3':'Proyecto','sis.02.p':'Diseño validado antes de fabricar. Evita cambios en obra y diferencias entre render y resultado.',
      'sis.03.h3':'Presupuesto','sis.03.p':'Documentación técnica ejecutable. Evita interpretaciones ambiguas y errores de ejecución.',
      'sis.04.h3':'Producción','sis.04.p':'Fabricación controlada. Evita pérdida de calidad y dilución de responsabilidad.',
      'sis.05.h3':'Entrega','sis.05.p':'Instalación y cierre de obra. Evita terminaciones deficientes y proyectos que quedan abiertos.',
      'sis.06.h3':'Servicio Postventa','sis.06.p':'Acompañamiento posterior a la entrega. Evita que el cliente quede solo una vez finalizado el proyecto.',
      'sis.cta':'Ver el sistema completo →',
      'rev.h2':'Lo que dicen',
      'rev.q1':'Los productos finales eran idénticos a los renders del proyecto.',
      'rev.q2':'Tal cual lo habíamos pactado desde el comienzo.',
      'rev.q3':'Nos hicieron el mueble del living y a los dos años los llamamos para terminar nuestra cocina. Siempre entendiendo lo que queremos.',
      'rev.cta':'Ver todas las reseñas en Google →',
      'cta.h2':'Iniciemos un proyecto.','cta.p':'Elegí el tipo de proyecto que estás evaluando.<br>Te conectamos con el arquitecto por WhatsApp.',
      'cta.btn1':'Iniciar un proyecto integral','cta.btn2':'Consultar por un ambiente completo','cta.btn3':'Consulta sobre un mueble puntual',
      'footer.tagline':'Estudio taller de equipamiento integral',
      'est.h1':'Estudio','est.frase-grande':'Un arquitecto detrás de cada proyecto.',
      'est.frase-aclar':'El mismo arquitecto que releva tu casa diseña, fabrica y supervisa la instalación.',
      'est.bio.p1':'Se recibió de arquitecto en la Universidad de Buenos Aires. Suma 25 años de experiencia profesional, los primeros en estudios de arquitectura, donde adoptó una metodología de seguimiento extremo a extremo: relevamiento, proyecto, dirección de obra, entrega y servicio post-venta.',
      'est.bio.p2':'En enero de 2014 fundó rødën para aplicar esa misma metodología al equipamiento de interiores. La hipótesis era simple: si un proyecto arquitectónico se beneficia de tener una sola figura responsable desde la primera medida hasta el cierre de obra, el equipamiento a medida también.',
      'est.bio.p3':'Hoy rødën es un equipo consolidado. Cada proyecto es dirigido por el arquitecto que lo relevó desde el primer contacto. El cliente trata directamente con él durante todo el proyecto.',
      'est.serv.h2':'El servicio','est.serv.frase':'Como una sastrería a domicilio.',
      'est.serv.p1':'Vamos a tu casa. Tomamos las medidas. Diseñamos desde cero. Fabricamos en nuestro taller. Instalamos en tu espacio.',
      'est.serv.p2':'Cuando un mueble lo requiere, resolvemos también su instalación eléctrica y la iluminación. Incorporamos tapicería, herrería, y trabajos en mármol, granito, acero inoxidable y vidrio según lo pida el proyecto.',
      'est.serv.cierre':'Vos definís qué querés. rødën resuelve cómo.',
      'est.tall.h2':'El taller','est.tall.p':'La fabricación está a cargo del equipo del taller, en nuestras propias instalaciones. El proceso lo dirige el arquitecto que firma el proyecto.',
      'est.esnoes.h2':'Lo que rødën es y lo que no es.',
      'est.es.h3':'Es','est.es.1':'Un estudio taller que diseña y fabrica con metodología arquitectónica.','est.es.2':'Equipamiento integral a medida, desde cero.','est.es.3':'Una sola persona responsable de todo el proyecto.',
      'est.noes.h3':'No es','est.noes.1':'Una carpintería tradicional.','est.noes.2':'Una empresa de amoblamientos industriales o de catálogo.','est.noes.3':'Una marca de muebles pre-fabricados.',
      'proc.h1':'Sistema rødën',
      'proc.sub':'Un método de trabajo construido para que lo que se proyecta coincida con lo que se fabrica e instala, sin desvíos en calidad, tiempos ni ejecución.',
      'proc.frase':'Cada módulo del sistema existe para evitar un tipo específico de error.',
      'proc.m01.tag':'Relevamiento','proc.m01.h3':'Diagnóstico en contexto real','proc.m01.evita':'Evita errores de medida y diseños mal adaptados al uso real.',
      'proc.m01.qh.label':'Qué se hace','proc.m01.qh.p':'Relevamiento en el lugar, medición precisa y comprensión del uso real del espacio.',
      'proc.m01.qe.label':'Qué evita','proc.m01.qe.p':'Diseños que no responden al uso real, errores de medida y soluciones genéricas mal adaptadas.',
      'proc.m01.qd.label':'Qué se define','proc.m01.qd.p':'Condiciones físicas reales, necesidades funcionales —incluso las que el cliente no declara—, limitaciones técnicas.',
      'proc.m01.val.label':'Valor','proc.m01.val.p':'El proyecto arranca con información real, no con supuestos.',
      'proc.m02.tag':'Proyecto','proc.m02.h3':'Diseño validado antes de fabricar','proc.m02.evita':'Evita cambios en obra y diferencias entre render y resultado.',
      'proc.m02.qh.label':'Qué se hace','proc.m02.qh.p':'Desarrollo del proyecto desde cero, ajustes iterativos y validación con el cliente. Definición completa antes de pasar a producción.',
      'proc.m02.qe.label':'Qué evita','proc.m02.qe.p':'Cambios en obra, decisiones improvisadas y diferencias entre render y resultado.',
      'proc.m02.qd.label':'Qué se define','proc.m02.qd.p':'Geometría exacta, materiales, terminaciones y resoluciones constructivas.',
      'proc.m02.val.label':'Valor','proc.m02.val.p':'Nada se fabrica sin estar completamente definido.',
      'proc.m03.tag':'Presupuesto','proc.m03.h3':'Documentación técnica ejecutable','proc.m03.evita':'Evita interpretaciones ambiguas y errores de ejecución.',
      'proc.m03.qh.label':'Qué se hace','proc.m03.qh.p':'Transformación del diseño en información técnica precisa para fabricación.',
      'proc.m03.qe.label':'Qué evita','proc.m03.qe.p':'Interpretaciones ambiguas, errores de ejecución y dependencia del oficio sin control.',
      'proc.m03.qd.label':'Qué se define','proc.m03.qd.p':'Planos técnicos, despiece y especificaciones de materiales y herrajes.',
      'proc.m03.val.label':'Valor','proc.m03.val.p':'El proyecto deja de ser una idea y pasa a ser ejecutable sin margen de interpretación.',
      'proc.m04.tag':'Producción','proc.m04.h3':'Fabricación controlada','proc.m04.evita':'Evita pérdida de calidad y dilución de responsabilidad.',
      'proc.m04.qh.label':'Qué se hace','proc.m04.qh.p':'Producción del mobiliario en el taller propio, bajo supervisión directa.',
      'proc.m04.qe.label':'Qué evita','proc.m04.qe.p':'Pérdida de calidad en producción, desvíos respecto al diseño y dilución de responsabilidad por delegación.',
      'proc.m04.qd.label':'Qué se controla','proc.m04.qd.p':'Calidad de materiales, precisión constructiva y coherencia con el proyecto firmado.',
      'proc.m04.val.label':'Valor','proc.m04.val.p':'Control directo de la producción, sin intermediarios entre el diseño y la fabricación.',
      'proc.m05.tag':'Entrega','proc.m05.h3':'Instalación y cierre de obra','proc.m05.evita':'Evita terminaciones deficientes y proyectos que quedan abiertos.',
      'proc.m05.qh.label':'Qué se hace','proc.m05.qh.p':'Instalación en obra y ajuste final en sitio.',
      'proc.m05.qe.label':'Qué evita','proc.m05.qe.p':'Terminaciones deficientes, problemas de encastre y proyectos que quedan abiertos sin cierre formal.',
      'proc.m05.qd.label':'Qué se garantiza','proc.m05.qd.p':'Ajuste real en el espacio, terminación acorde al diseño y cierre completo del proyecto.',
      'proc.m05.val.label':'Valor','proc.m05.val.p':'El proyecto no se da por terminado hasta que el equipamiento funciona como fue proyectado.',
      'proc.m06.tag':'Servicio Postventa','proc.m06.h3':'Acompañamiento posterior a la entrega','proc.m06.evita':'Evita que el cliente quede solo una vez finalizado el proyecto.',
      'proc.m06.qh.label':'Qué se hace','proc.m06.qh.p':'Una vez entregado el proyecto, seguimos disponibles para resolver cualquier duda o necesidad que pueda surgir.',
      'proc.m06.qe.label':'Qué evita','proc.m06.qe.p':'El abandono post entrega y la falta de respuesta ante imprevistos o consultas posteriores a la instalación.',
      'proc.m06.qd.label':'Qué se garantiza','proc.m06.qd.p':'Acceso directo al equipo sin intermediarios, con la misma atención que durante el proyecto.',
      'proc.m06.val.label':'Valor','proc.m06.val.p':'Tu satisfacción es nuestra prioridad.',
      'proc.resp.h2':'Responsabilidad unificada',
      'proc.resp.p1':'Todo el proceso —desde el relevamiento hasta la instalación— está dirigido por el mismo arquitecto.',
      'proc.resp.p2':'Esto elimina uno de los principales problemas del rubro: la fragmentación de responsabilidades.',
      'proc.resp.p3':'En rødën no hay diseñador por un lado, fabricante por otro, instalador por otro. Hay una única línea de decisión y control.',
      'proc.filtro.q':'¿Este sistema es para vos?',
      'proc.filtro.si.h3':'Es para vos si:','proc.filtro.si.1':'Querés resolver el proyecto completo, no partes sueltas.','proc.filtro.si.2':'Valorás el proceso tanto como el resultado.','proc.filtro.si.3':'Buscás previsibilidad en tiempos, calidad y ejecución.',
      'proc.filtro.no.h3':'No es para vos si:','proc.filtro.no.1':'Tu prioridad es el precio por sobre el proceso.','proc.filtro.no.2':'Necesitás una solución rápida sin definición previa.','proc.filtro.no.3':'Buscás muebles estándar o de catálogo.',
      'proc.cta.h2':'Iniciemos un proyecto','proc.cta.desc':'Primera conversación: definimos juntos si tu proyecto es viable y cómo abordarlo correctamente desde el inicio.',
      'proc.cta.modulo':'Empezá por el Módulo 1 — el relevamiento — eligiendo el tipo de proyecto que estás evaluando:',
      'proc.cta.timing':'A partir del relevamiento, en pocos días recibís la propuesta del proyecto.',
      'proc.rev.cierre':'Esto no es casualidad. Es consecuencia directa del sistema de trabajo.',
      'proy.h1':'Proyectos','proy.frase1':'Casos del Sistema rødën aplicado.','proy.frase2':'Cada proyecto es único. El método es el mismo.',
      'insp.h1':'Inspiración','insp.frame':'Biblioteca de diseños propios. Cada uno funciona como punto de partida. Lo adaptamos a tu espacio.',
      'insp.cta.q':'¿No encontraste lo que buscás?','insp.cta.inv':'Empezá tu proyecto desde cero.',
      'common.cta.h2':'Iniciemos un proyecto.','common.wa.btn':'Conversemos por WhatsApp',
      'dyn.proy.cta':'Consultá por este proyecto →','dyn.insp.cta':'Empezá un proyecto similar →','dyn.loading':'Cargando…',
    },
    en: {
      'nav.proyectos':'Projects','nav.estudio':'Studio','nav.inspiracion':'Inspiration','nav.proceso':'Process',
      'hero.h1':'Design studio and workshop for custom furniture, designed and built by an architect.',
      'hero.sub':'On-site survey at your home. Design from scratch. Manufacturing and installation supervised by the same architect.',
      'hero.cta1':'Schedule a survey','hero.cta2':'About the studio',
      'puntos.h2':'How your project begins.','puntos.intro':'There are three ways to start.',
      'puntos.01.h3':'From scratch','puntos.01.p':'You define what you need. We design, manufacture, and install it.',
      'puntos.02.h3':'From your idea','puntos.02.p':'You bring an image, a plan, or a reference. We develop it.',
      'puntos.03.h3':'From a rødën design','puntos.03.p':'You choose one of our designs as a starting point. We adapt it to your space.',
      'puntos.cta':'Browse rødën designs →',
      'proyh.h2':'Selected projects','proyh.intro':'Complete furnishing solutions and specific environments designed and built by rødën.',
      'proyh.cta':'View all projects →','proyh.loading':'Loading projects…','proyh.empty':'No published projects yet.',
      'sis.h2':'rødën System','sis.intro':'A six-module work method to ensure what is designed matches what is built and installed.',
      'sis.01.h3':'Site Survey','sis.01.p':'On-site assessment. Prevents measurement errors and designs poorly adapted to actual use.',
      'sis.02.h3':'Design','sis.02.p':'Design validated before manufacturing. Prevents on-site changes and gaps between render and result.',
      'sis.03.h3':'Quote','sis.03.p':'Executable technical documentation. Prevents ambiguous interpretations and execution errors.',
      'sis.04.h3':'Production','sis.04.p':'Controlled manufacturing. Prevents quality loss and diluted responsibility.',
      'sis.05.h3':'Delivery','sis.05.p':'Installation and project closeout. Prevents deficient finishes and unresolved projects.',
      'sis.06.h3':'After-Sales Service','sis.06.p':'Support after delivery. Ensures clients are never left alone once the project is complete.',
      'sis.cta':'View the full system →',
      'rev.h2':'What they say',
      'rev.q1':'The final products were identical to the project renders.',
      'rev.q2':'Exactly as we had agreed from the beginning.',
      'rev.q3':'They built our living room cabinet and two years later we called them to finish our kitchen. Always understanding what we want.',
      'rev.cta':'View all reviews on Google →',
      'cta.h2':"Let's start a project.",'cta.p':"Choose the type of project you're considering.<br>We'll connect you with the architect on WhatsApp.",
      'cta.btn1':'Start a full project','cta.btn2':'Inquire about a full room','cta.btn3':'Ask about a single piece',
      'footer.tagline':'Custom furniture design studio and workshop',
      'est.h1':'Studio','est.frase-grande':'An architect behind every project.',
      'est.frase-aclar':'The same architect who surveys your home designs, builds, and supervises the installation.',
      'est.bio.p1':'He graduated as an architect from the University of Buenos Aires. With 25 years of professional experience, the first at architecture firms, where he developed an end-to-end methodology: survey, design, construction oversight, delivery, and after-sales service.',
      'est.bio.p2':'In January 2014, he founded rødën to apply that same methodology to interior furnishing. The premise was simple: if an architectural project benefits from having a single responsible figure from the first measurement to project closeout, custom furnishing should too.',
      'est.bio.p3':'Today rødën is a consolidated team. Each project is led by the architect who conducted the initial survey. The client works directly with them throughout the entire project.',
      'est.serv.h2':'The service','est.serv.frase':'Like a bespoke tailor, at your home.',
      'est.serv.p1':'We come to your home. We take measurements. We design from scratch. We manufacture in our workshop. We install in your space.',
      'est.serv.p2':'When a piece requires it, we also handle its electrical installation and lighting. We incorporate upholstery, metalwork, and work in marble, granite, stainless steel, and glass as the project demands.',
      'est.serv.cierre':'You define what you want. rødën figures out how.',
      'est.tall.h2':'The workshop','est.tall.p':'Manufacturing is handled by the workshop team, in our own facility. The process is directed by the architect who signed the project.',
      'est.esnoes.h2':"What rødën is and what it isn't.",
      'est.es.h3':'Is','est.es.1':'A design studio and workshop that designs and builds with architectural methodology.','est.es.2':'Full custom furnishing, from scratch.','est.es.3':'A single person responsible for the entire project.',
      'est.noes.h3':'Is not','est.noes.1':'A traditional carpentry shop.','est.noes.2':'An industrial or catalog furniture company.','est.noes.3':'A pre-fabricated furniture brand.',
      'proc.h1':'rødën System',
      'proc.sub':'A work method built to ensure what is designed matches what is built and installed, without deviations in quality, timing, or execution.',
      'proc.frase':'Each module in the system exists to prevent a specific type of error.',
      'proc.m01.tag':'Site Survey','proc.m01.h3':'On-site assessment','proc.m01.evita':'Prevents measurement errors and designs poorly adapted to actual use.',
      'proc.m01.qh.label':'What we do','proc.m01.qh.p':'On-site survey, precise measurement, and understanding of the actual use of the space.',
      'proc.m01.qe.label':'What it prevents','proc.m01.qe.p':"Designs that don't respond to actual use, measurement errors, and poorly adapted generic solutions.",
      'proc.m01.qd.label':'What is defined','proc.m01.qd.p':"Real physical conditions, functional needs — including those the client doesn't articulate — and technical constraints.",
      'proc.m01.val.label':'Value','proc.m01.val.p':'The project starts with real information, not assumptions.',
      'proc.m02.tag':'Design','proc.m02.h3':'Design validated before manufacturing','proc.m02.evita':'Prevents on-site changes and gaps between render and result.',
      'proc.m02.qh.label':'What we do','proc.m02.qh.p':'Project development from scratch, iterative adjustments, and client validation. Full definition before moving to production.',
      'proc.m02.qe.label':'What it prevents','proc.m02.qe.p':'On-site changes, improvised decisions, and differences between render and result.',
      'proc.m02.qd.label':'What is defined','proc.m02.qd.p':'Exact geometry, materials, finishes, and construction solutions.',
      'proc.m02.val.label':'Value','proc.m02.val.p':'Nothing is manufactured without being fully defined.',
      'proc.m03.tag':'Quote','proc.m03.h3':'Executable technical documentation','proc.m03.evita':'Prevents ambiguous interpretations and execution errors.',
      'proc.m03.qh.label':'What we do','proc.m03.qh.p':'Converting the design into precise technical information for manufacturing.',
      'proc.m03.qe.label':'What it prevents','proc.m03.qe.p':'Ambiguous interpretations, execution errors, and uncontrolled trade dependency.',
      'proc.m03.qd.label':'What is defined','proc.m03.qd.p':'Technical drawings, cut lists, and material and hardware specifications.',
      'proc.m03.val.label':'Value','proc.m03.val.p':'The project stops being an idea and becomes executable without room for interpretation.',
      'proc.m04.tag':'Production','proc.m04.h3':'Controlled manufacturing','proc.m04.evita':'Prevents quality loss and diluted responsibility.',
      'proc.m04.qh.label':'What we do','proc.m04.qh.p':'Furniture production in our own workshop, under direct supervision.',
      'proc.m04.qe.label':'What it prevents','proc.m04.qe.p':'Quality loss in production, deviations from the design, and diluted responsibility through delegation.',
      'proc.m04.qd.label':'What is controlled','proc.m04.qd.p':'Material quality, construction precision, and consistency with the signed project.',
      'proc.m04.val.label':'Value','proc.m04.val.p':'Direct control of production, no intermediaries between design and manufacturing.',
      'proc.m05.tag':'Delivery','proc.m05.h3':'Installation and project closeout','proc.m05.evita':'Prevents deficient finishes and unresolved projects.',
      'proc.m05.qh.label':'What we do','proc.m05.qh.p':'On-site installation and final adjustment.',
      'proc.m05.qe.label':'What it prevents','proc.m05.qe.p':'Deficient finishes, fitting issues, and projects left open without formal closeout.',
      'proc.m05.qd.label':'What is guaranteed','proc.m05.qd.p':'Real fit in the space, finish consistent with the design, and complete project closeout.',
      'proc.m05.val.label':'Value','proc.m05.val.p':'The project is not considered complete until the furnishing works as designed.',
      'proc.m06.tag':'After-Sales Service','proc.m06.h3':'Support after delivery','proc.m06.evita':'Ensures clients are never left alone once the project is complete.',
      'proc.m06.qh.label':'What we do','proc.m06.qh.p':'Once the project is delivered, we remain available to resolve any questions or needs that may arise.',
      'proc.m06.qe.label':'What it prevents','proc.m06.qe.p':'Post-delivery abandonment and lack of response to unforeseen issues or post-installation queries.',
      'proc.m06.qd.label':'What is guaranteed','proc.m06.qd.p':'Direct access to the team without intermediaries, with the same level of care as during the project.',
      'proc.m06.val.label':'Value','proc.m06.val.p':'Your satisfaction is our priority.',
      'proc.resp.h2':'Unified responsibility',
      'proc.resp.p1':'The entire process — from the initial survey to installation — is led by the same architect.',
      'proc.resp.p2':"This eliminates one of the industry's main problems: fragmented responsibility.",
      'proc.resp.p3':'At rødën, there is no separate designer, manufacturer, or installer. There is a single line of decision and control.',
      'proc.filtro.q':'Is this system for you?',
      'proc.filtro.si.h3':"It's for you if:",'proc.filtro.si.1':'You want to solve the whole project, not just parts of it.','proc.filtro.si.2':'You value the process as much as the result.','proc.filtro.si.3':"You're looking for predictability in timing, quality, and execution.",
      'proc.filtro.no.h3':"It's not for you if:",'proc.filtro.no.1':'Your priority is price over process.','proc.filtro.no.2':'You need a quick solution without prior definition.','proc.filtro.no.3':"You're looking for standard or catalog furniture.",
      'proc.cta.h2':"Let's start a project",'proc.cta.desc':'First conversation: together we determine if your project is viable and how to approach it correctly from the start.',
      'proc.cta.modulo':"Start with Module 1 — the site survey — by choosing the type of project you're considering:",
      'proc.cta.timing':"After the survey, you'll receive the project proposal within a few days.",
      'proc.rev.cierre':"This is not a coincidence. It's a direct consequence of the work system.",
      'proy.h1':'Projects','proy.frase1':'Cases of the rødën System in practice.','proy.frase2':'Every project is unique. The method is the same.',
      'insp.h1':'Inspiration','insp.frame':'Library of our own designs. Each one serves as a starting point. We adapt it to your space.',
      'insp.cta.q':"Didn't find what you're looking for?",'insp.cta.inv':'Start your project from scratch.',
      'common.cta.h2':"Let's start a project.",'common.wa.btn':'Chat on WhatsApp',
      'dyn.proy.cta':'Ask about this project →','dyn.insp.cta':'Start a similar project →','dyn.loading':'Loading…',
    }
  };

  function applyLang() {
    const Tr = T[lang];
    const brandify = s => s.replace(/rødën/g, '<span class="brand">rødën</span>');
    const set  = (sel, key, root) => { (root||document).querySelectorAll(sel).forEach(el => { if (Tr[key] !== undefined) el.innerHTML = brandify(Tr[key]); }); };
    const html = (sel, key, root) => { (root||document).querySelectorAll(sel).forEach(el => { if (Tr[key] !== undefined) el.innerHTML = brandify(Tr[key]); }); };

    // Nav (scoped to nav elements only, not CTA buttons)
    document.querySelectorAll('.nav-desktop .nav-link, .mobile-menu .nav-link').forEach(btn => {
      const k = `nav.${btn.dataset.page}`; if (Tr[k]) btn.textContent = Tr[k];
    });
    // Lang toggle state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

    // HOME
    set('#page-home .hero .t-display', 'hero.h1');
    set('#page-home .hero .hero-sub', 'hero.sub');
    set('#page-home .hero .btn-primary[data-page="proceso"]', 'hero.cta1');
    set('#page-home .hero .btn-ghost', 'hero.cta2');
    set('#page-home .tres-puntos .t-h2', 'puntos.h2');
    set('#page-home .tres-puntos .section-intro', 'puntos.intro');
    const puntos = document.querySelectorAll('#page-home .punto');
    [['01'],['02'],['03']].forEach(([n], i) => {
      if (!puntos[i]) return;
      set('h3', `puntos.0${i+1}.h3`, puntos[i]);
      set('p',  `puntos.0${i+1}.p`,  puntos[i]);
    });
    set('#page-home .tres-puntos-cta .link-arrow', 'puntos.cta');
    const proyHomeSection = document.getElementById('home-proyectos-grid')?.closest('section');
    if (proyHomeSection) {
      set('.section-header .t-h2', 'proyh.h2', proyHomeSection);
      set('.section-header .section-intro', 'proyh.intro', proyHomeSection);
      const proyAllBtn = proyHomeSection.querySelector('.link-arrow[data-page="proyectos"]');
      if (proyAllBtn) proyAllBtn.textContent = Tr['proyh.cta'];
    }
    // Sistema
    const sisSection = document.querySelector('#page-home section[style*="bg-elevated"], #page-home .sistema-modules')?.closest('section') || document.querySelectorAll('#page-home .section')[2];
    if (sisSection) {
      set('.section-header .t-h2', 'sis.h2', sisSection);
      set('.section-header .section-intro', 'sis.intro', sisSection);
      sisSection.querySelectorAll('.sistema-module').forEach((m, i) => {
        set('h3', `sis.0${i+1}.h3`, m);
        set('p',  `sis.0${i+1}.p`,  m);
      });
      set('.link-arrow[data-page="proceso"]', 'sis.cta', sisSection);
    }
    // Reviews home
    const revSection = document.querySelector('#page-home .quotes-grid')?.closest('.section');
    if (revSection) {
      set('.t-h2', 'rev.h2', revSection);
      revSection.querySelectorAll('.quote-card blockquote').forEach((bq, i) => {
        const qKey = `rev.q${i+1}`; if (Tr[qKey]) bq.innerHTML = `<span class="open-q">❝</span> ${Tr[qKey]} <span class="close-q">❞</span>`;
      });
      const gLink = revSection.querySelector('.link-arrow[href*="google"]');
      if (gLink) gLink.textContent = Tr['rev.cta'];
    }
    // Home CTA block
    const ctaBlock = document.querySelector('#page-home .cta-block');
    if (ctaBlock) {
      set('.t-h2', 'cta.h2', ctaBlock);
      html('p', 'cta.p', ctaBlock);
      const btns = ctaBlock.querySelectorAll('.btn-primary');
      const waKeys = ['integral','ambiente','puntual'];
      btns.forEach((btn, i) => {
        if (Tr[`cta.btn${i+1}`]) { const arrow = btn.querySelector('.arrow'); btn.childNodes[0].textContent = Tr[`cta.btn${i+1}`] + ' '; if (!arrow) btn.textContent = Tr[`cta.btn${i+1}`]; }
        btn.href = wa(waKeys[i]);
      });
    }

    // ESTUDIO
    set('#page-estudio .apertura-estudio h1', 'est.h1');
    set('#page-estudio .frase-grande', 'est.frase-grande');
    set('#page-estudio .frase-aclar', 'est.frase-aclar');
    const bioPs = document.querySelectorAll('#page-estudio .bio-text p:not(.cargo)');
    ['est.bio.p1','est.bio.p2','est.bio.p3'].forEach((k, i) => { if (bioPs[i] && Tr[k]) bioPs[i].innerHTML = brandify(Tr[k]); });
    set('#page-estudio .servicio-block .t-h2', 'est.serv.h2');
    set('#page-estudio .frase-fuerte', 'est.serv.frase');
    const pasos = document.querySelectorAll('#page-estudio .pasos');
    if (pasos[0]) pasos[0].innerHTML = brandify(Tr['est.serv.p1']);
    if (pasos[1]) pasos[1].innerHTML = brandify(Tr['est.serv.p2']);
    set('#page-estudio .frase-cierre', 'est.serv.cierre');
    set('#page-estudio .section:has(.taller-photo) .t-h2', 'est.tall.h2');
    set('#page-estudio .taller-text', 'est.tall.p');
    set('#page-estudio .es-no-es ~ * .t-h2, #page-estudio .section:has(.es-no-es) .t-h2', 'est.esnoes.h2');
    const esNoEs = document.querySelector('#page-estudio .es-no-es');
    if (esNoEs) {
      const [esDiv, noEsDiv] = esNoEs.querySelectorAll(':scope > div');
      if (esDiv) {
        set('h3', 'est.es.h3', esDiv);
        const esLis = esDiv.querySelectorAll('li');
        ['est.es.1','est.es.2','est.es.3'].forEach((k, i) => { if (esLis[i] && Tr[k]) esLis[i].textContent = Tr[k]; });
      }
      if (noEsDiv) {
        set('h3', 'est.noes.h3', noEsDiv);
        const noLis = noEsDiv.querySelectorAll('li');
        ['est.noes.1','est.noes.2','est.noes.3'].forEach((k, i) => { if (noLis[i] && Tr[k]) noLis[i].textContent = Tr[k]; });
      }
    }

    // PROCESO
    set('#page-proceso .apertura-proceso h1', 'proc.h1');
    set('#page-proceso .subtitulo', 'proc.sub');
    set('#page-proceso .frase-clave-card', 'proc.frase');
    const mKeys = ['m01','m02','m03','m04','m05','m06'];
    document.querySelectorAll('#page-proceso .module-item').forEach((item, i) => {
      const mk = `proc.${mKeys[i]}`;
      set('.module-tag', `${mk}.tag`, item);
      set('h3', `${mk}.h3`, item);
      set('.module-evita', `${mk}.evita`, item);
      item.querySelectorAll('.grupo').forEach((g, j) => {
        const gk = ['qh','qe','qd','val'][j];
        set('.grupo-label', `${mk}.${gk}.label`, g);
        const p = g.querySelector('p, .valor-destacado'); if (p && Tr[`${mk}.${gk}.p`]) p.innerHTML = brandify(Tr[`${mk}.${gk}.p`]);
      });
    });
    set('#page-proceso .responsabilidad h2', 'proc.resp.h2');
    const respPs = document.querySelectorAll('#page-proceso .responsabilidad p');
    ['proc.resp.p1','proc.resp.p2','proc.resp.p3'].forEach((k, i) => { if (respPs[i] && Tr[k]) respPs[i].innerHTML = brandify(Tr[k]); });
    set('#page-proceso .filtro-q', 'proc.filtro.q');
    const filtroCols = document.querySelectorAll('#page-proceso .filtro-cols > div');
    if (filtroCols[0]) {
      set('h3', 'proc.filtro.si.h3', filtroCols[0]);
      const lis = filtroCols[0].querySelectorAll('li');
      ['proc.filtro.si.1','proc.filtro.si.2','proc.filtro.si.3'].forEach((k, i) => { if (lis[i] && Tr[k]) lis[i].textContent = Tr[k]; });
    }
    if (filtroCols[1]) {
      set('h3', 'proc.filtro.no.h3', filtroCols[1]);
      const lis = filtroCols[1].querySelectorAll('li');
      ['proc.filtro.no.1','proc.filtro.no.2','proc.filtro.no.3'].forEach((k, i) => { if (lis[i] && Tr[k]) lis[i].textContent = Tr[k]; });
    }
    const procCta = document.querySelector('#page-proceso .cta-block-extended');
    if (procCta) {
      set('.t-h2', 'proc.cta.h2', procCta);
      set('.descripcion', 'proc.cta.desc', procCta);
      set('.empezar-modulo', 'proc.cta.modulo', procCta);
      set('.timing', 'proc.cta.timing', procCta);
      const procBtns = procCta.querySelectorAll('.btn-primary');
      const waKeys2 = ['integral','ambiente','puntual'];
      procBtns.forEach((btn, i) => {
        if (Tr[`cta.btn${i+1}`]) { const arrow = btn.querySelector('.arrow'); btn.childNodes[0].textContent = Tr[`cta.btn${i+1}`] + ' '; }
        btn.href = wa(waKeys2[i]);
      });
    }
    // Reviews proceso
    const revProc = document.querySelector('#page-proceso .section:has(.quotes-grid)');
    if (revProc) {
      set('.t-h2', 'rev.h2', revProc);
      revProc.querySelectorAll('.quote-card blockquote').forEach((bq, i) => {
        const qKey = `rev.q${i+1}`; if (Tr[qKey]) bq.innerHTML = `<span class="open-q">❝</span> ${Tr[qKey]} <span class="close-q">❞</span>`;
      });
      set('.quotes-cierre', 'proc.rev.cierre', revProc);
      const gLink2 = revProc.querySelector('.link-arrow[href*="google"]');
      if (gLink2) gLink2.textContent = Tr['rev.cta'];
    }

    // PROYECTOS
    set('#page-proyectos .proyectos-apertura h1', 'proy.h1');
    set('#page-proyectos .frase-1', 'proy.frase1');
    set('#page-proyectos .frase-2', 'proy.frase2');

    // INSPIRACION
    set('#page-inspiracion .inspiracion-apertura h1', 'insp.h1');
    set('#page-inspiracion .frame', 'insp.frame');
    set('#page-inspiracion .pregunta', 'insp.cta.q');
    set('#page-inspiracion .invitacion', 'insp.cta.inv');
    const inspCtaBtn = document.querySelector('#page-inspiracion .inspiracion-cta-final .btn-primary');
    if (inspCtaBtn) { inspCtaBtn.textContent = Tr['common.wa.btn']; inspCtaBtn.href = wa('inspiracion'); }

    // FOOTER
    const ftTagline = document.querySelector('.footer-brand');
    if (ftTagline) {
      const strong = ftTagline.querySelector('strong');
      const sep = ftTagline.querySelector('.sep');
      if (strong && sep) ftTagline.innerHTML = strong.outerHTML + sep.outerHTML + Tr['footer.tagline'];
    }

    // WA float
    const waFloat = document.querySelector('.wa-float');
    if (waFloat) waFloat.href = wa('float');

    // CTA blocks comunes (estudio, proyectos)
    document.querySelectorAll('#page-estudio .cta-block, #page-proyectos .cta-block').forEach(block => {
      set('.t-h2', 'common.cta.h2', block);
      const btn = block.querySelector('.btn-primary');
      if (btn) { btn.textContent = Tr['common.wa.btn']; btn.href = wa('generic'); }
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
  }

  function setLang(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    localStorage.setItem('roden-lang', lang);
    // Forzar recarga de contenido dinámico en el nuevo idioma
    proyectosLoaded = false;
    inspiracionLoaded = false;
    applyLang();
    // Si estamos en proyectos/inspiracion, recargar inmediatamente
    const activePage = document.querySelector('.page.active');
    if (activePage) {
      const pid = activePage.id;
      if (pid === 'page-proyectos')   { document.getElementById('proyectos-grid').innerHTML = `<div style="grid-column:1/-1;padding:80px 0;text-align:center;color:#999;font-size:14px;letter-spacing:0.06em;">${T[lang]['dyn.loading']}</div>`; loadProyectos(); }
      if (pid === 'page-inspiracion') { document.getElementById('inspiracion-list').innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-tertiary);font-size:14px;">${T[lang]['dyn.loading']}</div>`; loadInspiracion(); }
      if (pid === 'page-home')        loadHomeProyectos();
    }
  }

  // Handlers del toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Aplicar idioma guardado al iniciar
  applyLang();

  // ── Supabase (repositorio de proyectos) ──────────────────────
  const SB_URL = 'https://otbdtfncwgubjjxsljux.supabase.co';
  const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90YmR0Zm5jd2d1YmpqeHNsanV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2ODU4NjgsImV4cCI6MjA5NDI2MTg2OH0.lz0sEKYo1fAA_z0hDnHM88nrCnWEouaFZtE3xKiPO50';
  const sb = supabase.createClient(SB_URL, SB_KEY);

  // ── Lenis smooth scroll ──────────────────────────────────────
  // En touch (móvil/tablet): desactivar smoothWheel para ceder el scroll al browser nativo.
  // matchMedia pointer:coarse detecta pantallas táctiles sin mouse de precisión.
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const lenis = new Lenis({
    lerp:        isTouch ? 0 : 0.10,
    smoothWheel: !isTouch,
    smoothTouch: false,   // Nunca smooth en touch (Lenis default, pero explícito)
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ── Custom cursor ────────────────────────────────────────────
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  let mX = 0, mY = 0, rX = 0, rY = 0, cursorVisible = false;

  document.addEventListener('mousemove', (e) => {
    mX = e.clientX; mY = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      gsap.to([cursorDot, cursorRing], { opacity: 1, duration: 0.3 });
    }
    gsap.to(cursorDot, { x: mX, y: mY, duration: 0.08, ease: 'none', overwrite: true });
  });
  gsap.ticker.add(() => {
    rX += (mX - rX) * 0.13;
    rY += (mY - rY) * 0.13;
    gsap.set(cursorRing, { x: rX, y: rY });
  });
  document.addEventListener('mouseleave', () => gsap.to([cursorDot, cursorRing], { opacity: 0, duration: 0.3 }));

  function bindCursorHover(root) {
    (root || document).querySelectorAll('a, button, .photo-placeholder, .module-item').forEach(el => {
      el.addEventListener('mouseenter', () => { cursorDot.classList.add('hover'); cursorRing.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursorDot.classList.remove('hover'); cursorRing.classList.remove('hover'); });
    });
  }
  bindCursorHover(document);

  // ── Page routing ─────────────────────────────────────────────
  const pages      = document.querySelectorAll('.page');
  const navLinks   = document.querySelectorAll('[data-page]');
  const header     = document.getElementById('site-header');
  const main       = document.getElementById('main');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger  = document.getElementById('hamburger-btn');

  function _doShowPage(name) {
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + name);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-desktop .nav-link').forEach(link =>
      link.classList.toggle('active', link.dataset.page === name)
    );
    if (name === 'home') {
      main.classList.add('home-active');
      header.classList.add('transparent');
    } else {
      main.classList.remove('home-active');
      header.classList.remove('transparent');
    }
    lenis.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => {
      initReveals();
      if (name === 'home')      { animateHero(); loadHomeProyectos(); }
      if (name === 'proyectos')   loadProyectos();
      if (name === 'inspiracion') loadInspiracion();
      if (name === 'proceso')     initProcesoAnimations();
    });
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }

  function showPage(name) {
    if (document.startViewTransition) {
      document.startViewTransition(() => _doShowPage(name));
    } else {
      _doShowPage(name);
    }
  }

  navLinks.forEach(link =>
    link.addEventListener('click', e => { e.preventDefault(); showPage(link.dataset.page); })
  );

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-controls', 'mobile-menu');

  // ── Header transparency ──────────────────────────────────────
  lenis.on('scroll', ({ scroll }) => {
    const homeActive = document.getElementById('page-home').classList.contains('active');
    if (!homeActive) { header.classList.remove('transparent'); return; }
    header.classList.toggle('transparent', scroll < 80);
  });

  // ── GSAP Scroll reveals ──────────────────────────────────────
  function initReveals() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    // Excluir elementos del hero — se animan por separado
    const els = [...document.querySelectorAll('.page.active .reveal')]
      .filter(el => !el.closest('.hero'));
    gsap.set(els, { opacity: 0, y: 28 });
    els.forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      });
    });
  }

  // ── Hero slideshow (Ken Burns) ───────────────────────────────
  let slideshowTimerDesktop = null;
  let slideshowTimerMobile  = null;
  const kbClasses = ['kb-1', 'kb-2', 'kb-3', 'kb-4'];

  function startSlideshow(containerId) {
    const slides = [...document.querySelectorAll(`#${containerId} .hero-slide`)];
    if (slides.length < 2) return null;
    let current = 0;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === 0);
      if (i === 0) s.classList.add('kb-1');
    });
    return setInterval(() => {
      const prev = current;
      const next = (current + 1) % slides.length;
      const kbClass = kbClasses[next % kbClasses.length];
      slides[next].classList.remove(...kbClasses);
      slides[next].style.animation = 'none';
      slides[next].offsetHeight; // force reflow
      slides[next].classList.add(kbClass);
      slides[next].style.animation = '';
      slides[next].classList.add('active');
      setTimeout(() => slides[prev].classList.remove('active'), 1800);
      current = next;
    }, 6000);
  }

  function initHeroSlideshow() {
    if (slideshowTimerDesktop) clearInterval(slideshowTimerDesktop);
    if (slideshowTimerMobile)  clearInterval(slideshowTimerMobile);
    slideshowTimerDesktop = startSlideshow('hero-slides-desktop');
    slideshowTimerMobile  = startSlideshow('hero-slides-mobile');
  }

  // ── Hero word-by-word entrance ───────────────────────────────
  function animateHero() {
    const h1 = document.querySelector('.hero h1');
    if (!h1) return;

    if (!h1.dataset.split) {
      h1.dataset.split = '1';
      h1.innerHTML = h1.textContent.trim().split(/\s+/).map(w =>
        `<span class="word-wrap"><span class="word">${w}</span></span>`
      ).join(' ');
    }

    const sub  = document.querySelector('.hero .hero-sub');
    const ctas = document.querySelector('.hero .hero-ctas');

    gsap.set(h1, { opacity: 1 });
    if (sub)  gsap.set(sub,  { opacity: 0, y: 18 });
    if (ctas) gsap.set(ctas, { opacity: 0, y: 14 });

    initHeroSlideshow();

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo('.hero .word',
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.055 }
      )
      .to(sub,  { opacity: 0.75, y: 0, duration: 0.75 }, '-=0.35')
      .to(ctas, { opacity: 1,    y: 0, duration: 0.6  }, '-=0.35');
  }

  // ── Home: Proyectos destacados fijos (tabla home_featured) ─────
  async function loadHomeProyectos() {
    const grid = document.getElementById('home-proyectos-grid');
    if (!grid) return;

    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-tertiary);font-size:14px;letter-spacing:.08em;">Cargando proyectos…</div>';

    const { data: items, error } = await sb
      .from('home_featured')
      .select('position, images, title, title_en, tipo, anio, comment, comment_en')
      .eq('is_published', true)
      .order('position');

    // Solo mostrar slots que tienen al menos una imagen o título
    const filled = (items || []).filter(p => (p.images && p.images.length > 0) || p.title);

    if (error || filled.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-tertiary);font-size:14px;letter-spacing:.08em;">No hay proyectos destacados todavía.</div>';
      return;
    }

    const ctaText = T[lang]['dyn.proy.cta'] || (lang === 'en' ? 'Ask about this project →' : 'Consultá por este proyecto →');

    grid.innerHTML = filled.map(p => {
      const imgs         = (p.images || []).filter(Boolean);
      const meta         = [p.tipo, p.anio].filter(Boolean).join(' · ');
      const displayTitle = (lang === 'en' && p.title_en) ? p.title_en : p.title;
      const displayDesc  = (lang === 'en' && p.comment_en) ? p.comment_en : p.comment;
      const waMsg = lang === 'en'
        ? encodeURIComponent(`Hi Gustavo. I saw the project "${displayTitle}" on the rødën site and I'd love to talk about something similar.`)
        : encodeURIComponent(`Hola Gustavo. Vi el proyecto "${displayTitle}" en el sitio de rødën y me gustaría conversar sobre algo similar.`);

      const slidesHtml = imgs.length > 0
        ? imgs.map((url, i) => `<div class="card-slide${i === 0 ? ' active kb-a' : ''}" style="background-image:url('${url}')"></div>`).join('')
        : '<div class="card-slide active"></div>';

      const dotsHtml = imgs.length > 1
        ? `<div class="card-slide-dots">${imgs.map((_, i) => `<span class="card-dot${i === 0 ? ' active' : ''}"></span>`).join('')}</div>`
        : '';

      return `
        <article class="project-card reveal">
          <div class="card-slideshow" data-slide-count="${imgs.length}">
            ${slidesHtml}
            ${dotsHtml}
            ${imgs.length === 0 ? '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#999">Foto próximamente</span>' : ''}
          </div>
          <div class="label-line">${meta || 'rødën'}</div>
          <h3>${displayTitle}</h3>
          ${displayDesc ? `<p class="project-desc">${displayDesc}</p>` : ''}
          <a class="link-arrow" href="https://wa.me/5491145047893?text=${waMsg}" target="_blank" rel="noopener">
            ${ctaText}
          </a>
        </article>`;
    }).join('');

    requestAnimationFrame(() => {
      initReveals();
      initCardSlideshows();
    });
  }

  let proyectosLoaded = false;

  async function loadProyectos() {
    // Evitar recargar si ya están cargados
    if (proyectosLoaded) { initReveals(); return; }

    const grid    = document.getElementById('proyectos-grid');
    const loading = document.getElementById('proyectos-loading');

    const { data: projects, error } = await sb
      .from('portfolio_projects')
      .select('id, title, title_en, tipo, anio, comment, comment_en, images')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (error || !projects || projects.length === 0) {
      if (loading) loading.textContent = 'No hay proyectos publicados todavía.';
      return;
    }

    // Shuffle para rotación aleatoria
    const shuffled = [...projects].sort(() => Math.random() - 0.5);

    grid.innerHTML = shuffled.map(p => {
      const imgs         = (p.images || []).filter(Boolean);
      const meta         = [p.tipo, p.anio].filter(Boolean).join(' · ');
      const displayTitle = (lang === 'en' && p.title_en) ? p.title_en : p.title;
      const displayDesc  = (lang === 'en' && p.comment_en) ? p.comment_en : p.comment;
      const waMsg = lang === 'en'
        ? encodeURIComponent(`Hi Gustavo. I saw the project "${displayTitle}" on the rødën site and I'd love to talk about something similar.`)
        : encodeURIComponent(`Hola Gustavo. Vi el proyecto "${displayTitle}" en el sitio de rødën y me gustaría conversar sobre algo similar.`);
      const ctaText = T[lang]['dyn.proy.cta'] || (lang === 'en' ? 'Ask about this project →' : 'Consultá por este proyecto →');

      const slidesHtml = imgs.length > 0
        ? imgs.map((url, i) => `<div class="card-slide${i === 0 ? ' active kb-a' : ''}" style="background-image:url('${url}')"></div>`).join('')
        : '<div class="card-slide active" style=""></div>';

      const dotsHtml = imgs.length > 1
        ? `<div class="card-slide-dots">${imgs.map((_, i) => `<span class="card-dot${i === 0 ? ' active' : ''}"></span>`).join('')}</div>`
        : '';

      return `
        <article class="project-card reveal">
          <div class="card-slideshow" data-slide-count="${imgs.length}">
            ${slidesHtml}
            ${dotsHtml}
            ${imgs.length === 0 ? '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#999">Foto próximamente</span>' : ''}
          </div>
          <div class="label-line">${meta || 'rødën'}</div>
          <h3>${displayTitle}</h3>
          ${displayDesc ? `<p class="project-desc">${displayDesc}</p>` : ''}
          <a class="link-arrow" href="https://wa.me/5491145047893?text=${waMsg}" target="_blank" rel="noopener">
            ${ctaText}
          </a>
        </article>`;
    }).join('');

    proyectosLoaded = true;

    // Re-iniciar reveals y slideshows para los nuevos elementos
    requestAnimationFrame(() => {
      initReveals();
      initCardSlideshows();
    });

    // Actualizar hero con imágenes reales si hay suficientes
    updateHeroWithRealImages(projects);
  }

  // ── Card slideshows ──────────────────────────────────────────
  const cardTimers = new Map(); // slideshow → intervalId
  const kbList = ['kb-a', 'kb-b', 'kb-c'];

  function initCardSlideshows() {
    document.querySelectorAll('.card-slideshow').forEach(container => {
      const slides = [...container.querySelectorAll('.card-slide')];
      const dots   = [...container.querySelectorAll('.card-dot')];
      if (slides.length < 2) return; // una sola foto: sin slideshow

      // Limpiar timer previo si existiera
      if (cardTimers.has(container)) clearInterval(cardTimers.get(container));

      let current = 0;

      function goTo(next) {
        const kbClass = kbList[next % kbList.length];
        // Quitar active + kb del slide actual
        slides[current].classList.remove('active', ...kbList);
        if (dots[current]) dots[current].classList.remove('active');
        // Activar siguiente con nuevo KB
        slides[next].classList.remove(...kbList);
        // Forzar reflow para que la animación reinicie
        void slides[next].offsetWidth;
        slides[next].classList.add('active', kbClass);
        if (dots[next]) dots[next].classList.add('active');
        current = next;
      }

      const timer = setInterval(() => {
        goTo((current + 1) % slides.length);
      }, 4000);

      cardTimers.set(container, timer);

      // Pausar en hover (solo desktop)
      container.addEventListener('mouseenter', () => clearInterval(cardTimers.get(container)));
      container.addEventListener('mouseleave', () => {
        const t = setInterval(() => goTo((current + 1) % slides.length), 4000);
        cardTimers.set(container, t);
      });
    });
  }

  // ── Lightbox ─────────────────────────────────────────────────
  (function initLightbox() {
    const lb        = document.getElementById('lb');
    const backdrop  = document.getElementById('lb-backdrop');
    const lbInner   = document.getElementById('lb-inner');
    const lbImg     = document.getElementById('lb-img');
    const lbClose   = document.getElementById('lb-close');
    const lbPrev    = document.getElementById('lb-prev');
    const lbNext    = document.getElementById('lb-next');
    const lbCounter = document.getElementById('lb-counter');

    let lbImgs = [];   // URLs de todas las fotos del card activo
    let lbCur  = 0;    // índice actual
    let isOpen = false;

    // Extrae las URLs background-image de todos los .card-slide de un container
    function getSlideImgs(container) {
      return [...container.querySelectorAll('.card-slide')]
        .map(s => { const m = s.style.backgroundImage.match(/url\(["']?(.+?)["']?\)/); return m ? m[1] : null; })
        .filter(Boolean);
    }

    // Índice del slide activo
    function getActiveIdx(container) {
      const slides = [...container.querySelectorAll('.card-slide')];
      const idx = slides.findIndex(s => s.classList.contains('active'));
      return idx >= 0 ? idx : 0;
    }

    // Muestra la imagen en el índice dado (con crossfade)
    function showImg(idx, animate, dir) {
      lbCur = ((idx % lbImgs.length) + lbImgs.length) % lbImgs.length;
      lbCounter.textContent = lbImgs.length > 1 ? (lbCur + 1) + ' / ' + lbImgs.length : '';
      lbPrev.hidden = lbImgs.length <= 1;
      lbNext.hidden = lbImgs.length <= 1;
      if (animate && dir !== undefined) {
        const xOut = dir * -40;
        const xIn  = dir * 40;
        gsap.to(lbImg, { opacity: 0, x: xOut, duration: 0.14, ease: 'power2.in', onComplete: () => {
          lbImg.style.backgroundImage = "url('" + lbImgs[lbCur] + "')";
          gsap.fromTo(lbImg, { opacity: 0, x: xIn }, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' });
        }});
      } else {
        lbImg.style.backgroundImage = "url('" + lbImgs[lbCur] + "')";
      }
    }

    function navigate(dir) {
      if (lbImgs.length <= 1) return;
      showImg(lbCur + dir, true, dir);
    }

    function open(container) {
      lbImgs = getSlideImgs(container);
      if (lbImgs.length === 0) return;
      isOpen = true;

      const rect = container.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Pausar timer del slideshow
      if (cardTimers.has(container)) clearInterval(cardTimers.get(container));

      // Mostrar lightbox antes de animar
      lb.hidden = false;
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(lbImg, { opacity: 1, x: 0 });

      showImg(getActiveIdx(container), false);

      // clipPath que corresponde a la posición del card en la pantalla
      const t = parseFloat((rect.top    / vh * 100).toFixed(2));
      const r = parseFloat(((vw - rect.right)  / vw * 100).toFixed(2));
      const b = parseFloat(((vh - rect.bottom) / vh * 100).toFixed(2));
      const l = parseFloat((rect.left   / vw * 100).toFixed(2));

      gsap.fromTo(lbInner,
        { clipPath: 'inset(' + t + '% ' + r + '% ' + b + '% ' + l + '% round 0px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 0.48, ease: 'power3.inOut',
          onComplete: () => { lbInner.style.clipPath = ''; } }
      );
      gsap.to(backdrop, { opacity: 1, duration: 0.35, ease: 'power2.out' });

      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;
      gsap.to([lbInner, backdrop], {
        opacity: 0, duration: 0.22, ease: 'power2.in',
        onComplete: () => {
          lb.hidden = true;
          gsap.set([lbInner, backdrop], { opacity: 1 });
          lbImg.style.backgroundImage = '';
          lbImgs = [];
        }
      });
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowRight')  navigate(1);
      if (e.key === 'ArrowLeft')   navigate(-1);
    }

    // Delegación: click en cualquier .card-slideshow abre lightbox
    document.addEventListener('click', e => {
      const container = e.target.closest('.card-slideshow');
      if (!container) return;
      e.preventDefault();
      open(container);
    });

    lbClose.addEventListener('click', close);
    backdrop.addEventListener('click', close);
    lbPrev.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
    lbNext.addEventListener('click', e => { e.stopPropagation(); navigate(1); });

    // Swipe mobile
    let touchX0 = 0;
    lbInner.addEventListener('touchstart', e => { touchX0 = e.touches[0].clientX; }, { passive: true });
    lbInner.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchX0;
      if (Math.abs(dx) > 48) navigate(dx > 0 ? -1 : 1);
    });
  })();

  // ── Hero: carga desktop y mobile desde Supabase ──────────────
  async function loadHeroImages() {
    const slidesDesktop = [...document.querySelectorAll('#hero-slides-desktop .hero-slide')];
    const slidesMobile  = [...document.querySelectorAll('#hero-slides-mobile .hero-slide')];

    // Fallback compartido: imágenes de proyectos publicados
    async function getProjectImages() {
      const { data } = await sb.from('portfolio_projects').select('images').eq('is_published', true);
      if (!data || data.length === 0) return [];
      return [...data.flatMap(p => p.images || []).filter(Boolean)]
        .sort(() => Math.random() - 0.5);
    }

    // ── Desktop ───────────────────────────────────────────────
    const { data: deskData } = await sb
      .from('hero_slides').select('image_url, position').order('position');

    if (deskData && deskData.length > 0) {
      deskData.map(r => r.image_url).filter(Boolean).forEach((url, i) => {
        if (slidesDesktop[i]) slidesDesktop[i].style.backgroundImage = `url('${url}')`;
      });
    } else {
      const imgs = await getProjectImages();
      imgs.forEach((url, i) => {
        if (slidesDesktop[i]) slidesDesktop[i].style.backgroundImage = `url('${url}')`;
      });
    }

    // ── Mobile ────────────────────────────────────────────────
    const { data: mobileData } = await sb
      .from('hero_slides_mobile').select('image_url, position').order('position');

    if (mobileData && mobileData.length > 0) {
      mobileData.map(r => r.image_url).filter(Boolean).forEach((url, i) => {
        if (slidesMobile[i]) slidesMobile[i].style.backgroundImage = `url('${url}')`;
      });
    } else {
      // Sin mobile configurado: usa las mismas que desktop
      slidesDesktop.forEach((dSlide, i) => {
        if (slidesMobile[i] && dSlide.style.backgroundImage)
          slidesMobile[i].style.backgroundImage = dSlide.style.backgroundImage;
      });
    }
  }

  // ── Sin uso directo — hero ya carga en init vía loadHeroImages
  function updateHeroWithRealImages() {}

  // ── Module accordion ─────────────────────────────────────────
  document.querySelectorAll('.module-item').forEach(item =>
    item.addEventListener('click', () => item.classList.toggle('open'))
  );

  // ── Inspiración ──────────────────────────────────────────────
  let inspiracionLoaded = false;

  async function loadInspiracion() {
    if (inspiracionLoaded) { initReveals(); return; }

    const container = document.getElementById('inspiracion-list');
    const loading   = document.getElementById('inspiracion-loading');

    const { data: items, error } = await sb
      .from('inspiration_items')
      .select('id, title, title_en, category, comment, comment_en, images')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (error || !items || items.length === 0) {
      if (loading) loading.textContent = 'No hay inspiración publicada todavía.';
      return;
    }

    // Shuffle y mostrar hasta 18 ítems
    const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 18);

    container.innerHTML = shuffled.map(item => {
      const imgs         = (item.images || []).filter(Boolean);
      const displayTitle = (lang === 'en' && item.title_en) ? item.title_en : item.title;
      const displayDesc  = (lang === 'en' && item.comment_en) ? item.comment_en : item.comment;
      const waMsg = lang === 'en'
        ? encodeURIComponent(`Hi Gustavo. I saw the design "${displayTitle}" on rødën's Inspiration page and I'd love to start a similar project.`)
        : encodeURIComponent(`Hola Gustavo. Vi el diseño "${displayTitle}" en la página de Inspiración de rødën y me gustaría empezar un proyecto similar.`);
      const ctaText = T[lang]['dyn.insp.cta'] || (lang === 'en' ? 'Start a similar project →' : 'Empezá un proyecto similar →');

      const slidesHtml = imgs.length > 0
        ? imgs.map((url, i) => `<div class="card-slide${i === 0 ? ' active kb-a' : ''}" style="background-image:url('${url}')"></div>`).join('')
        : '<div class="card-slide active"></div>';

      const dotsHtml = imgs.length > 1
        ? `<div class="card-slide-dots">${imgs.map((_, i) => `<span class="card-dot${i === 0 ? ' active' : ''}"></span>`).join('')}</div>`
        : '';

      return `
        <article class="design-card reveal">
          <div class="card-slideshow" data-slide-count="${imgs.length}">
            ${slidesHtml}
            ${dotsHtml}
            ${imgs.length === 0 ? '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#999">Foto próximamente</span>' : ''}
          </div>
          <div class="label-line">${item.category || 'rødën'}</div>
          <h3>${displayTitle}</h3>
          ${displayDesc ? `<p class="design-desc">${displayDesc}</p>` : ''}
          <a class="link-arrow" href="https://wa.me/5491145047893?text=${waMsg}" target="_blank" rel="noopener">
            ${ctaText}
          </a>
        </article>`;
    }).join('');

    inspiracionLoaded = true;
    bindCursorHover(container);
    requestAnimationFrame(() => {
      initReveals();
      initCardSlideshows();
    });
  }

  // ── Protección de imágenes ───────────────────────────────────
  // Bloquea clic derecho y drag sobre contenedores de imagen
  const IMG_SELECTOR = '.hero-slide, .photo-placeholder, .card-slide';
  document.addEventListener('contextmenu', function(e) {
    if (e.target.closest(IMG_SELECTOR)) e.preventDefault();
  });
  document.addEventListener('dragstart', function(e) {
    if (e.target.closest(IMG_SELECTOR)) e.preventDefault();
  });

  // ── Proceso: línea de progreso + stagger ────────────────────
  function initProcesoAnimations() {
    const fill  = document.getElementById('proceso-track-fill');
    const list  = document.getElementById('modules-list');
    const items = [...document.querySelectorAll('#page-proceso .module-item')];
    if (!list || items.length === 0) return;

    // Stagger de entrada en scroll
    gsap.fromTo(items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        stagger: 0.09,
        scrollTrigger: {
          trigger: list,
          start: 'top 78%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Línea de progreso animada con scroll (solo desktop)
    if (fill && window.matchMedia('(min-width: 1024px)').matches) {
      gsap.fromTo(fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: list,
            start: 'top 55%',
            end: 'bottom 45%',
            scrub: 1,
          }
        }
      );
    }
  }

  // ── Init ─────────────────────────────────────────────────────
  showPage('home');
  loadHeroImages(); // Carga hero desde tabla hero_slides

})();

