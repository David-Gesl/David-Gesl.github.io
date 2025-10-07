import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container py-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} David Gesl</p>
        <a
          href="https://www.linkedin.com/in/david-gesl/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-sky-600 hover:text-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}