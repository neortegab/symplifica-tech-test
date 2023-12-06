import { useState } from "react";
import { createPortal } from "react-dom";
import { type Task } from "../types";
import axios from "axios";
import TaskForm from "../forms/TaskForm";
import ErrorModal from "./ErrorModal";

type TaskProps = Task;

export default function TaskComponent({ id, title, description, dueDate }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleOnComplete = () =>
    axios.put(`http://localhost:8080/tasks/${id}`, { completed: true });

  const handleOnDelete = () =>
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .catch((error) =>
        createPortal(<ErrorModal message={error} />, document.getElementsByTagName("main")[0]),
      );

  return (
    <section>
      <section>
        <input type="text" value={title} disabled />
        <input type="text" value={description} disabled />
        <input type="text" value={dueDate.toDateString()} disabled />
      </section>
      <section>
        <input type="checkbox" value="Complete" onClick={handleOnComplete} />
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={handleOnDelete}>Delete</button>
      </section>
      {isEditing && (
        <TaskForm
          id={id}
          title={title}
          description={description}
          dueDate={dueDate}
          submitMethod="put"
        />
      )}
    </section>
  );
}
