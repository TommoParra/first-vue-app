<script setup>
import { inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const GStore = inject('GStore')
</script>

<template>
  <div id="layout">
    <div class="flashMessage" v-if="GStore.flashMessage">
      <p>{{ GStore.flashMessage }}</p>
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{name: 'event-list'}">Events</RouterLink>
          <div class="nav_separator"></div>
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  background-color: #1976d2;
  padding: 20px 0;
  color: white;
  border-bottom: 3px solid #0d47a1;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

nav {
  display: flex;
  gap: 20px;
  margin: auto;
}

.nav_separator {
  width: 1px;
  height: 24px;
  background-color: #e3f2fd;
  margin: 0 10px;
  align-self: center;
  opacity: 0.7;
}

nav a {
  font-size: 18px;
  font-weight: 600;
  color: #e3f2fd;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

nav a:hover {
  background-color: #bbdefb;
  color: #0d47a1;
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  background-color: #ffffff;
  color: #1976d2;
  pointer-events: none;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }

  nav {
    flex-direction: column;
    gap: 10px;
  }
}

.flashMessage {
  position: fixed;
  top: 20px;
  left: 10%;
  background-color: #4caf50; /* Success green */
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease, fadeOut 0.5s ease 4s forwards;
  z-index: 1000;
  max-width: 80%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Fade out animation */
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}


</style>

