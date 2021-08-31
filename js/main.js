// configurazione plugin dayjs
dayjs.extend(dayjs_plugin_customParseFormat);

// configurazione vue js
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        currentChat: 0,
        currentContact: 'Michele',
        currentImg: '_5',
        newMessage: '',
        searchedContact: '',
        lastMessage: '',
        user: {
            name: 'Nome Utente',
            avatar: '_1',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Azzurra',
                avatar: '_io',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    },
                ],
            },
        ],
    },
    methods: {
        changeChat(index) {
            this.currentContact = this.contacts[index].name;
            this.currentImg = this.contacts[index].avatar;
            this.currentChat = index;
            this.getLastMessage();
        },
        // function to send a message
        sendMessage() {

            const userMessage = {
                message: this.newMessage,
                status: 'sent',
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            }

            if (!this.newMessage) {
                return;
            } else {
                this.contacts[this.currentChat].messages.push(userMessage);
                this.newMessage = '';
            }

            // risposta cpu dopo un secondo
            setTimeout(this.receiveMessage, 3000);
        },
        // function to receive message from cpu
        receiveMessage() {

            index = this.currentChat;

            const cpuMessage = {
                message: 'ok',
                status: 'received',
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            }

            this.contacts[this.currentChat].messages.push(cpuMessage);
        },
        showContact(contact) {

            if (this.searchedContact.trim() === '') {
                return true;
            }
            // lower word to confront them in the correct way
            const filter = this.searchedContact.trim().toLowerCase();
            contact = contact.name.toLowerCase();

            return contact.includes(filter);

        },
        deleteMessage(index) {
            this.contacts[this.currentChat].messages.splice(index, 1);
        }
    },
});