<script setup>
import { ref, onMounted } from 'vue'
import EventService from '/src/services/EventService.js'

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
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister', params: { id } }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }">Edit</router-link>
    </div>
    <p>Edit the event here</p>
  </div>
</template>
