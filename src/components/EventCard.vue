<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink class="event-link" :to="{name: 'eventDetails',params: {id: event.id}}">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 100%;
  max-width: 150px;
  min-height: 150px;
  cursor: pointer;
  border: 2px solid #1976d2;
  border-radius: 12px;
  background-color: #e3f2fd;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.event-card h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #0d47a1;
}

.event-card span {
  font-size: 14px;
  font-weight: 400;
  color: #39495c;
}

.event-card:hover {
  transform: translateY(-4px) scale(1.02);
  background-color: #bbdefb;
  border-color: #0d47a1;
}

.event-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
