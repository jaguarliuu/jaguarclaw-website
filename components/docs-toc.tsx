'use client'

import { useEffect, useMemo, useState } from 'react'
import type { TocItem } from '@/lib/toc'

type Props = {
  toc: TocItem[]
}

export function DocsToc({ toc }: Props) {
  const [active, setActive] = useState<string | null>(toc[0]?.anchor ?? null)
  const anchors = useMemo(() => toc.map((item) => item.anchor), [toc])

  useEffect(() => {
    if (anchors.length === 0) return

    const elements = anchors
      .map((anchor) => document.getElementById(anchor))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: [0, 1]
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [anchors])

  return (
    <>
      <p className="docs-nav-title">On This Page</p>
      {toc.length > 0 ? (
        toc.map((item) => (
          <a key={item.anchor} href={`#${item.anchor}`} className={item.anchor === active ? 'docs-toc-link active' : 'docs-toc-link'}>
            {item.title}
          </a>
        ))
      ) : (
        <p className="toc-empty">No headings available</p>
      )}
    </>
  )
}

