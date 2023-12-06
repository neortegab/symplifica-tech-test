import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import Navbar from "./layout/Navbar";
import ErrorModal from "./components/ErrorModal";
import TaskComponent from "./components/Task";
import { type Task } from "./types";
import "./App.css";
import TaskForm from "./forms/TaskForm";

const requestTasks = () =>
  axios.get("http://localhost:8080/tasks", {
    auth: { username: "testUser", password: "testPassword!" },
  });

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleShowTaskCreationForm = () => setIsAddingTask(!isAddingTask);

  useEffect(() => {
    requestTasks()
      .then((response) => setTasks(response.data))
      .catch((error) =>
        createPortal(<ErrorModal message={error} />, document.getElementsByTagName("main")[0]),
      );
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        {tasks.map(({ id, title, description, dueDate, completed }) => (
          <TaskComponent
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
            <TaskForm submitMethod="post" />
            <button onClick={handleShowTaskCreationForm}>Cancel</button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
