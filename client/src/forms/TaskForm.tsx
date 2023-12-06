import { useState } from "react";

type TaskFormProps = {
  title?: string;
  description?: string;
  dueDate?: Date;
};

/**
 * Form to handle the creation and editing of tasks. When creating the task, the title, description, and due date
 * are empty. When editing, the title, description, and due date should be prepopulated.
 * @param title - prepopulated title of the task if editing
 * @param description - prepopulated description of the task if editing
 * @param dueDate - prepopulated due date of the task if editing
 * @returns JSX element with the structure to create or edit a task
 */
export default function TaskForm({ title, description, dueDate }: TaskFormProps) {
  const [inputs, setInputs] = useState<TaskFormProps>({
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

  return (
    <section>
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
    </section>
  );
}
