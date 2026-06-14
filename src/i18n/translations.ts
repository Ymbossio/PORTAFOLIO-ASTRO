export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Navigation
    'nav.name': 'Yovanis',
    'nav.inicio': 'Inicio',
    'nav.experiencia': 'Experiencia',
    'nav.proyectos': 'Proyectos',
    'nav.sobremi': 'Sobre Mí',
    'nav.contacto': 'Contáctame',

    // Hero
    'hero.badge': 'Disponible para trabajar',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Yovanis',
    'hero.subtitle': 'Transformo ideas en soluciones digitales con código limpio y moderno.',
    'hero.button.sobremi': 'Sobre mí',
    'hero.button.proyectos': 'Proyectos',
    'hero.stat.exp': '+3',
    'hero.stat.exp_lbl': 'Años de Experiencia',
    'hero.stat.age': '24',
    'hero.stat.age_lbl': 'Edad',
    'hero.stat.tech': '12+',
    'hero.stat.tech_lbl': 'Tecnologías',
    'hero.console.title': 'yovanis-bossio.json',
    'hero.console.comment': '// Desarrollador Full Stack apasionado',

    // CLI Interactive Console
    'cli.welcome': "Escribe 'help' para ver los comandos disponibles.",
    'cli.not_found': "Comando no reconocido. Escribe 'help' para ver la lista.",
    'cli.help': "Comandos: about, skills, projects, contact, clear",
    'cli.about_text': "Yovanis Bossio - Desarrollador Full Stack. Creador de experiencias web eficientes. Barranquilla, CO.",
    'cli.skills_text': "Skills: React, Node.js, Express, PHP/Laravel, C#/.NET Core, PostgreSQL, MySQL, AWS, Git.",
    'cli.projects_text': "Proyectos: 1. Google Translate Clone | 2. Local GPT 2.0 | 3. Tres en Raya | 4. Auth JWT.",
    'cli.contact_text': "Email: Yovanis2001@gmail.com | GitHub: github.com/Ymbossio",

    // Experience
    'experience.title': 'Experiencia Laboral',
    'experience.jobs': [
      {
        date: 'Julio 2024 - Actualidad',
        title: 'Programador Web',
        description: 'Contribuí al equipo de desarrollo y soporte técnico haciendo integraciones de nuevos módulos utilizando tecnologías como JavaScript, React.js, Node.js, C#, ASP.NET Core, Gitlab, Workbench, MySQL, Python y PHP.'
      },
      {
        date: 'Enero 2024 - Junio 2024',
        title: 'Desarrollador Backend',
        description: 'Colaboré con un equipo dedicado en la creación de soluciones backend robustas e innovadoras. Soporte técnico para clientes e integraciones con AWS (S3, EC2, SQS), bases de datos PostgreSQL, y la creación de pipelines de CI/CD.'
      },
      {
        date: 'Septiembre 2023 - Enero 2024',
        title: 'Desarrollador Web',
        description: 'Trabajé en estrecha colaboración con un equipo de desarrollo, aplicando y mejorando habilidades técnicas en tecnologías como PHP, Laravel, MySQL, JavaScript, CSS, HTML, React.js, Node.js, Express.js y GitHub.'
      }
    ],

    // Skills Section
    'skills.title': 'Tecnologías',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.code_btn': 'Código',
    'projects.live_btn': 'Sitio Web',
    'projects.list': [
      {
        title: 'Clon Traductor de Google',
        description: 'Réplica interactiva del Traductor de Google desarrollada con React, utilizando APIs de traducción y diseño fluido responsivo.',
        image: '/ImagenProyecto.PNG',
        github: 'https://github.com/Ymbossio/TRASLATE-REACT',
        link: 'https://proyect-google-translate.netlify.app/'
      },
      {
        title: 'Clon GPT 2.0 Local',
        description: 'Interfaz de chat web local para interactuar con modelos de inteligencia artificial en local, optimizada para una carga y respuesta inmediatas.',
        image: '/ChatBot.PNG',
        github: 'https://github.com/Ymbossio/GPT-2.0-Local',
        link: 'https://gpt-local-yovanis-bot.netlify.app/'
      },
      {
        title: 'Juego Tres en Raya',
        description: 'Juego clásico interactivo del Gato (Tic-Tac-Toe) desarrollado en React.js, con marcador de puntos y persistencia de victorias.',
        image: '/img-tic-tac-toe.PNG',
        github: 'https://github.com/Ymbossio/tres-en-raya',
        link: 'https://tres-en-raya-yovanis-bossio.netlify.app/'
      },
      {
        title: 'Autenticación JWT',
        description: 'Módulo de autenticación seguro que implementa JSON Web Tokens (JWT), Node.js, Express y base de datos con contraseñas encriptadas.',
        image: '/login.PNG',
        github: 'https://github.com/Ymbossio/AUTH---JWT---NODEJS---EXPRESS'
      }
    ],

    // About Me
    'about.title': 'Sobre Mí',
    'about.p1': 'Me llamo Yovanis Bossio. Soy un innovador apasionado por la creación de experiencias web excepcionales, buscando siempre desafíos y oportunidades para aplicar mis habilidades en el mundo digital.',
    'about.p2': 'Mi destreza se extiende al diseño y desarrollo de aplicaciones web utilizando tecnologías modernas como React, Node.js, PHP (Laravel), C# (.NET Core), Astro y bases de datos robustas como PostgreSQL y MySQL, aplicando buenas prácticas y patrones de diseño.',
    'about.p3': 'Me considero una persona dedicada, versátil y con alta capacidad para trabajar en equipos ágiles.',

    // Contact
    'contact.title': 'Hablemos',
    'contact.subtitle': 'Envíame un mensaje y me pondré en contacto contigo lo antes posible.',
    'contact.name': 'Nombre',
    'contact.name_placeholder': 'Tu nombre...',
    'contact.email': 'Correo Electrónico',
    'contact.email_placeholder': 'tu@correo.com',
    'contact.message': 'Mensaje',
    'contact.message_placeholder': 'Hola Yovanis, me gustaría hablar sobre...',
    'contact.send_btn': 'Enviar Mensaje',
    'contact.sending_btn': 'Enviando...',
    'contact.success_title': '¡Mensaje Enviado!',
    'contact.success_msg': 'Gracias por ponerte en contacto. Te responderé lo antes posible.',
    'contact.error_msg': 'Lo siento, ocurrió un error al enviar el formulario. Por favor, intenta de nuevo.',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.contact': 'Contactar'
  },
  en: {
    // Navigation
    'nav.name': 'Yovanis',
    'nav.inicio': 'Home',
    'nav.experiencia': 'Experience',
    'nav.proyectos': 'Projects',
    'nav.sobremi': 'About Me',
    'nav.contacto': 'Contact Me',

    // Hero
    'hero.badge': 'Available for Work',
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Yovanis',
    'hero.subtitle': 'I transform ideas into digital solutions with clean and modern code.',
    'hero.button.sobremi': 'About Me',
    'hero.button.proyectos': 'Projects',
    'hero.stat.exp': '+2',
    'hero.stat.exp_lbl': 'Years of Experience',
    'hero.stat.age': '24',
    'hero.stat.age_lbl': 'Age',
    'hero.stat.tech': '12+',
    'hero.stat.tech_lbl': 'Technologies',
    'hero.console.title': 'yovanis-bossio.json',
    'hero.console.comment': '// Passionate Full Stack Developer',

    // CLI Interactive Console
    'cli.welcome': "Type 'help' to see available commands.",
    'cli.not_found': "Command not recognized. Type 'help' for the list.",
    'cli.help': "Commands: about, skills, projects, contact, clear",
    'cli.about_text': "Yovanis Bossio - Full Stack Developer. Creator of efficient web experiences. Barranquilla, CO.",
    'cli.skills_text': "Skills: React, Node.js, Express, PHP/Laravel, C#/.NET Core, PostgreSQL, MySQL, AWS, Git.",
    'cli.projects_text': "Projects: 1. Google Translate Clone | 2. Local GPT 2.0 | 3. Tic-Tac-Toe | 4. Auth JWT.",
    'cli.contact_text': "Email: Yovanis2001@gmail.com | GitHub: github.com/Ymbossio",

    // Experience
    'experience.title': 'Work Experience',
    'experience.jobs': [
      {
        date: 'July 2024 - Present',
        title: 'Web Programmer',
        description: 'Contributed to the development and tech support team by building and integrating new features and modules using JavaScript, React.js, Node.js, C#, ASP.NET Core, Gitlab, Workbench, MySQL, Python, and PHP.'
      },
      {
        date: 'January 2024 - June 2024',
        title: 'Backend Developer',
        description: 'Collaborated with a dedicated team creating robust backend solutions. Provided technical support and integrated cloud infrastructure with AWS (S3, EC2, SQS), PostgreSQL databases, and CI/CD pipelines.'
      },
      {
        date: 'September 2023 - January 2024',
        title: 'Web Developer',
        description: 'Worked in close collaboration with a development team, applying and sharpening technical skills in PHP, Laravel, MySQL, JavaScript, CSS, HTML, React.js, Node.js, Express.js, and GitHub.'
      }
    ],

    // Skills Section
    'skills.title': 'Skills & Tech',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.code_btn': 'Code',
    'projects.live_btn': 'Live Site',
    'projects.list': [
      {
        title: 'Google Translate Clone',
        description: 'An interactive replica of Google Translate built with React, utilizing translation APIs and a smooth responsive layout.',
        image: '/ImagenProyecto.PNG',
        github: 'https://github.com/Ymbossio/TRASLATE-REACT',
        link: 'https://proyect-google-translate.netlify.app/'
      },
      {
        title: 'Local GPT 2.0 Clone',
        description: 'Local web chat interface for interacting with offline AI language models, optimized for instant response and private data.',
        image: '/ChatBot.PNG',
        github: 'https://github.com/Ymbossio/GPT-2.0-Local',
        link: 'https://gpt-local-yovanis-bot.netlify.app/'
      },
      {
        title: 'Tic-Tac-Toe Game',
        description: 'Classic interactive Tic-Tac-Toe game built with React.js, including a win scoreboard and state persistence.',
        image: '/img-tic-tac-toe.PNG',
        github: 'https://github.com/Ymbossio/tres-en-raya',
        link: 'https://tres-en-raya-yovanis-bossio.netlify.app/'
      },
      {
        title: 'JWT Authentication',
        description: 'A secure user authentication flow implementing JSON Web Tokens (JWT), Node.js, Express, and databases with encrypted password hashing.',
        image: '/login.PNG',
        github: 'https://github.com/Ymbossio/AUTH---JWT---NODEJS---EXPRESS'
      }
    ],

    // About Me
    'about.title': 'About Me',
    'about.p1': 'My name is Yovanis Bossio. I am an innovator passionate about creating exceptional web experiences, always looking for challenges and opportunities to apply my skills in the digital world.',
    'about.p2': 'My expertise extends to the design and development of web applications using modern technologies such as React, Node.js, PHP (Laravel), C# (.NET Core), Astro, and robust databases like PostgreSQL and MySQL, utilizing best practices and design patterns.',
    'about.p3': 'I consider myself a dedicated, versatile person with high capacity to work inside agile environments.',

    // Contact
    'contact.title': "Let's Talk",
    'contact.subtitle': 'Send me a message and I will get back to you as soon as possible.',
    'contact.name': 'Name',
    'contact.name_placeholder': 'Your name...',
    'contact.email': 'Email Address',
    'contact.email_placeholder': 'you@email.com',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Hi Yovanis, I would like to talk about...',
    'contact.send_btn': 'Send Message',
    'contact.sending_btn': 'Sending...',
    'contact.success_title': 'Message Sent!',
    'contact.success_msg': 'Thank you for reaching out. I will get back to you as soon as possible.',
    'contact.error_msg': 'Sorry, an error occurred while sending the form. Please try again.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact'
  }
} as const;

export const skillCategories = {
  es: [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', color: '#e34f26' },
        { name: 'CSS3', color: '#1572b6' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'React.js', color: '#61dafb' },
        { name: 'Astro', color: '#ff5a03' },
        { name: 'Angular', color: '#dd0031' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', color: '#339933' },
        { name: 'Express.js', color: '#00FF00' },
        { name: 'NestJS', color: '#FF0000' },
        { name: 'C# (.NET)', color: '#512bd4' }
      ]
    },
    {
      name: 'Bases de Datos',
      skills: [
        { name: 'MySQL', color: '#4479a1' },
        { name: 'PostgreSQL', color: '#4169e1' },
        { name: 'SQL Server', color: '#f7df1e' }
      ]
    },
    {
      name: 'Herramientas y Nube',
      skills: [
        { name: 'Git & GitHub', color: '#f05032' },
        { name: 'AZURE DevOps', color: '#324450' },
        { name: 'AWS (S3, EC2, SQS, RDS)', color: '#ff9900' },
        { name: 'CI/CD', color: '#2563eb' }
      ]
    }
  ],
  en: [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', color: '#e34f26' },
        { name: 'CSS3', color: '#1572b6' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'React.js', color: '#61dafb' },
        { name: 'Astro', color: '#ff5a03' },
        { name: 'Angular', color: '#dd0031' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', color: '#339933' },
        { name: 'Express.js', color: '#828282' },
        { name: 'NestJS', color: '#FF0000' },
        { name: 'PHP (Laravel)', color: '#777bb4' },
        { name: 'C# (.NET Core)', color: '#512bd4' },
        { name: 'Python', color: '#3776ab' }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', color: '#4479a1' },
        { name: 'PostgreSQL', color: '#4169e1' },
        { name: 'SQL Server', color: '#f7df1e' }
      ]
    },
    {
      name: 'Tools & Cloud',
      skills: [
        { name: 'Git & GitHub', color: '#f05032' },
        { name: 'AZURE DevOps', color: '#324450' },
        { name: 'AWS (S3, EC2, SQS, RDS)', color: '#ff9900' },
        { name: 'CI/CD', color: '#2563eb' }
      ]
    }
  ]
} as const;

export function useTranslations(lang: 'es' | 'en') {
  return (key: keyof typeof ui[typeof defaultLang]) => {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
