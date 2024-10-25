import Todos from "./Todos/Todos";

const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="left-side__wrapper">
                <h1 className="left-side__header">Tasks</h1>
                <Todos />
            </div>
        </div>
    )
}

export default LeftSide;
