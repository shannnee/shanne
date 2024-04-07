<template>
  <div id="app">
    <header>
      <h1 class="portfolio-heading">Welcome</h1>
      <button @click="toggleNav" class="menu-btn">&#9776;</button>
      <nav v-if="showNav" class="nav-links">
        <router-link :class="{ 'active': activeTab === 'home' }" to="/home" @click="closeNav">Home</router-link>
        <router-link :class="{ 'active': activeTab === 'about' }" to="/about" @click="closeNav">About</router-link>
        <router-link :class="{ 'active': activeTab === 'projects' }" to="/projects" @click="closeNav">Skills</router-link>
        <router-link :class="{ 'active': activeTab === 'contact' }" to="/contact" @click="closeNav">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 </p>
      <a href="mailto:sharonandrin@gmail.com">
        <i class="far fa-envelope"></i>
      </a>
      <a href="tel:09704680599">
        <i class="fas fa-phone-alt"></i>
      </a>
      <a href="https://www.instagram.com/sha_nne0?igsh=MWlzem1xN3RvbzM5bw==">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/shanne.dy.7">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.tiktok.com/@annedrin19?_t=8lIxFsRuD5d&_r=1">
        <i class="fab fa-tiktok"></i>
      </a>
      <a href="https://x.com/PinoteShar92381?t=5SC-vcEYAfkrx5ZiBzC-jw&s=07">
        <i class="fab fa-twitter"></i>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showNav: false,
      activeTab: ''
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
      if (!this.showNav) {
        this.activeTab = '';
      }
    },
    closeNav() {
      this.showNav = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: green;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
}

.portfolio-heading {
  margin: 0 auto;
}

.menu-btn {
  color: #fff;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
}

nav {
  display: flex;
  justify-content: center;
  margin-left: 20px; /* Adjust margin for positioning */
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

nav a.active {
  color: yellow; /* Change color for active link */
}

nav a:hover {
  color: black; /* Change color on hover */
}

main {
  padding: 20px;
}

footer {
  background-color: #333;
  color: greenyellow;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3%;
  text-align: center;
  display: flex;
  justify-content: center; /* Align items to the right */
}

footer i {
  font-size: 20px; /* Adjust icon size */
  margin-left: 20px; /* Add spacing between icons */
  color: greenyellow;
}
</style>
