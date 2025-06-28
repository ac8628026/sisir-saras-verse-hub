
import { GeneralExhibition } from './GeneralExhibition';
import { Package, Calendar, Utensils, MessageSquare, Users, BarChart3 } from 'lucide-react';

const sampleConfig = {
  title: 'Sample Exhibition',
  subtitle: 'A General Exhibition Template',
  description: 'This is a configurable exhibition template that can be customized for any type of exhibition or event.',
  primaryColor: '#3B82F6', // Blue
  secondaryColor: '#8B5CF6', // Purple
  backgroundColor: 'bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900',
  showMarquee: true,
  showSlideshow: true,
  features: [
    {
      icon: Package,
      title: 'Products',
      description: 'Browse our product collection.',
      to: '/products',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Check upcoming events and schedules.',
      to: '/schedule',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Utensils,
      title: 'Food',
      description: 'Explore culinary offerings.',
      to: '/foods',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Feedback',
      description: 'Share your thoughts with us.',
      to: '/feedback',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Admin',
      description: 'Administrative functions.',
      to: '/administrator',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'View exhibition data and insights.',
      to: '/data',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]
};

export const SampleExhibition = () => {
  return <GeneralExhibition config={sampleConfig} />;
};
