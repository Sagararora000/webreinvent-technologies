<template>
    <div
        class="bg-gray-100 flex items-center justify-center p-4 cursor-pointer"
    >
        <div class="bg-white max-w-xl w-full rounded-xl shadow p-6 space-y-4">
            <h2 class="text-2xl font-bold text-gray-900">
                {{ x.title }}
            </h2>

            <div
                class="flex justify-between items-center text-sm text-gray-500"
            >
                <div>👤 {{ x.userId }}</div>
                <div>{{ x.views }} views</div>
            </div>

            <div class="flex flex-wrap gap-2">
                <span
                    v-for="tag in x.tags"
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
                        <span>{{ x.reactions.likes }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span>👎</span>
                        <span>{{ x.reactions.dislikes }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        x: {
            type: Object,
            required: true,
        },
    });
</script>

<style lang="scss" scoped></style>
