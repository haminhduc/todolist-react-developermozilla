import React from "react";
import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/form";
import FilterButtons from "./components/filterButtons";
import List from "./components/list";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(newTask) {
    const addedTask = { name: newTask, key: nanoid(), completed: false };
    setTasks([...tasks, addedTask]);
  }
  // console.log(tasklist);
  function removeTask(id) {
    console.log(id);

    const newTasks = tasks.filter((task) => task.key !== id);
    setTasks(newTasks);
    console.log(tasks);
  }
  function editTask(id, newTaskName) {
    console.log(id, newTaskName);
    const editedTask = tasks.map((task) => {
      console.log(task.id);
      if (task.key === id) {
        console.log("id matches");
        return { ...task, name: newTaskName };
      } else {
        console.log("wrong id");
        return task;
      }
    });
    setTasks(editedTask);
  }
  function handleComplete(id) {
    const updateTask = tasks.map((task) => {
      if (task.key === id) {
        console.log("task complete");
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updateTask);
  }
  const tasklist = tasks.map((task) => (
    <List
      key={task.key}
      id={task.key}
      name={task.name}
      completed={task.completed}
      addTask={addTask}
      removeTask={removeTask}
      editTask={editTask}
      taskComplete={handleComplete}
    />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <i className="header-icon fa-solid fa-list"></i>
        <h1>ACTIVITIES</h1>
        <i className="header-icon fa-solid fa-calendar-days"></i>
      </header>
      <main>
        <Form addTask={addTask} />
        <FilterButtons />
        {tasklist}
      </main>
    </div>
  );
}
export default App;
