import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { getUserProgress } from '../services/progressService';
import { coursesData } from '../data/coursesData';
import {
  BookOpen,
  Clock,
  CheckCircle,
  Flame,
  Calendar,
  Mail,
  MessageCircle,
  Award,
  Target,
  TrendingUp,
  Bell,
  FileText,
  UserCheck,
  Zap,
  ArrowLeft
} from 'lucide-react';

const Progress = () => {
  const navigate = useNavigate();
  const [activeProgram, setActiveProgram] = useState('1');
  const [userProgress, setUserProgress] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Helper to get next module name
  const getNextModuleName = (course, completedModules) => {
    if (!course?.modules) return 'Start learning';
    const nextModule = course.modules.find(m => !completedModules.includes(m.id) && m.status !== 'locked');
    return nextModule?.title || 'Review completed modules';
  };

  // Helper to get milestones with CORRECT status from actual progress
  const getMilestones = () => {
    const course = coursesData[activeProgram];
    if (!course || !course.modules) return [];
    
    // Get completed modules from actual user progress
    const completedModules = userProgress?.courseProgress?.[activeProgram]?.completedModules || [];
    
    return course.modules.map((module, idx) => {
      let status = 'upcoming';
      
      if (completedModules.includes(module.id)) {
        status = 'completed';
      } else if (idx === 0 || completedModules.includes(course.modules[idx - 1]?.id)) {
        status = 'current';
      }
      
      return {
        id: module.id,
        title: module.title,
        date: `Module ${idx + 1}`,
        status: status
      };
    });
  };

  const handleBackToModule = () => {
    navigate(`/course/${activeProgram}`);
  };

  // Listen for storage changes (when modules are completed in CoursePlayer)
  useEffect(() => {
    const handleStorageChange = () => {
      const currentUser = JSON.parse(localStorage.getItem('current_user') || '{}');
      const userId = currentUser.id;
      if (userId) {
        const progress = getUserProgress(userId);
        setUserProgress(progress);
        setRefreshTrigger(prev => prev + 1);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    // Get current user
    const currentUser = JSON.parse(localStorage.getItem('current_user') || '{}');
    const userId = currentUser.id;
    
    if (userId) {
      // Get progress from localStorage
      const progress = getUserProgress(userId);
      setUserProgress(progress);
      
      // Get enrolled courses from user data
      const userData = JSON.parse(localStorage.getItem('current_user') || '{}');
      const enrolled = userData.enrolledCourses || [1, 4, 7, 10];
      setEnrolledCourses(enrolled);
      
      // Set active program to first enrolled course
      if (enrolled.length > 0 && activeProgram === '1') {
        setActiveProgram(enrolled[0].toString());
      }
    } else {
      // Default for demo
      setUserProgress({
        modulesCompleted: 0,
        hoursLearned: 0,
        tasksSubmitted: 0,
        currentStreak: 0,
        courseProgress: {}
      });
      setEnrolledCourses([1, 4, 7, 10]);
    }
  }, [refreshTrigger]);

  // Build programs list from enrolled courses with REAL progress
  const programs = enrolledCourses.map(courseId => {
    const course = coursesData[courseId];
    const courseProgress = userProgress?.courseProgress?.[courseId];
    return {
      id: courseId.toString(),
      name: course?.title || 'Course',
      progress: courseProgress?.percentage || 0,
      completedCount: courseProgress?.completedModules?.length || 0,
      totalModules: course?.modules?.length || 0,
      nextModule: getNextModuleName(course, courseProgress?.completedModules || [])
    };
  });

  const currentProgram = programs.find(p => p.id === activeProgram) || programs[0];

  // Calculate overall stats from REAL data
  const totalModulesCompleted = userProgress?.modulesCompleted || 0;
  const totalHoursLearned = userProgress?.hoursLearned?.toFixed(1) || 0;
  const totalTasksSubmitted = userProgress?.tasksSubmitted || 0;
  const currentStreak = userProgress?.currentStreak || 0;

  // Calculate total modules across all enrolled courses
  const totalModulesAcrossCourses = enrolledCourses.reduce((total, courseId) => {
    const course = coursesData[courseId];
    return total + (course?.modules?.length || 0);
  }, 0);

  // User journey stages (dynamic based on progress)
  const journeyStages = [
    { name: "Sign up", completed: true, icon: UserCheck },
    { name: "Choose program", completed: enrolledCourses.length > 0, icon: Target },
    { name: "Learn modules", completed: totalModulesCompleted > 0, icon: BookOpen },
    { name: "Submit tasks", completed: totalTasksSubmitted > 0, icon: FileText },
    { name: "Get feedback", completed: totalTasksSubmitted > 2, icon: MessageCircle },
    { name: "Earn certificate", completed: currentProgram?.progress >= 100, icon: Award }
  ];

  const milestones = getMilestones();

  // Accountability items with real data
  const accountabilityItems = [
    { type: "reminder", title: "Weekly reminder sent", detail: "Mon 8am — automatic", icon: Bell, color: "blue" },
    { type: "report", title: "Progress report", detail: `${totalModulesCompleted} modules completed`, icon: Mail, color: "green" },
    { type: "reflection", title: "Reflection journal", detail: `${totalTasksSubmitted} submissions`, icon: FileText, color: "orange" },
    { type: "feedback", title: "Mentor feedback", detail: "Available for completed modules", icon: MessageCircle, color: "purple" }
  ];

  if (!userProgress) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading progress...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Back Button */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={handleBackToModule}
            className="mb-4 flex items-center gap-2 text-white/80 hover:text-white transition group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
            <span className="text-sm">Back to Course</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My progress overview</h1>
          <p className="text-purple-100">Track your learning journey and celebrate your achievements</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid - Now using REAL data */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">{totalModulesCompleted}</span>
            </div>
            <p className="text-gray-600 text-sm">Modules completed</p>
            <p className="text-xs text-gray-400">of {totalModulesAcrossCourses} total</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">{totalHoursLearned}</span>
            </div>
            <p className="text-gray-600 text-sm">Hours learned</p>
            <p className="text-xs text-gray-400">Total learning time</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{totalTasksSubmitted}</span>
            </div>
            <p className="text-gray-600 text-sm">Tasks submitted</p>
            <p className="text-xs text-gray-400">Reflections & quizzes</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">{currentStreak}</span>
            </div>
            <p className="text-gray-600 text-sm">Current streak</p>
            <p className="text-xs text-gray-400">days in a row</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Journey & Milestones */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Journey Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                User journey
              </h2>
              <div className="flex flex-wrap items-center justify-between">
                {journeyStages.map((stage, index) => (
                  <React.Fragment key={stage.name}>
                    <div className="flex flex-col items-center text-center flex-1 min-w-[80px]">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        stage.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`}>
                        <stage.icon className={`w-5 h-5 ${stage.completed ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      <p className={`text-xs mt-2 font-medium ${stage.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                        {stage.name}
                      </p>
                    </div>
                    {index < journeyStages.length - 1 && (
                      <div className="flex-1 h-0.5 bg-gray-200 mx-2 hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Active Program Card */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-80">Active program</p>
                  <h3 className="text-xl font-bold">{currentProgram?.name || 'Select a course'}</h3>
                </div>
                <Award className="w-10 h-10 opacity-80" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall progress</span>
                  <span>{currentProgram?.progress || 0}%</span>
                </div>
                <div className="w-full h-2 bg-white/30 rounded-full">
                  <div 
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${currentProgram?.progress || 0}%` }}
                  />
                </div>
              </div>
              <p className="text-sm opacity-80">
                {currentProgram?.completedCount || 0} of {currentProgram?.totalModules || 0} modules completed
              </p>
            </div>

            {/* Milestones Timeline - Now shows REAL completion status */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Milestones
              </h2>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start gap-4">
                      <div className={`relative z-10 w-5 h-5 rounded-full mt-1 ${
                        milestone.status === 'completed' ? 'bg-green-500' :
                        milestone.status === 'current' ? 'bg-purple-600 ring-4 ring-purple-100' :
                        'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className={`font-semibold ${
                              milestone.status === 'completed' ? 'text-gray-900' :
                              milestone.status === 'current' ? 'text-purple-600' :
                              'text-gray-500'
                            }`}>
                              {milestone.title}
                            </p>
                            <p className="text-sm text-gray-400">{milestone.date}</p>
                          </div>
                          {milestone.status === 'completed' && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {milestone.status === 'current' && (
                            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">In progress</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accountability & Engagement */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Accountability & engagement
              </h2>
              
              <div className="space-y-4">
                {accountabilityItems.map((item, index) => {
                  const colorClasses = {
                    blue: "bg-blue-50 text-blue-600",
                    green: "bg-green-50 text-green-600",
                    orange: "bg-orange-50 text-orange-600",
                    purple: "bg-purple-50 text-purple-600"
                  };
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <div className={`p-2 rounded-lg ${colorClasses[item.color]}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Program Selector */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Your programs</h3>
              <div className="space-y-3">
                {programs.map(program => (
                  <button
                    key={program.id}
                    onClick={() => setActiveProgram(program.id)}
                    className={`w-full p-3 rounded-lg text-left transition ${
                      activeProgram === program.id
                        ? 'bg-purple-50 border border-purple-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">{program.name}</span>
                      <span className="text-sm text-gray-500">{program.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-purple-600 rounded-full transition-all"
                        style={{ width: `${program.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {program.completedCount} of {program.totalModules} modules
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3">Quick actions</h3>
              <div className="space-y-2">
                <Link to="/courses">
                  <button className="w-full py-2 bg-white rounded-lg text-purple-600 font-medium text-sm hover:shadow-md transition flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    Continue learning
                  </button>
                </Link>
                <button className="w-full py-2 bg-white rounded-lg text-gray-700 font-medium text-sm hover:shadow-md transition flex items-center justify-center gap-2">
                  <Bell className="w-4 h-4" />
                  Adjust nudge settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;