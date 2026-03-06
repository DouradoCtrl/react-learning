import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  //destructuring props
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="p-2 rounded-md outline-slate-400"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      ></input>
      <input
        className="p-2 rounded-md outline-slate-400"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha o título e a descrição da tarefa",
            );
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="font-bold bg-slate-500 hover:bg-slate-700 p-2 rounded-md text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
