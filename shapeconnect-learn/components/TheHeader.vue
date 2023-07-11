<script setup lang="ts">
import DefaultMarginLayout from '~/layout/DefaultMarginLayout.vue'
import DividerHorizontal from './DividerHorizontal.vue'
</script>

<template>
    <DefaultMarginLayout>
        <div class="flex flex-row items-center justify-between">
            <img
                class="h-6 w-60"
                src="~/assets/svg/logo_full.svg"
                alt="Shape Connect"
            />
            <div class="space-x-2">
                <GhostButton>Log In</GhostButton>
                <PrimaryButton>Sign Up free</PrimaryButton>
            </div>
        </div>
    </DefaultMarginLayout>
    <DividerHorizontal />
</template>
