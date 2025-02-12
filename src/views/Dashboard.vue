<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const dashboardCards = [
  {
    title: 'Forms',
    subtitle: 'Manage Your Forms',
    icon: 'mdi-form-select',
    color: 'primary',
    route: { name: 'Forms' },
    description: 'View and manage all your form submissions'
  },
  {
    title: 'Analytics',
    subtitle: 'View Statistics',
    icon: 'mdi-chart-bar',
    color: 'success',
    route: { name: 'Analytics' },
    description: 'Track form performance and user engagement'
  },
  {
    title: 'Settings',
    subtitle: 'Configure Dashboard',
    icon: 'mdi-cog',
    color: 'info',
    route: { name: 'Settings' },
    description: 'Customize your dashboard preferences'
  }
];

const navigateTo = (route) => {
  router.push(route);
};
</script>

<template>
  <v-container>
    <v-row>
		
      <v-col cols="12">
        <h1 class="text-h4 mb-6"><v-icon icon="mdi-view-dashboard"></v-icon>Dashboard</h1>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col
        v-for="card in dashboardCards"
        :key="card.title"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          :color="card.color"
          theme="dark"
          class="h-100"
          @click="navigateTo(card.route)"
          style="cursor: pointer"
        >
          <v-card-item>
            <template v-slot:prepend>
              <v-icon
                size="large"
                :icon="card.icon"
                class="mr-3"
              ></v-icon>
            </template>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            {{ card.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn variant="outlined">
              Open {{ card.title }}
              <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>