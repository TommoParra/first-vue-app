<script setup>
const props = defineProps(["event"])
</script>

<template>
  <div class="edit-container">
    <h1>Edit Details for {{ event.title || "this event" }}</h1>
    <p class="edit-description">
      Review and refine your event details to ensure everything looks great. Make sure your title, time, location, and description are clear and accurate.
    </p>
    <div class="event-details">
      <p><strong>Title:</strong> {{ event.title || "Event Title Placeholder" }}</p>
      <p><strong>Date:</strong> {{ event.date || "YYYY-MM-DD" }}</p>
      <p><strong>Time:</strong> {{ event.time || "00:00" }}</p>
      <p><strong>Location:</strong> {{ event.location || "Location Placeholder" }}</p>
      <p><strong>Description:</strong> {{ event.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula nisi eu enim volutpat, sit amet pharetra justo vehicula." }}</p>
    </div>
  </div>
</template>

<style scoped>
.edit-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  color: #39495c;
  text-align: center;
}

.edit-container h1 {
  font-size: 24px;
  font-weight: 700;
  color: #0d47a1;
  margin-bottom: 20px;
}

.edit-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.event-details {
  text-align: left;
  font-size: 16px;
  line-height: 1.8;
}

.event-details p {
  margin-bottom: 12px;
}

.event-details strong {
  color: #1976d2;
}
</style>
