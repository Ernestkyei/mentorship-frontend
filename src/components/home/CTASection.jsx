import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to grow on your terms?</h2>
        <p className="text-lg text-purple-100 mb-8">Join thousands of learners already using MentorPath</p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition inline-flex items-center gap-2">
          <Rocket className="w-5 h-5" />
          Start your free journey →
        </button>
      </div>
    </section>
  );
};

export default CTASection;