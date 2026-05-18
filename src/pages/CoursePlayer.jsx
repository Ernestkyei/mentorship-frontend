import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Clock, 
  BookOpen, 
  ChevronLeft,
  ChevronRight,
  FileText,
  HelpCircle,
  User
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { completeModule, submitTask, getUserProgress } from '../services/progressService';

const CoursePlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(null);
  const [course, setCourse] = useState(null);
  const [taskSubmitted, setTaskSubmitted] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [courseProgress, setCourseProgress] = useState(0);
  const [completedModuleIds, setCompletedModuleIds] = useState([]);

  // Get current user
  const currentUser = JSON.parse(localStorage.getItem('current_user') || '{}');
  const userId = currentUser.id;

  useEffect(() => {
    // Load course data based on ID from URL
    const courseData = coursesData[courseId];
    if (courseData) {
      setCourse(courseData);
      
      // Load saved progress
      if (userId) {
        const savedProgress = getUserProgress(userId);
        const savedCourseProgress = savedProgress?.courseProgress?.[courseId];
        if (savedCourseProgress) {
          setCourseProgress(savedCourseProgress.percentage || 0);
          setCompletedModuleIds(savedCourseProgress.completedModules || []);
        }
      }
      
      // Find first available module (not locked or already completed)
      let firstAvailable = courseData.modules.find(m => m.status !== 'locked');
      
      // If user has progress, find current module
      if (completedModuleIds.length > 0) {
        const nextModule = courseData.modules.find(m => !completedModuleIds.includes(m.id) && m.status !== 'locked');
        if (nextModule) {
          firstAvailable = nextModule;
        }
      }
      
      setSelectedModule(firstAvailable || courseData.modules[0]);
    } else {
      navigate('/courses');
    }
  }, [courseId, navigate, userId, completedModuleIds.length]);

  // Mark module as completed when video is watched
  const handleModuleComplete = () => {
    if (!selectedModule) return;
    
    // Check if module already completed
    if (completedModuleIds.includes(selectedModule.id)) return;
    
    // Save progress
    const durationMinutes = parseInt(selectedModule.duration) || 10;
    const updatedProgress = completeModule(userId, parseInt(courseId), selectedModule.id, durationMinutes);
    
    // Update local state
    setCourseProgress(updatedProgress.courseProgress[courseId]?.percentage || 0);
    setCompletedModuleIds([...completedModuleIds, selectedModule.id]);
    
    // Update module status in course data (for UI)
    const updatedModules = course.modules.map(m => {
      if (m.id === selectedModule.id) {
        return { ...m, status: 'done', videoProgress: 100 };
      }
      // Unlock next module
      if (m.id === selectedModule.id + 1 && m.status === 'locked') {
        return { ...m, status: 'in-progress' };
      }
      return m;
    });
    
    setCourse({ ...course, modules: updatedModules, overallProgress: updatedProgress.courseProgress[courseId]?.percentage || 0 });
    
    // Auto-select next module
    const nextModule = updatedModules.find(m => m.id === selectedModule.id + 1 && m.status !== 'locked');
    if (nextModule) {
      setSelectedModule(nextModule);
    }
    
    // Show toast for module completion
    toast.success(`🎉 Module "${selectedModule.title}" completed!`, {
      duration: 3000,
    });
  };

  const handleSubmitReflection = () => {
    if (reflectionText.trim()) {
      submitTask(userId);
      setTaskSubmitted(true);
      setShowQuiz(true);
      
      // Show toast for reflection submission
      toast.success('📝 Reflection submitted successfully! Your mentor will review it.', {
        duration: 4000,
      });
      
      // Clear the textarea
      setReflectionText('');
    } else {
      toast.error('Please write something before submitting.', {
        duration: 3000,
      });
    }
  };

  if (!course || !selectedModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course...</p>
          </div>
        </div>
      </div>
    );
  }

  // Check if current module is completed
  const isModuleCompleted = completedModuleIds.includes(selectedModule.id);
  const currentModule = selectedModule;
  
  const tasks = [
    { id: 1, title: "Watch module video", completed: isModuleCompleted || currentModule.videoProgress === 100, type: "video" },
    { id: 2, title: "Submit reflection journal", completed: taskSubmitted, type: "reflection", dueIn: "2 days" },
    { id: 3, title: "Quiz", completed: false, type: "quiz", unlocked: taskSubmitted }
  ];

  const getStatusIcon = (status, moduleId) => {
    if (completedModuleIds.includes(moduleId)) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === 'done') return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === 'in-progress') return <Play className="w-5 h-5 text-purple-600" />;
    if (status === 'locked') return <Lock className="w-5 h-5 text-gray-400" />;
    return null;
  };

  const handleModuleSelect = (module) => {
    if (module.status !== 'locked') {
      setSelectedModule(module);
    }
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
              Back to Courses
            </Link>
            <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
            <div className="flex items-center gap-2 ml-auto">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">
                Module {course.modules.findIndex(m => m.id === currentModule.id) + 1} of {course.modules.length}
              </span>
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
              <div className="relative aspect-video">
                <iframe
                  src={currentModule.videoUrl || course.videoUrl}
                  title={currentModule.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isModuleCompleted ? 'bg-green-100 text-green-700' :
                      currentModule.status === 'in-progress' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {isModuleCompleted ? 'Completed' : 
                       currentModule.status === 'in-progress' ? 'In progress' : 'Locked'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                    {course.mentor.avatar ? (
                      <img src={course.mentor.avatar} alt={course.mentor.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{course.mentor.name}</p>
                    <p className="text-xs text-gray-500">{course.mentor.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Mark Complete Button */}
              {!isModuleCompleted && currentModule.status !== 'locked' && (
                <button
                  onClick={handleModuleComplete}
                  className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Mark Module as Complete
                </button>
              )}
              
              {isModuleCompleted && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg text-center">
                  <p className="text-green-600 text-sm font-medium">✓ Module completed!</p>
                </div>
              )}
              
              {/* Framework */}
              {course.framework && (
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{currentModule.title} framework</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {course.framework.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mentor Feedback */}
            {course.mentorFeedback && (
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
                    {course.mentor.avatar ? (
                      <img src={course.mentor.avatar} alt={course.mentor.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900">{course.mentor.name}</span>
                      <span className="text-xs text-gray-500">{course.mentor.title}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      "{course.mentorFeedback}"
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                {course.modules.map((module, idx) => (
                  <button
                    key={module.id}
                    onClick={() => handleModuleSelect(module)}
                    disabled={module.status === 'locked'}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition flex items-center justify-between group ${
                      selectedModule?.id === module.id ? 'bg-purple-50 border-l-4 border-l-purple-600' : ''
                    } ${module.status === 'locked' ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full text-sm font-medium ${
                        completedModuleIds.includes(module.id) ? 'bg-green-100 text-green-700' :
                        module.status === 'in-progress' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {idx + 1}
                      </div>
                      <div>
                        <p className={`font-medium ${module.status === 'locked' ? 'text-gray-400' : 'text-gray-900'}`}>
                          {module.title}
                        </p>
                        <p className="text-xs text-gray-400">{module.duration}</p>
                      </div>
                    </div>
                    {getStatusIcon(module.status, module.id)}
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
                          Submit Reflection
                        </button>
                      </div>
                    )}
                    
                    {/* Quiz Button */}
                    {task.type === 'quiz' && task.unlocked && !task.completed && (
                      <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition flex items-center justify-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Take Quiz
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
                <span className="text-2xl font-bold">{courseProgress || course.overallProgress || 0}%</span>
              </div>
              <div className="w-full h-2 bg-white/30 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${courseProgress || course.overallProgress || 0}%` }}
                />
              </div>
              <p className="text-xs opacity-80 mt-3">
                {completedModuleIds.length} of {course.modules.length} modules completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;