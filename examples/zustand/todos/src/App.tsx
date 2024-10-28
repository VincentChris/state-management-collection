import { Input } from '@douyinfe/semi-ui'
import './App.css'
import Filter from './Filter'
import Filtered from './Filtered'
import { useState } from 'react'
import { useStore } from './store'

function App() {
  const [text, setText] = useState('')
  const { setTodos } = useStore()
  return (
    <>
      <Filter />
      <Input
        placeholder="Type ..."
        value={text}
        onChange={setText}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (text.trim() === '' || text.trim() === undefined) return
            e.preventDefault()
            setTodos((prevTodos) => [
              {
                id: `${window.crypto.randomUUID()}`,
                title: text,
                completed: false,
              },
              ...prevTodos,
            ])
            setText('')
            console.log('Add new todo:', text)
            // Add new todo here
          }
        }}
      />
      <Filtered />
    </>
  )
}

export default App
