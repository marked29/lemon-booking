import TaskList from '../taskList/TaskList';
import useTasks from 'src/hooks/useTasks';

const Main = () => {
  const { tasks, addTask, removeTask } = useTasks();

  return (
    <>
      <div className="w-full flex ">
        <div className="flex-col m-auto ">
          <TaskList tasks={tasks} />
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-amber-800 border-2 border-gray-300 p-4 mb-2 rounded" onClick={addTask}>
              add task
            </button>
            <button className="flex-1 bg-amber-800 border-2 border-gray-300 p-4 mb-2 rounded" onClick={removeTask}>
              remove task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
