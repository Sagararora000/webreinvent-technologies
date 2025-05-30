<template>
    <div class="text-center bg-gray-100">
        <p class="text-[#ff00ea] text-3xl font-bold">Your Post</p>
        <button
            class="bg-yellow-500 text-black rounded-full px-4 mt-5"
            @click="navigateTo('/posts')"
        >
            back
        </button>
        <div class="bg-gray-100 flex items-center justify-center p-4 h-screen">
            <div
                class="bg-white max-w-xl w-full rounded-xl shadow p-6 space-y-4"
            >
                <h2 class="text-2xl font-bold text-gray-900">
                    {{ postTitle }}
                </h2>

                <div
                    class="flex justify-between items-center text-sm text-gray-500"
                >
                    <div>👤 {{ postUserid }}</div>
                    <div>{{ postViews }} views</div>
                </div>
                <p class="text-gray-700 leading-relaxed">
                    {{ postBody }}
                </p>
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="tag in postTags"
                        class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >{{ tag }}</span
                    >
                </div>

                <div
                    class="flex justify-between items-center pt-2 text-gray-600 text-sm"
                >
                    <div class="flex gap-6 items-center">
                        <div class="flex items-center gap-1">
                            <span>👍</span>
                            <span>{{ postlikes }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span>👎</span>
                            <span>{{ postdislikes }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();

    let idofPage = route.params.i;
    const postData = ref(null);
    const error = ref(null);
    const postid = ref(null);
    const postlikes = ref(null);
    const postdislikes = ref(null);
    const postTitle = ref(null);
    const postBody = ref(null);
    const postTags = ref(null);
    const postViews = ref(null);
    const postUserid = ref(null);
    async function fetchData() {
        try {
            const { data } = await useFetch(
                `https://dummyjson.com/posts/${idofPage}`
            );

            postData.value = data;
            postid.value = data.value.id;
            postlikes.value = data.value.reactions.likes;
            postdislikes.value = data.value.reactions.dislikes;
            postTitle.value = data.value.title;
            postBody.value = data.value.body;
            postTags.value = data.value.tags;
            postViews.value = data.value.views;
            postUserid.value = data.value.userId;
        } catch (err) {
            error.value = err;
        }
        console.log(postData.value);
    }

    fetchData();
</script>
