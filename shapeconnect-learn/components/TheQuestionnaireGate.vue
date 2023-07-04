<template>
    <NuxtLink v-slot="{ navigate }" to="/questionnaire" custom>
        <PrimaryButton @click="navigate">QuickConnect</PrimaryButton>
    </NuxtLink>
</template>
