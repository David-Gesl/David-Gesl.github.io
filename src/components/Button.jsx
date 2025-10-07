import PropTypes from 'prop-types'

// Primary button 
const ButtonPrimary = ({
    href, 
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : null}
      </a>
    )
  }
  return (
    <button type="button" className={"btn btn-primary " + classes}>
      {label}
      {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : null}
    </button>
  )
}

ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

// Button outline
const ButtonOutline = ({
    href, 
    target = '_self',
    label,
    icon,
    classes
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : null}
      </a>
    )
  }
  return (
    <button type="button" className={"btn btn-outline " + classes}>
      {label}
      {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : null}
    </button>
  )
}

ButtonOutline.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {ButtonPrimary, ButtonOutline}