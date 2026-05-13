

export const coursesData = {

  // COURSE 1: Executive Leadership Program
  1: {
    id: 1,
    title: "Executive leadership program",
    mentor: {
      name: "Dr. Sarah Collins",
      title: "Executive Coach",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      bio: "15+ years coaching C-suite executives"
    },
    overallProgress: 65,
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    modules: [
      {
        id: 1,
        title: "Leadership fundamentals",
        duration: "12 min",
        status: "done",
        videoProgress: 100,
        // Simon Sinek: Why Good Leaders Make You Feel Safe - TED Official
        videoUrl: "https://www.youtube.com/embed/lmyZMtPVodo?rel=0"
      },
      {
        id: 2,
        title: "Self-awareness & EQ",
        duration: "10 min",
        status: "done",
        videoProgress: 100,
        // What is Emotional Intelligence - Official TED-Ed
        videoUrl: "https://www.youtube.com/embed/D6_J7FfgWVc?rel=0"
      },
      {
        id: 3,
        title: "Strategic thinking",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 35,
        // Why the secret to success is setting the right goals - John Doerr TED
        videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
      },
      {
        id: 4,
        title: "Communication skills",
        duration: "11 min",
        status: "in-progress",
        videoProgress: 0,
        // Julian Treasure: How to Speak So That People Want to Listen - TED Official
        videoUrl: "https://www.youtube.com/embed/eIho2S0ZahI?rel=0"
      },
      {
        id: 5,
        title: "Team dynamics",
        duration: "15 min",
        status: "in-progress",
        videoProgress: 0,
        // Dan Pink: The Puzzle of Motivation - TED Official
        videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
      },
      {
        id: 6,
        title: "Decision making",
        duration: "13 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      },
      {
        id: 7,
        title: "Change management",
        duration: "16 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Set the Right Goals and Stay Motivated - Ayelet Fishbach TED
        videoUrl: "https://www.youtube.com/embed/g3CvsPAF3_0?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: true, type: "video" },
      { id: 2, title: "Submit reflection journal", completed: false, type: "reflection", dueIn: "2 days" },
      { id: 3, title: "Quiz: Strategic thinking", completed: false, type: "quiz", unlocked: false }
    ],
    framework: [
      "Define your vision clearly",
      "Identify key leverage points",
      "Map stakeholder influence",
      "Build decision frameworks"
    ],
    mentorFeedback: "Your module 2 reflection showed great self-awareness. For this module, focus on identifying 2-3 real decisions you face."
  },

  // COURSE 2: Team Leadership Mastery
  2: {
    id: 2,
    title: "Team leadership mastery",
    mentor: {
      name: "Dr. Sarah Collins",
      title: "Executive Coach",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      bio: "15+ years coaching C-suite executives"
    },
    overallProgress: 30,
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    modules: [
      {
        id: 1,
        title: "Building trust",
        duration: "10 min",
        status: "done",
        videoProgress: 100,
        // Simon Sinek: Why Good Leaders Make You Feel Safe
        videoUrl: "https://www.youtube.com/embed/lmyZMtPVodo?rel=0"
      },
      {
        id: 2,
        title: "Conflict resolution",
        duration: "12 min",
        status: "in-progress",
        videoProgress: 0,
        // Dan Pink: The Puzzle of Motivation - builds team conflict understanding
        videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
      },
      {
        id: 3,
        title: "Motivating teams",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Set the Right Goals - Ayelet Fishbach TED 2024
        videoUrl: "https://www.youtube.com/embed/g3CvsPAF3_0?rel=0"
      },
      {
        id: 4,
        title: "Delegation skills",
        duration: "11 min",
        status: "in-progress",
        videoProgress: 0,
        // Why the secret to success is setting the right goals - John Doerr
        videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
      },
      {
        id: 5,
        title: "Performance management",
        duration: "13 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      },
      {
        id: 6,
        title: "Leading remote teams",
        duration: "15 min",
        status: "in-progress",
        videoProgress: 0,
        // Julian Treasure: How to Speak So That People Want to Listen
        videoUrl: "https://www.youtube.com/embed/eIho2S0ZahI?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: true, type: "video" },
      { id: 2, title: "Team assessment", completed: false, type: "reflection", dueIn: "3 days" }
    ],
    framework: [
      "Assess team dynamics",
      "Identify conflict sources",
      "Build communication channels",
      "Create action plan"
    ],
    mentorFeedback: "Great start! Focus on building trust first before diving into conflict resolution."
  },

  // COURSE 3: Strategic Decision Making
  3: {
    id: 3,
    title: "Strategic decision making",
    mentor: {
      name: "Dr. Sarah Collins",
      title: "Executive Coach",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      bio: "15+ years coaching C-suite executives"
    },
    overallProgress: 15,
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800",
    modules: [
      {
        id: 1,
        title: "Decision frameworks",
        duration: "12 min",
        status: "in-progress",
        videoProgress: 0,
        // Why the secret to success is setting the right goals - John Doerr TED
        videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
      },
      {
        id: 2,
        title: "Risk assessment",
        duration: "10 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      },
      {
        id: 3,
        title: "Stakeholder analysis",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 0,
        // Simon Sinek: Why Good Leaders Make You Feel Safe
        videoUrl: "https://www.youtube.com/embed/lmyZMtPVodo?rel=0"
      },
      {
        id: 4,
        title: "Data-driven decisions",
        duration: "11 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Set the Right Goals - Ayelet Fishbach TED
        videoUrl: "https://www.youtube.com/embed/g3CvsPAF3_0?rel=0"
      },
      {
        id: 5,
        title: "Implementation strategy",
        duration: "16 min",
        status: "in-progress",
        videoProgress: 0,
        // Dan Pink: The Puzzle of Motivation - TED Official
        videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: false, type: "video" },
      { id: 2, title: "Apply framework to real decision", completed: false, type: "reflection", dueIn: "2 days" }
    ],
    framework: [
      "Define the problem",
      "Gather information",
      "Evaluate options",
      "Make decision",
      "Review outcome"
    ],
    mentorFeedback: "Ready to dive into strategic thinking? Start with the decision framework module."
  },

  // COURSE 4: Career Acceleration
  4: {
    id: 4,
    title: "Career acceleration",
    mentor: {
      name: "Michael Chen",
      title: "Career Coach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      bio: "Former Google recruiter, 10+ years in career development"
    },
    overallProgress: 45,
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    modules: [
      {
        id: 1,
        title: "Career clarity",
        duration: "8 min",
        status: "done",
        videoProgress: 100,
        // Why You Should Stop Setting Goals - Emmanuel Acho TED 2023
        videoUrl: "https://www.youtube.com/embed/AA4N5ZFefqs?rel=0"
      },
      {
        id: 2,
        title: "Skill assessment",
        duration: "10 min",
        status: "done",
        videoProgress: 100,
        // How to set goals you'll actually accomplish - Chuck Wachendorfer TEDx 2025
        videoUrl: "https://www.youtube.com/embed/TKVAGxoU2AM?rel=0"
      },
      {
        id: 3,
        title: "Portfolio building",
        duration: "15 min",
        status: "in-progress",
        videoProgress: 0,
        // How to achieve your goals with a single page - Sarah Glova TEDx 2024
        videoUrl: "https://www.youtube.com/embed/LeXSrEMXvQk?rel=0"
      },
      {
        id: 4,
        title: "Networking strategies",
        duration: "12 min",
        status: "in-progress",
        videoProgress: 0,
        // Julian Treasure: How to Speak So That People Want to Listen
        videoUrl: "https://www.youtube.com/embed/eIho2S0ZahI?rel=0"
      },
      {
        id: 5,
        title: "Job search mastery",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 0,
        // Why the secret to success is setting the right goals - John Doerr TED
        videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
      },
      {
        id: 6,
        title: "Negotiation skills",
        duration: "11 min",
        status: "in-progress",
        videoProgress: 0,
        // Dan Pink: The Puzzle of Motivation
        videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
      },
      {
        id: 7,
        title: "Personal branding",
        duration: "13 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: true, type: "video" },
      { id: 2, title: "Update your portfolio", completed: false, type: "reflection", dueIn: "3 days" }
    ],
    framework: [
      "Identify your career goals",
      "Assess current skills gap",
      "Build your portfolio",
      "Create networking plan"
    ],
    mentorFeedback: "Great progress on your portfolio. Let's focus on building more concrete examples of your work."
  },

  // COURSE 5: High-Performance Habits
  5: {
    id: 5,
    title: "High-performance habits",
    mentor: {
      name: "James Wilson",
      title: "Productivity Coach",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      bio: "Author of 'Peak Performance Daily'"
    },
    overallProgress: 0,
    thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
    modules: [
      {
        id: 1,
        title: "Morning routines",
        duration: "10 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      },
      {
        id: 2,
        title: "Deep work techniques",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 0,
        // Why the secret to success is setting the right goals - John Doerr TED
        videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
      },
      {
        id: 3,
        title: "Time blocking",
        duration: "11 min",
        status: "in-progress",
        videoProgress: 0,
        // How to set goals you'll actually accomplish - Chuck Wachendorfer TEDx
        videoUrl: "https://www.youtube.com/embed/TKVAGxoU2AM?rel=0"
      },
      {
        id: 4,
        title: "Goal setting systems",
        duration: "13 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Set the Right Goals and Stay Motivated - Ayelet Fishbach TED 2024
        videoUrl: "https://www.youtube.com/embed/g3CvsPAF3_0?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: false, type: "video" },
      { id: 2, title: "Create your habit tracker", completed: false, type: "reflection", dueIn: "2 days" }
    ],
    framework: [
      "Identify key habits",
      "Build systems",
      "Track progress daily",
      "Review weekly"
    ],
    mentorFeedback: "Start small. One habit at a time builds lasting change."
  },

  // COURSE 6: Growth Mindset Coaching
  6: {
    id: 6,
    title: "Growth mindset coaching",
    mentor: {
      name: "Dr. Emily Watson",
      title: "Mindset Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      bio: "Clinical psychologist specializing in growth mindset"
    },
    overallProgress: 0,
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    modules: [
      {
        id: 1,
        title: "What is growth mindset",
        duration: "12 min",
        status: "in-progress",
        videoProgress: 0,
        // Carol Dweck: The power of believing that you can improve - TED Official
        videoUrl: "https://www.youtube.com/embed/_X0mgOOSpLU?rel=0"
      },
      {
        id: 2,
        title: "Overcoming fixed mindset",
        duration: "15 min",
        status: "in-progress",
        videoProgress: 0,
        // Carol Dweck: The power of believing - alternate verified upload
        videoUrl: "https://www.youtube.com/embed/6pqbj_Xe4-w?rel=0"
      },
      {
        id: 3,
        title: "Embracing challenges",
        duration: "10 min",
        status: "in-progress",
        videoProgress: 0,
        // Dan Pink: The Puzzle of Motivation - TED Official
        videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
      },
      {
        id: 4,
        title: "Learning from failure",
        duration: "14 min",
        status: "in-progress",
        videoProgress: 0,
        // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx
        videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
      }
    ],
    tasks: [
      { id: 1, title: "Watch module video", completed: false, type: "video" },
      { id: 2, title: "Mindset reflection journal", completed: false, type: "reflection", dueIn: "2 days" }
    ],
    framework: [
      "Recognize fixed mindset triggers",
      "Reframe challenges as opportunities",
      "Celebrate effort, not just results",
      "Learn from setbacks"
    ],
    mentorFeedback: "Your mindset determines your success. Start with the growth mindset basics."
  },
  // COURSE 7: Resilience & Stress Management
7: {
  id: 7,
  title: "Resilience & stress management",
  mentor: {
    name: "Dr. Emily Watson",
    title: "Mindset Coach",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    bio: "Clinical psychologist specializing in mindset and resilience"
  },
  overallProgress: 0,
  thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
  modules: [
    {
      id: 1,
      title: "Understanding stress",
      duration: "10 min",
      status: "in-progress",
      videoProgress: 0,
      // Kelly McGonigal: How to Make Stress Your Friend - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/RcGyVTAoXEU?rel=0"
    },
    {
      id: 2,
      title: "Building resilience",
      duration: "12 min",
      status: "in-progress",
      videoProgress: 0,
      // Carol Dweck: The power of believing that you can improve - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/_X0mgOOSpLU?rel=0"
    },
    {
      id: 3,
      title: "Mindfulness practices",
      duration: "11 min",
      status: "in-progress",
      videoProgress: 0,
      // Dan Pink: The Puzzle of Motivation - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
    },
    {
      id: 4,
      title: "Recovery & balance",
      duration: "13 min",
      status: "in-progress",
      videoProgress: 0,
      // How to Achieve Your Most Ambitious Goals - Stephen Duneier TEDx ✅
      videoUrl: "https://www.youtube.com/embed/TQMbvJNRpLE?rel=0"
    }
  ],
  tasks: [
    { id: 1, title: "Watch module video", completed: false, type: "video" },
    { id: 2, title: "Stress journal entry", completed: false, type: "reflection", dueIn: "2 days" }
  ],
  framework: [
    "Identify stressors",
    "Build coping strategies",
    "Practice mindfulness",
    "Create recovery plan"
  ],
  mentorFeedback: "Stress is normal. How you respond makes all the difference."
},

// COURSE 8: Confidence & Self-Belief
8: {
  id: 8,
  title: "Confidence & self-belief",
  mentor: {
    name: "Dr. Emily Watson",
    title: "Mindset Coach",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    bio: "Clinical psychologist specializing in mindset and resilience"
  },
  overallProgress: 0,
  thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  modules: [
    {
      id: 1,
      title: "Overcoming imposter syndrome",
      duration: "10 min",
      status: "in-progress",
      videoProgress: 0,
      // Mike Cannon-Brookes: How you can use impostor syndrome to your benefit - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/ZkwqZfvbdFw?rel=0"
    },
    {
      id: 2,
      title: "Building self-confidence",
      duration: "12 min",
      status: "in-progress",
      videoProgress: 0,
      // Amy Cuddy: Your Body Language May Shape Who You Are - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/Ks-_Mh1QhMc?rel=0"
    },
    {
      id: 3,
      title: "What is imposter syndrome",
      duration: "9 min",
      status: "in-progress",
      videoProgress: 0,
      // What is imposter syndrome and how to combat it - TED-Ed Official ✅
      videoUrl: "https://www.youtube.com/embed/ZQUxL4Jm1Lo?rel=0"
    },
    {
      id: 4,
      title: "Taking action despite fear",
      duration: "14 min",
      status: "in-progress",
      videoProgress: 0,
      // Carol Dweck: The power of believing that you can improve - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/_X0mgOOSpLU?rel=0"
    }
  ],
  tasks: [
    { id: 1, title: "Watch module video", completed: false, type: "video" },
    { id: 2, title: "Confidence journal", completed: false, type: "reflection", dueIn: "2 days" }
  ],
  framework: [
    "Recognize your worth",
    "Celebrate small wins",
    "Reframe self-doubt",
    "Take action despite fear"
  ],
  mentorFeedback: "You belong here. Your voice matters. Start before you feel ready."
},

// COURSE 10: Time Mastery & Deep Work
10: {
  id: 10,
  title: "Time mastery & deep work",
  mentor: {
    name: "James Wilson",
    title: "Productivity Coach",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    bio: "Author of 'Peak Performance Daily'"
  },
  overallProgress: 0,
  thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  modules: [
    {
      id: 1,
      title: "Deep work principles",
      duration: "10 min",
      status: "in-progress",
      videoProgress: 0,
      // How to manage your time more effectively - Brian Christian TED-Ed ✅
      videoUrl: "https://www.youtube.com/embed/iDbdXTMnOmE?rel=0"
    },
    {
      id: 2,
      title: "Eliminating distractions",
      duration: "12 min",
      status: "in-progress",
      videoProgress: 0,
      // How to set goals you'll actually accomplish - Chuck Wachendorfer TEDx ✅
      videoUrl: "https://www.youtube.com/embed/TKVAGxoU2AM?rel=0"
    },
    {
      id: 3,
      title: "Time blocking mastery",
      duration: "11 min",
      status: "in-progress",
      videoProgress: 0,
      // Why the secret to success is setting the right goals - John Doerr TED ✅
      videoUrl: "https://www.youtube.com/embed/L4N1q4RNi9I?rel=0"
    },
    {
      id: 4,
      title: "Building focus habits",
      duration: "13 min",
      status: "in-progress",
      videoProgress: 0,
      // How to Set the Right Goals and Stay Motivated - Ayelet Fishbach TED ✅
      videoUrl: "https://www.youtube.com/embed/g3CvsPAF3_0?rel=0"
    }
  ],
  tasks: [
    { id: 1, title: "Watch module video", completed: false, type: "video" },
    { id: 2, title: "Create your focus schedule", completed: false, type: "reflection", dueIn: "2 days" }
  ],
  framework: [
    "Block deep work time",
    "Eliminate interruptions",
    "Track focus sessions",
    "Review weekly output"
  ],
  mentorFeedback: "Depth over breadth. One focused hour beats four distracted ones."
},

// COURSE 11: Communication & Influence
11: {
  id: 11,
  title: "Communication & influence",
  mentor: {
    name: "Lisa Rodriguez",
    title: "Communication Coach",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    bio: "Executive communication trainer, 12+ years"
  },
  overallProgress: 0,
  thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
  modules: [
    {
      id: 1,
      title: "Active listening",
      duration: "10 min",
      status: "in-progress",
      videoProgress: 0,
      // Julian Treasure: How to Speak So That People Want to Listen - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/eIho2S0ZahI?rel=0"
    },
    {
      id: 2,
      title: "Persuasive speaking",
      duration: "12 min",
      status: "in-progress",
      videoProgress: 0,
      // Simon Sinek: Why Good Leaders Make You Feel Safe - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/lmyZMtPVodo?rel=0"
    },
    {
      id: 3,
      title: "Body language & presence",
      duration: "11 min",
      status: "in-progress",
      videoProgress: 0,
      // Amy Cuddy: Your Body Language May Shape Who You Are - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/Ks-_Mh1QhMc?rel=0"
    },
    {
      id: 4,
      title: "Storytelling for impact",
      duration: "13 min",
      status: "in-progress",
      videoProgress: 0,
      // Dan Pink: The Puzzle of Motivation - TED Official ✅
      videoUrl: "https://www.youtube.com/embed/rrkrvAUbU9Y?rel=0"
    }
  ],
  tasks: [
    { id: 1, title: "Watch module video", completed: false, type: "video" },
    { id: 2, title: "Practice speech recording", completed: false, type: "reflection", dueIn: "3 days" }
  ],
  framework: [
    "Listen first",
    "Speak with purpose",
    "Use confident body language",
    "Tell compelling stories"
  ],
  mentorFeedback: "Communication is the bridge between ideas and impact. Master it and everything changes."
},
};