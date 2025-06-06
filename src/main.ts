import { createApp } from 'vue'
import App from './App.vue'
import Aura from "@primeuix/themes/aura";
import PrimeVue from 'primevue/config';
import { Button, DataTable, Menubar } from 'primevue';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.has-dark-mode',
            cssLayer: false
        }
    },
});

app.component('Menubar', Menubar)
app.component('DataTable', DataTable);
app.component('Button', Button);

app.mount('#app');
