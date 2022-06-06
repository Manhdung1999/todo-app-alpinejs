function todoList() {
  return {
    isEdit: "true",
    todoNameInput: "",
    todoDateInput: "",
    todoPriorityInput: "Low",
    newTodo: {},
    editTodo: {},
    isTrue: true,
    isSortName: false,
    isSortDescription: false,
    isSortDueDate: false,
    isSortPriority: false,
    inputSearchData:'',
    selectSearchData:'Name',
    todos: JSON.parse(localStorage.getItem("data")) || [],
    timeout : null,
    convertDate(date) {
      let dd = new Date(date).getDate();
      let mm = new Date(date).getMonth() + 1;
      let yyyy = new Date(date).getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      date = dd + "/" + mm + "/" + yyyy;

      return date;
    },
    addTodo() {
      if (this.todoNameInput.length > 0 && this.todoDateInput.length > 0) {
        newTodo = {
          id: Math.floor(Math.random() * 10000),
          name: this.todoNameInput,
          description: this.todoNameInput + " description",
          dueDate: this.todoDateInput,
          priority: this.todoPriorityInput,
        };
        this.todos.push(newTodo);
        localStorage.setItem("data", JSON.stringify(this.todos));
      }
      this.todoDateInput = "";
      this.todoNameInput = "";
      this.todoPriorityInput = "Low";
      this.defaultSort();
    },
    deleteTodo(id) {
      let data = [...this.todos];
      data = data.filter((todo) => todo.id !== id);
      this.todos = [...data];
      localStorage.setItem("data", JSON.stringify(this.todos));
    },
    setEditTodo(todo) {
      this.editTodo = todo;
    },
    handleEditTodo() {
      let data = [...this.todos];
      let objIndex = data.findIndex((item) => item.id === this.editTodo.id);
      data[objIndex] = this.editTodo;
      this.todos = data;
      localStorage.setItem("data", JSON.stringify(this.todos));
      this.editTodo = {};
      this.defaultSort();
    },
    defaultSort() {
      let status = {
        High: 1,
        Normal: 2,
        Low: 3,
      };
      this.todos.sort((a, b) => status[a.priority] - status[b.priority]);
    },
    sortByName() {
      if (this.isSortName) {
        this.todos = this.todos.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        this.isSortName = false;
      } else {
        this.todos = this.todos.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        this.isSortName = true;
      }
    },
    sortByDescription() {
      if (this.isSortDescription) {
        this.todos = this.todos.sort((a, b) => {
          if (a.description > b.description) {
            return 1;
          }
          if (a.description < b.description) {
            return -1;
          }
          return 0;
        });
        this.isSortDescription = false;
      } else {
        this.todos = this.todos.sort((a, b) => {
          if (a.description > b.description) {
            return -1;
          }
          if (a.description < b.description) {
            return 1;
          }
          return 0;
        });
        this.isSortDescription = true;
      }
    },
    sortByDueDate() {
      if (this.isSortDueDate) {
        this.todos = this.todos.sort((a, b) => {
          if (a.dueDate > b.dueDate) {
            return 1;
          }
          if (a.dueDate < b.dueDate) {
            return -1;
          }
          return 0;
        });
        this.isSortDueDate = false;
      } else {
        this.todos = this.todos.sort((a, b) => {
          if (a.dueDate > b.dueDate) {
            return -1;
          }
          if (a.dueDate < b.dueDate) {
            return 1;
          }
          return 0;
        });
        this.isSortDueDate = true;
      }
    },
    sortByPriority() {
      if (this.isSortPriority) {
        this.todos = this.todos.sort((a, b) => {
          if (a.priority > b.priority) {
            return 1;
          }
          if (a.priority < b.priority) {
            return -1;
          }
          return 0;
        });
        this.isSortPriority = false;
      } else {
        this.todos = this.todos.sort((a, b) => {
          if (a.priority > b.priority) {
            return -1;
          }
          if (a.priority < b.priority) {
            return 1;
          }
          return 0;
        });
        this.isSortPriority = true;
      }
    },
    handleSearchTodo(){
      clearTimeout(this.timeout);
      const _this = this;
      this.timeout = setTimeout(function () {
        _this.todos = JSON.parse(localStorage.getItem("data")) || [];
        _this.todos = _this.todos.filter(todo => todo.name.includes(_this.inputSearchData)|| todo.description.includes(_this.inputSearchData));
    }, 300);  
    },
  };
}
