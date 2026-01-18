import { PageConfig } from '../ui/primitives/PageRenderer'
import { Hero } from '../ui/sections/Hero'
import { NextUp } from '../ui/sections/NextUp'
import { Manifesto } from '../ui/sections/Manifesto'
import { ProjectsShowcase } from '../ui/sections/ProjectsShowcase'
import { ContactCTA } from '../ui/sections/ContactCTA'

export const homeConfig: PageConfig = {
  sections: [
    {
      id: 'hero',
      component: <Hero />,
      enabled: true,
      animate: false,
      className: 'grain',
    },
    {
      id: 'next-up',
      component: <NextUp />,
      enabled: true,
      pin: false,
      animate: true,
    },
    {
      id: 'manifesto',
      component: <Manifesto />,
      enabled: true,
      animate: true,
    },
    {
      id: 'projects',
      component: <ProjectsShowcase />,
      enabled: true,
      animate: true,
      className: 'bg-gradient-to-b from-black to-gray-900',
    },
    {
      id: 'contact',
      component: <ContactCTA />,
      enabled: true,
      animate: true,
    },
  ],
}
