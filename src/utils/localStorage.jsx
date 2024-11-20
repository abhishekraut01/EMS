export const Employees = [
    {
      id: 1,
      email: "john.doe@example.com",
      password: "123", // Password for all users
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Build Login Page",
          taskDate: "20 Nov 2024",
          category: "Frontend",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Fix API Integration",
          taskDate: "18 Nov 2024",
          category: "Backend",
        },
      ],
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Design Dashboard UI",
          taskDate: "21 Nov 2024",
          category: "Design",
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Implement Authentication",
          taskDate: "22 Nov 2024",
          category: "Backend",
        },
      ],
    },
    {
      id: 3,
      email: "alex.brown@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Test New Features",
          taskDate: "25 Nov 2024",
          category: "QA",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Deploy Application",
          taskDate: "23 Nov 2024",
          category: "DevOps",
        },
      ],
    },
    {
      id: 4,
      email: "emily.jones@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Refactor Codebase",
          taskDate: "24 Nov 2024",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Update Documentation",
          taskDate: "20 Nov 2024",
          category: "Content",
        },
      ],
    },
    {
      id: 5,
      email: "michael.green@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Conduct Team Meeting",
          taskDate: "19 Nov 2024",
          category: "Management",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Analyze Performance Metrics",
          taskDate: "26 Nov 2024",
          category: "Analytics",
        },
      ],
    },
  ];
  
export const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  }
]


export const setLocalStorage =()=>{
  localStorage.setItem("employees" , JSON.stringify(Employees))
  localStorage.setItem("admin" , JSON.stringify(Admin))
}


export const getLocalStorage =()=>{
    const employee = JSON.parse(localStorage.getItem("employees" ))
    const admin = JSON.parse(localStorage.getItem("admin" ))
    console.log(employee , admin)
}