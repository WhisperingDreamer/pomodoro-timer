// eslint-disable-next-line react/prop-types
const TodosItem = ({ content, complete, id, onComplete, onDelete }) => {
    const classList = `todos-item ${(complete ? 'todos-item__complete' : '')}`
    
    return (
        <div className={classList} key={id}>
            <div onClick={() => onComplete(id)} className='todos-item__text'>
                {content}
            </div>
            <button onClick={() => onDelete(id)} className="delete-task">&times;</button>
        </div>
    )
}

export default TodosItem;
