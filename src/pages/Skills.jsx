import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import js from '../assets/skills/js.svg';

const Skills = () => {
  const skillsIcons = [
    html5, css3, js
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



 
// div.skills__grid
//   div.skills__icons.pure-g
//       .pure-u-1-3
//         include /assets/skills/html5.pug
//       .pure-u-1-3
//         include /assets/skills/css3.pug
//       .pure-u-1-3
//         include /assets/skills/js.pug
//       .pure-u-1-3
//         include /assets/skills/pug.pug
//       .pure-u-1-3
//         include /assets/skills/sass.pug
//       .pure-u-1-3
//         include /assets/skills/bootstrap.pug
//       .pure-u-1-3
//         include /assets/skills/git.pug
//       .pure-u-1-3
//         include /assets/skills/github.pug
//       .pure-u-1-3
//         include /assets/skills/inkscape.pug
//       .pure-u-1-3
//         include /assets/skills/linux.pug
//       .pure-u-1-3
//         include /assets/skills/netlify.pug
//       .pure-u-1-3
//         include /assets/skills/jekyll.pug
// //      .pure-u-1-3
//         include /assets/skills/wordpress.pug
//       .pure-u-1-3
//         include /assets/skills/aws.pug
//       .pure-u-1-3
//         include /assets/skills/drupal.pug
