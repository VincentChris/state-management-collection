import { Checkbox } from '@douyinfe/semi-ui'
import { ITodo, useStore } from './store'
import { IconCrossStroked } from '@douyinfe/semi-icons'

function TodoItem({ item }: { item: ITodo }) {
  const { setTodos } = useStore()
  const { title, completed, id } = item

  const toggleCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo,
      ),
    )
  }

  const remove = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex-center h-full">
      <div className="flex">
        <Checkbox checked={completed} onChange={toggleCompleted} />
        <span
          className="ml-12"
          style={{ textDecoration: completed ? 'line-through' : '' }}
        >
          {title}
        </span>
      </div>
      <IconCrossStroked
        onClick={remove}
        style={{ fontSize: 14, cursor: 'pointer' }}
      />
    </div>
  )
}
export default TodoItem
