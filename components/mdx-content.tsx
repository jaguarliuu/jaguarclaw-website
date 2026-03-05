'use client'

import { useEffect, useRef } from 'react'
import { useMDXComponent } from 'next-contentlayer2/hooks'

type Props = {
  code: string
}

export function MdxContent({ code }: Props) {
  const Component = useMDXComponent(code)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const cleanups: Array<() => void> = []
    const preNodes = Array.from(root.querySelectorAll('pre'))

    preNodes.forEach((pre) => {
      if (pre.querySelector('.code-copy-btn')) return

      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'code-copy-btn'
      button.textContent = 'Copy'

      const resetLabel = () => {
        window.setTimeout(() => {
          button.textContent = 'Copy'
        }, 1200)
      }

      const onClick = async () => {
        const codeText = pre.querySelector('code')?.textContent ?? pre.textContent ?? ''
        try {
          await navigator.clipboard.writeText(codeText)
          button.textContent = 'Copied'
        } catch {
          button.textContent = 'Failed'
        }
        resetLabel()
      }

      button.addEventListener('click', onClick)
      pre.appendChild(button)
      cleanups.push(() => {
        button.removeEventListener('click', onClick)
        button.remove()
      })
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [code])

  return (
    <div ref={rootRef}>
      <Component />
    </div>
  )
}
