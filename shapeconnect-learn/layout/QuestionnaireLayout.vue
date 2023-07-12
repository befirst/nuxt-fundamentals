<script setup lang="ts">
import DefaultMarginLayout from '~/layout/DefaultMarginLayout.vue'
</script>

<template>
    <div class="h-screen flex flex-col">
        <TheHeader />
        <DefaultMarginLayout
            class="flex flex-col flex-auto mt-16 mb-11 overflow-hidden"
        >
            <!-- <DefaultMarginLayout> -->
            <slot />
        </DefaultMarginLayout>
    </div>
</template>

<style scoped></style>
