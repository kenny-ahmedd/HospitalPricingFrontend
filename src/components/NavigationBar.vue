<template>
  <nav class="navigation">
    <div class="toggle-buttons">
      <button v-if="isLoggedIn" class="toggle-btn" :class="{ active: activeButton === 'home' }" @click="setActiveButton('home')">HealthMap Chat</button>
      <button v-if="isLoggedIn" class="toggle-btn" :class="{ active: activeButton === 'hospital-charges' }" @click="setActiveButton('hospital-charges')">Query Hospital Charges</button>
      <button v-if="isLoggedIn" class="toggle-btn" :class="{ active: activeButton === 'socialmedia' }" @click="setActiveButton('socialmedia')">Social Media</button>
      <button v-if="!isLoggedIn" class="toggle-btn" :class="{ active: activeButton === 'login' }" @click="setActiveButton('login')">Login</button>
      <button v-if="!isLoggedIn" class="toggle-btn" :class="{ active: activeButton === 'register' }" @click="setActiveButton('register')">Register</button>
      <button v-if="isLoggedIn" class="toggle-btn-logout" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser']), // Map currentUser getter from Vuex store
    ...mapState(['activeButton']),
    isLoggedIn() {
      return !!this.currentUser; // Check if user is logged in
    }
  },
  methods: {
    ...mapActions(['logoutUser']), // Map logoutUser action from Vuex store
    logout() {
      this.logoutUser(); // Call logoutUser action when logout button is clicked
    },
    setActiveButton(button) {
      if (this.activeButton !== button) {
        this.$store.commit('setActiveButton', button);
      }
      this.$store.commit('setActiveButton', button);
      if (button === 'home') {
        this.$router.push('/');
      } else if (button === 'hospital-charges') {
        this.$router.push('/hospital-charges');
      } else if (button === 'login') {
        this.$router.push('/login');
      }
      else if (button === 'register') {
        this.$router.push('/register');
      }
      else if (button === 'socialmedia') {
        this.$router.push('/socialmedia');
      }
    },
  },
};
</script>

<style scoped>
.navigation {
  background-color: #f8f9fa;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.toggle-btn {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.toggle-btn-logout {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.toggle-btn-logout:hover {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: red;
  color: white;
}

.toggle-btn:hover {
  background-color: #e0e0e0;
}

.toggle-btn.active {
  background-color: #4CAF50;
  color: white;
}
</style>