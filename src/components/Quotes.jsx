import React from 'react'

const quotes = [
  { text: "Leave Nothing to Chance", author: "Unknown" },
  { text: "The value of our conclusions will be only as good as the sensibility of our assumptions", author: "Game Theory: An Introduction by Steven Tadelis" },
]

const Quotes = () => {
  return (
    <section id="quotes" className="section">
      <div className="container">
        <h2 className="headline-1 mb-6">My Favorite Quotes</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <article key={i} className="p-5 rounded-2xl bg-white shadow ring-1 ring-zinc-200">
              <blockquote className="text-zinc-700 italic leading-relaxed">“{q.text}”</blockquote>
              <p className="mt-3 text-sm text-zinc-500">— {q.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes