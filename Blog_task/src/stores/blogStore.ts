import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export type Blog = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export const useBlogStore = defineStore('blogStore', () => {
  const blogs = ref<Blog[]>([]);

    function getBlogs(){
      if(!blogs.value.length){
        api.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            blogs.value = response.data
        })
        . catch (error=>{
            console.error('Error fetching blogs:', error);
        }) 
        }
    }
  return { blogs, getBlogs };
});
