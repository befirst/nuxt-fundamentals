<script setup lang="ts">
import QuestionnaireLayout from '~/layout/QuestionnaireLayout.vue'
</script>

<template>
    <QuestionnaireLayout>
        <div class="flex items-center justify-between mb-4">
            <h1>QuickConnect</h1>
            <OutlineButton>Reset Questionnaire</OutlineButton>
        </div>
        <p>
            Let’s diagnose your need or challenge and source you software,
            experts, or resources that can help.
        </p>

        <div class="chat-container mt-7">
            <TheChatContainer style="flex: 2" />
            <div class="chat-helper-area">
                <TheChatStepper />
                <TheServiceCard />
            </div>
        </div>
    </QuestionnaireLayout>
</template>

<style scoped>
h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.05em;
    color: #4d4d4d;
}

p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #4d4d4d;
}

.chat-container {
    display: flex;
    flex: 1;
    gap: 2.5rem;
    flex-direction: row;
    justify-content: space-between;
}

.chat-helper-area {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2rem;
}
</style>
