import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import education1 from "../assets/Education/NEU.webp";
import education2 from "../assets/Education/gitam.webp";
import linux from "../assets/Certifications/Linuxfordevelopers.png";
import azureda from "../assets/Certifications/microsoftazurefordataengineering.png";


export const hero_content = `A passionate engineer who enjoys building software tools
and building solutions to the real world challenges`;

export const about_text = `A passionate individiual about technology and analytics, there by building solutions to solve the real world challenges. An engineer to the core who loves to build innovative tools
and systems related to machine learning and AI.`;

export const text = `Building open source tools and software for web and devices.\n
                     Developing innovative solutions to the most challenging real world problems.\n
                     Designing and developing crticial systems for lifesaving during any hazards.\n
                     Implementing solutions and systems to improve service and enhance solution delivery.\n
                     `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];


export const PROJECTS = [
   {
      title: "LiquidityForecasterSystem",
      description: "An application that predicts the opeming prices price of a stock.Built on LSTM  neural networks.",
      image: "/path/to/project4-image.jpg",
      technologies: ["PyTorch", "Streamlit","Plotly","Docker"],
      githubLink: "https://github.com/VikhyatChoppa18/LSTM_App"
  },
  {
      title: "PyT_Transformer",
      description: "Project 2 is an innovative solution for a common problem.",
      image: {project2},
      technologies: ["Python", "PyTorch", "FastAPI","Docker"],
      githubLink: "https://github.com/VikhyatChoppa18/PyT_Transformers_"
  },
  {
      title: "Text Summarizer",
      description: "A text summarizing transformers that summarizes the given text by user",
      image: {project3},
      technologies: ["PyTorch", "HuggingFace", "FastAPI","Docker"],
      githubLink: "https://github.com/VikhyatChoppa18/Text_Summarization_tranformers"
  },
  {
    title: "Brain tumor classffication System",
    description: "An custom built CNN model api to detect if the  MRI image has cancer or not.",
    image: "/path/to/project6-image.jpg",
    technologies: ["PyTorch", "FastAPI", "scikit-learn", "Docker"],
    githubLink: "https://github.com/VikhyatChoppa18/Brain_Tumor_Classifier_"
},
   {
      title: "VAE_api",
      description: "A api built on Vairiatiotnal Autoencoders to generate the similar images as the uploaded images.",
      image: "/path/to/project5-image.jpg",
      technologies: ["PyTorch", "FastAPI","Docker"],
      githubLink: "https://github.com/VikhyatChoppa18/VAE_api"
  },
{
  title: "Industrial Alert Automation System",
  description: "An IoT project that detects emergencies and alerts the users or warehouse owners to prevent accident and other accidents, like fire accidents.",
  image: "/path/to/project6-image.jpg",
  technologies: ["Arduino", "MQTT", "Node-RED", "InfluxDB","Selenium webdriver"],
  githubLink: "https://github.com/VikhyatChoppa18/Industrial_Safety_Alert_System"
},
];


export const CONTACT = {
  address: "Boston,MA",
  phoneNo: "+1929 624 0797 ",
  email: "venkataj280@gmail.com",
};

export const EDUCATION = [
  {
      institution: "Northeastern University",
      degree: "Masters in Analytics",
      year: "2022 - 2024",
      logo: education1,
      major: "Applied Machine Intelligence",
      minor: "Analytics", 
      coursework: [
          "Analytics",
          "Predictive Analytics",
          "Artificial Intelligence",
          "Data Mining",
          "Big Data",
          "Visualizations",
          "Statistics",
          "Applied AI",
      ]
  },
  {
    institution: "Gitam University",
    degree: "Batchelor of Engineering",
    year: "2017 - 2021",
    logo: education2,
    major: "Computer Science Engineering",
    minor: "Artificial Intelligence", 
    coursework: [
       "Artificial Intelligence",
        "Object oriented programming",
        "Data Structures and Algorithms",
        "Machine Learning"
    ]
},
];


export const CERTIFICATIONS = [
  {
      title: "AWS Machine Learning Engineer",
      issuer: "AWS",
      image: linux,
      link: "https://coursera.org/share/a5b3f1657d7f272b47e5b7b8dcd941e3"
  },
  {
    title: "Hugging Face Deep Reinforcement Learning",
    issuer: "HuggingFace",
    image: azureda,
    link: "https://coursera.org/share/a5b3f1657d7f272b47e5b7b8dcd941e3"
},
{
  title: "Deep Learning",
  issuer: "NVIDIA",
  image: azureda,
  link: "https://coursera.org/share/baebe1f9b9b9bb693bdb2b574468beb0"
},
];

