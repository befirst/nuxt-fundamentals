<template>
    <div class="main-area">
        <div class="chat-area"></div>
        <div class="bottom-area">
            <TheChatInput />
        </div>
    </div>
</template>

<style scoped>
.main-area {
    display: flex;
    flex-direction: column;
    border: 1px solid #eeeeee;
    border-radius: 16px;
    padding: 0 2rem 2rem 2rem;
}

.chat-area {
    flex: 1;
}

.bottom-area {
}
</style>
