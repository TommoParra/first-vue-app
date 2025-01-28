<script setup>
const props = defineProps(["event"])
</script>

<template>
  <div class="event-details">
    <h1>{{ event.title || "Event Title Placeholder" }}</h1>
    <p class="event-meta">
      {{ event.time || "00:00" }} on {{ event.date || "YYYY-MM-DD" }} @ {{ event.location || "Location Placeholder" }}
    </p>
    <p class="event-description">
      {{ event.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula nisi eu enim volutpat, sit amet pharetra justo vehicula. Suspendisse euismod sapien et nisl consectetur fermentum. Lorem ipsum dolor sit amet consectetur." }}
    </p>
    <div class="event-tags">
      <span v-for="tag in event.tags || ['Community', 'Charity', 'Workshop']" :key="tag" class="event-tag">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  color: #39495c;
  line-height: 1.8;
  text-align: justify;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.event-details h1 {
  font-size: 28px;
  font-weight: 700;
  color: #0d47a1;
  margin-bottom: 20px;
  text-align: center;
}

.event-meta {
  font-size: 16px;
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 20px;
  text-align: center;
}

.event-description {
  font-size: 15px;
  font-weight: 400;
  color: #39495c;
  margin-bottom: 30px;
  text-align: center;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.event-tag {
  background-color: #1976d2;
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
