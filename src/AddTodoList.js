import { useState } from "react";

export default function AddToDoList({onAddTask}){
    const[text,setText]=useState('');
    return(
        <>
        <h1>Add Tasks for Today</h1>
        <input
        placeholder="Add tasks" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={() => {
            setText('');
            onAddTask(text)}}>Add</button>
        </>
    );
}