export const Employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav.kumar@example.in",
    password: "123",
    TaskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create a responsive login page for the web application.",
        taskDate: "20 Nov 2024",
        category: "Frontend",
        TaskStatus: "In Progress",
        bgColor: "bg-yellow-400", // Active
        taskPriority: "High",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Team Meeting",
        taskDescription: "Organize and lead a meeting with the development team.",
        taskDate: "21 Nov 2024",
        category: "Management",
        TaskStatus: "Pending",
        bgColor: "bg-blue-400", // New Task
        taskPriority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Integration",
        taskDescription: "Resolve issues with API integration for user authentication.",
        taskDate: "19 Nov 2024",
        category: "Backend",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update technical documentation for the project.",
        taskDate: "18 Nov 2024",
        category: "Content",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Low",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "ishita.singh@example.in",
    password: "123",
    TaskCount: {
      active: 0,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Implement secure user authentication with JWT.",
        taskDate: "22 Nov 2024",
        category: "Backend",
        TaskStatus: "Pending",
        bgColor: "bg-blue-400", // New Task
        taskPriority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Integration",
        taskDescription: "Resolve issues with API integration for user authentication.",
        taskDate: "19 Nov 2024",
        category: "Backend",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update technical documentation for the project.",
        taskDate: "20 Nov 2024",
        category: "Content",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design Dashboard UI",
        taskDescription: "Design a modern, user-friendly dashboard interface.",
        taskDate: "21 Nov 2024",
        category: "Design",
        TaskStatus: "Incomplete",
        bgColor: "bg-red-400", // Failed
        taskPriority: "Low",
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "rohan.sharma@example.in",
    password: "123",
    TaskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest build to the production server.",
        taskDate: "23 Nov 2024",
        category: "DevOps",
        TaskStatus: "In Progress",
        bgColor: "bg-yellow-400", // Active
        taskPriority: "High",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test New Features",
        taskDescription: "Write test cases for recently developed features.",
        taskDate: "25 Nov 2024",
        category: "QA",
        TaskStatus: "Pending",
        bgColor: "bg-blue-400", // New Task
        taskPriority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct Team Meeting",
        taskDescription: "Organize and lead a meeting with the development team.",
        taskDate: "19 Nov 2024",
        category: "Management",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Integration",
        taskDescription: "Resolve issues with API integration for user authentication.",
        taskDate: "18 Nov 2024",
        category: "Backend",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Medium",
      },
    ],
  },  
  {
    id: 4,
    firstName: "Priya",
    email: "priya.agarwal@example.in",
    password: "123",
    TaskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Refactor Codebase",
        taskDescription: "Improve code readability and efficiency by refactoring.",
        taskDate: "24 Nov 2024",
        category: "Development",
        TaskStatus: "In Progress",
        bgColor: "bg-yellow-400", // Active
        taskPriority: "Medium",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analyze Performance Metrics",
        taskDescription: "Review key performance metrics for the latest sprint.",
        taskDate: "26 Nov 2024",
        category: "Analytics",
        TaskStatus: "Pending",
        bgColor: "bg-blue-400", // New Task
        taskPriority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update technical documentation for the project.",
        taskDate: "20 Nov 2024",
        category: "Content",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Integration",
        taskDescription: "Resolve issues with API integration for user authentication.",
        taskDate: "18 Nov 2024",
        category: "Backend",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Medium",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "kabir.verma@example.in",
    password: "123",
    TaskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Analyze Performance Metrics",
        taskDescription: "Review key performance metrics for the latest sprint.",
        taskDate: "26 Nov 2024",
        category: "Analytics",
        TaskStatus: "In Progress",
        bgColor: "bg-yellow-400", // Active
        taskPriority: "High",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest build to the production server.",
        taskDate: "25 Nov 2024",
        category: "DevOps",
        TaskStatus: "Pending",
        bgColor: "bg-blue-400", // New Task
        taskPriority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update technical documentation for the project.",
        taskDate: "20 Nov 2024",
        category: "Content",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Integration",
        taskDescription: "Resolve issues with API integration for user authentication.",
        taskDate: "18 Nov 2024",
        category: "Backend",
        TaskStatus: "Completed",
        bgColor: "bg-green-400", // Completed
        taskPriority: "Medium",
      },
    ],
  },  
];

export const Admin = [
  {
    id: 1,
    firstName: "Ananya",
    email: "admin.ananya@example.in",
    password: "admin123",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(Employees));
  localStorage.setItem("admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};