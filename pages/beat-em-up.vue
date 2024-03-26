<script>
export default {
    setup() {
        const contact = useRuntimeConfig().dev.contacts
        return {
            contact
        }
    },
}
</script>

<template>
    <main v-if="!loading" class="page">

    </main>
</template>