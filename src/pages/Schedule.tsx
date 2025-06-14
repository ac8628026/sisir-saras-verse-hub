import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Filter, CalendarDays, Star } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { getEvents, type Event } from '../services/scheduleService';

export const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
        setFilteredEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filterEvents = () => {
    let filtered = [...events];

    if (selectedDate) {
      filtered = filtered.filter(event => event.date === selectedDate);
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.venue.includes(selectedCategory));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    filterEvents();
  }, [selectedDate, selectedCategory, events]);

  const categories = ['All', 'Main Hall', 'Conference Room', 'Workshop Area', 'Exhibition Hall'];

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title="Event Schedule"
      subtitle="Stay updated with cultural programs, workshops, and special events"
      backgroundGradient="from-green-50 via-emerald-50 to-teal-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-2xl shadow-xl p-6 mb-8 border border-gray-200 dark:border-dark-700"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Date Filter */}
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-green-600" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-green-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Events Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-700"
          >
            <div className="relative p-6">
              {/* Event Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>

              {/* Event Details */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {event.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {event.description}
              </p>

              {/* Event Meta */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4" />
                Register Interest
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 rounded-full flex items-center justify-center">
            <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            No events found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Check back later for upcoming events and programs
          </p>
        </motion.div>
      )}
    </Layout>
  );
};
