
import TodoCard from "./TodoCard"

export default function TodoList(props) {

  const { todos } = props;  
  return (
    <ul className="main">
      {
        todos.map((item, index) => {
          return (
            <TodoCard key={index}>
                <p>{item}</p>
            </TodoCard>
          )
        })
      }
     </ul>
  )
}
