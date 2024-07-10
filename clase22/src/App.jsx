import "./App.css";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList/todoList";
function App() {
  const nombre = "Gabriela";
  const estilos = {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <>
    <TodoList/>
      <Greeting />
      <p style={estilos}>Hola {nombre}</p>
    </>
  );
}

export default App;
