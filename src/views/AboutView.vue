<template>
  <div class="about">
    <section class="about-hero">
      <h1>Making the World a Better Place, One Event at a Time</h1>
      <p>
        Welcome to Events for Good, where we connect people and communities through events that inspire change, foster connections, and make a difference. Whether you're organizing an event or looking for opportunities to contribute, you've come to the right place.
      </p>
    </section>
    <section class="about-content">
      <div class="content-item">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a platform that empowers individuals, organizations, and communities to host and participate in events that drive meaningful impact. From charity drives to educational workshops, every event has the power to change lives.
        </p>
      </div>
      <div class="content-item">
        <h2>What We Offer</h2>
        <ul>
          <li>Browse events by category, date, or location.</li>
          <li>Organize and promote your own events seamlessly.</li>
          <li>Connect with like-minded individuals and organizations.</li>
        </ul>
      </div>
      <div class="content-item">
        <h2>Join Us</h2>
        <p>
          Be a part of a growing community that's committed to making a difference. Whether you're a volunteer, an attendee, or an organizer, there's a place for you here.
        </p>
        <p>Sign up today and start your journey towards positive change.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #39495c;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  margin-bottom: 40px;
}

.about-hero h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 16px;
}

.about-hero p {
  font-size: 18px;
  line-height: 1.6;
  color: #2c3e50;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-item h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0d47a1;
}

.content-item p,
.content-item ul {
  font-size: 16px;
  line-height: 1.6;
  color: #39495c;
}

.content-item ul {
  padding-left: 20px;
  list-style: disc;
}

.content-item ul li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .about {
    padding: 20px;
  }

  .about-hero h1 {
    font-size: 24px;
  }

  .content-item h2 {
    font-size: 20px;
  }
}
</style>
