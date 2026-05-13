// Mock user database (stored in localStorage)
const MOCK_USERS_KEY = 'mock_users';

// Initialize mock users if not exists - START EMPTY
const initMockUsers = () => {
  if (!localStorage.getItem(MOCK_USERS_KEY)) {
    // ✅ No default users - start completely empty
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify([]));
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

// Mock Sign Up
export const signup = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { fullName, email, password } = userData;
      const users = getUsers();
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        reject({ message: 'User already exists with this email' });
        return;
      }
      
      // Create new user with ZERO progress
      const newUser = {
        id: Date.now().toString(),
        name: fullName,
        email: email,
        password: password,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=6c63ff&color=fff`,
        createdAt: new Date().toISOString(),
        enrolledCourses: [],
        progress: {}
      };
      
      users.push(newUser);
      saveUsers(users);
      
      const token = `mock_token_${newUser.id}_${Date.now()}`;
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('current_user', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
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
      
      const token = `mock_token_${user.id}_${Date.now()}`;
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('current_user', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
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