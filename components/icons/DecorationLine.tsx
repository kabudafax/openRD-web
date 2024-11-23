'use client'

import { cn } from '@/lib/utils'
import styles from './ DecorationLine.module.scss'
import { useEffect } from 'react'

interface DecorationLineProps {
  className?: string
}

const DecorationLine = ({ className }: DecorationLineProps) => {
  useEffect(() => {
    const path = document.querySelector(`.${styles.animatedPath}`) as SVGPathElement
    if (path) {
      const length = path.getTotalLength()

      // 创建新的样式规则
      const styleSheet = document.styleSheets[0]
      const keyframes = `
        @keyframes drawPath {
          0% {
            stroke-dasharray: ${length};
            stroke-dashoffset: ${length};
          }
          100% {
            stroke-dasharray: ${length};
            stroke-dashoffset: 0;
          }
        }
      `
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length)

      // 添加active类触发动画
      setTimeout(() => {
        path.classList.add(styles.active)
      }, 100)
    }
  }, [])

  return (
    <svg
      width="188"
      height="18"
      viewBox="0 0 188 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('decoration-line', styles.decorationLine, className)}
    >
      <path
        className={styles.animatedPath}
        d="M3 11.519C30.4271 7.07249 57.6072 3.81134 85.4203 3.22149C100.294 2.90607 115.239 2.86512 130.105 3.51573C137.821 3.85338 145.7 4.34423 153.273 5.98732C153.986 6.14207 158.399 6.80407 158.338 8.61583C158.269 10.6872 151.842 11.4278 151.192 11.5582C143.705 13.0605 135.84 14.6967 128.181 14.9517C119.731 15.2331 145.076 14.2017 153.528 13.9905C155.346 13.9451 185 12.5264 185 14.3436"
        stroke="#19B2F2"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default DecorationLine
