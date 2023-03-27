import React from 'react';
import logo from './logo.svg';
import './App.css';

type ITodo = {
    // Our todo should have the title and completed fields and the id field to 
    id: number;
    title: string;
    completed: boolean;
}

type ITodos = {
    todos: ITodo[], // Our Todos is an array of Todo
}

const AddTodoComponent = ({ addTodos }: { addTodos: (text: string) => void }) => {
    const [todo, setTodo] = React.useState<string>("");
    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!todo) {
            alert("Please enter a todo");
        } 
		else {
            addTodos(todo);
            setTodo("");
        }
    };
    return (
        <div className="AddTodo">
            <form>
                <input
                    value={todo}
                    onChange={e => { setTodo(e.target.value) }} />
                <button onClick={submit}>Add</button>
            </form>
        </div>
    );
};

const TodosComponent: React.FC<{
    todos: ITodos,
    toggleTodos: (id: number) => void,
    deleteTodos: (id: number) => void
}> = ({ todos, toggleTodos, deleteTodos }) => {
    const deleteTodo = (id: number) => {
        if (window.confirm(`Are you sure you want to delete todo?`)) {
            deleteTodos(id);
        }
    }
    return (
        <div className="section__todos">
            <h2>Todo List</h2>
            {todos.todos.length ? <ul className="todos">
                {todos.todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodos(todo.id)} />
                        <button onClick={() => { deleteTodo(todo.id) }}>X</button>
                    </li>
                ))}
            </ul> : <div>No Todo has been created</div>}
        </div>
    );
};

function App() {
    const [todos, setTodos] = React.useState<ITodos>({ todos: [] });
    const addTodos = (title: string) => {
        setTodos({
            todos: [
                { title, completed: false, id: todos.todos.length + 1 },
                ...todos.todos
            ]
        });
    };
    const deleteTodos = (id: number) => {
        setTodos({
            todos: todos.todos.filter(t => t.id !== id)
        });
    };
    const toggleTodos = (id: number) => {
        setTodos({
            todos: todos.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        });
    }

    return (
        
        <div className="App">
            <header className="style">
                <h1><b>Todo App</b></h1>
            </header>
            
            <hr />
            <AddTodoComponent addTodos={addTodos} />
            <TodosComponent
                todos={todos}
                toggleTodos={toggleTodos}
                deleteTodos={deleteTodos} />
        </div>
    );
}

export default App;
