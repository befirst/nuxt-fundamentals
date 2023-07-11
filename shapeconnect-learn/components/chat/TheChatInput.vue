<template>
    <div class="the-input">
        <input
            type="text"
            placeholder="Type your text here..."
            class="input input-lg w-full flex-1"
        />
        <button type="submit" class="flex-none">
            <img src="~/assets/svg/send.svg" alt="send" border="0" />
        </button>
    </div>
</template>

<style>
.the-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.the-input input {
    border-radius: 16px;
    border-color: #999999;
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
}
</style>
