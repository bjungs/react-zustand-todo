import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Todos } from './components/todos'

export function App() {
  return (
    <div
      className={`
        h-screen w-screen
        flex flex-col
        items-center
        xl:px-52 px-32
        py-5
      `}
    >
      <div className={`mb-5`}>
        <Header />
      </div>
      <main className={`w-full`}>
        <div
          className={`
            flex
            flex-col
            items-center
            justify-center
          `}
        >
          <Routes>
            <Route path='/' element={<Todos />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
