<script setup lang="ts">
import DefaultMarginLayout from '~/layout/DefaultMarginLayout.vue'
import DividerHorizontal from './DividerHorizontal.vue'
</script>

<template>
    <DefaultMarginLayout>
        <div class="flex flex-row justify-between">
            <div>Logo</div>
            <div class="space-x-2">
                <button class="btn btn-ghost">Login</button>
                <button class="btn btn-primary">Sign up free</button>
            </div>
        </div>
    </DefaultMarginLayout>
    <DividerHorizontal />
</template>
