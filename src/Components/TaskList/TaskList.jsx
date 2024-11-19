const Tasks = [
    {
      priority: "High",
      priorityColor: "bg-red-400", // Dynamic priority color
      date: "20 Nov 2024",
      title: "Make a YouTube Video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque delectus id tempora.",
    },
    {
      priority: "Medium",
      priorityColor: "bg-yellow-400",
      date: "22 Nov 2024",
      title: "Write a Blog Post",
      description:
        "Consectetur adipiscing elit. Quisque eget magna vel nisl feugiat tempus.",
    },
    {
      priority: "Low",
      priorityColor: "bg-green-400",
      date: "25 Nov 2024",
      title: "Read a Technical Article",
      description:
        "Aliquam sed nisi sit amet justo tincidunt scelerisque sit amet vel purus.",
    },
    {
      priority: "High",
      priorityColor: "bg-red-400",
      date: "28 Nov 2024",
      title: "Plan Next Week's Schedule",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia.",
    },
    {
      priority: "Medium",
      priorityColor: "bg-yellow-400",
      date: "30 Nov 2024",
      title: "Prepare for Presentation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis?",
    },
    {
      priority: "Low",
      priorityColor: "bg-green-400",
      date: "02 Dec 2024",
      title: "Watch a Tutorial on React",
      description:
        "Adipisicing elit. Error at adipisci temporibus magnam suscipit necessitatibus ea.",
    },
  ];
  


const TaskList = () => {
    return (
        <div id="taskList" className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-4  mt-10 h-[55%]">
            {
                Tasks.map((task, index) => (
                    <div key={index} className={ `flex-shrink-0 h-full p-5 w-[350px] ${task.priorityColor} rounded-2xl`}>
                        <div className="flex justify-between items-center">
                            <h3 className="bg-red-500 px-3 py-1 rounded text-sm">{task.priority}</h3>
                            <h4 className="font-semibold text-sm">{task.date}</h4>
                        </div>
                        <h4 className=" mt-8 text-2xl font-semibold">{task.title}</h4>
                        <p className="mt-3">{task.description}</p>
                    </div>
                ))
            }



        </div>
    )
}

export default TaskList