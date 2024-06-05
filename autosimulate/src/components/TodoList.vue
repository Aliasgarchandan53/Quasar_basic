<template>
  <div id="main" class="full-height  flex-col items-center q-pa-md bg-grey-9 text-white q-rounded-borders">
    <div id="form-container" class="row items-center q-pa-md bg-grey-8 q-rounded-borders q-gutter-md q-mb-md">
      <q-input
        v-model="todoStr"
        type="text"
        label="Enter a new task"
        label-color="white"
        bg-color="grey-7"
        color="white"
        class="q-ma-sm q-rounded-borders text-h6"
        input-class="text-white"
        label-class="text-bold"
      />
      <q-btn round color="positive" icon="add" class="q-ma-sm q-ml-auto" @click="handleSubmit" />
    </div>
    <div  v-if="!todolist.todoCount" class="q-pa-sm q-ma-sm q-rounded-borders bg-grey-8 q-mb-md text-h5">
      <p>Please enter a new todo !</p>
    </div>
    <div v-else v-for="todo in todolist.todolist" :key="todo.tid" class="q-pa-sm q-ma-sm q-rounded-borders bg-grey-8 q-mb-md">
      <todo-component :todo="todo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoComponent from './TodoComponent.vue';
import { Todo, useTodoList } from '../stores/todolist-store';

const todolist = useTodoList();
const todoStr = ref<string>('');
let Id = 1000;

function handleSubmit(): void {
  if (todoStr.value.trim()) {
    let todo: Todo = {
      tid: Id++,
      task: todoStr.value
    };
    todolist.addTodo(todo);
    todoStr.value = '';
  }
}
</script>

<style>
.full-height {
  height: 100vh;
}
.text-bold {
  font-weight: bold;
}
</style>
