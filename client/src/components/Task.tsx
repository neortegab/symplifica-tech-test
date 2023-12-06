type TaskProps = {
  id: number;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
};

export default function Task({ title, description, dueDate }: TaskProps) {
  function handleClickComplete() {}

  function handleClickDelete() {}

  function handleClickEdit() {}

  return (
    <section>
      <section>
        <input type="text" value={title} disabled />
        <input type="text" value={description} disabled />
        <input type="text" value={dueDate.toDateString()} disabled />
      </section>
      <section>
        <input type="checkbox" value="Complete" onClick={handleClickComplete} />
        <button onClick={handleClickEdit}>Edit</button>
        <button onClick={handleClickDelete}>Delete</button>
      </section>
    </section>
  );
}
