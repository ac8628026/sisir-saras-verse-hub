
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Package, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { Tabs } from '../components/common/Tabs';
import { DailySales } from '../components/data/DailySales';
import { ParticipantRegistration } from '../components/data/ParticipantRegistration';
import { RegistrationViewer } from '../components/data/RegistrationViewer';
import { ExhibitionConfig } from '../components/data/ExhibitionConfig';

export const Data = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { 
      id: 'sales', 
      label: 'Daily Sales', 
      icon: DollarSign,
      component: DailySales
    },
    { 
      id: 'registration', 
      label: 'Registration', 
      icon: Users,
      component: ParticipantRegistration
    },
    { 
      id: 'registrations', 
      label: 'View Registrations', 
      icon: Package,
      component: RegistrationViewer
    },
    { 
      id: 'config', 
      label: 'Exhibition Config', 
      icon: Calendar,
      component: ExhibitionConfig
    }
  ];

  

  return (
    <Layout 
      title="Data Analytics"
      subtitle="View detailed analytics and insights about the exhibition"
      backgroundGradient="from-blue-50 via-indigo-50 to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Analytics Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Visitors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">2,845</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Total Visitors</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">+12.5%</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">from yesterday</span>
          </div>
        </motion.div>

        {/* Products Sold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,234</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Products Sold</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">+8.2%</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">from yesterday</span>
          </div>
        </motion.div>

        {/* Events Attended */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">156</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Events Attended</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">+15.1%</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">from yesterday</span>
          </div>
        </motion.div>

        {/* Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">₹89,456</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Total Revenue</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">+22.3%</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">from yesterday</span>
          </div>
        </motion.div>
      </div>

      {/* Tabs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700"
      >
        <Tabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </motion.div>
    </Layout>
  );
};
