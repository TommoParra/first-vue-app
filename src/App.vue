<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
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
</style>

