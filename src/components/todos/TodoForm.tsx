import React, { ForwardedRef, Ref } from 'react'

import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react'
import { createTodo, Todo } from './'

type TodoFormProps = {
  onNewTodo: (newTodo: Todo) => void
}

export function TodoForm({ onNewTodo }: TodoFormProps) {
  const [title, setTitle] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  function addTodo(e: SyntheticEvent) {
    e.preventDefault()
    if (title) {
      onNewTodo(createTodo(title))
      setTitle('')
    }
  }

  function focusOnInput() {
    inputRef.current?.focus()
  }

  function setTitleFromInput(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={addTodo} className={`flex flex-col`}>
      <fieldset>
        <legend>Create a new TODO</legend>
        <div className={`mb-6`}>
          <label className={`text-sm font-medium block mb-2`} htmlFor={'title'}>
            Title
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
            type={'text'}
            name={'title'}
            value={title}
            onChange={setTitleFromInput}
          />
        </div>
      </fieldset>
      <button // submit
        className={`
          text-white
          bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400
          font-medium
          rounded-lg
          text-sm
          px-5 py-2.5
          self-end
        `}
        onClick={focusOnInput}
        disabled={!title}
        type='submit'
      >
        Add TODO
      </button>
    </form>
  )
}

export default TodoForm
