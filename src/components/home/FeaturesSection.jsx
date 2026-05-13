import React from 'react';

const features = [
  {
    title: "Learn anytime",
    description: "No fixed schedules. Watch lessons, complete tasks and track progress whenever it suits you.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop",
    color: "bg-blue-100"
  },
  {
    title: "Guided by mentors",
    description: "Every module includes video coaching, written feedback and tasks reviewed by your mentor.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    color: "bg-purple-100"
  },
  {
    title: "Track your growth",
    description: "Visual progress tracking, milestones and completion certificates keep you motivated.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    color: "bg-green-100"
  },
  {
    title: "Smart reminders",
    description: "Automated nudges and weekly check-in summaries keep you accountable without live calls.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop",
    color: "bg-amber-100"
  },
  {
    title: "Earn milestones",
    description: "Complete modules to unlock badges, certificates and the next level of your program.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=200&fit=crop",
    color: "bg-yellow-100"
  },
  {
    title: "Async support",
    description: "Submit questions anytime and get mentor responses within 24 hours — no session needed.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    color: "bg-pink-100"
  }
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
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image on top */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;