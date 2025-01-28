<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(["event"]);
const router = useRouter();
const GStore = inject('GStore')
const register = () => {
    //api logic
    GStore.flashMessage = 'You are successfully registered for' + event.title
    setTimeout(() =>{
      GStore.flashMessage = ''
    }, 3000)
    router.push({
      name: 'eventDetails'
    })
}
</script>

<template>
  <div class="register-container">
    <h1>Register for {{ event.title || "this event" }}</h1>
    <p class="register-description">
      Be a part of something impactful! Register now to secure your spot and join us for an unforgettable experience. Details about registration and participation will be available soon.
    </p>
    <button @click="register">Register Me!</button>
  </div>
</template>

<style scoped>
.register-container {
  display: grid;
  row-gap: 20px;
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
}

.register-description {
  font-size: 16px;
  line-height: 1.6;
}

button {
  width: 196px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 20px;
  color: white;
  background-color: #1976d2;
  border: 2px solid #0d47a1;
  font-size: 1.25rem;
  line-height: 1.5rem;
  transition: .25s;
  cursor: pointer;
}

button:hover {
  background-color: #0d47a1;
  border: 2px solid #1976d2;
  letter-spacing: 1.5px;
}
</style>
