import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// WELCOME
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};



// ASSIGNMENTS
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;

export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};

export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};



// TODOS
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};


export const updateCompleted = async (todo: any, completed: boolean) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/completed/${completed}`);
    return response.data;
};

export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};

export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
  };
  