import React from "react";
import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/form";
import FilterButtons from "./components/filterButtons";
import List from "./components/list";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

// App funtion
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  // filter buttons
  const [filter, setFilter] = useState("All");
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButtons
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
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
  // const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
  //   <List
  //     id={task.id}
  //     name={task.name}
  //     completed={task.completed}
  //     key={task.id}
  //     // toggleTaskCompleted={toggleTaskCompleted}
  //     // deleteTask={deleteTask}
  //     editTask={editTask}
  //   />
  // ));
  const taskList = tasks.map((task) => (
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
        {filterList}
        {taskList}
      </main>
    </div>
  );
}
export default App;
