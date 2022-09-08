import React from 'react'
import { useChangeTodoColorMutation, useDeleteTodoMutation, useToggleTodoMutation, useUpdateTodoMutation } from '../../features/todo/todoSlice';
import cancelImg from '../../images/cancel.png'
import pencilImage from '../../images/pencil.png'
import { useState } from "react";
export default function Todo({todo}) {
    const {id,text,completed,color} = todo;
    const [toggleTodo,{isLoading}] = useToggleTodoMutation();
    const [changeTodoColor,{isError}] = useChangeTodoColorMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [toggleInput, setToggleInput ] = useState(true)
    const [todoText, setInput] = useState("");
    const toggleHandler =(id)=>{
        toggleTodo({
            id,
            data:{
                completed: !completed,
            }
            
        });
    }
    const changeColor =(color)=>{
        changeTodoColor({
            id,
            data:{
                color:color,
            }
        })
    }
    const deleteHandel =(id)=>{
        if(id){
            deleteTodo(id);
        } 
    }
    const handleEdit = (textTodo) => {
        setInput(textTodo)
         setToggleInput(false);
    };
    const handleInputText = (value) => {
        setInput(value);
    };
  
    const updateHandler = (e) => {
        if (e.key === 'Enter') {
            updateTodo({
                id,
                data:{
                    text:todoText
                }
            });
            setToggleInput(true);
        }     
    };
  return (
    <div
        className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
    >
        <div
            className=" relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
        >
            <input
                onClick={()=>toggleHandler(id)}
                type="checkbox"
                className="opacity-0 absolute rounded-full"
            />
             {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}

        </div>

        {completed?(
                <div className="select-none flex-1 line-through"  >
                     {text}
                 </div>
                ):(
                    <div className="select-none flex-1 " >
                     {toggleInput && (<p>{text}</p>)}
                     {!toggleInput && (
                        <input type="text" onKeyDown={updateHandler} onChange={(e)=>handleInputText(e.target.value)}   className=" py-2 border-none"   value={todoText} />

                     )}
                     
                 </div>
                ) } 
          <img
                 src={pencilImage}
                 className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                 alt="Cancel"

                 onClick={ ()=>handleEdit( text)}
             />
        <div onClick={()=>changeColor('green')}
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer  border-green-500 hover:bg-green-500 ${color==='green' && ' bg-green-500'}`}
        ></div>
        <div onClick={()=>changeColor('yellow')}
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color==='yellow' && 'bg-yellow-500'}`}
        ></div>
        <div onClick={()=>changeColor('red')}
            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color==='red' && 'bg-red-500'}`}
        ></div>



        <img
            onClick={()=>deleteHandel(id)}
            src={cancelImg}
            className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
            alt="Cancel"
        />
    </div>
  )
}
