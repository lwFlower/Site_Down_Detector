<script setup lang="ts">
const { data: monitors, refresh} = await useFetch('/api/monitors')

const form = reactive({ url: '', name: '', intervalSec: 300 })

async function addMonitor() {
    await $fetch('/api/monitors', { method: 'POST', body: form })
    form.url = ''
    form.name = ''
    await refresh()
}
</script>

<template>
    <div>
        <h1>Мониторы</h1>

        <form @submit.prevent="addMonitor">
            <input v-model="form.name" placeholder="Название" />
            <input v-model="form.url" placeholder="https://..." />
            <input v-model.number="form.intervalSec" type="number" />
            <button type="submit">Добавить</button>
        </form>

        <ul>
            <li v-for="m in monitors" :key="m.id">
                {{ m.name }} - {{ m.url }} - {{ m.lastStatus }}
            </li>
        </ul>
    </div>
</template>