/* ==========================================================================
   lib/manifest.js — datos reales de JF Pérez (kiket25)
   Único archivo a tocar para actualizar contenido (textos, proyectos,
   habilidades, formación, experiencia, contacto). No requiere tocar
   index.html ni main.js para añadir o quitar elementos de las listas.
   ========================================================================== */
(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Juan F. Pérez G.",
    shortName: "JF Pérez",
    handle: "kiket25",
    roles: ["Técnico de Sistemas", "Ciberseguridad", "Soporte IT"],
    tagline:
      "Formado en sistemas y ciberseguridad, enfocado en seguir creciendo en entornos técnicos reales.",
    location: "Alicante, España",
    photo: "assets/img/team-juan.webp",

    about: {
      kicker: "Sobre mí",
      paragraphs: [
        "Soy Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR) y también he cursado Sistemas Microinformáticos y Redes (SMR). Sobre esa base me formé específicamente en ciberseguridad y hacking ético con INESEM y TheBigSchool, buscando entender no solo cómo administrar sistemas, sino cómo protegerlos de verdad.",
        "Viví una temporada en Australia mejorando mi inglés, una experiencia que me enseñó a adaptarme rápido a entornos nuevos y a comunicarme con soltura en un contexto internacional — algo que valoro especialmente en el sector IT.",
        "Actualmente combino trabajo con formación continua en pentesting y administración de sistemas: monto laboratorios propios, resuelvo retos CTF y sigo profundizando en Active Directory, redes y análisis de vulnerabilidades. Mi objetivo es consolidarme en soporte técnico y administración de sistemas, con la ciberseguridad ofensiva como horizonte claro de crecimiento.",
      ],
      highlight:
        "Perseverancia y ganas reales de entrar y crecer en el sector IT / ciberseguridad.",
    },

    skills: [
      {
        group: "Sistemas",
        icon: "server",
        items: ["Windows", "Linux", "Proxmox", "Active Directory"],
      },
      {
        group: "Redes y Seguridad",
        icon: "shield",
        items: ["VPN", "Firewall", "Análisis de vulnerabilidades"],
      },
      {
        group: "Virtualización y Contenedores",
        icon: "layers",
        items: ["Proxmox VE", "Docker"],
      },
      {
        group: "Ciberseguridad y CTFs",
        icon: "terminal",
        items: ["Herramientas de pentesting", "Retos CTF", "Hacking ético"],
      },
    ],

    projects: [
      {
        id: "dockerlabs",
        title: "Creación de retos CTF para Dockerlabs.es",
        summary:
          "Diseño de máquinas y retos de hacking ético para la comunidad de Dockerlabs.es, aplicando técnicas de explotación, escalada de privilegios y análisis de vulnerabilidades en entornos controlados.",
        tags: ["CTF", "Pentesting", "Docker"],
        link: "https://dockerlabs.es",
        linkLabel: "Ver Dockerlabs.es",
      },
      {
        id: "homelab",
        title: "Homelab de pentesting y administración de sistemas",
        summary:
          "Laboratorio personal sobre Proxmox para practicar administración de sistemas, redes y ciberseguridad ofensiva: máquinas vulnerables, segmentación de red, Active Directory y pruebas de intrusión propias.",
        tags: ["Proxmox", "Homelab", "Active Directory"],
        link: "",
        linkLabel: "",
      },
      {
        id: "forage",
        title: "Cybersecurity Analyst Job Simulation — Commonwealth Bank",
        summary:
          "Simulación práctica de trabajo real como analista de ciberseguridad a través de The Forage, resolviendo casos de identificación de amenazas y respuesta a incidentes en un contexto bancario.",
        tags: ["Blue Team", "The Forage", "Análisis de amenazas"],
        link: "",
        linkLabel: "",
      },
      {
        id: "blog",
        title: "Blog de ciberseguridad — writeups y posts",
        summary:
          "Mi blog personal, donde subo writeups de retos y posts técnicos sobre pentesting y administración de sistemas.",
        tags: ["Writeups", "Divulgación"],
        link: "https://jfpg.vercel.app",
        linkLabel: "Visitar blog",
      },
    ],

    education: [
      {
        title: "Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)",
        place: "CIP FP Batoi — Alcoy",
        note: "",
      },
      {
        title: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
        place: "CIP FP Batoi — Alcoy",
        note: "",
      },
      {
        title: "Curso de Experto en Ciberseguridad y Hacking Ético",
        place: "TheBigSchool",
        note: "",
      },
      {
        title: "Especialización en Ciberseguridad",
        place: "INESEM",
        note: "",
      },
      {
        title: "Inglés",
        place: "Lexis English — Brisbane, Australia",
        note: "",
      },
    ],

    experience: {
      featured: [
        {
          role: "Técnico Informático",
          company: "Gea Enterprise",
          summary:
            "Soporte técnico y mantenimiento de sistemas y equipos informáticos, resolución de incidencias y atención directa a usuarios.",
        },
        {
          role: "Técnico Informático",
          company: "App Informática",
          summary:
            "Diagnóstico y reparación de equipos, soporte técnico a clientes y gestión de incidencias del día a día en un entorno de atención al público.",
        },
      ],
      other: [
        "Otras experiencias laborales previas fuera del sector IT, que aportaron trato al cliente, responsabilidad y capacidad de trabajo bajo presión.",
      ],
    },

    contact: {
      email: "kiket25@gmail.com",
      linkedin: "https://www.linkedin.com/in/jfranciscoperezgimenez/",
      github: "https://github.com/kiket25",
      githubHandle: "kiket25",
      ctaPrimary: "Contactar",
      note: "¿Buscas soporte técnico, administración de sistemas o alguien con ganas de crecer en ciberseguridad? Escríbeme y hablamos.",
    },
  };
})();
