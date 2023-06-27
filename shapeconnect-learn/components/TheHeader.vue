<script setup lang="ts">
import DefaultMarginLayout from '~/layout/DefaultMarginLayout.vue'
import DividerHorizontal from './DividerHorizontal.vue'
</script>

<template>
    <DefaultMarginLayout>
        <div class="flex flex-row justify-between">
            <div>Logo</div>
            <div class="space-x-2">
                <GhostButton>Log In</GhostButton>
                <PrimaryButton>Sign Up free</PrimaryButton>
            </div>
        </div>
    </DefaultMarginLayout>
    <DividerHorizontal />
</template>
