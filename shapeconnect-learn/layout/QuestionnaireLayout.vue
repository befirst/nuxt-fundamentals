<script setup lang="ts">
import DefaultMarginLayout from '~/layout/DefaultMarginLayout.vue';
</script>

<template>
    <div>
        <TheHeader />
        <DefaultMarginLayout>
            <slot />
            <div class="bg-red h-screen w-screen"></div>
        </DefaultMarginLayout>
    </div>
</template>
