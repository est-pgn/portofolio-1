import './App.css'
import SocialIcons from './components/SocialIcons'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaLanguage } from "react-icons/fa"
import { FaCalculator, FaCloudSun, FaWpforms, FaListUl } from "react-icons/fa"


function App() {
  return( 
   <>
        <div className="hero-wrapper">

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <h1>Junior Front-End Developer</h1>
          <span>Estera Ermuratiev</span>
        </div>

        <nav className="header-right">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Estera</h1>
          <p>
            I'm a Junior Front-End Developer building modern and responsive websites.
          </p>

          <a href="#projects" className="btn">
            See My Work
          </a>
        </div>
      </section>

    </div>


      <section id="skills" className="skills">
        <h2>My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <FaLanguage className="skill-icon" />
            <h3>English</h3>
            <p>I have an intermediate level of English, which allows me to communicate and collaborate effectively in a team.</p>
          </div>

          <div className="skill-card">
            <FaGithub className="skill-icon"/>
            <h3>GitHub</h3>
            <p>I use GitHub to manage code versions, collaborate, and organize projects efficiently.</p>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon" />
            <h3>React JS</h3>
            <p>I use React to build dynamic and interactive web interfaces, using reusable components and hooks.</p>
          </div>

          <div className="skill-card">
            <FaBootstrap className="skill-icon" />
            <h3>Bootstrap 5</h3>
            <p>I use Bootstrap 5 to speed up the development of responsive interfaces compatible with different devices.</p>
          </div>

          <div className="skill-card">
            <FaJs className="skill-icon" />
            <h3>JavaScript</h3>
            <p>I have knowledge of JavaScript, which allows me to develop dynamic and interactive functionality for web pages.</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon" />
            <h3>CSS 3</h3>
            <p>I create modern and responsive designs using CSS, including Flexbox and Grid, for flexible and attractive layouts.</p>
          </div>

          <div className="skill-card">
            <FaHtml5 className="skill-icon" />
            <h3>HTML 5</h3>
            <p>I have a good understanding of semantic HTML and use it to structure accessible and well-organized web pages.</p>
          </div>

        </div>
      </section>

   

<section id='education' className='education'>

  <h2>Education & Training</h2>

  <div className="education-item">
    <h3>Program: "Digital Skills/Robatics/AI and Automation"</h3>
    <span>2025</span>
  </div>

  <div className="education-item">
    <h3>Front-End Web Developer Course, Link Academy</h3>
    <span>2023 - 2024</span>
  </div>

  <div className="education-item">
    <h3>Vocational School -Tehnical Support Operator</h3>
    <span>2017 - 2019</span>
  </div>
</section>



      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <div className="project-list">

          {/* 1️⃣ Calculator */}
          <div className="project-card">
            <FaCalculator className="project-icon" />
            <h3>Calculator</h3>
            <p>Simple calculator built with JavaScript.</p>
            <div className="project-links">
              <a href="https://est-pgn.github.io/Calculator/" target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href="https://github.com/est-pgn/Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* 2️⃣ Weather App */}
          <div className="project-card">
            <FaCloudSun className="project-icon" />
            <h3>Weather App</h3>
            <p>Weather application using API and dynamic background.</p>
            <div className="project-links">
              <a href="https://est-pgn.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href="https://github.com/est-pgn/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* 3️⃣ Formular */}
          <div className="project-card">
            <FaWpforms className="project-icon" />
            <h3>Formular</h3>
            <p>Simple form with input validation and clean UI.</p>
            <div className="project-links">
              <a href="https://est-pgn.github.io/Formular/" target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href="https://github.com/est-pgn/Formular" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* 4️⃣ To-Do List */}
          <div className="project-card">
            <FaListUl className="project-icon" />
            <h3>To-Do App</h3>
            <p>Task manager with add, delete and complete features.</p>
            <div className="project-links">
              <a href="https://est-pgn.github.io/To-Do-List/" target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href="https://github.com/est-pgn/To-Do-List" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

        </div>
      </section>

 
      

<section id="contact" className="contact">
  <h2>Contact Me</h2>
  <p>If you want to collaborate or have a project in mind, feel free to contact me.</p>

  <SocialIcons/>
 
</section>

<footer className="footer">
  <p>© 2026 Estera Ermuratiev — Junior Front-End Developer</p>
</footer>

   </> 
 );

 }

export default App;