<script setup>
    import PostCard from '~/components/PostCard.vue';
    import { useDataStore } from '~/stores/dataStore';
    const store = useDataStore();
    const { navigateToPost, BigData } = store;
</script>
<template>
    <div class="text-center">
        <p class="text-[#89CFF0] text-3xl font-bold p-4">This is posts page</p>

        <div class="grid grid-cols-3">
            <PostCard
                v-for="post in BigData.posts"
                :key="post.id"
                :x="post"
                @click="navigateToPost(post.id)"
            />
        </div>
    </div>
</template>
