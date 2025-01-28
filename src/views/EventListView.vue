<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'

const props = defineProps(['page'])

const events = ref(null)
const totalEvents = ref(0)

const page = computed(() => props.page)
const totalPages = ref(0);

const hasNextPage = computed(() => {
  return page.value < totalPages.value && events.value?.length > 0;
});

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(4, page.value)
  .then((response) => {
    events.value = response.data
    totalEvents.value = response.headers['x-total-count']
    totalPages.value = Math.ceil(response.headers['x-total-count'] / 4);
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
    <!-- Introductory Text -->
    <section class="intro">
      <p>
        Welcome to <strong>Events For Good</strong>, a platform dedicated to promoting events that bring positive change to the world.
        From charity fundraisers to community workshops, explore opportunities to connect, contribute, and make a difference.
      </p>
      <p>
        Browse our curated list of impactful events, or host your own to inspire change. Together, we can create a better future.
      </p>
    </section>

    <!-- Event List -->
    <div class="events">
      <!-- Show placeholders when events are null -->
      <template v-if="!events">
        <div class="placeholder-card" v-for="n in 4" :key="n">
          <div class="placeholder-title shimmer"></div>
          <div class="placeholder-date shimmer"></div>
          <div class="placeholder-desc shimmer"></div>
        </div>
      </template>

      <!-- Render events when available -->
      <template v-else>
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </template>

      <!-- Pagination -->
      <div class="pagination">
        <router-link
          class="page-prev"
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >&#60; Previous</router-link
        >

        <router-link
          v-for="p in totalPages"
          :key="p"
          :to="{ name: 'event-list', query: { page: p } }"
          :class="{ active: p === page }"
          >{{ p }}</router-link
        >

        <router-link
          class="page-next"
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          >Next &#62;</router-link
        >
      </div>
    </div>
  </div>
</template>


<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.events .event-link {
  flex: 1 1 100%;
  max-width: 100%;

  background-color: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.events .event-link:hover {
  background-color: #e3f2fd;
  transform: translateY(-4px);
}

@media (min-width: 768px) {
  .events .event-link {
    flex: 1 1 calc(50% - 16px);
    max-width: max-content;
  }
}


.pagination {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.pagination a {
  display: flex;
  gap: 4px;
  padding: 10px 16px;
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.2s ease, border-color 0.3s ease;
  text-align: center;
}

.pagination a:hover {
  background-color: #e3f2fd;
  color: #0d47a1;
  transform: scale(1.05);
  border-color: #1976d2;
}

.pagination a.active {
  background-color: #1976d2;
  color: #ffffff;
  border-color: #0d47a1;
  pointer-events: none;
}

.page-prev,
.page-next {
  font-weight: bold;
  padding: 10px 20px;
  font-size: 16px;
  color: #0d47a1;
  background-color: transparent;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.page-prev:hover,
.page-next:hover {
  background-color: #bbdefb;
  transform: scale(1.05);
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #212121;
  text-align: center;
  margin-bottom: 24px;
}

.home {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.events > * {
  max-width: 600px;
}

/* Placeholder styling */
.placeholder-card {
  padding: 20px;
  width: 100%;
  max-width: 150px;
  min-height: 150px;
  border: 2px solid #e3f2fd;
  border-radius: 12px;
  background-color: #e3f2fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.placeholder-title {
  height: 20px;
  width: 70%;
  border-radius: 4px;
  background: #e0e0e0;
}

.placeholder-date {
  height: 16px;
  width: 50%;
  border-radius: 4px;
  background: #e0e0e0;
}

.placeholder-desc {
  height: 14px;
  width: 90%;
  border-radius: 4px;
  background: #e0e0e0;
}

/* Shimmer effect remains unchanged */
.shimmer {
  background: linear-gradient(
    to right,
    #e0e0e0 0%,
    #f7f7f7 50%,
    #e0e0e0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s linear infinite;
}

.intro {
  margin-bottom: 32px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  line-height: 1.8;
}

.intro p {
  font-size: 18px;
  margin-bottom: 16px;
}

.intro strong {
  color: #1976d2;
}


@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}


@media (min-width: 768px) {
  .pagination a {
    font-size: 18px;
    padding: 12px 20px;
  }

  .page-prev,
  .page-next {
    padding: 12px 24px;
  }
}

</style>
