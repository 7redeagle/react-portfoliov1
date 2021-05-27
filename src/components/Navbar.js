// import { ReactComponent as Logo } from '../assets/nav/logo.svg'
import logo from '../assets/logo.png';
import { ReactComponent as NavProjects } from '../assets/nav/projects.svg';
import { ReactComponent as NavSkills } from '../assets/nav/skills.svg';
import { ReactComponent as NavContact } from '../assets/nav/contact.svg';
import { ReactComponent as NavGithub } from '../assets/nav/github.svg';

const Navbar = () => {
  const linkGithub = "https://github.com/7redeagle";
  
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__item navbar__logo">
          <a className="navbar__link" href="#hero">
            <img className="navbar__icon--logo" src="/logo.png" alt="Personal logo: white initials on red background. Click to return home" style={{width:"100%", height:"100%"}} />
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
          <a className="navbar__link" href={ linkGithub } rel="noreferrer" target="_blank">
            <NavGithub />
            <span className="navbar__text">Contact</span>
          </a>   
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
