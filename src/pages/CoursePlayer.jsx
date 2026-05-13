import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Clock, 
  BookOpen, 
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Award,
  FileText,
  HelpCircle
} from 'lucide-react';

const CoursePlayer = () => {
  const { courseId } = useParams();
  const [selectedModule, setSelectedModule] = useState(3);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(100);
  const [taskSubmitted, setTaskSubmitted] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  // Course data
  const course = {
    id: 1,
    title: "Executive leadership program",
    mentor: "Dr. Sarah Collins",
    mentorTitle: "Executive Coach",
    mentorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    overallProgress: 25
  };

  const modules = [
    { id: 1, title: "Leadership fundamentals", duration: "12 min", status: "done", videoProgress: 100 },
    { id: 2, title: "Self-awareness & EQ", duration: "10 min", status: "done", videoProgress: 100 },
    { id: 3, title: "Strategic thinking", duration: "14 min", status: "in-progress", videoProgress: 100 },
    { id: 4, title: "Communication skills", duration: "11 min", status: "locked" },
    { id: 5, title: "Team dynamics", duration: "15 min", status: "locked" },
    { id: 6, title: "Decision making", duration: "13 min", status: "locked" },
    { id: 7, title: "Change management", duration: "16 min", status: "locked" }
  ];

  const currentModule = modules.find(m => m.id === selectedModule);
  const tasks = [
    { id: 1, title: "Watch module video", completed: true, type: "video" },
    { id: 2, title: "Submit reflection journal", completed: taskSubmitted, type: "reflection", dueIn: "2 days" },
    { id: 3, title: "Quiz: Strategic thinking", completed: false, type: "quiz", unlocked: taskSubmitted }
  ];

  const mentorFeedback = {
    module2: "Your module 2 reflection showed great self-awareness. For this module, focus on identifying 2-3 real decisions you face and apply the strategic framework to them. That practical exercise will accelerate your growth significantly.",
    timestamp: "3h ago"
  };

  const handleSubmitReflection = () => {
    if (reflectionText.trim()) {
      setTaskSubmitted(true);
      setShowQuiz(true);
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'done') return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === 'in-progress') return <Play className="w-5 h-5 text-purple-600" />;
    if (status === 'locked') return <Lock className="w-5 h-5 text-gray-400" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/courses" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition">
              <ChevronLeft className="w-5 h-5" />
              Back
            </Link>
            <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
            <div className="flex items-center gap-2 ml-auto">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Module {selectedModule} of {modules.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Video Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player with Pictorial Tutor */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                {/* Video Container */}
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-indigo-900 relative">
                  {/* Pictorial Tutor (Mentor Avatar overlay on video) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={course.mentorAvatar}
                          alt={course.mentor}
                          className="w-16 h-16 rounded-full border-3 border-white shadow-lg"
                        />
                        <div className="text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{course.mentor}</span>
                            <span className="text-xs text-gray-300">{course.mentorTitle}</span>
                          </div>
                          <p className="text-sm text-gray-200">
                            "Strategic thinking is the ability to see the big picture while managing the details..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay (for demo, show as paused) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  </div>
                </div>
                
                {/* Video Controls (simulated) */}
                <div className="bg-black/80 backdrop-blur p-3 absolute bottom-0 left-0 right-0">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-sm">14:00 / 14:00</span>
                    <div className="flex-1 h-1 bg-gray-600 rounded-full">
                      <div className="w-full h-full bg-purple-500 rounded-full"></div>
                    </div>
                    <button className="text-sm hover:text-purple-400">1x</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentModule.title}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Video · {currentModule.duration}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">In progress</span>
                  </div>
                </div>
                <img 
                  src={course.mentorAvatar}
                  alt={course.mentor}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              
              {/* Strategic Thinking Framework */}
              <div className="mt-6 border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Strategic thinking framework</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Define your vision clearly", "Identify key leverage points", "Map stakeholder influence", "Build decision frameworks"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mentor Feedback */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-start gap-4">
                <img 
                  src={course.mentorAvatar}
                  alt={course.mentor}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{course.mentor}</span>
                    <span className="text-xs text-gray-500">{course.mentorTitle} · replied {mentorFeedback.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{mentorFeedback.module2}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Modules & Tasks */}
          <div className="space-y-6">
            {/* Course Modules */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Course modules
                </h3>
              </div>
              <div className="divide-y">
                {modules.map((module, idx) => (
                  <button
                    key={module.id}
                    onClick={() => module.status !== 'locked' && setSelectedModule(module.id)}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition flex items-center justify-between group ${
                      selectedModule === module.id ? 'bg-purple-50 border-l-4 border-l-purple-600' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                        {module.id}
                      </div>
                      <div>
                        <p className={`font-medium ${module.status === 'locked' ? 'text-gray-400' : 'text-gray-900'}`}>
                          {module.title}
                        </p>
                        <p className="text-xs text-gray-400">{module.duration}</p>
                      </div>
                    </div>
                    {getStatusIcon(module.status)}
                  </button>
                ))}
              </div>
            </div>

            {/* Your Tasks */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Your tasks for this module
                </h3>
              </div>
              <div className="divide-y">
                {tasks.map((task) => (
                  <div key={task.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {task.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        )}
                        <span className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {task.title}
                        </span>
                      </div>
                      {task.dueIn && (
                        <span className="text-xs text-orange-500">Due in {task.dueIn}</span>
                      )}
                    </div>
                    
                    {/* Reflection Task Input */}
                    {task.type === 'reflection' && !task.completed && (
                      <div className="mt-3">
                        <textarea
                          value={reflectionText}
                          onChange={(e) => setReflectionText(e.target.value)}
                          placeholder="Write your reflection here..."
                          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          rows="3"
                        />
                        <button
                          onClick={handleSubmitReflection}
                          disabled={!reflectionText.trim()}
                          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Submit
                        </button>
                      </div>
                    )}
                    
                    {/* Quiz Button */}
                    {task.type === 'quiz' && task.unlocked && !task.completed && (
                      <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition flex items-center justify-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Take Quiz: Strategic thinking
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm opacity-90">Overall Progress</span>
                <span className="text-2xl font-bold">{course.overallProgress}%</span>
              </div>
              <div className="w-full h-2 bg-white/30 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${course.overallProgress}%` }}
                ></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <Award className="w-4 h-4" />
                <span>Next milestone: Communication skills module</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;