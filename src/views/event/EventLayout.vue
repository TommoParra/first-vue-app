<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import EventService from '/src/services/EventService.js'
import router from '@/router'
const props = defineProps({
  id: {
    required: true,
  },
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'eventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'eventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'eventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: #0d47a1;
  margin-bottom: 20px;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 24px;
}

#nav a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease, transform 0.2s ease;
}

#nav a:hover {
  color: #0d47a1;
  transform: scale(1.05);
}

#nav a.router-link-active {
  font-weight: 700;
  text-decoration: underline;
}

#nav span {
  color: #b0bec5;
}
</style>
