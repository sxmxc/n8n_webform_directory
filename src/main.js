import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Import Vuetify styles
import * as components from "vuetify/components"; // Import Vuetify components
import * as directives from "vuetify/directives"; // Import Vuetify directives
import "@mdi/font/css/materialdesignicons.css"; // Import MDI icons
import { md3 } from "vuetify/blueprints";

const voidLightTheme = {
	dark: false,
	colors: {
		background: "#ffffff",
		surface: "#f5f5f5",
	},
	variables: {},
};
const voidDarkTheme = {
	dark: true,
	colors: {
		background: "#343837",
		surface: "#1e1e1e",
		primary: "#ff8f00cc",
		secondary: "#03dac6",
	},
	variables: {},
};

const vuetify = createVuetify({
	// blueprint: md3,
	components,
	directives,
	theme: {
		defaultTheme: "voidDarkTheme",
		themes: {
			voidDarkTheme,
			voidLightTheme,
		},
	},
	icons: {
		defaultSet: "mdi",
		iconfont: "mdi",
	},
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app')
