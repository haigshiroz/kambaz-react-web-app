import { Button, ListGroup } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

export default function TodoItem(
    { todo }: {
        todo: { id: string; title: string };
    }) {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item key={todo.id}>
            <span className="m-2">{todo.title}</span>

            <Button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click" className="btn-danger m-1 float-end">
                Delete
            </Button>

            <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click" className="btn-primary m-1 float-end">
                Edit
            </Button>
        </ListGroup.Item>
    );
}