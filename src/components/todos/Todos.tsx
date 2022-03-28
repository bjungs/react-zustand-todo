import { useState } from 'react'
import { createTodo, Todo } from './Todo'
import { TodoForm } from './TodoForm'

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])

  const updateTodoStatus = (idx: number) => (completed: boolean) => {
    // todo: use zustand to handle the state
    setTodos((currentTodos) => {
      const updatedTodos = [...currentTodos]
      updatedTodos[idx].completed = completed
      return updatedTodos
    })
  }

  const removeTodo = (idx: number) => () => {
    console.log('idx to remove', idx)
    setTodos((currentTodos) => {
      const updatedTodos = [...currentTodos]
      updatedTodos.splice(idx, 1)
      return updatedTodos
    })
  }

  function addTodo(todo: Todo) {
    setTodos((currentTodos) => [...currentTodos, todo])
  }

  return (
    <div>
      <h2
        className={`
          w-96
          text-2xl
          underline
          mb-2.5
          text-center
        `}
      >
        Todos App
      </h2>
      <TodoForm onNewTodo={addTodo} />
      <hr className={`my-6`} />
      <div>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            {...todo}
            onStatusChange={updateTodoStatus(idx)}
            onRemoveClick={removeTodo(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default Todos
