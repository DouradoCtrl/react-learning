import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1 className="text-red-600">Gereciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
