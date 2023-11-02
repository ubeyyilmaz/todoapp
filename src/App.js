import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./index.css";



function App() {

  const [InputText, setInputText] = useState(""); // Inputun değerini burada tutuyor
  const [todos, setTodos] = useState([]); // Todo listesini tutacak
  const [status, setStatus] = useState("") // todo listesinin durumunu tutuyor
  const [filteredTodos, setFilteredTodos] = useState([]); // Filtrelenmil listeyi tutacak

  useEffect(() => {
    // Listemizde değişiklik olduğunda çalışacak 
    const filterHandler = () => {
      switch (
      status // status değişkenine göre filtreleme işlemi yapacak
      ) {
        case "completed": // eğer status completed ise
          setFilteredTodos(todos.filter((todo) => todo.completed === true)); // completed true olanları filtreleme
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false)) // completed false olanları filtreleme 
          break;

        default: // eğer status değişkeni completed veya active değilse tüm todoları filtrele
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler(); // todos ve status değişkenlerinde değişiklik olduğunda filteredHandler fonksiyonunu çalıştır
  }, [todos, status])

  return (
    <div>
      <section className='todoapp'>
        <Header
          InputText={InputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />


      </section>


    </div>
  );
}

export default App;
