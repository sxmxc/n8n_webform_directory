<script setup>
import { ref, onMounted } from "vue";

const API_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;
const forms = ref([]);
const loading = ref(true);

const fetchForms = async () => {
	try {
		const response = await fetch(API_URL);
		const json = await response.json();
		forms.value = json.data.map((form) => ({
			name: form["Form Name"],
			url: form["Form URL"],
		}));
	} catch (error) {
		console.error("Error fetching forms:", error);
	} finally {
		loading.value = false;
	}
};
onMounted(fetchForms);
</script>

<template>
	<v-container fluid>
		<v-row v-if="error">
			<v-col cols="12">
				<v-alert type="error" outlined>
					{{ error }}
				</v-alert>
			</v-col>
		</v-row>
		<v-row class="text-h5 text-center">
			<v-col cols="12">
				<div>📋 Forms</div>
			</v-col>	
		</v-row>
		<v-row v-if="loading">
			<v-col cols="12">
				<v-progress-linear height="12" indeterminate color="primary" class="my-4"></v-progress-linear>
				<v-skeleton-loader type="card" class="mx-auto" max-width="448"></v-skeleton-loader>
			</v-col>
		</v-row>
		
		<v-row v-else-if="forms.length === 0">
			<v-col cols="12">
				<v-alert type="info" outlined>
					No forms found. Please check back later.
				</v-alert>
			</v-col>
		</v-row>
		<v-row v-else dense>
				<v-col v-for="(form, index) in forms" :key="index" class="mt-2" cols="12">
					<v-card outlined :title="`${form.name}`" class="mx-auto" max-width="448" elevation="8">
						<v-card-actions>
							<v-btn class="mx-auto" :href="form.url" target="_blank" text color="primary">
								Open
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
		</v-row>
	</v-container>
</template>
<script>
  export default {
    data: () => ({ error: null }),
  }
</script>
