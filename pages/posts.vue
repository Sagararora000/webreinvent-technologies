<script setup>
    import { useDataStore } from '~/stores/dataStore';
    const store = useDataStore();
    const { BigData } = store;
    console.log(BigData.posts);
</script>
<template>
    <div class="text-center">
        This is posts page
        <div class="grid grid-cols-5">
            <div v-for="x in BigData.posts" class="mb-5 border-2 text-center">
                {{ x.id }}
                {{ x.title }}
            </div>
        </div>
    </div>
</template>
