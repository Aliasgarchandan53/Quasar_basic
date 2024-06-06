<template>
  <q-page class="q-pa-md">
    <q-btn @click="getBlogsFromStore" class="q-mb-md">Get Data (more blogs)</q-btn>
  <div class="q-pa-md example-row-stacked-to-horizontal">
    <div v-for="(blog, index) in blogs.blogs" :key="index" class="row">
      <div class="col-12 col-md">
        <blog-card :blog="blog"></blog-card>
      </div>
    </div>
  </div>

  </q-page>
</template>

<script setup lang="ts">
import BlogCard from '../components/BlogCard.vue';
import { useBlogStore } from 'src/stores/blogStore';
import { onMounted, toRaw } from 'vue';

const blogs = useBlogStore();

function getBlogsFromStore() {
  blogs.setUserFlag()
  blogs.getBlogs();
  console.log(toRaw(blogs.blogs));
  return toRaw(blogs.blogs);
}
onMounted(()=>{
  blogs.getBlogs();
  return toRaw(blogs.blogs);
})
</script>
