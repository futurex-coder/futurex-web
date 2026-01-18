import { Project } from '../ui/components/ProjectCard'

export const projects: Project[] = [
  {
    slug: 'rezly',
    title: 'Rezly',
    subtitle: 'Appointment Platform',
    description: 'Next-generation booking platform designed to streamline appointment scheduling and maximize revenue opportunities.',
    features: [
      'Last-minute push notification marketing system',
      'Digital loyalty program with Apple Wallet and Google Pay integration',
      'Point tracking and rewards management',
      'AI-powered sales coaching tools for staff optimization',
      'Automated AI call center for booking confirmations',
      'Real-time availability management',
      'Customer analytics and insights dashboard',
    ],
    color: '#00fff9',
  },
  {
    slug: 'driveme',
    title: 'DriveMe',
    subtitle: 'Taxi Booking Platform',
    description: 'Comprehensive taxi ecosystem connecting drivers, passengers, and fleet operators through intelligent dispatch technology.',
    features: [
      'Driver app with real-time ride notifications',
      'Integrated navigation and route optimization',
      'Earnings dashboard and financial reporting',
      'Passenger app with instant booking capabilities',
      'Live ride tracking with ETA updates',
      'Multiple payment options: card, wallet, cash',
      'Admin platform with surge pricing algorithms',
      'Scalable microservices architecture on Kubernetes',
      'Compliance and reporting tools',
    ],
    color: '#00d4ff',
  },
  {
    slug: 'cardx',
    title: 'CardX',
    subtitle: 'NFC Business Cards',
    description: 'Revolutionary digital business card platform combining physical NFC technology with instant digital sharing.',
    features: [
      'Web-based card design customizer with realistic preview',
      'Tap-to-share contact details without app installation',
      'Automatic profile synchronization across all issued cards',
      'Social media and portfolio link integration',
      'Contact directory and networking analytics',
      'Tap history tracking and insights',
      'Enterprise bulk issuance system',
      'Access badge integration for office environments',
      'Permission management and audit logs',
    ],
    color: '#39ff14',
  },
  {
    slug: 'brute-app',
    title: 'Brute App',
    subtitle: 'Entertainment Mobile App',
    description: 'Engaging social entertainment platform featuring community interaction, gamification, and exclusive content.',
    features: [
      'Mini social network with user profiles and following system',
      'Community discussions and content sharing',
      'Automated giveaway system with configurable random draws',
      'Anonymous chat functionality for privacy',
      'Gamified loyalty levels and point accumulation',
      'Paid membership tiers with premium benefits',
      'Exclusive contests and prize opportunities',
      'Private invite-only community spaces',
      'User engagement analytics',
    ],
    color: '#ff006e',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
