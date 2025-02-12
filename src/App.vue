<script setup>
import FormDashboard from "./views/Forms.vue";
import NavBar from "./components/NavBar.vue";
import { useTheme } from "vuetify";
import { ref } from "vue";

const theme = useTheme();
const isDark = ref(theme.global.name.value === "voidDarkTheme");

const toggleTheme = () => {
	isDark.value = !isDark.value;
	theme.global.name.value = isDark.value ? "voidDarkTheme" : "voidLightTheme";
};

</script>
<template>
  <v-responsive class="border rounded">
    <v-app :theme='theme.global.name.value'>
      <v-system-bar :theme='isDark ? "dark" : "light"'>
        <v-spacer></v-spacer>

        <v-icon>mdi-square</v-icon>

        <v-icon>mdi-circle</v-icon>

        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>
      <NavBar />
      <v-main>
        <router-view></router-view>
      </v-main>
      		<!-- Floating Theme Switcher -->
		  <v-btn class="theme-switcher" icon @click="toggleTheme" color="primary">
			  <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
		  </v-btn>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.theme-switcher {
	position: fixed;
	bottom: 20px;
	right: 20px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
</style>