console.log(contacts);

// configurazione vue js
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        user: user,
        contacts: contacts,
    },
    methods: {},
})