import { useState } from "react";
import Navbar from "./layout/Navbar";
import Task from "./components/Task";
import tasks from "./tasks";
import "./App.css";
import TaskForm from "./forms/TaskForm";

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleShowTaskCreationForm = () => setIsAddingTask(!isAddingTask);

  return (
    <main>
      <Navbar />
      <div>
        {tasks.map(({ id, title, description, dueDate, completed }) => (
          <Task
            key={`task-list-${id}`}
            id={id}
            title={title}
            description={description}
            dueDate={dueDate}
            completed={completed}
          />
        ))}
      </div>
      <section>
        <button onClick={handleShowTaskCreationForm}>Create Task</button>
        {isAddingTask && (
          <>
            <TaskForm />
            <button onClick={handleShowTaskCreationForm}>Cancel</button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
