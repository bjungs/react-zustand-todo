import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { createTodo, Todo } from './'

type TodoFormProps = {
  onNewTodo: (newTodo: Todo) => void
}

type TodoFormFieldProps = {
  label: string
  type: string
  value: any
  onChange: (newValue: any) => void
}

function TodoFormField({ label, type, value, onChange }: TodoFormFieldProps) {
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={`mb-6`}>
      <label className={`text-sm font-medium block mb-2`} htmlFor={label}>
        {label}
      </label>
      <input
        className={`
          bg-gray-50
          border border-gray-300
          sm:text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          p-2.5
          w-full
        `}
        type={type}
        name={label}
        value={value}
        onChange={updateValue}
      />
    </div>
  )
}

export function TodoForm({ onNewTodo }: TodoFormProps) {
  const [title, setTitle] = useState<string>('')

  function addTodo(e: SyntheticEvent) {
    e.preventDefault()
    if (title) {
      onNewTodo(createTodo(title))
      setTitle('')
    }
  }

  return (
    <form onSubmit={addTodo} className={`flex flex-col`}>
      <fieldset>
        <legend>Create a new TODO</legend>
        <TodoFormField
          type='text'
          label='Title'
          value={title}
          onChange={setTitle}
        />
      </fieldset>
      <button
        className={`
          text-white
          bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400
          font-medium
          rounded-lg
          text-sm
          px-5 py-2.5
          self-end
        `}
        disabled={!title}
        type='submit'
      >
        Add TODO
      </button>
    </form>
  )
}

export default TodoForm
