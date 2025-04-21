import React from 'react';

export type TaskProps = {
  id: string;
  name: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: TaskProps[];
};

const Task = React.memo(({ id, name, completed }: TaskProps) => {
  return (
    <li className="w-[900px] border-2 border-gray-300 p-4 mb-2 rounded">
      <h3>{name}</h3>
      <p>{completed ? 'Completed' : 'Not Completed'}</p>
    </li>
  );
});

const renderTasks = (tasks: TaskProps[]) => tasks.map((task) => <Task key={task.id} {...task} />);

const TaskList = React.memo(({ tasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p className="text-center">No tasks available</p>;
  }

  return (
    <div className="task-list">
      <h2 className="flex justify-center underline">{tasks.length === 1 ? 'Task' : 'Tasks'} list:</h2>
      <ul className="h-[550px] overflow-y-auto bg-gray-600 p-4">{renderTasks(tasks)}</ul>
    </div>
  );
});

export default TaskList;
