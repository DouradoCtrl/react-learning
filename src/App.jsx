import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";
// componente pai

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para aprender a criar aplicações web",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer exercícios de React",
      description: "Fazer exercícios de React para praticar o que aprendi",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Criar um projeto com React",
      description:
        "Criar um projeto com React para colocar em prática o que aprendi",
      isCompleted: false,
    },
  ]);

  function onTaskClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(id) {
    //vai ter todas as tarefas, diferente desse id
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <div className="w-screen h-screen bg-slate-500 p-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-slate-100 font-bold text-center mb-6">
          Gereciador de Tarefas
        </h1>
        <div className="flex w-[80vw] h-[80vh] justify-center items-center">
          <div className="w-1/3 h-full p-4">
            <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          </div>
          <div className="w-2/3 h-full p-4">
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
