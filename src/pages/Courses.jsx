import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Brain, 
  Zap, 
  CheckCircle, 
  ChevronRight, 
  Star, 
  Users, 
  Target, 
  Shield, 
  Rocket, 
  Heart, 
  Sparkles,
  MessageCircle
} from 'lucide-react';

// Users icon component (since Users from lucide is different)
const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check auth status
  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(auth);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'leadership', name: 'Leadership', icon: Shield },
    { id: 'career', name: 'Career', icon: TrendingUp },
    { id: 'mindset', name: 'Mindset', icon: Brain },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'wellness', name: 'Wellness', icon: Heart }
  ];

  const courses = [
    // Leadership Category
    {
      id: 1,
      title: "Executive leadership program",
      category: "leadership",
      categoryName: "Leadership",
      description: "Structured coaching modules covering strategic thinking, team leadership and executive presence. Includes video lessons, tasks and mentor feedback.",
      modules: 12,
      duration: "6 weeks",
      level: "Advanced",
      students: 3420,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      progress: null,
      isPopular: true,
      certificate: true,
      color: "purple",
      icon: Shield
    },
    {
      id: 2,
      title: "Team leadership mastery",
      category: "leadership",
      categoryName: "Leadership",
      description: "Learn to inspire, motivate, and lead high-performing teams. Practical frameworks for conflict resolution and team dynamics.",
      modules: 8,
      duration: "4 weeks",
      level: "Intermediate",
      students: 2100,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "purple",
      icon: UsersIcon
    },
    {
      id: 3,
      title: "Strategic decision making",
      category: "leadership",
      categoryName: "Leadership",
      description: "Master the art of making high-stakes decisions with confidence. Learn from real-world case studies and expert frameworks.",
      modules: 6,
      duration: "3 weeks",
      level: "Advanced",
      students: 1560,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "purple",
      icon: Target
    },

    // Career Category
    {
      id: 4,
      title: "Career acceleration",
      category: "career",
      categoryName: "Career",
      description: "Clarity, strategy and portfolio building tasks guided by experienced career coaches. Weekly check-ins via async feedback.",
      modules: 8,
      duration: "4 weeks",
      level: "Intermediate",
      students: 2850,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
      progress: 45,
      isPopular: false,
      certificate: true,
      color: "blue",
      icon: Rocket
    },
    {
      id: 5,
      title: "Personal branding for professionals",
      category: "career",
      categoryName: "Career",
      description: "Build a powerful personal brand that opens doors. Learn to communicate your value and stand out in your industry.",
      modules: 6,
      duration: "3 weeks",
      level: "Beginner",
      students: 3200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
      progress: null,
      isPopular: true,
      certificate: true,
      color: "blue",
      icon: Star
    },
    {
      id: 6,
      title: "Interview mastery & negotiation",
      category: "career",
      categoryName: "Career",
      description: "Ace any interview and negotiate the salary you deserve. Real practice sessions with mentor feedback.",
      modules: 5,
      duration: "2 weeks",
      level: "Beginner",
      students: 4100,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      progress: 20,
      isPopular: false,
      certificate: true,
      color: "blue",
      icon: Target
    },

    // Mindset Category
    {
      id: 7,
      title: "Growth mindset coaching",
      category: "mindset",
      categoryName: "Mindset",
      description: "Weekly reflection exercises and mentor-guided tasks designed to build resilience and a growth-oriented approach to challenges.",
      modules: 10,
      duration: "5 weeks",
      level: "Beginner",
      students: 4100,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "green",
      icon: Brain
    },
    {
      id: 8,
      title: "Resilience & stress management",
      category: "mindset",
      categoryName: "Mindset",
      description: "Develop mental toughness and learn to thrive under pressure. Science-backed techniques for managing stress.",
      modules: 7,
      duration: "4 weeks",
      level: "Beginner",
      students: 2780,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "green",
      icon: Heart
    },
    {
      id: 9,
      title: "Confidence & self-belief",
      category: "mindset",
      categoryName: "Mindset",
      description: "Overcome imposter syndrome and build unshakeable confidence. Practical exercises and mentor guidance.",
      modules: 6,
      duration: "3 weeks",
      level: "Beginner",
      students: 5200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
      progress: null,
      isPopular: true,
      certificate: true,
      color: "green",
      icon: Sparkles
    },

    // Productivity Category
    {
      id: 10,
      title: "High-performance habits",
      category: "productivity",
      categoryName: "Productivity",
      description: "Build daily systems for peak performance using proven frameworks from top coaches and productivity experts.",
      modules: 6,
      duration: "3 weeks",
      level: "Intermediate",
      students: 2100,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "orange",
      icon: Zap
    },
    {
      id: 11,
      title: "Time mastery & deep work",
      category: "productivity",
      categoryName: "Productivity",
      description: "Eliminate distractions and achieve more in less time. Learn the art of deep work and focus management.",
      modules: 5,
      duration: "2 weeks",
      level: "Intermediate",
      students: 3450,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "orange",
      icon: Clock
    },

    // Communication Category
    {
      id: 12,
      title: "Communication & influence",
      category: "communication",
      categoryName: "Communication",
      description: "Master the art of persuasive communication, active listening, and influencing without authority.",
      modules: 8,
      duration: "4 weeks",
      level: "Intermediate",
      students: 2950,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      progress: null,
      isPopular: false,
      certificate: true,
      color: "pink",
      icon: MessageCircle
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-700',
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      orange: 'bg-orange-100 text-orange-700',
      pink: 'bg-pink-100 text-pink-700'
    };
    return colors[color] || colors.purple;
  };

  const getButtonColor = (color) => {
    const colors = {
      purple: 'from-purple-600 to-indigo-600',
      blue: 'from-blue-600 to-cyan-600',
      green: 'from-green-600 to-emerald-600',
      orange: 'from-orange-600 to-red-600',
      pink: 'from-pink-600 to-rose-600'
    };
    return colors[color] || 'from-purple-600 to-indigo-600';
  };

  const handleCourseAction = (courseId) => {
    if (!isAuthenticated) {
      // Save intended course and redirect to signup
      localStorage.setItem('intendedCourse', courseId);
      navigate('/signup');
    } else {
      // Navigate to course player
      navigate(`/course/${courseId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All programs</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Choose from our curated collection of self-paced mentoring programs. 
            Learn from expert coaches and track your growth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8 sticky top-16 z-40">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search 12+ programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon && <category.icon className="w-4 h-4" />}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> of {courses.length} programs
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>Sort by: Recommended</span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  {course.isPopular && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      Most popular
                    </div>
                  )}
                  {course.progress && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 rounded-full h-2 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:w-3/5 p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getColorClasses(course.color)}`}>
                      {course.categoryName}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.modules} modules
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <UsersIcon className="w-3 h-3" />
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {"★".repeat(Math.floor(course.rating))}
                        {"☆".repeat(5 - Math.floor(course.rating))}
                      </div>
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <UsersIcon className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} learners</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <Award className="w-4 h-4" />
                        <span>Certificate</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleCourseAction(course.id)}
                    className={`w-full py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 bg-gradient-to-r ${getButtonColor(course.color)} text-white hover:shadow-lg`}
                  >
                    {!isAuthenticated ? (
                      <>
                        Enroll Now
                        <ChevronRight className="w-4 h-4" />
                      </>
                    ) : course.progress ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Continue
                      </>
                    ) : (
                      <>
                        Start learning
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  {/* Show login message for non-authenticated users */}
                  {!isAuthenticated && (
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Sign up to track your progress
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No programs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;