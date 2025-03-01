<template>
	<v-container fluid>
		<v-row class="text-h5 text-center">
			<v-col cols="12">
				<div>📊 Analytics</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-alert type="info" outlined>
					Analytics data will be displayed here.
				</v-alert>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-progress-linear height="12" indeterminate color="primary" class="my-4"></v-progress-linear>
				<v-skeleton-loader type="card" class="mx-auto" max-width="448"></v-skeleton-loader>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const API_URL = import.meta.env.VITE_INFLUXDB_URL; // Placeholder URL
const data = ref([]);
const loading = ref(true);

const fetchData = async () => {
	try {
		const response = await fetch(API_URL);
		const json = await response.json();
		data.value = json.data; // Placeholder for actual data processing
	} catch (error) {
		console.error("Error fetching data:", error);
	} finally {
		loading.value = false;
	}
};

onMounted(fetchData);
</script>

<style scoped>
/* Add any custom styles here */
</style>