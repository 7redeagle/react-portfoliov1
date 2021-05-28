const Projects = () => {
  const projects = [  
    {
      id: 1,
      title: 'Web Dev Resources',
      description: 'First website built using purely HTML, CSS, and Javascript. I wanted a website to keep track of all the web resources I was using.',
      imgSrc: 'web-resources.png',
      alt: 'Web Dev Resources website screenshot',
      demo: "https://7redeagle.github.io/web-dev-resources/",
      source: "https://github.com/7redeagle/web-dev-resources",
      tags: ['html', 'css', 'javascript']
    },
    { 
      id: 2,
      title: 'Rock-Paper-Scissors',
      description: 'A simple rock-paper-scissors game, which was initially confined to the console. I learned DOM manipulation, and gave it a prettier web interface version.',
      imgSrc: 'rock-paper-scissors.png',
      alt: 'Rock-Paper-Scissors website screenshot',
      demo: "https://7redeagle.github.io/rock-paper-scissors-game/",
      source: "https://github.com/7redeagle/rock-paper-scissors-game",
      tags: ['html', 'css', 'javascript']
    },
    {
      id: 3,
      title: 'Monster in the Dark',
      description: 'A find the monster game made with vanilla javascript. I used more advanced DOM manipulation, setting intervals and timeouts, and adding background audio.',
      imgSrc: 'monster-in-dark.png',
      alt: 'Web Dev Resources website screenshot',
      demo: "https://7redeagle.github.io/monster-in-the-dark/",
      source: "https://github.com/7redeagle/monster-in-the-dark",
      tags: ['react', 'framer']
    },
    {
      id: 4,
      title: 'Artiva Hair Salon',
      description: 'Redesign of Artiva Hair Salon Website using Bootstrap and JQuery.',
      imgSrc: 'artiva-new-home.png',
      alt: 'Artiva Hair Salon website screenshot',
      demo: "https://7redeagle.github.io/artiva-hair-salon/",
      source: "https://github.com/7redeagle/artiva-hair-salon",
      tags: ['bootstrap', 'jQuery']
    },
    {
      id: 5,
      title: "Plotting Defoe's Travel Novels",
      description: "My research project was an emotion map of Daniel Defoe’s adventure novels.",
      imgSrc: 'defoe-map.png',
      alt: 'Defoe map website screenshot',
      demo: "https://7redeagle.github.io/defoe-map-v2",
      source: "https://github.com/7redeagle/defoe-map-v2",
      tags: ['jekyll', 'bootleaf']
    },
    {
      id: 6,
      title: "Geocoding Early Novels",
      description: "Geocoding Early Novels is a collaborative project I contributed to in 2019 that maps specific locations mentioned in the title pages of novels from the long eighteenth century.",
      imgSrc: 'end-19.png',
      alt: 'Defoe map website screenshot',
      demo: "https://cholahan.github.io/end19/",
      source: "https://github.com/cholahan/end19",
      tags: ['jekyll', 'yaml']
    },
  ]

  return (
    <div className="projects__grid">
      {projects.map(project => 
        <div className="card" key={project.id}>
          <h3 className="card__title">{project.title}</h3>
          <div className="card__image">
            <img src={`./projects/${project.imgSrc}`} alt={project.alt} style={{width: "100%", height: "100%"}} />
          </div>
          <p className="card__text">{project.description}</p>
          <div className="card__links">
            <a href={project.demo} target="_blank" rel="noreferrer">
              <button className="btn btn--projects">demo</button>
            </a>
            <a href={project.source} target="_blank" rel="noreferrer">
              <button className="btn btn--projects">source code</button>
            </a>
          </div>
        </div>
        )}
     </div>
    )
}

export default Projects;