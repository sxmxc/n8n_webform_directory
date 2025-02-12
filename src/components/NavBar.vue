<script setup>
import { ref } from 'vue'
const drawer = ref(null)
const navigationItems = [
	{
		title: 'Dashboard',
		icon: 'mdi-view-dashboard',
		route: { name: 'Dashboard' }
	},
	{
		title: 'Forms',
		icon: 'mdi-form-select',
		route: { name: 'Forms' }
	},
	{
		title: 'Analytics',
		icon: 'mdi-chart-bar',
		route: { name: 'Analytics' }
	},
	{
		title: 'Settings',
		icon: 'mdi-cog',
		route: { name: 'Settings' }
	}
];
</script>
<template>
	<v-app-bar image="https://picsum.photos/1920/1080?random" density="prominent" elevation="8">
		<template v-slot:image>
			<v-img gradient="to top right, rgba(255,143,0,.8), rgba(110,62,0,.2)"></v-img>
		</template>
		<template v-slot:prepend>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title>Voidmoose Dashboard</v-app-bar-title>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-account</v-icon>
		</v-btn>
	</v-app-bar>



	<v-navigation-drawer v-model="drawer" temporary>
		<v-list>
			<v-list-item prepend-avatar="https://via.placeholder.com/40" title="Admin User"
				subtitle="admin@example.com">
			</v-list-item>
		</v-list>
		<v-divider></v-divider>
		<v-list density="compact" nav>
			<v-list-item v-for="item in navigationItems" :key="item.title" :value="item.title" :to="item.route">
				<template v-slot:prepend>
					<v-icon :icon="item.icon"></v-icon>
				</template>

				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item>
		</v-list>
		<template v-slot:append>
			<div class="pa-2">
				<v-btn block color="primary">
					<v-icon icon="mdi-logout" class="mr-2"></v-icon>
					Logout
				</v-btn>
			</div>
		</template>
		<!--  -->
	</v-navigation-drawer>

</template>
<script>
export default {
	data: () => ({ drawer: null, error: null }),
}
</script>