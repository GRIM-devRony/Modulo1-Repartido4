import { useState } from "react";
import "./TareaPage.css";
const TareaPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", prio: 1 });

  const handleAddTask = () => {
    const { name, prio } = newTask;
    if (name.trim() === "") return;
    setTasks([newTask, ...tasks]);
    setNewTask({ name: "", prio: 1, completed: false });
  };
  const handleChangePrio = (e) => {
    const value = e.target.value;
    const copyOfNewTask = { ...newTask, prio: value };
    if (value < 1) {
      copyOfNewTask.prio = 1;
    } else if (value > 4) {
      copyOfNewTask.prio = 4;
    }
    setNewTask(copyOfNewTask);
  };
  const handleDeleteTask = (index) => {
    const copyOfTasks = [...tasks];
    copyOfTasks.splice(index, 1);
    setTasks(copyOfTasks);
  };
  const handleMarkAsCompleted = (index) => {
    const copyOfTasks = [...tasks];
    const taskStatus = copyOfTasks[index].completed;
    copyOfTasks[index].completed = !taskStatus;
    setTasks(copyOfTasks);
  };
  return (
    <div className="tarea-ctn">
      <div className="tarea">
        <div className="tarea__inputs-ctn">
          <input
            placeholder="Tarea"
            className="tarea__input-name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <input
            min="1"
            max="4"
            placeholder="P"
            value={newTask.prio}
            type="number"
            className="tarea__input-prio"
            onChange={handleChangePrio}
          />
          <button onClick={handleAddTask} className="tarea__button">
            Agregar
          </button>
        </div>
        <div className="tarea__tasks-ctn">
          {tasks.map((task, i) => (
            <div key={i} className={`task prio-${task.prio}`}>
              {task.name}
              <div className="task__buttons-ctn">
                <button
                  className="complete"
                  onClick={() => handleMarkAsCompleted(i)}
                >
                  ✔️
                </button>
                <button className="delete" onClick={() => handleDeleteTask(i)}>
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TareaPage;
