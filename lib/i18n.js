/*
 * lib/i18n.js — diccionarios ES/EN
 * ---------------------------------
 * window.__I18N__ = { es: {...}, en: {...} }
 * El español es el idioma por defecto y vive hardcodeado en el HTML
 * (fallback sin JS). main.js solo sustituye textos cuando el usuario
 * cambia a inglés (o al recargar, si había inglés guardado).
 */
(function () {
  "use strict";

  window.__I18N__ = {
    es: {
      "meta.title": "JFPG — Técnico de Sistemas · Ciberseguridad",
      "meta.description": "Portfolio técnico de un Técnico Superior en ASIR (Alicante) formado en ciberseguridad y hacking ético. Soporte técnico, administración de sistemas y ciberseguridad ofensiva.",

      "skip.link": "Saltar al contenido",

      "nav.aria": "Secciones",
      "nav.about": "Sobre mí",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.blog": "Blog",
      "nav.contact": "Contactar",
      "nav.menu.aria": "Abrir menú",
      "nav.aria.mobile": "Secciones (móvil)",

      "hero.kicker": "Alicante - España · disponible",
      "hero.roles.aria": "Técnico de Sistemas, Ciberseguridad, Soporte IT",
      "hero.role1": "Técnico de Sistemas",
      "hero.role2": "Ciberseguridad",
      "hero.role3": "Soporte IT",
      "hero.tagline": "Busco empleo o proyectos Freelance en Alicante o en remoto.",
      "hero.cta.projects": "Ver proyectos",
      "hero.photo.alt": "Retrato de JF, técnico de sistemas y ciberseguridad",
      "hero.badge": "ASIR · Ciberseguridad",
      "hero.scroll.aria": "Bajar a Sobre mí",

      "about.kicker": "Sobre mí",
      "about.title": "De la administración de sistemas a la ciberseguridad ofensiva",
      "about.p1": "Soy Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR) y también he cursado Sistemas Microinformáticos y Redes (SMR). Sobre esa base me formé específicamente en ciberseguridad y hacking ético con INESEM y TheBigSchool, buscando entender no solo cómo administrar sistemas, sino cómo protegerlos de verdad.",
      "about.p2": "Viví una temporada en Australia mejorando mi inglés, una experiencia que me enseñó a adaptarme rápido a entornos nuevos y a comunicarme con soltura en un contexto internacional — algo que valoro especialmente en el sector IT.",
      "about.p3": "Actualmente combino trabajo con formación continua en pentesting y administración de sistemas: monto laboratorios propios, resuelvo retos CTF y sigo profundizando en Active Directory, redes y análisis de vulnerabilidades. Mi objetivo es consolidarme en soporte técnico y administración de sistemas, con la ciberseguridad ofensiva como horizonte claro de crecimiento.",
      "about.highlight": "Perseverancia y ganas reales de entrar y crecer en el sector IT / ciberseguridad.",

      "skills.kicker": "Habilidades técnicas",
      "skills.title": "Lo que manejo día a día",
      "skills.group1.title": "Sistemas",
      "skills.group2.title": "Redes y Seguridad",
      "skills.group2.tag3": "Análisis de vulnerabilidades",
      "skills.group3.title": "Virtualización y Contenedores",
      "skills.group4.title": "Ciberseguridad y CTFs",
      "skills.group4.tag1": "Herramientas de pentesting",
      "skills.group4.tag2": "Retos CTF",
      "skills.group4.tag3": "Hacking ético",

      "projects.kicker": "Proyectos",
      "projects.title": "Práctica real, no solo teoría",
      "projects.p1.title": "Creación de retos CTF para Dockerlabs.es",
      "projects.p1.summary": "Diseño de máquinas y retos de hacking ético para la comunidad de Dockerlabs.es, aplicando técnicas de explotación, escalada de privilegios y análisis de vulnerabilidades en entornos controlados.",
      "projects.p1.link": "Ver Dockerlabs.es",
      "projects.p2.title": "Homelab de pentesting y administración de sistemas",
      "projects.p2.summary": "Laboratorio personal sobre Proxmox para practicar administración de sistemas, redes y ciberseguridad ofensiva: máquinas vulnerables, segmentación de red, Active Directory y pruebas de intrusión propias.",
      "projects.p3.tag3": "Amenazas",
      "projects.p3.summary": "Simulación práctica de trabajo real como analista de ciberseguridad a través de The Forage, resolviendo casos de identificación de amenazas y respuesta a incidentes en un contexto bancario.",
      "projects.p3.link": "Ver Certificado",
      "projects.p4.tag2": "Divulgación",
      "projects.p4.title": "Blog de ciberseguridad — writeups y posts",
      "projects.p4.summary": "Mi blog personal, donde subo writeups de retos y posts técnicos sobre pentesting y administración de sistemas.",
      "projects.p4.link": "Visitar blog",

      "education.kicker": "Formación",
      "education.title": "Recorrido formativo",

      "experience.kicker": "Experiencia",
      "experience.title": "Experiencia profesional",
      "experience.role": "Técnico Informático",
      "experience.other": "Además, cuento con otras experiencias laborales previas fuera del sector IT que aportaron trato al cliente, responsabilidad y capacidad de trabajo bajo presión.",

      "contact.kicker": "Contacto",
      "contact.title": "Hablemos",
      "contact.note": "¿Buscas soporte técnico, administración de sistemas o alguien con ganas de crecer en ciberseguridad? Escríbeme y hablamos.",
      "contact.cta": "Enviar Correo",
      "contact.location": "Alicante, España",

      "footer.top": "Volver arriba ↑"
    },

    en: {
      "meta.title": "JFPG — Systems Technician · Cybersecurity",
      "meta.description": "Technical portfolio of a Higher Technician in Network Systems Administration (ASIR) from Alicante, trained in cybersecurity and ethical hacking. IT support, systems administration and offensive cybersecurity.",

      "skip.link": "Skip to content",

      "nav.aria": "Sections",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "nav.menu.aria": "Open menu",
      "nav.aria.mobile": "Sections (mobile)",

      "hero.kicker": "Alicante · Spain — available",
      "hero.roles.aria": "Systems Technician, Cybersecurity, IT Support",
      "hero.role1": "Systems Technician",
      "hero.role2": "Cybersecurity",
      "hero.role3": "IT Support",
      "hero.tagline": "Looking for a job or freelance projects in Alicante or remote.",
      "hero.cta.projects": "See projects",
      "hero.photo.alt": "Portrait of JF, systems and cybersecurity technician",
      "hero.badge": "ASIR · Cybersecurity",
      "hero.scroll.aria": "Scroll to About",

      "about.kicker": "About me",
      "about.title": "From systems administration to offensive cybersecurity",
      "about.p1": "I'm a Higher Technician in Network Systems Administration (ASIR) and I also completed Microcomputer Systems and Networks (SMR). On top of that I trained specifically in cybersecurity and ethical hacking with INESEM and TheBigSchool, looking to understand not just how to administer systems, but how to actually protect them.",
      "about.p2": "I spent a period in Australia improving my English — an experience that taught me to adapt quickly to new environments and communicate comfortably in an international context, something I particularly value in IT.",
      "about.p3": "I currently combine work with ongoing training in pentesting and systems administration: I build my own labs, solve CTF challenges and keep going deeper into Active Directory, networking and vulnerability analysis. My goal is to establish myself in IT support and systems administration, with offensive cybersecurity as a clear growth path.",
      "about.highlight": "Real perseverance and drive to break into and grow in the IT / cybersecurity field.",

      "skills.kicker": "Technical skills",
      "skills.title": "What I work with day to day",
      "skills.group1.title": "Systems",
      "skills.group2.title": "Networking & Security",
      "skills.group2.tag3": "Vulnerability analysis",
      "skills.group3.title": "Virtualization & Containers",
      "skills.group4.title": "Cybersecurity & CTFs",
      "skills.group4.tag1": "Pentesting tools",
      "skills.group4.tag2": "CTF challenges",
      "skills.group4.tag3": "Ethical hacking",

      "projects.kicker": "Projects",
      "projects.title": "Real practice, not just theory",
      "projects.p1.title": "Building CTF challenges for Dockerlabs.es",
      "projects.p1.summary": "Designing vulnerable machines and ethical hacking challenges for the Dockerlabs.es community, applying exploitation techniques, privilege escalation and vulnerability analysis in controlled environments.",
      "projects.p1.link": "View Dockerlabs.es",
      "projects.p2.title": "Pentesting and systems administration homelab",
      "projects.p2.summary": "Personal lab on Proxmox to practice systems administration, networking and offensive cybersecurity: vulnerable machines, network segmentation, Active Directory and my own intrusion testing.",
      "projects.p3.tag3": "Threats",
      "projects.p3.summary": "A hands-on job simulation as a cybersecurity analyst through The Forage, working through threat identification and incident response cases in a banking context.",
      "projects.p3.link": "View certificate",
      "projects.p4.tag2": "Writing",
      "projects.p4.title": "Cybersecurity blog — writeups and posts",
      "projects.p4.summary": "My personal blog, where I post challenge writeups and technical posts on pentesting and systems administration.",
      "projects.p4.link": "Visit blog",

      "education.kicker": "Education",
      "education.title": "Education path",

      "experience.kicker": "Experience",
      "experience.title": "Professional experience",
      "experience.role": "IT Technician",
      "experience.other": "I also have earlier work experience outside IT, which gave me customer-facing skills, responsibility and the ability to work under pressure.",

      "contact.kicker": "Contact",
      "contact.title": "Let's talk",
      "contact.note": "Looking for IT support, systems administration, or someone eager to grow in cybersecurity? Write to me and let's talk.",
      "contact.cta": "Send an email",
      "contact.location": "Alicante, Spain",

      "footer.top": "Back to top ↑"
    }
  };
})();
