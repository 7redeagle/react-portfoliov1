import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills'

const App = () => {
  return ( 
  <main className="main">
    <section className="hero" id="hero">
      <Hero />
    </section>
    <hr />
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <Projects />
    </section>
    <hr />
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2> 
      <Skills />
    </section>
    <hr />
    <section className="contact" id="contact">
    </section>
    <hr />
</main>
  
  
  )
}

export default App;