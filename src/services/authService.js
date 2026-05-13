// Mock user database (stored in localStorage)
const MOCK_USERS_KEY = 'mock_users';

// Initialize mock users if not exists
const initMockUsers = () => {
  if (!localStorage.getItem(MOCK_USERS_KEY)) {
    const defaultUsers = [
      {
        id: '1',
        name: 'Ernest Kyei',
        email: 'ernest@example.com',
        password: 'password123',
        focusArea: 'leadership',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        createdAt: new Date().toISOString(),
        enrolledCourses: [1, 4],
        progress: {
          1: 45,
          4: 20
        }
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        password: 'password123',
        focusArea: 'career',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        createdAt: new Date().toISOString(),
        enrolledCourses: [2, 5, 7],
        progress: {
          2: 80,
          5: 30,
          7: 60
        }
      },
      {
        id: '3',
        name: 'Michael Chen',
        email: 'michael@example.com',
        password: 'password123',
        focusArea: 'mindset',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        createdAt: new Date().toISOString(),
        enrolledCourses: [3, 8, 10],
        progress: {
          3: 15,
          8: 50,
          10: 90
        }
      },
      {
        id: '4',
        name: 'Jessica Williams',
        email: 'jessica@example.com',
        password: 'password123',
        focusArea: 'productivity',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        createdAt: new Date().toISOString(),
        enrolledCourses: [6, 9, 11, 12],
        progress: {
          6: 100,
          9: 45,
          11: 25,
          12: 60
        }
      }
    ];
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(defaultUsers));
  }
};

// Get all users
const getUsers = () => {
  initMockUsers();
  return JSON.parse(localStorage.getItem(MOCK_USERS_KEY));
};

// Save users
const saveUsers = (users) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

// Get user by ID
export const getUserById = (userId) => {
  const users = getUsers();
  return users.find(u => u.id === userId);
};

// Get user progress for a specific course
export const getUserCourseProgress = (userId, courseId) => {
  const user = getUserById(userId);
  if (user && user.progress) {
    return user.progress[courseId] || 0;
  }
  return 0;
};

// Update user progress
export const updateProgress = async (userId, courseId, progressPercent) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = getUsers();
      const userIndex = users.findIndex(u => u.id === userId);
      
      if (userIndex !== -1) {
        if (!users[userIndex].progress) {
          users[userIndex].progress = {};
        }
        users[userIndex].progress[courseId] = progressPercent;
        
        // Also ensure course is in enrolledCourses
        if (!users[userIndex].enrolledCourses.includes(courseId)) {
          users[userIndex].enrolledCourses.push(courseId);
        }
        
        saveUsers(users);
        
        // Update current session
        const currentUser = JSON.parse(localStorage.getItem('current_user') || '{}');
        if (currentUser.id === userId) {
          currentUser.progress = users[userIndex].progress;
          currentUser.enrolledCourses = users[userIndex].enrolledCourses;
          localStorage.setItem('current_user', JSON.stringify(currentUser));
        }
        
        resolve({ success: true, progress: progressPercent });
      } else {
        resolve({ success: false, error: 'User not found' });
      }
    }, 500);
  });
};

// Enroll user in a course
export const enrollInCourse = async (userId, courseId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = getUsers();
      const userIndex = users.findIndex(u => u.id === userId);
      
      if (userIndex !== -1) {
        if (!users[userIndex].enrolledCourses) {
          users[userIndex].enrolledCourses = [];
        }
        
        if (!users[userIndex].enrolledCourses.includes(courseId)) {
          users[userIndex].enrolledCourses.push(courseId);
          users[userIndex].progress = users[userIndex].progress || {};
          users[userIndex].progress[courseId] = 0;
          saveUsers(users);
          
          // Update current session
          const currentUser = JSON.parse(localStorage.getItem('current_user') || '{}');
          if (currentUser.id === userId) {
            currentUser.enrolledCourses = users[userIndex].enrolledCourses;
            currentUser.progress = users[userIndex].progress;
            localStorage.setItem('current_user', JSON.stringify(currentUser));
          }
        }
        
        resolve({ success: true, enrolled: true });
      } else {
        resolve({ success: false, error: 'User not found' });
      }
    }, 500);
  });
};

// Get user's enrolled courses with progress
export const getUserEnrolledCourses = (userId) => {
  const user = getUserById(userId);
  if (user) {
    return {
      enrolledCourses: user.enrolledCourses || [],
      progress: user.progress || {}
    };
  }
  return { enrolledCourses: [], progress: {} };
};

// Mock Sign Up
export const signup = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { fullName, email, password, focusArea } = userData;
      const users = getUsers();
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        reject({ message: 'User already exists with this email' });
        return;
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: fullName,
        email: email,
        password: password,
        focusArea: focusArea,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=6c63ff&color=fff`,
        createdAt: new Date().toISOString(),
        enrolledCourses: [],
        progress: {}
      };
      
      users.push(newUser);
      saveUsers(users);
      
      // Generate mock token
      const token = `mock_token_${newUser.id}_${Date.now()}`;
      
      // Store current session
      localStorage.setItem('auth_token', token);
      localStorage.setItem('current_user', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        focusArea: newUser.focusArea,
        avatar: newUser.avatar,
        enrolledCourses: newUser.enrolledCourses,
        progress: newUser.progress
      }));
      localStorage.setItem('isAuthenticated', 'true');
      
      resolve({
        success: true,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          focusArea: newUser.focusArea,
          avatar: newUser.avatar,
          enrolledCourses: newUser.enrolledCourses,
          progress: newUser.progress
        },
        token: token
      });
    }, 800);
  });
};

// Mock Sign In
export const signin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        reject({ message: 'Invalid email or password' });
        return;
      }
      
      // Generate mock token
      const token = `mock_token_${user.id}_${Date.now()}`;
      
      // Store current session
      localStorage.setItem('auth_token', token);
      localStorage.setItem('current_user', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        focusArea: user.focusArea,
        avatar: user.avatar,
        enrolledCourses: user.enrolledCourses || [],
        progress: user.progress || {}
      }));
      localStorage.setItem('isAuthenticated', 'true');
      
      resolve({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          focusArea: user.focusArea,
          avatar: user.avatar,
          enrolledCourses: user.enrolledCourses || [],
          progress: user.progress || {}
        },
        token: token
      });
    }, 800);
  });
};

// Mock Sign Out
export const signout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('current_user');
      localStorage.removeItem('isAuthenticated');
      resolve({ success: true });
    }, 300);
  });
};

// Get current user
export const getCurrentUser = () => {
  const userJson = localStorage.getItem('current_user');
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};

// Check if authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};