import { createApp } from 'vue'
import App from './App.vue'
import Aura from "@primevue/themes/aura";
import PrimeVue from 'primevue/config';
import { Button, DataTable } from 'primevue';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});

app.component('DataTable', DataTable);
app.component('Button', Button);

app.mount('#app');
