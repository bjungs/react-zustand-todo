import create, { StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import Todo from '../components/todos/Todo'

type TodoStore = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (idx: number) => void
  setTodoStatus: (idx: number, completed: boolean) => void
  clearTodos: () => void
}

const TodoStoreCreator: StateCreator<TodoStore> = (set) => ({
  todos: [],
  addTodo: (todo: Todo) => {
    set((prevState) => {
      return {
        todos: [...prevState.todos, todo],
      }
    })
  },
  removeTodo: (idx: number) => {
    set((prevState) => {
      const updatedTodos = [...prevState.todos]
      updatedTodos.splice(idx, 1)
      return {
        todos: updatedTodos,
      }
    })
  },
  setTodoStatus: (idx: number, completed: boolean) => {
    set((prevState) => {
      const updatedTodos = [...prevState.todos]
      updatedTodos[idx].completed = completed
      return {
        todos: updatedTodos,
      }
    })
  },
  clearTodos: () => {
    set({ todos: [] })
  },
})

type SerializableTodo = Omit<Todo, 'createdAt'> & {
  createdAt: string
}

const TodoStore = persist(TodoStoreCreator, {
  name: 'todos',
  serialize: (store) => {
    const todos = store.state.todos?.map((todo) => {
      return {
        ...todo,
        createdAt: (todo?.createdAt as Date)?.getTime(),
      }
    })
    return JSON.stringify(todos)
  },
  deserialize: (serializedState: string) => {
    const todos = JSON.parse(serializedState).map((todo: SerializableTodo) => {
      return {
        ...todo,
        createdAt: new Date(todo.createdAt),
      }
    })

    return {
      state: {
        todos,
      },
    }
  },
  // getStorage: () => sessionStorage, // defaults to localstorage
})

const useTodoStore = create<TodoStore>(devtools(TodoStore))

export default useTodoStore
