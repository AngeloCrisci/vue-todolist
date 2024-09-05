console.log('JS OK')

const { createApp } = Vue;


createApp({
    data(){
        return {
            newTodoItem: '',
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
        removeDone(index){
            this.toDoList.splice(index, 1)
        },

        addNewToDoItem(){
            if(this.newTodoItem.trim() !== ''){
                this.toDoList.push({
                    item: this.newTodoItem,
                    done: false,
                });
                this.newTodoItem = '';
            }
        }
     }


  }).mount('#app')
