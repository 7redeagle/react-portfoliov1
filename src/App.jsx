import Hero from './pages/Hero';
import Projects from './pages/Projects';

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
    </section>
    <hr />
    <section className="contact" id="contact">
    </section>
    <hr />
</main>
  
  
  )
}

export default App;