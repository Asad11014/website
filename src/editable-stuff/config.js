// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Asad",
  middleName: "",
  lastName: "Rizvi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Asad11014",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/asad-rizvi-911276257/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    "My name is Asad Rizvi. I’m a graduate from the University of Birmingham, class of 2024. I'm most passionate about building useful tools, and my goal is to pursue this passion within the field of software engineering. I love learning about new software and getting creative with their capabilities. In my free time I watch the football or browse github for cool looking repos.",
  resume: require("../editable-stuff/Resume(2-4-2025).pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Asad11014", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["DataScraping", "projectManagementSystem", "ANPR_Project", "fullStack-toDoList-app"],
};

// Testimonials SECTION
const testimonials = {
  show: false,
  heading: "Testimonials",
  data: [
    {
      quote: "Asad is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are remarkable.",
      name: "Jane Smith",
      title: "Senior Developer at TechCorp"
    },
    {
      quote: "Working with Asad was a great experience. He brings both technical expertise and creative solutions to every project.",
      name: "John Doe",
      title: "Project Manager at InnovateTech"
    },
    {
      quote: "Asad's dedication to learning and growing as a developer is impressive. He's always eager to take on new challenges.",
      name: "Sarah Johnson",
      title: "Tech Lead at DevStudios"
    }
  ]
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "SQL", value: 60 },
    { name: "Data Structures", value: 80 },
    { name: "Java", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Spring Boot", value: 60 },
  ],
  softSkills: [
    { name: "Resilience", value: 80 },
    { name: "Collaboration/teamwork", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 90 },
    { name: "Organisational", value: 70 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "asadrz11014@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/xPercept.png'),
      date: 'December 2024 - Present',
    },
    {
      role: 'Backend Engineer',
      companylogo: require('../assets/img/sakmo.png'),
      date: 'December 2024 - Present',
    },
    {
      role: 'SEO Specialist',// Here Add Company Name
      companylogo: require('../assets/img/masterclean.png'),
      date: 'August 2024 – November 2024',
    },
    {
      role: 'Web Development Intern',
      companylogo: require('../assets/img/al-raza.png'),
      date: 'June 2024 – August 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, testimonials, getInTouch, experiences };
