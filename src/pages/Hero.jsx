import { ReactComponent as HeroPortrait } from '../assets/portrait.svg';
import { ReactComponent as SocialGithub } from '../assets/social/github.svg';
import { GITHUB } from '../components/constants';



const Hero = () => {
  return (
    <div className="pure-g">
      <div className="hero__portrait pure-u-1 pure-u-md-1-2">
        <HeroPortrait />
      </div>
      <div className="hero__content pure-u-1 pure-u-md-1-2">
        <h2 className="hero__heading">👋 Hi, I'm Ina Chen!</h2>
        <h3>I am a Web Developer</h3>
        <p className="hero__text">I'm a front-end web developer, who is also interested in UI/UX web design. I love building websites and am always looking for new opportunities to improve my skills.</p>
        <div className="hero__links">
          <a href="#projects">
            <button className="btn btn--pink-border">Projects</button>
          </a>
        </div>
        <div className="hero__links hero__links--social">
          <a href={ GITHUB } target="_blank" rel="noreferrer">
            <SocialGithub />
          </a>            
        </div>
      </div>    
    </div>
  )
}

export default Hero;
