import React, { useState } from 'react'
import { useGetTodosQuery } from '../../features/todo/todoSlice'
import Header from '../Header';
import Todo from './Todo'

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return "No task";
        case 1:
            return "1 task";
        default:
            return `${no_of_todos} tasks`;
    }
};

export default function Todos() {
    const {data:todos,isError,isLoading} = useGetTodosQuery();
    const todosIncomplete = todos?.filter((todo) => !todo.completed).length;
    const [color,setColor] = useState('');
    const [status, setStatus] = useState('');


    const filterByStatus = (todo) => {
        switch (status) {
            case "Complete":
                return todo.completed;

            case "Incomplete":
                return !todo.completed;

            default:
                return true;
        }
    };
    const filterByColor = (todo) => {
        switch (color) {
            case "yellow":
                return todo.color =='yellow';

            case "green":
                return todo.color == 'green';
            case "red":
                return todo.color == 'red';    

            default:
                return true;
        }
    };
  

    let constent = '';
        if (isLoading) {
            constent = <div>Loading........</div>
        }
        if (!isLoading && isError) {
            constent = <div>There was an error</div>
        }
        if (!isLoading && !isError && todos?.length === 0) {
            constent = <div>Data not Found</div>
        }
        if (!isLoading && !isError && todos?.length > 0) {
            constent = todos
            .filter(filterByStatus)
            .filter(filterByColor)
            .map(todo => <Todo key={todo.id} todo={todo} />)
        }
  return (
    <>
        <Header todos={todos} />
    <hr className="mt-4" /> 
    <div
        className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {constent}
    </div>
    <hr className="mt-4" />
    <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodos(todosIncomplete)}  left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => setStatus("All")}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => setStatus("Incomplete")}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => setStatus("Complete")}>Complete</li>
            <li></li>
            <li></li>
            <li onClick={() => setColor("green")}
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color=== 'green' && 'bg-green-500'}`}
            ></li>
            <li onClick={() => setColor("red")}
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${color=== 'red' && 'bg-red-500'}`}
            ></li>
            <li onClick={() => setColor("yellow")}
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${color=== 'yellow' && 'bg-yellow-500'}`}
            ></li>
             <li onClick={() => setColor("")}
                className={`h-3 w-3 border-2 border-black-500 md:hover:bg-black-500 rounded-full cursor-pointer `}
            ></li>
        </ul>
    </div>
</>
  )
}
