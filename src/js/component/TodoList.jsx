import React, { useState } from 'react'

const TodoList = () => {
    const [ inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [id, setid] = useState(1)
    
    return (
        <div className="container">
            <h1>My Todos</h1>
            <ul>
                <li>
                    <input      
                        type="text"
                        onChange= {(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown= {(e) => {
                        console.log("key was pressed", e.key)
                            if (e.key === "Enter") { 
                                const item = {
                                    string: inputValue, 
                                    id: id
                                }
                                setTodos([...todos, item]);
                                setInputValue("");
                                setid(id => id+1);
                                }
                            }}
                        placeholder= "What do you need done?">
                    </input>
                </li>

                {todos.map((item) => (
                    <div key= {item.id}>
                        <ul>
                            <li >
                            {item.string}<i 
                            class="fas fa-trash-alt"
                            onClick={() =>
                                setTodos(
                                    todos.filter(
                                        (todos) => 
                                        index != todos
                                ))
                            }
                            ></i>
                            </li>   
                        </ul>
                    </div>
                    
                ))}
        
            </ul>
            <div> {todos.length} task </div>
        </div>
  )
}
//add into array --> concat
//Delete from array --> filter 
// update --> map

export default TodoList
