import React from 'react'
import { useComplatedAllTodosMutation ,useDeleteComplatedTodosMutation } from '../features/todo/todoSlice'
import doubleImg from '../images/double-tick.png'
import Form from './Form'
export default function Header({todos}) {
    const [complatedAllTodos]= useComplatedAllTodosMutation();
    const [deleteComplatedTodos]= useDeleteComplatedTodosMutation();
    const complatedHandaler =()=>{
  todos?.map((todo) =>{
        if(!todo.completed){
            complatedAllTodos({
                id:todo.id,
                data:{
                    completed:true,
                }
            });
        }
     } );
        
    }
    const complatedDeleteHandaler = ()=>{
        todos?.map((todo) =>{
            if(todo.completed){
                deleteComplatedTodos(todo.id);
            }
         } );
    }
  return (
    <div>
        <Form/>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={complatedHandaler}>
            <img
                className="w-4 h-4"
                src={doubleImg}
                alt="Complete"
            />
            <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={complatedDeleteHandaler}>Clear completed</li>
    </ul>
</div>
  )
}
