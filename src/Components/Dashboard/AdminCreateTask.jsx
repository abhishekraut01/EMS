import { useState } from "react";

const AdminCreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [CreatedTask, setCreatedTask] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();

    // Create task
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDate,
      category,
      taskDescription,
    };

    setCreatedTask(newTask);
    const data = JSON.parse(localStorage.getItem("employee"))

    data.array.forEach(element => {
        if(element.firstName == AssignTo){
            element.tasks.push(newTask)
        }
    });
    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="overflow-x-auto flex-wrap flex justify-between bg-[#1C1C1C] w-full mt-5 rounded-md px-8 py-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between w-full"
      >
        <div>
          <h3 className="text-lg pr-96 mb-1">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full"
            type="text"
            placeholder="Make The UI Design"
          />
          <h3 className="text-lg mb-1">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full"
            type="date"
          />
          <h3 className="text-lg mb-1">Assign To</h3>
          <input
            value={AssignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full"
            type="text"
            placeholder="Employee Name"
          />
          <h3 className="text-lg mb-1">Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full"
            type="text"
            placeholder="Design, Dev, Etc"
          />
        </div>
        <div className="w-[40%] flex justify-evenly flex-col">
          <div>
            <h3 className="text-lg mb-1">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="mb-4 outline-none border-gray-300 border-2 rounded-md bg-transparent placeholder:text-gray-400 placeholder:text-base px-3 py-2 w-full"
              name="taskDescription"
              cols="40"
              rows="8"
            ></textarea>
          </div>
          <button className="bg-emerald-400 mb-4 rounded-md px-3 py-3 w-full text-xl">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateTask;
