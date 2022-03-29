import { animated, useTransition } from 'react-spring'

import useTodoStore from '../../stores/todoStore'

import Todo from './Todo'
import { TodoForm } from './TodoForm'

export function Todos() {
  const { todos, addTodo, removeTodo, setTodoStatus } = useTodoStore()
  const transitions = useTransition(todos, {
    from: {
      opacity: 0,
      maxHeight: 0,
    },
    enter: {
      opacity: 1,
      maxHeight: 500,
    },
    leave: {
      opacity: 0,
      maxHeight: 0,
    },
  })

  return (
    <div className={`w-72 md:w-96`}>
      <h2 className={`text-2xl underline mb-2.5 text-center`}>Todos App</h2>
      <TodoForm onNewTodo={addTodo} />
      <hr className={`my-6`} />
      <div>
        {transitions((styles, todo, _, idx) => (
          <animated.div style={styles}>
            <Todo
              {...todo}
              onStatusChange={(completed) => {
                setTodoStatus(idx, completed)
              }}
              onRemoveClick={() => removeTodo(idx)}
            />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Todos
