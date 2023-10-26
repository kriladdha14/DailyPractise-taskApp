import { useState } from "react";
import TaskList from "./TaskList";
import AddToDoList from"./AddTodoList";

export default function App() {
  const [tasks,setTasks]= useState(initialTasks);

  function handleAddTask(text){
    setTasks([
      ...tasks,
      {
        id:id++,
        text:text,
        done:false,
      }

    ]);
  }
  function handleChangeTask(task){
    setTasks(
      tasks.map((t)=> {
        if(task.id===t.id){
          return task;
        }else{
          return t;
        }
      })
    )
  }

  function handleDeleteTask(taskID){
    setTasks(
      tasks.filter((t)=>{
        return t.id !== taskID
      })
    )
  }
  return (
    <>
      <AddToDoList onAddTask={handleAddTask}></AddToDoList>
      <TaskList 
      tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  );
}
  
let id=6;
const initialTasks = [
  { id: 0, text: 'Cook Breakfast', done: true },
  { id: 1, text: 'Get Grocery', done: false },
  { id: 2, text: 'Have Lunch', done: false },
  { id: 3, text: 'Apply for a Job', done: false },
  { id: 4, text: 'Get a Cup of coffee', done: false },
  { id: 5, text: 'Go shopping', done: false }
];

