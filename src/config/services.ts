export interface Service {
  name: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    name: 'Web Development',
    description: 'Scalable web applications built with modern frameworks and best practices.',
    icon: '🌐',
  },
  {
    name: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your brand and reach target audiences.',
    icon: '📈',
  },
  {
    name: 'AI Solutions',
    description: 'Intelligent automation and machine learning to transform your operations.',
    icon: '🤖',
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for iOS and Android.',
    icon: '📱',
  },
  {
    name: 'Blockchain Development',
    description: 'Decentralized solutions leveraging blockchain technology for security and transparency.',
    icon: '⛓️',
  },
  {
    name: 'Graphics Design',
    description: 'Visual identity and design systems that captivate and convert.',
    icon: '🎨',
  },
]
