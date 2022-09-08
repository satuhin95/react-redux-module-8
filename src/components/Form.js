import React, { useState } from 'react'
import { useAddTodoMutation } from '../features/todo/todoSlice'
import notesImg from '../images/notes.png'
import plusImg from '../images/plus.png'
export default function Form() {
    const [addTodo,{isError}] = useAddTodoMutation();
    const [input, setInput]= useState('');
    const formHandler =(e)=>{
        e.preventDefault();
        addTodo({
            text:input,
            completed:false,
        });
        setInput('');
    }

  return (
    <form onSubmit={formHandler}
    className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
>
    <img
        src={notesImg}
        className="w-6 h-6"
        alt="Add todo"
    />
    <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Type your todo"
        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
    />
    <button
        type="submit"
        className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
    ></button>
</form>
  )
}
