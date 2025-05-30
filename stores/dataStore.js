import {defineStore} from 'pinia';
export const useDataStore= defineStore('data',()=>{
    let BigData = ref([]);
    const {data,pending,error} = useFetch('https://dummyjson.com/posts')
    BigData.value = data;
    console.log(BigData.value); 
    return {
        BigData
    }
})