import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, TrendingUp, Brain, Zap } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    focusArea: 'leadership'
  });
  const [isLoading, setIsLoading] = useState(false);

  const focusAreas = [
    { id: 'leadership', name: 'Leadership development', icon: Shield, color: 'purple' },
    { id: 'career', name: 'Career growth', icon: TrendingUp, color: 'blue' },
    { id: 'mindset', name: 'Growth mindset', icon: Brain, color: 'green' },
    { id: 'productivity', name: 'Productivity & habits', icon: Zap, color: 'orange' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Store user data in localStorage for demo
      localStorage.setItem('user', JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        focusArea: formData.focusArea
      }));
      localStorage.setItem('isAuthenticated', 'true');
      
      setIsLoading(false);
      navigate('/courses');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Side - Benefits Section with Background Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center opacity-30" />
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm mb-4">
                <span>✨</span>
                <span>Join 10,000+ learners</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Start your transformation today
              </h3>
              <p className="text-purple-100 mb-6">
                Get access to expert mentors, structured programs, and track your growth — all at your own pace.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Learn from expert coaches",
                "Self-paced video lessons",
                "Personalized feedback",
                "Track your progress",
                "Earn certificates"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">"This platform changed how I grow"</p>
                  <p className="text-xs text-purple-200">— Sarah Johnson, Leadership Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Start your self-paced mentoring journey
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Ernest Kyei"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="ernest@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Focus Area Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I want to focus on
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {focusAreas.map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, focusArea: area.id })}
                      className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                        formData.focusArea === area.id
                          ? 'border-purple-500 bg-purple-50 ring-2 ring-purple-500'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <area.icon className={`h-5 w-5 ${
                        formData.focusArea === area.id ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                      <span className={`text-sm font-medium ${
                        formData.focusArea === area.id ? 'text-purple-700' : 'text-gray-700'
                      }`}>
                        {area.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating account...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Create account & start learning
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </div>
                  )}
                </button>
              </div>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500 transition">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>

            {/* Demo Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-700 text-center">
                Create an account to start your mentoring journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;