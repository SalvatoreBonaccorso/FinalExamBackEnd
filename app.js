var vue = new Vue({
    el: '#app',
    data: {
        title:"Welcome in ToDo by Salvatore Bonaccorso",
        todos: [],
        name:"",
        description:"",
        completed: "",
        assignedTo:"",
        Id:""
    },
    methods: {
       // function step
        view: function() {
            var url = 'https://todos-list-sj.herokuapp.com/todos';
            this.$http.get(url)
            .then(response => {
                this.todos = response.body;
                return this.todos;
            })
            .catch(error => { console.log("post error") })
        },
        // function 1 step
            newToDo:function(){    
        this.$http.post('https://todos-list-sj.herokuapp.com/todos',{
            name:this.name,
            description:this.description,
            assignedTo:this.assignedTo,
            completed:this.completed   
        })
        .then(response => { console.log(response)})
        .catch(error => { console.log("post error") })
        },
        // function 2 step
        removeToDo: function(){
            this.$http.delete('https://todos-list-sj.herokuapp.com/todos/' + this.Id, {
            Id:this.Id
            })
            .then(response => { console.log(response)})
            .catch(error => { console.log("post error") })
        },
         // function 3 step
         // function 4 step
         // function 5 step






        // function 6 step
        showUser: function() {
            this.$http.get('https://todos-list-sj.herokuapp.com/todos?byUser=' +this.assignedTo, {
                assignedTo:this.assignedTo          
            })
            .then(response => { 
                this.todos = response.body;
                console.log(response)
            })
            .catch(error => { console.log("post error") })
        },
         // function 7 step
        readListToDoCompleted: function(){
            this.$http.get('https://todos-list-sj.herokuapp.com/todos?completed=' +this.completed, {
                completed:this.completed
            
            })
            .then(response => {
                this.todos = response.body;
                console.log(response)})
            .catch(error => { console.log("post error") })
        },

        // function 8 step 

        
        created: function() {
            this.showUser();
            this.view();  
            this.readListToDoCompleted();
            this.removeToDo();        
        }
    }
})