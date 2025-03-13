import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <ListGroup.Item className="d-flex text-nowrap">
            <FormControl className="" value={todo.title} onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />

            <Button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click" className="btn-warning m-1">
                Update
            </Button>

            <Button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click" className="btn-success m-1">
                Add
            </Button>
        </ListGroup.Item>
    );
}
