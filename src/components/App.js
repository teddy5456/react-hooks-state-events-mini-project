import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task !== deletedTask));
  }

  function handleCategoryFilterChange(selectedCategory) {
    setCategory(selectedCategory);
  }

  const visibleTasks = category === "All" ? tasks : tasks.filter((task) => task.category === category);

  return (
    <div className="App">
      <header>
        <h2>My tasks</h2>
      </header>
      <main>
        <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={category}
          onSelectCategory={handleCategoryFilterChange}
        />
        <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default App;
