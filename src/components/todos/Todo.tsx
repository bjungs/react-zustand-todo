import { FiTrash } from 'react-icons/fi'

export type Todo = {
  title: string
  description: string
  createdAt: Date
  completed: boolean
}

type TodoProps = Todo & {
  onStatusChange: (completed: boolean) => void
  onRemoveClick: () => void
}

export function createTodo(title: string, description: string): Todo {
  return {
    title,
    description,
    createdAt: new Date(),
    completed: false,
  }
}

export function Todo({
  title,
  description,
  createdAt,
  completed = false,
  onStatusChange,
  onRemoveClick,
}: TodoProps) {
  const updateStatus = () => onStatusChange(!completed)

  const dateTime = createdAt.toISOString().split('T')
  const date = dateTime[0]
  const time = dateTime[1].split('.')[0]

  return (
    <div
      className={`
        flex
        w-96
        mb-6
        border-2
        px-2 py-2
        ${completed ? 'bg-green-100' : ''}
      `}
    >
      <div
        className={`
          flex
          flex-col
          flex-grow
        `}
      >
        <h3
          className={`
            flex-grow
            inline-block
            font-medium
            text-lg
            break-all
          `}
        >
          {title}
        </h3>
        <p>{description}</p>
        <div className={`text-xs`}>
          create on {date} at {time}
        </div>
      </div>
      <div
        className={`
          flex
          flex-col
          items-center
        `}
      >
        <input
          className={`
            w-4
            h-4
            cursor-pointer
          `}
          type='checkbox'
          checked={completed}
          onClick={updateStatus}
        />
        <FiTrash
          className={`
            w-4 h-4
            mt-1
            cursor-pointer
          `}
          size='16'
          onClick={onRemoveClick}
        />
      </div>
    </div>
  )
}

export default Todo
