import { useReducer, useState } from "react";
import TaskList from "./TaskList";
import AddToDoList from"./AddTodoList";
import taskReducer from "./TaskReducer";

export default function App() {
  const [tasks,dispatch]= useReducer( taskReducer , initialTasks);

  function handleAddTask(text){
    dispatch({
        type: 'added',
        id:id++,
        text:text,
      });
    }
  function handleChangeTask(task){
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskID){
    dispatch({
      type: 'deleted',
      id: taskID,
    });
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

