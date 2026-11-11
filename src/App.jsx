import './App.css'
import sakshiPhoto from './assets/Sak.jpeg'

function App() {
  const skills = [
    'Java', 'Python', 'Spring Boot', 'Hibernate',
    'REST APIs', 'HTML', 'CSS', 'JavaScript',
    'React.js', 'MySQL', 'SQL', 'Git', 'GitHub'
  ]

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">Sakshi<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>Hi, I'm <span>Sakshi Gavali</span></h1>

          <h2>Java Full Stack Developer</h2>

          <p className="intro">


            I’m passionate about creating modern, user-friendly web applications. I love exploring new technologies, building projects, and turning creative ideas into reality.

            Let's build something amazing together!
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="/Sakshi-Gavali-Resume.pdf"
              download="Sakshi-Gavali-Resume.pdf"
              className="btn outline-btn">
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/sakshigavali17-coder" target="_blank" rel="noreferrer">
              <strong>GitHub</strong>
            </a>

            <a href="https://www.linkedin.com/in/sakshi-gavali-997a8b318/" target="_blank" rel="noreferrer">
              <strong>LinkedIn</strong>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-glow">
            <img src={sakshiPhoto} alt="Sakshi Gavali" />
          </div>
          <div className="image-caption">FULL STACK Developer</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-card">
          <p>
            I am a Computer Science graduate with a strong interest
            in software development. a passionate Computer Science graduate.
            I'm an aspiring Java Full Stack Developer with a strong interest in software development.
            I have knowledge of Java, Spring Boot, Hibernate, SQL, HTML, CSS, JavaScript, and React.js.
            I enjoy building projects, learning new technologies, and solving problems.
            My goal is to grow as a developer and contribute to innovative real-world projects.
          </p>
          <p>
            I am a fresher who is eager to learn, improve my
            technical skills and contribute to real-world projects.
            I enjoy solving problems and creating user-friendly
            applications.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">WHAT I KNOW</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <span className="skill-dot"></span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">MY QUALIFICATION</p>
        <h2 className="section-title">My <span>Education</span></h2>

        <div className="education-grid">
          <div className="info-card">

            {/* <span className="card-year">2025</span> */}
            <h3>Bachelor of Computer Science</h3>
            <p>Shardabai Pawar Art Commerce and Science College, Shardhanagar ,Baramati </p>
            <p>Completed in 2025</p>
          </div>

          <div className="info-card">

            {/* <span className="card-year">2025</span> */}
            <h3>Master of Computer Science</h3>
            <p>Shardabai Pawar Art Commerce and Science College, Shardhanagar ,Baramati</p>
            <p>Pursuing</p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-icon">✦</div>

            <h3>AI Study Buddy</h3>

            <p>
              An AI-based learning project designed to make
              studying easier and more interactive.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <span className="project-status">
              In Progress
            </span>
          </div>

          <div className="project-card">
            <div className="project-icon">📊</div>

            <h3>NexusBoard</h3>

            <p>
              A modern React Admin Dashboard designed to
              manage users, track analytics, visualize data,
              and manage platform settings with a clean UI.
            </p>

            <div className="project-tech">
              <span>React 18</span>
              <span>Vite 5</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Recharts</span>
            </div>

            <span className="project-status">
              Completed
            </span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <p className="section-label">LET'S CONNECT</p>
        <h2 className="section-title">Contact <span>Me</span></h2>

        <div className="contact-card">
          <p><strong>Name:</strong> Sakshi Santosh Gavali</p>
          <p>
            <p><strong>Location:</strong> Pune,Maharashtra, India</p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+91XXXXXXXXXX">
                +91 9011140971
              </a>
            </p>
            <strong>Email:</strong>{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshigavali17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sakshigavali17@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/sakshigavali17-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sakshi-gavali-997a8b318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LinkedIn
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Sakshi Gavali. All Rights Reserved.</p>
        <a href="#home">Back to Top ↑</a>
      </footer>

    </div>
  )
}

export default App