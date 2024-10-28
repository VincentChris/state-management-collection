import { create } from 'zustand'

export interface ITodo {
  id: string
  title: string
  completed: boolean
}

export interface IStore {
  filter: string
  todos: Array<ITodo>
  setFilter: (filter: string) => void
  setTodos: (fn: (p: IStore['todos']) => IStore['todos']) => void
}

export const useStore = create<IStore>((set) => ({
  filter: 'All',
  todos: [],
  setFilter(filter) {
    set({ filter })
  },
  setTodos(fn) {
    set((pre) => ({ todos: fn(pre.todos) }))
  },
}))
