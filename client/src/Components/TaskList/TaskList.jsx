import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FaildTask from "./FaildTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id="taskList" className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-4  mt-10 h-[55%]">
      {
        data.tasks.map((elem , index)=>{
          if(elem.active){
            return <AcceptTask key={index} data={elem}/>
          }
          if(elem.newTask){
            return <NewTask key={index} data={elem}/>
          }
          if(elem.completed){
           return  <CompleteTask key={index} data={elem}/>
          }
          if(elem.failed){
            return <FaildTask key={index} data={elem}/>
          }
        })
      }
    </div>
  )
}

export default TaskList