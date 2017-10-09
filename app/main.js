var demo = new Vue ({

	el: '#main',

	data: {
		toDoItem: '',
		toDoList: [],
		nextTaskId: 0,
		completedList: [],
		completedTaskId: 0
	},

	methods: {

		addTask: function() {

			// Easy way
			// this.toDoList.push(this.toDoItem)
			// this.toDoItem = '';

			// More scalable way for new features

			this.toDoList.push({
				id: this.nextTaskId++,
				title: this.toDoItem,
				completed: false
			});
			this.toDoItem = '';
		},

		deleteTask: function(id) {
			var index = this.findTask(id);
  		this.toDoList.splice(index, 1);
		},

		findTask: function(id) {
			return this.toDoList.findIndex(function(toDoItem) {
				return id === toDoItem.id;
			});
		},

		completeTask: function(completed) {
			if (completed == true) {
				this.completedList.push({
					id: this.completedTaskId++,
					title: this.toDoItem,
					completed: true
				});
			}

		},

		// editTask: function() {

		// 	// NTH Ability to click into to do item and edit the name of it.

		// },

		// showHideComplete: function() {

		// 	// NTH Shows or hides the completed section and the to do's that are in it.

		// }
	}

});

// alert("hello!");