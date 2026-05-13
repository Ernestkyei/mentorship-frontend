import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
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
  Zap
} from 'lucide-react';

const Progress = () => {
  const [activeProgram, setActiveProgram] = useState('executive');

  // User progress data
  const progressData = {
    modulesCompleted: 8,
    totalModules: 12,
    hoursLearned: 14,
    tasksSubmitted: 6,
    currentStreak: 5,
    overallProgress: 25
  };

  // User journey stages
  const journeyStages = [
    { name: "Sign up", completed: true, icon: UserCheck },
    { name: "Choose program", completed: true, icon: Target },
    { name: "Learn modules", completed: true, icon: BookOpen },
    { name: "Submit tasks", completed: true, icon: FileText },
    { name: "Get feedback", completed: true, icon: MessageCircle },
    { name: "Earn certificate", completed: false, icon: Award }
  ];

  // Milestones data
  const milestones = [
    { week: 1, title: "Foundations complete", date: "May 1", status: "completed" },
    { week: 2, title: "Self-awareness module", date: "May 8", status: "completed" },
    { week: 3, title: "Strategic thinking", date: "May 15", status: "current" },
    { week: 4, title: "Communication", date: "May 22", status: "upcoming" },
    { week: 5, title: "Certificate earned", date: "Jun 12", status: "upcoming" }
  ];

  // Active programs
  const programs = [
    { id: "executive", name: "Executive leadership", progress: 25, nextModule: "Strategic thinking" },
    { id: "career", name: "Career acceleration", progress: 45, nextModule: "Portfolio building" }
  ];

  // Accountability items
  const accountabilityItems = [
    { type: "reminder", title: "Weekly reminder sent", detail: "Mon 8am — automatic", icon: Bell, color: "blue" },
    { type: "report", title: "Progress report emailed", detail: "Every Sunday", icon: Mail, color: "green" },
    { type: "reflection", title: "Reflection journal due", detail: "In 2 days", icon: FileText, color: "orange" },
    { type: "feedback", title: "Mentor feedback received", detail: "3 hours ago", icon: MessageCircle, color: "purple" }
  ];

  const currentProgram = programs.find(p => p.id === activeProgram);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My progress overview</h1>
          <p className="text-purple-100">Track your learning journey and celebrate your achievements</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">{progressData.modulesCompleted}</span>
            </div>
            <p className="text-gray-600 text-sm">Modules completed</p>
            <p className="text-xs text-gray-400">of {progressData.totalModules} total</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">{progressData.hoursLearned}</span>
            </div>
            <p className="text-gray-600 text-sm">Hours learned</p>
            <p className="text-xs text-gray-400">Total learning time</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{progressData.tasksSubmitted}</span>
            </div>
            <p className="text-gray-600 text-sm">Tasks submitted</p>
            <p className="text-xs text-gray-400">Reflections & quizzes</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">{progressData.currentStreak}</span>
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
                  <h3 className="text-xl font-bold">{currentProgram.name}</h3>
                </div>
                <Award className="w-10 h-10 opacity-80" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall progress</span>
                  <span>{currentProgram.progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/30 rounded-full">
                  <div 
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${currentProgram.progress}%` }}
                  />
                </div>
              </div>
              <p className="text-sm opacity-80">Next: {currentProgram.nextModule}</p>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Milestones
              </h2>
              <div className="relative">
                {/* Timeline line */}
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
                              Week {milestone.week} — {milestone.title}
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
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3">Quick actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2 bg-white rounded-lg text-purple-600 font-medium text-sm hover:shadow-md transition flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Continue learning
                </button>
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