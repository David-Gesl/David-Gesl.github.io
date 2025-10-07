import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-white hover:bg-zinc-50 ring-1 ring-zinc-200 hover:ring-zinc-300 transition-colors transform hover:scale-[1.01] " + (classes || "")}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span key={key} className="h-8 text-sm text-zinc-600 bg-zinc-100 grid items-center px-3 rounded-lg">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                <span className="material-symbols-rounded" aria-hidden="true">
                    arrow_outward
                </span>
            </div>
        </div>

        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  )
}

ProjectCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired
    
}
export default ProjectCard