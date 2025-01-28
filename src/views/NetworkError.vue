<template>
  <div class="network-error-container">
    <h1 class="error-title">Uh–Oh!</h1>
    <h3 class="error-message">
      It looks like you're experiencing some network issues.
      Take a breath and
      <a href="#" @click.prevent="$router.go(-1)" class="retry-link">click here</a>
      to try again.
    </h3>
  </div>
</template>

<style scoped>
.network-error-container {
  text-align: center;
  padding: 50px;
  background-color: #fff3cd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ffeeba;
}

.error-title {
  font-size: 3rem;
  color: #d9534f;
  margin-bottom: 10px;
}

.error-message {
  font-size: 1.5rem;
  color: #856404;
}

.retry-link {
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid #007bff;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.retry-link:hover {
  color: #0056b3;
  border-bottom: 2px solid #0056b3;
}
</style>
