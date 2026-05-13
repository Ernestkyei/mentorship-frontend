import React from 'react';

const programs = [
  {
    id: 1,
    category: "Leadership",
    title: "Executive leadership program",
    description: "Build leadership skills through structured coaching modules and real-world tasks.",
    modules: 12,
    duration: "6 weeks"
  },
  {
    id: 2,
    category: "Career",
    title: "Career acceleration",
    description: "Get clarity on your career path with structured mentoring and portfolio building tasks.",
    modules: 8,
    duration: "4 weeks"
  },
  {
    id: 3,
    category: "Mindset",
    title: "Growth mindset coaching",
    description: "Develop a resilient mindset through reflection exercises and mentor-guided tasks.",
    modules: 10,
    duration: "5 weeks"
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Featured programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1">
              <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {program.category}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
              <div className="flex gap-4 mb-5 text-sm text-gray-500">
                <span>📚 {program.modules} modules</span>
                <span>⏱️ {program.duration}</span>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
                Enroll →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;