<script setup lang="ts">
const props = defineProps({
    activeStep: {
        type: Number,
        default: 6,
    },
    totalSteps: {
        type: Number,
        default: 9,
    },
})

const numberOfSeparators = computed(() => {
    const { totalSteps } = props
    return totalSteps - 1
})

const finishedSteps = computed(() => {
    const { activeStep } = props
    return activeStep - 1
})

const showActiveBlock = computed(() => {
    const { activeStep, totalSteps } = props
    return activeStep > 0 && activeStep <= totalSteps
})

const oneStepWidth = computed(() => {
    const { totalSteps } = props
    return (1 / totalSteps) * 100
})

const finishedStepWidth = computed(() => {
    return oneStepWidth.value * finishedSteps.value
})
</script>

<template>
    <div class="stepper">
        <div
            class="finished-step"
            :style="{ width: finishedStepWidth + '%' }"
        />
        <div
            v-show="showActiveBlock"
            class="current-step"
            :style="{ width: oneStepWidth + '%' }"
        />
        <div class="separators-block">
            <div v-for="n in numberOfSeparators" :key="n" class="separator">
                <div
                    v-if="n <= activeStep"
                    class="separator active-separator"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.separators-block {
    z-index: 1;
    position: absolute;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 22px;
    width: 100%;
}

.separator {
    height: 100%;
    width: 1px;
    background-color: #a2a2a23d;
}

.active-separator {
    background-color: #ffffff66;
}

.stepper {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    height: 24px;
    border: 1px solid #0080ff;
    box-shadow: inset 0px 1px 0px #ffffff66, inset 0px -1px 0px #ffffff66,
        inset 1px 0px 0px #ffffff66, inset -1px 0px 0px #ffffff66;
    border-radius: 4px;
}

.current-step {
    z-index: -1;
    height: 100%;
    background-color: #ffc800;
}

.finished-step {
    z-index: -1;
    height: 100%;
    background-color: var(--active-color);
}
</style>
