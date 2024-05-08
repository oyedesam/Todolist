
import TodoInput  from './components/TodoInput'
import TodoList   from './components/TodoList' 

function App() {
  let todoItems:string[] = [
    'Go to the Gym', 
    'Drink More water', 
    'Eat more vegetables'
  ]

  return (
    <>
      <TodoInput />
      <TodoList  todos={todoItems} />
    </>
  )
}

export default App
