import React, { useState } from 'react';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';

const initialTodos: Array<Todo> = [
  { text: "Walk the dog.", complete: true },
  { text: "Write application.", complete: false }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    //trim() does not equal an empty string
    // keeps from entering empty strings in the app
    newTodo.trim() !== "" && 
      setTodos([ ...todos, {text: newTodo, complete: false } ])
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;