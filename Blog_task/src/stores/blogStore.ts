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
  const index = ref<number>(0);
  const userFlag = ref<boolean>(false)

    function getBlogs(){
        if(!blogs.value.length || userFlag.value){
          index.value += 3;
        api.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            blogs.value = response.data.slice(0, index.value);
        })
        . catch (error=>{
            console.error('Error fetching blogs:', error);
        }) 
        }
    }
    function setUserFlag(){
      userFlag.value=true
    }
  return { blogs, getBlogs ,setUserFlag};
});
