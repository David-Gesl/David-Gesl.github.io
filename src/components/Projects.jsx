import ProjectCard from "./ProjectCard";



const works = [
  {
    imgSrc: '/images/fraud.png',
    title: 'Fraud Detection Pipeline',
    tags: ['Scikit-learn', 'ML', 'AWS EC2', 'CI/CD'],
    projectLink: ''    //or empty string if still in progress. Add in progress tag?
  },
  {
    imgSrc: '/images/courseVacancy.png',
    title: 'Course Vacancy Extension',
    tags: ['Flask', 'Chrome API', 'MySQL '],
    projectLink: 'https://devpost.com/software/getthedamclass'
  },
  {
    imgSrc: '/images/realestate.jpg',
    title: 'Real Estate Club Website',
    tags: ['IN PROGRESS', 'React', 'Tailwind', 'Firebase'],
    projectLink: ''
  },
  {
    imgSrc: '',
    title: 'Portland Homlessness Data Science Project',
    tags: ['IN PROGRESS','Python', 'Pandas', 'Matplotlib'],
    projectLink: ''
  },
  {
    imgSrc: '/images/server.JPEG',
    title: 'Home Server',
    tags: ['Proxmox', 'Linux', 'VMs'],
    projectLink: ''
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="headline-1 mb-8">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects