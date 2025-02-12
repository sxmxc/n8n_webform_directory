<template>
	<v-container class="fill-height">
	  <v-row align="center" justify="center">
		<v-col cols="12" sm="8" md="6">
		  <v-card class="text-center pa-5">
			<v-card-title class="text-h4">404 - Page Not Found</v-card-title>
			<v-card-text>
			  <p>The page you're looking for doesn't exist.</p>
			</v-card-text>
			<v-card-actions class="justify-center">
			  <v-btn color="primary" :to="{ name: 'Dashboard' }">
				Return to Dashboard
			  </v-btn>
			</v-card-actions>
		  </v-card>
		</v-col>
	  </v-row>
	</v-container>
  </template>