type Task = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate: Date;
};

const tasks: Array<Task> = [
  {
    id: 1,
    completed: false,
    description: "Take out the trash",
    dueDate: new Date("2023-12-16"),
    title: "Trash",
  },
  {
    id: 2,
    completed: true,
    dueDate: new Date("2023-12-28"),
    title: "Buy milk",
  },
  {
    id: 3,
    completed: false,
    dueDate: new Date("2023-12-31"),
    title: "Call the doctor",
  },
  {
    id: 4,
    completed: false,
    description: "Take out the dog",
    dueDate: new Date("2024-06-11"),
    title: "Walk the dog",
  },
];

export default tasks;
