<template>
    <div class="q-pa-md bg-secondary text-white q-gutter-xs q-rounded-borders flex items-center justify-between">
      <p class="text-h5 q-mr-md q-pa-xs q-ma-xs text-center">{{ props.todo.task }}</p>
      <q-btn round color="deep-orange" icon="delete" class="q-ml-auto" @click="deleteTodo(props.todo)" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { Todo, useTodoList } from 'src/stores/todolist-store';
  const props = defineProps<{ todo: Todo }>();
  
  const todolist = useTodoList();
  
  function deleteTodo(todo: Todo) {
    todolist.removeTodo(todo);
  }
  </script>
  