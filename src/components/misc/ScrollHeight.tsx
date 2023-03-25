import { useEffect, useState } from 'react'

export default function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  })

  return { scrollHeight }
}