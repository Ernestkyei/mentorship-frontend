// Progress tracking service
const PROGRESS_KEY = 'user_progress';

export const getUserProgress = (userId) => {
  const allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  
  // ✅ Return ZERO progress for new users - NO fake data
  if (!allProgress[userId]) {
    return {
      modulesCompleted: 0,
      hoursLearned: 0,
      tasksSubmitted: 0,
      currentStreak: 0,
      lastActiveDate: null,
      courseProgress: {}
    };
  }
  
  return allProgress[userId];
};

export const completeModule = (userId, courseId, moduleId, moduleDurationMinutes) => {
  const allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  let userProgress = allProgress[userId];
  
  // ✅ Initialize if doesn't exist
  if (!userProgress) {
    userProgress = {
      modulesCompleted: 0,
      hoursLearned: 0,
      tasksSubmitted: 0,
      currentStreak: 0,
      lastActiveDate: null,
      courseProgress: {}
    };
  }
  
  if (!userProgress.courseProgress[courseId]) {
    userProgress.courseProgress[courseId] = {
      completedModules: [],
      percentage: 0
    };
  }
  
  const courseProgress = userProgress.courseProgress[courseId];
  
  // ✅ Only add if not already completed
  if (!courseProgress.completedModules.includes(moduleId)) {
    courseProgress.completedModules.push(moduleId);
    userProgress.modulesCompleted += 1;
    
    const totalModules = getCourseTotalModules(courseId);
    courseProgress.percentage = Math.round((courseProgress.completedModules.length / totalModules) * 100);
    
    userProgress.hoursLearned += moduleDurationMinutes / 60;
    
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (userProgress.lastActiveDate === today) {
      // Already active today
    } else if (userProgress.lastActiveDate === yesterday.toDateString()) {
      userProgress.currentStreak = (userProgress.currentStreak || 0) + 1;
    } else {
      userProgress.currentStreak = 1;
    }
    userProgress.lastActiveDate = today;
    
    console.log('✅ Module completed! New totals:', {
      modulesCompleted: userProgress.modulesCompleted,
      hoursLearned: userProgress.hoursLearned,
      coursePercentage: courseProgress.percentage
    });
  }
  
  allProgress[userId] = userProgress;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  
  // Dispatch storage event for real-time updates
  window.dispatchEvent(new Event('storage'));
  
  return userProgress;
};

export const submitTask = (userId) => {
  const allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  let userProgress = allProgress[userId];
  
  if (!userProgress) {
    userProgress = {
      modulesCompleted: 0,
      hoursLearned: 0,
      tasksSubmitted: 0,
      currentStreak: 0,
      lastActiveDate: null,
      courseProgress: {}
    };
  }
  
  userProgress.tasksSubmitted = (userProgress.tasksSubmitted || 0) + 1;
  
  allProgress[userId] = userProgress;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  
  window.dispatchEvent(new Event('storage'));
  
  return userProgress;
};

const getCourseTotalModules = (courseId) => {
  const totals = {
    1: 7, 2: 6, 3: 5, 4: 7, 5: 4, 6: 4, 7: 4, 8: 4, 10: 4, 11: 4
  };
  return totals[courseId] || 4;
};

// ✅ Optional: Add a function to reset progress (for testing)
export const resetProgress = (userId) => {
  const allProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  allProgress[userId] = {
    modulesCompleted: 0,
    hoursLearned: 0,
    tasksSubmitted: 0,
    currentStreak: 0,
    lastActiveDate: null,
    courseProgress: {}
  };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  window.dispatchEvent(new Event('storage'));
  return allProgress[userId];
};