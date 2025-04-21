import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type TaskProps } from '../components/taskList/TaskList';

const INITIAL_TASKS: TaskProps[] = [
  { id: '1', name: 'Write code', completed: true },
  { id: '2', name: 'Eliminate bugs', completed: false },
  { id: '3', name: 'Optimize code', completed: false },
];

const TASK_NAMES = [
  'Wash dishes',
  'Clean floor',
  'Grow plants',
  'Buy food',
  'Do laundry',
  'Write report',
  'Read a book',
  'Exercise',
  'Cook dinner',
  'Organize desk',
];

const generateRandomTask = (): TaskProps => {
  const randomId = uuidv4();
  const randomName = TASK_NAMES[Math.floor(Math.random() * TASK_NAMES.length)];
  const randomCompleted = Math.random() < 0.5;

  return { id: randomId, name: randomName, completed: randomCompleted };
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, generateRandomTask()]);
  };

  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.slice(0, -1));
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return { tasks: memoizedTasks, addTask, removeTask };
};

export default useTasks;
