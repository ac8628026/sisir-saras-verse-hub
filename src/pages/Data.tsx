
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Package, Calendar, Target, Download, RefreshCw } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { Tabs } from '../components/common/Tabs';
import { DailySales } from '../components/data/DailySales';
import { RegistrationViewer } from '../components/data/RegistrationViewer';
import { ParticipantRegistration } from '../components/data/ParticipantRegistration';
import { ExhibitionConfig } from '../components/data/ExhibitionConfig';

const statsCards = [
  {
    title: 'Total Visitors',
    value: '12,543',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Products Displayed',
    value: '2,847',
    change: '+8.2%',
    trend: 'up',
    icon: Package,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Events Held',
    value: '156',
    change: '+12.7%',
    trend: 'up',
    icon: Calendar,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Revenue Generated',
    value: '₹8.4L',
    change: '+23.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-yellow-500 to-yellow-600'
  }
];

export const Data = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'sales', label: 'Daily Sales', icon: TrendingUp },
    { id: 'registrations', label: 'Registrations', icon: Users },
    { id: 'participants', label: 'New Registration', icon: Target },
    { id: 'config', label: 'Configuration', icon: Package }
  ];

  return (
    <Layout 
      title="Data Analytics"
      subtitle="View detailed analytics and insights about the exhibition"
      backgroundGradient="from-gray-50 via-blue-50 to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Header Actions */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Data</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <motion.button
            onClick={handleRefresh}
            disabled={isRefreshing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Tabs Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </motion.div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        {activeTab === 'overview' && (
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Exhibition Overview
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {[
                    { action: 'New product added', time: '2 minutes ago', type: 'product' },
                    { action: 'Event registration received', time: '5 minutes ago', type: 'event' },
                    { action: 'Feedback submitted', time: '8 minutes ago', type: 'feedback' },
                    { action: 'Sales report generated', time: '15 minutes ago', type: 'sales' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Add Product', icon: Package },
                    { label: 'Schedule Event', icon: Calendar },
                    { label: 'View Reports', icon: BarChart3 },
                    { label: 'Manage Users', icon: Users }
                  ].map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex flex-col items-center gap-2"
                      >
                        <Icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{action.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'sales' && <DailySales />}
        {activeTab === 'registrations' && <RegistrationViewer />}
        {activeTab === 'participants' && <ParticipantRegistration />}
        {activeTab === 'config' && <ExhibitionConfig />}
      </motion.div>
    </Layout>
  );
};
