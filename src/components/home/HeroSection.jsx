import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleBrowseCourses = () => {
    navigate('/courses');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Learn at your own pace with{' '}
          <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
            expert mentoring
          </span>
        </h1>
        <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10">
          Structured programs designed by real coaches. No scheduling conflicts. 
          No live sessions required. Just guided growth whenever you are ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleGetStarted}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={handleBrowseCourses}
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Browse courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;