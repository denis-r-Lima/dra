import React from 'react'

export default function ScrollHandler (
  e: React.MouseEvent<HTMLAnchorElement>
): void {
  e.preventDefault()

  const navTarget = e.currentTarget.getAttribute('href')
  const targetElement = document.querySelector(navTarget) as HTMLDivElement

  const offsetTop = targetElement.offsetTop

  scroll({ top: offsetTop, behavior: 'smooth' })
}
