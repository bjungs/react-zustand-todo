import Todo from './Todo'
import { TodoForm } from './TodoForm'
import useTodoStore from '../../stores/todoStore'

export function Todos() {
  const { todos, addTodo, removeTodo, setTodoStatus } = useTodoStore()

  return (
    <div className={`w-72 md:w-96`}>
      <h2 className={`text-2xl underline mb-2.5 text-center`}>Todos App</h2>
      <TodoForm onNewTodo={addTodo} />
      <hr className={`my-6`} />
      <div>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            {...todo}
            onStatusChange={(completed) => setTodoStatus(idx, completed)}
            onRemoveClick={() => removeTodo(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default Todos
