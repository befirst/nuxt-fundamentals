<script setup lang="ts">
import { ServiceUser } from '~/types/ServiceUser'

const props = defineProps({
    serviceUser: {
        type: Object as PropType<ServiceUser>,
        default: () =>
            ({
                name: 'Yvonne P',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                title: 'Solutions Expert & Former Business Owner',
            } as ServiceUser),
    },
    message: {
        type: String,
        default:
            'Answering these few questions will help us find the right solutions for your business.',
    },
})
</script>

<template>
    <div class="service-card">
        <div class="service-card-header">
            <img
                class="h-10 w-10 rounded-full"
                :src="props.serviceUser.avatar"
                alt="Avatar"
                onerror="this.onerror=null;this.src='/assets/svg/avatar.svg';"
            />
            <div>
                <p class="name">{{ props.serviceUser.name }}</p>
                <p class="title">{{ props.serviceUser.title }}</p>
            </div>
        </div>
        <p class="service-card-message">
            {{ props.message }}
        </p>
    </div>
</template>

<style scoped>
.service-card {
    display: flex;
    flex-direction: column;
    gap: 24px;

    border: 1px solid #ffaa00;
    border-radius: 16px;
    background-color: #fff8eb;

    padding: 24px;
}

.service-card-header {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}

.name {
    color: #4d4d4d;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
}

.title {
    color: #8c8a86;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
}

.service-card-message {
    color: #4d4d4d;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
}
</style>
