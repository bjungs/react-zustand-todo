import { FiTrash } from 'react-icons/fi'

export type Todo = {
  title: string
  completed: boolean
  createdAt: Date
}

type TodoProps = Todo & {
  onStatusChange: (completed: boolean) => void
  onRemoveClick: () => void
}

export function createTodo(title: string, completed: boolean = false): Todo {
  return {
    title,
    completed,
    createdAt: new Date(),
  }
}

function formatDateTime(dateTime: Date): string {
  const dateTimeString = dateTime.toISOString().split('T')
  const date = dateTimeString[0]
  const time = dateTimeString[1].split('.')[0]
  return `created on ${date} at ${time}`
}

export function Todo({
  title,
  createdAt,
  completed = false,
  onStatusChange,
  onRemoveClick,
}: TodoProps) {
  const updateStatus = () => onStatusChange(!completed)
  const dateTimeString = formatDateTime(createdAt)

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
      <div // content
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
        <div className={`text-xs`}>{dateTimeString}</div>
      </div>
      <div // inputs
        className={`
          flex
          flex-col
          items-center
          ml-1
        `}
      >
        <input // 'complete' checkbox
          className={`
            w-4
            h-4
            cursor-pointer
          `}
          type='checkbox'
          checked={completed}
          onClick={updateStatus}
        />
        <FiTrash // 'delete' btn
          className={`
            w-4 h-4
            mt-2
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
