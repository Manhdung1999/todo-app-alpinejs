function todoList(){
    
    return{
        todoNameInput:"",
        todoDateInput:'',
        todoPriorityInput:'High',
        newTodo : {},
        editTodo: {},
        todos : JSON.parse(localStorage.getItem('data')) || [],
         addTodo(){
             if(this.todoNameInput.length > 0 && this.todoDateInput.length> 0){
                let dd = new Date(this.todoDateInput).getDate();
            let mm = new Date(this.todoDateInput).getMonth() +1;
            let yyyy = new Date(this.todoDateInput).getFullYear();
            console.log(mm);
            if(dd< 10 ) {dd = '0'+ dd;}
            if(mm< 10 ) {mm = '0'+ mm;}
            date = dd + '/' + mm +'/'+yyyy;
            newTodo = {
                id:Math.floor(Math.random()*10000),
                name:this.todoNameInput,
                description: this.todoNameInput + 'description',
                dueDate: date,
                priority:this.todoPriorityInput
            }
                this.todos.push(newTodo);
                localStorage.setItem('data', JSON.stringify(this.todos));
             }
            this.todoDateInput = '';
            this.todoNameInput = '';
            this.todoPriorityInput = 'High';
        },
        deleteTodo(id){
            let data = [...this.todos];
            data = data.filter(todo => todo.id !== id);
            console.log(data);
            this.todos = [...data];
        },
        setEditTodo(todo){
            this.editTodo = {...todo}
        }
    };
}
