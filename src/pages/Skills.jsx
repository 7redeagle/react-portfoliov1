import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import javascript from '../assets/skills/javascript.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import sass from '../assets/skills/sass.svg';
import git from '../assets/skills/git.svg';
import nodejs from '../assets/skills/nodejs.svg'
import react from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import figma from '../assets/skills/figma.svg';
import aws from '../assets/skills/aws.svg';
import vue from '../assets/skills/vue.svg'

const Skills = () => {
  const skillsIcons = [
    html5, css3, javascript, bootstrap, sass, git, nodejs, react, redux, figma, aws, vue
  ]
  return (
    <div className="skills__grid">
      <div className="skills__icons pure-g">
        
        {skillsIcons.map(icon => 
          <div className="pure-u-1-3">
            <img src={icon} alt={`${icon}`} />
          </div>
          )}
      </div>
    </div>
  )
}

export default Skills;
