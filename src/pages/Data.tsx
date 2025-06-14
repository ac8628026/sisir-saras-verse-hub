
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExhibitionConfig } from '../components/data/ExhibitionConfig';
import { ParticipantRegistration } from '../components/data/ParticipantRegistration';
import { DailySales } from '../components/data/DailySales';
import { ArrowLeft, Settings, UserPlus, BarChart3, ClipboardList, Database } from 'lucide-react';
import { RegistrationViewer } from '../components/data/RegistrationViewer';
import { Layout } from '../components/common/Layout';

export const Data = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    {
      id: 'config',
      title: 'Configure Exhibitions',
      description: 'Manage exhibition settings and status',
      icon: <Settings className="w-6 h-6" />,
      component: <ExhibitionConfig />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'register',
      title: 'Register Participants',
      description: 'Add new stalls and participants',
      icon: <UserPlus className="w-6 h-6" />,
      component: <ParticipantRegistration />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'sales',
      title: 'Daily Sales',
      description: 'Record daily sales data',
      icon: <BarChart3 className="w-6 h-6" />,
      component: <DailySales />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'registrations',
      title: 'View Registrations',
      description: 'View and edit participant registrations',
      icon: <ClipboardList className="w-6 h-6" />,
      component: <RegistrationViewer />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-2xl mx-auto p-4">
          {!activeSection ? (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-navy-800 dark:text-white mb-2">Data Management</h1>
                <p className="text-gray-600 dark:text-gray-300">Manage exhibition data and analytics</p>
              </motion.div>

              {/* Section Cards */}
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg cursor-pointer border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300 group"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${section.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-navy-700 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {section.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                          {section.description}
                        </p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-gray-400 dark:text-gray-500 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-dark-800 min-h-screen rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 z-10 px-6 py-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveSection('')}
                    className="flex items-center gap-2 text-navy-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  
                  <div className="w-px h-6 bg-gray-300 dark:bg-dark-600"></div>
                  
                  <div className="flex items-center gap-3">
                    {sections.find(s => s.id === activeSection)?.icon}
                    <h2 className="text-xl font-semibold text-navy-700 dark:text-white">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {sections.find(s => s.id === activeSection)?.component}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};
