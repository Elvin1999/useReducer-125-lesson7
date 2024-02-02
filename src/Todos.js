import React, { useState } from "react";

export default function Todos({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
         
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          ></Task>
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.value}
          onChange={(e) => {
            onChange({ ...task, text: e.target.value });
          }}
        ></input>
        <button onClick={()=>setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={()=>setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
            console.log(e.target.value);
          onChange({ ...task, done: !task.done });
        }}
      ></input> 
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
