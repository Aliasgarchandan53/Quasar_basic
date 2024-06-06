<template>
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">{{ props.blog.title }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <img :src="props.blog.thumbnailUrl" alt="Blog Thumbnail" />
      </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { Blog } from '../stores/blogStore';
const props = defineProps<{ blog: Blog }>();
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
