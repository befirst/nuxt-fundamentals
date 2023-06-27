<template>
    <NuxtLink v-slot="{ navigate }" to="/questionnaire" custom>
        <PrimaryButton @click="navigate">About page</PrimaryButton>
    </NuxtLink>
</template>