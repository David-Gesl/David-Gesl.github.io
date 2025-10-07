import React from 'react'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Center for Applied Systems and Software',
    dates: 'Current',
    summary:
      'Worked with various clients to develop C# and .NET applications'
  },
  {
    role: 'Undergraduate Learning Assistant',
    company: 'OSU - School of EECS',
    dates: 'Jan 2025 - Mar 2025',
    summary:
      'Learning assistant for Software Engineering 1 (CS 361), a course focused on software development and design.'
  },
  {
    role: 'Software Developer Intern',
    company: 'REsimplifi Inc.',
    dates: 'Jun 2024 - Sep 2024',
    summary:
      'Worked with a real estate data startup to help gather and repurpose data.'
  },
  {
    role: 'Software Developer Intern',
    company: 'OSU - College of Business',
    dates: 'Jan 2024 - May 2024',
    summary:
      'Led a project to develop the first version of a full-stack Retrieval-Augmented-Generation (RAG) application for first year students.'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-1 mb-6">Experience</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="p-5 rounded-2xl bg-white shadow ring-1 ring-zinc-200"
            >
              <h3 className="title-1 mb-1">
                {exp.role} <span className="text-zinc-400">• {exp.company}</span>
              </h3>
              <p className="text-sm text-zinc-500 mb-3">{exp.dates}</p>
              <p className="text-zinc-700 leading-relaxed">{exp.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience