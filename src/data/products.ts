// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Special cases for courses with custom preview images
  if (productId === 1) {
    return "/images/preview_course_1.png";
  }
  if (productId === 2) {
    return "/images/preview_course_2.png";
  }
  if (productId === 3) {
    return "/images/preview_course_3.png";
  }
  if (productId === 4) {
    return "/images/preview_course_4.png";
  }
  if (productId === 5) {
    return "/images/preview_course_5.png";
  }
  if (productId === 6) {
    return "/images/preview_course_6.png";
  }
  if (productId === 7) {
    return "/images/preview_course_7.png";
  }
  if (productId === 8) {
    return "/images/preview_course_8.png";
  }
  if (productId === 9) {
    return "/images/preview_course_9.png";
  }
  if (productId === 10) {
    return "/images/preview_course_10.png";
  }
  if (productId === 11) {
    return "/images/preview_course_11.png";
  }
  if (productId === 12) {
    return "/images/extra-cover.jpg";
  }
  if (productId === 13) {
    return "/images/extra-cover.jpg";
  }
  if (productId === 14) {
    return "/images/extra-cover.jpg";
  }
  if (productId === 15) {
    return "/images/extra-cover.jpg";
  }
  if (productId === 16) {
    return "/images/extra-cover.jpg";
  }
  if (productId === 17) {
    return "/images/extra-cover.jpg";
  }
  
  // For other courses, return placeholder
  return `https://via.placeholder.com/400x300/667eea/ffffff?text=AI+Course+${productId}`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  if (productId === 1) {
    return ["/images/preview_course_1.png"];
  }
  if (productId === 2) {
    return ["/images/preview_course_2.png"];
  }
  if (productId === 3) {
    return ["/images/preview_course_3.png"];
  }
  if (productId === 4) {
    return ["/images/preview_course_4.png"];
  }
  if (productId === 5) {
    return ["/images/preview_course_5.png"];
  }
  if (productId === 6) {
    return ["/images/preview_course_6.png"];
  }
  if (productId === 7) {
    return ["/images/preview_course_7.png"];
  }
  if (productId === 8) {
    return ["/images/preview_course_8.png"];
  }
  if (productId === 9) {
    return ["/images/preview_course_9.png"];
  }
  if (productId === 10) {
    return ["/images/preview_course_10.png"];
  }
  if (productId === 11) {
    return ["/images/preview_course_11.png"];
  }
  if (productId === 12) {
    return ["/images/extra-cover.jpg"];
  }
  if (productId === 13) {
    return ["/images/extra-cover.jpg"];
  }
  if (productId === 14) {
    return ["/images/extra-cover.jpg"];
  }
  if (productId === 15) {
    return ["/images/extra-cover.jpg"];
  }
  if (productId === 16) {
    return ["/images/extra-cover.jpg"];
  }
  if (productId === 17) {
    return ["/images/extra-cover.jpg"];
  }
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/video_preview_1.mp4";
  }
  if (productId === 2) {
    return "/videos/video_preview_2.mp4";
  }
  if (productId === 3) {
    return "/videos/video_preview_3.mp4";
  }
  if (productId === 4) {
    return "/videos/video_preview_4.mp4";
  }
  if (productId === 5) {
    return "/videos/video_preview_5.mp4";
  }
  if (productId === 6) {
    return "/videos/video_preview_6.mp4";
  }
  if (productId === 7) {
    return "/videos/video_preview_7.mp4";
  }
  if (productId === 8) {
    return "/videos/video_preview_8.mp4";
  }
  if (productId === 9) {
    return "/videos/video_preview_9.mp4";
  }
  if (productId === 10) {
    return "/videos/video_preview_10.mp4";
  }
  if (productId === 11) {
    return "/videos/video_preview_11.mp4";
  }
  if (productId === 12) {
    return "/videos/Creating Animated GIFs with AI Tools8.mp4";
  }
  if (productId === 13) {
    return "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4";
  }
  if (productId === 14) {
    return "/videos/Creating Animated GIFs with AI Tools8.mp4";
  }
  if (productId === 15) {
    return "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4";
  }
  if (productId === 16) {
    return "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4";
  }
  if (productId === 17) {
    return "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (14).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses $79.99 - 2 videos
  if (productId === 9) {
    return [
      "/videos/Creating Animated GIFs with AI Tools8.mp4",
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4"
    ];
  }
  
  // Courses $89.99 - 3 videos  
  if (productId === 10) {
    return [
      "/videos/Image Enhancement – Upscaling & PNG Conversion9.mp4",
      "/videos/Essential ChatGPT Basics1.mp4",
      "/videos/YouTube Video Summaries with AI5.mp4"
    ];
  }
  
  // Courses $99.99 - 4 videos
  if (productId === 11) {
    return [
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (14).mp4",
      "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4",
      "/videos/Essential Prompting Tips & Techniques6.mp4",
      "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4"
    ];
  }
  
  // Courses $89.99 - 4 videos
  if (productId === 12) {
    return [
      "/videos/Creating Animated GIFs with AI Tools8.mp4",
      "/videos/Essential ChatGPT Basics1.mp4",
      "/videos/YouTube Video Summaries with AI5.mp4",
      "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4"
    ];
  }
  
  // Courses $99.99 - 4 videos
  if (productId === 13) {
    return [
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4",
      "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4",
      "/videos/Image Enhancement – Upscaling & PNG Conversion9.mp4",
      "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4"
    ];
  }
  
  // Courses $109 - 5 videos
  if (productId === 14) {
    return [
      "/videos/Creating Animated GIFs with AI Tools8.mp4",
      "/videos/Essential Prompting Tips & Techniques6.mp4",
      "/videos/YouTube Video Summaries with AI5.mp4",
      "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4",
      "/videos/Essential ChatGPT Basics1.mp4"
    ];
  }
  
  // Courses $119 - 5 videos
  if (productId === 15) {
    return [
      "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4",
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (14).mp4",
      "/videos/Essential Prompting Tips & Techniques6.mp4",
      "/videos/Creating Animated GIFs with AI Tools8.mp4",
      "/videos/Image Enhancement – Upscaling & PNG Conversion9.mp4"
    ];
  }
  
  // Courses $129 - 5 videos
  if (productId === 16) {
    return [
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (13).mp4",
      "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4",
      "/videos/Essential Prompting Tips & Techniques6.mp4",
      "/videos/YouTube Video Summaries with AI5.mp4",
      "/videos/Prompt Optimization Shortcuts for ChatGPT4.mp4"
    ];
  }
  
  // Courses $139 - 5 videos
  if (productId === 17) {
    return [
      "/videos/AI Productivity Unleashed with ChatGPT Boost Efficiency and Domi (14).mp4",
      "/videos/The B.R.A.I.N. Framework for AI Mastery7.mp4",
      "/videos/Essential Prompting Tips & Techniques6.mp4",
      "/videos/Creating Animated GIFs with AI Tools8.mp4",
      "/videos/Image Enhancement – Upscaling & PNG Conversion9.mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Essential ChatGPT Basics",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Quick start guide to AI conversations. Learn fundamental prompt techniques in under 4 hours.",
    detailedDescription: "Get started with AI technology through this focused introductory course. Master basic conversation patterns, simple prompt creation, and everyday AI applications. Designed for absolute beginners who want to understand AI fundamentals without overwhelming complexity.",
    category: "AI Basics",
    features: [
      "4 hours of streamlined content",
      "25 essential prompt examples",
      "Basic conversation techniques",
      "Simple practical exercises",
      "Quick reference guide"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Complete Beginner",
      "Language": "English",
      "Resources": "25 basic prompts",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "AI Personas & Roles – Designing Smarter Chatbots",
    price: 1.95,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Learn how to build custom AI personas and role-based chatbots that respond with more natural, human-like interactions.",
    detailedDescription: "Master the art of creating AI personalities that feel authentic and engaging. This comprehensive course teaches you to design custom chatbot personas, define specific roles, and create conversational flows that provide more natural, contextually appropriate responses for various use cases.",
    category: "AI Chatbots",
    features: [
      "5 hours of practical training",
      "25 persona templates",
      "Role-based conversation design",
      "Natural interaction techniques",
      "Context-aware responses"
    ],
    specifications: {
      "Duration": "5 hours",
      "Level": "Intermediate",
      "Resources": "25 persona templates",
      "Frameworks": "Role-based design system",
      "Access": "12 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "AI-Powered Document Summaries with ChatGPT",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Master techniques for turning lengthy documents into clear, concise summaries using AI.",
    detailedDescription: "Transform how you process information by learning advanced document summarization techniques. This course covers effective prompting strategies, information extraction methods, and formatting approaches to create professional summaries from any type of document quickly and accurately.",
    category: "Document Processing",
    features: [
      "4 hours of focused training",
      "15 summarization templates",
      "Document analysis techniques",
      "Information extraction methods",
      "Professional formatting guides"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Beginner",
      "Templates": "15 summary formats",
      "Document Types": "Reports, articles, research",
      "Access": "10 months",
      "Bonus": "Quick reference cards"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Prompt Optimization Shortcuts for ChatGPT",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Discover practical shortcuts and methods to refine prompts for faster and more accurate responses.",
    detailedDescription: "Accelerate your AI interactions with proven prompt optimization techniques. Learn time-saving shortcuts, response refinement methods, and systematic approaches to get better results from ChatGPT with less trial and error.",
    category: "Prompt Engineering",
    features: [
      "3 hours of intensive training",
      "20 optimization shortcuts",
      "Response refinement techniques",
      "Efficiency improvement methods",
      "Quick troubleshooting guides"
    ],
    specifications: {
      "Duration": "3 hours",
      "Level": "Beginner",
      "Shortcuts": "20 proven techniques",
      "Methods": "Systematic optimization",
      "Access": "8 months",
      "Bonus": "Cheat sheet collection"
    },
    inStock: true
  },
  {
    id: 5,
    name: "YouTube Video Summaries with AI",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Generate quick, structured summaries of YouTube videos to save time and extract key insights.",
    detailedDescription: "Master the art of extracting key information from video content efficiently. Learn to create structured summaries, identify main points, and organize insights from YouTube videos using AI-powered techniques for maximum learning efficiency.",
    category: "Content Analysis",
    features: [
      "3 hours of practical guidance",
      "10 summary templates",
      "Video analysis frameworks",
      "Key insight extraction",
      "Time-saving techniques"
    ],
    specifications: {
      "Duration": "3 hours",
      "Level": "Beginner",
      "Templates": "10 video summary formats",
      "Techniques": "Efficient extraction methods",
      "Access": "6 months",
      "Tools": "Browser extension guides"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Essential Prompting Tips & Techniques",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    description: "A beginner-friendly guide to improving AI prompts and getting consistent results.",
    detailedDescription: "Build a solid foundation in AI prompting with essential techniques and proven methods. Perfect for beginners who want to understand the fundamentals of effective communication with AI systems and achieve more reliable, consistent results.",
    category: "Prompt Basics",
    features: [
      "4 hours of foundational training",
      "30 essential prompt templates",
      "Consistency improvement methods",
      "Beginner-friendly exercises",
      "Result optimization techniques"
    ],
    specifications: {
      "Duration": "4 hours",
      "Level": "Beginner",
      "Templates": "30 basic prompts",
      "Focus": "Consistency & reliability",
      "Access": "10 months",
      "Support": "Beginner community"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Reset & Refine – Fixing Stuck AI Conversations",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    description: "Learn how to reset and guide AI when responses go off track, ensuring smoother interactions.",
    detailedDescription: "Master the art of troubleshooting AI conversations when they go awry. Learn effective reset techniques, conversation redirection methods, and strategies to get back on track quickly when AI responses become unhelpful or confusing.",
    category: "AI Troubleshooting",
    features: [
      "2 hours of practical guidance",
      "15 reset techniques",
      "Conversation redirection methods",
      "Quick troubleshooting guides",
      "Prevention strategies"
    ],
    specifications: {
      "Duration": "2 hours",
      "Level": "Beginner",
      "Techniques": "15 proven reset methods",
      "Focus": "Problem resolution",
      "Access": "6 months",
      "Format": "Step-by-step guides"
    },
    inStock: true
  },
  {
    id: 8,
    name: "The B.R.A.I.N. Framework for AI Mastery",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    description: "A structured method to approach AI tasks with clarity, precision, and efficiency.",
    detailedDescription: "Master the B.R.A.I.N. Framework - a systematic approach to AI interactions that ensures consistent, high-quality results. Learn to Break down problems, Research context, Analyze requirements, Implement solutions, and Navigate outcomes effectively.",
    category: "AI Frameworks",
    features: [
      "5 hours of framework training",
      "B.R.A.I.N. methodology guide",
      "25 practical applications",
      "Structured problem-solving",
      "Implementation templates"
    ],
    specifications: {
      "Duration": "5 hours",
      "Level": "Intermediate",
      "Framework": "Complete B.R.A.I.N. system",
      "Applications": "25 use cases",
      "Access": "12 months",
      "Bonus": "Quick reference cards"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Creating Animated GIFs with AI Tools",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Step-by-step process to design engaging animated GIFs for content and social media.",
    detailedDescription: "Learn to create eye-catching animated GIFs using AI-powered tools and techniques. This premium course includes 2 comprehensive video modules covering the complete workflow from concept to final output, including optimization for different platforms and use cases in content marketing and social media.",
    category: "Content Creation",
    features: [
      "2 comprehensive video modules",
      "6 hours of creative training",
      "GIF creation workflows",
      "AI tool integration",
      "Platform optimization",
      "Social media formatting"
    ],
    specifications: {
      "Duration": "6 hours",
      "Videos": "2 comprehensive modules",
      "Level": "Beginner",
      "Tools": "AI-powered GIF creators",
      "Outputs": "Multiple format options",
      "Access": "8 months",
      "Bonus": "Template library"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Image Enhancement – Upscaling & PNG Conversion",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Transform visuals with AI: upscale images and convert them into high-quality PNGs.",
    detailedDescription: "Master AI-powered image enhancement techniques to improve visual quality and format conversion. This premium course includes 3 detailed video modules covering professional upscaling methods, PNG optimization, and batch processing workflows for content creators and marketers.",
    category: "Image Processing",
    features: [
      "3 detailed video modules",
      "8 hours of technical training",
      "Image upscaling techniques",
      "PNG conversion workflows",
      "Batch processing methods",
      "Quality optimization"
    ],
    specifications: {
      "Duration": "8 hours",
      "Videos": "3 detailed modules",
      "Level": "Beginner",
      "Tools": "AI upscaling platforms",
      "Formats": "Multiple output options",
      "Access": "10 months",
      "Bonus": "Quality comparison guides"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Advanced Prompt Engineering – Pro Tips & Strategies",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Deep dive into advanced prompting techniques to unlock AI's full potential.",
    detailedDescription: "Unlock the full power of AI with expert-level prompting strategies and advanced techniques. This premium course includes 4 comprehensive video modules covering complex prompt structures, chain-of-thought reasoning, and professional-grade methods used by AI experts and consultants.",
    category: "Advanced Prompting",
    features: [
      "4 comprehensive video modules",
      "12 hours of expert instruction",
      "50 advanced prompt templates",
      "Chain-of-thought techniques",
      "Professional strategies",
      "Expert-level methods"
    ],
    specifications: {
      "Duration": "12 hours",
      "Videos": "4 comprehensive modules",
      "Level": "Advanced",
      "Techniques": "Expert-level strategies",
      "Templates": "50 advanced prompts",
      "Access": "18 months",
      "Bonus": "Professional toolkit"
    },
    inStock: true
  },
  {
    id: 12,
    name: "AI Content Marketing Strategies",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master AI-powered content marketing techniques to grow your audience and boost engagement.",
    detailedDescription: "Learn comprehensive AI-driven marketing strategies that transform your content creation and distribution. This premium course includes 4 video modules covering content planning, audience targeting, SEO optimization, and performance analytics using cutting-edge AI tools.",
    category: "Content Creation",
    features: [
      "4 comprehensive video modules",
      "10 hours of marketing training",
      "40 content templates",
      "SEO optimization guides",
      "Audience targeting methods",
      "Performance tracking"
    ],
    specifications: {
      "Duration": "10 hours",
      "Videos": "4 comprehensive modules",
      "Level": "Intermediate",
      "Templates": "40 marketing prompts",
      "Tools": "AI marketing platforms",
      "Access": "12 months",
      "Bonus": "Marketing toolkit"
    },
    inStock: true
  },
  {
    id: 13,
    name: "AI-Powered Data Analysis & Visualization",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Transform raw data into actionable insights using AI-powered analysis and visualization tools.",
    detailedDescription: "Master the art of data analysis with AI assistance. This comprehensive course includes 4 video modules teaching you to analyze complex datasets, create stunning visualizations, and extract meaningful insights using AI-powered tools and techniques.",
    category: "AI Basics",
    features: [
      "4 comprehensive video modules",
      "14 hours of technical training",
      "Data analysis frameworks",
      "Visualization techniques",
      "AI tool integration",
      "Real-world case studies"
    ],
    specifications: {
      "Duration": "14 hours",
      "Videos": "4 comprehensive modules",
      "Level": "Intermediate",
      "Tools": "AI data platforms",
      "Projects": "10 practical examples",
      "Access": "15 months",
      "Bonus": "Dataset library"
    },
    inStock: true
  },
  {
    id: 14,
    name: "AI Automation Mastery – Workflow Optimization",
    price: 109.00,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Automate repetitive tasks and optimize workflows with advanced AI automation techniques.",
    detailedDescription: "Unlock productivity gains through intelligent automation. This premium course includes 5 video modules covering workflow analysis, automation design, integration strategies, and monitoring systems to help you save time and reduce manual work.",
    category: "Prompt Engineering",
    features: [
      "5 comprehensive video modules",
      "16 hours of automation training",
      "50 automation templates",
      "Workflow optimization guides",
      "Integration tutorials",
      "Monitoring dashboards"
    ],
    specifications: {
      "Duration": "16 hours",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Templates": "50 automation workflows",
      "Integrations": "Multiple platforms",
      "Access": "18 months",
      "Bonus": "Automation toolkit"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Professional AI Consulting & Implementation",
    price: 119.00,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Learn to implement AI solutions professionally for businesses and provide expert consulting services.",
    detailedDescription: "Become an AI consultant with this comprehensive professional training. Includes 5 video modules covering client assessment, solution design, implementation strategies, change management, and ongoing support for enterprise AI projects.",
    category: "AI Chatbots",
    features: [
      "5 comprehensive video modules",
      "20 hours of professional training",
      "Consulting frameworks",
      "Implementation guides",
      "Client management tools",
      "Case study analysis"
    ],
    specifications: {
      "Duration": "20 hours",
      "Videos": "5 comprehensive modules",
      "Level": "Expert",
      "Frameworks": "Enterprise consulting",
      "Resources": "Professional toolkit",
      "Access": "24 months",
      "Bonus": "Certification preparation"
    },
    inStock: true
  },
  {
    id: 16,
    name: "AI-Driven Business Intelligence & Analytics",
    price: 129.00,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Master business intelligence with AI to make data-driven decisions and drive strategic growth.",
    detailedDescription: "Transform your business intelligence capabilities with AI-powered analytics. This enterprise-level course includes 5 video modules covering advanced analytics, predictive modeling, dashboard creation, and strategic decision-making frameworks.",
    category: "Document Processing",
    features: [
      "5 comprehensive video modules",
      "24 hours of BI training",
      "Advanced analytics methods",
      "Predictive modeling",
      "Dashboard design",
      "Strategic frameworks"
    ],
    specifications: {
      "Duration": "24 hours",
      "Videos": "5 comprehensive modules",
      "Level": "Expert",
      "Methods": "Advanced BI techniques",
      "Tools": "Enterprise platforms",
      "Access": "24 months",
      "Bonus": "Executive dashboard templates"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Complete AI Transformation Program – Enterprise Edition",
    price: 139.00,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "The ultimate AI transformation program for organizations seeking complete digital transformation.",
    detailedDescription: "The most comprehensive AI course available. Includes 5 video modules covering every aspect of enterprise AI transformation: strategy, implementation, change management, security, and continuous improvement. Designed for executives, managers, and transformation leaders.",
    category: "Prompt Engineering",
    features: [
      "5 comprehensive video modules",
      "30+ hours of transformation training",
      "100+ enterprise templates",
      "Strategic planning frameworks",
      "Implementation roadmaps",
      "Executive dashboards"
    ],
    specifications: {
      "Duration": "30+ hours",
      "Videos": "5 comprehensive modules",
      "Level": "Enterprise/Executive",
      "Frameworks": "Complete transformation",
      "Templates": "100+ resources",
      "Access": "36 months (3 years)",
      "Support": "Priority consultation access",
      "Bonus": "Executive certification"
    },
    inStock: true
  }
];
