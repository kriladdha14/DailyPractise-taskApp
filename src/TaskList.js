import {useState} from "react";

export default function TaskList({tasks,onChangeTask,onDeleteTask}){
    return(
    <> 
      <h1>Today's to do List</h1> 
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task}
              onChange={onChangeTask} 
              onClick={onDeleteTask}>
            </Task>
          </li>
        ))}
      </ul>
    </>
    
    );
}

function Task({task,onChange,onClick}){
    const [isEditing,setIsEditing]=useState(false);
    
    let taskcontent;
    if(isEditing){
        taskcontent=(
            <>
<input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <button onClick={()=> {setIsEditing(false);}}>Save</button>
        <button onClick={onClick}>
          Delete
          </button>
      </>
        );
    }else{
        taskcontent=(
            <>
        {task.text}
        <button onClick={() => setIsEditing(true)} >Edit</button>
        <button onClick={() => onClick(task.id )}>
          Delete
          </button>
      </>
        );
    }
    return(
      <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
        <label>{taskcontent}</label>
      </>
    );
  }

  