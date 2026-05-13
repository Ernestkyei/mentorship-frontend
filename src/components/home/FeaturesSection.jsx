import React from 'react';
import { Clock, Users, TrendingUp, Bell, Trophy, MessageCircle } from 'lucide-react';

const features = [
  { icon: Clock, title: "Learn anytime", description: "No fixed schedules. Watch lessons, complete tasks and track progress whenever it suits you." },
  { icon: Users, title: "Guided by mentors", description: "Every module includes video coaching, written feedback and tasks reviewed by your mentor." },
  { icon: TrendingUp, title: "Track your growth", description: "Visual progress tracking, milestones and completion certificates keep you motivated." },
  { icon: Bell, title: "Smart reminders", description: "Automated nudges and weekly check-in summaries keep you accountable without live calls." },
  { icon: Trophy, title: "Earn milestones", description: "Complete modules to unlock badges, certificates and the next level of your program." },
  { icon: MessageCircle, title: "Async support", description: "Submit questions anytime and get mentor responses within 24 hours — no session needed." }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why MentorPath works</h2>
          <p className="text-lg text-gray-600">Everything you need to grow, all in one place</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;