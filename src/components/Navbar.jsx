import { ReactComponent as NavProjects } from '../assets/nav/projects.svg';
import { ReactComponent as NavSkills } from '../assets/nav/skills.svg';
import { ReactComponent as NavContact } from '../assets/nav/contact.svg';
import { ReactComponent as NavGithub } from '../assets/nav/github.svg';
import { GITHUB } from './constants';

const Navbar = () => {
  // set the observer options
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: .1 // default: .1 change this if the section takes up more than 100vh
  }

  // create observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // add an observed class to the section
        entry.target.classList.add('observed');
        // check the section's id
        document.querySelectorAll('.navbar__link').forEach(link => {
          if (link.hash === `#${entry.target.id}`) {
            link.classList.add('navbar__link--active');
          } else {
            link.classList.remove('navbar__link--active');
          }
        });
      };
    });
  }, options);
  // Observe all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });


  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__item navbar__logo">
          <a className="navbar__link" href="#hero">
            <img className="navbar__icon--logo" src="/logo.png" alt="Personal Logo: white initials on red background.Click to return home." style={{width:"100%", height:"100%"}} />
          </a>   
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#projects">
            <NavProjects />
            <span className="navbar__text">Projects</span>
          </a>   
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#skills">
            <NavSkills />
            <span className="navbar__text">Skills</span>
          </a>   
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#contact">
            <NavContact />
            <span className="navbar__text">Contact</span>
          </a>   
        </li>
        <li className="navbar__item navbar__item--social">
          <a className="navbar__link" href={ GITHUB } rel="noreferrer" target="_blank">
            <NavGithub />
            <span className="navbar__text">Contact</span>
          </a>   
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
