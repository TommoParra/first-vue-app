<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'

const props = defineProps(['page'])

const events = ref(null)
const totalEvents = ref(0)

const page = computed(() => props.page)
const totalPages = ref(0);

const hasNextPage = computed(() =>{
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
  .then((response) => {
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
    totalPages.value = Math.ceil(response.headers['x-total-count'] / 2);
  })
  .catch((error) => {
    console.log(error)
  })
  })

})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="home">
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <router-link class="page-prev" :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page !=1">&#60; Previous</router-link>

        <router-link v-for="p in totalPages" :key="p" :to="{ name: 'event-list', query: { page: p } }" :class="{ active: p === page }">{{ p }}</router-link>

        <router-link class="page-next" :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">Next &#62;</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.pagination a {
  padding: 8px 12px;
  text-decoration: none;
  color: #2c3e50;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.pagination a:hover {
  background-color: #f0f0f0;
}

.pagination a.active {
  background-color: #2c3e50;
  color: white;
}

.page-prev {
  margin-right: auto;
}

.page-next {
  margin-left: auto;
}
</style>
