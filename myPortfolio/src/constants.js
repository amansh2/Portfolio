// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import kibanaLogo from './assets/tech_logo/kibanaLogo.png';
import kotlinLogo from './assets/tech_logo/kotlin.jfif';
// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import shit from './assets/company_logo/shit.jfif';

// Education Section Logo's
import ssjbs from './assets/education_logo/ssjbs.jfif';
import nitkkr from './assets/education_logo/nitkkr.png';

// Project Section Logo's
import chat from './assets/work_logo/chat.png';
import statusSaver from './assets/work_logo/statusSaver.webp';
import projectManager from './assets/work_logo/projectManager.png';
import uttrakhandYatra from './assets/work_logo/uttrakhandYatra.jpeg';
import foodStore from './assets/work_logo/foodStore.png';
import blog from './assets/work_logo/blog.jpg';
import imagenx from './assets/work_logo/imagenx.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      {name: 'Kotlin', logo: kotlinLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      {name: 'Kibana', logo: kibanaLogo},
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: shit,
      role: "Fullstack Developer",
      company: "JungleWorks",
      date: "JUNE 2024 - Present",
      desc: "At Jungleworks, I led key feature upgrades including enhanced search, banners, and dynamic UI themes, boosting engagement by 30%. I built and optimized new features like laundry checkout, saved addresses, and REST APIs, improving performance and order processing for users. I played a major role in the Panther-Yelo merger by creatig the checkout flow, contributed to subscription billing, enabled full Macedonian language support, and collaborated closely with clients to deliver tailored solutions.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Redis",
        "MongoDB",
        "MySQL",
        'Git',
        'Gitlab'
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: nitkkr,
      school: "NIT Kurukshetra",
      date: "December 2020 - June 2024",
      grade: "8.76",
      desc: "I have completed my Bachelor's degree from NIT Kurukshetra. During my time at NIT, I gained a strong foundation in computer science principles and honed my skills in software development, algorithms, and data structures. I actively participated in various coding competitions and hackathons, which helped me develop problem-solving abilities and teamwork skills.",
      degree: "Bachelor of Technology - BTech",
    },
    {
      id: 2,
      img: ssjbs,
      school: "Shah Satnam Ji Boys' School, Sirsa (HRY)",
      date: "Apr 2018 - March 2019",
      grade: "97%",
      desc: "I completed my class 12th education from Shah Satnam Ji Boys' School, Sirsa under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with English.",
      degree: "CBSE(XII)",
    },
    {
      id: 3,
      img: ssjbs,
      school: "Shah Satnam Ji Boys' School, Sirsa (HRY)",
      date: "Apr 2018 - March 2019",
      grade: "10 GPA",
      desc: "I completed my class 10th education from Shah Satnam Ji Boys' School, Sirsa under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ImagenX",
      description:
        "ImagenX is a web app where users can generate AI images from text prompts using Gemini and share them publicly. Anyone can view, download, or explore the gallery of generated images. Built with React, Node.js, MongoDB and Gemini API for a seamless creative experience.",
      image: imagenx,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Node.js", "MongoDB"],
      github: "https://github.com/amansh2/ai-image-generator",
      webapp: "https://imagenx.onrender.com/",
    },
    {
      id: 1,
      title: "Project manager",
      description:
      "Built a project management app where users can create boards, manage tasks, assign members, and receive real-time notifications via FCM. Supports card-level task assignment, drag-and-drop reordering, updates, and deletions.",
      image: projectManager,
      tags: ["Android", "Android Studio", "Firebase", "XML", "Kotlin", "Android Libraries"],
      github: "https://github.com/amansh2/Project_Manager",
      webapp: "",
    },
    {
      id: 2,
      title: "Food-Store",
      description:
        "Developed a full-stack food ordering app with responsive UI, search, tags, cart, and order tracking. Implemented JWT-based authentication, PayPal payment integration, and secure CRUD operations. Deployed on Render for live access.",
      image: foodStore,
      tags: ["Angular", "Node.js", "MongoDB", "REST APIs", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/amansh2/Food-Store",
      webapp: "https://food-store-l2fx.onrender.com/",
    },
    {
      id: 3,
      title: "Uttrakhand Yatra",
      description:
        "Tourism guide app built with Kotlin, Android Studio, Firebase, and Google Maps. Helps users explore destinations, find hotels/restaurants, view routes, and access local guides with ratings and contact info.",
      image: uttrakhandYatra,
      tags: ["Android", "Android Studio",'XML', 'Room DB',"Firebase", "Google Maps"],
      github: "https://github.com/amansh2/Chardham-Yatra",
      webapp: "",
    },
    {
      id: 4,
      title: "MyBlogs",
      description:
        "Full-Stack Blog Platform: Built with Node.js, Express, EJS, and MongoDB for dynamic blog creation and management. Supports full CRUD operations with interactive rendering using EJS templates.",
      image: blog,
      tags: ["Node.js", "Express", "EJS", "MongoDB", "HTML", "CSS"],
      github: "https://github.com/amansh2/blogs",
      webapp: "https://blogs-2-zho6.onrender.com/",
    },
    {
      id: 5,
      title: "WhatsApp Status Saver",
      description:
        "Allows users to view and download WhatsApp statuses (images, videos, GIFs) while following modern Android storage guidelines.",
      image: statusSaver,
      tags: ["Android", "Scoped Storage", "Kotlin", "XML"],
      github: "https://github.com/amansh2/StatusSaverForWhatsApp",
      webapp: "",
    },
    {
      id: 6,
      title: "My chat App",
      description:
        "A chat application where users can chat with each other using Socket.io. Supports real-time messaging and private messaging. Also included mobile authentication",
      image: chat,
      tags: ["Angular", "Node.js", "MongoDB", "Express", "Socket.io", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/amansh2/chatApp",
      webapp: "https://codingmasterweb.in/",
    }
  ];  