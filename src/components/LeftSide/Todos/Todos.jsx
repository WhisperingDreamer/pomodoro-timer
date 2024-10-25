import {  useState } from "react";
import TodosItem from "../TodosItem/TodosItem";

const Todos = () => {
    const [todos, setTodos] = useState(new Array());
    const classTasks = `todos-item ${(todos.length !== 0 ? 'tasks' : '')}`

    const createTodosItem = (e) => {
        if (e.key === 'Enter') {
            const newTodoItem ={
                content: e.target.value,
                active: false,
                key: generateKey()
            }
            const oldArr = JSON.parse(JSON.stringify(todos));
            oldArr.unshift(newTodoItem);
            setTodos(oldArr);
            e.target.value = ''
        }
    }

    const onComplete = (key) => {
        const newArr = [...todos]
        newArr.forEach(item => {
            if (item.key === key) item.active = !item.active
        })
        setTodos(newArr)
    }

    const onDelete = (key) => {
        setTodos(todos.filter(item => item.key !== key))
    }

    const generateKey = () => Math.random().toString(36).substr(6)

    return (
        <div className="left-side__todos">
            <div className="todos__input">
                <input type="text"
                       className="todos__input-field"
                       placeholder="What's next?"
                       name="todos-input"
                       onKeyDown={(e) => createTodosItem(e)}
                />
            </div>
            <div className={classTasks}>
                {todos.map((task) => (<TodosItem
                    content={task.content}
                    complete={task.active}
                    key={task.key}
                    id={task.key}
                    onComplete={onComplete}
                    onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default Todos;
