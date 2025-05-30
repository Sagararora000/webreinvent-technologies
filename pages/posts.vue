<script setup>
    import { useDataStore } from '~/stores/dataStore';
    const dataStore = useDataStore();
    let { BigData } = dataStore;
    // console.log(dataStore.BigData);
</script>
<template>
    This is posts page
    <div class="grid grid-cols-5">
        <div v-for="x in BigData" class="mb-5">
            {{ x.body }}
        </div>
    </div>
</template>
