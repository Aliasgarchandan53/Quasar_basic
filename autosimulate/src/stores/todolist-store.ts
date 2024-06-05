import { defineStore } from 'pinia';
export type Todo = {
    tid:number,
    task:string
  }

export const useTodoList = defineStore({
    id:'todolist',
    state:()=>({
      todolist: [
        { tid: 1, task: 'new task 1' },
        { tid: 2, task: 'new task 2' }
      ] as Todo[]
    }),
    getters:{
      todoCount:(state)=>state.todolist.length,
    },
    actions:{
      addTodo(todo:Todo){
        this.todolist.push(todo)
      },
      removeTodo(todo:Todo){
        this.todolist=this.todolist.filter((td)=> td.tid!==todo.tid)
      }
    }
})