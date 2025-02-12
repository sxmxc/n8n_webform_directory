<script setup>
import { ref } from 'vue'
	const drawer = ref(null)
</script>
<template>
<v-app-bar image="https://picsum.photos/1920/1080?random" density="prominent" elevation="8">
	<template v-slot:image>
          <v-img
            gradient="to top right, rgba(255,143,0,.8), rgba(110,62,0,.2)"
          ></v-img>
    </template>
	<template v-slot:prepend>
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
	
	<v-app-bar-title>📋 Form Directory</v-app-bar-title>
	<v-spacer></v-spacer>
	<!-- <v-btn icon>
		<v-icon>mdi-magnify</v-icon>
	</v-btn>
	<v-btn icon>
		<v-icon>mdi-heart</v-icon>
	</v-btn>
	<v-btn icon>
		<v-icon>mdi-dots-vertical</v-icon>
	</v-btn> -->
</v-app-bar>



<v-navigation-drawer v-model="drawer" temporary>        
	<!--  -->
</v-navigation-drawer>

</template>
<script>
  export default {
    data: () => ({ drawer: null, error: null }),
  }
</script>