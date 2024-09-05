console.log('JS OK')

const { createApp } = Vue;


createApp({
    data(){
        return {
            NewTodoItem: {item: '', done: ''},
            toDoList: [
                {item: 'Fare la spesa', done: true},
                {item: 'Controllare il contatore', done: false},
                {item: 'Pagare la bolleta', done: true},
                {item: 'Fare i compiti a casa', done: false},
                {item: 'Giocare alla play', done: true},
                {item: 'Chiamare nonna', done: false},
            ]
        }
     },

     methods: {
        AddDone
     }


  }).mount('#app')
