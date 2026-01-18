import { ReactNode } from 'react'
import { Section } from './Section'

export interface SectionConfig {
  id: string
  component: ReactNode
  enabled?: boolean
  pin?: boolean
  animate?: boolean
  theme?: 'dark' | 'light'
  className?: string
}

export interface PageConfig {
  sections: SectionConfig[]
}

interface PageRendererProps {
  config: PageConfig
}

export function PageRenderer({ config }: PageRendererProps) {
  return (
    <>
      {config.sections
        .filter(section => section.enabled !== false)
        .map((section) => (
          <Section
            key={section.id}
            id={section.id}
            pin={section.pin}
            animate={section.animate}
            theme={section.theme}
            className={section.className}
          >
            {section.component}
          </Section>
        ))}
    </>
  )
}
