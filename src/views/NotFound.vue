<script setup>
defineProps ({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <div class="not-found-container">
    <h1 class="error-title">Oops!</h1>
    <h3 class="error-message">The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list' }" class="home-link">
      Back to the home page
    </router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  text-align: center;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

.error-title {
  font-size: 3rem;
  color: #dc3545;
  margin-bottom: 10px;
}

.error-message {
  font-size: 1.5rem;
  color: #6c757d;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
}
</style>
