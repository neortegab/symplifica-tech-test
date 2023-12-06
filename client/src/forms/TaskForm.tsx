import { useState } from "react";
import { type Task } from "../types";
import axios from "axios";

type TaskFormProps = Partial<Task> & {
  submitMethod: "post" | "put";
};

/**
 * Form to handle the creation and editing of tasks. When creating the task, the
 * title, description, and due date are empty. When editing, the title, description,
 * and due date should be prepopulated.
 * @param title - prepopulated title of the task if editing
 * @param description - prepopulated description of the task if editing
 * @param dueDate - prepopulated due date of the task if editing
 * @returns JSX element with the structure to create or edit a task
 */
export default function TaskForm({ id, title, description, dueDate, submitMethod }: TaskFormProps) {
  const [inputs, setInputs] = useState<Omit<TaskFormProps, "submitMethod">>({
    title: title ?? "",
    description: description ?? "",
    dueDate: dueDate ?? new Date(),
  });

  function handleInputChange(inputEvent: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = inputEvent.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleOnSubmit() {
    axios({
      method: submitMethod,
      url:
        submitMethod === "post"
          ? "http://localhost:8080/tasks"
          : `http://localhost:8080/tasks/${id}`,
      auth: { username: "testUser", password: "testPassword!" },
      data: inputs,
    });
  }

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due date:</label>
        <input
          type="date"
          name="dueDate"
          value={inputs.dueDate?.toDateString()}
          onChange={handleInputChange}
          required
        />
      </div>
      <input type="submit" value="Submit" onSubmit={handleOnSubmit} />
    </form>
  );
}
