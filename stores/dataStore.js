import {defineStore} from 'pinia';
export const useDataStore= defineStore('data',()=>{
    let BigData = ref([]);
    const {data,pending,error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    BigData.value = data;
    return {
        BigData
    }
})