import { animated, useTransition } from '@react-spring/web'
import { useStore } from './store'
import TodoItem from './TodoItem'

function Filtered() {
  const { filter, todos } = useStore()
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true
    if (filter === 'Completed') return todo.completed
    return !todo.completed
  })

  const transitions = useTransition(filteredTodos, {
    keys: (todo) => todo.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 35 },
    leave: { opacity: 0, height: 0 },
  })
  return transitions((style, item) => (
    <animated.div className="item" style={style}>
      <TodoItem item={item} />
    </animated.div>
  ))
}

export default Filtered
