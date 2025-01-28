<script setup>
const props = defineProps(["event"])
</script>

<template>
  <div class="register-container">
    <h1>Register for {{ event.title || "this event" }}</h1>
    <p class="register-description">
      Be a part of something impactful! Register now to secure your spot and join us for an unforgettable experience. Details about registration and participation will be available soon.
    </p>
  </div>
</template>

<style scoped>
.register-container {
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

.register-container h1 {
  font-size: 24px;
  font-weight: 700;
  color: #0d47a1;
  margin-bottom: 20px;
}

.register-description {
  font-size: 16px;
  line-height: 1.6;
}
</style>
