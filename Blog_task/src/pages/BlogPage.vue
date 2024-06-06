<template>
  <q-page class="q-pa-md">
    <div id="link-container">
      <a href="/" id="link">Click here to go back to main page</a>
    </div>
    <div class="row">
      <q-btn @click="addBlogs" class="q-ma-md">Get More Blogs</q-btn>
      <q-btn @click="removeBlogs" class="q-ma-md">Delete Some Blogs</q-btn>
    </div>
    <div class="q-pa-md example-row-stacked-to-horizontal">
      <div v-for="(blog, index) in availableBlogs" :key="index" class="row">
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
import { onMounted, toRaw, computed, ref } from 'vue';

const blogs = useBlogStore();
const packCount = ref<number>(1);

const getAvailableBlogs = () => {
  let index = packCount.value * 3;
  return toRaw(blogs.blogs.slice(0, index));
};

const availableBlogs = computed(getAvailableBlogs);

function addBlogs() {
  packCount.value += 1;
}
function removeBlogs() {
  packCount.value -= 1;
}
onMounted(() => {
  blogs.getBlogs();
});
</script>

<!-- /* Throws error as computed property is having side effects
  const availableBlogs = computed(() => {
    let index = packCount.value * 3;
    return toRaw(blogs.blogs.splice(0, index));
  });
  */ -->

<style scoped lang="scss">
#link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100px;
  background-color: #333; // Dark background
  color: #fff; // White text
  text-decoration: none; // Remove underline
  border-radius: 4px; // Optional: rounded corners
  transition: background-color 0.3s ease; // Smooth transition for background color
  padding: 20px;

  &:hover {
    background-color: #555; // Darker background on hover
  }

  &:active {
    background-color: #111; // Even darker background on active
  }
}
#container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
</style>
