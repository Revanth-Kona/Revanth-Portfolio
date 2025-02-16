import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import bootstrap  from "../assets/skills/Bootstrap.png";
import javascript from "../assets/skills/javascript.png";
import materialui from "../assets/skills/materialui.png";
import google from "../assets/history/google.png";
import microsoft from "../assets/history/microsoft.png";
import netflix from "../assets/history/netflix.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg"
import Flutter from "../assets/skills/Flutter.png"

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "Bootstrap",
    imageSrc: bootstrap,
  },
  {
    title: "JavaScript",
    imageSrc: javascript,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Material UI",
    imageSrc: materialui,
  },
  {
    title: "Flutter",
    imageSrc: flutter,
  },
];

export const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: google,
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 10", "Designed the control panel"],
    imageSrc: microsoft,
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: netflix,
  },
];

export const projects = [
  {
    title: "Home Decor Website",
    subtitle: '" Bootstrap Project "',
    imageSrc: project1,
    description:"A home decor website offers inspiration, products, and ideas to transform living spaces into stylish, personalized, and functional environments.",
    skills: ["HTML", "CSS", "Bootstrap"],
    demo: "https://revanth-kona.github.io/Home-Decor-Website/",
    source: "https://github.com/Revanth-Kona/Home-Decor-Website",
  },
  {
    title: "Recipe Search Website",
    subtitle: '" JavaScript Project "',
    imageSrc: project2,
    description:
      "A Recipe Search Website allows users to explore, search, and discover a wide variety of recipes based on ingredients, cuisine, or dietary preferences.",
    skills: ["HTML", "CSS","Bootstrap", "JavaScript"],
    demo: "https://revanth-kona.github.io/JS-Recipe-Website/",
    source: "https://github.com/Revanth-Kona/JS-Recipe-Website",
  },
  {
    title: "Movie Search Website",
    subtitle: '" React Project "',
    imageSrc: project3,
    description:
      "A Movie Search Website allows users to explore and search for movies by title, genre, or year, providing details like ratings, cast, and synopsis.",
    skills: ["HTML", "CSS", "React","Material UI"],
    demo: "https://movie-search-lemon-kappa.vercel.app/",
    source: "https://github.com/Revanth-Kona/Movie-Search",
  },
];
