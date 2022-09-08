import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const todoSlice = createApi({
    reducerPath:'todos',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://react-todos-app-module-8.herokuapp.com/api",
    }),
    tagTypes:['Todos'],
    endpoints:(builder)=>({
        getTodos:builder.query({
            query:()=>'/todos',
            keepUnusedDataFor:600,
            providesTags:['Todos']
        }),
        addTodo:builder.mutation({
            query:(data)=>({
                url:'/todos',
                method:"POST",
                body:data,
            }),
            invalidatesTags:["Todos"],
        }),
        toggleTodo:builder.mutation({
            query:({id,data})=>({
                url:`/todos/${id}`,
                method:"PATCH",
                body:data,
            }),
            invalidatesTags:["Todos"],
        }),
        changeTodoColor:builder.mutation({
            query:({id,data})=>({
                url:`/todos/${id}`,
                method:"PATCH",
                body:data,
            }),
            invalidatesTags:["Todos"],
        }),
        deleteTodo:builder.mutation({
            query:(id)=>({
                url:`/todos/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Todos"],
        }),
        complatedAllTodos:builder.mutation({
            query:({id,data})=>({
                url:`/todos/${id}`,
                method:'PATCH',
                body:data,
            }),
            invalidatesTags:['Todos'],
        }),
        deleteComplatedTodos:builder.mutation({
            query:(id)=>({
                url:`/todos/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Todos"],
        }),
        updateTodo:builder.mutation({
            query:({id,data})=>({
                url:`/todos/${id}`,
                method:'PATCH',
                body:data,
            }),
            invalidatesTags:["Todos"],
        })
    })
})



export const {useGetTodosQuery, useAddTodoMutation, useToggleTodoMutation, useChangeTodoColorMutation , useDeleteTodoMutation,useComplatedAllTodosMutation , useDeleteComplatedTodosMutation, useUpdateTodoMutation} = todoSlice;